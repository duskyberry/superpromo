// Artículos del blog. Bloques: {p} {h2} {h3} {ul} {ol} {tip} {table:{head,rows}} {links:[slug]}
// Para Bolt/CMS: reemplazar por una consulta a la tabla `posts`.
import { POSTS_AHORRO } from './posts-ahorro.js';
import { POSTS_EMPRENDE } from './posts-emprende.js';
import { POSTS_INGRESOS } from './posts-ingresos.js';
import { POSTS_FINANZAS } from './posts-finanzas.js';
import { POSTS_TECH } from './posts-tech.js';
import { POSTS_HOGAR } from './posts-hogar.js';
import { POSTS_EXTRA } from './posts-extra.js';
import { POSTS_EXTRA2 } from './posts-extra2.js';
import { POSTS_EXTRA3 } from './posts-extra3.js';
import { POSTS_EXTRA4 } from './posts-extra4.js';
import { POSTS_EXTRA5 } from './posts-extra5.js';
import { POSTS_EXTRA6 } from './posts-extra6.js';
import { POSTS_EXTRA7 } from './posts-extra7.js';
import { POSTS_EXTRA8 } from './posts-extra8.js';
import { POSTS_EXTRA9 } from './posts-extra9.js';

export const CATEGORIES = [
  { key: 'ahorro', label: 'Ahorro y compras', slug: 'ahorro-y-compras', intro: 'Promociones, cashback, súper y temporadas de descuento: cómo comprar lo que necesitas pagando menos y sin caer en descuentos inflados.' },
  { key: 'emprende', label: 'Emprendimiento', slug: 'emprendimiento', intro: 'Negocios con poca inversión, productos digitales, precios y clientes. Ideas con las cuentas a la vista, sin promesas de dinero fácil.' },
  { key: 'ingresos', label: 'Ingresos extra', slug: 'ingresos-extra', intro: 'Trabajo desde casa, ingresos complementarios y organización del dinero del día a día para que la quincena alcance.' },
  { key: 'finanzas', label: 'Finanzas personales', slug: 'finanzas-personales', intro: 'Inversión para principiantes, dónde guardar tu dinero, deudas y gastos importantes, con fuentes oficiales y supuestos claros.' },
  { key: 'tech', label: 'Tecnología, gadgets y gaming', slug: 'tecnologia-gadgets-gaming', intro: 'Celulares, televisores, audio, PC y laptops: cómo comparar y elegir según tu uso y presupuesto, con precios en México y su fuente.' },
  { key: 'hogar', label: 'Hogar y estilo de vida', slug: 'hogar-y-estilo-de-vida', intro: 'Cuidado personal y cocina en casa con presupuestos reales y las cuentas a la vista.' },
  { key: 'guias', label: 'Guías de compra', slug: 'guias-de-compra', intro: 'Comparativas y guías para elegir tecnología y productos de nuestro catálogo con datos de cada publicación.' }
];

const BASE = [
  {
    slug: 'como-elegir-celular-guia', catKey: 'guias', published: '2026-10-01', checked: '2026-10-01',
    cat: 'Guías de compra',
    title: 'Cómo elegir celular en 2026 sin perderte en la ficha técnica',
    seoTitle: 'Cómo elegir celular en 2026: RAM, almacenamiento y cámara | SuperPromo',
    description: 'Guía práctica para elegir celular en México: cuánta RAM y almacenamiento necesitas, qué revisar del procesador y la cámara, y una comparativa con precios reales.',
    excerpt: 'RAM, almacenamiento, procesador y cámara: qué mirar primero según cómo usas tu teléfono, con una comparativa de modelos y precios reales.',
    cover: 'assets/products/c/p9.png',
    keywords: ['cómo elegir celular', 'celular gama media', 'celular 5G México', 'cuánta RAM necesito'],
    related: ['moto-g75', 'moto-edge-60-pro', 'samsung-galaxy-s26-ultra-512', 'iphone-17-pro-256'],
    body: [
      { p: 'Elegir celular se complica cuando todas las fichas técnicas se parecen. La buena noticia: no necesitas entender cada número, solo los cuatro que más cambian tu experiencia diaria. Esta guía te dice cuáles son y cómo compararlos.' },
      { h2: '1. Empieza por cómo usas tu teléfono' },
      { p: 'Antes de ver especificaciones, define tu uso principal. No es lo mismo un celular para redes sociales y mensajes que uno para jugar, editar video o trabajar todo el día.' },
      { ul: ['Uso básico (mensajes, redes, video): prioriza batería y almacenamiento.', 'Fotos y video: revisa cámara y espacio disponible.', 'Juegos o multitarea pesada: prioriza RAM y procesador.', 'Trabajo: busca almacenamiento amplio y soporte de actualizaciones.'] },
      { h2: '2. RAM: cuánta necesitas' },
      { p: 'La RAM permite tener varias apps abiertas sin que se recarguen. Para un uso cotidiano, 8 GB funcionan bien. Si juegas o cambias seguido entre muchas apps, 12 GB o más te dan margen para los próximos años.' },
      { h2: '3. Almacenamiento: compra pensando en dos años' },
      { p: 'Fotos, videos y apps llenan el teléfono más rápido de lo que parece. Hoy, 256 GB es un punto de partida cómodo; si grabas mucho video, considera 512 GB. Revisa también si el modelo acepta memoria externa, porque muchos ya no lo permiten.' },
      { h2: '4. Procesador y conectividad' },
      { p: 'El procesador define qué tan fluido se siente el equipo. Busca el nombre exacto en la ficha (por ejemplo, Snapdragon 6 Gen 3) y compáralo entre modelos del mismo rango de precio. Confirma también si es 5G y qué tipo de SIM usa: algunos modelos funcionan solo con eSIM, lo que conviene verificar con tu compañía.' },
      { tip: 'Los megapíxeles no lo son todo. Dos cámaras de 50 MP pueden dar resultados muy distintos: compara fotos de muestra reales antes de decidir.' },
      { h2: '5. Comparativa rápida con precios reales' },
      { p: 'Estos son los celulares de nuestro catálogo con los datos que aparecen en cada publicación de Mercado Libre. Los precios pueden cambiar.' },
      { table: { head: ['Modelo', 'Almacenamiento', 'RAM', 'Precio publicado'], rows: [
        ['Motorola Moto G75 5G', '256 GB', '8 GB', '$4,253.83'],
        ['Motorola Edge 60 Pro', '512 GB', '12 GB', '$10,600'],
        ['Samsung Galaxy S26 Ultra', '512 GB', '12 GB', '$21,582'],
        ['Apple iPhone 17 Pro', '256 GB', '12 GB', '$27,899']
      ] } },
      { p: 'Si quieres verlos lado a lado con todos sus datos, usa nuestro comparador: solo muestra lo que viene en la publicación y te avisa cuando falta información.' },
      { links: ['mejor-momento-para-comprar-tecnologia', 'meses-sin-intereses-cuando-convienen', 'buen-fin-2026-ofertas-reales'] }
    ],
    faq: [
      { q: '¿8 GB de RAM son suficientes en 2026?', a: 'Para mensajes, redes sociales, video y fotos, sí. Si juegas títulos exigentes o usas muchas apps a la vez, 12 GB te darán más margen.' },
      { q: '¿Conviene comprar un celular solo eSIM?', a: 'Solo si tu compañía telefónica es compatible con eSIM. Confírmalo antes de comprar para evitar sorpresas.' },
      { q: '¿Qué almacenamiento elijo si grabo mucho video?', a: 'Lo recomendable es 512 GB o más, sobre todo si el equipo no acepta tarjeta de memoria.' }
    ]
  },
  {
    slug: 'nintendo-switch-2-vs-switch-lite', catKey: 'guias', published: '2026-10-01', checked: '2026-10-01',
    cat: 'Guías de compra',
    title: 'Nintendo Switch 2 vs Switch Lite: ¿cuál te conviene?',
    seoTitle: 'Switch 2 vs Switch Lite: diferencias y precio en México | SuperPromo',
    description: 'Comparamos Nintendo Switch 2 y Switch Lite: almacenamiento, lo que incluye cada caja, para quién es cada una y precios publicados en Mercado Libre.',
    excerpt: 'Portabilidad, almacenamiento y lo que incluye cada caja. Te ayudamos a decidir según cómo y dónde juegas.',
    cover: 'assets/products/c/p4.png',
    keywords: ['Switch 2 vs Switch Lite', 'Nintendo Switch 2 precio México', 'Switch Lite coral'],
    related: ['nintendo-switch-2', 'nintendo-switch-lite-coral'],
    body: [
      { p: 'Las dos son consolas de Nintendo, pero están pensadas para jugadores distintos. La diferencia de precio es grande, así que vale la pena tener claro qué ofrece cada una antes de decidir.' },
      { h2: 'Diferencias clave' },
      { table: { head: ['', 'Switch 2', 'Switch Lite'], rows: [
        ['Almacenamiento', '256 GB', '32 GB'],
        ['Incluye', '2 controles y cable HDMI', '1 adaptador de corriente'],
        ['Pantalla', 'No especificado en la publicación', '5.5" · 1280 × 720 px'],
        ['Precio publicado', '$10,559.34', '$3,699']
      ] } },
      { h2: 'Switch 2: para jugar en la tele y en compañía' },
      { p: 'Con dos controles y cable HDMI en la caja, la Switch 2 está lista para jugar en la televisión con otra persona desde el primer día. Sus 256 GB de almacenamiento te dan espacio para varios juegos digitales sin preocuparte tan pronto por la memoria.' },
      { h2: 'Switch Lite: portátil y accesible' },
      { p: 'La Switch Lite es más ligera y está pensada para jugar en modo portátil. Es una buena opción como primera consola, para niños o para quien juega en trayectos. Con 32 GB, conviene considerar una tarjeta de memoria si compras juegos digitales.' },
      { tip: 'Pregúntate dónde vas a jugar la mayor parte del tiempo. Si es en el sillón con alguien más, Switch 2. Si es fuera de casa y solo, Switch Lite.' },
      { h2: '¿Cuál comprar?' },
      { ul: ['Elige Switch 2 si quieres jugar en la tele, en multijugador local y con más almacenamiento.', 'Elige Switch Lite si buscas una consola portátil a menor precio.', 'Antes de pagar, revisa que el vendedor sea confiable y las condiciones de garantía.'] },
      { links: ['mejor-momento-para-comprar-tecnologia', 'buen-fin-2026-ofertas-reales'] }
    ],
    faq: [
      { q: '¿La Switch 2 incluye controles?', a: 'Según la publicación, incluye 2 controles y cable HDMI.' },
      { q: '¿Cuánto almacenamiento tiene la Switch Lite?', a: 'La versión publicada tiene 32 GB.' },
      { q: '¿El precio puede cambiar?', a: 'Sí. Los precios son los publicados en Mercado Libre al momento de escribir este artículo y pueden variar.' }
    ]
  },
  {
    slug: 'antes-de-revender-cuentas-costos', catKey: 'emprende', published: '2026-10-01', checked: '2026-10-01',
    cat: 'Emprendimiento',
    title: 'Antes de revender: las cuentas que nadie te dice',
    seoTitle: 'Cómo calcular el margen de reventa: costos ocultos | SuperPromo',
    description: 'Aprende a calcular el margen real de un producto para reventa: envíos, comisiones, empaque y devoluciones. Incluye una plantilla para hacer tus cuentas.',
    excerpt: 'Comisiones, envíos y devoluciones en una sola fórmula. Haz las cuentas antes de comprar volumen.',
    cover: null,
    coverText: '$ − $',
    keywords: ['cómo revender productos', 'margen de ganancia reventa', 'costos de venta en línea', 'negocio desde casa'],
    related: ['euphoric-whey-vainilla', 'cerave-fps50-75ml', 'kacool-sc7-max'],
    body: [
      { p: 'Encontrar un producto barato es solo la mitad del trabajo. Lo que define si una reventa vale la pena es cuánto te queda después de pagar todo lo que no se ve en la etiqueta.' },
      { h2: 'La fórmula del margen real' },
      { p: 'Margen = precio de venta − (costo del producto + envío + comisión de la plataforma + empaque + reserva para devoluciones).' },
      { p: 'Si solo restas el costo del producto, tu número se verá mejor de lo que es. Incluye cada concepto, aunque parezca pequeño.' },
      { h2: 'Plantilla para hacer tus cuentas' },
      { table: { head: ['Concepto', 'Dónde encontrarlo'], rows: [
        ['Costo del producto', 'Precio de compra, con IVA'],
        ['Envío', 'Tarifa de la paquetería o de la plataforma'],
        ['Comisión', 'Tabla de comisiones de donde vendas'],
        ['Empaque', 'Cajas, bolsas, etiquetas, cinta'],
        ['Devoluciones', 'Reserva un porcentaje para cambios y reembolsos']
      ] } },
      { h2: 'Antes de comprar volumen' },
      { ul: ['Valida la demanda: revisa preguntas, reseñas y cuántos vendedores ya lo ofrecen.', 'Compara precios de venta actuales, no los del mes pasado.', 'Empieza con pocas piezas y mide cuánto tardas en venderlas.', 'Verifica si la marca permite la reventa y cómo aplica la garantía.'] },
      { tip: 'Un producto de ticket bajo puede ser buena puerta de entrada: arriesgas menos mientras aprendes cuánto cuesta realmente cada venta.' },
      { p: 'En nuestra sección de Negocios y reventa reunimos productos de menos de $1,000 para investigar. No son una recomendación de inversión ni garantizan ganancias.' },
      { links: ['calcular-precio-de-un-producto', 'que-vender-desde-casa-ideas', 'negocios-con-menos-de-5000-pesos'] }
    ],
    faq: [
      { q: '¿Qué margen es bueno para revender?', a: 'Depende del producto, el volumen y los costos de tu canal. Lo importante es que sigas ganando aunque el precio de venta baje un poco.' },
      { q: '¿Necesito facturar para revender?', a: 'Depende de tu situación fiscal y del volumen. Consulta con un contador para cumplir con el SAT.' },
      { q: '¿Cómo valido si un producto se vende?', a: 'Revisa la competencia, las preguntas de compradores y empieza con pocas piezas para medir.' }
    ]
  }
];

// Orden: primero el contenido nuevo por categoría, luego las guías de compra.
// Fechas de publicación editoriales; «checked» (dateModified) indica la última revisión de datos.
const DATES = { "por-que-paco-rabanne-nunca-pasa-de-moda": "2026-10-22", "como-emprender-desde-casa-comida-plantas-postres": "2026-10-24",   "como-elegir-celular-guia": "2026-06-02",  "nintendo-switch-2-vs-switch-lite": "2026-06-05",  "antes-de-revender-cuentas-costos": "2026-06-09",  "super-con-1000-pesos-semana": "2026-06-12",  "reducir-gastos-mensuales": "2026-06-16",  "organizar-tu-quincena": "2026-06-19",  "negocios-con-menos-de-5000-pesos": "2026-06-23",  "que-vender-desde-casa-ideas": "2026-06-26",  "calcular-precio-de-un-producto": "2026-06-30",  "como-ser-buen-anfitrion": "2026-07-03",  "dinero-extra-desde-casa": "2026-07-07",  "vender-cosas-que-ya-tienes": "2026-07-10",  "trabajos-por-internet-para-principiantes": "2026-07-14",  "paginas-que-pagan-por-trabajar-desde-casa": "2026-07-17",  "conseguir-clientes-freelance": "2026-07-21",  "skincare-con-500-pesos": "2026-07-24",  "fiesta-de-cumpleanos-con-3000-pesos": "2026-07-28",  "ahorrar-en-comida-con-air-fryer": "2026-07-31",  "vender-productos-digitales-sin-inventario": "2026-08-04",  "ganar-dinero-con-inteligencia-artificial": "2026-08-07",  "android-vs-ios": "2026-08-11",  "windows-vs-macos": "2026-08-14",  "diferencias-oled-qled-mini-led": "2026-08-18",  "roku-sistema-smart-tv": "2026-08-21",  "setup-home-office-gamer": "2026-08-25",  "mejores-marcas-pc-gamer": "2026-08-28",  "lenovo-buena-marca-laptops": "2026-09-01",  "xbox-o-playstation": "2026-09-04",  "vale-la-pena-nintendo-switch": "2026-09-08",  "mejores-audifonos-para-el-gym": "2026-09-11",  "diferencias-macbook-neo-air-pro": "2026-09-15",  "que-ipad-comprar": "2026-09-18",  "mejores-celulares-2026": "2026-09-22",  "samsung-vs-lg-televisores": "2026-09-25",  "mejores-smart-tv-2026": "2026-09-29",  "mejores-bocinas-para-fiestas": "2026-10-02",  "como-elegir-electrodomesticos": "2026-10-06", "elegir-ventilador-calentador-minisplit": "2026-06-24", "metodos-efectivos-para-ahorrar": "2026-07-15", "ecosistema-apple-que-vale-la-pena": "2026-09-19", "alienware-fama-y-potencia": "2026-09-02", "pulgadas-smart-tv-tamano-correcto": "2026-10-10", "que-regalarle-a-un-nino": "2026-10-17", "skullcandy-vale-la-pena": "2026-09-09", "que-iphone-me-conviene": "2026-10-18", "como-ser-streamer-y-ganar-dinero": "2026-08-12", "que-es-un-nomada-digital": "2026-07-22", "como-saber-que-perfume-va-conmigo": "2026-10-11", "historia-ariana-grande-empresaria": "2026-08-27", "el-exito-de-cr7": "2026-07-01",  "viajar-barato-por-mexico": "2026-10-09",  "pagar-deudas-tarjeta-de-credito": "2026-10-12",  "donde-guardar-tu-dinero-rendimientos": "2026-10-14",  "empezar-a-invertir-con-poco-dinero": "2026-10-16",  "ahorrar-10000-pesos-en-un-ano": "2026-10-19",  "tarjetas-credito-cashback-mexico": "2026-10-20",  "apps-para-ahorrar-al-comprar-mexico": "2026-10-21",  "mejor-momento-para-comprar-tecnologia": "2026-10-22",  "meses-sin-intereses-cuando-convienen": "2026-10-23",  "navidad-sin-gastar-de-mas": "2026-10-23",  "iphone-2027-rumores": "2026-10-24",  "buen-fin-2026-ofertas-reales": "2026-10-24", "que-tan-buena-es-la-marca-hisense": "2026-10-07", "que-hay-de-nintendo-en-la-actualidad": "2026-07-08", "mejores-juegos-steam-2026-2027": "2026-08-19", "mejores-videojuegos-gratuitos": "2026-06-17", "por-que-nautica-voyage-es-odiado-y-amado": "2026-09-26", "cine-de-terror-en-casa": "2026-10-24" };
const ALL = [...POSTS_AHORRO, ...POSTS_EMPRENDE, ...POSTS_INGRESOS, ...POSTS_FINANZAS, ...POSTS_TECH, ...POSTS_HOGAR, ...POSTS_EXTRA, ...POSTS_EXTRA2, ...POSTS_EXTRA3, ...POSTS_EXTRA4, ...POSTS_EXTRA5, ...POSTS_EXTRA6, ...POSTS_EXTRA7, ...POSTS_EXTRA8, ...POSTS_EXTRA9, ...BASE]
  .map(p => ({ ...p, cover: p.slug === 'buen-fin-2026-ofertas-reales' ? p.cover : '', coverText: p.coverText || (p.keywords && p.keywords[0] ? p.keywords[0].split(' ').slice(0,2).join(' ') : p.title.split(' ').slice(0,2).join(' ')), published: DATES[p.slug] || p.published || '2026-10-24', checked: p.checked || '2026-10-24' }));
// Más recientes primero
export const POSTS = ALL.sort((a, z) => z.published.localeCompare(a.published));
