// Categoría D — Finanzas personales, inversión y gastos importantes
export const POSTS_FINANZAS = [
{
  slug: 'empezar-a-invertir-con-poco-dinero', catKey: 'finanzas', cat: 'Finanzas personales',
  title: 'Cómo empezar a invertir con $100, $500 o $1,000 pesos en México',
  seoTitle: 'Cómo invertir con $100, $500 o $1,000 pesos en México | SuperPromo',
  description: 'Cómo empezar a invertir con poco dinero en México: diferencia entre ahorrar e invertir, riesgo, liquidez, CETES desde $100 y otras alternativas reguladas.',
  excerpt: 'Ahorro e inversión no son lo mismo. Qué revisar antes de empezar, cómo funcionan los CETES desde $100 y cuánto podrías ganar con tasas reales de octubre de 2026.',
  coverText: '$100', keywords: ['cómo invertir con poco dinero', 'invertir 100 pesos', 'invertir en CETES', 'cómo empezar a invertir en México'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'En México puedes empezar a invertir desde $100 pesos con CETES a través de Cetesdirecto, la plataforma oficial del gobierno federal para comprar valores gubernamentales. También existen fondos de inversión y otras alternativas reguladas con montos bajos. Antes de invertir, conviene tener un pequeño fondo de emergencia, entender que toda inversión tiene algún riesgo y elegir un plazo de acuerdo con cuándo necesitarás el dinero.' },
    { p: 'Esta guía explica la diferencia entre ahorrar e invertir, los conceptos básicos que debes entender y qué puedes esperar con $100, $500 o $1,000 pesos.' },
    { tip: 'Esta guía es informativa y no es una recomendación de inversión personalizada. Las tasas citadas son de la subasta de Banco de México con colocación del 22 de octubre de 2026 y cambian cada semana. No hay rendimientos garantizados en el futuro.' },
    { h2: 'Ahorrar e invertir no es lo mismo' },
    { p: 'Ahorrar es apartar dinero para tenerlo disponible. Invertir es poner ese dinero en un instrumento que puede generar rendimiento a cambio de aceptar algún nivel de riesgo y, a veces, de no poder retirarlo de inmediato. El ahorro protege tu presente; la inversión busca que tu dinero crezca o, al menos, no pierda valor frente a la inflación.' },
    { h2: 'Cuatro conceptos antes de empezar' },
    { ul: ['Riesgo: la posibilidad de que el resultado sea distinto al esperado, incluso de perder parte de lo invertido.', 'Liquidez: qué tan rápido puedes convertir tu inversión en efectivo sin perder valor.', 'Plazo u horizonte: cuánto tiempo dejarás el dinero invertido.', 'Diversificación: repartir tu dinero en distintos instrumentos para no depender de uno solo.'] },
    { h2: 'Antes de invertir: tres preguntas' },
    { ol: ['¿Tengo un fondo de emergencia, aunque sea pequeño? Si no, empieza por ahí.', '¿Tengo deudas con intereses altos, como tarjetas de crédito? Pagarlas suele dar un «rendimiento» mayor que cualquier inversión conservadora.', '¿Cuándo voy a necesitar este dinero? Esto define el plazo.'] },
    { h2: 'Qué son los CETES' },
    { p: 'Los Certificados de la Tesorería de la Federación (CETES) son títulos de deuda que emite el gobierno federal. Los compras a un precio menor que su valor nominal y, al vencimiento, recibes el valor completo; la diferencia es tu rendimiento. Se subastan cada semana y se consideran de los instrumentos de menor riesgo en pesos. A través de Cetesdirecto puedes invertir desde $100.' },
    { table: { head: ['Plazo', 'Tasa anual (subasta reciente)', 'Fecha de colocación'], rows: [
      ['28 días', '6.23%', '22 oct 2026'], ['91 días', '6.75%', '22 oct 2026'], ['182 días', '6.73%', '22 oct 2026'], ['364 días', '7.11%', '15 oct 2026']
    ] } },
    { p: 'Como referencia, la tasa objetivo de Banco de México se ubicaba en 6.50% en esa fecha. Las tasas de CETES son anuales y brutas: a 28 días no ganas 6.23%, sino la parte proporcional a 28 días, antes de la retención de impuestos.' },
    { h2: 'Cuánto podrías ganar con $100, $500 y $1,000' },
    { p: 'Cálculo aproximado a un año con la tasa de 364 días (7.11%), antes de impuestos. La retención provisional de ISR para 2026 es de 0.90% anual sobre el capital invertido.' },
    { table: { head: ['Inversión', 'Rendimiento bruto aproximado a 1 año', 'Retención ISR aproximada', 'Neto aproximado'], rows: [
      ['$100', '$7.11', '$0.90', '$6.21'], ['$500', '$35.55', '$4.50', '$31.05'], ['$1,000', '$71.10', '$9.00', '$62.10']
    ] } },
    { p: 'Los montos son pequeños, y está bien: el objetivo al empezar con poco es aprender cómo funciona, crear el hábito y, con el tiempo, aumentar lo que inviertes. Si la inflación anual es mayor que tu rendimiento neto, tu dinero pierde poder de compra aunque el saldo suba.' },
    { h2: 'Otras alternativas reguladas' },
    { table: { head: ['Instrumento', 'Riesgo', 'Liquidez', 'A considerar'], rows: [
      ['CETES y Bonddia en Cetesdirecto', 'Bajo', 'Alta en Bonddia; al vencimiento en CETES', 'Rendimiento moderado'],
      ['Cuentas y pagarés bancarios', 'Bajo', 'Variable según plazo', 'Protegidos por el IPAB hasta un límite'],
      ['Fondos de inversión de deuda', 'Bajo a medio', 'Diaria o semanal en muchos casos', 'Comisiones; rendimiento no garantizado'],
      ['Fondos de renta variable', 'Medio a alto', 'Variable', 'Pueden bajar de valor; horizonte largo'],
      ['SOFIPOs autorizadas', 'Medio', 'Según producto', 'Verifica autorización en CNBV y su nivel de protección']
    ] } },
    { h2: 'Cómo empezar en Cetesdirecto' },
    { ol: ['Entra al sitio oficial cetesdirecto.com o descarga su app oficial.', 'Regístrate con tu CURP, RFC, identificación y una cuenta bancaria a tu nombre.', 'Deposita desde $100 desde tu banco.', 'Elige instrumento y plazo, o programa un ahorro recurrente.', 'Decide si quieres reinvertir automáticamente al vencimiento.'] },
    { h2: 'Señales de alerta' },
    { ul: ['Te prometen rendimientos garantizados muy por encima del mercado.', 'Te piden depositar en cuentas personales o en criptomonedas a desconocidos.', 'La empresa no aparece en los registros de la CNBV o la CONDUSEF.', 'Te presionan para decidir rápido.'] },
    { links: ['donde-guardar-tu-dinero-rendimientos', 'ahorrar-10000-pesos-en-un-ano', 'pagar-deudas-tarjeta-de-credito', 'organizar-tu-quincena'] }
  ],
  faq: [
    { q: '¿Puedo invertir con 100 pesos en México?', a: 'Sí. En Cetesdirecto puedes invertir desde $100 en CETES y otros valores gubernamentales.' },
    { q: '¿Cuánto gano si invierto $1,000 en CETES?', a: 'Con una tasa anual de 7.11% a un año, el rendimiento bruto aproximado sería de $71.10, menos una retención provisional de alrededor de $9. Las tasas cambian cada semana.' },
    { q: '¿Los CETES tienen riesgo?', a: 'Se consideran de bajo riesgo porque los emite el gobierno federal, pero ninguna inversión está libre de riesgo. Si necesitas el dinero antes del vencimiento, revisa las condiciones de venta anticipada.' },
    { q: '¿Conviene invertir si tengo deudas?', a: 'Si tienes deudas con intereses altos, como tarjetas de crédito, suele convenir pagarlas primero, porque el interés que pagas es mucho mayor que el rendimiento de una inversión conservadora.' },
    { q: '¿Qué es mejor, ahorrar o invertir?', a: 'Son complementarios. Primero ahorra un fondo de emergencia de fácil acceso; después invierte el dinero que no necesitarás en el corto plazo.' },
    { q: '¿Cómo verifico si una institución es legal?', a: 'Consulta el padrón de entidades supervisadas de la CNBV y el Buró de Entidades Financieras de la CONDUSEF.' }
  ],
  sources: [
    { t: 'Cetesdirecto — Sitio oficial', url: 'https://www.cetesdirecto.com' },
    { t: 'Banco de México — Resultados de subastas de valores gubernamentales', url: 'https://www.banxico.org.mx' },
    { t: 'CNBV — Entidades supervisadas', url: 'https://www.gob.mx/cnbv' },
    { t: 'CONDUSEF — Buró de Entidades Financieras', url: 'https://www.buro.gob.mx' },
    { t: 'Cetes.app — Tasas de la subasta del 20 de octubre de 2026', url: 'https://cetes.app/cetes-hoy' }
  ]
},
{
  slug: 'donde-guardar-tu-dinero-rendimientos', catKey: 'finanzas', cat: 'Finanzas personales',
  title: '¿Dónde guardar tu dinero para que genere rendimientos sin arriesgarlo de más?',
  seoTitle: 'Dónde guardar tu dinero con rendimiento y bajo riesgo | SuperPromo',
  description: 'Comparativa de cuentas de ahorro, pagarés, CETES, fondos de deuda y SOFIPOs en México: rendimiento, liquidez, inflación, comisiones y protección de cada opción.',
  excerpt: 'Bajo riesgo no significa cero riesgo. Comparamos liquidez, protección e inflación de las opciones más comunes para guardar tu dinero.',
  coverText: '%', keywords: ['dónde guardar mi dinero', 'cuenta de ahorro con rendimiento', 'dónde invertir sin riesgo', 'IPAB protección ahorros'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'Para guardar tu dinero con rendimiento y bajo riesgo en México, las opciones más comunes son las cuentas y pagarés bancarios protegidos por el IPAB, los CETES y otros valores gubernamentales a través de Cetesdirecto, los fondos de inversión de deuda y las SOFIPOs autorizadas por la CNBV. La mejor opción depende de cuándo necesitarás el dinero: tu fondo de emergencia necesita liquidez inmediata; el dinero que no usarás en un año puede buscar más rendimiento con menos liquidez.' },
    { tip: 'Bajo riesgo no significa cero riesgo. Las protecciones son distintas según el producto y la institución.' },
    { h2: 'Tres factores para decidir' },
    { ul: ['Liquidez: qué tan rápido puedes disponer de tu dinero sin penalización.', 'Protección: qué respaldo existe si la institución tiene problemas.', 'Rendimiento real: lo que ganas después de impuestos, comisiones e inflación.'] },
    { h2: 'Comparativa de opciones' },
    { table: { head: ['Opción', 'Liquidez', 'Protección', 'Rendimiento', 'Para qué sirve'], rows: [
      ['Cuenta de ahorro o débito con rendimiento', 'Inmediata', 'IPAB hasta 400 mil UDIS por persona por banco', 'Bajo a moderado; revisa condiciones', 'Fondo de emergencia'],
      ['Pagaré o depósito a plazo bancario', 'Al vencimiento', 'IPAB hasta 400 mil UDIS', 'Moderado', 'Dinero que no usarás en meses'],
      ['CETES y Bonddia (Cetesdirecto)', 'Bonddia diaria; CETES al vencimiento', 'Respaldo del gobierno federal', 'Moderado; tasa de mercado', 'Ahorro e inversión conservadora'],
      ['Fondos de inversión de deuda', 'Diaria o semanal en muchos', 'No hay seguro de depósito; el valor puede variar', 'Variable', 'Diversificar con bajo riesgo'],
      ['SOFIPO autorizada', 'Según producto', 'Seguro de depósitos propio con un límite menor que el del IPAB', 'Moderado a alto', 'Parte de tu ahorro, no todo']
    ] } },
    { h2: 'Qué protege el IPAB y qué no' },
    { p: 'El Instituto para la Protección al Ahorro Bancario (IPAB) protege los depósitos en bancos hasta 400 mil UDIS por persona y por banco. Cubre cuentas de ahorro, de cheques, de nómina, depósitos a plazo y pagarés. No cubre inversiones en fondos, acciones, valores gubernamentales ni productos de instituciones que no son bancos. El valor en pesos de la UDI cambia diariamente; puedes consultar su equivalencia en el sitio del IPAB o de Banco de México.' },
    { h2: 'La inflación también cuenta' },
    { p: 'Si tu dinero gana 3% al año y la inflación es de 4%, tu saldo sube pero puedes comprar menos con él. El rendimiento real aproximado es el rendimiento nominal menos la inflación. Por eso guardar todo el ahorro en una cuenta sin rendimiento hace que pierda valor con el tiempo.' },
    { h3: 'Ejemplo' },
    { p: 'Con $20,000 en una cuenta que paga 0%, al cabo de un año sigues teniendo $20,000, pero con una inflación de 4% su poder de compra equivale a unos $19,230. Si esos $20,000 estuvieran en un instrumento que paga 7% bruto, tendrías alrededor de $21,400 antes de impuestos, es decir, un rendimiento real positivo.' },
    { h2: 'Comisiones y condiciones' },
    { ul: ['Revisa si la cuenta cobra comisión por manejo o por saldo mínimo.', 'Confirma si el rendimiento aplica a todo el saldo o solo hasta cierto monto.', 'Lee si hay tasas promocionales que bajan después de unos meses.', 'En fondos, revisa la comisión por administración y su efecto en el rendimiento.'] },
    { h2: 'Cómo repartir tu dinero' },
    { p: 'Una forma sencilla es pensar en capas según cuándo vas a necesitar el dinero.' },
    { ol: ['Capa inmediata: fondo de emergencia en una cuenta con liquidez diaria y protección IPAB, o en Bonddia.', 'Capa de corto plazo (de 3 a 12 meses): pagarés o CETES de 91 a 364 días para gastos planeados.', 'Capa de largo plazo (más de un año): instrumentos con mayor rendimiento potencial, sabiendo que pueden variar.'] },
    { h2: 'Cómo verificar una institución' },
    { ul: ['Consulta el padrón de entidades supervisadas de la CNBV.', 'Revisa el Buró de Entidades Financieras de CONDUSEF: quejas, sanciones y comisiones.', 'En SOFIPOs, confirma su nivel de operaciones y si cuenta con seguro de depósitos.', 'Desconfía de rendimientos muy superiores a los de CETES sin una explicación clara del riesgo.'] },
    { links: ['empezar-a-invertir-con-poco-dinero', 'ahorrar-10000-pesos-en-un-ano', 'organizar-tu-quincena', 'pagar-deudas-tarjeta-de-credito'] }
  ],
  faq: [
    { q: '¿Dónde guardo mi fondo de emergencia?', a: 'En una opción con liquidez inmediata y bajo riesgo, como una cuenta bancaria protegida por el IPAB o un instrumento de liquidez diaria como Bonddia en Cetesdirecto.' },
    { q: '¿Cuánto protege el IPAB?', a: 'Hasta 400 mil UDIS por persona y por banco en depósitos bancarios como cuentas de ahorro, nómina, plazo fijo y pagarés.' },
    { q: '¿Las SOFIPOs son seguras?', a: 'Las SOFIPOs autorizadas por la CNBV pueden tener un seguro de depósitos propio, con un límite menor que el del IPAB. Verifica su autorización y no concentres todo tu ahorro en una sola institución.' },
    { q: '¿Los fondos de inversión tienen seguro?', a: 'No tienen un seguro de depósito como el IPAB. Su valor puede subir o bajar según los instrumentos en los que invierten.' },
    { q: '¿Qué es el rendimiento real?', a: 'Es lo que ganas después de descontar la inflación. Si tu rendimiento es menor que la inflación, tu dinero pierde poder de compra.' }
  ],
  sources: [
    { t: 'IPAB — Protección al ahorro bancario', url: 'https://www.gob.mx/ipab' },
    { t: 'CNBV — Padrón de entidades supervisadas', url: 'https://www.gob.mx/cnbv' },
    { t: 'CONDUSEF — Buró de Entidades Financieras', url: 'https://www.buro.gob.mx' },
    { t: 'Cetesdirecto', url: 'https://www.cetesdirecto.com' },
    { t: 'Banco de México — Valor de la UDI e inflación', url: 'https://www.banxico.org.mx' }
  ]
},
{
  slug: 'fiesta-de-cumpleanos-con-3000-pesos', catKey: 'finanzas', cat: 'Finanzas personales',
  title: 'Cómo organizar una fiesta de cumpleaños con $3,000 pesos y que parezca de $10,000',
  seoTitle: 'Fiesta de cumpleaños con $3,000 pesos: presupuesto real | SuperPromo',
  description: 'Presupuesto completo para una fiesta de cumpleaños con $3,000 pesos: planes para 15, 20 y 30 invitados, pastel, comida, decoración DIY, recuerdos y lista de compras.',
  excerpt: 'Presupuestos con la suma a la vista para 15, 20 y 30 invitados, ideas de decoración que se ven caras y en qué no conviene ahorrar.',
  coverText: '$3,000', keywords: ['fiesta con 3000 pesos', 'fiesta de cumpleaños económica', 'presupuesto fiesta infantil', 'decoración fiesta barata'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'Con $3,000 pesos puedes organizar una fiesta de cumpleaños para 15 a 30 invitados si cocinas o compras una taquiza sencilla, eliges un pastel de tamaño justo, haces la decoración tú mismo con una paleta de dos o tres colores y usas invitaciones digitales. Lo que hace que una fiesta se vea más cara no es gastar en todo, sino concentrar el presupuesto en una mesa principal bien montada y cuidar los detalles visibles.' },
    { tip: 'Los precios son estimaciones de octubre de 2026 en zonas urbanas. El resultado visual dependerá de tu tiempo, habilidad y materiales; un presupuesto de $3,000 no garantiza el mismo resultado que uno de $10,000.' },
    { h2: 'Presupuesto para 20 invitados' },
    { table: { head: ['Concepto', 'Qué incluye', 'Costo estimado'], rows: [
      ['Pastel', 'Pastel para 20 porciones de pastelería local', '$550'],
      ['Comida', 'Taquiza casera de 3 guisados con tortillas, salsas y frijoles', '$900'],
      ['Bebidas', 'Agua fresca en garrafa y refrescos de 2 litros', '$250'],
      ['Decoración', 'Globos, guirnalda DIY, mantel y papel para fondo', '$450'],
      ['Desechables', 'Platos, vasos, cubiertos y servilletas', '$200'],
      ['Invitaciones', 'Digitales por WhatsApp', '$0'],
      ['Recuerdos', '20 bolsitas sencillas', '$300'],
      ['Piñata y dulces', 'Piñata mediana y dulces para rellenar', '$350'],
      ['Total', '', '$3,000']
    ] } },
    { h2: 'Plan para 15 invitados' },
    { table: { head: ['Concepto', 'Costo estimado'], rows: [
      ['Pastel para 15', '$450'], ['Taquiza casera', '$700'], ['Bebidas', '$200'], ['Decoración', '$450'],
      ['Desechables', '$150'], ['Recuerdos', '$225'], ['Piñata y dulces', '$300'], ['Total', '$2,475']
    ] } },
    { p: 'Te sobran $525 que puedes usar para mejorar la mesa de postres, contratar una hora de juegos o guardar como imprevisto.' },
    { h2: 'Plan para 30 invitados' },
    { table: { head: ['Concepto', 'Costo estimado'], rows: [
      ['Pastel más gelatinas caseras', '$650'], ['Taquiza casera con más tortilla y guisados rendidores', '$1,200'], ['Bebidas', '$300'],
      ['Decoración enfocada en la mesa principal', '$300'], ['Desechables', '$250'], ['Piñata y dulces', '$300'], ['Recuerdos', 'Se omiten'], ['Total', '$3,000']
    ] } },
    { p: 'Con 30 invitados el presupuesto es ajustado. Lo más realista es omitir recuerdos, apoyarte en guisados rendidores como tinga, papas con chorizo o rajas con crema, y pedir ayuda a familiares para cocinar.' },
    { h2: 'Cómo hacer que se vea más cara' },
    { ul: ['Elige una paleta de dos o tres colores y úsala en todo: globos, mantel, servilletas y pastel.', 'Concentra la decoración en un solo punto: la mesa del pastel con un fondo de papel o tela.', 'Haz una guirnalda orgánica de globos de distintos tamaños: se ve más elaborada que globos sueltos.', 'Usa recipientes de vidrio o canastas que ya tengas para servir.', 'Coloca etiquetas impresas en los guisados y bebidas.', 'Agrega iluminación con series de luces si la fiesta es de tarde.'] },
    { h2: 'Decoración DIY' },
    { ol: ['Fondo: pliegos de papel crepé en tiras o una tela lisa sujeta con cinta.', 'Guirnalda: infla globos de tres tamaños y únelos a una cinta de arco de globos.', 'Banderines: imprime letras en hojas de color y pégalas a un cordón.', 'Centros de mesa: frascos con flores de temporada o dulces del color de la fiesta.'] },
    { h2: 'Lista de compras' },
    { ul: ['Pastel encargado con una semana de anticipación.', 'Ingredientes de la taquiza: carne o pollo, papa, chile, cebolla, crema, tortillas, frijol.', 'Bebidas: concentrado o fruta para agua fresca, refrescos, hielo.', 'Desechables en la paleta de color.', 'Globos, cinta de arco, papel para fondo.', 'Piñata y dulces.', 'Bolsitas y contenido para recuerdos.'] },
    { h2: 'En qué no conviene ahorrar' },
    { ul: ['Seguridad: si hay niños, revisa el espacio y evita objetos peligrosos.', 'Comida suficiente: calcula de 4 a 5 tacos por adulto y 2 a 3 por niño.', 'Higiene: refrigera los guisados con crema y sírvelos a tiempo.', 'Hielo y agua: en fiestas de día se acaban primero.'] },
    { h2: 'Calendario de preparación' },
    { table: { head: ['Cuándo', 'Qué hacer'], rows: [
      ['3 semanas antes', 'Define invitados, presupuesto y paleta de color'], ['2 semanas antes', 'Envía invitaciones digitales'],
      ['1 semana antes', 'Encarga el pastel y compra desechables y decoración'], ['2 días antes', 'Compra ingredientes y arma recuerdos'],
      ['1 día antes', 'Cocina guisados y prepara la decoración'], ['El día', 'Monta la mesa principal, prepara bebidas y disfruta']
    ] } },
    { links: ['super-con-1000-pesos-semana', 'organizar-tu-quincena', 'reducir-gastos-mensuales', 'ahorrar-10000-pesos-en-un-ano'] }
  ],
  faq: [
    { q: '¿Se puede hacer una fiesta de cumpleaños con $3,000 pesos?', a: 'Sí, para 15 a 30 invitados, si cocinas o preparas una taquiza sencilla, usas invitaciones digitales y haces la decoración tú mismo.' },
    { q: '¿Qué comida rinde más para una fiesta?', a: 'Una taquiza de guisados como tinga, papas con chorizo o rajas con crema rinde bien y suele ser más económica que platillos individuales.' },
    { q: '¿Cuántos tacos calculo por invitado?', a: 'Como referencia, de 4 a 5 tacos por adulto y de 2 a 3 por niño. Ajusta según la hora de la fiesta y si habrá otros alimentos.' },
    { q: '¿Cómo decoro una fiesta con poco dinero?', a: 'Elige una paleta de pocos colores, concentra la decoración en la mesa del pastel y usa una guirnalda de globos de varios tamaños.' },
    { q: '¿Los precios incluyen renta de lugar?', a: 'No. El presupuesto supone que la fiesta se hace en casa o en un espacio sin costo.' }
  ],
  sources: [
    { t: 'Profeco — Quién es Quién en los Precios', url: 'https://www.gob.mx/profeco' }
  ]
},
{
  slug: 'mejor-momento-para-comprar-tecnologia', catKey: 'finanzas', cat: 'Finanzas personales',
  title: '¿Cuándo es el mejor momento para comprar celulares, laptops y electrodomésticos?',
  seoTitle: 'Cuándo comprar celulares, laptops y electrodomésticos | SuperPromo',
  description: 'Temporadas de descuento en México, ciclos de lanzamiento, cómo revisar el historial de precios, garantías y financiamiento para saber cuándo comprar tecnología y línea blanca.',
  excerpt: 'Temporadas de descuento, ciclos de lanzamiento y cómo revisar el historial de precio para comprar en el momento correcto.',
  coverText: 'CAL', keywords: ['mejor momento para comprar celular', 'cuándo comprar laptop', 'cuándo comprar electrodomésticos', 'temporadas de descuento México'],
  related: ['samsung-galaxy-s26-ultra-512', 'iphone-17-pro-256', 'moto-g75'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'El mejor momento para comprar celulares, laptops y electrodomésticos en México suele coincidir con las grandes temporadas de descuentos, como el Hot Sale en primavera y el Buen Fin en noviembre, y con los meses posteriores al lanzamiento de una nueva generación, cuando el modelo anterior baja de precio. Aun así, el mejor momento es cuando encuentras un precio menor que el historial reciente para un producto que realmente necesitas.' },
    { h2: 'Temporadas de descuento en México' },
    { table: { head: ['Temporada', 'Cuándo suele ser', 'Qué conviene revisar'], rows: [
      ['Hot Sale', 'Primavera, generalmente entre mayo y junio', 'Tecnología y compras en línea'],
      ['Regreso a clases', 'Julio y agosto', 'Laptops, tablets y accesorios'],
      ['Buen Fin', 'Noviembre; en 2026, del 13 al 17', 'Línea blanca, pantallas, celulares y laptops'],
      ['Fin de año y enero', 'Diciembre y enero', 'Liquidaciones de inventario']
    ] } },
    { p: 'Las fechas exactas cambian cada año; confirma en los sitios oficiales de cada evento.' },
    { h2: 'Ciclos de lanzamiento' },
    { h3: 'Celulares' },
    { p: 'Las marcas suelen presentar sus modelos principales una vez al año. Cuando sale una nueva generación, la anterior suele bajar de precio en las semanas o meses siguientes. Si no necesitas lo más nuevo, el modelo anterior puede ofrecer mejor relación entre precio y funciones.' },
    { h3: 'Laptops' },
    { p: 'Los fabricantes renuevan procesadores y modelos varias veces al año. Antes de comprar, compara la generación del procesador y revisa si hay una versión más reciente a un precio similar.' },
    { h3: 'Electrodomésticos y línea blanca' },
    { p: 'Los refrigeradores, lavadoras y estufas suelen tener descuentos fuertes en temporadas como el Buen Fin. Aquí importan mucho la garantía, la instalación y la disponibilidad de refacciones.' },
    { h2: 'Cómo saber si un descuento es real' },
    { ol: ['Registra el precio del producto durante varias semanas antes de comprar.', 'Compara en al menos tres tiendas, con envío incluido.', 'Revisa que sea el mismo modelo, capacidad y versión.', 'Desconfía si el «precio antes» subió justo antes de la temporada.'] },
    { h2: 'Garantía y vendedor' },
    { ul: ['Confirma si la garantía es del fabricante o de la tienda y cuánto dura.', 'En marketplaces, verifica quién vende el producto y su reputación.', 'Revisa si el producto es nuevo, reacondicionado o de importación, porque la garantía puede cambiar.', 'Guarda la factura y el comprobante.'] },
    { h2: 'Financiamiento: el costo que no se ve' },
    { p: 'Un descuento puede perder valor si lo financias con intereses. Si compras a meses sin intereses, asegúrate de que el precio sea el mismo que de contado y de que la mensualidad quepa en tu presupuesto. Si es a meses con intereses, calcula el total que pagarás al final.' },
    { h2: '¿Comprar ahora o esperar?' },
    { table: { head: ['Situación', 'Recomendación'], rows: [
      ['Tu equipo actual dejó de funcionar', 'Compra lo que necesitas al mejor precio disponible ahora'],
      ['Falta menos de un mes para una temporada de descuentos', 'Registra precios y espera'],
      ['Se espera una nueva generación pronto', 'Espera para comprar la nueva o la anterior con descuento'],
      ['Encontraste un precio menor que el historial reciente', 'Puede ser buen momento, si el vendedor es confiable']
    ] } },
    { links: ['buen-fin-2026-ofertas-reales', 'meses-sin-intereses-cuando-convienen', 'como-elegir-celular-guia', 'apps-para-ahorrar-al-comprar-mexico'] }
  ],
  faq: [
    { q: '¿Cuándo es más barato comprar un celular?', a: 'Suele ser durante el Buen Fin, el Hot Sale o después del lanzamiento de una nueva generación, cuando el modelo anterior baja de precio.' },
    { q: '¿Conviene comprar laptop en regreso a clases?', a: 'Puede convenir porque muchas tiendas tienen promociones en esa temporada. Compara precios y generación del procesador antes de decidir.' },
    { q: '¿Cuándo comprar un refrigerador o lavadora?', a: 'Las grandes temporadas de descuento como el Buen Fin suelen tener ofertas en línea blanca. Revisa garantía, instalación y costo de envío.' },
    { q: '¿Cómo sé si una oferta es real?', a: 'Registra el precio por varias semanas, compara en varias tiendas y desconfía si el precio anterior subió justo antes de la promoción.' },
    { q: '¿Conviene comprar productos reacondicionados?', a: 'Pueden ser una buena opción si vienen de un vendedor confiable con garantía clara. Revisa el estado y qué cubre la garantía.' }
  ],
  sources: [
    { t: 'El Buen Fin — Sitio oficial', url: 'https://www.elbuenfin.org' },
    { t: 'Profeco — Derechos del consumidor y garantías', url: 'https://www.gob.mx/profeco' },
    { t: 'Hot Sale — Asociación Mexicana de Venta Online', url: 'https://www.hotsale.com.mx' }
  ]
},
{
  slug: 'pagar-deudas-tarjeta-de-credito', catKey: 'finanzas', cat: 'Finanzas personales',
  title: 'Cómo pagar las deudas de tarjetas de crédito más rápido sin quedarte sin dinero',
  seoTitle: 'Cómo pagar deudas de tarjeta de crédito más rápido | SuperPromo',
  description: 'Métodos avalancha y bola de nieve, por qué el pago mínimo sale caro, cómo planear tu flujo y un ejemplo con números para salir de deudas de tarjeta de crédito.',
  excerpt: 'Pago mínimo, método avalancha y bola de nieve comparados con números, y cómo pagar más sin quedarte sin dinero para lo básico.',
  coverText: '↓$', keywords: ['cómo pagar deudas de tarjeta de crédito', 'método avalancha', 'método bola de nieve', 'salir de deudas'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'Para pagar tus tarjetas de crédito más rápido sin quedarte sin dinero, deja de usar las tarjetas con deuda, cubre siempre el pago mínimo de todas, define un monto fijo mensual que puedas sostener después de tus gastos básicos y dirige todo lo extra a una sola tarjeta: la de mayor tasa de interés (método avalancha) o la de menor saldo (método bola de nieve). Cuando liquidas una, pasas ese pago a la siguiente.' },
    { p: 'Tener deudas es una situación común y tiene solución. Esta guía te ayuda a ordenar el plan con números claros.' },
    { h2: 'Por qué el pago mínimo sale tan caro' },
    { p: 'El pago mínimo cubre principalmente intereses y una parte pequeña del saldo. Con tasas de interés altas, la deuda baja muy lento.' },
    { h3: 'Ejemplo ilustrativo' },
    { p: 'Supuestos: deuda de $12,000, interés de 5% mensual (60% anual, sin IVA), pago mínimo de 6% del saldo con un mínimo de $200 y sin nuevas compras. Pagando solo el mínimo tardarías alrededor de 134 meses, más de 11 años, y pagarías cerca de $37,000 de intereses. Tu tarjeta puede tener condiciones distintas; revisa tu estado de cuenta, que por regulación muestra cuánto tardarías en liquidar pagando solo el mínimo.' },
    { h2: 'Paso 1: haz la lista de tus deudas' },
    { table: { head: ['Dato', 'Dónde encontrarlo'], rows: [
      ['Saldo total', 'Estado de cuenta o app del banco'], ['Tasa de interés anual', 'Estado de cuenta, sección de condiciones'],
      ['Pago mínimo', 'Estado de cuenta'], ['Fecha de corte y fecha límite', 'Estado de cuenta']
    ] } },
    { h2: 'Paso 2: define cuánto puedes pagar cada mes' },
    { p: 'Primero cubre renta, comida, transporte y servicios. Lo que queda, menos un pequeño colchón para imprevistos, es tu monto de pago mensual. Es mejor un monto que puedas sostener durante meses que uno alto que abandones a la segunda quincena.' },
    { h2: 'Paso 3: elige un método' },
    { h3: 'Método avalancha' },
    { p: 'Pagas el mínimo en todas y todo lo extra va a la deuda con la tasa de interés más alta. Matemáticamente es el que menos intereses paga.' },
    { h3: 'Método bola de nieve' },
    { p: 'Pagas el mínimo en todas y todo lo extra va a la deuda con el saldo más pequeño. Liquidas una deuda antes y eso da motivación para seguir. Suele pagar algo más de intereses.' },
    { h2: 'Comparación con números' },
    { p: 'Supuestos: tarjeta A con $12,000 de saldo y 5% de interés mensual; tarjeta B con $4,000 y 3.33% mensual. Pago total de $1,500 al mes, pago mínimo de 5% del saldo con mínimo de $200, sin nuevas compras. Cálculo simplificado sin IVA ni comisiones.' },
    { table: { head: ['Método', 'Primera tarjeta liquidada', 'Meses para liquidar todo', 'Intereses totales aproximados'], rows: [
      ['Avalancha (primero A)', 'A en el mes 13', '15 meses', '$6,161'],
      ['Bola de nieve (primero B)', 'B en el mes 6', '16 meses', '$7,036']
    ] } },
    { p: 'En este ejemplo, avalancha ahorra unos $875 de intereses y un mes. Bola de nieve te da la primera victoria siete meses antes. Ambos métodos son mucho mejores que pagar solo mínimos. Elige el que sí vas a sostener.' },
    { h2: 'Cómo pagar más sin quedarte sin dinero' },
    { ul: ['Revisa tus gastos recurrentes y redirige lo que recortes a la deuda.', 'Destina una parte del aguinaldo, la PTU o ingresos extra.', 'Vende artículos que no uses y abona el total.', 'Mantén un fondo pequeño para emergencias, para no volver a usar la tarjeta.', 'Paga antes de la fecha de corte para reducir el saldo sobre el que se calculan intereses.'] },
    { h2: 'Opciones si ya no puedes pagar' },
    { ul: ['Habla con tu banco: algunos ofrecen reestructuras o planes de pago.', 'Evalúa una consolidación de deuda con tasa menor, revisando el CAT y las comisiones.', 'Consulta a la CONDUSEF si tienes problemas con tu institución o con despachos de cobranza.', 'Desconfía de empresas que prometen «borrar» tu historial o liquidar tu deuda por una fracción a cambio de un pago por adelantado.'] },
    { tip: 'Mientras pagas, guarda las tarjetas físicas y elimínalas de tus compras en línea. Es difícil vaciar una cubeta que sigue llenándose.' },
    { links: ['meses-sin-intereses-cuando-convienen', 'organizar-tu-quincena', 'reducir-gastos-mensuales', 'tarjetas-credito-cashback-mexico'] }
  ],
  faq: [
    { q: '¿Qué es mejor, el método avalancha o el de bola de nieve?', a: 'Avalancha suele pagar menos intereses; bola de nieve da resultados visibles antes y ayuda a mantener la motivación. El mejor es el que puedas sostener.' },
    { q: '¿Por qué mi deuda casi no baja aunque pago cada mes?', a: 'Si pagas cerca del mínimo, la mayor parte se va a intereses. Aumentar el pago, aunque sea un poco, acelera mucho la reducción del saldo.' },
    { q: '¿Conviene consolidar deudas?', a: 'Puede convenir si el nuevo crédito tiene un costo total menor y dejas de usar las tarjetas. Compara el CAT, las comisiones y el plazo.' },
    { q: '¿Qué hago si un despacho de cobranza me acosa?', a: 'Puedes presentar una queja ante la CONDUSEF, que tiene un registro de despachos de cobranza y canales de atención para estos casos.' },
    { q: '¿Debo cancelar mi tarjeta cuando la termine de pagar?', a: 'No necesariamente. Mantenerla sin deuda y con poco uso puede ayudar a tu historial. Si te cuesta controlarla, guardarla o cancelarla puede ser mejor para ti.' }
  ],
  sources: [
    { t: 'CONDUSEF — Tarjetas de crédito y despachos de cobranza', url: 'https://www.condusef.gob.mx' },
    { t: 'Banco de México — Información sobre tarjetas de crédito', url: 'https://www.banxico.org.mx' }
  ]
},
{
  slug: 'viajar-barato-por-mexico', catKey: 'finanzas', cat: 'Finanzas personales',
  title: 'Cómo viajar barato por México: trucos para ahorrar en vuelos, hoteles y comida',
  seoTitle: 'Cómo viajar barato por México: vuelos, hotel y comida | SuperPromo',
  description: 'Cómo ahorrar al viajar por México: elegir fechas y destino, comparar vuelos y autobuses, hospedaje, comida y actividades, con un presupuesto de ejemplo y consejos de seguridad.',
  excerpt: 'Fechas, destinos, transporte, hospedaje y comida: dónde se va el dinero en un viaje y cómo armar un presupuesto realista.',
  coverText: 'MX', keywords: ['viajar barato por México', 'vuelos baratos México', 'viajes económicos México', 'presupuesto de viaje'],
  published: '2026-10-24', checked: '2026-10-24',
  body: [
    { p: 'Para viajar barato por México, viaja en temporada baja y entre semana, compara vuelos y autobuses con anticipación, elige destinos donde el transporte local y la comida sean económicos, hospédate en opciones con cocina o desayuno incluido y planea un presupuesto diario antes de salir. El mayor ahorro suele estar en las fechas y el transporte, no en recortar experiencias.' },
    { tip: 'Los montos de esta guía son estimaciones de referencia a octubre de 2026 para viajes nacionales. Los precios de transporte y hospedaje cambian mucho según la fecha y la anticipación de compra; verifica tarifas actuales antes de reservar.' },
    { h2: '1. Fechas: el factor que más cambia el precio' },
    { ul: ['Evita vacaciones escolares, Semana Santa, verano, puentes y fin de año si puedes.', 'Viajar de martes a jueves suele ser más barato que en fin de semana.', 'Compra con anticipación para temporadas altas; en temporada baja hay más margen.', 'Usa alertas de precio en buscadores de vuelos para tu ruta.'] },
    { h2: '2. Destino' },
    { p: 'El costo diario cambia mucho entre destinos. Las ciudades con buen transporte público, comida local accesible y atractivos gratuitos, como centros históricos, museos con días gratis, playas públicas o pueblos con caminatas, permiten viajar con menos dinero que destinos que dependen de tours y transporte privado.' },
    { h2: '3. Transporte: vuelo o autobús' },
    { table: { head: ['Opción', 'Conviene cuando', 'A considerar'], rows: [
      ['Vuelo de bajo costo', 'Distancias largas y compra anticipada', 'Equipaje documentado y selección de asiento se cobran aparte'],
      ['Autobús de línea', 'Trayectos de hasta 6 a 8 horas', 'Compra en línea para tarifas anticipadas'],
      ['Autobús nocturno', 'Ahorrar una noche de hotel', 'Descansa poco; viaja en líneas formales'],
      ['Auto compartido', 'Viajar en grupo', 'Gasolina y casetas se dividen entre todos']
    ] } },
    { p: 'Al comparar un vuelo de bajo costo, suma equipaje, traslado al aeropuerto y comida. A veces el autobús resulta más barato y no mucho más lento puerta a puerta.' },
    { h2: '4. Hospedaje' },
    { ul: ['Hostales con cuartos privados: más baratos que hotel y con cocina compartida.', 'Rentas vacacionales con cocina: convienen para grupos o estancias largas.', 'Hoteles locales fuera de la zona turística principal, bien comunicados.', 'Revisa reseñas recientes, ubicación real y política de cancelación.', 'Confirma si el precio incluye impuestos y tarifas de servicio.'] },
    { h2: '5. Comida' },
    { p: 'Comer en mercados, fondas y puestos con mucha clientela local suele ser más barato que en restaurantes de zona turística. Desayunar en el hospedaje y llevar agua y botanas ayuda a no gastar de más durante el día.' },
    { h2: '6. Actividades' },
    { ul: ['Busca museos con días de entrada gratuita.', 'Recorre a pie centros históricos y barrios.', 'Compara tours en sitio con los de internet; a veces negociar en persona es más barato.', 'Elige una o dos actividades pagadas principales y llena el resto con opciones gratuitas.'] },
    { h2: 'Presupuesto de ejemplo' },
    { p: 'Viaje de 3 días y 2 noches para una persona a una ciudad a 4 o 5 horas en autobús. Estimación de referencia.' },
    { table: { head: ['Concepto', 'Estimación'], rows: [
      ['Autobús redondo comprado con anticipación', '$900 a $1,400'], ['Hospedaje 2 noches en cuarto privado de hostal u hotel sencillo', '$1,000 a $1,600'],
      ['Comida 3 días en mercados y fondas', '$750 a $1,050'], ['Transporte local', '$150 a $300'],
      ['Actividades', '$200 a $500'], ['Total aproximado', '$3,000 a $4,850']
    ] } },
    { p: 'Viajar en pareja o en grupo reduce el costo por persona en hospedaje y transporte local.' },
    { h2: 'Cómo pagar el viaje sin endeudarte' },
    { ul: ['Aparta un monto fijo por quincena desde meses antes.', 'Si usas tarjeta de crédito, paga el total al corte.', 'Revisa si tu tarjeta tiene comisiones por uso en ciertos comercios o por disposición de efectivo.', 'Lleva algo de efectivo para mercados y transporte local.'] },
    { h2: 'Seguridad' },
    { ul: ['Consulta información oficial y local sobre tu destino antes de viajar.', 'Usa transporte formal y líneas de autobús establecidas.', 'Comparte tu itinerario con alguien de confianza.', 'Guarda copias digitales de tu identificación.', 'Evita mostrar objetos de valor y distribuye tu dinero en varios lugares.'] },
    { links: ['ahorrar-10000-pesos-en-un-ano', 'organizar-tu-quincena', 'tarjetas-credito-cashback-mexico', 'reducir-gastos-mensuales'] }
  ],
  faq: [
    { q: '¿Cuándo es más barato viajar por México?', a: 'En temporada baja, fuera de vacaciones escolares, puentes y fin de año, y entre semana.' },
    { q: '¿Conviene más el autobús o el avión?', a: 'Para trayectos de hasta 6 u 8 horas el autobús suele ser más barato. Para distancias largas, un vuelo de bajo costo comprado con anticipación puede convenir. Suma equipaje y traslados.' },
    { q: '¿Cuánto cuesta un viaje de fin de semana por México?', a: 'Depende del destino y la fecha. Como referencia, un viaje de 3 días y 2 noches a una ciudad cercana puede costar entre $3,000 y $4,850 por persona viajando de forma económica.' },
    { q: '¿Cómo encuentro vuelos baratos?', a: 'Usa buscadores con alertas de precio, sé flexible con fechas y compara el costo total con equipaje.' },
    { q: '¿Dónde comer barato cuando viajo?', a: 'En mercados, fondas y puestos con clientela local. Desayunar en el hospedaje también ayuda.' }
  ],
  sources: [
    { t: 'Secretaría de Turismo', url: 'https://www.gob.mx/sectur' },
    { t: 'Profeco — Derechos del consumidor en servicios turísticos', url: 'https://www.gob.mx/profeco' }
  ]
}
];
