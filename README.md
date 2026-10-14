# SuperPromo

Sitio de ofertas y descubrimiento de productos para México.

## Publicar en GitHub Pages
1. Sube todo el contenido de esta carpeta a la raíz del repositorio.
2. En GitHub: **Settings → Pages → Deploy from a branch → `main` / root**.
3. Listo: `https://TU-USUARIO.github.io/TU-REPO/`

## Probar en local
Necesita un servidor (no abrir con doble clic, porque el blog se carga como módulo):
```
npx serve .
# o
python3 -m http.server
```

## Estructura
- `index.html` — página completa (estructura, estilos y lógica). Al inicio del script están `CONFIG` (redes sociales, dominio, WhatsApp, Mercado Libre) y `PRODUCTS` (catálogo: nombre, imagen, precio, precio anterior, specs y enlace de afiliado).
- `support.js` — runtime necesario para que `index.html` funcione. No editar.
- `data/blog.js` — artículos del blog (título SEO, descripción, cuerpo, FAQ, productos relacionados).
- `data/legal.js` — Aviso de privacidad y Términos y condiciones.

## Antes de publicar
En `index.html`, reemplaza `https://TU-DOMINIO/` por la URL real del sitio (canonical, og:url, og:image y twitter:image). Sin esto, WhatsApp y redes no mostrarán la miniatura.
- `assets/products/` — fotos de producto (p1–p19, en el orden de los documentos originales).
- `assets/brand/` — isotipo (favicon/header), logo completo (footer) y miniatura para compartir (`og-1200x630.jpg`).

## Pendientes
- URLs de Instagram y Facebook en `CONFIG`.
- Dominio en `CONFIG.siteUrl` y URL absoluta en `og:image` / canonical.
- Backend o servicio de correo para el formulario de contacto (hoy solo valida).
- Aviso de privacidad y términos y condiciones.
- Precios: son los publicados en Mercado Libre al momento de captura; actualizarlos periódicamente.
- Rutas con render en servidor (`/blog/slug`, `/producto/slug`) para SEO completo al migrar a Bolt.
