// Genera las páginas estáticas del blog (HTML indexable), sitemap.xml y robots.txt.
// Uso: node tools/generate-blog.mjs   (desde la raíz del repo)
// Cambia SITE por tu dominio real antes de publicar.
export const SITE = 'https://www.superpromo.online/';

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = t => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const fmt = d => { const m = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']; const [y, mo, da] = d.split('-').map(Number); return da + ' de ' + m[mo - 1] + ' de ' + y; };
const WA = 'https://chat.whatsapp.com/L5nBzKX1CcNCQRZPG4LQ64?mode=gi_t';

const CSS = `*,*::before,*::after{box-sizing:border-box}html{-webkit-text-size-adjust:100%}body{margin:0;background:#000;color:#F1F1F1;font-family:'Poppins',system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased}a{color:#FB02AA}a:hover{color:#FF5BC8}img{max-width:100%;display:block}
.top{position:sticky;top:0;z-index:5;background:rgba(0,0,0,.85);backdrop-filter:blur(12px);border-bottom:1px solid #1E1E1E}.top div{max-width:1100px;margin:0 auto;padding:0 20px;height:64px;display:flex;align-items:center;gap:16px}.top a{color:#F1F1F1;text-decoration:none;font-weight:800;letter-spacing:-.02em;display:flex;align-items:center;gap:10px}.top a span{color:#FB02AA}.top .cta{margin-left:auto;background:#FB02AA;color:#000;font-weight:700;font-size:13px;letter-spacing:.04em;padding:10px 16px;border-radius:999px}
main{max-width:760px;margin:0 auto;padding:40px 20px 80px}main.wide{max-width:1100px}.crumbs{font-size:13px;color:#A6A6A6;display:flex;flex-wrap:wrap;gap:8px}.crumbs a{color:#A6A6A6}.kicker{margin:28px 0 0;font-size:12px;font-weight:600;letter-spacing:.14em;color:#FC6302;text-transform:uppercase}
h1{margin:12px 0 0;font-size:clamp(32px,5.4vw,54px);font-weight:800;line-height:1.02;letter-spacing:-.04em;text-wrap:balance}.lede{margin:18px 0 0;font-size:19px;line-height:1.6;color:#C4C4C4;font-weight:300}.meta{margin:16px 0 0;font-size:13px;color:#8C8C8C}
h2{margin:44px 0 0;font-size:clamp(22px,2.6vw,30px);font-weight:700;line-height:1.15;letter-spacing:-.02em}h3{margin:28px 0 0;font-size:20px;font-weight:600;line-height:1.25}p{font-size:17px;line-height:1.75;color:#D0D0D0;text-wrap:pretty}li{font-size:16px;line-height:1.65;color:#D0D0D0;margin:6px 0}
.tip{margin:28px 0 0;padding:20px 22px;border-radius:18px;background:linear-gradient(135deg,rgba(251,2,170,.12),rgba(252,99,2,.08));border:1px solid rgba(251,2,170,.3)}.tip b{display:block;font-size:11px;letter-spacing:.14em;color:#FB02AA;margin-bottom:6px}.tip p{margin:0;color:#F1F1F1;font-weight:500}
.tbl{margin:24px 0 0;overflow-x:auto;border:1px solid #262626;border-radius:16px}table{border-collapse:collapse;width:100%;min-width:480px}th{background:#181818;color:#FC6302;font-size:12px;font-weight:600;letter-spacing:.06em;text-align:left;padding:12px 14px}td{border-top:1px solid #222;padding:12px 14px;font-size:14px;line-height:1.45;color:#E6E6E6}
.rel{margin:28px 0 0;padding:18px 20px;border-radius:18px;background:#111;border:1px solid #262626}.rel b{font-size:11px;letter-spacing:.14em;color:#FC6302}.rel ul{margin:10px 0 0;padding-left:18px}.rel a{color:#F1F1F1;text-underline-offset:4px;text-decoration-color:#FB02AA}
details{border-bottom:1px solid #222}summary{cursor:pointer;padding:18px 0;font-size:16px;font-weight:600}details p{margin:0 0 18px;font-size:15px}.src li{font-size:14px;color:#8C8C8C}.src a{color:#D6D6D6}
.wa{margin-top:56px;padding:28px;border-radius:24px;background:#111;border:1px solid #262626;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between}.wa strong{font-size:22px;letter-spacing:-.03em}.wa strong span{color:#FB02AA}.wa a{background:#FB02AA;color:#000;text-decoration:none;font-weight:800;letter-spacing:.06em;padding:14px 22px;border-radius:999px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr));gap:16px;margin-top:28px}.card{display:flex;flex-direction:column;padding:22px;border-radius:22px;background:#111;border:1px solid #222;color:#F1F1F1;text-decoration:none}.card:hover{border-color:#FB02AA;color:#F1F1F1}.card small{font-size:11px;font-weight:600;letter-spacing:.12em;color:#FC6302;text-transform:uppercase}.card strong{margin-top:8px;font-size:18px;line-height:1.25}.card span{margin-top:8px;font-size:14px;line-height:1.55;color:#A6A6A6}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}.chips a{color:#E6E6E6;text-decoration:none;border:1px solid #2A2A2A;background:#111;border-radius:999px;padding:9px 16px;font-size:13px}.chips a[aria-current]{background:#F1F1F1;color:#000;border-color:#F1F1F1}
footer{border-top:1px solid #1C1C1C;background:#0A0A0A}footer div{max-width:1100px;margin:0 auto;padding:32px 20px;font-size:12px;color:#8C8C8C;line-height:1.7}footer a{color:#D6D6D6}`;

function shell({ title, desc, canonical, depth, body, ld, ogType = 'article', wide = false }) {
  const up = '../'.repeat(depth);
  return `<!DOCTYPE html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${ogType}">
<meta property="og:locale" content="es_MX">
<meta property="og:site_name" content="SuperPromo">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE}assets/brand/og-1200x630.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE}assets/brand/og-1200x630.jpg">
<meta name="theme-color" content="#000000">
<link rel="icon" type="image/png" href="${up}assets/brand/sp-mark.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>${CSS}</style>
<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>
</head>
<body>
<header class="top"><div><a href="${up}"><img src="${up}assets/brand/sp-mark.png" alt="" width="32" height="32">SUPER<span>PROMO</span></a><a class="cta" href="${WA}" target="_blank" rel="noopener">UNIRME A LA COMUNIDAD</a></div></header>
<main${wide ? ' class="wide"' : ''}>
${body}
</main>
<footer><div>© SuperPromo · México. Publicamos información y enlaces a tiendas y plataformas externas; precios y promociones dependen de cada tienda. Este contenido es informativo y no constituye asesoría financiera, fiscal ni legal. <a href="${up}#privacidad">Aviso de privacidad</a> · <a href="${up}#terminos">Términos y condiciones</a></div></footer>
</body>
</html>
`;
}

function block(b, bySlug) {
  if (b.h2) return `<h2 id="${'a-' + slugify(b.h2)}">${esc(b.h2)}</h2>`;
  if (b.h3) return `<h3>${esc(b.h3)}</h3>`;
  if (b.p) return `<p>${esc(b.p)}</p>`;
  if (b.ul) return `<ul>${b.ul.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
  if (b.ol) return `<ol>${b.ol.map(i => `<li>${esc(i)}</li>`).join('')}</ol>`;
  if (b.tip) return `<aside class="tip"><b>TIP SUPERPROMO</b><p>${esc(b.tip)}</p></aside>`;
  if (b.table) return `<div class="tbl"><table><thead><tr>${b.table.head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if (b.links) { const items = b.links.map(bySlug).filter(Boolean); return items.length ? `<nav class="rel" aria-label="Artículos relacionados"><b>LEE TAMBIÉN</b><ul>${items.map(p => `<li><a href="../${p.slug}/">${esc(p.title)}</a></li>`).join('')}</ul></nav>` : ''; }
  return '';
}

export function render(POSTS, CATEGORIES) {
  const files = {};
  const bySlug = s => POSTS.find(p => p.slug === s);
  const catOf = p => CATEGORIES.find(c => c.key === p.catKey) || CATEGORIES[0];
  const org = { '@type': 'Organization', name: 'SuperPromo', url: SITE, logo: { '@type': 'ImageObject', url: SITE + 'assets/brand/sp-logo.png' } };
  for (const p of POSTS) {
    const cat = catOf(p), url = SITE + 'blog/' + p.slug + '/';
    const toc = p.body.filter(b => b.h2).map(b => `<li><a href="#a-${slugify(b.h2)}">${esc(b.h2)}</a></li>`).join('');
    const more = POSTS.filter(o => o.slug !== p.slug && o.catKey === p.catKey).slice(0, 3);
    const body = `<nav class="crumbs" aria-label="Migas de pan"><a href="../../">Inicio</a><span aria-hidden="true">/</span><a href="../">Blog</a><span aria-hidden="true">/</span><a href="../${cat.slug}/">${esc(cat.label)}</a></nav>
<article>
<p class="kicker">${esc(cat.label)}</p>
<h1>${esc(p.title)}</h1>
<p class="lede">${esc(p.excerpt)}</p>
<p class="meta">Por Equipo SuperPromo · <time datetime="${p.published}">Publicado el ${fmt(p.published)}</time></p>
${toc ? `<nav class="rel" aria-label="En este artículo"><b>EN ESTE ARTÍCULO</b><ol>${toc}</ol></nav>` : ''}
${p.body.map(b => block(b, bySlug)).join('\n')}

<section><h2>Preguntas frecuentes</h2>${p.faq.map(f => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}</section>
</article>
<div class="wa"><strong>Las mejores ofertas <span>no esperan.</span></strong><a href="${WA}" target="_blank" rel="noopener">UNIRME AHORA</a></div>
${more.length ? `<nav aria-label="Más de ${esc(cat.label)}"><h2>Más de ${esc(cat.label)}</h2><div class="grid">${more.map(o => `<a class="card" href="../${o.slug}/"><small>${esc(cat.label)}</small><strong>${esc(o.title)}</strong><span>${esc(o.excerpt)}</span></a>`).join('')}</div></nav>` : ''}`;
    const ld = [
      { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.description, inLanguage: 'es-MX', keywords: p.keywords.join(', '),
        articleSection: cat.label, datePublished: p.published, dateModified: p.checked || p.published, author: org, publisher: org,
        image: SITE + 'assets/brand/og-1200x630.jpg', mainEntityOfPage: { '@type': 'WebPage', '@id': url } },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE + 'blog/' },
        { '@type': 'ListItem', position: 3, name: cat.label, item: SITE + 'blog/' + cat.slug + '/' },
        { '@type': 'ListItem', position: 4, name: p.title, item: url } ] },
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ];
    files['blog/' + p.slug + '/index.html'] = shell({ title: p.seoTitle, desc: p.description, canonical: url, depth: 2, body, ld });
  }
  const chips = active => `<nav class="chips" aria-label="Categorías"><a href="${active ? '../' : './'}"${active ? '' : ' aria-current="page"'}>Todos</a>${CATEGORIES.map(c => `<a href="${active ? '../' : ''}${c.slug}/"${active === c.key ? ' aria-current="page"' : ''}>${esc(c.label)}</a>`).join('')}</nav>`;
  const cards = (list, pre) => `<div class="grid">${list.map(o => `<a class="card" href="${pre}${o.slug}/"><small>${esc(catOf(o).label)}</small><strong>${esc(o.title)}</strong><span>${esc(o.excerpt)}</span></a>`).join('')}</div>`;
  const listLd = (name, url, list) => [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name, url, inLanguage: 'es-MX', isPartOf: { '@type': 'WebSite', name: 'SuperPromo', url: SITE },
    mainEntity: { '@type': 'ItemList', itemListElement: list.map((o, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE + 'blog/' + o.slug + '/', name: o.title })) } }];
  files['blog/index.html'] = shell({ title: 'Blog SuperPromo: ahorro, emprendimiento y finanzas en México', desc: 'Guías prácticas para ahorrar, comprar mejor, emprender con poca inversión, generar ingresos extra y cuidar tus finanzas en México.', canonical: SITE + 'blog/', depth: 1, ogType: 'website', wide: true, ld: listLd('Blog SuperPromo', SITE + 'blog/', POSTS),
    body: `<nav class="crumbs" aria-label="Migas de pan"><a href="../">Inicio</a><span aria-hidden="true">/</span><span>Blog</span></nav><p class="kicker">Blog</p><h1>Antes de comprar, léelo aquí.</h1><p class="lede">Guías claras para ahorrar, comprar mejor, emprender y cuidar tu dinero en México. Con números a la vista y fuentes oficiales.</p>${chips(null)}${CATEGORIES.map(c => { const l = POSTS.filter(p => p.catKey === c.key); return l.length ? `<section><h2><a href="${c.slug}/" style="color:inherit;text-decoration:none">${esc(c.label)}</a></h2><p>${esc(c.intro)}</p>${cards(l, '')}</section>` : ''; }).join('')}` });
  for (const c of CATEGORIES) {
    const l = POSTS.filter(p => p.catKey === c.key); if (!l.length) continue;
    files['blog/' + c.slug + '/index.html'] = shell({ title: c.label + ' | Blog SuperPromo', desc: c.intro, canonical: SITE + 'blog/' + c.slug + '/', depth: 2, ogType: 'website', wide: true, ld: listLd(c.label, SITE + 'blog/' + c.slug + '/', l),
      body: `<nav class="crumbs" aria-label="Migas de pan"><a href="../../">Inicio</a><span aria-hidden="true">/</span><a href="../">Blog</a><span aria-hidden="true">/</span><span>${esc(c.label)}</span></nav><p class="kicker">Categoría</p><h1>${esc(c.label)}</h1><p class="lede">${esc(c.intro)}</p>${chips(c.key)}${cards(l, '../')}` });
  }
  const urls = [{ loc: SITE, lastmod: '2026-10-24' }, { loc: SITE + 'quiz/', lastmod: '2026-10-24' }, { loc: SITE + 'blog/', lastmod: '2026-10-24' },
    ...CATEGORIES.filter(c => POSTS.some(p => p.catKey === c.key)).map(c => ({ loc: SITE + 'blog/' + c.slug + '/', lastmod: '2026-10-24' })),
    ...POSTS.map(p => ({ loc: SITE + 'blog/' + p.slug + '/', lastmod: p.checked || p.published }))];
  files['sitemap.xml'] = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`;
  files['robots.txt'] = `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`;
  return files;
}

// Ejecución con Node
if (typeof process !== 'undefined' && process.argv && process.argv[1] && process.argv[1].endsWith('generate-blog.mjs')) {
  const fs = await import('node:fs'); const path = await import('node:path');
  const { POSTS, CATEGORIES } = await import('../data/blog.js');
  const files = render(POSTS, CATEGORIES);
  for (const [f, html] of Object.entries(files)) { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); }
  console.log('Generados', Object.keys(files).length, 'archivos');
}
