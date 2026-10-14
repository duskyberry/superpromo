// Artículos del blog. Cada bloque: {h2} | {p} | {ul} | {tip} | {table:{head,rows}}
// Para Bolt/CMS: reemplazar por una consulta a la tabla `posts`.
export const POSTS = [
  {
    slug: 'como-elegir-celular-guia',
    cat: 'Guía de compra',
    title: 'Cómo elegir celular en 2026 sin perderte en la ficha técnica',
    seoTitle: 'Cómo elegir celular en 2026: RAM, almacenamiento y cámara | SuperPromo',
    description: 'Guía práctica para elegir celular en México: cuánta RAM y almacenamiento necesitas, qué revisar del procesador y la cámara, y una comparativa con precios reales.',
    excerpt: 'RAM, almacenamiento, procesador y cámara: qué mirar primero según cómo usas tu teléfono, con una comparativa de modelos y precios reales.',
    cover: 'assets/products/p9.jpg',
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
      { p: 'Si quieres verlos lado a lado con todos sus datos, usa nuestro comparador: solo muestra lo que viene en la publicación y te avisa cuando falta información.' }
    ],
    faq: [
      { q: '¿8 GB de RAM son suficientes en 2026?', a: 'Para mensajes, redes sociales, video y fotos, sí. Si juegas títulos exigentes o usas muchas apps a la vez, 12 GB te darán más margen.' },
      { q: '¿Conviene comprar un celular solo eSIM?', a: 'Solo si tu compañía telefónica es compatible con eSIM. Confírmalo antes de comprar para evitar sorpresas.' },
      { q: '¿Qué almacenamiento elijo si grabo mucho video?', a: 'Lo recomendable es 512 GB o más, sobre todo si el equipo no acepta tarjeta de memoria.' }
    ]
  },
  {
    slug: 'nintendo-switch-2-vs-switch-lite',
    cat: 'Comparativa',
    title: 'Nintendo Switch 2 vs Switch Lite: ¿cuál te conviene?',
    seoTitle: 'Switch 2 vs Switch Lite: diferencias y precio en México | SuperPromo',
    description: 'Comparamos Nintendo Switch 2 y Switch Lite: almacenamiento, lo que incluye cada caja, para quién es cada una y precios publicados en Mercado Libre.',
    excerpt: 'Portabilidad, almacenamiento y lo que incluye cada caja. Te ayudamos a decidir según cómo y dónde juegas.',
    cover: 'assets/products/p4.jpg',
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
      { ul: ['Elige Switch 2 si quieres jugar en la tele, en multijugador local y con más almacenamiento.', 'Elige Switch Lite si buscas una consola portátil a menor precio.', 'Antes de pagar, revisa que el vendedor sea confiable y las condiciones de garantía.'] }
    ],
    faq: [
      { q: '¿La Switch 2 incluye controles?', a: 'Según la publicación, incluye 2 controles y cable HDMI.' },
      { q: '¿Cuánto almacenamiento tiene la Switch Lite?', a: 'La versión publicada tiene 32 GB.' },
      { q: '¿El precio puede cambiar?', a: 'Sí. Los precios son los publicados en Mercado Libre al momento de escribir este artículo y pueden variar.' }
    ]
  },
  {
    slug: 'meses-sin-intereses-cuando-convienen',
    cat: 'Ahorro',
    title: 'Meses sin intereses: cuándo te ayudan y cuándo no',
    seoTitle: 'Meses sin intereses: cuándo conviene usarlos | SuperPromo',
    description: 'Qué son los meses sin intereses, cuándo te ayudan a comprar mejor, cuándo pueden salir caros y una regla práctica para usarlos sin endeudarte.',
    excerpt: 'Una guía para usarlos a tu favor sin endeudarte, con una regla simple para saber si la mensualidad cabe en tu presupuesto.',
    cover: null,
    coverText: 'MSI',
    keywords: ['meses sin intereses', 'cómo usar MSI', 'comprar a meses', 'finanzas personales'],
    related: ['samsung-galaxy-s26-ultra-512', 'nintendo-switch-2'],
    body: [
      { p: 'Los meses sin intereses (MSI) dividen el precio de una compra en pagos iguales, sin cobrarte intereses si pagas a tiempo. Bien usados, ayudan a comprar algo que necesitas sin vaciar tu cuenta. Mal usados, se acumulan y aprietan tu presupuesto durante meses.' },
      { h2: 'Cuándo sí te ayudan' },
      { ul: ['Cuando la compra ya estaba planeada y la ibas a hacer de todas formas.', 'Cuando el precio a meses es el mismo que de contado.', 'Cuando la mensualidad cabe en tu presupuesto sin recortar gastos básicos.'] },
      { h2: 'Cuándo pueden salir caros' },
      { ul: ['Si te atrasas en un pago: pueden cobrarse intereses y comisiones según tu tarjeta.', 'Si sumas varias compras a meses al mismo tiempo y pierdes de vista el total.', 'Si el producto a meses cuesta más que de contado.', 'Si solo pagas el mínimo de tu tarjeta en lugar del pago para no generar intereses.'] },
      { h2: 'Un ejemplo con números reales' },
      { p: 'En su publicación, el Samsung Galaxy S26 Ultra aparecía en $21,582 con la opción de 15 meses sin intereses de $1,438.80. Antes de elegirlo, la pregunta clave no es "¿me alcanza el primer mes?", sino "¿me alcanzan los 15?".' },
      { tip: 'Regla práctica: suma todas tus mensualidades a meses activas. Si la suma no cabe cómodamente en tu presupuesto mensual, espera antes de agregar otra.' },
      { h2: 'Checklist antes de comprar a meses' },
      { ul: ['¿El precio a meses es igual al de contado?', '¿Cuántas mensualidades tengo activas ya?', '¿Conozco mi fecha de corte y la de pago?', '¿Podría pagarlo si tuviera un gasto inesperado?'] },
      { p: 'Cada banco y tienda tiene condiciones propias. Revisa siempre los términos de tu tarjeta antes de comprar.' }
    ],
    faq: [
      { q: '¿Los meses sin intereses afectan mi historial crediticio?', a: 'Pagar a tiempo suele reflejarse bien; atrasarte puede afectarlo. Las condiciones dependen de cada institución.' },
      { q: '¿Qué pasa si me atraso en una mensualidad?', a: 'Según tu tarjeta, pueden generarse intereses y comisiones. Revisa el contrato de tu banco.' },
      { q: '¿Siempre conviene pagar de contado?', a: 'No necesariamente. Si el precio es el mismo y la mensualidad cabe en tu presupuesto, los MSI pueden darte liquidez.' }
    ]
  },
  {
    slug: 'antes-de-revender-cuentas-costos',
    cat: 'Reventa',
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
      { p: 'En nuestra sección de Negocios y reventa reunimos productos de menos de $1,000 para investigar. No son una recomendación de inversión ni garantizan ganancias.' }
    ],
    faq: [
      { q: '¿Qué margen es bueno para revender?', a: 'Depende del producto, el volumen y los costos de tu canal. Lo importante es que sigas ganando aunque el precio de venta baje un poco.' },
      { q: '¿Necesito facturar para revender?', a: 'Depende de tu situación fiscal y del volumen. Consulta con un contador para cumplir con el SAT.' },
      { q: '¿Cómo valido si un producto se vende?', a: 'Revisa la competencia, las preguntas de compradores y empieza con pocas piezas para medir.' }
    ]
  }
];
