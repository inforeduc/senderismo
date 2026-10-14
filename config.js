/**
 * ===================================================================
 * CONFIGURACIÓN GENERAL - SENDERISMO 10K+ MORÁN - LARA
 * ===================================================================
 * 
 * ¡Hola! Puedes cambiar fácilmente los enlaces de tu grupo y redes sociales aquí.
 * Solo cambia los textos entre comillas por tus propios enlaces o información.
 */

const SITE_CONFIG = {
  // Información General del Grupo
  groupName: "Senderismo 10K+ Morán - Lara",
  shortName: "Senderismo 10K+",
  slogan: "Superando los 10K en Morán, Lara y más allá",
  description: "Comunidad de apasionados por el senderismo, trekking y la naturaleza en el Municipio Morán (El Tocuyo, Humocaro Alto y Bajo, Barbacoas, Dinira) y todo el Estado Lara. Rutas retadoras, compañerismo y respeto por la montaña.",
  location: "Morán - Lara, Venezuela",

  // ---------------------------------------------------------------
  // WHATSAPP (Enlace de invitación directa al grupo o al administrador)
  // ---------------------------------------------------------------
  whatsapp: {
    // Número de teléfono del administrador (con código de país, ej: 58 para Venezuela)
    adminPhone: "584263230321",

    // Mensaje automático al hacer clic en el botón de WhatsApp
    welcomeMessage: "¡Hola! Vi la página web de Senderismo 10K+ Morán y me gustaría unirme a las próximas caminatas y excursiones."
  },

  // ---------------------------------------------------------------
  // REDES SOCIALES
  // ---------------------------------------------------------------
  socialLinks: {
    // Si no tienes alguna todavía, puedes dejar '#' o poner el enlace cuando la crees
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
    youtube: "https://www.youtube.com/"
  },

  // ---------------------------------------------------------------
  // ESTADÍSTICAS DEL GRUPO (Se muestran en la portada)
  // ---------------------------------------------------------------
  stats: [
    { number: "50+", label: "Rutas Conquistadas" },
    { number: "10K+", label: "Distancia Mínima por Ruta" },
    { number: "120+", label: "Senderistas Activos" },
    { number: "100%", label: "Naturaleza & Compañerismo" }
  ],

  // ---------------------------------------------------------------
  // REQUISITOS GENERALES PARA LAS RUTAS
  // ---------------------------------------------------------------
  hikingTips: [
    { icon: "fa-bottle-water", title: "Hidratación", desc: "Mínimo 2 a 3 litros de agua o sales hidratantes." },
    { icon: "fa-person-hiking", title: "Calzado Adecuado", desc: "Botas o zapatillas de trekking con buen agarre." },
    { icon: "fa-sun", title: "Protección Solar", desc: "Gorra o sombrero, lentes de sol y bloqueador solar." },
    { icon: "fa-kit-medical", title: "Espíritu de Equipo", desc: "En 10K+ nadie se queda atrás: cuidamos a cada compañero." }
  ]
};
