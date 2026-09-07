/**
 * ===================================================================
 * APLICACIÓN PRINCIPAL - SENDERISMO 10K+ MORÁN - LARA
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initBrandingAndConfig();
  initUpcomingRoute();
  initPostsGallery();
  initFilters();
  initLightbox();
  initPostCreatorModal();
  initMobileMenu();
});

// Variables de estado
let currentFilter = 'all';
let activePostIndex = -1;
let currentFilteredPosts = [];

/**
 * 1. Inicializar marca y enlaces desde config.js
 */
function initBrandingAndConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Actualizar textos principales
  const brandNameEls = document.querySelectorAll('.brand-name');
  brandNameEls.forEach(el => el.textContent = SITE_CONFIG.shortName || SITE_CONFIG.groupName);

  const groupNameEls = document.querySelectorAll('.group-full-name');
  groupNameEls.forEach(el => el.textContent = SITE_CONFIG.groupName);

  const sloganEls = document.querySelectorAll('.group-slogan');
  sloganEls.forEach(el => el.textContent = SITE_CONFIG.slogan);

  const descEls = document.querySelectorAll('.group-description');
  descEls.forEach(el => el.textContent = SITE_CONFIG.description);

  const locEls = document.querySelectorAll('.group-location');
  locEls.forEach(el => el.textContent = SITE_CONFIG.location);

  // Enlaces de WhatsApp
  setupWhatsAppLinks();

  // Enlaces de Redes Sociales
  setupSocialLinks();

  // Estadísticas
  setupStats();

  // Consejos de senderismo
  setupHikingTips();
}

/**
 * Configurar enlaces directos a WhatsApp
 */
function setupWhatsAppLinks() {
  const cfg = SITE_CONFIG.whatsapp;
  if (!cfg) return;

  // Enlace preferido: Enlace de invitación al grupo
  // Si no está configurado, usa el enlace de chat directo al teléfono
  let whatsappUrl = cfg.groupInviteUrl;
  
  // Si es un enlace de ejemplo o vacío, creamos el enlace directo con mensaje
  if (!whatsappUrl || whatsappUrl.includes('EjemploDeEnlaceWhatsApp')) {
    const encodedMsg = encodeURIComponent(cfg.welcomeMessage || "¡Hola! Quiero unirme al grupo de Senderismo 10K+ Morán.");
    whatsappUrl = `https://wa.me/${cfg.adminPhone}?text=${encodedMsg}`;
  }

  // Asignar a todos los botones de WhatsApp
  const whatsappButtons = document.querySelectorAll('.whatsapp-link');
  whatsappButtons.forEach(btn => {
    btn.setAttribute('href', whatsappUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  // Botón flotante
  const floatingBtn = document.getElementById('floating-whatsapp-btn');
  if (floatingBtn) {
    floatingBtn.setAttribute('href', whatsappUrl);
  }
}

/**
 * Configurar enlaces de Redes Sociales
 */
function setupSocialLinks() {
  const soc = SITE_CONFIG.socialLinks;
  if (!soc) return;

  const socialMapping = [
    { selector: '.social-facebook', url: soc.facebook },
    { selector: '.social-instagram', url: soc.instagram },
    { selector: '.social-tiktok', url: soc.tiktok },
    { selector: '.social-youtube', url: soc.youtube }
  ];

  socialMapping.forEach(item => {
    const elements = document.querySelectorAll(item.selector);
    elements.forEach(el => {
      if (item.url && item.url !== '#') {
        el.setAttribute('href', item.url);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      } else {
        el.setAttribute('href', '#redes');
      }
    });
  });
}

/**
 * Renderizar estadísticas
 */
function setupStats() {
  const statsContainer = document.getElementById('stats-container');
  if (!statsContainer || !SITE_CONFIG.stats) return;

  statsContainer.innerHTML = SITE_CONFIG.stats.map(s => `
    <div class="stat-item">
      <span class="stat-number">${s.number}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

/**
 * Renderizar consejos de senderismo
 */
function setupHikingTips() {
  const tipsContainer = document.getElementById('hiking-tips-grid');
  if (!tipsContainer || !SITE_CONFIG.hikingTips) return;

  tipsContainer.innerHTML = SITE_CONFIG.hikingTips.map(tip => `
    <div class="tip-item">
      <i class="fa-solid ${tip.icon}"></i>
      <div>
        <h5>${tip.title}</h5>
        <p>${tip.desc}</p>
      </div>
    </div>
  `).join('');
}

/**
 * 2. Renderizar Próxima Salida Destacada
 */
function initUpcomingRoute() {
  const upcomingContainer = document.getElementById('upcoming-container');
  if (!upcomingContainer || typeof HIKING_POSTS === 'undefined') return;

  // Buscar publicación tipo upcoming
  const upcoming = HIKING_POSTS.find(p => p.type === 'upcoming');
  if (!upcoming) {
    document.getElementById('upcoming-section').style.display = 'none';
    return;
  }

  const reqHtml = (upcoming.requirements && upcoming.requirements.length > 0)
    ? `<div class="upcoming-requirements">
        <h4><i class="fa-solid fa-clipboard-check"></i> Requisitos recomendados:</h4>
        <ul>
          ${upcoming.requirements.map(r => `<li><i class="fa-solid fa-check"></i> ${r}</li>`).join('')}
        </ul>
       </div>`
    : '';

  // Mensaje para unirse a esta ruta específica
  const waMsg = encodeURIComponent(`¡Hola! Quiero confirmar mi asistencia para la ruta "${upcoming.title}" del día ${upcoming.date}.`);
  const waUrl = SITE_CONFIG.whatsapp.adminPhone 
    ? `https://wa.me/${SITE_CONFIG.whatsapp.adminPhone}?text=${waMsg}`
    : SITE_CONFIG.whatsapp.groupInviteUrl;

  upcomingContainer.innerHTML = `
    <div class="upcoming-card">
      <div class="upcoming-media">
        <img src="${upcoming.coverImage}" alt="${upcoming.title}">
        <span class="upcoming-badge"><i class="fa-solid fa-fire"></i> Próxima Aventura</span>
      </div>
      <div class="upcoming-info">
        <div class="upcoming-date">
          <i class="fa-regular fa-calendar-check"></i> ${upcoming.date}
        </div>
        <h3 class="upcoming-title">${upcoming.title}</h3>
        <div class="upcoming-meta">
          <span class="meta-chip"><i class="fa-solid fa-location-dot"></i> ${upcoming.location}</span>
          <span class="meta-chip"><i class="fa-solid fa-route"></i> ${upcoming.distance}</span>
          <span class="meta-chip"><i class="fa-solid fa-mountain"></i> ${upcoming.elevation || 'Desnivel 10K+'}</span>
          <span class="meta-chip"><i class="fa-solid fa-gauge-high"></i> ${upcoming.difficulty}</span>
        </div>
        <p class="upcoming-desc">${upcoming.description}</p>
        ${reqHtml}
        <div>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
            <i class="fa-brands fa-whatsapp"></i> ${upcoming.whatsappCta || 'Inscribirme por WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * 3. Renderizar Galería Multimedia
 */
function initPostsGallery() {
  const grid = document.getElementById('posts-grid');
  if (!grid || typeof HIKING_POSTS === 'undefined') return;

  // Cargar publicaciones de localStorage si el usuario agregó alguna en la sesión
  let posts = [...HIKING_POSTS];
  try {
    const localPosts = JSON.parse(localStorage.getItem('user_hiking_posts') || '[]');
    if (Array.isArray(localPosts) && localPosts.length > 0) {
      posts = [...localPosts, ...posts];
    }
  } catch (e) {
    console.warn("No se pudieron cargar posts locales:", e);
  }

  // Filtrar según selección
  if (currentFilter === 'all') {
    currentFilteredPosts = posts;
  } else if (currentFilter === 'fotos') {
    currentFilteredPosts = posts.filter(p => p.type === 'image' || p.category === 'fotos');
  } else if (currentFilter === 'videos') {
    currentFilteredPosts = posts.filter(p => p.type === 'video' || p.category === 'videos');
  } else if (currentFilter === 'rutas') {
    currentFilteredPosts = posts.filter(p => p.category === 'rutas' || p.type === 'upcoming');
  }

  if (currentFilteredPosts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-compass" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--primary);"></i>
        <h3>No se encontraron publicaciones en esta categoría</h3>
        <p>Selecciona otra categoría o agrega una nueva ruta.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = currentFilteredPosts.map((post, index) => {
    const isVideo = post.type === 'video' || !!post.youtubeId || !!post.videoUrl;
    const isUpcoming = post.type === 'upcoming';
    
    let typeBadge = '';
    if (isVideo) {
      typeBadge = `<span class="type-indicator video"><i class="fa-solid fa-play"></i> Video</span>`;
    } else if (isUpcoming) {
      typeBadge = `<span class="type-indicator" style="color: var(--accent-orange);"><i class="fa-solid fa-calendar-day"></i> Próxima</span>`;
    } else {
      typeBadge = `<span class="type-indicator image"><i class="fa-solid fa-camera"></i> Foto</span>`;
    }

    const diffClass = post.difficulty && post.difficulty.toLowerCase().includes('difícil') ? 'dificil' : 'moderada';

    // Generar enlace para compartir en WhatsApp
    const shareText = encodeURIComponent(`¡Mira esta ruta de Senderismo 10K+ Morán - Lara!: "${post.title}" (${post.distance || '10K+'})`);
    const shareUrl = `https://api.whatsapp.com/send?text=${shareText}`;

    return `
      <article class="post-card" data-index="${index}">
        <div class="post-thumb-wrap" onclick="openLightbox(${index})">
          <img class="post-thumb" src="${post.coverImage}" alt="${post.title}" loading="lazy">
          ${typeBadge}
          ${isVideo ? `<div class="play-overlay-icon"><i class="fa-solid fa-play"></i></div>` : ''}
        </div>
        <div class="post-body">
          <div class="post-header-meta">
            <span class="post-date"><i class="fa-regular fa-calendar"></i> ${post.date}</span>
            <span class="post-difficulty ${diffClass}">${post.difficulty || '10K+'}</span>
          </div>
          <h3 class="post-title" onclick="openLightbox(${index})">${post.title}</h3>
          <div class="post-location">
            <i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> ${post.location}
          </div>
          <div class="post-stats-row">
            <span class="post-stat-tag"><i class="fa-solid fa-route"></i> ${post.distance}</span>
            <span class="post-stat-tag"><i class="fa-solid fa-mountain"></i> ${post.elevation || '+500m'}</span>
          </div>
          <p class="post-excerpt">${post.description}</p>
          <div class="post-footer">
            <button class="view-media-btn" onclick="openLightbox(${index})">
              ${isVideo ? '<i class="fa-solid fa-circle-play"></i> Ver Video' : '<i class="fa-solid fa-images"></i> Ver Álbum'}
            </button>
            <a href="${shareUrl}" target="_blank" rel="noopener noreferrer" class="share-post-btn" title="Compartir en WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 4. Botones de Filtrado
 */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      initPostsGallery();
    });
  });
}

/**
 * 5. Lightbox y Reproductor Multimedia
 */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal) return;

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', prevLightbox);
  nextBtn.addEventListener('click', nextLightbox);

  // Cerrar al hacer clic fuera
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });
}

window.openLightbox = function(index) {
  if (!currentFilteredPosts || !currentFilteredPosts[index]) return;
  activePostIndex = index;
  renderLightboxContent();
  const modal = document.getElementById('lightbox-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  // Detener videos al cerrar
  const container = document.getElementById('lightbox-media');
  container.innerHTML = '';
}

function prevLightbox() {
  if (activePostIndex > 0) {
    activePostIndex--;
    renderLightboxContent();
  } else {
    activePostIndex = currentFilteredPosts.length - 1;
    renderLightboxContent();
  }
}

function nextLightbox() {
  if (activePostIndex < currentFilteredPosts.length - 1) {
    activePostIndex++;
    renderLightboxContent();
  } else {
    activePostIndex = 0;
    renderLightboxContent();
  }
}

function renderLightboxContent() {
  const post = currentFilteredPosts[activePostIndex];
  if (!post) return;

  const mediaContainer = document.getElementById('lightbox-media');
  const titleEl = document.getElementById('lightbox-title');
  const metaRow = document.getElementById('lightbox-meta');
  const descEl = document.getElementById('lightbox-desc');

  titleEl.textContent = post.title;
  descEl.textContent = post.description;

  metaRow.innerHTML = `
    <span class="meta-chip"><i class="fa-regular fa-calendar"></i> ${post.date}</span>
    <span class="meta-chip"><i class="fa-solid fa-location-dot"></i> ${post.location}</span>
    <span class="meta-chip"><i class="fa-solid fa-route"></i> ${post.distance}</span>
    <span class="meta-chip"><i class="fa-solid fa-mountain"></i> ${post.elevation || '+500m'}</span>
    <span class="meta-chip"><i class="fa-solid fa-gauge-high"></i> ${post.difficulty}</span>
  `;

  // Renderizar Medios: Video o Foto
  const isVideo = post.type === 'video' || !!post.youtubeId || !!post.videoUrl;

  if (isVideo) {
    let videoEmbed = '';
    if (post.youtubeId) {
      // Soporte para ID de YouTube o URL completa
      let yId = post.youtubeId;
      if (yId.includes('v=')) {
        yId = yId.split('v=')[1].split('&')[0];
      } else if (yId.includes('youtu.be/')) {
        yId = yId.split('youtu.be/')[1].split('?')[0];
      }
      videoEmbed = `<iframe class="lightbox-video-frame" src="https://www.youtube-nocookie.com/embed/${yId}?autoplay=1&rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if (post.videoUrl) {
      videoEmbed = `<video controls autoplay class="lightbox-video-frame" style="max-height:60vh; background:#000;"><source src="${post.videoUrl}" type="video/mp4">Tu navegador no soporta video.</video>`;
    }
    mediaContainer.innerHTML = videoEmbed;
  } else {
    // Es imagen / galería
    const imgUrl = post.coverImage;
    mediaContainer.innerHTML = `<img src="${imgUrl}" alt="${post.title}" class="lightbox-img">`;
  }
}

/**
 * 6. Asistente / Generador de Publicaciones
 */
function initPostCreatorModal() {
  const openBtn = document.getElementById('open-creator-btn');
  const modal = document.getElementById('creator-modal');
  const closeBtn = document.getElementById('creator-close');
  const form = document.getElementById('creator-form');
  const copyBtn = document.getElementById('copy-code-btn');
  const previewBtn = document.getElementById('preview-post-btn');
  const codeOutput = document.getElementById('code-output');

  if (!modal || !form) return;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Generar código
  const generatePostData = () => {
    const title = document.getElementById('new-title').value.trim() || 'Ruta por la Montaña';
    const category = document.getElementById('new-category').value;
    const type = document.getElementById('new-type').value;
    const date = document.getElementById('new-date').value.trim() || 'Fecha actual';
    const location = document.getElementById('new-location').value.trim() || 'Morán - Lara';
    const distance = document.getElementById('new-distance').value.trim() || '10.0 km';
    const elevation = document.getElementById('new-elevation').value.trim() || '+500 m';
    const difficulty = document.getElementById('new-difficulty').value;
    const coverImage = document.getElementById('new-image').value.trim() || 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80';
    const youtubeId = document.getElementById('new-video').value.trim();
    const description = document.getElementById('new-desc').value.trim() || 'Excelente ruta realizada con el grupo de Senderismo 10K+ Morán - Lara.';

    return {
      id: Date.now(),
      title,
      category,
      type,
      date,
      location,
      distance,
      elevation,
      difficulty,
      description,
      coverImage,
      youtubeId: youtubeId || undefined,
      gallery: [coverImage],
      featured: false
    };
  };

  // Al escribir en el formulario, generar el código en tiempo real
  form.addEventListener('input', () => {
    const postObj = generatePostData();
    const formatted = JSON.stringify(postObj, null, 2);
    codeOutput.textContent = `// Pega este bloque dentro de HIKING_POSTS en tu archivo content.js:\n\n${formatted},`;
  });

  // Copiar al portapapeles
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = codeOutput.textContent;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Código Copiado!';
        setTimeout(() => { copyBtn.innerHTML = originalText; }, 2500);
      }).catch(err => {
        alert("Selecciona el código y cópialo con Ctrl+C");
      });
    });
  }

  // Previsualizar en la página en vivo (guarda en localStorage)
  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      const postObj = generatePostData();
      try {
        const currentSaved = JSON.parse(localStorage.getItem('user_hiking_posts') || '[]');
        currentSaved.unshift(postObj);
        localStorage.setItem('user_hiking_posts', JSON.stringify(currentSaved));
        closeModal();
        initPostsGallery();
        alert('¡Publicación agregada con éxito a tu vista actual!');
        const gallerySection = document.getElementById('galeria');
        if (gallerySection) gallerySection.scrollIntoView({ behavior: 'smooth' });
      } catch (e) {
        alert('Error al guardar vista previa: ' + e);
      }
    });
  }
}

/**
 * 7. Menú Hamburguesa para Móviles
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links-container');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });

  // Cerrar al pulsar un enlace
  const links = navLinks.querySelectorAll('a');
  links.forEach(l => {
    l.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    });
  });
}
