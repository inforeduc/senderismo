/**
 * ===================================================================
 * CONTENIDO Y PUBLICACIONES - SENDERISMO 10K+ MORÁN - LARA
 * ===================================================================
 * 
 * ¡Aquí es donde agregas tus fotos, videos y rutas!
 * Cada publicación es un bloque entre llaves { ... }.
 * 
 * TIPOS DE PUBLICACIÓN (campo "type"):
 * - "image"   : Para una foto individual o álbum de fotos
 * - "video"   : Para videos de YouTube o videos locales en MP4
 * - "upcoming": Para anunciar una próxima caminata programada
 * 
 * Puedes copiar un bloque existente, cambiarle los datos y listo.
 */

const HIKING_POSTS = [
  {
    id: 1,
    title: "Travesía Humocaro Alto - Cueva de los Guácharos",
    category: "rutas",       // Opciones: "rutas", "fotos", "videos"
    type: "image",           // "image", "video", "upcoming"
    date: "18 de Agosto, 2026",
    location: "Humocaro Alto, Municipio Morán",
    distance: "14.2 km",
    elevation: "+780 m",
    difficulty: "Moderada-Alta", // Fácil, Moderada, Difícil, Extrema
    description: "Impresionante jornada de senderismo partiendo desde las faldas de Humocaro Alto. El equipo avanzó con ritmo firme a través del bosque nublado, cruzando riachuelos de aguas cristalinas hasta llegar a la emblemática cueva. ¡Excelente energía y compañerismo en cada kilómetro!",
    coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Ruta Hacia la Cascada El Arzobispo y Miradores",
    category: "videos",
    type: "video",
    date: "04 de Julio, 2026",
    location: "El Tocuyo - Humocaro, Morán",
    distance: "11.8 km",
    elevation: "+540 m",
    difficulty: "Moderada",
    description: "Resumen en video de nuestro ascenso por los miradores de Morán y llegada a los pozos naturales de la Cascada El Arzobispo. El agua refrescante fue la mejor recompensa tras 11 kilómetros de exigente caminata bajo el cielo larense.",
    coverImage: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    // Puedes colocar un enlace de video de YouTube (ID o URL completa)
    // Ejemplo de YouTube ID: "dQw4w9WgXcQ" o URL completa
    youtubeId: "v7UFz0qJ-q4", // Video de muestra de trekking en montaña
    videoUrl: "", // O si tienes un archivo .mp4 local en assets/images/tu-video.mp4
    gallery: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true
  },
  {
    id: 3,
    title: "Desafío Pico Dinira - Parque Nacional Dinira",
    category: "rutas",
    type: "image",
    date: "12 de Junio, 2026",
    location: "Límites Morán - Lara / Trujillo",
    distance: "18.5 km",
    elevation: "+1,250 m",
    difficulty: "Difícil (10K+)",
    description: "Una de nuestras rutas más exigentes del año. Conquista de páramo andino larense con clima frío y niebla espesa. El lema del grupo 'nadie se queda atrás' se vivió al 100% apoyándonos en los pasos rocosos más empinados.",
    coverImage: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true
  },
  {
    id: 4,
    title: "Galería de Momentos: Fotos de Cumbre y Compañerismo",
    category: "fotos",
    type: "image",
    date: "24 de Mayo, 2026",
    location: "Serranías de Morán, Lara",
    distance: "10.5 km",
    elevation: "+490 m",
    difficulty: "Moderada",
    description: "Colección de postales, risas, descansos con frutas y abrazos en la cima. Cada salida fortalece más a esta gran familia senderista.",
    coverImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false
  },
  {
    id: 5,
    title: "Video: Ascenso al Cerro El Peñón al Atardecer",
    category: "videos",
    type: "video",
    date: "10 de Mayo, 2026",
    location: "El Tocuyo, Lara",
    distance: "10.2 km",
    elevation: "+510 m",
    difficulty: "Moderada",
    description: "Subida vespertina para capturar la puesta de sol sobre el valle del Río Tocuyo. ¡La vista dorada desde lo alto no tiene precio!",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    youtubeId: "5O36_60979g", // Trekking drone video
    videoUrl: "",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false
  },
  {
    id: 6,
    title: "PRÓXIMA SALIDA: Circuito Cascada El Vino y Páramo",
    category: "rutas",
    type: "upcoming",
    date: "Domingo 20 de Septiembre, 2026",
    location: "Parque Nacional Dinira / Barbacoas",
    distance: "15.0 km",
    elevation: "+650 m",
    difficulty: "Moderada (10K+)",
    description: "¡Prepárate para nuestra próxima gran aventura! Visitaremos la icónica Cascada El Vino, famosa por sus aguas de tono vino tinto natural, con posterior circuito de montaña. Punto de encuentro: Plaza Bolívar de El Tocuyo a las 6:00 AM.",
    coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    requirements: [
      "Llevar mínimo 3 litros de agua",
      "Calzado con suela antiresbalante",
      "Refrigerio ligero / frutos secos",
      "Ropa de cambio y bolsa impermeable",
      "Confirmar asistencia en el grupo de WhatsApp"
    ],
    whatsappCta: "Inscribirme por WhatsApp",
    gallery: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true
  }
];
