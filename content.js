/**
 * ===================================================================
 * CONTENIDO Y PUBLICACIONES - SENDERISMO 10K+ MORÁN - LARA
 * ===================================================================
 */

const HIKING_POSTS = [
  {
    id: 1,
    title: "Caminata La Represa - El Limocito - Sarmiento- Los Cocos",
    category: "rutas",
    type: "image",
    date: "31 de Octubre, 2026",
    location: "La Represa, Municipio Morán",
    distance: "38.2 km",
    elevation: "+1500 m",
    difficulty: "Moderada-Alta",
    description: "Impresionante jornada de senderismo partiendo desde las faldas de la Entrada de la Represa vía Humocaro Bajo. El viaje comenzará una subida por la Zona Árida a 704 msnm, hasta los 1630 msnm. ¡Excelente energía y compañerismo en cada kilómetro!",
    coverImage: "asset/limoncito-2.jpg",
    gallery: [
      "assets/limoncito-1.jpg",
      "assets/limoncito-2.jpg",
      "assets/limoncito-3.jpg",
      "assets/limoncito-4.jpg"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Ruta Hacia la Cascada De Sarmiento",
    category: "videos",
    type: "video",
    date: "11 de octubre, 2026",
    location: "El Tocuyo - Humocaro, Morán",
    distance: "32.8 km",
    elevation: "+1400 m",
    difficulty: "Moderada",
    description: "Resumen en video de nuestro ascenso por los miradores de Morán y llegada a los pozos naturales de la Cascada de Sarmiento. El agua refrescante fue la mejor recompensa tras 16 kilómetros de exigente caminata bajo el cielo larense.",
    coverImage: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    youtubeId: "v7UFz0qJ-q4",
    videoUrl: "",
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
    youtubeId: "5O36_60979g",
    videoUrl: "",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false
  },
  {
    id: 6,
    title: "PRÓXIMA SALIDA: Caminata La Represa - El Limocito - Sarmiento- Los Cocos",
    category: "rutas",
    type: "upcoming",
    date: "Domingo 31 de Octubre, 2026",
    location: "Parque Los Dos Cerritos / Sarmiento",
    distance: "38.0 km",
    elevation: "+1650 m",
    difficulty: "Alta (30K+)",
    description: "¡Prepárate para nuestra próxima gran aventura! Visitaremos la Ruta La Represa El Limoncito, famosa por su agricultura y hermosos paisajes, con posterior circuito de montaña. Punto de encuentro: Plaza Bolívar de El Tocuyo a las 6:00 AM.",
    coverImage: "asset/limoncito-1.jpg",
    requirements: [
      "Llevar mínimo 3 litros de agua",
      "Calzado con suela antiresbalante",
      "Refrigerio ligero / frutos secos",
      "Ropa de cambio y bolsa impermeable",
      "Confirmar asistencia en el grupo de WhatsApp"
    ],
    whatsappCta: "Inscribirme por WhatsApp",
    gallery: [
      "asset/limoncito-1.jpg",
      "asset/limoncito-2.jpg",
      "asset/limoncito-3.jpg",
      "asset/limoncito-4.jpg"
    ],
    featured: true
  }
];
