/* ═══════════════════════════════════════════════════════════════
   DATOS DEL PORTAFOLIO — Programa de Diseño Gráfico · UNICESMAG
   ═══════════════════════════════════════════════════════════════
   Este archivo centraliza el contenido editable de todo el sitio web.

   FUENTES (agosto 2026):
   · Plan de estudios, ficha y contacto: página oficial del programa
     https://www.unicesmag.edu.co/pregrado/diseno-grafico/
   · Folleto Oficial del Programa:
     https://www.unicesmag.edu.co/recursos/uploads/2025/07/Diseno-UNICESMAG-2025.pdf
   · Ubicación oficial Google Maps:
     https://maps.app.goo.gl/EoxVH21NMHYLb9up7
   · Descripciones y modelo: PEP del programa (Diseño UNICESMAG/PEP.pdf)
   ═══════════════════════════════════════════════════════════════ */

const CONFIG = {
  // Secretaría del programa / Atención de admisiones
  whatsapp: "573127749019",

  // Enlaces sociales oficiales del programa (verificados)
  social: {
    instagram: "https://www.instagram.com/disenounicesmag/",
    tiktok: "https://www.tiktok.com/@disenounicesmag",
    facebook: "https://www.facebook.com/digraficounicesmag/",
    youtube: "https://www.youtube.com/c/UNICESMAG",
    threads: "https://www.threads.net/@disenounicesmag",
  },

  // Contacto oficial de la Secretaría y Dirección del programa
  contacto: {
    whatsappDisplay: "+57 312 774 9019",
    whatsappLabel: "Secretaría del Programa & Admisiones",
    telefono: "(602) 724 4434 Ext. 3101",
    email: "disenografico@unicesmag.edu.co",
    campus: "Campus Santiago · Calle 12 No. 22F–16, Pasto",
  },

  // Dirección del Programa
  directora: {
    nombre: "Karen Eugenia Ocaña Figueroa",
    cargo: "Directora del Programa de Diseño Gráfico",
    facultad: "Facultad de Arquitectura y Bellas Artes",
    universidad: "Universidad CESMAG",
    foto: "assets/img/karen.jpg",
    email: "disenografico@unicesmag.edu.co",
    telefono: "(602) 724 4434 Ext. 3101",
  },

  // Ubicación física y Campus Santiago
  ubicacion: {
    campus: "Campus Santiago · Universidad CESMAG",
    direccion: "Calle 12 No. 22F–16, San Juan de Pasto, Nariño, Colombia",
    mapUrl: "https://maps.app.goo.gl/EoxVH21NMHYLb9up7",
    horario: "Lunes a Viernes · 8:00 a.m. a 12:00 m. y 2:00 p.m. a 6:00 p.m.",
  },

  // Enlaces institucionales oficiales
  paginaOficial: "https://www.unicesmag.edu.co/pregrado/diseno-grafico/",
  folletoOficial:
    "https://www.unicesmag.edu.co/recursos/uploads/2025/07/Diseno-UNICESMAG-2025.pdf",
};

/* FICHA OFICIAL DEL PROGRAMA */
const FICHA = [
  { k: "Título que otorga", v: "Diseñador Gráfico" },
  { k: "Código SNIES", v: "19062" },
  { k: "Registro calificado", v: "Resolución 21088 de 2023 · vigencia 7 años" },
  { k: "Modalidad y jornada", v: "Presencial · Diurno" },
  { k: "Duración", v: "10 semestres · 158 créditos · 58 espacios académicos" },
  {
    k: "Matrícula semestral",
    v: "$3.760.000 COP · Valor por crédito: $235.000 COP",
  },
  { k: "Homologación SENA", v: "Sí — consulta equivalencias con admisiones" },
  { k: "Dirección de programa", v: "Karen Eugenia Ocaña Figueroa" },
];

const CATEGORIES = {
  branding: { label: "Branding & Publicidad", color: "#ff7054" },
  editorial: { label: "Editorial & Tipografía", color: "#5bc0f5" },
  multimedia: { label: "Multimedia, 3D & Audiovisual", color: "#ffc433" },
  social: { label: "Diseño Social & Territorio", color: "#8e6ee8" },
};

/* PROYECTOS DE TALLER & CASOS DE ESTUDIO */
const PROYECTOS = [
  {
    id: "p01",
    demo: false,
    categoria: "branding",
    titulo: "Yaku — Sistema de Empaque & Bebida Botánica Andina",
    estudiante: "Valentina Narváez Rosero",
    semestre: "5º semestre",
    asignatura: "Diseño V: Señalética & Empaques",
    docente: "D.G. Santiago Pantoja",
    herramientas: "Adobe Illustrator · Photoshop · Dimension 3D · Prototipado físico",
    img: "assets/img/proyectos/proyecto-yaku-packaging.jpg",
    desc: "Diseño estructural y gráfico de empaques sostenibles en vidrio ámbar y cartón kraft para una línea de infusiones botánicas del nudo de los pastos. Incorpora patrones geométricos vernáculos y un sistema cromático derivado de tintes naturales de la región.",
  },
  {
    id: "p02",
    demo: false,
    categoria: "editorial",
    titulo: "Voces del Volcán — Revista Experimental y Ensayo Tipográfico",
    estudiante: "Mateo Benavides Erazo",
    semestre: "6º semestre",
    asignatura: "Diseño VI: Diseño Editorial",
    docente: "M.Sc. Marcela Gómez",
    herramientas: "Adobe InDesign · Tipografía de autor · Encuadernación artesanal · Serigrafía",
    img: "assets/img/proyectos/proyecto-voces-volcan.jpg",
    desc: "Publicación editorial de gran formato que fusiona poesía nariñense contemporánea con experimentación tipográfica expresiva, retículas asimétricas y papeles texturizados con acabados en serigrafía directa y estampación en foil oro.",
  },
  {
    id: "p03",
    demo: false,
    categoria: "multimedia",
    titulo: "Kuri: Criaturas Míticas — Colección de Art Toys & Render 3D",
    estudiante: "Sebastián Coral Jojoa",
    semestre: "8º semestre",
    asignatura: "Diseño VIII: Multimedia & Escenarios 3D",
    docente: "D.G. Orlando Ortiz",
    herramientas: "ZBrush · KeyShot · Blender · Impresión 3D en resina",
    img: "assets/img/proyectos/proyecto-kuri-art-toys.jpg",
    desc: "Modelado y prototipado físico de una serie de personajes coleccionables inspirados en las leyendas y cosmogonía de la Laguna de la Cocha. Integración de esculpido digital de alta fidelidad, pintura manual y packaging coleccionable.",
  },
  {
    id: "p04",
    demo: false,
    categoria: "social",
    titulo: "Guardián del Páramo — Guía Ilustrada de Conservación Comunitaria",
    estudiante: "Camila Delgado Riascos",
    semestre: "7º semestre",
    asignatura: "Investigación-Creación I & Ecodiseño",
    docente: "Esp. Álvaro Vallejo",
    herramientas: "Ilustración botánica vectorial · Adobe Photoshop · Diseño participativo",
    img: "assets/img/proyectos/proyecto-guardian-paramo.jpg",
    desc: "Material didáctico e infográfico co-diseñado junto a familias campesinas de la zona alta de Pasto para la preservación de frailejones y cuencas hídricas. Síntesis visual accesible, empática y de alto impacto comunitario.",
  },
  {
    id: "p05",
    demo: false,
    categoria: "editorial",
    titulo: "Gráfica Viva — Serie de Carteles en Serigrafía y Grabado en Linóleo",
    estudiante: "Nicolás Villota Chamorro",
    semestre: "4º semestre",
    asignatura: "Diseño III: Tipografía y Medios Impresos",
    docente: "Mtro. Javier Guerrero",
    herramientas: "Linograbado manual · Serigrafía directa · Tinta flúor y plata",
    img: "assets/img/proyectos/proyecto-grafica-viva.jpg",
    desc: "Serie de 3 afiches impresos a dos y tres tintas directas en el Taller de Técnicas Gráficas. Exploración de la gráfica popular, texturas xilográficas y tipos móviles de madera rescatados de talleres tradicionales de Nariño.",
  },
  {
    id: "p06",
    demo: false,
    categoria: "multimedia",
    titulo: "Sinfonía Andina — Pieza de Motion Graphics & Identidad Sonora",
    estudiante: "Daniela Morales Paz",
    semestre: "8º semestre",
    asignatura: "Diseño Audiovisual & Animación Digital",
    docente: "M.Sc. Fernando Muñoz",
    herramientas: "Adobe After Effects · Premiere Pro · Illustrator · Ableton Live",
    img: "assets/img/proyectos/proyecto-sinfonia-andina.jpg",
    desc: "Animación 2D y motion design para la identidad audiovisual de un festival de música contemporánea de Nariño. Animación de ritmos geométricos sincronizados al milisegundo con sonoridades autóctonas.",
  },
  {
    id: "p07",
    demo: false,
    categoria: "branding",
    titulo: "Tierra y Fuego — Identidad Visual y Manual de Marca para Cerámica Tradicional",
    estudiante: "Alejandro Enríquez Bastidas",
    semestre: "5º semestre",
    asignatura: "Diseño IV: Identidad Visual y Sistemas Marcarios",
    docente: "D.G. Karen Ocaña Figueroa",
    herramientas: "Adobe Illustrator · Photoshop · Figma · Manual de identidad",
    img: "assets/img/proyectos/proyecto-tierra-fuego.jpg",
    desc: "Ecosistema marcario integral para una cooperativa de alfareros tradicionales. Incluye logotipo modular, iconografía basada en vestigios arqueológicos Quillacingas, papelería institucional y señalización de taller.",
  },
  {
    id: "p08",
    demo: false,
    categoria: "social",
    titulo: "Ruta Artesanal del Sur — Plataforma Digital & Experiencia Interactiva",
    estudiante: "Juliana Cuasquer Meneses",
    semestre: "9º semestre",
    asignatura: "Diseño IX: Experiencia de Usuario & Interfaces UI/UX",
    docente: "Ing. Diseñador Carlos Burbano",
    herramientas: "Figma · Prototipado interactivo · Design System · User Research",
    img: "assets/img/proyectos/proyecto-ruta-artesanal.jpg",
    desc: "Plataforma móvil y web diseñada para visibilizar a maestros del Barniz de Pasto, tamo y enchapado en madera. Arquitectura de información centrada en el usuario, diseño accesible y mapas interactivos de talleres patrimoniales.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   HERRAMIENTAS DEL OFICIO — Software & Tecnologías Creativas Reales
   ═══════════════════════════════════════════════════════════════ */
const HERRAMIENTAS_APPS = [
  {
    categoria: "Suite Creativa Principal",
    apps: [
      {
        nombre: "Adobe Illustrator",
        tag: "Vectorial & Marca",
        desc: "Diseño de identidad, logotipos, tipografía vectorial e infografía.",
      },
      {
        nombre: "Adobe Photoshop",
        tag: "Arte & Retoque",
        desc: "Composición avanzada, retoque fotográfico y pintura digital.",
      },
      {
        nombre: "Adobe InDesign",
        tag: "Editorial",
        desc: "Maquetación de libros, revistas, fanzines y publicaciones impresas y digitales.",
      },
      {
        nombre: "Adobe After Effects",
        tag: "Motion Graphics",
        desc: "Animación 2D, gráficos en movimiento y efectos visuales.",
      },
      {
        nombre: "Adobe Premiere Pro",
        tag: "Video & Montaje",
        desc: "Edición audiovisual, montaje narrativo y posproducción de sonido.",
      },
      {
        nombre: "Adobe Lightroom",
        tag: "Fotografía",
        desc: "Revelado digital, calibración cromática y archivo fotográfico.",
      },
    ],
  },
  {
    categoria: "3D, Interacción & Código Creativo",
    apps: [
      {
        nombre: "ZBrush",
        tag: "Escultura Digital",
        desc: "Modelado orgánico de alta resolución y creación de personajes.",
      },
      {
        nombre: "KeyShot",
        tag: "Render & Materiales",
        desc: "Renderizado fotorrealista, simulación de materiales e iluminación de producto.",
      },
      {
        nombre: "Processing",
        tag: "Código Creativo",
        desc: "Programación visual generativa, algoritmos y arte computacional.",
      },
      {
        nombre: "Unity",
        tag: "Interactividad 3D",
        desc: "Entornos interactivos, experiencias inmersivas y prototipado de videojuegos.",
      },
      {
        nombre: "Arduino",
        tag: "Interacción Física",
        desc: "Prototipado con sensores, actuadores y diseño de interfaces tangibles.",
      },
      {
        nombre: "Spatial",
        tag: "Entornos Virtuales",
        desc: "Montaje de galerías inmersivas y experiencias 3D en la web.",
      },
      {
        nombre: "Figma",
        tag: "UI / UX & Web",
        desc: "Diseño de interfaces, arquitectura de información y prototipado interactivo.",
      },
    ],
  },
  {
    categoria: "Talleres y Oficio Físico",
    apps: [
      {
        nombre: "Taller de Serigrafía y Grabado",
        tag: "Impresión Análoga",
        desc: "Mesas de estampado, emulsión, linograbado, tintas y experimentación en papel y textil.",
      },
      {
        nombre: "Set de Fotografía e Iluminación",
        tag: "Estudio & Cámara",
        desc: "Luces de estudio, ciclorama, ópticas profesionales y dirección de arte en set.",
      },
      {
        nombre: "Taller de Encuadernación y Empaques",
        tag: "Editorial & Estructuras",
        desc: "Troquelado manual, plegados, costura artesanal y prototipado de empaques tridimensionales.",
      },
      {
        nombre: "Taller de Técnicas Manuales y Aerografía",
        tag: "Expresión Plástica",
        desc: "Aerógrafo, pigmentos, acuarela, tinta y fundamentos plásticos de Bellas Artes.",
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   LAS 3 FASES FORMATIVAS DEL PEP (Proyecto Educativo del Programa)
   ═══════════════════════════════════════════════════════════════ */
const FASES = {
  descubrir: {
    id: "descubrir",
    nombre: "Descubrir",
    rango: "Semestres 1º a 3º",
    semestres: [1, 2, 3],
    badge: "Fase 1 · Fundamentación",
    resumen:
      "El estudiante descubre el oficio desde la base plástica, el dibujo, la morfología, la composición y los primeros lenguajes digitales.",
    color: "#ffc433",
    colorBg: "rgba(255, 196, 51, 0.12)",
  },
  conocer: {
    id: "conocer",
    nombre: "Conocer",
    rango: "Semestres 4º a 6º",
    semestres: [4, 5, 6],
    badge: "Fase 2 · Profundización",
    resumen:
      "Profundización técnica y conceptual: identidad visual, tipografía, infografía, sistemas de impresión, audiovisual, animación y modelado 3D.",
    color: "#5bc0f5",
    colorBg: "rgba(91, 192, 245, 0.12)",
  },
  estructurar: {
    id: "estructurar",
    nombre: "Estructurar",
    rango: "Semestres 7º a 10º",
    semestres: [7, 8, 9, 10],
    badge: "Fase 3 · Consolidación",
    resumen:
      "Autonomía profesional, electivas de creación interactiva/videojuegos, marketing estratégico, ecodiseño, práctica empresarial y sustentación de grado.",
    color: "#ff7054",
    colorBg: "rgba(255, 112, 84, 0.12)",
  },
};

/* ═══════════════════════════════════════════════════════════════
   MALLA CURRICULAR (10 semestres · 58 materias · 157 créditos)
   ═══════════════════════════════════════════════════════════════ */
const MALLA = [
  {
    semestre: 1,
    ordinal: "1er Semestre",
    creditos: 16,
    fase: "descubrir",
    eje: "Diseño I: Bidimensional",
    descripcionFase:
      "Fundamentación en el plano, dibujo de observación y primeras herramientas vectoriales.",
    asignaturas: [
      {
        n: "Diseño I: Bidimensional",
        c: 4,
        isEje: true,
        d: "Primer taller troncal del eje de diseño. Sintaxis visual, composición en el plano, ritmo, equilibrio y estructura del mensaje gráfico.",
      },
      {
        n: "Morfología I: Color y forma",
        c: 2,
        isEje: false,
        d: "El color, el contraste y la forma como materia prima del lenguaje visual y la percepción.",
      },
      {
        n: "Dibujo I",
        c: 2,
        isEje: false,
        d: "Fundamentos de la expresión gráfica: observación, línea, valoración tonal, encuadre y proporción manual.",
      },
      {
        n: "Medios digitales I: Diseño vectorial",
        c: 3,
        isEje: false,
        d: "Inicio de la ruta digital: software de vectorización, ilustración digital y dibujo de precisión en Adobe Illustrator.",
      },
      {
        n: "Fundamentos de la comunicación",
        c: 3,
        isEje: false,
        d: "Bases teóricas de la comunicación humana, modelos semióticos y el rol del diseñador como emisor visual.",
      },
      {
        n: "Filosofía institucional",
        c: 2,
        isEje: false,
        d: "Formación humanista y franciscana con sentido de responsabilidad social y ética comunitaria.",
      },
    ],
  },
  {
    semestre: 2,
    ordinal: "2do Semestre",
    creditos: 15,
    fase: "descubrir",
    eje: "Diseño II: Tridimensional",
    descripcionFase:
      "Exploración del volumen, la biónica de la naturaleza y el arte digital.",
    asignaturas: [
      {
        n: "Diseño II: Tridimensional",
        c: 4,
        isEje: true,
        d: "El taller avanza hacia la espacialidad: relaciones volumétricas, materiales, texturas, escala y prototipado físico.",
      },
      {
        n: "Morfología II: Biónica formal",
        c: 2,
        isEje: false,
        d: "Análisis y abstracción de estructuras y patrones de la naturaleza aplicados a soluciones formales de diseño.",
      },
      {
        n: "Dibujo II",
        c: 2,
        isEje: false,
        d: "El dibujo como herramienta de conceptualización rápida, bocetación proyectual y representación expresiva.",
      },
      {
        n: "Medios digitales II: Arte digital",
        c: 3,
        isEje: false,
        d: "Pintura digital, tratamiento fotográfico, fotomontaje y técnicas avanzadas en Adobe Photoshop.",
      },
      {
        n: "Fotografía I",
        c: 2,
        isEje: false,
        d: "Fundamentos técnicos y estéticos de la cámara: óptica, exposición, iluminación de estudio y composición.",
      },
      {
        n: "Historia I",
        c: 2,
        isEje: false,
        d: "Recorrido por la historia del arte y las vanguardias visuales como fuente de inspiración proyectual.",
      },
    ],
  },
  {
    semestre: 3,
    ordinal: "3er Semestre",
    creditos: 16,
    fase: "descubrir",
    eje: "Diseño III: Tipografía",
    descripcionFase:
      "El universo de la letra, la ilustración de autor y los principios de animación 2D.",
    asignaturas: [
      {
        n: "Diseño III: Tipografía",
        c: 4,
        isEje: true,
        d: "El taller de la letra: anatomía, familias tipográficas, jerarquía, legibilidad y diseño de alfabetos experimentales.",
      },
      {
        n: "Composición gráfica",
        c: 2,
        isEje: false,
        d: "Sintaxis visual avanzada: grillas modulares, diagramación armónica y tensión compositiva.",
      },
      {
        n: "Ilustración I",
        c: 3,
        isEje: false,
        d: "Desarrollo del lenguaje ilustrado, técnicas mixtas y búsqueda de una voz gráfica personal.",
      },
      {
        n: "Medios digitales III: Animación 2D",
        c: 3,
        isEje: false,
        d: "Principios fundamentales de animación: timing, interpolación, personajes y narrativa en movimiento con After Effects.",
      },
      {
        n: "Fotografía II",
        c: 2,
        isEje: false,
        d: "Fotografía publicitaria, retrato, iluminación conceptual y dirección de arte fotográfica en estudio.",
      },
      {
        n: "Historia II",
        c: 2,
        isEje: false,
        d: "Historia del diseño gráfico moderno, escuelas de diseño (Bauhaus, Escuela Suiza) y diseño latinoamericano.",
      },
    ],
  },
  {
    semestre: 4,
    ordinal: "4to Semestre",
    creditos: 15,
    fase: "conocer",
    eje: "Diseño IV: Identidad visual",
    descripcionFase:
      "Creación de marcas, narrativas infográficas y producción audiovisual.",
    asignaturas: [
      {
        n: "Diseño IV: Identidad visual",
        c: 4,
        isEje: true,
        d: "El taller de branding: diseño de identificadores de marca, manuales de normas, sistemas visuales y aplicaciones con clientes reales.",
      },
      {
        n: "Diseño de información I: Infografía",
        c: 2,
        isEje: false,
        d: "Traducción de datos complejos y hechos en relatos visuales, mapas, esquemas y diagramas informativos.",
      },
      {
        n: "Ilustración II",
        c: 3,
        isEje: false,
        d: "Ilustración aplicada a proyectos editoriales, publicitarios y narrativas gráficas complejas.",
      },
      {
        n: "Medios digitales IV: Producción audiovisual",
        c: 3,
        isEje: false,
        d: "Lenguaje cinematográfico, grabación en set, captura de audio profesional y edición no lineal con Premiere Pro.",
      },
      {
        n: "Semiótica visual",
        c: 2,
        isEje: false,
        d: "Análisis del signo, significado y contexto cultural para la codificación y decodificación de mensajes.",
      },
      {
        n: "Electiva recreativa: Deporte formativo",
        c: 1,
        isEje: false,
        d: "Bienestar físico, hábitos saludables y trabajo en equipo para el desarrollo integral del estudiante.",
      },
    ],
  },
  {
    semestre: 5,
    ordinal: "5to Semestre",
    creditos: 15,
    fase: "conocer",
    eje: "Diseño V: Señalética",
    descripcionFase:
      "Diseño en el espacio público, visualización de datos y sistemas de impresión industrial.",
    asignaturas: [
      {
        n: "Diseño V: Señalética",
        c: 4,
        isEje: true,
        d: "Sistemas de orientación espacial, wayfinding, pictogramas, ergonomía visual y señalización arquitectónica.",
      },
      {
        n: "Diseño de información II: Visualización de datos",
        c: 2,
        isEje: false,
        d: "Visualización avanzada de información masiva, dashboards interactivos y periodismo de datos.",
      },
      {
        n: "Sistemas de impresión",
        c: 2,
        isEje: false,
        d: "Procesos litográficos, offset, serigrafía, flexografía, sustratos, tintas y preparación técnica de artes finales.",
      },
      {
        n: "Medios digitales V: Comunicación audiovisual",
        c: 3,
        isEje: false,
        d: "Posproducción audiovisual, corrección de color, efectos visuales (VFX) y diseño sonoro.",
      },
      {
        n: "Retórica de la imagen",
        c: 2,
        isEje: false,
        d: "Figuras retóricas, metáforas visuales y estrategias persuasivas para campañas de alto impacto.",
      },
      {
        n: "Ética de valores",
        c: 2,
        isEje: false,
        d: "Reflexión ética y valores para el ejercicio responsable y humanizado de la profesión.",
      },
    ],
  },
  {
    semestre: 6,
    ordinal: "6to Semestre",
    creditos: 14,
    fase: "conocer",
    eje: "Diseño VI: Editorial",
    descripcionFase:
      "Publicaciones impresas y digitales, modelado 3D y electivas de creación interactiva.",
    asignaturas: [
      {
        n: "Diseño VI: Editorial",
        c: 4,
        isEje: true,
        d: "El taller del libro y la revista: arquitectura editorial, retículas complejas, tipografía editorial y maquetación en InDesign.",
      },
      {
        n: "Electiva disciplinar I D: Videojuegos I / Creación interactiva I",
        c: 2,
        isEje: false,
        d: "Ruta especializada: diseño conceptual de videojuegos, lógica de interactividad y experiencias inmersivas.",
      },
      {
        n: "Electiva interdisciplinar I",
        c: 3,
        isEje: false,
        d: "Diálogo transdisciplinar con otros saberes de la Facultad de Arquitectura y Bellas Artes.",
      },
      {
        n: "Medios digitales VI: Modelado 3D",
        c: 3,
        isEje: false,
        d: "Creación de mallas 3D, escultura digital (ZBrush/Blender), texturizado, iluminación y renderizado.",
      },
      {
        n: "Teoría de la percepción",
        c: 2,
        isEje: false,
        d: "Leyes de la Gestalt, psicología del color, cognición visual y comportamiento del usuario.",
      },
    ],
  },
  {
    semestre: 7,
    ordinal: "7mo Semestre",
    creditos: 14,
    fase: "estructurar",
    eje: "Diseño VII: Empaques",
    descripcionFase:
      "Diseño de envases, marketing estratégico, entornos web y arranque de investigación.",
    asignaturas: [
      {
        n: "Diseño VII: Empaques",
        c: 4,
        isEje: true,
        d: "Packaging estructural y gráfico: troqueles, materiales sostenibles, ergonomía en góndola y experiencia de unboxing.",
      },
      {
        n: "Electiva disciplinar II D: Videojuegos II / Creación interactiva II",
        c: 2,
        isEje: false,
        d: "Programación visual, motores interactivos (Unity/Processing) y prototipado de experiencias lúdicas.",
      },
      {
        n: "Entornos web",
        c: 2,
        isEje: false,
        d: "Diseño UI/UX (Figma), arquitectura de información, diseño responsive y maquetación web moderna.",
      },
      {
        n: "Investigación I",
        c: 2,
        isEje: false,
        d: "Metodologías de investigación-creación, formulación de problemas de diseño y estado del arte.",
      },
      {
        n: "Gestión del diseño I: Marketing estratégico",
        c: 2,
        isEje: false,
        d: "Modelos de negocio creativos, análisis de mercado, segmentación y posicionamiento de marcas.",
      },
      {
        n: "Inglés I",
        c: 2,
        isEje: false,
        d: "Primer módulo de lengua extranjera con enfoque en comunicación profesional global.",
      },
    ],
  },
  {
    semestre: 8,
    ordinal: "8vo Semestre",
    creditos: 17,
    fase: "estructurar",
    eje: "Diseño VIII: Multimedia e interactivo",
    descripcionFase:
      "Experiencias interactivas, dirección de proyectos y formalización de la tesis.",
    asignaturas: [
      {
        n: "Diseño VIII: Multimedia e interactivo",
        c: 4,
        isEje: true,
        d: "Diseño de experiencias complejas: interfaces digitales, interactivos para museos, realidad aumentada y multimedia.",
      },
      {
        n: "Electiva disciplinar III D: Videojuegos III / Creación interactiva III",
        c: 2,
        isEje: false,
        d: "Cierre de la ruta electiva con desarrollo de un prototipo jugable o producto interactivo completo.",
      },
      {
        n: "Electiva interdisciplinar II",
        c: 3,
        isEje: false,
        d: "Colaboración en proyectos con áreas de ingeniería, ciencias sociales o administración.",
      },
      {
        n: "Investigación II",
        c: 4,
        isEje: false,
        d: "Desarrollo del marco metodológico, trabajo de campo y validación del proyecto de investigación-creación.",
      },
      {
        n: "Gestión del diseño II: Gestión de proyectos de diseño",
        c: 2,
        isEje: false,
        d: "Planificación de presupuestos, cronogramas ágiles, costos de diseño y dirección de equipos creativos.",
      },
      {
        n: "Inglés II",
        c: 2,
        isEje: false,
        d: "Segundo módulo de inglés enfocado en lectura crítica y terminología especializada de diseño.",
      },
    ],
  },
  {
    semestre: 9,
    ordinal: "9no Semestre",
    creditos: 18,
    fase: "estructurar",
    eje: "Servicio profesional · Proyecto de grado I",
    descripcionFase:
      "Inmersión total en la práctica empresarial, ecodiseño y diseño de servicios.",
    asignaturas: [
      {
        n: "Servicio profesional en diseño",
        c: 8,
        isEje: true,
        d: "Práctica empresarial de un semestre completo en agencias, empresas, estudios de diseño u organizaciones públicas.",
      },
      {
        n: "Ecodiseño",
        c: 2,
        isEje: false,
        d: "Diseño circular, análisis de ciclo de vida (ACV), huella ambiental y responsabilidad ecológica del producto.",
      },
      {
        n: "Proyecto de grado I",
        c: 4,
        isEje: true,
        d: "Producción y desarrollo formal del proyecto de grado bajo la asesoría de docentes especialistas.",
      },
      {
        n: "Gestión del diseño III: Diseño de servicio",
        c: 2,
        isEje: false,
        d: "Service Design: mapeo de viajes de usuario (Customer Journey), blueprints y diseño de experiencias integrales.",
      },
      {
        n: "Inglés III",
        c: 2,
        isEje: false,
        d: "Tercer módulo de inglés: redacción de propuestas y preparación para entornos internacionales.",
      },
    ],
  },
  {
    semestre: 10,
    ordinal: "10mo Semestre",
    creditos: 17,
    fase: "estructurar",
    eje: "Proyecto de grado II",
    descripcionFase:
      "Sustentación del proyecto de grado, diseño de exhibiciones y consultoría en diseño.",
    asignaturas: [
      {
        n: "Proyecto de grado II",
        c: 6,
        isEje: true,
        d: "Culminación, producción final, validación y sustentación pública del proyecto de grado ante jurados.",
      },
      {
        n: "Diseño de exhibición",
        c: 2,
        isEje: false,
        d: "Diseño de stands, museografía, montaje de muestras de grado y exhibición espacial del portafolio.",
      },
      {
        n: "Ética profesional",
        c: 2,
        isEje: false,
        d: "Marco legal del diseñador, derechos de autor, propiedad intelectual, contratos y deontología profesional.",
      },
      {
        n: "Electiva interdisciplinar III",
        c: 3,
        isEje: false,
        d: "Último espacio de integración con proyectos de impacto regional y social.",
      },
      {
        n: "Gestión del diseño IV: Consultoría en diseño",
        c: 2,
        isEje: false,
        d: "El diseñador como consultor estratégico: diagnósticos organizacionales, auditoría de marca y planes de acción.",
      },
      {
        n: "Inglés IV",
        c: 2,
        isEje: false,
        d: "Módulo final de inglés para alcanzar el nivel B1 y culminar el requisito institucional de grado.",
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   COMUNIDAD & ECOSISTEMA CREATIVO (Orden y colores oficiales)
   ═══════════════════════════════════════════════════════════════ */
const ECOSISTEMA = [
  {
    id: "semillero",
    tag: "Investigación-Creación",
    tagBg: "#6d4ac4",
    tagText: "#ffffff",
    logo: "assets/img/di-grafico.svg",
    viewWidth: 126,
    viewHeight: 183.55,
    titulo: "Semillero de Investigación D+I Gráfico",
    desc: "Espacio de investigación formativa enfocado en el patrimonio visual andino, diseño social, territorio, experimentación tipográfica y narrativas emergentes del suroccidente colombiano.",
    destacado:
      "Publicaciones · Ponencias · Proyectos con impacto en el territorio",
  },
  {
    id: "tiendad",
    tag: "Vitrina de Emprendimiento",
    tagBg: "#ff7054",
    tagText: "#ffffff",
    logo: "assets/img/tienda-d.svg",
    viewWidth: 153.75,
    viewHeight: 145.01,
    titulo: "Tienda D · Emprendimiento Creativo",
    desc: "Plataforma para que los estudiantes comercialicen y difundan sus productos editoriales, ilustraciones, cartelería, stickers, fanzines y objetos de diseño de autor.",
    destacado: "Autogestión · Feria de diseño · Producción real",
  },
  {
    id: "demente",
    tag: "Muestra Semestral de Talleres",
    tagBg: "#5bc0f5",
    tagText: "#07354a",
    logo: "assets/img/muestra-demente.svg",
    viewWidth: 195,
    viewHeight: 179.56,
    titulo: "Muestra DeMente",
    desc: "La vitrina académica semestral donde los estudiantes de todos los semestres exponen públicamente sus proyectos de aula ante la comunidad, jurados externos y el sector productivo.",
    destacado: "Exposición en vivo · Premiación de proyectos · Networking",
  },
  {
    id: "buenamente",
    tag: "Encuentro Académico Anual",
    tagBg: "#ffc433",
    tagText: "#140d21",
    logo: "assets/img/festival-buenamente.svg",
    viewWidth: 195,
    viewHeight: 173.63,
    titulo: "Festival BuenaMente",
    desc: "El gran encuentro anual del programa que conecta investigación, creación visual, ponentes invitados nacionales e internacionales y talleres abiertos para toda la comunidad universitaria.",
    destacado: "Conferencias · Talleres de autor · Charlas con la industria",
  },
];

/* ═══════════════════════════════════════════════════════════════
   PREGUNTAS FRECUENTES
   ═══════════════════════════════════════════════════════════════ */
const FAQS = [
  {
    q: "¿Necesito saber dibujar perfectamente para ingresar?",
    a: "No. La carrera arranca desde los fundamentos: Dibujo I y II, Morfología I y II y el taller Diseño I construyen la base plástica y la mirada estética desde cero.",
  },
  {
    q: "¿En qué campos laborales trabaja un Diseñador Gráfico del CESMAG?",
    a: "En agencias de publicidad, estudios de branding, diseño editorial, productoras audiovisuales y de animación, empresas de desarrollo web y UI/UX, ecodiseño, museografía, emprendimiento propio y consultoría estratégica.",
  },
  {
    q: "¿Puedo homologar si soy egresado del SENA o de otra institución?",
    a: "Sí. El programa cuenta con proceso de homologación para tecnólogos del SENA y transferencias universitarias. El equipo de admisiones realiza el estudio de equivalencias de materias caso por caso.",
  },
  {
    q: "¿Qué opciones de financiación y becas ofrece la Universidad CESMAG?",
    a: "La universidad tiene convenios con entidades financieras, descuentos por pronto pago, convenios institucionales y alternativas de financiación directa de matrícula por semestres.",
  },
  {
    q: "¿Cómo es el proceso de inscripción y matrícula?",
    a: "Es muy sencillo y ágil: en el Paso 1 seleccionas el programa y generas el recibo de derechos de inscripción en el portal oficial; en el Paso 2 (24 horas hábiles) completas tus datos y cargas tus documentos para finalizar tu inscripción.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   NOTICIAS Y ACTUALIDAD DEL PROGRAMA (OFICIALES)
   ═══════════════════════════════════════════════════════════════ */
const NOTICIAS = [
  {
    id: "n01",
    tag: "Muestra Académica",
    tagColor: "#ff7054",
    tagBg: "rgba(255,112,84,0.18)",
    fecha: "5 de junio, 2026",
    titulo:
      "¡Creatividad que deja huella! Así se vivió la Muestra Académica Demente 2026",
    desc: "Un espacio lleno de color, talento e innovación donde nuestros estudiantes de Diseño Gráfico demostraron cómo sus ideas cobran vida a través del diseño, la moda, el territorio y la comunicación visual.",
    cuerpo:
      "La Muestra Académica DeMente 2026 se consolidó como el escenario por excelencia para la exhibición del talento y la madurez creativa de los estudiantes del Programa de Diseño Gráfico de la Universidad CESMAG. Durante la jornada, la comunidad universitaria, evaluadores del sector productivo y público general recorrieron una amplia exposición de proyectos que integraron diseño editorial, branding de autor, packaging sostenible, animación digital y propuestas de diseño aplicadas a la memoria y estética de nuestro territorio nariñense.",
    enlace: "comunidad.html#noticias",
    img: "assets/img/noticias/noticia-demente-2026.jpg",
    colorBg: "linear-gradient(135deg, #4a150c 0%, #200804 100%)",
  },
  {
    id: "n02",
    tag: "Interdisciplinar & Territorio",
    tagColor: "#5bc0f5",
    tagBg: "rgba(91,192,245,0.18)",
    fecha: "8 de mayo, 2026",
    titulo:
      "III Encuentro de Prácticas del Sur: el aula como escenario de transformación territorial",
    desc: "La Facultad de Educación y el Programa de Diseño Gráfico lideraron este espacio de reflexión pedagógica y creativa, orientando las experiencias de aula hacia la transformación del contexto regional.",
    cuerpo:
      "En articulación con la Facultad de Educación, el Programa de Diseño Gráfico lideró el III Encuentro de Prácticas del Sur. El evento exploró metodologías donde el diseño y la pedagogía convergen como agentes de cambio social, visibilizando proyectos de co-diseño comunitario, talleres de mediación visual en escuelas rurales y herramientas didácticas innovadoras desarrolladas por los estudiantes para enriquecer la calidad de vida y el tejido social de la región.",
    enlace: "comunidad.html#noticias",
    img: "assets/img/noticias/noticia-practicas-sur-2026.jpg",
    colorBg: "linear-gradient(135deg, #0d3f5c 0%, #091e2e 100%)",
  },
  {
    id: "n03",
    tag: "Festival Buenamente",
    tagColor: "#ffc433",
    tagBg: "rgba(255,196,51,0.22)",
    fecha: "12 de noviembre, 2025",
    titulo: "Talento, creatividad e inspiración: así se vivió BUENAMENTE 2025",
    desc: "El Festival BUENAMENTE 2025 reunió a estudiantes, docentes y expertos nacionales e internacionales en un espacio de reflexión, creación y diálogo alrededor del diseño, consolidando a UNICESMAG como referente.",
    cuerpo:
      "Con conferencias magistrales, duelos creativos, workshops especializados e ICItalks, el Festival BUENAMENTE 2025 celebró una década de trayectoria posicionándose como uno de los encuentros de diseño más influyentes del suroccidente colombiano. Diseñadores invitados de nivel nacional e internacional compartieron sus visiones sobre inteligencia artificial aplicada al diseño, tipografía vernácula, diseño estratégico y gestión de marcas con impacto sostenible.",
    enlace: "comunidad.html#noticias",
    img: "assets/img/noticias/noticia-buenamente-2025.jpg",
    colorBg: "linear-gradient(135deg, #423002 0%, #1c1400 100%)",
  },
  {
    id: "n04",
    tag: "Impacto Comunitario",
    tagColor: "#34d399",
    tagBg: "rgba(52,211,153,0.18)",
    fecha: "24 de octubre, 2025",
    titulo:
      "Estudiantes de Diseño Gráfico entregan mural como resultado de un proceso comunitario",
    desc: "Entrega oficial de una obra mural artística a la Institución Educativa Gimnasio San Juan de Pasto, una creación que refleja la unión viva entre arte, educación y comunidad.",
    cuerpo:
      "Como fruto de un proceso de investigación-creación participativa, estudiantes de los talleres de diseño entregaron una imponente intervención mural a la Institución Educativa Gimnasio San Juan de Pasto. La obra no solo embellece los espacios cotidianos de los niños y jóvenes, sino que plasma valores de convivencia, cuidado ambiental y memoria colectiva, demostrando el papel transformador del diseñador gráfico en su entorno.",
    enlace: "comunidad.html#noticias",
    img: "assets/img/noticias/noticia-mural-gimnasio-2025.jpg",
    colorBg: "linear-gradient(135deg, #0a3325 0%, #041810 100%)",
  },
  {
    id: "n05",
    tag: "Expresión Literaria",
    tagColor: "#a78bfa",
    tagBg: "rgba(167,139,250,0.18)",
    fecha: "16 de agosto, 2024",
    titulo:
      "Interdisciplinariedad en la creación literaria: Resultados de la clase de expresión literaria",
    desc: "Los programas de Diseño Gráfico y Licenciatura en Educación Infantil unieron esfuerzos en una actividad interdisciplinar que articuló diseño editorial, narrativas infantiles e ilustración de autor.",
    cuerpo:
      "Una experiencia colaborativa entre los programas de Diseño Gráfico y Licenciatura en Educación Infantil dio como resultado una serie de libros ilustrados y prototipos editoriales infantiles. El proyecto articuló la redacción pedagógica de cuentos con la conceptualización gráfica, el diseño tipográfico y técnicas mixtas de ilustración, fortaleciendo el aprendizaje interdisciplinar entre facultades.",
    enlace: "comunidad.html#noticias",
    img: "assets/img/noticias/noticia-expresion-literaria-2024.jpg",
    colorBg: "linear-gradient(135deg, #2d1555 0%, #120929 100%)",
  },
  {
    id: "n06",
    tag: "Identidad Institucional",
    tagColor: "#6d4ac4",
    tagBg: "rgba(109,74,196,0.22)",
    fecha: "12 de octubre, 2023",
    titulo: "Nueva Marca Diseño Gráfico Universidad CESMAG",
    desc: "Después de 20 años de trayectoria, el programa de Diseño Gráfico renovó su identidad visual y sistema de marca, alineando sus valores históricos con la vanguardia visual contemporánea.",
    cuerpo:
      "En el marco de la celebración de sus dos décadas formando profesionales de excelencia, el Programa de Diseño Gráfico presentó su renovada identidad visual y arquitectura de submarcas. Un sistema visual dinámico y modular que honra la herencia franciscana y territorial a la vez que proyecta el programa hacia los retos digitales globales del diseño contemporáneo.",
    enlace: "comunidad.html#noticias",
    img: "assets/img/noticias/noticia-nueva-marca-2023.jpg",
    colorBg: "linear-gradient(135deg, #221247 0%, #0c051f 100%)",
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATOS CONSOLIDADOS DE EGRESADOS & EMPLEABILIDAD (INFORMES OFICIALES)
   ═══════════════════════════════════════════════════════════════ */
const METRICAS_EGRESADOS = [
  {
    cifra: "92.6%",
    label: "Tasa de Empleabilidad Activa",
    sub: "Egresados laborando activamente en el sector productivo y cultural",
    icono: "briefcase",
  },
  {
    cifra: "91.9%",
    label: "Inserción Laboral Rápida",
    sub: "Consigue su primer empleo profesional en menos de 1 año (75.8% en menos de 6 meses)",
    icono: "clock",
  },
  {
    cifra: "44.1%",
    label: "Liderazgo & Emprendimiento",
    sub: "Han fundado su propio estudio, empresa de diseño o marca comercial",
    icono: "rocket",
  },
  {
    cifra: "95.6%",
    label: "Pertinencia & Utilidad Formativa",
    sub: "Considera que la formación en UNICESMAG fue decisiva para su éxito laboral",
    icono: "check-circle",
  },
];

const SECTORES_EGRESADOS = [
  { sector: "Emprendimiento & Empresas Propias", pct: 30.2, color: "#ff7054" },
  {
    sector: "Agencias de Publicidad & Comunicación",
    pct: 30.2,
    color: "#6d4ac4",
  },
  { sector: "Estudios & Agencias de Diseño", pct: 30.2, color: "#5bc0f5" },
  {
    sector: "Gestión Pública & Organizaciones Privadas",
    pct: 30.2,
    color: "#ffc433",
  },
  { sector: "Artes Gráficas & Sector Editorial", pct: 23.8, color: "#34d399" },
  {
    sector: "Pequeñas & Medianas Empresas (MIPYMES)",
    pct: 23.8,
    color: "#a78bfa",
  },
  { sector: "Producción Audiovisual & Animación", pct: 19.0, color: "#f472b6" },
  { sector: "Docencia Universitaria & Educación", pct: 14.3, color: "#38bdf8" },
  { sector: "Tecnología, UX/UI & Digital", pct: 9.5, color: "#fb923c" },
];

const EGRESADOS_DESTACADOS = [
  {
    nombre: "Tatiana López",
    cohorte: "Egresada Destacada",
    empresa: "Gastrodiversa 10 Años (2025)",
    rol: "Líder de Diseño & Proyección Gastronómica Regional",
    descripcion:
      "Reconocida por su aporte y dirección visual en el evento de impacto nacional Gastrodiversa 10 años, articulando identidad territorial, diseño gráfico y patrimonio cultural.",
    distincion: "Caso de éxito audiovisual y proyección comunitaria",
    avatar: "assets/img/egresados/tatiana-lopez.png",
  },
  {
    nombre: "Jonathan Alejandro Aguirre Terán",
    cohorte: "Egresado Distinguido",
    empresa: "Gestión Cultural & Creación Visual",
    rol: "Diseñador Cultural & Artista Visual",
    descripcion:
      "Galardonado por sus significativos aportes al ámbito cultural de Nariño, impulsando procesos de diseño con impacto social y preservación de la memoria visual del territorio.",
    distincion: "Mención por méritos culturales y compromiso territorial",
    avatar: "assets/img/egresados/jonathan-aguirre.png",
  },
  {
    nombre: "Camilo Andrés Varona Guerrero",
    cohorte: "Egresado Distinguido & Docente",
    empresa: "Coordinación de Egresados UNICESMAG",
    rol: "Diseñador Gráfico, Docente & Gestor Académico",
    descripcion:
      "Líder en articulación comunitaria, seguimiento a graduados y formulación de proyectos académicos continuos como los Diplomados de Art Toys y Diseño UX/UI.",
    distincion:
      "Reconocimiento a la trayectoria profesional y docencia universitaria",
    avatar: "assets/img/egresados/camilo-varona.png",
  },
];

/* ═══════════════════════════════════════════════════════════════
   CUERPO DOCENTE & INVESTIGADORES (PROFESORADO)
   ═══════════════════════════════════════════════════════════════ */
const DOCENTES_AREAS = {
  taller:     { label: "Eje de Taller & Proyectos", color: "#ff7054" },
  digital:    { label: "Medios Digitales, 3D & Motion", color: "#ffc433" },
  editorial:  { label: "Editorial, Tipografía & Gráfica", color: "#5bc0f5" },
  teoria:     { label: "Investigación & Semiótica", color: "#8e6ee8" },
  publicidad: { label: "Branding, Publicidad & Gestión", color: "#34d399" },
};

const DOCENTES = [
  {
    id: "doc-01",
    nombre: "Karen Eugenia Ocaña Figueroa",
    titulo: "Magíster en Diseño Urbano y Arquitectónico Sustentable (Univ. Gestalt, México) · Especialista en Diseño de Mobiliario (UBA, Argentina)",
    pregrado: "Diseñadora Industrial (Universidad de Nariño)",
    area: "taller",
    cargo: "Directora del Programa de Diseño Gráfico · Docente Universitaria",
    trayectoria: "Más de seis años de experiencia liderando la formación en Diseño Gráfico e Industrial y la dirección académica del programa.",
    avatar: "assets/img/profesores/karen-ocana.png",
  },
  {
    id: "doc-02",
    nombre: "Mauricio Montenegro",
    titulo: "Doctor en Tecnologías de la Información y la Comunicación (Tech) · Magíster en Tecnología Educativa y Competencias Digitales (UNIR)",
    pregrado: "Diseñador Gráfico y Multimedial (Udenar) · Ingeniero de Sistemas (UCC) · Licenciado en Informática (Udenar)",
    area: "digital",
    cargo: "Docente Investigador · Especialista en Tecnologías Digitales",
    trayectoria: "Investigador en tecnologías interactivas, entornos multimediales de aprendizaje, informática educativa y competencias digitales avanzadas.",
    avatar: "assets/img/profesores/mauricio-montenegro.png",
  },
  {
    id: "doc-03",
    nombre: "Karol Ibarra",
    titulo: "Magíster en Humanidades Digitales · Especialista en Gestión Estratégica del Diseño · Especialista en Lógica y Técnica de la Forma",
    pregrado: "Diseñadora Industrial",
    area: "digital",
    cargo: "Docente de Planta · Investigadora",
    trayectoria: "Especialista en humanidades digitales, morfología y lógica de la forma, y articulación estratégica entre diseño, tecnología y sociedad.",
    avatar: "assets/img/profesores/karol-ibarra.png",
  },
  {
    id: "doc-04",
    nombre: "Edison Armando Ramos Bastidas",
    titulo: "Profesional en Diseño · Estratega en Comunicación Visual y Planeador de Marca",
    pregrado: "Diseñador Gráfico & Consultor",
    area: "publicidad",
    cargo: "Docente de Taller · Estratega de Marca",
    trayectoria: "Consultor y planeador de marca con amplio enfoque en la región de Nariño y el suroccidente colombiano, impulsando la competitividad del diseño local.",
    avatar: "assets/img/profesores/edison-ramos.png",
  },
  {
    id: "doc-05",
    nombre: "Karol Suárez",
    titulo: "Magíster en Desarrollo de Proyectos en Innovación y Producto (UNINI) · Candidata a Magíster en Diseño para la Innovación Social · Especialista en Gerencia de Diseño (UTADEO)",
    pregrado: "Diseñadora Industrial (Universidad de Nariño)",
    area: "taller",
    cargo: "Docente de Planta · Asesora de Proyectos",
    trayectoria: "Experta en gerencia del diseño, desarrollo de producto centrado en las personas, metodologías de innovación y codiseño social.",
    avatar: "assets/img/profesores/karol-suarez.png",
  },
  {
    id: "doc-06",
    nombre: "Mauricio Feuillet",
    titulo: "Especialista en Docencia Universitaria · Especialista en Gerencia en Diseño · Candidato a Magíster en Diseño para la Innovación Social",
    pregrado: "Diseñador Industrial",
    area: "taller",
    cargo: "Docente de Diseño · Asesor Pedagógico",
    trayectoria: "Amplia trayectoria en pedagogía del diseño, gestión estratégica de talleres creativos y formulación de proyectos para la innovación social.",
    avatar: "assets/img/profesores/mauricio-feuillet.png",
  },
  {
    id: "doc-07",
    nombre: "Arturo De la Cruz",
    titulo: "Magíster en Diseño y Creación Interactiva (U. de Caldas) · Posgrado en Artes Mediales (U. de Córdoba Arg – U. de Chile – U. de Caldas)",
    pregrado: "Ingeniero de Sistemas y Diseñador Gráfico",
    area: "digital",
    cargo: "Docente Investigador · Creador Interactivo",
    trayectoria: "Pionero en la integración de artes mediales, computación creativa, entornos interactivos y experimentación tecnológica en el aula.",
    avatar: "assets/img/profesores/arturo-de-la-cruz.png",
  },
  {
    id: "doc-08",
    nombre: "Mateo Terán",
    titulo: "Magíster en Comunicación e Identidad Corporativa (Universidad Internacional de La Rioja - UNIR)",
    pregrado: "Diseñador Gráfico",
    area: "publicidad",
    cargo: "Docente de Taller · Consultor de Identidad",
    trayectoria: "Especialista en sistemas de identidad visual, comunicación estratégica de marca y gestión de imagen corporativa para medios impresos y digitales.",
    avatar: "assets/img/profesores/mateo-teran.png",
  },
  {
    id: "doc-09",
    nombre: "Ramón Ortega",
    titulo: "Magíster en Diseño y Creación Interactiva (U. de Caldas) · Posgrado en Artes Mediales (U. de Córdoba Arg – U. de Chile – U. de Caldas)",
    pregrado: "Diseñador Gráfico",
    area: "digital",
    cargo: "Docente de Planta · Exmiembro Consejo Directivo RAD (2016-2018)",
    trayectoria: "Líder académico en artes mediales y creación interactiva, con destacada representación institucional en la Red Académica de Diseño (RAD).",
    avatar: "assets/img/profesores/ramon-ortega.png",
  },
  {
    id: "doc-10",
    nombre: "Fernando Coral",
    titulo: "Magíster en Diseño y Creación Interactiva (U. de Caldas) · Especialista en Gerencia del Diseño (UTADEO) · Tecnólogo en Producción de Radio y TV (CST)",
    pregrado: "Diseñador Gráfico (Universidad Jorge Tadeo Lozano)",
    area: "digital",
    cargo: "Docente de Medios Audiovisuales y Multimedia",
    trayectoria: "Especialista en producción audiovisual, narrativa transmedia, medios sonoros y gestión gerencial de proyectos de diseño interactivo.",
    avatar: "assets/img/profesores/fernando-coral.png",
  },
  {
    id: "doc-11",
    nombre: "Amanda Arteaga",
    titulo: "Magíster en Etnoliteratura · Especialista en Estudios Latinoamericanos · Diplomada en Pensamiento de Diseño e Identidad Gorettiana",
    pregrado: "Profesional en Filosofía",
    area: "teoria",
    cargo: "Docente Investigadora · Coordinadora de Área Teórica",
    trayectoria: "Investigadora en etnoliteratura andina, pensamiento crítico, estudios culturales latinoamericanos y semiótica visual de la memoria regional.",
    avatar: "assets/img/profesores/amanda-arteaga.png",
  },
  {
    id: "doc-12",
    nombre: "Carlos Jiménez",
    titulo: "Diseñador Gráfico, Investigador Visual y Fotógrafo Internacional · Reconocido en Sony World Photography Awards y 35Awards",
    pregrado: "Diseñador Gráfico",
    area: "editorial",
    cargo: "Docente de Fotografía, Editorial y Museografía",
    trayectoria: "Trayectoria en diseño editorial, branding, museografía, fotografía de paisaje y arquitectura, y realización de cortometrajes galardonados.",
    avatar: "assets/img/profesores/carlos-jimenez.png",
  },
  {
    id: "doc-13",
    nombre: "Juan Pinzón",
    titulo: "Candidato a Magíster en Diseño Fotográfico (U. Iberoamericana, México) · Profesor de Tiempo Completo Universidad de Celaya y Univ. Latina de México",
    pregrado: "Diseñador de Comunicación Visual (Pontificia Universidad Javeriana de Cali)",
    area: "editorial",
    cargo: "Docente Invitado · Fotógrafo Documental",
    trayectoria: "Desarrolla proyectos de fondo cultural y documental exaltando el valor del ser humano como eje de memoria, conservación y evolución cultural.",
    avatar: "assets/img/profesores/juan-pinzon.png",
  },
  {
    id: "doc-14",
    nombre: "Camilo Andrés Varona Guerrero",
    titulo: "Maestro Artesano Contemporáneo · Fundador de Taller Makaco (Art Toys) · Docente Universitario",
    pregrado: "Diseñador Gráfico (Universidad CESMAG)",
    area: "taller",
    cargo: "Docente de Taller · Coordinación de Egresados UNICESMAG",
    trayectoria: "Fundador de Makaco (2012), pionero en art toys artesanales que fusionan ilustración, narrativa andina y memoria oral tradicional con proyección internacional.",
    avatar: "assets/img/profesores/camilo-varona.png",
  },
  {
    id: "doc-15",
    nombre: "Leonardo Hidalgo",
    titulo: "Especialista en Medios Digitales y Tipografía · Diseñador Gráfico",
    pregrado: "Diseñador Gráfico",
    area: "editorial",
    cargo: "Docente de Taller de Tipografía y Medios Impresos",
    trayectoria: "Especialista en diseño de fuentes tipográficas, sistemas de maquetación editorial y experimentación gráfica análoga y digital.",
    avatar: "assets/img/profesores/leonardo-hidalgo.png",
  },
  {
    id: "doc-16",
    nombre: "Natalia Timarán",
    titulo: "Magíster en Procesos Creativos y Diseño Social · Docente Investigadora",
    pregrado: "Diseñadora Gráfica",
    area: "teoria",
    cargo: "Docente de Investigación-Creación y Diseño Social",
    trayectoria: "Acompañamiento a comunidades rurales y colectivos culturales en procesos de co-creación visual, género e identidad territorial.",
    avatar: "assets/img/profesores/natalia-timaran.png",
  },
  {
    id: "doc-17",
    nombre: "Wilmer Zambrano",
    titulo: "Especialista en Producción Gráfica y Medios Interactivos · Diseñador Gráfico",
    pregrado: "Diseñador Gráfico",
    area: "digital",
    cargo: "Docente de Laboratorios Digitales y Producción",
    trayectoria: "Experto en preprensa digital, modelado tridimensional, renderizado de producto y dirección de arte para medios interactivos.",
    avatar: "assets/img/profesores/wilmer-zambrano.png",
  },
];
