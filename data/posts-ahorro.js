// Categoría A — Ahorro, promociones y compras inteligentes
// Bloques: {p} {h2} {h3} {ul} {ol} {tip} {table:{head,rows}} {links:[slug,...]}
export const POSTS_AHORRO = [
{
  slug: 'super-con-1000-pesos-semana', catKey: 'ahorro', cat: 'Ahorro y compras',
  title: 'Cómo hacer el súper con $1,000 pesos y comer toda la semana',
  seoTitle: 'Súper con $1,000 pesos: lista y menú para 7 días | SuperPromo',
  description: 'Lista de compras con precios estimados, menú de 7 días y recetas para comer bien con $1,000 pesos a la semana en México. Incluye ajustes para 1, 3 y 5 personas.',
  excerpt: 'Una lista real de $993, un menú de siete días que reutiliza cada ingrediente y los ajustes para hogares de distintos tamaños.',
  coverText: '$1,000', keywords: ['súper con 1000 pesos', 'lista de súper económica', 'menú semanal barato', 'comer barato México'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'Sí se puede hacer el súper con $1,000 pesos y comer toda la semana en México, siempre que compres ingredientes base (huevo, frijol, arroz, tortilla, verdura de temporada y una proteína rendidora) y planees el menú antes de llegar a la tienda. Con la lista de esta guía, dos o tres personas cubren desayuno, comida y cena durante siete días por alrededor de $993.' },
    { p: 'Aquí encontrarás la lista completa con cantidades, un menú que aprovecha cada ingrediente, cómo guardar la comida para que no se eche a perder y qué cambiar si en tu casa son una, tres o cinco personas.' },
    { tip: 'Los precios de esta guía son estimaciones de octubre de 2026 para tiendas de autoservicio y mercados de zonas urbanas. Pueden variar por ciudad, tienda y temporada. Úsalos como referencia, no como precio exacto.' },
    { h2: 'La regla para que $1,000 alcancen' },
    { p: 'El presupuesto alcanza cuando cada ingrediente aparece en al menos dos comidas. Un kilo de jitomate sirve para salsa, para el arroz y para la sopa; el pollo cocido rinde para tacos, caldo y tostadas. Lo que encarece el súper no suele ser un producto caro, sino comprar ingredientes que solo usas una vez y terminan en la basura.' },
    { ul: ['Proteína rendidora: huevo, frijol, pollo en pieza, atún y carne molida en porción pequeña.', 'Base de carbohidratos: tortilla, arroz, pasta, papa y avena.', 'Verdura de temporada que aguante varios días: zanahoria, calabacita, papa, cebolla y jitomate.', 'Fruta económica: plátano y la fruta de temporada que esté más barata ese día.'] },
    { h2: 'Lista de súper con precios estimados' },
    { p: 'Esta lista está pensada para dos adultos o dos adultos y un niño. Las cantidades permiten tres comidas al día con porciones normales.' },
    { table: { head: ['Producto', 'Cantidad', 'Precio estimado'], rows: [
      ['Huevo', '30 piezas', '$85'], ['Frijol', '1 kg', '$35'], ['Arroz', '1 kg', '$30'], ['Tortilla de maíz', '2.5 kg', '$58'],
      ['Pasta para sopa', '4 paquetes de 200 g', '$40'], ['Avena', '1 kg', '$40'], ['Leche', '4 litros', '$108'],
      ['Pierna y muslo de pollo', '1.5 kg', '$120'], ['Carne molida', '500 g', '$75'], ['Atún en agua', '3 latas', '$60'],
      ['Jitomate', '1.5 kg', '$45'], ['Cebolla', '1 kg', '$30'], ['Papa', '1.5 kg', '$45'], ['Zanahoria', '1 kg', '$25'],
      ['Calabacita', '1 kg', '$35'], ['Plátano', '1.5 kg', '$30'], ['Limón', '1 kg', '$35'], ['Aceite', '1 litro', '$45'],
      ['Chiles, ajo y especias', 'Surtido', '$20'], ['Queso fresco', '250 g', '$32'], ['Total', '', '$993']
    ] } },
    { p: 'Si ya tienes sal, azúcar, café o consomé en polvo en tu alacena, los $7 restantes pueden ir a cilantro o a una fruta extra. Si no tienes, prioriza la sal y deja el café para la siguiente compra.' },
    { h2: 'Menú de 7 días' },
    { p: 'El menú sigue un orden lógico: primero se comen las verduras y la carne que caducan antes, y al final de la semana se usan los ingredientes que aguantan más, como el frijol, el atún y la pasta.' },
    { table: { head: ['Día', 'Desayuno', 'Comida', 'Cena'], rows: [
      ['Lunes', 'Huevo a la mexicana con tortillas', 'Caldo de pollo con zanahoria, papa y calabacita + arroz', 'Tacos de pollo deshebrado'],
      ['Martes', 'Avena con leche y plátano', 'Tinga de pollo con frijoles', 'Quesadillas con calabacita'],
      ['Miércoles', 'Chilaquiles con huevo', 'Picadillo de carne molida con papa y zanahoria + arroz', 'Frijoles con queso y tortillas'],
      ['Jueves', 'Huevo con frijoles', 'Sopa de pasta + tacos de picadillo', 'Avena caliente con plátano'],
      ['Viernes', 'Molletes de tortilla con frijol y queso', 'Tortitas de atún con ensalada de jitomate', 'Sopa de verduras'],
      ['Sábado', 'Huevo revuelto con papa', 'Enfrijoladas con queso', 'Tostadas de atún'],
      ['Domingo', 'Avena con leche', 'Pasta con salsa de jitomate y huevo cocido', 'Lo que haya quedado: tacos o caldo']
    ] } },
    { h2: 'Recetas base que sostienen la semana' },
    { h3: 'Pollo cocido para tres comidas' },
    { p: 'Cuece el kilo y medio de pierna y muslo con media cebolla, ajo y sal durante 40 minutos. Separa el caldo: es la base del caldo del lunes y de la sopa del viernes. Deshebra la carne y divídela en tres porciones: tacos, tinga y una porción de reserva para congelar.' },
    { h3: 'Olla de frijoles para toda la semana' },
    { p: 'Remoja el kilo de frijol la noche anterior y cuécelo con cebolla y sal. Una olla rinde para frijoles de la olla, refritos, enfrijoladas y molletes. Guarda la mitad en el refrigerador y congela el resto en porciones.' },
    { h3: 'Salsa de jitomate que sirve para todo' },
    { p: 'Licúa jitomate, cebolla, ajo y chile, y fríe la mezcla en poco aceite. Sirve para la tinga, los chilaquiles, la pasta y el arroz. Hacer una sola salsa grande ahorra gas y tiempo.' },
    { h2: 'Cómo guardar la comida para que dure' },
    { ul: ['Refrigera el pollo cocido en recipientes cerrados y consúmelo en tres o cuatro días; congela lo que no vayas a usar.', 'Guarda tortillas en una bolsa cerrada dentro del refrigerador y caliéntalas en comal; también puedes congelarlas.', 'Deja papa, cebolla y plátano fuera del refrigerador, en un lugar fresco y separados entre sí.', 'Guarda calabacita y zanahoria en el cajón de verduras, sin lavarlas hasta el momento de usarlas.', 'Etiqueta lo que congeles con la fecha para usarlo en orden.'] },
    { h2: 'Ajustes según cuántos son en casa' },
    { table: { head: ['Hogar', 'Qué cambiar', 'Presupuesto aproximado'], rows: [
      ['1 persona', 'Compra la mitad de pollo, leche y verdura; congela porciones de frijol y caldo', '$550 a $650'],
      ['2 a 3 personas', 'La lista de esta guía', '$993'],
      ['4 a 5 personas', 'Duplica frijol, arroz y tortilla; agrega 1 kg de pollo y 12 huevos', '$1,350 a $1,500']
    ] } },
    { p: 'Para una familia de cuatro o cinco personas, $1,000 a la semana es posible solo si el menú se apoya mucho más en frijol, huevo, arroz y tortilla, y si se reduce la carne. La tabla muestra un presupuesto más realista para comer con variedad.' },
    { h2: 'Sustituciones cuando algo está caro' },
    { ul: ['Si el jitomate sube, usa salsa verde de tomate o chile seco remojado.', 'Si el pollo está caro, cambia una comida por lentejas o garbanzos.', 'Si no encuentras calabacita a buen precio, usa chayote o la verdura de temporada más barata.', 'Si la leche no cabe en el presupuesto, prepara la avena con agua y plátano.'] },
    { h2: 'Errores que hacen que el dinero no alcance' },
    { ul: ['Ir sin lista y con hambre: compras de más y productos que no estaban en el plan.', 'Comprar todo en una tienda: compara la verdura en el mercado o tianguis y los abarrotes en el súper.', 'No revisar lo que ya tienes: muchas veces el aceite o el arroz se compran dos veces.', 'Comprar presentaciones pequeñas de lo que usas diario: el precio por kilo suele ser mayor.'] },
    { tip: 'Compara el precio por kilo o por litro, no el precio del paquete. La mayoría de las etiquetas de anaquel lo muestran en letra pequeña.' },
    { h2: 'Tu siguiente paso' },
    { p: 'Antes de tu próxima compra, revisa tu alacena, ajusta la lista a lo que ya tienes y apunta cuánto gastaste realmente. Después de dos o tres semanas sabrás cuál es tu presupuesto real y dónde puedes ahorrar más. Si quieres ir más allá, combina esta lista con un plan para organizar tu quincena.' },
    { links: ['organizar-tu-quincena', 'reducir-gastos-mensuales', 'apps-para-ahorrar-al-comprar-mexico', 'ahorrar-10000-pesos-en-un-ano'] }
  ],
  faq: [
    { q: '¿Realmente alcanzan $1,000 pesos para una semana?', a: 'Para dos o tres personas, sí, si compras ingredientes base, cocinas en casa y planeas el menú. Para cuatro o cinco personas, un presupuesto más realista va de $1,350 a $1,500 a la semana.' },
    { q: '¿Dónde conviene comprar para que rinda más?', a: 'Suele convenir comprar frutas y verduras en mercados o tianguis, y abarrotes como arroz, aceite y atún en tiendas de autoservicio cuando tienen promoción. Compara precios por kilo antes de decidir.' },
    { q: '¿Qué proteína es más barata?', a: 'El frijol y el huevo suelen ser las proteínas más económicas por porción. El pollo en pieza con hueso rinde más que la pechuga y deja caldo para otras comidas.' },
    { q: '¿Cómo evito que se eche a perder la comida?', a: 'Come primero lo que caduca antes, cocina el pollo y el frijol en grandes cantidades, y congela porciones con fecha. Guarda papa y cebolla fuera del refrigerador y separadas.' },
    { q: '¿Los precios de la lista son exactos?', a: 'No. Son estimaciones de octubre de 2026 para zonas urbanas y cambian según la ciudad, la tienda y la temporada. Sirven para planear y comparar.' }
  ],
  sources: [
    { t: 'Profeco — Quién es quién en los precios', url: 'https://www.gob.mx/profeco' },
    { t: 'Profeco — Revista del Consumidor', url: 'https://revistadelconsumidor.profeco.gob.mx' }
  ]
},
{
  slug: 'meses-sin-intereses-cuando-convienen', catKey: 'ahorro', cat: 'Ahorro y compras',
  title: 'Cómo aprovechar los meses sin intereses sin terminar endeudado',
  seoTitle: 'Meses sin intereses: cómo usarlos sin endeudarte | SuperPromo',
  description: 'Cómo funcionan los meses sin intereses en México, cómo calcular tus mensualidades, cuándo convienen y errores comunes, con ejemplos de $3,000, $10,000 y $20,000.',
  excerpt: 'Cómo funcionan, cómo se calculan y una regla práctica para saber cuántas mensualidades caben en tu presupuesto. Con ejemplos de $3,000, $10,000 y $20,000.',
  coverText: 'MSI', keywords: ['meses sin intereses', 'cómo funcionan los meses sin intereses', 'comprar a meses', 'MSI tarjeta de crédito'],
  related: ['samsung-galaxy-s26-ultra-512', 'nintendo-switch-2'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'Los meses sin intereses (MSI) te permiten dividir una compra con tarjeta de crédito en pagos mensuales iguales sin pagar intereses, siempre que cubras cada mensualidad a tiempo. Convienen cuando la compra ya estaba planeada, el precio a meses es igual al de contado y la suma de todas tus mensualidades activas cabe en tu presupuesto sin descuidar tus gastos básicos.' },
    { p: 'En esta guía verás cómo funcionan realmente, cómo afectan tu línea de crédito, cómo calcular cuánto puedes comprometer cada mes y tres ejemplos con números.' },
    { h2: 'Cómo funcionan los meses sin intereses' },
    { p: 'Cuando compras a MSI, el banco aparta el total de la compra de tu línea de crédito disponible, pero en cada estado de cuenta solo te cobra la mensualidad correspondiente. Si compras algo de $10,000 a 10 meses, tu crédito disponible baja $10,000 de inmediato y, mes a mes, se va liberando conforme pagas cada mensualidad de $1,000.' },
    { p: 'Esa mensualidad se suma al resto de tus compras del periodo dentro del «pago para no generar intereses». Ese es el monto que debes cubrir completo cada mes. Si solo pagas el mínimo, el saldo que quede pendiente de tus compras normales sí genera intereses, y en algunos casos el banco puede cobrar intereses o comisiones también sobre las compras a meses, según el contrato de tu tarjeta.' },
    { h3: 'Tres términos que debes distinguir' },
    { ul: ['Pago mínimo: lo menos que puedes pagar para no caer en atraso. Pagar solo esto genera intereses.', 'Pago para no generar intereses: incluye tus compras del periodo y las mensualidades de MSI. Es el que conviene cubrir.', 'Fecha límite de pago: el último día para pagar sin cargos. No es lo mismo que la fecha de corte.'] },
    { h2: 'Cómo calcular tu mensualidad' },
    { p: 'La fórmula es simple: precio total entre número de meses. Lo importante es comparar ese resultado con tu flujo mensual real y con las otras mensualidades que ya tienes.' },
    { table: { head: ['Compra', '3 meses', '6 meses', '12 meses', '18 meses'], rows: [
      ['$3,000', '$1,000', '$500', '$250', '$166.67'],
      ['$10,000', '$3,333.33', '$1,666.67', '$833.33', '$555.56'],
      ['$20,000', '$6,666.67', '$3,333.33', '$1,666.67', '$1,111.11']
    ] } },
    { h2: 'Ejemplos con números' },
    { h3: 'Compra de $3,000: unos audífonos o un electrodoméstico pequeño' },
    { p: 'A 6 meses pagarías $500 al mes. Si es la única compra a meses que tienes y tu ingreso es de $12,000, representa poco más del 4% de tu ingreso. En este caso los MSI te dan liquidez sin mucho riesgo. La pregunta es si ese producto vale seis meses de compromiso o si podrías pagarlo en uno o dos meses de ahorro.' },
    { h3: 'Compra de $10,000: un celular de gama media o una laptop' },
    { p: 'A 12 meses son $833.33 al mes. Si ya tienes otra compra a meses de $600, en total comprometes $1,433.33 cada mes. Con un ingreso de $15,000, eso es cerca del 9.6%. Todavía puede ser manejable, pero queda poco margen para una tercera compra.' },
    { h3: 'Compra de $20,000: una pantalla grande o una consola con accesorios' },
    { p: 'A 18 meses pagarías $1,111.11 al mes durante año y medio. En ese periodo es probable que surjan otros gastos: inscripciones, reparaciones o fiestas. Antes de aceptar un plazo largo, pregúntate si podrías seguir pagando si tu ingreso bajara un mes.' },
    { tip: 'Criterio SuperPromo: procura que la suma de todas tus mensualidades a meses no pase del 10% al 15% de tu ingreso mensual neto. No es una regla oficial, es un margen de seguridad para absorber imprevistos.' },
    { h2: 'Cuándo sí conviene comprar a meses' },
    { ul: ['La compra estaba planeada y la ibas a hacer de todas formas.', 'El precio a meses es exactamente el mismo que de contado.', 'Tienes un fondo de emergencia, aunque sea pequeño, para no depender de la tarjeta si surge un imprevisto.', 'Conoces tu fecha de corte y tu fecha límite de pago.', 'El plazo no es mayor que la vida útil esperada del producto.'] },
    { h2: 'Cuándo es mejor no hacerlo' },
    { ul: ['Cuando el precio a meses es mayor que el de contado: en ese caso sí estás pagando un costo financiero.', 'Cuando ya tienes varias compras a meses y pierdes de vista el total.', 'Cuando solo puedes cubrir el pago mínimo de tu tarjeta.', 'Cuando el producto es de consumo rápido, como comida o salidas, y lo seguirás pagando cuando ya no exista.', 'Cuando la compra es impulsiva solo porque «son pagos chiquitos».'] },
    { h2: 'Errores comunes' },
    { ol: ['Confundir crédito disponible con dinero disponible: aunque el banco te permita comprar, tu flujo mensual no cambia.', 'Ignorar que la línea de crédito queda apartada: si la usas casi completa, puede afectar tu historial y dejarte sin margen para emergencias.', 'Olvidar que el plazo largo te compromete más tiempo: 18 meses cubren casi dos temporadas de Buen Fin.', 'No llevar un registro: una lista con fecha de inicio, mensualidad y último pago evita sorpresas.'] },
    { h2: 'Checklist antes de aceptar MSI' },
    { ul: ['¿El precio a meses es igual al de contado?', '¿Cuánto suman mis mensualidades activas con esta compra?', '¿Esa suma está por debajo del 10% al 15% de mi ingreso neto?', '¿Puedo pagar el «pago para no generar intereses» completo cada mes?', '¿Qué pasa si me atraso? Revisé las condiciones de mi tarjeta.'] },
    { h2: 'En resumen' },
    { p: 'Los meses sin intereses son una herramienta de flujo, no de ahorro. Bien usados te ayudan a comprar algo que necesitas sin vaciar tu cuenta; mal usados, se acumulan y limitan tu presupuesto durante meses. Antes del Buen Fin o de cualquier compra grande, haz la suma de tus mensualidades y decide con ese número en mente.' },
    { links: ['buen-fin-2026-ofertas-reales', 'pagar-deudas-tarjeta-de-credito', 'organizar-tu-quincena', 'mejor-momento-para-comprar-tecnologia'] }
  ],
  faq: [
    { q: '¿Qué pasa si no pago una mensualidad de meses sin intereses?', a: 'Depende del contrato de tu tarjeta. En general, el atraso genera intereses moratorios y comisiones, y puede afectar tu historial crediticio. Algunos bancos pueden cancelar el beneficio de MSI. Revisa las condiciones de tu emisor.' },
    { q: '¿Los meses sin intereses bajan mi línea de crédito?', a: 'Sí. Al comprar, el banco aparta el monto total de tu crédito disponible y lo va liberando conforme pagas cada mensualidad.' },
    { q: '¿Puedo adelantar pagos de meses sin intereses?', a: 'Muchos bancos lo permiten. Adelantar libera tu línea de crédito, pero no te ahorra intereses porque no los había. Consulta con tu banco cómo aplicar el pago anticipado.' },
    { q: '¿Cuántas compras a meses es recomendable tener?', a: 'No hay un número oficial. Como margen de seguridad, procura que todas tus mensualidades juntas no superen del 10% al 15% de tu ingreso mensual neto.' },
    { q: '¿Los MSI ayudan a construir historial crediticio?', a: 'Pagar puntualmente cualquier crédito suele reflejarse de forma positiva en tu historial. Atrasarte lo afecta. Lo importante es la puntualidad, no la cantidad de compras a meses.' },
    { q: '¿Siempre es mejor pagar de contado?', a: 'No necesariamente. Si el precio es el mismo y la mensualidad cabe en tu presupuesto, los MSI pueden darte liquidez. Si tienes el dinero y no lo necesitas para otra cosa, pagar de contado evita compromisos futuros.' }
  ],
  sources: [
    { t: 'CONDUSEF — Educación financiera y tarjetas de crédito', url: 'https://www.condusef.gob.mx' },
    { t: 'Banco de México — Información sobre tarjetas de crédito', url: 'https://www.banxico.org.mx' }
  ]
},
{
  slug: 'buen-fin-2026-ofertas-reales', catKey: 'ahorro', cat: 'Ahorro y compras',
  title: 'Buen Fin 2026: fechas, cómo encontrar ofertas reales y qué comprar',
  seoTitle: 'Buen Fin 2026: fechas, ofertas reales y qué comprar | SuperPromo',
  description: 'El Buen Fin 2026 es del viernes 13 al martes 17 de noviembre. Guía para detectar descuentos reales, usar MSI y cashback, tus derechos ante Profeco y qué productos conviene comprar.',
  excerpt: 'Fechas, un método de cinco pasos para no caer en descuentos inflados, cómo usar MSI y cashback, y nuestras recomendaciones por categoría.',
  cover: 'assets/blog/buen-fin-2026.png', coverText: 'BF 26',
  keywords: ['Buen Fin 2026', 'cuándo es el Buen Fin 2026', 'fechas Buen Fin 2026', 'ofertas Buen Fin 2026', 'qué comprar en el Buen Fin', 'descuentos falsos Buen Fin', 'Profeco Buen Fin', 'meses sin intereses Buen Fin'],
  related: ['samsung-65-m70haf', 'lg-55-nanocell', 'iphone-17-256-salvia', 'galaxy-s25-ultra-256', 'macbook-neo-indigo', 'hp-245-g10', 'ps5-astro-gt7', 'xbox-series-x-digital-1tb', 'bose-quietcomfort', 'jbl-charge-6', 'hisense-frigobar-33', 'lancome-nuit-tresor'],
  body: [
    { p: 'El Buen Fin 2026 se realiza del viernes 13 al martes 17 de noviembre de 2026: cinco días de descuentos en tiendas físicas y en línea de todo México, incluido el lunes 16, día de descanso obligatorio. Para aprovecharlo, haz una lista con lo que realmente necesitas, registra hoy el precio de cada producto, compara el precio final con envío en al menos tres tiendas y usa meses sin intereses solo si la mensualidad cabe en tu presupuesto.' },
    { h2: 'Buen Fin 2026 en datos' },
    { table: { head: ['Dato', 'Detalle'], rows: [
      ['Fechas', 'Viernes 13 al martes 17 de noviembre de 2026'],
      ['Duración', '5 días'],
      ['Dónde aplica', 'Comercios registrados, en tienda y en línea'],
      ['Organiza', 'Gobierno de México con el sector privado'],
      ['Quién vigila', 'Profeco, la Procuraduría Federal del Consumidor'],
      ['Sitio oficial', 'elbuenfin.org']
    ] } },
    { h2: '¿Qué es el Buen Fin?' },
    { p: 'El Buen Fin es un fin de semana largo de promociones que se celebra cada noviembre en México desde 2011. Participan tiendas departamentales, de autoservicio, marketplaces y comercios locales registrados. Suele coincidir con el pago de la primera parte del aguinaldo en algunas empresas, por eso es una de las temporadas de mayor gasto del año.' },
    { h2: 'Método en cinco pasos para comprar bien' },
    { ol: ['Lista y presupuesto: escribe qué necesitas y el máximo que vas a gastar en total.', 'Precio de referencia: toma captura con fecha del precio actual de cada producto, en dos o tres tiendas.', 'Compara el precio final: incluye envío, instalación y garantía, no solo el porcentaje de descuento.', 'Revisa la forma de pago: MSI, cashback o descuento bancario pueden cambiar el costo real.', 'Decide con calma: si una oferta te saca del presupuesto, déjala ir.'] },
    { h2: 'Cómo detectar un descuento falso' },
    { ul: ['El precio «antes» subió en las semanas previas.', 'La misma pieza cuesta menos en otra tienda sin promoción.', 'Es un modelo anterior o con menos capacidad de lo que parece.', 'El envío o la instalación anulan el ahorro.', 'Las condiciones de la promoción no son claras.'] },
    { tip: 'Un 40% de descuento sobre un precio inflado puede salir peor que un 15% sobre un precio honesto. Compara siempre en pesos, no en porcentajes.' },
    { h2: 'Meses sin intereses y cashback' },
    { p: 'Los meses sin intereses convienen cuando el precio a meses es igual al de contado y la suma de todas tus mensualidades cabe en tu presupuesto. El cashback te devuelve un porcentaje después de pagar y suele tener tope. Antes de comprar, calcula tu mensualidad en nuestra calculadora MSI.' },
    { table: { head: ['Promoción', 'Qué revisar', 'Conviene si'], rows: [
      ['Meses sin intereses', 'Precio igual al de contado y total de mensualidades activas', 'Es una compra planeada y duradera'],
      ['Cashback o bonificación', 'Tope, fecha de abono y registro previo', 'Ibas a pagar con esa tarjeta'],
      ['Descuento directo con tarjeta', 'Monto mínimo y exclusiones', 'El precio final gana a otras tiendas'],
      ['Monedero electrónico', 'Vigencia y dónde se usa', 'Compras seguido en esa tienda']
    ] } },
    { h2: 'Tus derechos como consumidor' },
    { p: 'La Ley Federal de Protección al Consumidor obliga a respetar precios, promociones y condiciones anunciadas. Si una tienda no respeta una oferta, guarda la publicidad y tu comprobante y presenta tu queja ante Profeco por sus canales oficiales. En compras en línea revisa quién vende el producto y su política de devolución.' },
    { h2: 'Qué conviene comprar en el Buen Fin' },
    { p: 'Las mejores oportunidades suelen estar en productos de valor alto que ya tenías planeados: pantallas, celulares, laptops, consolas, audio y línea blanca. Estas son nuestras recomendaciones por categoría; al final del artículo puedes descubrir el mejor precio de cada una.' },
    { table: { head: ['Categoría', 'Recomendación', 'Por qué'], rows: [
      ['Pantallas', 'Samsung 65" Mini LED M70HAF o LG 55" NanoCell', 'Buen brillo y tamaño para sala'],
      ['Celulares', 'iPhone 17 o Galaxy S25 Ultra', 'Gama alta reciente a mejor precio'],
      ['Laptops', 'MacBook Neo o HP 245 G10', 'Para escuela y oficina sin gastar de más'],
      ['Consolas', 'PS5 con Astro Bot y Gran Turismo 7 o Xbox Series X Digital', 'Regalos de fin de año'],
      ['Audio', 'Bose QuietComfort o JBL Charge 6', 'Viajes y reuniones'],
      ['Hogar', 'Frigobar Hisense 3.3 pies', 'Útil para depa, recámara u oficina'],
      ['Regalos', 'Lancôme La Nuit Trésor y la perfumería', 'Regalo seguro para Navidad']
    ] } },
    { h2: 'Checklist final' },
    { ul: ['Lista con presupuesto máximo.', 'Capturas de precio con fecha antes del 13 de noviembre.', 'Promociones de tu banco anotadas.', 'Mensualidades activas sumadas.', 'Política de devolución y garantía revisadas.'] },
    { links: ['meses-sin-intereses-cuando-convienen', 'mejor-momento-para-comprar-tecnologia', 'tarjetas-credito-cashback-mexico', 'navidad-sin-gastar-de-mas', 'pulgadas-smart-tv-tamano-correcto'] }
  ],
  faq: [
    { q: '¿Cuándo es el Buen Fin 2026?', a: 'Del viernes 13 al martes 17 de noviembre de 2026, cinco días de promociones en todo México.' },
    { q: '¿El Buen Fin aplica en compras en línea?', a: 'Sí, en tiendas en línea registradas. Revisa envío y devoluciones.' },
    { q: '¿Cómo sé si un descuento es real?', a: 'Compara el precio que registraste antes del evento con el precio final durante el Buen Fin en varias tiendas.' },
    { q: '¿Qué conviene comprar en el Buen Fin?', a: 'Productos de valor alto que ya tenías planeados: pantallas, celulares, laptops, consolas, audio y línea blanca.' },
    { q: '¿Conviene comprar a meses sin intereses?', a: 'Si el precio es igual al de contado y la mensualidad cabe en tu presupuesto. Evita acumular varias compras grandes.' },
    { q: '¿Qué hago si no respetan una promoción?', a: 'Guarda la publicidad y tu comprobante, y presenta una queja ante Profeco.' },
    { q: '¿El Buen Fin es lo mismo que el Black Friday?', a: 'Es la versión mexicana de una temporada de descuentos de noviembre, con fechas y reglas propias.' }
  ]
},
{
  slug: 'tarjetas-credito-cashback-mexico', catKey: 'ahorro', cat: 'Ahorro y compras',
  title: 'Qué tarjetas de crédito dan más cashback en México y cómo aprovecharlo',
  seoTitle: 'Tarjetas con cashback en México: cómo elegir la tuya | SuperPromo',
  description: 'Cómo funciona el cashback en tarjetas de crédito en México, qué tarjetas lo ofrecen, cómo comparar topes, comisiones y CAT, y cómo calcular cuánto te regresa al año.',
  excerpt: 'No existe una ganadora universal. Te damos el método para comparar topes, categorías, comisiones y CAT, y calcular cuánto te regresa a ti.',
  coverText: '2%', keywords: ['tarjetas de crédito con cashback', 'mejor tarjeta cashback México', 'cashback tarjeta de crédito', 'tarjeta sin anualidad cashback'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'La tarjeta con más cashback para ti es la que te regresa más dinero neto según tus compras reales, después de restar anualidad y comisiones. En México hay tarjetas con cashback general, como HSBC 2Now, que ofrece un porcentaje en todas las compras elegibles, y otras con porcentajes más altos en categorías o apps específicas, como RappiCard, DiDi Card, Santander LikeU o Costco Banamex. El cashback solo conviene si pagas el total de tu tarjeta cada mes.' },
    { p: 'Aquí te explicamos cómo funciona, cómo comparar tarjetas con un método claro y cómo calcular cuánto te regresaría cada una según tu gasto.' },
    { tip: 'Las condiciones de cashback, comisiones y topes cambian con frecuencia. Confirma siempre en el sitio oficial del emisor antes de solicitar una tarjeta.' },
    { h2: 'Qué es el cashback y en qué se diferencia de un descuento' },
    { p: 'El cashback es la devolución de un porcentaje de lo que pagaste, que recibes después de la compra como saldo a favor, depósito o crédito en tu tarjeta. Un descuento reduce el precio en el momento de pagar. La diferencia importa: con cashback pagas el precio completo y recuperas una parte más tarde, a veces con tope mensual o con condiciones para poder usarlo.' },
    { p: 'Los puntos y monederos electrónicos también son recompensas, pero suelen tener vigencia, restricciones de canje o un valor por punto menor al que parece. El cashback en dinero es más fácil de comparar.' },
    { h2: 'Tipos de tarjetas con cashback' },
    { table: { head: ['Tipo', 'Cómo funciona', 'Ejemplos en México', 'Para quién'], rows: [
      ['General', 'Un mismo porcentaje en casi todas las compras', 'HSBC 2Now (2% en compras elegibles, según el emisor)', 'Quien gasta en muchas categorías distintas'],
      ['Por app o ecosistema', 'Porcentaje mayor dentro de una app y menor fuera', 'RappiCard, DiDi Card', 'Usuarios frecuentes de esa app'],
      ['Por categorías', 'Porcentajes distintos en gasolina, farmacias, restaurantes u otras', 'Santander LikeU, Plata', 'Quien concentra su gasto en pocas categorías'],
      ['De tienda', 'Reembolso utilizable en una cadena específica', 'Costco Banamex', 'Socios que compran seguido en esa tienda']
    ] } },
    { h2: 'Cinco criterios para comparar' },
    { ol: ['Porcentaje real en tus categorías: lo que importa es el porcentaje en lo que tú compras, no el máximo anunciado.', 'Tope mensual: muchas tarjetas limitan cuánto cashback puedes recibir al mes.', 'Costo de la tarjeta: anualidad, comisión mensual o requisito de gasto mínimo para no pagarla.', 'CAT y tasa de interés: si un mes no pagas el total, los intereses pueden borrar todo el cashback del año.', 'Exclusiones: compras a meses, pagos de servicios, retiros o compras en ciertas tiendas pueden no generar cashback.'] },
    { h2: 'Cómo calcular cuánto te regresa al año' },
    { p: 'Usa esta fórmula: cashback anual neto = (gasto mensual elegible × porcentaje de cashback × 12) − costo anual de la tarjeta. Si hay tope mensual, usa el menor entre lo calculado y el tope.' },
    { h3: 'Ejemplo ilustrativo' },
    { p: 'Supongamos un gasto mensual de $8,000 en compras elegibles. Los porcentajes de esta tabla son hipotéticos para mostrar el cálculo; no representan una tarjeta específica.' },
    { table: { head: ['Escenario', 'Cálculo', 'Cashback anual', 'Costo anual', 'Neto'], rows: [
      ['2% general, sin costo', '$8,000 × 2% × 12', '$1,920', '$0', '$1,920'],
      ['5% en una app donde gastas $1,500 + 1% en el resto', '($1,500 × 5% + $6,500 × 1%) × 12', '$1,680', '$0', '$1,680'],
      ['3% general con comisión de $600 al año', '$8,000 × 3% × 12', '$2,880', '$600', '$2,280'],
      ['2% general, pero un mes pagas intereses de $900', '$1,920 − $900', '$1,920', '$900', '$1,020']
    ] } },
    { p: 'El último renglón muestra lo más importante: un solo mes sin pagar el total puede costarte casi la mitad del cashback del año. Las tarjetas de crédito en México suelen tener tasas de interés y CAT altos, por lo que el cashback solo tiene sentido para quien paga el total cada mes.' },
    { h2: 'Cómo aprovechar el cashback sin gastar de más' },
    { ul: ['Usa la tarjeta para gastos que ya ibas a hacer: súper, gasolina, servicios elegibles.', 'Domicilia pagos recurrentes si generan cashback, y paga el total al corte.', 'Revisa cada mes que el cashback se haya aplicado.', 'No compres más para «ganar» más cashback: un 2% de devolución nunca compensa un gasto innecesario.', 'Si tienes dos tarjetas, usa cada una en la categoría donde da más.'] },
    { h2: 'Dónde comparar con información oficial' },
    { p: 'La CONDUSEF publica información comparativa de productos financieros y el Buró de Entidades Financieras, donde puedes revisar comisiones, quejas y desempeño de cada institución. Banco de México publica reportes sobre tarjetas de crédito con indicadores como el CAT. Úsalos para confirmar lo que ves en la publicidad.' },
    { h2: '¿Cuál elegir?' },
    { ul: ['Si gastas en muchas categorías y pagas el total: busca un cashback general sin costo o con comisión fácil de exentar.', 'Si usas mucho una app de delivery o movilidad: una tarjeta de ese ecosistema puede darte más.', 'Si compras mucho en una tienda de membresía: evalúa su tarjeta, pero considera que el reembolso solo se usa ahí.', 'Si a veces no pagas el total: prioriza la tasa de interés más baja sobre el cashback.'] },
    { links: ['pagar-deudas-tarjeta-de-credito', 'meses-sin-intereses-cuando-convienen', 'buen-fin-2026-ofertas-reales', 'reducir-gastos-mensuales'] }
  ],
  faq: [
    { q: '¿Cuál es la tarjeta con más cashback en México?', a: 'No hay una ganadora universal. Depende de en qué gastas, del tope mensual y del costo de la tarjeta. Calcula el cashback neto con tu gasto real y compara al menos dos o tres opciones.' },
    { q: '¿El cashback es dinero real?', a: 'Depende del emisor. Algunas tarjetas lo depositan como saldo a favor o abono a tu tarjeta; otras lo dan como monedero para usar en una tienda o app específica. Revisa cómo y cuándo puedes usarlo.' },
    { q: '¿El cashback paga impuestos?', a: 'El cashback suele considerarse una bonificación sobre tus compras. Si tienes dudas sobre tu situación fiscal particular, consulta con un contador o la información del SAT.' },
    { q: '¿Las compras a meses sin intereses generan cashback?', a: 'En varias tarjetas no. Muchas excluyen las compras a meses, los retiros y algunos pagos de servicios. Revisa las exclusiones del emisor.' },
    { q: '¿Conviene una tarjeta con cashback si no pago el total?', a: 'Generalmente no. Los intereses de una tarjeta de crédito suelen ser mucho mayores que el cashback. Si no pagas el total, prioriza una tarjeta con menor tasa de interés.' }
  ],
  sources: [
    { t: 'CONDUSEF — Buró de Entidades Financieras', url: 'https://www.buro.gob.mx' },
    { t: 'CONDUSEF — Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros', url: 'https://www.condusef.gob.mx' },
    { t: 'Banco de México — Reportes sobre tarjetas de crédito', url: 'https://www.banxico.org.mx' },
    { t: 'HSBC México — Tarjeta 2Now', url: 'https://www.hsbc.com.mx' }
  ]
},
{
  slug: 'apps-para-ahorrar-al-comprar-mexico', catKey: 'ahorro', cat: 'Ahorro y compras',
  title: 'Las mejores apps para ahorrar dinero al comprar en México',
  seoTitle: 'Apps para ahorrar al comprar en México: guía 2026 | SuperPromo',
  description: 'Apps y herramientas para comparar precios, encontrar cupones y aprovechar recompensas en México: Profeco, supermercados, marketplaces, delivery y bancos.',
  excerpt: 'Comparadores de precios, apps de supermercado, cupones en marketplaces y recompensas bancarias: qué hace cada tipo y cómo usarlas sin gastar de más.',
  coverText: 'APP', keywords: ['apps para ahorrar dinero', 'apps de cupones México', 'comparar precios súper México', 'apps cashback México'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'Las apps que más ayudan a ahorrar al comprar en México se dividen en cuatro tipos: comparadores de precios como Quién es Quién en los Precios de Profeco, apps de supermercados con ofertas y monederos, marketplaces con cupones como Mercado Libre, Amazon México o Shopee, y apps bancarias o de pago con promociones y cashback. Ninguna te ahorra dinero por sí sola: ahorras cuando las usas para comparar antes de comprar algo que ya necesitabas.' },
    { p: 'En esta guía verás qué hace cada tipo, cómo combinarlas y cuáles son los errores que convierten una app de ahorro en una invitación a gastar.' },
    { tip: 'Las funciones, promociones y disponibilidad de cada app cambian. Esta guía describe su uso general a octubre de 2026; confirma condiciones dentro de cada app antes de comprar.' },
    { h2: '1. Comparadores de precios' },
    { p: 'El programa Quién es Quién en los Precios de Profeco publica precios de productos de la canasta básica y otros artículos en distintas tiendas y ciudades. Es útil para saber cuánto debería costar algo y en qué cadena suele estar más barato en tu zona. También funciona como referencia para detectar descuentos inflados en temporadas como el Buen Fin.' },
    { ul: ['Úsalo antes de hacer el súper grande del mes.', 'Compara precio por kilo o litro, no por paquete.', 'Revisa la fecha de los datos: los precios cambian cada semana.'] },
    { h2: '2. Apps de supermercados' },
    { p: 'Las cadenas de autoservicio con presencia nacional, como Walmart, Soriana, Chedraui o La Comer, tienen apps donde publican ofertas semanales, folletos digitales y, en algunos casos, programas de monedero o puntos. Sirven para planear tu lista según lo que esté en oferta esa semana.' },
    { ul: ['Revisa el folleto antes de hacer tu menú semanal.', 'Si la cadena tiene monedero, verifica vigencia y en qué productos aplica.', 'Compara el precio en app con el de tienda física: a veces son distintos.'] },
    { h2: '3. Marketplaces con cupones' },
    { p: 'Mercado Libre, Amazon México y Shopee ofrecen cupones, descuentos por volumen y promociones por temporada. Son útiles para tecnología, hogar y productos que no encuentras fácil en tiendas cercanas. En nuestra selección de ofertas revisamos publicaciones de estas plataformas.' },
    { ul: ['Revisa la sección de cupones antes de pagar: algunos se activan manualmente.', 'Compara el precio con envío incluido.', 'Verifica la reputación del vendedor y si el producto es vendido por la plataforma o por un tercero.', 'Lee la política de devolución del vendedor.'] },
    { h2: '4. Apps de delivery y movilidad' },
    { p: 'Rappi, DiDi Food y Uber Eats publican promociones frecuentes, pero el costo de envío, la tarifa de servicio y la propina pueden hacer que un platillo cueste bastante más que en el local. Úsalas para promociones concretas, no como hábito diario.' },
    { h2: '5. Apps bancarias y de pago' },
    { p: 'Muchos bancos y billeteras digitales, como Mercado Pago, publican promociones con tiendas aliadas: descuentos, meses sin intereses o devoluciones. Revisa la sección de promociones de tu banco antes de compras grandes.' },
    { h2: 'Cómo combinarlas en una compra' },
    { ol: ['Define qué vas a comprar y tu presupuesto máximo.', 'Consulta el precio de referencia en Profeco o en dos tiendas.', 'Busca cupones en el marketplace o promociones en la app del súper.', 'Revisa si tu banco tiene promoción con esa tienda.', 'Compara el total final con envío y decide.'] },
    { h2: 'Tabla rápida: qué app usar para qué' },
    { table: { head: ['Necesidad', 'Tipo de app', 'Qué revisar'], rows: [
      ['Súper semanal', 'Apps de supermercado y Profeco', 'Folleto semanal y precio por kilo'],
      ['Tecnología', 'Marketplaces', 'Cupón, vendedor, garantía y envío'],
      ['Comida a domicilio', 'Delivery', 'Costo total con envío y servicio'],
      ['Compras grandes', 'App de tu banco', 'Promociones, MSI y cashback'],
      ['Saber si un descuento es real', 'Comparadores', 'Historial y precio en otras tiendas']
    ] } },
    { h2: 'Errores que convierten el ahorro en gasto' },
    { ul: ['Activar notificaciones de todas las apps: recibir ofertas todo el día aumenta las compras impulsivas.', 'Comprar para alcanzar un monto mínimo de envío gratis.', 'Acumular puntos que caducan sin usarlos.', 'Pensar en el ahorro en porcentaje y no en pesos.'] },
    { tip: 'Desactiva las notificaciones promocionales y revisa las apps solo cuando tengas una compra planeada. Así las usas como herramienta, no como vitrina.' },
    { h2: 'Seguridad al usar apps de compra' },
    { ul: ['Descarga las apps solo desde las tiendas oficiales.', 'Activa la verificación en dos pasos cuando esté disponible.', 'Desconfía de cupones que llegan por mensajes de desconocidos.', 'Usa tarjetas digitales o con límite para compras en línea.'] },
    { links: ['super-con-1000-pesos-semana', 'buen-fin-2026-ofertas-reales', 'tarjetas-credito-cashback-mexico', 'reducir-gastos-mensuales'] }
  ],
  faq: [
    { q: '¿Cuál es la mejor app para comparar precios del súper en México?', a: 'Quién es Quién en los Precios de Profeco es una referencia pública útil para comparar productos de la canasta básica entre tiendas y ciudades. Complementa con las apps de los supermercados de tu zona.' },
    { q: '¿Las apps de cupones realmente ahorran dinero?', a: 'Sí, si las usas para productos que ya ibas a comprar y comparas el precio final. Si te llevan a comprar cosas que no necesitabas, el ahorro desaparece.' },
    { q: '¿Es seguro comprar en marketplaces?', a: 'Generalmente sí, si revisas la reputación del vendedor, compras dentro de la plataforma y no haces pagos fuera de ella. Revisa siempre la política de devolución.' },
    { q: '¿Conviene pedir comida a domicilio con promoción?', a: 'Solo si comparas el total con envío, tarifa de servicio y propina. En muchos casos el costo final es mayor que comprar directamente en el local.' },
    { q: '¿Qué hago con los puntos y monederos que acumulo?', a: 'Revisa su vigencia y úsalos en compras planeadas. Un punto que caduca no te ahorró nada.' }
  ],
  sources: [
    { t: 'Profeco — Quién es Quién en los Precios', url: 'https://www.gob.mx/profeco' },
    { t: 'CONDUSEF — Recomendaciones para compras en línea', url: 'https://www.condusef.gob.mx' }
  ]
},
{
  slug: 'ahorrar-10000-pesos-en-un-ano', catKey: 'ahorro', cat: 'Ahorro y compras',
  title: 'Cómo ahorrar $10,000 pesos en un año aunque ganes poco',
  seoTitle: 'Cómo ahorrar $10,000 pesos en un año: plan semanal | SuperPromo',
  description: 'Planes semanales, quincenales y mensuales para ahorrar $10,000 pesos en un año, con ejemplos por nivel de ingreso, un reto de 52 semanas y estrategias si tu ingreso varía.',
  excerpt: 'Tres planes con números exactos, un reto de 52 semanas que sí cuadra y qué hacer si tu ingreso cambia cada mes.',
  coverText: '$10K', keywords: ['cómo ahorrar 10000 pesos', 'ahorrar dinero ganando poco', 'reto 52 semanas', 'plan de ahorro anual'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'Para ahorrar $10,000 pesos en un año necesitas apartar $192.31 a la semana, $416.67 por quincena o $833.33 al mes. Aunque ganes poco, es alcanzable si apartas el dinero en cuanto cobras, lo guardas en un lugar separado de tu cuenta de gastos y empiezas con montos pequeños que puedas sostener.' },
    { p: 'En esta guía tienes tres planes con números exactos, un reto de 52 semanas que sí suma la meta, ejemplos según tu ingreso y qué hacer si tu ingreso cambia cada mes.' },
    { h2: 'Los tres planes base' },
    { table: { head: ['Plan', 'Monto por periodo', 'Periodos', 'Total'], rows: [
      ['Semanal', '$192.31', '52 semanas', '$10,000'],
      ['Quincenal', '$416.67', '24 quincenas', '$10,000'],
      ['Mensual', '$833.33', '12 meses', '$10,000']
    ] } },
    { p: 'Elige el plan que coincida con la frecuencia con la que cobras. Si te pagan cada quincena, el plan quincenal es el más fácil de sostener porque apartas el dinero el mismo día que lo recibes.' },
    { h2: '¿Cuánto representa según tu ingreso?' },
    { table: { head: ['Ingreso mensual neto', 'Ahorro mensual', 'Porcentaje del ingreso'], rows: [
      ['$8,000', '$833.33', '10.4%'], ['$10,000', '$833.33', '8.3%'], ['$12,000', '$833.33', '6.9%'], ['$15,000', '$833.33', '5.6%']
    ] } },
    { p: 'Con un ingreso de $8,000, apartar más del 10% puede ser difícil si tienes gastos fijos altos. En ese caso, empieza con una meta menor, por ejemplo $5,000 al año ($416.67 al mes), y ve subiendo conforme liberes gastos. Ahorrar algo constante es mejor que intentar una meta que abandones en marzo.' },
    { h2: 'Reto de 52 semanas que sí llega a $10,000' },
    { p: 'El reto clásico de ahorrar $1 la primera semana, $2 la segunda y así hasta $52 suma $1,378. Para llegar a $10,000 con el mismo principio, multiplica cada semana por $7: la semana 1 ahorras $7, la semana 2 $14 y la semana 52 $364. El total es $9,646. Los $354 restantes los puedes completar con un ingreso extra, como un aguinaldo o una venta.' },
    { table: { head: ['Semanas', 'Ahorro semanal', 'Acumulado al final del bloque'], rows: [
      ['1 a 13', '$7 a $91', '$637'], ['14 a 26', '$98 a $182', '$2,548'], ['27 a 39', '$189 a $273', '$5,642'], ['40 a 52', '$280 a $364', '$9,646']
    ] } },
    { p: 'Si las últimas semanas te parecen pesadas porque coinciden con diciembre, haz el reto al revés: empieza con $364 en enero y termina con $7. El total es el mismo.' },
    { h2: 'Si tu ingreso cambia cada mes' },
    { p: 'Si trabajas por tu cuenta, vendes o recibes propinas, un monto fijo puede no funcionar. Usa un porcentaje: aparta entre 5% y 10% de cada ingreso que recibas, sin importar el monto. En los meses buenos, aparta un poco más para compensar los meses flojos.' },
    { ul: ['Lleva una nota con lo que entra y lo que apartas.', 'Define un mínimo: aunque sea $50, aparta algo en cada ingreso.', 'Cuando recibas un ingreso grande o inesperado, aparta una parte mayor.'] },
    { h2: 'Dónde guardar tu ahorro' },
    { p: 'Lo importante es separarlo de tu dinero de gastos. Una cuenta distinta, un apartado dentro de tu app bancaria o un instrumento de bajo riesgo como CETES te ayudan a no tocarlo. Si eliges un instrumento con rendimiento, revisa su liquidez y su protección. En nuestra guía sobre dónde guardar tu dinero comparamos opciones.' },
    { h2: 'De dónde puede salir el dinero' },
    { ul: ['Revisa suscripciones que no usas: dos plataformas de streaming pueden sumar más de $300 al mes.', 'Reduce comidas fuera planeando el súper de la semana.', 'Vende cosas que ya no usas y manda lo que ganes directo al ahorro.', 'Destina una parte del aguinaldo o de la PTU, si la recibes.', 'Compara tu plan de celular: a veces un plan más bajo cubre tu uso real.'] },
    { h2: 'Tracker de ahorro para imprimir o copiar' },
    { p: 'Copia esta tabla en una hoja o en las notas de tu celular y marca cada periodo cuando lo cumplas.' },
    { table: { head: ['Mes', 'Meta', 'Ahorré', 'Acumulado'], rows: [
      ['Enero', '$833', '', ''], ['Febrero', '$833', '', ''], ['Marzo', '$833', '', ''], ['Abril', '$833', '', ''],
      ['Mayo', '$833', '', ''], ['Junio', '$833', '', ''], ['Julio', '$833', '', ''], ['Agosto', '$833', '', ''],
      ['Septiembre', '$833', '', ''], ['Octubre', '$833', '', ''], ['Noviembre', '$833', '', ''], ['Diciembre', '$837', '', '']
    ] } },
    { tip: 'Programa una transferencia automática a tu cuenta de ahorro el mismo día que cobras. Lo que no ves en tu cuenta de gastos es más fácil no gastarlo.' },
    { h2: 'Qué hacer si un mes no puedes' },
    { p: 'No abandones el plan. Ahorra lo que puedas ese mes y reparte la diferencia en los siguientes. Si usas parte del ahorro para una emergencia, está bien: para eso sirve. Después, retoma desde donde te quedaste.' },
    { links: ['organizar-tu-quincena', 'donde-guardar-tu-dinero-rendimientos', 'reducir-gastos-mensuales', 'vender-cosas-que-ya-tienes'] }
  ],
  faq: [
    { q: '¿Cuánto debo ahorrar a la semana para juntar $10,000 en un año?', a: '$192.31 a la semana durante 52 semanas. Si cobras por quincena, son $416.67 por quincena.' },
    { q: '¿Es posible ahorrar si gano el salario mínimo?', a: 'Sí, aunque la meta puede ser menor. Empieza con un porcentaje pequeño y constante, por ejemplo 5% de cada ingreso, y súbelo cuando reduzcas algún gasto.' },
    { q: '¿Qué es el reto de las 52 semanas?', a: 'Es un plan en el que ahorras un monto creciente cada semana. Si ahorras $7 la primera semana y aumentas $7 cada semana, juntas $9,646 en un año.' },
    { q: '¿Dónde guardo mi ahorro para no gastarlo?', a: 'En una cuenta separada de tu cuenta de gastos o en un instrumento de bajo riesgo como CETES. Revisa liquidez y protección antes de elegir.' },
    { q: '¿Qué hago si tengo deudas?', a: 'Si tienes deudas con intereses altos, como tarjetas de crédito, suele convenir apartar un pequeño fondo de emergencia y dedicar el resto a pagar la deuda más cara primero.' }
  ],
  sources: [
    { t: 'CONDUSEF — Educación financiera: ahorro', url: 'https://www.condusef.gob.mx' },
    { t: 'Cetesdirecto — Ahorro e inversión desde $100', url: 'https://www.cetesdirecto.com' }
  ]
}
];
