// Artículos 39–46
export const POSTS_EXTRA = [
{
  slug: 'como-elegir-electrodomesticos', catKey: 'hogar', cat: 'Hogar y estilo de vida',
  title: 'Cómo elegir el mejor electrodoméstico para tu hogar',
  seoTitle: 'Cómo elegir electrodomésticos: guía para tu hogar | SuperPromo',
  description: 'Qué revisar al comprar refrigerador, lavadora, estufa, microondas o aire acondicionado: medidas, capacidad, etiqueta de eficiencia energética, garantía y costo total.',
  excerpt: 'Medidas, capacidad, consumo de energía y garantía: un método para elegir sin pagar de más por funciones que no usarás.',
  coverText: 'HOME', keywords: ['cómo elegir electrodomésticos', 'qué refrigerador comprar', 'qué lavadora comprar', 'etiqueta de eficiencia energética'],
  related: ['microondas-mabe-07', 'escurreplatos-85'],
  body: [
    { p: 'Para elegir el mejor electrodoméstico para tu hogar, empieza por medir el espacio y definir la capacidad que necesitas según cuántas personas viven contigo. Después compara el consumo de energía en la etiqueta de eficiencia, la garantía y el costo de instalación. El mejor aparato no es el que tiene más funciones, sino el que cubre tu uso real con el menor costo total durante su vida útil.' },
    { h2: 'Paso 1: mide antes de comprar' },
    { ul: ['Ancho, alto y fondo del espacio, dejando ventilación atrás y a los lados según el manual.', 'Ancho de puertas, pasillos y elevador por donde entrará.', 'Hacia dónde abre la puerta del aparato.', 'Distancia a tomas de luz, agua o gas.'] },
    { h2: 'Paso 2: define la capacidad' },
    { table: { head: ['Aparato', '1 a 2 personas', '3 a 4 personas', '5 o más'], rows: [
      ['Refrigerador', '9 a 13 pies cúbicos', '14 a 19 pies cúbicos', '20 pies cúbicos o más'],
      ['Lavadora', '12 a 16 kg', '17 a 20 kg', '21 kg o más'],
      ['Estufa', '4 quemadores', '4 a 6 quemadores', '6 quemadores'],
      ['Microondas', '0.7 a 1.1 pies cúbicos', '1.1 a 1.6 pies cúbicos', '1.6 pies cúbicos o más']
    ] } },
    { p: 'Son rangos de referencia comunes en el mercado; ajústalos a tus hábitos. Una familia que cocina mucho y compra una vez a la semana necesita más espacio de refrigeración que una que compra a diario.' },
    { h2: 'Paso 3: revisa el consumo de energía' },
    { p: 'En México, muchos electrodomésticos deben mostrar una etiqueta de eficiencia energética conforme a las Normas Oficiales Mexicanas, con el consumo anual estimado en kWh. Compara ese número entre modelos: una diferencia pequeña por mes se vuelve grande en los 10 años o más que puede durar un refrigerador. Para estimar el costo, multiplica el consumo anual por la tarifa de tu recibo de la CFE.' },
    { h3: 'Tecnología inverter' },
    { p: 'En refrigeradores, lavadoras y aires acondicionados, los motores o compresores inverter ajustan su velocidad en lugar de encender y apagar, lo que suele reducir consumo y ruido. Suelen costar más al inicio; compara la etiqueta para saber si la diferencia se recupera.' },
    { h2: 'Paso 4: funciones que valen la pena y las que no' },
    { table: { head: ['Aparato', 'Suele valer la pena', 'Puede no ser necesario'], rows: [
      ['Refrigerador', 'Inverter, buena distribución, no frost', 'Pantallas y conexión wifi'],
      ['Lavadora', 'Inverter, programas que sí usarás, centrifugado ajustable', 'Decenas de ciclos que nunca usarás'],
      ['Estufa', 'Encendido electrónico, parrillas firmes', 'Horno grande si casi no horneas'],
      ['Aire acondicionado', 'Inverter y capacidad correcta para el cuarto', 'Funciones inteligentes si no las usarás']
    ] } },
    { h2: 'Paso 5: garantía, instalación y refacciones' },
    { ul: ['Revisa cuánto dura la garantía y qué cubre: piezas, mano de obra o compresor.', 'Confirma si la instalación está incluida y cuánto cuesta.', 'Prefiere marcas con centros de servicio en tu ciudad.', 'Guarda la factura y registra el producto si el fabricante lo pide.'] },
    { h2: 'Paso 6: calcula el costo total' },
    { p: 'Costo total aproximado = precio + instalación + (consumo anual × tarifa × años de uso). Un modelo más barato en tienda puede salir más caro en 10 años si consume más energía.' },
    { h2: 'Cuándo comprar' },
    { p: 'El Buen Fin y otras temporadas de descuento suelen traer promociones en línea blanca. Registra precios antes para saber si el descuento es real. Si tu aparato se descompuso, comprar a tiempo evita gastos como comida echada a perder o lavandería.' },
    { links: ['mejor-momento-para-comprar-tecnologia', 'buen-fin-2026-ofertas-reales', 'meses-sin-intereses-cuando-convienen', 'ahorrar-en-comida-con-air-fryer'] }
  ],
  faq: [
    { q: '¿De cuántos pies debe ser mi refrigerador?', a: 'Como referencia, de 9 a 13 pies cúbicos para una o dos personas, de 14 a 19 para tres o cuatro, y 20 o más para familias grandes.' },
    { q: '¿Vale la pena la tecnología inverter?', a: 'Suele reducir consumo y ruido. Compara la etiqueta de eficiencia para saber si la diferencia de precio se recupera con el ahorro.' },
    { q: '¿Qué significa la etiqueta de eficiencia energética?', a: 'Indica el consumo estimado de energía del aparato, normalmente en kWh al año, para comparar modelos.' },
    { q: '¿Conviene la garantía extendida?', a: 'Depende del precio, del aparato y de lo que cubra. Lee las condiciones antes de pagarla.' },
    { q: '¿Cuándo conviene comprar línea blanca?', a: 'En temporadas como el Buen Fin suele haber promociones, pero compara precios antes para confirmar el descuento.' }
  ],
  sources: [
    { t: 'CONUEE — Eficiencia energética en el hogar', url: 'https://www.gob.mx/conuee' },
    { t: 'Profeco — Garantías y derechos del consumidor', url: 'https://www.gob.mx/profeco' },
    { t: 'CFE — Tarifas para el hogar', url: 'https://app.cfe.mx/Aplicaciones/CCFE/Tarifas/TarifasCRECasa/Casa.aspx' }
  ]
},
{
  slug: 'navidad-sin-gastar-de-mas', catKey: 'ahorro', cat: 'Ahorro y compras',
  title: 'Cómo prepararse para Navidad sin gastar de más',
  seoTitle: 'Cómo prepararse para Navidad sin gastar de más | SuperPromo',
  description: 'Plan para una Navidad sin deudas: presupuesto, lista de regalos, cena, intercambios y uso del aguinaldo. Con un calendario desde octubre y ejemplos con números.',
  excerpt: 'Un presupuesto con números, un calendario desde octubre y cómo usar el aguinaldo sin empezar enero con deudas.',
  coverText: 'DIC', keywords: ['Navidad sin gastar de más', 'presupuesto navideño', 'cómo ahorrar en Navidad', 'qué hacer con el aguinaldo'],
  body: [
    { p: 'Para preparar la Navidad sin gastar de más, define un presupuesto total antes de comprar, divídelo entre regalos, cena, decoración y salidas, y empieza con anticipación para aprovechar el Buen Fin solo en lo que ya tenías en la lista. Usa el aguinaldo con un plan: una parte para diciembre, una para la cuesta de enero y una para ahorro o deudas.' },
    { h2: 'Paso 1: el presupuesto total' },
    { p: 'Parte de lo que realmente puedes gastar sin endeudarte. Ejemplo con un presupuesto de $6,000:' },
    { table: { head: ['Concepto', 'Porcentaje', 'Monto'], rows: [
      ['Regalos', '40%', '$2,400'], ['Cena de Nochebuena', '30%', '$1,800'], ['Posadas e intercambios', '15%', '$900'],
      ['Decoración', '5%', '$300'], ['Imprevistos', '10%', '$600'], ['Total', '100%', '$6,000']
    ] } },
    { h2: 'Paso 2: lista de regalos con tope' },
    { ul: ['Anota a quién vas a regalar y un monto máximo por persona.', 'Propón intercambios con tope en familia o con amigos.', 'Considera regalos hechos en casa o experiencias.', 'Compra en el Buen Fin solo lo que ya está en la lista, comparando precios antes.'] },
    { h2: 'Paso 3: la cena' },
    { p: 'Planea el menú y compra los ingredientes que no caducan con anticipación. Dividir la cena entre los asistentes, con cada familia llevando un platillo, reduce mucho el gasto y la carga de trabajo.' },
    { h2: 'Paso 4: el aguinaldo' },
    { p: 'La Ley Federal del Trabajo establece que el aguinaldo debe ser de al menos 15 días de salario y pagarse antes del 20 de diciembre. Un reparto posible:' },
    { ul: ['50% para gastos de diciembre ya presupuestados.', '30% para la cuesta de enero: predial, inscripciones, seguros.', '20% para ahorro o para pagar deudas caras.'] },
    { h2: 'Calendario' },
    { table: { head: ['Cuándo', 'Qué hacer'], rows: [
      ['Octubre', 'Define presupuesto y lista de regalos'], ['Noviembre', 'Compara precios y aprovecha el Buen Fin solo para la lista'],
      ['Principios de diciembre', 'Compra ingredientes no perecederos y decoración'], ['Al recibir el aguinaldo', 'Reparte antes de gastar'],
      ['Semana de Navidad', 'Compra frescos y revisa cuánto llevas gastado']
    ] } },
    { h2: 'Errores comunes' },
    { ul: ['Comprar regalos sin lista.', 'Usar la tarjeta de crédito sin calcular las mensualidades de enero.', 'Gastar todo el aguinaldo en diciembre.', 'Olvidar los gastos de enero.'] },
    { links: ['buen-fin-2026-ofertas-reales', 'meses-sin-intereses-cuando-convienen', 'organizar-tu-quincena', 'como-ser-buen-anfitrion'] }
  ],
  faq: [
    { q: '¿Cuánto debo gastar en Navidad?', a: 'Lo que puedas pagar sin endeudarte. Define un total antes de comprar y divídelo entre regalos, cena y salidas.' },
    { q: '¿Cuándo se paga el aguinaldo?', a: 'La Ley Federal del Trabajo establece que debe pagarse antes del 20 de diciembre y ser de al menos 15 días de salario.' },
    { q: '¿Conviene comprar regalos en el Buen Fin?', a: 'Sí, si ya están en tu lista y comparaste precios antes del evento.' },
    { q: '¿Cómo ahorro en la cena de Navidad?', a: 'Planea el menú, compra con anticipación lo que no caduca y divide los platillos entre los asistentes.' }
  ],
  sources: [
    { t: 'Profedet — Aguinaldo', url: 'https://www.gob.mx/profedet' },
    { t: 'CONDUSEF — Consejos para el fin de año', url: 'https://www.condusef.gob.mx' }
  ]
},
{
  slug: 'roku-sistema-smart-tv', catKey: 'tech', cat: 'Tecnología, gadgets y gaming',
  title: '¿Roku? ¿El mejor sistema para Smart TV?',
  seoTitle: '¿Roku es el mejor sistema para Smart TV? | SuperPromo',
  description: 'Qué es Roku, cómo funciona en televisores y dispositivos de streaming, ventajas frente a Google TV, Tizen y webOS, y para quién conviene.',
  excerpt: 'Qué es Roku, qué hace bien, qué no y cuándo conviene frente a Google TV, Tizen o webOS. Lectura rápida.',
  coverText: 'TV OS', keywords: ['Roku', 'Roku TV', 'mejor sistema operativo smart TV', 'Roku vs Google TV'],
  related: ['hisense-40-roku', 'aiwa-58-qled-roku', 'westinghouse-40-roku', 'onn-32-roku'],
  body: [
    { p: 'Roku es un sistema operativo para televisión que se usa en algunos televisores y en dispositivos de streaming que se conectan por HDMI. Destaca por su interfaz sencilla y su buscador entre plataformas. No es el mejor para todos: Google TV ofrece más integración con servicios de Google, y Tizen (Samsung) o webOS (LG) vienen ya en esos televisores. Si tu TV funciona pero su sistema es lento, un dispositivo Roku o similar puede renovarlo sin cambiar de pantalla.' },
    { h2: 'Comparativa rápida' },
    { table: { head: ['Sistema', 'Dónde se encuentra', 'Punto fuerte'], rows: [
      ['Roku', 'Algunas marcas de TV y dispositivos Roku', 'Interfaz sencilla'],
      ['Google TV', 'Varias marcas de TV y dispositivos', 'Recomendaciones e integración con Google'],
      ['Tizen', 'Televisores Samsung', 'Integración con el ecosistema Samsung'],
      ['webOS', 'Televisores LG', 'Interfaz fluida y control con puntero']
    ] } },
    { h2: 'Cuándo conviene Roku' },
    { ul: ['Si buscas algo fácil de usar para toda la familia.', 'Si tu televisor tiene un sistema lento o sin apps actualizadas.', 'Si no necesitas integración con un ecosistema específico.'] },
    { h2: 'Antes de comprar' },
    { p: 'Verifica que las apps que usas estén disponibles en el sistema y en tu región, que el dispositivo soporte la resolución y el HDR de tu televisor, y revisa el precio vigente en tiendas oficiales.' },
    { links: ['mejores-smart-tv-2026', 'samsung-vs-lg-televisores'] }
  ],
  faq: [
    { q: '¿Qué es Roku?', a: 'Es un sistema operativo para televisión disponible en algunos televisores y en dispositivos de streaming que se conectan por HDMI.' },
    { q: '¿Roku es mejor que Google TV?', a: 'Roku es más sencillo; Google TV integra más servicios de Google. Depende de lo que prefieras.' },
    { q: '¿Puedo usar Roku en cualquier televisor?', a: 'Con un dispositivo Roku, sí, si tu televisor tiene entrada HDMI.' }
  ],
  sources: [
    { t: 'Roku — Sitio oficial México', url: 'https://www.roku.com/es-mx' }
  ]
},
{
  slug: 'como-ser-buen-anfitrion', catKey: 'hogar', cat: 'Hogar y estilo de vida',
  title: 'Cómo ser un buen anfitrión en las reuniones',
  seoTitle: 'Cómo ser un buen anfitrión: guía para reuniones | SuperPromo',
  description: 'Consejos prácticos para recibir invitados: planear, preparar comida y bebida, ambientar, atender sin estresarte y cuidar el presupuesto.',
  excerpt: 'Planear, recibir y atender sin estrés: una lista corta para que tus invitados se sientan bien y tú también disfrutes.',
  coverText: 'HOLA', keywords: ['cómo ser buen anfitrión', 'cómo organizar una reunión en casa', 'consejos para recibir invitados'],
  body: [
    { p: 'Ser un buen anfitrión es hacer que tus invitados se sientan bienvenidos y cómodos, no gastar más. Planea con tiempo, prepara la mayor parte de la comida antes de que lleguen, ten bebidas a la mano y reserva tu energía para convivir.' },
    { h2: 'Antes de la reunión' },
    { ul: ['Confirma cuántas personas vienen y si hay restricciones de comida.', 'Prepara platillos que se puedan hacer con anticipación.', 'Limpia el baño y deja papel y toallas a la vista.', 'Prepara una lista de música y revisa el volumen.', 'Ten hielo de sobra.'] },
    { h2: 'Durante la reunión' },
    { ul: ['Recibe a cada persona y preséntala con alguien.', 'Deja bebidas y botanas en un lugar accesible para que se sirvan solos.', 'Atiende sin estar todo el tiempo en la cocina.', 'Ten un plan sencillo si alguien se siente mal o necesita irse temprano.'] },
    { h2: 'Cuidar el presupuesto' },
    { p: 'Pedir que cada invitado lleve algo, servir un platillo principal rendidor y comprar bebidas en presentaciones grandes ayuda a recibir bien sin gastar de más.' },
    { tip: 'La mejor señal de una buena reunión es que el anfitrión también la disfrute. Si algo sale distinto a lo planeado, nadie lo nota tanto como tú.' },
    { links: ['fiesta-de-cumpleanos-con-3000-pesos', 'mejores-bocinas-para-fiestas', 'navidad-sin-gastar-de-mas'] }
  ],
  faq: [
    { q: '¿Qué comida servir en una reunión en casa?', a: 'Platillos que se preparen con anticipación y sean fáciles de servir, como una taquiza, pastas o botanas variadas.' },
    { q: '¿Cuánta bebida calcular?', a: 'Como referencia, de dos a tres bebidas por persona en las primeras dos horas y una por hora después, más agua e hielo de sobra.' },
    { q: '¿Cómo recibo invitados con poco presupuesto?', a: 'Pide que cada quien lleve algo, sirve un platillo rendidor y compra bebidas en presentaciones grandes.' }
  ],
  sources: []
},
{
  slug: 'que-ipad-comprar', catKey: 'tech', cat: 'Tecnología, gadgets y gaming',
  title: 'Qué elegir entre iPad, iPad Air, iPad mini o iPad Pro',
  seoTitle: 'iPad, iPad Air, mini o Pro: cuál comprar en 2026 | SuperPromo',
  description: 'Diferencias entre iPad (A16), iPad Air (M4), iPad mini (A17 Pro) y iPad Pro (M5): precios en México, pantalla, chip, accesorios y cuál conviene según tu uso.',
  excerpt: 'Chip, pantalla, accesorios y precio en México de cada modelo, y cuál conviene para estudiar, dibujar, trabajar o ver series.',
  coverText: 'iPad', keywords: ['qué iPad comprar', 'iPad Air vs iPad Pro', 'iPad mini vs iPad', 'iPad para estudiantes'],
  body: [
    { p: 'Para la mayoría de las personas, el iPad básico (A16) es suficiente para estudiar, ver series y tomar notas. El iPad Air (M4) conviene si quieres más potencia y compatibilidad con el Apple Pencil Pro sin pagar un Pro. El iPad mini (A17 Pro) es para quien prioriza un tamaño compacto. El iPad Pro (M5) es para trabajo creativo exigente y quien quiere la mejor pantalla.' },
    { tip: 'Precios de inicio en México después del ajuste de precios de Apple de junio de 2026, según Milenio y Xataka México, y el precio del iPad mini según MacStore.' },
    { h2: 'Tabla comparativa' },
    { table: { head: ['Modelo', 'Chip', 'Pantalla', 'Precio de inicio en México', 'Ideal para'], rows: [
      ['iPad (11.ª generación)', 'A16', '11"', 'Desde $10,999', 'Estudio, series, uso familiar'],
      ['iPad Air 11" (M4)', 'M4', '11", hasta 500 nits', 'Desde $18,799', 'Estudiantes exigentes, dibujo, multitarea'],
      ['iPad Air 13" (M4)', 'M4', '13", hasta 600 nits', 'Desde $24,299', 'Pantalla grande sin pagar Pro'],
      ['iPad mini', 'A17 Pro', 'Compacta', 'Desde $14,499 (MacStore)', 'Lectura, viajes, uso con una mano'],
      ['iPad Pro 11" (M5)', 'M5', '11"', 'Desde $29,999', 'Creativos y profesionales'],
      ['iPad Pro 13" (M5)', 'M5', '13"', 'Consulta precio vigente', 'Trabajo creativo intensivo']
    ] } },
    { p: 'En junio de 2026 Apple subió el precio de varios iPad en México por el aumento en el costo de las memorias: el iPad básico pasó de $8,499 a $10,999 y el iPad Air de 11" de $14,999 a $18,799, según Milenio.' },
    { h2: 'Cómo elegir' },
    { h3: 'Para estudiar' },
    { p: 'El iPad básico cubre tomar notas, leer y hacer tareas. Si dibujas o usas apps pesadas, el Air te da más margen por varios años.' },
    { h3: 'Para dibujar o diseñar' },
    { p: 'El Air y el Pro son compatibles con el Apple Pencil Pro. El Pro suma mejor pantalla y más potencia para archivos pesados.' },
    { h3: 'Para viajar y leer' },
    { p: 'El mini es el más fácil de llevar. Su pantalla pequeña lo hace menos cómodo para escribir mucho.' },
    { h3: 'Para trabajar como laptop' },
    { p: 'Con teclado, el Air o el Pro funcionan bien para correo, documentos y videollamadas. Si necesitas programas de escritorio completos, considera una MacBook.' },
    { h2: 'Accesorios: el costo que no se ve' },
    { p: 'El lápiz, el teclado y la funda pueden sumar varios miles de pesos. Verifica qué accesorios son compatibles con cada modelo antes de comprar y súmalos al presupuesto.' },
    { h2: 'Almacenamiento' },
    { p: 'La versión base de 128 GB alcanza para estudiar y streaming. Si guardas muchos videos, fotos o archivos de diseño, considera 256 GB, porque no se puede ampliar después.' },
    { links: ['diferencias-macbook-neo-air-pro', 'windows-vs-macos', 'android-vs-ios', 'mejor-momento-para-comprar-tecnologia'] }
  ],
  faq: [
    { q: '¿Qué iPad conviene más en calidad-precio?', a: 'Para la mayoría, el iPad básico. Si quieres más potencia y el Pencil Pro, el iPad Air (M4).' },
    { q: '¿Cuánto cuesta el iPad Air M4 en México?', a: 'Desde $18,799 en 11 pulgadas y $24,299 en 13 pulgadas, tras el ajuste de precios de junio de 2026.' },
    { q: '¿El iPad puede reemplazar una laptop?', a: 'Para tareas como correo, documentos y videollamadas, sí con teclado. Para programas de escritorio completos, una laptop es mejor.' },
    { q: '¿Vale la pena el iPad Pro?', a: 'Si haces trabajo creativo exigente o quieres la mejor pantalla. Para uso general, el Air o el iPad básico suelen bastar.' }
  ],
  sources: [
    { t: 'Milenio — Nuevos precios de Apple en México (2026)', url: 'https://www.milenio.com/tecnologia/lista-nuevos-precios-apple-mexico-lista-macbook-ipad-homepod-apple-tv' },
    { t: 'Xataka México — Nuevos precios de Apple en México (junio 2026)', url: 'https://www.xataka.com.mx/ordenadores/apple-sube-drasticamente-precio-sus-mac-ipad-otros-dispositivos-lista-completa-nuevos-precios-mexico' },
    { t: 'MacStore — iPad', url: 'https://www.macstoreonline.com.mx/paginas/todo-ipad' },
    { t: 'Apple México — iPad', url: 'https://www.apple.com/mx/ipad/' }
  ]
},
{
  slug: 'diferencias-macbook-neo-air-pro', catKey: 'tech', cat: 'Tecnología, gadgets y gaming',
  title: 'Diferencias entre MacBook Neo, MacBook Air y MacBook Pro',
  seoTitle: 'MacBook Neo vs Air vs Pro: diferencias y cuál comprar | SuperPromo',
  description: 'Diferencias entre MacBook Neo (A18 Pro), MacBook Air y MacBook Pro: chip, memoria, pantalla, batería, puertos y precio en México. Cuál conviene según tu uso.',
  excerpt: 'La Neo usa un chip de iPhone y cuesta desde $12,999. Qué ganas al subir a Air o Pro y para quién vale la pena.',
  coverText: 'MAC', keywords: ['MacBook Neo', 'MacBook Neo vs MacBook Air', 'MacBook Air vs MacBook Pro', 'qué MacBook comprar'],
  related: ['mac-mini-m4'],
  body: [
    { p: 'La MacBook Neo, lanzada en marzo de 2026, es la Mac más accesible: usa el chip A18 Pro de iPhone, tiene 8 GB de memoria y se lanzó en marzo de 2026 en $12,999; tras el ajuste de precios de Apple de junio de 2026, cuesta desde $14,999 en México. Sirve para tareas escolares, ofimática y navegación. La MacBook Air, con chips de la serie M, ofrece más memoria, potencia y batería para quien trabaja con más programas a la vez. La MacBook Pro es para trabajo profesional exigente como edición de video o desarrollo pesado.' },
    { tip: 'Precios vigentes tras el ajuste de Apple de junio de 2026, según Xataka México.' },
    { h2: 'Tabla comparativa' },
    { table: { head: ['', 'MacBook Neo', 'MacBook Air', 'MacBook Pro'], rows: [
      ['Chip', 'A18 Pro (de iPhone)', 'M5', 'Serie M, versiones Pro y Max'],
      ['Memoria', '8 GB', 'Más opciones de memoria', 'Hasta configuraciones muy altas'],
      ['Pantalla', '13" Liquid Retina IPS, 500 nits', '13" y 15"', '14" y 16" de mayor brillo'],
      ['Batería anunciada', 'Hasta 16 h de video', 'Consulta la ficha de Apple', 'Varía por modelo'],
      ['Puertos', '2 USB-C (uno USB 2.0) y audífonos', 'USB-C/Thunderbolt y MagSafe', 'Más puertos: HDMI, SD, Thunderbolt'],
      ['Precio en México', 'Desde $14,999 (256 GB) y $17,499 (512 GB con Touch ID)', 'Air M5: desde $29,999 (13") y $34,999 (15")', 'Desde $44,999 (14") y $67,999 (16")'],
      ['Para quién', 'Estudiantes y uso básico', 'Uso general intenso', 'Profesionales']
    ] } },
    { p: 'Datos de la MacBook Neo según la ficha publicada por Xataka México: pantalla de 2,408 × 1,506 píxeles, 1.23 kg, Wi-Fi 6E, un puerto USB-C 2.0 y otro USB-C 3.2 con DisplayPort, y Touch ID solo en la versión de 512 GB. La diferencia de precio con la MacBook Air M5 de 13" es de unos $15,000.' },
    { h2: 'MacBook Neo: qué ganas y qué no' },
    { ul: ['A favor: precio de entrada más bajo de una Mac, buena batería, pantalla brillante.', 'En contra: 8 GB de memoria que no se puede ampliar, un puerto USB-C es lento (USB 2.0), sin Touch ID en la versión base.'] },
    { h2: 'Cuándo subir a MacBook Air' },
    { p: 'Si usas muchas pestañas, apps de diseño ligero o programación, o quieres que la computadora te dure más años sin sentirse lenta, la memoria adicional y el chip de la serie M hacen diferencia.' },
    { h2: 'Cuándo subir a MacBook Pro' },
    { p: 'Edición de video 4K, modelado 3D, compilación de proyectos grandes o trabajo que requiere más puertos y mejor disipación. Si no haces estas tareas, la Pro suele ser más de lo que necesitas.' },
    { h2: 'Guía rápida' },
    { table: { head: ['Perfil', 'Recomendación'], rows: [
      ['Estudiante de prepa o universidad con uso básico', 'MacBook Neo'],
      ['Estudiante o profesional con multitarea', 'MacBook Air'],
      ['Programador', 'MacBook Air con más memoria o MacBook Pro'],
      ['Editor de video o diseñador 3D', 'MacBook Pro']
    ] } },
    { links: ['windows-vs-macos', 'que-ipad-comprar', 'lenovo-buena-marca-laptops', 'meses-sin-intereses-cuando-convienen'] }
  ],
  faq: [
    { q: '¿Cuánto cuesta la MacBook Neo en México?', a: 'Se lanzó en $12,999 en marzo de 2026. Tras el ajuste de precios de junio de 2026 cuesta desde $14,999 con 256 GB y $17,499 con 512 GB y Touch ID, según Xataka México.' },
    { q: '¿La MacBook Neo sirve para la universidad?', a: 'Para tareas, documentos, navegación y videollamadas, sí. Si usarás programas pesados, considera una MacBook Air.' },
    { q: '¿Qué diferencia hay entre MacBook Air y Pro?', a: 'La Pro tiene chips más potentes, mejor disipación, pantalla de mayor brillo y más puertos. La Air es más ligera y suficiente para la mayoría.' },
    { q: '¿Puedo ampliar la memoria de una MacBook?', a: 'No. Elige la memoria adecuada al comprar.' }
  ],
  sources: [
    { t: 'Xataka México — MacBook Neo: precio y ficha técnica', url: 'https://www.xataka.com.mx/ordenadores/nueva-macbook-neo-lanzamiento-precio-mexico-caracteristicas-especificaciones-ficha-tecnica' },
    { t: 'El Financiero — Lanzamiento de MacBook Neo en México (marzo 2026)', url: 'https://www.elfinanciero.com.mx/tech/2026/03/04/apple-lanza-macbook-neo-cuanto-costara-en-mexico/' },
    { t: 'Xataka México — Nuevos precios de Apple en México (junio 2026)', url: 'https://www.xataka.com.mx/ordenadores/apple-sube-drasticamente-precio-sus-mac-ipad-otros-dispositivos-lista-completa-nuevos-precios-mexico' },
    { t: 'Apple México — Mac', url: 'https://www.apple.com/mx/mac/' }
  ]
},
{
  slug: 'xbox-o-playstation', catKey: 'tech', cat: 'Tecnología, gadgets y gaming',
  title: 'Xbox o PlayStation: cuál te conviene',
  seoTitle: 'Xbox o PlayStation: cuál conviene comprar | SuperPromo',
  description: 'Xbox o PlayStation según los juegos que te gustan, tus amigos, suscripciones, precio y si también juegas en PC. Guía de decisión sin fanatismo.',
  excerpt: 'Los juegos exclusivos, tus amigos y las suscripciones pesan más que la ficha técnica. Una guía de decisión directa.',
  coverText: 'VS', keywords: ['Xbox o PlayStation', 'Xbox vs PS5', 'qué consola comprar', 'Game Pass o PlayStation Plus'],
  related: ['xbox-series-x-galaxy-black-2tb', 'nintendo-switch-2'],
  body: [
    { p: 'Elige la consola donde están los juegos que más quieres jugar y donde juegan tus amigos. PlayStation es fuerte en exclusivos de sus estudios propios. Xbox apuesta por Game Pass, su suscripción con catálogo amplio, y por la integración con PC con Windows, donde también publica muchos de sus juegos. En potencia, ambas consolas de esta generación son comparables para la mayoría de los jugadores.' },
    { h2: 'Comparativa' },
    { table: { head: ['Aspecto', 'Xbox', 'PlayStation'], rows: [
      ['Exclusivos', 'Muchos también llegan a PC', 'Exclusivos de sus estudios, varios llegan a PC después'],
      ['Suscripción', 'Game Pass, con catálogo amplio', 'PlayStation Plus, con niveles'],
      ['Juego entre PC y consola', 'Muy integrado', 'Menor'],
      ['Precio de referencia', 'Xbox Series X Galaxy Black 2 TB: $26,999 en nuestro catálogo (oct 2026)', 'Verifica precio vigente']
    ] } },
    { h2: 'Preguntas para decidir' },
    { ol: ['¿Qué juegos exclusivos quieres jugar?', '¿En qué consola juegan tus amigos?', '¿Prefieres pagar una suscripción con catálogo o comprar juegos sueltos?', '¿También juegas en PC?'] },
    { h2: '¿Y Nintendo?' },
    { p: 'Nintendo Switch 2 es otra alternativa, con juegos propios de Nintendo y modo portátil. Muchos jugadores combinan una Nintendo con una Xbox o PlayStation.' },
    { links: ['vale-la-pena-nintendo-switch', 'nintendo-switch-2-vs-switch-lite', 'mejores-marcas-pc-gamer', 'mejores-smart-tv-2026'] }
  ],
  faq: [
    { q: '¿Qué es mejor, Xbox o PlayStation?', a: 'Depende de los juegos que quieres, de tus amigos y de si prefieres suscripción. En potencia son comparables.' },
    { q: '¿Game Pass vale la pena?', a: 'Si juegas muchos títulos distintos, suele convenir. Si juegas pocos juegos al año, comprar sueltos puede salir mejor.' },
    { q: '¿Puedo jugar con amigos de otra consola?', a: 'Algunos juegos permiten juego cruzado entre plataformas. Revisa cada juego.' }
  ],
  sources: [
    { t: 'Xbox México', url: 'https://www.xbox.com/es-MX' },
    { t: 'PlayStation México', url: 'https://www.playstation.com/es-mx/' }
  ]
},
{
  slug: 'vale-la-pena-nintendo-switch', catKey: 'tech', cat: 'Tecnología, gadgets y gaming',
  title: '¿Aún vale la pena la Nintendo Switch?',
  seoTitle: '¿Aún vale la pena la Nintendo Switch en 2026? | SuperPromo',
  description: 'Si conviene comprar Nintendo Switch original, Switch Lite o Switch 2 en 2026: precios en México, juegos, compatibilidad y para quién es cada una.',
  excerpt: 'Switch, Lite o Switch 2: cuál tiene sentido hoy según tu presupuesto y cómo juegas. Lectura rápida.',
  coverText: 'SW', keywords: ['vale la pena Nintendo Switch', 'Nintendo Switch 2026', 'Switch o Switch 2', 'Switch Lite vale la pena'],
  related: ['nintendo-switch-2', 'nintendo-switch-lite-coral'],
  body: [
    { p: 'Sí, la Nintendo Switch original y la Switch Lite aún valen la pena si buscas una consola económica con un catálogo enorme de juegos ya publicados. Si quieres jugar los lanzamientos más recientes con mejor rendimiento, la Switch 2 es la opción. En nuestro catálogo de octubre de 2026, la Switch Lite aparecía en $3,699 y la Switch 2 en $10,559.34.' },
    { h2: 'Cuál elegir' },
    { table: { head: ['Modelo', 'Precio de referencia', 'Para quién'], rows: [
      ['Switch Lite', '$3,699 (Mercado Libre, oct 2026)', 'Niños, primer consola, juego solo portátil'],
      ['Switch original', 'Verifica precio vigente', 'Jugar en TV y portátil con presupuesto'],
      ['Switch 2', '$10,559.34 (Mercado Libre, oct 2026)', 'Nuevos lanzamientos y mejor rendimiento']
    ] } },
    { h2: 'A considerar' },
    { ul: ['La Switch Lite no se conecta a la televisión.', 'Revisa si los juegos que te interesan son exclusivos de Switch 2.', 'Comprar usada puede ahorrar dinero; revisa el estado de los controles.'] },
    { links: ['nintendo-switch-2-vs-switch-lite', 'xbox-o-playstation', 'mejor-momento-para-comprar-tecnologia'] }
  ],
  faq: [
    { q: '¿Vale la pena comprar una Switch en 2026?', a: 'Sí, si buscas una consola económica con muchos juegos disponibles. Para lanzamientos nuevos, considera la Switch 2.' },
    { q: '¿La Switch Lite se conecta a la tele?', a: 'No, es solo portátil.' },
    { q: '¿Cuánto cuesta la Switch 2 en México?', a: 'En nuestro catálogo de octubre de 2026 aparecía en $10,559.34 en Mercado Libre. Verifica el precio vigente.' }
  ],
  sources: [
    { t: 'Nintendo México', url: 'https://www.nintendo.com/es-mx/' }
  ]
}
];
