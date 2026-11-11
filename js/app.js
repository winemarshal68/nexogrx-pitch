(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const AUDIO = "https://audio.nexogrx.es/";
  const MEDIA = "https://media.tablavista.com/";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const icon = (id) => `<svg aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- copy: English for every static Spanish line ---------- */
  const EN = {
    hoy: "Today",
    h1: "Say it. It's done.",
    lede: "<strong>TablaVista</strong> runs a restaurant's whole day: bookings, the floor, the till, the kitchen, the menu, the cellar, the rota and food safety. And your team runs it by talking.",
    menuTitle: "Today's menu",
    menuPrice: "Price: at the demo",
    c1: "Starter", d1: "The team speaks, the app does it",
    c2: "First", d2: "A phone that takes bookings by itself",
    c3: "Second", d3: "Every dish, said right",
    c4: "Dessert", d4: "16,000 bottles, one tap away",
    see: "see it", hear: "hear it", try: "try it",
    incl: "Bread and a drink included… and the till, the kitchen, the rota and food safety.",
    ctaDemo: "Ask for a demo",
    ctaFilm: "Watch the story in 1 minute",
    tkHead: "Order · voice",
    tkSaid: "Lucía says, at the bar",
    tkQuote: "“We're out of octopus.”",
    tk1: "<b>Pulpo a la gallega</b> marked sold out",
    tk2: "The till won't sell it any more",
    tk3: "The pass and the floor are told",
    tk4: "So are the phones of everyone on shift",
    tkFoot: "Without touching a screen",
    demoData: "Example data",
    w1: "At the pass",
    voxH: "Hands full. Voice free.",
    voxL: "Mid-service, nobody has time to hunt for a button. Anyone on the team says what's happening and TablaVista writes it down, tells whoever needs to know and changes the till. <strong>Tap a line and watch where it lands.</strong>",
    pCaja: "Till", pRes: "Tomorrow's bookings", pEq: "Team phones", pBar: "Bar and orders",
    voxNote: "Example with made-up data. The commands are the real ones: book, confirm, sold out, tell the team, call for help, running late, open a bottle, note what's missing.",
    w2: "On the floor, at night",
    telH: "Closed. The phone is still taking bookings.",
    telL: "An assistant answers when nobody can: it finds a slot, writes the booking, confirms it by e-mail and, if the guest wants a person, puts the call through to the restaurant.",
    telClock: "dining room cleared, kitchen off",
    f1: "Speaks 6 languages", f2: "Says it's an assistant", f3: "Puts the call through to the restaurant", f4: "Spells e-mail addresses right", f5: "Optional add-on",
    callHead: "Call · 23:40",
    replay: "Play the call again",
    w3: "In training",
    sabH: "Every dish, said right. By someone from there.",
    sabL: "<strong>Saber</strong> is your team's school inside the app: every dish, cut, cheese, wine and drink has its study card, and every name is spoken by a native voice, a woman's or a man's. Tap a name and listen.",
    specMore: "And every dish, by its name from home:",
    n1: "Name recordings, ready to play",
    n2: "Languages, each with its own voice",
    n3: "Dish and product cards to study",
    lb1: "New wines, beers and spirits, in one week",
    lb2: "Serious restaurants' wine lists read",
    lb3: "Wineries from Spain's best lists, already in",
    t1: "Capabilities compared, row by row",
    t2: "Systems sold in Spain",
    t3: "Only in TablaVista",
    w4: "In the cellar",
    bodH: "Your wine list, written in a minute.",
    bodL: "Nobody should type 300 bottles by hand. Type two letters, tap the bottle and it lands on your list with its region, its grape and its name said right.",
    bigCap: "From Le Taillevent to Rekondo. Every bottle checked against its winery's or a merchant's own website. Anything that can't be checked stays out.",
    findLabel: "Try it: search for a bottle",
    findPh: "pingus, musar, ardanza…",
    cartaH: "Wine list",
    cartaHint: "Tap + on a bottle and it appears here.",
    bodSrc: "74% of the wineries on Spain's best wine lists are already in. More go in every night, and anything that can't be checked stays out.",
    w5: "At every station",
    pueH: "Everyone opens the app on their own day.",
    pueL: "We walked through each role's shift, from the first task to closing. Each person sees only their part, and sees it at the right time.",
    w6: "In the office",
    todoH: "And all the usual work, done properly.",
    w7: "Checked row by row",
    nadieH: "32 things no one else advertises.",
    nadieL: "We read, on their own pages, what 26 systems sold in Spain offer, from Ágora and CoverManager to TheFork, Lightspeed and Square. Here are some of the 32 things TablaVista does that none of them advertises.",
    tallyCap: "of 68 capabilities compared, only in TablaVista",
    fine: "Comparison of 15 October 2026 against what each brand publishes. Anything they don't publish counts as “we don't know”, never as a no. If an owner thinks their system does it, they should ask their supplier in writing.",
    w8: "The real app",
    filmH: "No tricks: recorded on the screen.",
    w9: "On the stove",
    ritmoH: "285 improvements in 8 days. And the kitchen is still on.",
    ritmoL: "Every improvement passes automatic tests before it reaches the app, and if anything fails, the app goes back to the previous version by itself.",
    nowH: "Cooking right now:",
    k1: "The kitchen, by voice too", k1s: "Stock, waste, prep, temperatures and recipes, said out loud.",
    k2: "946 dish stories in four languages", k2s: "For the guest from abroad and for the waiter from abroad.",
    k3: "The rota says how many people are missing", k3s: "Every day of the week, by service and by role.",
    k4: "Tasting notes for the new bottles", k4s: "Body, acidity and tannin, only when they can be checked.",
    closeH: "Tomorrow, in your restaurant.",
    closeL: "A demo with your menu and your tables, in your place, on a tablet.",
    tagline: "Restaurant management",
    footNote: "Examples use La Higuera, a demo restaurant with made-up data.",
  };
  const ES = {};
  $$("[data-i]").forEach((el) => { if (!(el.dataset.i in ES)) ES[el.dataset.i] = el.innerHTML; });
  ES.findPh = $("#q").getAttribute("placeholder");

  /* ---------- dynamic content, both languages ---------- */
  const T = {
    es: {
      langNames: { es: "Español", fr: "Francés", it: "Italiano", de: "Alemán", pt: "Portugués", ja: "Japonés", en: "Inglés", gl: "Gallego", eu: "Euskera" },
      days: ["mar 4", "mié 5", "jue 6", "vie 7", "sáb 8", "dom 9", "lun 10", "mar 11"],
      noHits: "Ninguna en esta muestra. En la app hay 16.000.",
      sampleNote: "Muestra de 21 botellas del catálogo",
      add: "Añadir a la carta", added: "En tu carta", listen: "Escuchar",
      roleCapPre: "",
    },
    en: {
      langNames: { es: "Spanish", fr: "French", it: "Italian", de: "German", pt: "Portuguese", ja: "Japanese", en: "English", gl: "Galician", eu: "Basque" },
      days: ["Tue 4", "Wed 5", "Thu 6", "Fri 7", "Sat 8", "Sun 9", "Mon 10", "Tue 11"],
      noHits: "None in this sample. The app has 16,000.",
      sampleNote: "A sample of 21 bottles from the catalogue",
      add: "Add to the list", added: "On your list", listen: "Listen",
    },
  };

  const SAYS = [
    { id: "sold", es: { who: "Lucía, en barra", q: "Se acabó el pulpo.", l: ["<b>Pulpo a la gallega</b>, agotado", "La caja ya no deja venderlo", "Pase y sala, avisados"] },
      en: { who: "Lucía, at the bar", q: "We're out of octopus.", l: ["<b>Pulpo a la gallega</b>, sold out", "The till won't sell it any more", "The pass and the floor are told"] }, hit: ["caja", "equipo"] },
    { id: "book", es: { who: "Ana, en sala", q: "Mesa para cuatro mañana a las nueve, a nombre de Ruiz.", l: ["Hay hueco mañana a las 21:00", "Reserva a nombre de Ruiz, 4 personas"] },
      en: { who: "Ana, on the floor", q: "Table for four tomorrow at nine, under Ruiz.", l: ["There's room tomorrow at 21:00", "Booked under Ruiz, 4 people"] }, hit: ["reservas"] },
    { id: "confirm", es: { who: "Ana, en sala", q: "Confírmala y mándale el correo.", l: ["Reserva de Ruiz, confirmada", "Correo de confirmación enviado"] },
      en: { who: "Ana, on the floor", q: "Confirm it and send the e-mail.", l: ["Ruiz booking confirmed", "Confirmation e-mail sent"] }, hit: ["reservas"] },
    { id: "late", es: { who: "Javi, de camino", q: "Llego diez minutos tarde.", l: ["Aviso al encargado de turno", "Javi entra a las 20:10"] },
      en: { who: "Javi, on his way", q: "I'm running ten minutes late.", l: ["The shift manager is told", "Javi starts at 20:10"] }, hit: ["equipo"] },
    { id: "help", es: { who: "Ana, en sala", q: "Necesito ayuda en la terraza.", l: ["Aviso a los móviles en turno", "Se ve quién lo ha leído"] },
      en: { who: "Ana, on the floor", q: "I need help on the terrace.", l: ["Alert sent to the phones on shift", "You can see who has read it"] }, hit: ["equipo"] },
    { id: "bottle", es: { who: "Lucía, en barra", q: "Abro una botella de Viña Ardanza.", l: ["Botella abierta a las 21:47", "Cuenta los días que lleva abierta"] },
      en: { who: "Lucía, at the bar", q: "Opening a bottle of Viña Ardanza.", l: ["Bottle opened at 21:47", "It counts the days it's been open"] }, hit: ["barra"] },
    { id: "order", es: { who: "Lucía, en barra", q: "Apunta que falta limón.", l: ["Añadido a «Por pedir»", "Lo ve quien hace el pedido"] },
      en: { who: "Lucía, at the bar", q: "Note that we're out of lemons.", l: ["Added to “To order”", "Whoever places the order sees it"] }, hit: ["barra"] },
    { id: "news", es: { who: "Marta, encargada", q: "¿Qué hay de nuevo?", l: ["Te lo cuenta en voz alta", "Avisos, reservas nuevas y notas del turno"] },
      en: { who: "Marta, the manager", q: "What's new?", l: ["It tells you out loud", "Alerts, new bookings and shift notes"] }, hit: ["caja", "reservas", "equipo", "barra"] },
  ];

  const CALL = {
    es: [
      ["bot", "La Higuera, buenas noches. Le atiende un asistente automático. ¿En qué le ayudo?"],
      ["guest", "Quería mesa para el sábado. Somos cinco."],
      ["bot", "El sábado tengo a las 21:00 o a las 22:15. ¿Cuál prefiere?"],
      ["guest", "A las nueve. A nombre de Carmen Ruiz."],
      ["bot", "Hecho. ¿A qué correo le mando la confirmación?"],
      ["guest", "carmen.ruiz@ejemplo.es"],
      ["bot", "c, a, r, m, e, n, punto, r, u, i, z… ¿Es correcto?"],
      ["guest", "Sí, perfecto. Gracias."],
      ["sys", "Reserva creada · sábado 21:00 · 5 personas · confirmación enviada"],
    ],
    en: [
      ["bot", "La Higuera, good evening. You're speaking to an automated assistant. How can I help?"],
      ["guest", "I'd like a table on Saturday. There are five of us."],
      ["bot", "On Saturday I have 21:00 or 22:15. Which would you prefer?"],
      ["guest", "Nine o'clock. The name is Carmen Ruiz."],
      ["bot", "Done. Which e-mail should I send the confirmation to?"],
      ["guest", "carmen.ruiz@example.com"],
      ["bot", "c, a, r, m, e, n, dot, r, u, i, z… Is that right?"],
      ["guest", "Yes, perfect. Thanks."],
      ["sys", "Booking made · Saturday 21:00 · 5 people · confirmation sent"],
    ],
    who: { es: { bot: "TablaVista", guest: "Cliente" }, en: { bot: "TablaVista", guest: "Guest" } },
  };

  const NAMES = [
    ["479b499fc458b10e3469959b", "Parmigiano Reggiano", "it", 1],
    ["dish-jamon-iberico", "Jamón Ibérico", "es", 1],
    ["especialidad-bouillabaisse", "Bouillabaisse", "fr", 1],
    ["gewurztraminer", "Gewürztraminer", "de", 1],
    ["cut-ja-jp-otoro", "Otoro", "ja", 1],
    ["dish-pastel-de-nata", "Pastel de nata", "pt", 1],
    ["wine-chateauneuf-du-pape", "Châteauneuf-du-Pape", "fr", 1],
    ["wine-brunello-di-montalcino", "Brunello di Montalcino", "it", 1],
    ["dish-pulpo-a-la-gallega", "Pulpo a la gallega", "es", 1],
    ["especialidad-sachertorte", "Sachertorte", "de", 1],
    ["cl-6f17a95cde19d789f601", "Bacalhau", "pt", 1],
    ["especialidad-ramen", "Ramen", "ja", 1],
    ["gruner-veltliner", "Grüner Veltliner", "de", 1],
    ["especialidad-ossobuco-alla-milanese", "Ossobuco alla milanese", "it", 1],
  ];

  const C = { fr: ["Francia", "France"], it: ["Italia", "Italy"], es: ["España", "Spain"], de: ["Alemania", "Germany"], at: ["Austria", "Austria"], lb: ["Líbano", "Lebanon"], cl: ["Chile", "Chile"], us: ["EE. UU.", "USA"], za: ["Sudáfrica", "South Africa"] };
  const WINES = [
    ["wine-dominio-de-pingus", "Dominio de Pingus", "Ribera del Duero", "es", "Tinto Fino", 1],
    ["wine-vega-sicilia-unico", "Vega Sicilia Único", "Ribera del Duero", "es", "Tinto Fino, Cabernet Sauvignon", 1],
    ["wine-la-rioja-alta-vina-ardanza-reserva", "La Rioja Alta Viña Ardanza Reserva", "Rioja", "es", "Tempranillo, Garnacha", 1],
    ["wine-vina-tondonia-reserva", "Viña Tondonia Reserva", "Rioja", "es", "Tempranillo, Garnacha, Graciano, Mazuelo", 1],
    ["wine-gonzalez-byass-tio-pepe", "González Byass Tío Pepe", "Jerez", "es", "Palomino", 1],
    ["wine-pazo-de-senorans-albarino", "Pazo de Señorans Albariño", "Rías Baixas", "es", "Albariño", 0],
    ["wine-ameztoi-getariako-txakolina", "Ameztoi Getariako Txakolina", "Getariako Txakolina", "es", "Hondarrabi Zuri", 0],
    ["wine-chateau-le-pin", "Château Le Pin", "Pomerol", "fr", "Merlot", 1],
    ["wine-chateau-haut-brion", "Château Haut-Brion", "Pessac-Léognan", "fr", "Merlot, Cabernet Sauvignon, Cabernet Franc", 1],
    ["wine-dom-perignon", "Dom Pérignon", "Champagne", "fr", "Chardonnay, Pinot Noir", 1],
    ["wine-bollinger-special-cuvee", "Bollinger Special Cuvée", "Champagne", "fr", "Pinot Noir, Chardonnay, Pinot Meunier", 1],
    ["wine-billecart-salmon-brut-reserve", "Billecart-Salmon Brut Réserve", "Champagne", "fr", "Pinot Meunier, Chardonnay, Pinot Noir", 1],
    ["wine-giuseppe-quintarelli-amarone-della-valpolicella-classico", "Quintarelli Amarone della Valpolicella Classico", "Valpolicella", "it", "Corvina, Rondinella", 1],
    ["wine-soldera-case-basse", "Soldera Case Basse", "Toscana", "it", "Sangiovese", 1],
    ["wine-dr-loosen-riesling", "Dr. Loosen Riesling", "Mosel", "de", "Riesling", 1],
    ["wine-keller-kirchspiel-riesling-gg", "Keller Kirchspiel Riesling GG", "Rheinhessen", "de", "Riesling", 1],
    ["wine-brundlmayer-riesling-kamptaler-terrassen", "Bründlmayer Riesling Kamptaler Terrassen", "Kamptal", "at", "Riesling", 1],
    ["wine-chateau-musar", "Château Musar", "Bekaa", "lb", "Cabernet Sauvignon, Cinsault, Carignan", 1],
    ["wine-clos-apalta", "Clos Apalta", "Colchagua", "cl", "Carmenère, Merlot, Cabernet Sauvignon", 1],
    ["wine-ridge-monte-bello", "Ridge Monte Bello", "Santa Cruz Mountains", "us", "Cabernet Sauvignon", 1],
    ["wine-kanonkop-paul-sauer", "Kanonkop Paul Sauer", "Stellenbosch", "za", "Cabernet Sauvignon, Cabernet Franc, Merlot", 1],
  ];

  const ROLES = [
    { id: "sala", icon: "users",
      es: { t: "Camarero", h: "Hoy en tu puesto", cap: "Lo que el camarero necesita antes de abrir la puerta, y nada más.", items: [["book", "Briefing antes del servicio", "Mesa 7 celebra un cumpleaños. Leído.", 0], ["lock", "Mesa segura", "Mesa 4: una persona celíaca. Platos sin gluten marcados.", 1], ["check", "Mis tareas", "19:30 · Reponer servilleteros", 0], ["bell", "Toques", "Pase: mesa 9 lista para salir", 1]] },
      en: { t: "Waiter", h: "Today at your station", cap: "What the waiter needs before the doors open, and nothing else.", items: [["book", "Pre-service briefing", "Table 7 is celebrating a birthday. Read.", 0], ["lock", "Safe table", "Table 4: one coeliac guest. Gluten-free dishes marked.", 1], ["check", "My tasks", "19:30 · Refill the napkin holders", 0], ["bell", "Calls", "Pass: table 9 ready to go out", 1]] } },
    { id: "cocina", icon: "pot",
      es: { t: "Cocina", h: "Hoy en tu puesto", cap: "La cocina ve la producción, los controles de APPCC a su hora y cómo va el servicio.", items: [["pot", "Producción del día", "Fondo oscuro: 2 lotes. Imprime la etiqueta.", 0], ["thermo", "APPCC a su hora", "12:00 · Temperatura de la cámara 2", 1], ["till", "Pantalla de cocina", "Mesa 12 · 14 min · marchando", 0], ["x", "Agotado en un toque", "Llega a la caja al momento", 0]] },
      en: { t: "Kitchen", h: "Today at your station", cap: "The kitchen sees prep, food-safety checks at the right time, and how service is going.", items: [["pot", "Today's prep", "Dark stock: 2 batches. Print the label.", 0], ["thermo", "Food safety on time", "12:00 · Cold room 2 temperature", 1], ["till", "Kitchen screen", "Table 12 · 14 min · on its way", 0], ["x", "Sold out in one tap", "Reaches the till instantly", 0]] } },
    { id: "barra", icon: "glass",
      es: { t: "Barra", h: "Hoy en tu puesto", cap: "La barra sabe qué botellas siguen en su punto y qué hay que pedir.", items: [["bottle", "Botellas abiertas", "Viña Tondonia · día 2 de 3", 1], ["glass", "Tapa del momento", "Croqueta de rabo, hasta las 22:00", 0], ["box", "Por pedir", "Limón, tónica", 0], ["speaker", "Saber", "Hoy: cómo se dice Gewürztraminer", 0]] },
      en: { t: "Bar", h: "Today at your station", cap: "The bar knows which bottles are still good and what needs ordering.", items: [["bottle", "Open bottles", "Viña Tondonia · day 2 of 3", 1], ["glass", "Tapa of the moment", "Oxtail croquette, until 22:00", 0], ["box", "To order", "Lemons, tonic", 0], ["speaker", "Saber", "Today: how to say Gewürztraminer", 0]] } },
    { id: "encargado", icon: "users",
      es: { t: "Encargado", h: "Equipo ahora", cap: "El encargado lleva el servicio entero. El dinero, no lo ve.", items: [["users", "En turno", "6 personas · Javi llega 10 min tarde", 1], ["book", "Relevo", "Del turno de mañana: la cámara 2 hace ruido", 0], ["cal", "Esta noche", "48 cubiertos · 2 alergias avisadas", 0], ["lock", "Sin dinero a la vista", "Ventas y sueldos, solo para el dueño", 0]] },
      en: { t: "Manager", h: "Team now", cap: "The manager runs the whole service. The money stays out of sight.", items: [["users", "On shift", "6 people · Javi is 10 min late", 1], ["book", "Handover", "From the morning shift: cold room 2 is noisy", 0], ["cal", "Tonight", "48 covers · 2 allergies flagged", 0], ["lock", "No money on screen", "Sales and wages, for the owner only", 0]] } },
    { id: "dueno", icon: "chart",
      es: { t: "Dueño", h: "Tu negocio, hoy", cap: "El dueño cierra el día en una hoja y deja el papeleo hecho.", items: [["chart", "Cierre del día", "Ventas, personal y lo raro del día, en una hoja", 0], ["cal", "Proponer semana", "Un borrador del cuadrante según contratos y convenio", 0], ["book", "Cierre de mes", "Listo para la gestoría", 0], ["till", "Albaranes", "El aceite ha subido un 12 %", 1]] },
      en: { t: "Owner", h: "Your business, today", cap: "The owner closes the day on one sheet and leaves the paperwork done.", items: [["chart", "Daily close", "Sales, staff and anything unusual, on one sheet", 0], ["cal", "Propose the week", "A draft rota built from contracts and the labour agreement", 0], ["book", "Month end", "Ready for the accountant", 0], ["till", "Delivery notes", "Olive oil has gone up 12%", 1]] } },
  ];

  const SPECIALS = [
    ["cal", { es: ["El cuadrante, propuesto", "La semana sale de los contratos, la disponibilidad y el convenio. Copia la anterior en un toque y enseña el coste de personal sin enseñar sueldos."], en: ["The rota, proposed", "The week comes from contracts, availability and the labour agreement. Copy last week in one tap; it shows labour cost without showing wages."] }],
    ["box", { es: ["Inventario en tu recorrido", "Cuentas en el orden en que caminas, el recuento nunca se pierde y el pedido sale de tus mínimos."], en: ["Stock in your walking order", "Count in the order you walk the store room, a count is never lost, and the order comes from your minimum levels."] }],
    ["till", { es: ["El albarán pone el precio", "Foto del albarán, se compara con el pedido, y te avisa cuando algo sube."], en: ["The delivery note sets the price", "Photograph the delivery note, it's checked against the order, and you're told when something goes up."] }],
    ["thermo", { es: ["APPCC sin papeles", "Temperaturas y controles a su hora, con las cifras legales a la vista."], en: ["Food safety without paper", "Temperatures and checks at the right time, with the legal figures shown."] }],
    ["chart", { es: ["El día y el mes, cerrados", "Una hoja para el cierre de cada día y un resumen de mes listo para la gestoría."], en: ["Day and month, closed", "One sheet to close each day, and a month summary ready for the accountant."] }],
    ["gift", { es: ["Bonos regalo", "Se venden en la barra y se imprimen con la imagen de tu casa."], en: ["Gift vouchers", "Sold at the counter and printed in your restaurant's look."] }],
    ["users", { es: ["Eventos", "Personal, coste estimado y una propuesta lista para enviar."], en: ["Events", "Staff, an estimated cost and a proposal ready to send."] }],
    ["book", { es: ["Nuestra casa", "El manual de tu restaurante, con guías de fotos para el que empieza."], en: ["Our house", "Your restaurant's own staff handbook, with photo guides for newcomers."] }],
    ["lock", { es: ["Tus datos son tuyos", "Un historial que nadie puede borrar, un fichaje que ni el dueño puede tocar, y la caja te la llevas si te vas."], en: ["Your data is yours", "A history nobody can erase, a time clock not even the owner can alter, and you keep the till if you leave."] }],
    ["bell", { es: ["Varios locales", "Una persona en varios restaurantes, y traspasos de stock que no envían lo que no hay."], en: ["Several restaurants", "One person across several restaurants, and stock transfers that never send what isn't there."] }],
  ];

  const ONLY = {
    es: ["Las reservas que llegan por correo se convierten en reservas", "Si está lleno, al cliente se le ofrece otra hora", "Cada nombre se oye bien dicho, en su idioma", "Ayuda por voz: el equipo pregunta y la app abre la pantalla", "Recuento de stock por voz, código de barras o a ciegas", "El albarán, fotografiado y comparado con el pedido", "Un fichaje que ni el dueño puede tocar", "Registro de temperaturas con las cifras legales citadas", "Los 14 alérgenos, confirmados por una persona", "Menú degustación con maridaje y su margen por cubierto", "Escandallo de cócteles, con dilución y graduación", "Ingeniería de carta: estrella, caballo, enigma y perro", "Un cambio de precio llega a la web, al QR, al panel y a la caja", "Un historial de cambios que nadie puede borrar", "La licencia de la caja no caduca nunca", "Te puedes llevar la caja a otro proveedor"],
    en: ["Booking requests by e-mail become bookings", "When it's full, the guest is offered another time", "Every name heard said right, in its own language", "Voice help: staff ask and the app opens the screen", "Stock count by voice, barcode or blind", "The delivery note, photographed and checked against the order", "A time clock not even the owner can alter", "Temperature log with the legal figures cited", "All 14 EU allergens, confirmed by a person", "Tasting menu with pairing and its per-cover margin", "Cocktail costing, with dilution and strength", "Menu engineering: star, plowhorse, puzzle, dog", "One price change reaches the website, the QR, the panel and the till", "A change history nobody can erase", "The till's licence never expires", "You can take the till to another provider"],
  };

  const FILMS = [
    ["historia-corta", "0:55", { es: ["La historia en 1 minuto", "Qué es y por qué cambia el día a día de un restaurante."], en: ["The story in 1 minute", "What it is and why it changes a restaurant's day."] }],
    ["carta-cambiar-precio", "1:03", { es: ["Cambia un precio", "Un precio nuevo llega a la carta QR, la caja y la web a la vez."], en: ["Change a price", "A new price reaches the QR menu, the till and the website at once."] }],
    ["carta-anadir-vino", "1:00", { es: ["Añade un vino", "Escribe el nombre, la bodega y el precio; la app rellena su ficha."], en: ["Add a wine", "Type the name, the winery and the price; the app fills in its card."] }],
    ["servicio-reserva-y-sentar", "1:01", { es: ["Reserva y sienta", "Crea una reserva, dale mesa y siéntalos cuando llegan."], en: ["Book and seat", "Make a booking, give it a table and seat them when they arrive."] }],
  ];

  const BARS = [36, 55, 20, 36, 48, 31, 27, 32];

  /* ---------- language ---------- */
  let lang = "es";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    const saved = localStorage.getItem("tv-lang");
    lang = q === "en" || q === "es" ? q : saved === "en" || saved === "es" ? saved : (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  } catch (_) {}

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    $$("[data-i]").forEach((el) => {
      const k = el.dataset.i;
      const v = lang === "en" ? EN[k] : ES[k];
      if (v != null) el.innerHTML = v;
    });
    $("#q").setAttribute("placeholder", lang === "en" ? EN.findPh : ES.findPh);
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem("tv-lang", lang); } catch (_) {}
    renderDate(); renderLedgers(); renderSays(); renderCallStatic(); renderNames(); renderSpec(); renderHits(); renderCarta(); renderRoles(); renderSpecials(); renderOnly(); renderFilms(); renderBars();
    if (currentSay) replaySay(currentSay, true);
  }
  $$(".lang button").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));

  function renderDate() {
    const d = new Date();
    $("#date").textContent = d.toLocaleDateString(lang === "en" ? "en-GB" : "es-ES", { weekday: "long", day: "numeric", month: "long" });
  }

  /* ---------- typing helper ---------- */
  function typeInto(el, text, done) {
    el.textContent = "";
    if (reduce) { el.textContent = text; done && done(); return () => {}; }
    let i = 0; let stop = false;
    const caret = document.createElement("span"); caret.className = "caret";
    const tick = () => {
      if (stop) return;
      el.textContent = text.slice(0, ++i); el.appendChild(caret);
      if (i < text.length) setTimeout(tick, 26 + Math.random() * 30);
      else setTimeout(() => { caret.remove(); done && done(); }, 220);
    };
    tick();
    return () => { stop = true; };
  }
  function printLines(ul, lines, delay = 340) {
    ul.innerHTML = lines.map((l) => `<li>${icon("check")}<span>${l}</span></li>`).join("");
    const lis = $$("li", ul);
    lis.forEach((li, i) => (reduce ? li.classList.add("on") : setTimeout(() => li.classList.add("on"), 120 + i * delay)));
  }

  /* ---------- hero ticket: plays once on load ---------- */
  function heroPlay() {
    const q = $("#heroQuote");
    const ul = $("#heroLines");
    const text = (lang === "en" ? EN.tkQuote : ES.tkQuote).replace(/<[^>]+>/g, "");
    $$("li", ul).forEach((li) => li.classList.remove("on"));
    typeInto(q, text, () => $$("li", ul).forEach((li, i) => setTimeout(() => li.classList.add("on"), 200 + i * 380)));
  }

  /* ---------- voice console ---------- */
  const state = {};
  function resetPlaces() {
    state.caja = [{ k: "pulpo", es: "Pulpo a la gallega", en: "Pulpo a la gallega", out: false }, { k: "croq", es: "Croquetas de jamón", en: "Ham croquettes" }, { k: "salm", es: "Salmorejo", en: "Salmorejo" }];
    state.reservas = [{ es: "20:30 · Martín · 2", en: "20:30 · Martín · 2" }, { es: "21:00 · Okafor · 6", en: "21:00 · Okafor · 6" }];
    state.equipo = [{ es: "Ana · en sala", en: "Ana · floor" }, { es: "Lucía · en barra", en: "Lucía · bar" }, { es: "Javi · en cocina", en: "Javi · kitchen" }];
    state.barra = [{ es: "Viña Tondonia · día 2 de 3", en: "Viña Tondonia · day 2 of 3" }];
  }
  resetPlaces();
  let clockMin = 21 * 60 + 47;
  let currentSay = null;

  function drawPlace(key, fresh) {
    const ul = $(`#p-${key} ul`);
    ul.innerHTML = state[key].map((r) => {
      const tag = r.tag ? `<span class="tag${r.tagOk ? " ok" : ""}">${esc(r.tag[lang])}</span>` : "";
      return `<li class="${r.out ? "out" : ""}${r === fresh ? " new" : ""}"><span>${esc(r[lang])}</span>${tag}</li>`;
    }).join("");
  }
  function drawAll(fresh) { ["caja", "reservas", "equipo", "barra"].forEach((k) => drawPlace(k, fresh)); }

  function effect(id) {
    let fresh = null;
    const add = (key, row) => { state[key].push(row); fresh = row; };
    if (id === "sold") { const p = state.caja.find((r) => r.k === "pulpo"); if (p.out) return p; p.out = true; p.tag = { es: "Agotado", en: "Sold out" }; add("equipo", { es: "Aviso: pulpo agotado", en: "Alert: octopus sold out" }); fresh = p; }
    if (id === "book" && !state.reservas.find((r) => r.ruiz)) add("reservas", { ruiz: 1, es: "21:00 · Ruiz · 4", en: "21:00 · Ruiz · 4", tag: { es: "Nueva", en: "New" } });
    if (id === "confirm") { let r = state.reservas.find((x) => x.ruiz); if (!r) { r = { ruiz: 1, es: "21:00 · Ruiz · 4", en: "21:00 · Ruiz · 4" }; state.reservas.push(r); } r.tag = { es: "Confirmada", en: "Confirmed" }; r.tagOk = 1; fresh = r; }
    if (id === "late") add("equipo", { es: "Javi · llega 20:10", en: "Javi · arrives 20:10", tag: { es: "Tarde", en: "Late" } });
    if (id === "help") add("equipo", { es: "Ayuda en terraza · leído por 2", en: "Help on the terrace · read by 2", tag: { es: "Aviso", en: "Alert" } });
    if (id === "bottle") add("barra", { es: "Viña Ardanza · abierta hoy", en: "Viña Ardanza · opened today", tag: { es: "Día 1", en: "Day 1" }, tagOk: 1 });
    if (id === "order") add("barra", { es: "Por pedir: limón", en: "To order: lemons", tag: { es: "Pedir", en: "Order" } });
    return fresh;
  }

  function renderSays() {
    $("#says").innerHTML = SAYS.map((s) => `<button type="button" class="say" data-say="${s.id}" aria-pressed="${currentSay === s.id}"><span class="mic">${icon("mic")}</span><span>${lang === "en" ? "“" : "«"}${esc(s[lang].q)}${lang === "en" ? "”" : "»"}</span></button>`).join("");
    $$("#says .say").forEach((b) => b.addEventListener("click", () => playSay(b.dataset.say)));
    drawAll();
    if (!currentSay) {
      $("#vWho").textContent = lang === "en" ? "Tap a line on the left" : "Toca una frase";
      $("#vQuote").textContent = "";
      $("#vLines").innerHTML = "";
      $("#vClock").textContent = fmt(clockMin);
    }
  }
  const q = (t) => (lang === "en" ? `“${t}”` : `«${t}»`);
  const fmt = (m) => `${String(Math.floor(m / 60) % 24).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
  let stopType = null;
  function playSay(id) {
    currentSay = id;
    clockMin += 1 + Math.floor(Math.random() * 3);
    $$("#says .say").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.say === id)));
    replaySay(id, false);
  }
  function replaySay(id, silent) {
    const s = SAYS.find((x) => x.id === id);
    const c = s[lang];
    $("#vClock").textContent = fmt(clockMin);
    $("#vWho").textContent = (lang === "en" ? "Said by " : "Lo dice ") + c.who;
    stopType && stopType();
    $$(".place").forEach((p) => p.classList.remove("hit"));
    if (silent) { $("#vQuote").textContent = q(c.q); printLines($("#vLines"), c.l, 0); drawAll(); return; }
    stopType = typeInto($("#vQuote"), q(c.q), () => {
      printLines($("#vLines"), c.l);
      setTimeout(() => {
        const fresh = effect(id);
        drawAll(fresh);
        s.hit.forEach((k) => $(`#p-${k}`).classList.add("hit"));
        setTimeout(() => s.hit.forEach((k) => $(`#p-${k}`).classList.remove("hit")), 1800);
      }, reduce ? 0 : 360 * c.l.length);
    });
  }

  /* ---------- phone call ---------- */
  let callTimers = [];
  function renderCallStatic() {
    const lines = CALL[lang];
    $("#callLines").innerHTML = lines.map(([w, t]) => w === "sys"
      ? `<li class="sys on">${esc(t)}</li>`
      : `<li class="${w === "bot" ? "bot" : ""} on"><span class="who">${CALL.who[lang][w]}</span><span>${esc(t)}</span></li>`).join("");
  }
  function playCall() {
    callTimers.forEach(clearTimeout); callTimers = [];
    const lis = $$("#callLines li");
    if (reduce) { lis.forEach((li) => li.classList.add("on")); return; }
    lis.forEach((li) => li.classList.remove("on"));
    let t = 200;
    lis.forEach((li) => { callTimers.push(setTimeout(() => li.classList.add("on"), t)); t += 300 + li.textContent.length * 22; });
  }
  $("#callReplay").addEventListener("click", playCall);

  /* ---------- Saber specimen with real recordings ---------- */
  const player = new Audio(); player.preload = "none";
  let playingBtn = null;
  function play(file, male, btn) {
    try { player.pause(); } catch (_) {}
    if (playingBtn) playingBtn.classList.remove("playing");
    player.src = AUDIO + (male ? "male/" : "") + file;
    playingBtn = btn || null;
    if (btn) btn.classList.add("playing");
    player.play().catch(() => btn && btn.classList.remove("playing"));
  }
  player.addEventListener("ended", () => { if (playingBtn) playingBtn.classList.remove("playing"); playingBtn = null; });
  player.addEventListener("pause", () => { if (playingBtn && player.ended) playingBtn.classList.remove("playing"); });

  const SETS = [
    { es: "El pulpo", en: "Octopus", rows: [["ES", "Pulpo", "cl-7f868d2aa6abeb18727c"], ["FR", "Poulpe", "cl-004cbccd34c50d9f7c46"], ["IT", "Polpo", "cl-cd5977a930dc031214c8"], ["DE", "Oktopus", "cl-b74c32611bf0fe53058a"], ["PT", "Polvo", "cl-06fedd6792fad3c1ce3b"], ["EN", "Octopus", "cl-757828b629b2eb575a5d"], ["JA", "蛸", "cl-29f7c06b767151587b91"]] },
    { es: "El bacalao", en: "Cod", rows: [["ES", "Bacalao", "cl-6c9a301b18e296ec711b"], ["FR", "Morue", "cl-1e20d64c8d57c0ba9bb8"], ["IT", "Baccalà", "cl-a6f83ea860bf4a6d2399"], ["DE", "Kabeljau", "cl-8713864a74d55356a33d"], ["PT", "Bacalhau", "cl-6f17a95cde19d789f601"], ["EN", "Cod", "cl-e25185ccd1cfab6d14bd"]] },
    { es: "El queso", en: "Cheese", rows: [["ES", "Queso", "cl-d7f551b21db4916bf9fb"], ["FR", "Fromage", "cl-0f7bc5c27ad161872fc3"], ["IT", "Formaggio", "cl-4fcb900cfb68c873f082"], ["DE", "Käse", "cl-8c6438ea41360c0792b0"], ["PT", "Queijo", "cl-6e0cc85d13ef2b8e99c7"], ["EN", "Cheese", "cl-25762b29b3e581137758"]] },
  ];
  let set = 0;
  function renderSets() {
    $("#sets").innerHTML = SETS.map((x, i) => `<button type="button" data-set="${i}" aria-pressed="${i === set}">${esc(x[lang])}</button>`).join("");
    $$("#sets button").forEach((b) => b.addEventListener("click", () => { set = +b.dataset.set; renderSets(); renderSaid(); }));
  }
  function renderSaid() {
    const lbl = lang === "en" ? ["Woman's voice", "Man's voice"] : ["Voz de mujer", "Voz de hombre"];
    const short = lang === "en" ? ["Woman", "Man"] : ["Mujer", "Hombre"];
    $("#said").innerHTML = SETS[set].rows.map(([lg, w, k]) => `<li><span class="lg">${lg}</span><span class="w" lang="${lg.toLowerCase()}">${esc(w)}</span><span class="lead"></span><span class="pl"><button type="button" class="icon-btn vbtn" data-k="${k}" aria-label="${lbl[0]}: ${esc(w)}">${icon("speaker")}<span>${short[0]}</span></button><button type="button" class="icon-btn vbtn" data-k="${k}" data-m="1" aria-label="${lbl[1]}: ${esc(w)}">${icon("speaker")}<span>${short[1]}</span></button></span></li>`).join("");
    $("#specName").textContent = SETS[set].rows[0][1];
    $$("#said button").forEach((b) => b.addEventListener("click", () => {
      $$("#said li").forEach((li) => li.classList.remove("on"));
      b.closest("li").classList.add("on");
      $("#specName").textContent = b.closest("li").querySelector(".w").textContent;
      play(b.dataset.k + ".mp3", !!b.dataset.m, b);
    }));
  }
  function renderNames() {
    $("#names").innerHTML = NAMES.map(([k, n, l], i) => `<button type="button" data-idx="${i}"><span class="flag">${l.toUpperCase()}</span>${esc(n)}</button>`).join("");
    $$("#names button").forEach((b) => b.addEventListener("click", () => play(NAMES[+b.dataset.idx][0] + ".mp3", false, b)));
  }
  function renderSpec() { renderSets(); renderSaid(); }
  function renderLedgers() {
    const f = new Intl.NumberFormat(lang === "en" ? "en-GB" : "es-ES");
    $$("b[data-n]").forEach((b) => { b.textContent = f.format(+b.dataset.n) + (b.dataset.plus ? "+" : "") + (b.dataset.pct ? (lang === "en" ? "%" : " %") : ""); });
  }

  /* ---------- cellar finder ---------- */
  const fold = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const onList = new Set();
  function renderHits() {
    const q = fold($("#q").value.trim());
    const list = q ? WINES.filter((w) => fold(`${w[1]} ${w[2]} ${w[4]}`).includes(q)) : WINES.slice(0, 5);
    const hits = $("#hits");
    if (!list.length) { hits.innerHTML = `<li class="empty">${T[lang].noHits}</li>`; return; }
    hits.innerHTML = list.map((w) => {
      const [k, n, region, c, grapes] = w;
      const has = onList.has(k);
      return `<li class="hit"><div><b>${esc(n)}</b><small>${esc(region)} · ${C[c][lang === "en" ? 1 : 0]} · ${esc(grapes)}</small></div><div class="acts"><button type="button" class="icon-btn" data-play="${k}" aria-label="${T[lang].listen}: ${esc(n)}">${icon("speaker")}</button><button type="button" class="icon-btn add" data-add="${k}" aria-label="${has ? T[lang].added : T[lang].add}: ${esc(n)}" ${has ? "disabled" : ""}>${icon(has ? "check" : "plus")}</button></div></li>`;
    }).join("") + (q ? "" : `<li class="empty">${T[lang].sampleNote}</li>`);
    $$("[data-play]", hits).forEach((b) => b.addEventListener("click", () => play(b.dataset.play + ".mp3", false, b)));
    $$("[data-add]", hits).forEach((b) => b.addEventListener("click", () => { onList.add(b.dataset.add); renderHits(); renderCarta(b.dataset.add); }));
  }
  function renderCarta(fresh) {
    const ol = $("#carta");
    if (!onList.size) { ol.innerHTML = `<li class="hint">${lang === "en" ? EN.cartaHint : ES.cartaHint}</li>`; return; }
    ol.innerHTML = [...onList].map((k) => {
      const w = WINES.find((x) => x[0] === k);
      return `<li class="${k === fresh ? "new" : ""}"><b>${esc(w[1])}</b><small>${esc(w[2])} · ${C[w[3]][lang === "en" ? 1 : 0]} · ${esc(w[4])}</small></li>`;
    }).join("");
  }
  $("#q").addEventListener("input", renderHits);

  /* ---------- roles ---------- */
  let role = 0;
  function renderRoles() {
    $("#roleTabs").innerHTML = ROLES.map((r, i) => `<button type="button" role="tab" id="tab-${r.id}" aria-controls="rolePanel" aria-selected="${i === role}" tabindex="${i === role ? 0 : -1}">${esc(r[lang].t)}${icon("right")}</button>`).join("");
    const tabs = $$("#roleTabs button");
    tabs.forEach((b, i) => {
      b.addEventListener("click", () => { role = i; renderRoles(); });
      b.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        role = (i + (e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : ROLES.length - 1)) % ROLES.length;
        renderRoles(); $$("#roleTabs button")[role].focus();
      });
    });
    const r = ROLES[role][lang];
    $("#rolePanel").setAttribute("aria-labelledby", `tab-${ROLES[role].id}`);
    $("#rolePanel").innerHTML = `<div class="screen-body"><span class="who">La Higuera · ${esc(r.t)}</span><h3>${esc(r.h)}</h3><ul>${r.items.map(([ic, b, s, hot]) => `<li class="${hot ? "hot" : ""}"><span class="ic">${icon(ic)}</span><div><b>${esc(b)}</b><small>${esc(s)}</small></div></li>`).join("")}</ul></div>`;
    $("#roleCap").textContent = r.cap;
  }

  /* ---------- specials, only, films, bars ---------- */
  function renderSpecials() {
    $("#specials").innerHTML = SPECIALS.map(([ic, t]) => `<div class="special"><h3>${icon(ic)}${esc(t[lang][0])}</h3><p>${esc(t[lang][1])}</p></div>`).join("");
  }
  function renderOnly() {
    $("#only").innerHTML = ONLY[lang].map((t) => `<li>${icon("check")}<span>${esc(t)}</span></li>`).join("");
  }
  function renderFilms() {
    $("#films").innerHTML = FILMS.map(([id, min, t]) => `<button type="button" class="film" data-film="${id}"><span class="frame"><img src="${MEDIA}${id}.jpg" alt="" loading="lazy" width="640" height="400"><span class="len">${min} · ES</span><span class="play">${icon("play")}</span></span><span><b>${esc(t[lang][0])}</b><small>${esc(t[lang][1])}</small></span></button>`).join("");
    bindFilms();
  }
  function renderBars() {
    const max = 60;
    const H = $("#bars").clientHeight || 240;
    $("#bars").innerHTML = BARS.map((v) => `<div class="bar"><b>${v}</b><i style="height:${Math.round((v / max) * (H - 34))}px"></i></div>`).join("");
    $("#barDays").innerHTML = T[lang].days.map((d) => `<span>${d}</span>`).join("");
  }

  /* ---------- video sheet ---------- */
  const sheet = $("#sheet"); const vid = $("#sheetVideo"); let lastFocus = null;
  function openFilm(id) {
    lastFocus = document.activeElement;
    vid.poster = `${MEDIA}${id}.jpg`; vid.src = `${MEDIA}${id}.mp4`;
    sheet.hidden = false; document.body.style.overflow = "hidden";
    $("#sheetClose").focus();
    vid.play().catch(() => {});
  }
  function closeFilm() { vid.pause(); vid.removeAttribute("src"); vid.load(); sheet.hidden = true; document.body.style.overflow = ""; lastFocus && lastFocus.focus(); }
  function bindFilms() { $$("[data-film]").forEach((b) => { if (b.dataset.bound) return; b.dataset.bound = 1; b.addEventListener("click", () => openFilm(b.dataset.film)); }); }
  $("#sheetClose").addEventListener("click", closeFilm);
  sheet.addEventListener("click", (e) => { if (e.target === sheet) closeFilm(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !sheet.hidden) closeFilm(); });

  /* ---------- tally of 32, drawn in chalk ---------- */
  function drawTally() {
    const svg = $("#tallySvg");
    let out = ""; let n = 0; let seed = 11;
    const r = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 - 0.5; };
    for (let g = 0; g < 7 && n < 32; g++) {
      const gx = 20 + (g % 4) * 125; const gy = 20 + Math.floor(g / 4) * 120;
      const inGroup = Math.min(5, 32 - n);
      for (let s = 0; s < Math.min(4, inGroup); s++) {
        const x = gx + s * 20 + r() * 4;
        out += `<path d="M${x.toFixed(1)} ${(gy + r() * 6).toFixed(1)} Q ${(x + r() * 6).toFixed(1)} ${gy + 45} ${(x + r() * 5).toFixed(1)} ${(gy + 90 + r() * 6).toFixed(1)}"/>`;
        n++;
      }
      if (inGroup === 5) { out += `<path class="slash" d="M${gx - 12} ${gy + 70 + r() * 6} L ${gx + 82} ${gy + 18 + r() * 6}"/>`; n++; }
    }
    svg.innerHTML = out;
    if (reduce || !("IntersectionObserver" in window)) return;
    const paths = $$("path", svg);
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      paths.forEach((p, i) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
        p.getBoundingClientRect();
        p.style.transition = `stroke-dashoffset .28s cubic-bezier(.16,1,.3,1) ${i * 55}ms`;
        p.style.strokeDashoffset = 0;
      });
    }, { threshold: 0.4 });
    io.observe(svg);
  }

  /* ---------- reveals that start from a visible state ---------- */
  function observeOnce(el, fn, threshold = 0.45) {
    if (reduce || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); fn(); } }, { threshold });
    io.observe(el);
  }
  function countUp(el, to, ms = 1400) {
    const f = new Intl.NumberFormat(lang === "en" ? "en-GB" : "es-ES");
    const t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / ms); const e = 1 - Math.pow(1 - k, 4); el.textContent = f.format(Math.round(to * e)); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }

  /* ---------- boot ---------- */
  onList.add("wine-dominio-de-pingus"); onList.add("wine-vina-tondonia-reserva");
  currentSay = "sold";
  applyLang(lang);
  effect("sold"); drawAll();
  if (!reduce) { document.documentElement.classList.add("intro"); setTimeout(() => document.documentElement.classList.remove("intro"), 2600); }
  if (!reduce) setTimeout(heroPlay, 700);
  drawTally();
  observeOnce($("#bigNum"), () => countUp($("#bigNum"), 16000));
  observeOnce($("#callLines"), playCall, 0.3);

  observeOnce($("#bars"), () => $$("#bars i").forEach((b, i) => b.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 700, delay: i * 70, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" })), 0.5);
})();
