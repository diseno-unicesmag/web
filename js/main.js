/* ═══════════════════════════════════════════════════════════════
   Interacción Global · Portafolio Diseño Gráfico UNICESMAG
   Vanilla JS multi-página sin dependencias externas.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ───────── Año del footer ───────── */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ───────── WhatsApp Flotante Directo ───────── */
  const WA_DEFAULT_MSG = "Hola, quiero conocer más sobre el programa de Diseño Gráfico de la Universidad CESMAG.";
  if (CONFIG.whatsapp) {
    const url = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(WA_DEFAULT_MSG);
    const waFloat = $("#waFloat");
    if (waFloat) waFloat.href = url;
  }

  // Redes sociales del footer
  const socialMap = [
    ["instagram", "IG"],
    ["tiktok", "TT"],
    ["facebook", "FB"],
    ["youtube", "YT"],
    ["threads", "TH"],
  ];
  $$(".footer__social a").forEach((el) => {
    const key = socialMap.find(([, label]) => el.textContent.trim() === label);
    if (key && CONFIG.social && CONFIG.social[key[0]]) {
      el.href = CONFIG.social[key[0]];
      el.target = "_blank";
      el.rel = "noopener";
    }
  });

  /* ───────── Ficha oficial del programa ───────── */
  const fichaGrid = $("#fichaGrid");
  if (fichaGrid && Array.isArray(FICHA)) {
    fichaGrid.innerHTML = FICHA.map(
      (item) => "<div><dt>" + item.k + "</dt><dd>" + item.v + "</dd></div>"
    ).join("");
  }

  /* ───────── Datos de contacto oficiales ───────── */
  const contactData = $("#contactData");
  if (contactData && CONFIG.contacto) {
    const dirNombre = (CONFIG.directora && CONFIG.directora.nombre) || CONFIG.contacto.directora || "Karen Eugenia Ocaña Figueroa";
    const mapLink = (CONFIG.ubicacion && CONFIG.ubicacion.mapUrl) || "https://maps.app.goo.gl/EoxVH21NMHYLb9up7";
    contactData.innerHTML =
      '<p><strong>WhatsApp Atención:</strong> <a href="https://wa.me/' + CONFIG.whatsapp + '" target="_blank" rel="noopener">' + CONFIG.contacto.whatsappDisplay + '</a> (' + (CONFIG.contacto.whatsappLabel || "Secretaría") + ')</p>' +
      '<p><strong>Teléfono Directo:</strong> ' + CONFIG.contacto.telefono + '</p>' +
      '<p><strong>Correo Oficial:</strong> <a href="mailto:' + CONFIG.contacto.email + '">' + CONFIG.contacto.email + '</a></p>' +
      '<p><strong>Campus Santiago:</strong> ' + CONFIG.contacto.campus + ' · <a href="' + mapLink + '" target="_blank" rel="noopener">Ver en Google Maps ↗</a></p>' +
      '<p><strong>Dirección de Programa:</strong> ' + dirNombre + '</p>';
  }

  /* ───────── Navegación móvil ───────── */
  const burger = $("#navBurger");
  const links  = $("#navLinks");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    $$("#navLinks a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ───────── Barra de progreso de lectura ───────── */
  const fill = $("#progressFill");
  const onScroll = () => {
    if (!fill) return;
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    fill.style.width = Math.min(Math.max(pct, 0), 100) + "%";
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ───────── Aparición al hacer scroll (IntersectionObserver) ───────── */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  /* ───────── Contadores de cifras ───────── */
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const ioCount = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        ioCount.unobserve(el);
        if (el.dataset.static) {
          el.textContent = el.dataset.static;
          return;
        }
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const dur = 1300;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          el.textContent = Math.round(easeOut(p) * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.4 }
  );
  $$(".stat__num").forEach((el) => ioCount.observe(el));

  /* ───────── Gradientes & Glifos para Proyectos ───────── */
  const CAT_GRADIENTS = {
    branding:  "linear-gradient(135deg, #ff7054 0%, #9e2a48 100%)",
    editorial: "linear-gradient(135deg, #5bc0f5 0%, #3b227c 100%)",
    multimedia:"linear-gradient(135deg, #ffc433 0%, #a86200 100%)",
    social:    "linear-gradient(135deg, #6d4ac4 0%, #261142 100%)",
  };
  const CAT_GLYPHS = { branding: "B&", editorial: "Aa", multimedia: "3D", social: "+S" };

  /* ═══════════════════════════════════════════════════════════════
     CINTA CONTINUA DE PROYECTOS (EN LANDING `index.html`)
     ═══════════════════════════════════════════════════════════════ */
  const tapeTrack = $("#tapeTrack");
  if (tapeTrack && Array.isArray(PROYECTOS)) {
    tapeTrack.innerHTML = PROYECTOS.map((p) => {
      const cat = CATEGORIES[p.categoria] || { label: p.categoria, color: "#ffc433" };
      const bg = CAT_GRADIENTS[p.categoria] || "linear-gradient(135deg, #6d4ac4 0%, #231545 100%)";
      const coverHtml = p.img
        ? '<img src="' + p.img + '" alt="' + p.titulo + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;">'
        : '<span class="tape-card__glyph" aria-hidden="true">' + (CAT_GLYPHS[p.categoria] || "DG") + '</span>';

      return (
        '<div class="tape-card" data-id="' + p.id + '" role="button" tabindex="0" aria-label="Ver proyecto ' + p.titulo + '">' +
          '<div class="tape-card__cover" style="background:' + bg + ';">' +
            '<span class="tape-card__cat" style="color:' + cat.color + ';">' + cat.label + '</span>' +
            coverHtml +
          '</div>' +
          '<div class="tape-card__body">' +
            '<h4>' + p.titulo + '</h4>' +
            '<p>' + p.estudiante + ' · ' + p.semestre + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    $$(".tape-card", tapeTrack).forEach((card) => {
      const pId = card.dataset.id;
      const projectData = PROYECTOS.find((p) => p.id === pId);
      card.addEventListener("click", () => {
        if (projectData) openProjectModal(projectData);
      });
      card.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          if (projectData) openProjectModal(projectData);
        }
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     CARRUSEL DE NOTICIAS (EN LANDING `index.html`)
     ═══════════════════════════════════════════════════════════════ */
  const newsTrack = $("#newsTrack");
  if (newsTrack && Array.isArray(NOTICIAS)) {
    /* Glifos decorativos por tag */
    const NEWS_GLYPHS = {
      "Convocatoria": "!",
      "Muestra":      "◇",
      "Investigación": "◎",
      "Festival":     "★",
      "Egresados":    "©",
    };

    function buildNewsCard(n) {
      const glyph = NEWS_GLYPHS[n.tag] || "◆";
      const coverContent = n.img
        ? '<img src="' + n.img + '" alt="' + n.titulo + '" loading="lazy" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'inline-block\';"><span class="news-card__glyph" aria-hidden="true" style="display:none;">' + glyph + '</span>'
        : '<span class="news-card__glyph" aria-hidden="true">' + glyph + '</span>';
      return (
        '<div class="news-card" data-id="' + n.id + '" role="button" tabindex="0" aria-label="Ver noticia ' + n.titulo + '">' +
          '<div class="news-card__cover" style="background:' + n.colorBg + ';">' +
            coverContent +
          '</div>' +
          '<div class="news-card__body">' +
            '<span class="news-card__tag" style="background:' + n.tagBg + ';color:' + n.tagColor + ';">' + n.tag + '</span>' +
            '<p class="news-card__fecha">' + n.fecha + '</p>' +
            '<h3 class="news-card__title">' + n.titulo + '</h3>' +
            '<p class="news-card__desc">' + n.desc + '</p>' +
            '<span class="news-card__cta">Leer noticia completa →</span>' +
          '</div>' +
        '</div>'
      );
    }

    /* Generar bloque de tarjetas (repetido para tener densidad en pantallas ultra-anchas) */
    const singleSetHTML = NOTICIAS.map(buildNewsCard).join("");
    const groupCardsHTML = singleSetHTML + singleSetHTML; // 12 tarjetas por grupo

    /* Renderizar dos grupos idénticos dentro de newsTrack */
    newsTrack.innerHTML =
      '<div class="news-track__group">' + groupCardsHTML + '</div>' +
      '<div class="news-track__group" aria-hidden="true">' + groupCardsHTML + '</div>';

    $$(".news-card", newsTrack).forEach((card) => {
      const nId = card.dataset.id;
      const newsData = NOTICIAS.find((n) => n.id === nId);
      card.addEventListener("click", () => {
        if (newsData) openNewsModal(newsData);
      });
      card.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          if (newsData) openNewsModal(newsData);
        }
      });
    });

    /* Pausa en hover ya definida en CSS. Drag para mover manualmente: */
    let isDragging = false, startX = 0, dragOffset = 0, currentOffset = 0;

    newsTrack.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX;
      newsTrack.style.animationPlayState = "paused";
    });
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      dragOffset = e.pageX - startX;
      newsTrack.style.transform = "translateX(calc(" + currentOffset + "px + " + dragOffset + "px))";
    });
    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        currentOffset += dragOffset;
        dragOffset = 0;
        newsTrack.style.animationPlayState = "";
        newsTrack.style.transform = "";
        currentOffset = 0;
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     HERRAMIENTAS REALES DEL OFICIO (EN LANDING `index.html`)
     ═══════════════════════════════════════════════════════════════ */
  const appsSectionsGrid = $("#appsSectionsGrid");
  if (appsSectionsGrid && Array.isArray(HERRAMIENTAS_APPS)) {
    const APP_ICONS = {
      "Adobe Illustrator": "Ai",
      "Adobe Photoshop": "Ps",
      "Adobe InDesign": "Id",
      "Adobe After Effects": "Ae",
      "Adobe Premiere Pro": "Pr",
      "Adobe Lightroom": "Lr",
      "ZBrush": "Zb",
      "KeyShot": "Ks",
      "Processing": "Pr",
      "Unity": "Un",
      "Arduino": "Ar",
      "Spatial": "Sp",
      "Figma": "Fg",
      "Taller de Serigrafía y Grabado": "▨",
      "Set de Fotografía e Iluminación": "◉",
      "Taller de Encuadernación y Empaques": "◧",
      "Taller de Técnicas Manuales y Aerografía": "✎",
    };

    const GROUP_CLASSES = {
      "Suite Creativa Principal": "apps-group--salmon",
      "3D, Interacción & Código Creativo": "apps-group--amarillo",
      "Talleres y Oficio Físico": "apps-group--azul",
    };

    appsSectionsGrid.innerHTML = HERRAMIENTAS_APPS.map((group) => {
      const cls = GROUP_CLASSES[group.categoria] || "apps-group--salmon";
      const itemsHtml = group.apps.map((app) => {
        const ic = APP_ICONS[app.nombre] || "◆";
        return (
          '<div class="app-chip">' +
            '<div class="app-chip__icon">' + ic + '</div>' +
            '<div class="app-chip__text">' +
              '<strong>' + app.nombre + '</strong>' +
              '<span>' + app.tag + '</span>' +
            '</div>' +
          '</div>'
        );
      }).join("");

      return (
        '<div class="apps-group ' + cls + ' reveal">' +
          '<div class="apps-group__head">' +
            '<h3>' + group.categoria + '</h3>' +
          '</div>' +
          '<div class="apps-chips-grid">' + itemsHtml + '</div>' +
        '</div>'
      );
    }).join("");
  }

  /* ═══════════════════════════════════════════════════════════════
     GALERÍA DE PROYECTOS & MODAL DE PROYECTO (GLOBAL)
     ═══════════════════════════════════════════════════════════════ */
  const grid = $("#projectsGrid");
  const projectModal = $("#projectModal");
  let lastProjectFocus = null;

  function openProjectModal(p) {
    if (!projectModal) return;
    lastProjectFocus = document.activeElement;
    const cat = CATEGORIES[p.categoria] || { label: p.categoria, color: "#ffc433" };
    const coverEl = $("#modalCover");
    if (coverEl) {
      coverEl.style.background = CAT_GRADIENTS[p.categoria] || "linear-gradient(135deg, #6d4ac4 0%, #231545 100%)";
      coverEl.innerHTML = p.img
        ? '<img src="' + p.img + '" alt="' + p.titulo + '" style="width:100%;height:100%;object-fit:cover;">'
        : '<span class="project__glyph" aria-hidden="true">' + (CAT_GLYPHS[p.categoria] || "DG") + "</span>";
    }

    const catEl = $("#modalCat");
    if (catEl) {
      catEl.textContent = cat.label;
      catEl.style.color = cat.color;
    }
    const titleEl = $("#modalTitle");
    if (titleEl) titleEl.textContent = p.titulo;
    const descEl = $("#modalDesc");
    if (descEl) descEl.textContent = p.desc;
    const metaEl = $("#modalMeta");
    if (metaEl) {
      metaEl.innerHTML = [
        ["Estudiante", p.estudiante],
        ["Semestre", p.semestre],
        ["Asignatura", p.asignatura],
        ["Docente guía", p.docente],
        ["Herramientas", p.herramientas],
        ["Estado", p.demo ? "Demo — pendiente de curaduría" : "Proyecto real"],
      ]
        .map(([k, v]) => "<div><dt>" + k + "</dt><dd>" + v + "</dd></div>")
        .join("");
    }
    projectModal.hidden = false;
    document.body.style.overflow = "hidden";
    const closeBtn = $(".modal__close", projectModal);
    if (closeBtn) closeBtn.focus();
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.hidden = true;
    document.body.style.overflow = "";
    if (lastProjectFocus) lastProjectFocus.focus();
  }

  if (projectModal) {
    $$("[data-close]", projectModal).forEach((el) => el.addEventListener("click", closeProjectModal));
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && !projectModal.hidden) closeProjectModal();
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     MODAL DE NOTICIA (GLOBAL)
     ═══════════════════════════════════════════════════════════════ */
  const newsModal = $("#newsModal");
  let lastNewsFocus = null;

  function openNewsModal(n) {
    if (!newsModal) return;
    lastNewsFocus = document.activeElement;
    const coverEl = $("#newsModalCover");
    if (coverEl) {
      coverEl.style.background = n.colorBg || "linear-gradient(135deg, #1e1435 0%, #0d0718 100%)";
      coverEl.innerHTML = n.img
        ? '<img src="' + n.img + '" alt="' + n.titulo + '" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display=\'none\';">'
        : '<div class="newsCard__placeholder-cover"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>';
    }
    const tagEl = $("#newsModalTag");
    if (tagEl) {
      tagEl.textContent = n.tag;
      tagEl.style.background = n.tagBg || "rgba(109,74,196,0.18)";
      tagEl.style.color = n.tagColor || "var(--morado)";
    }
    const dateEl = $("#newsModalDate");
    if (dateEl) {
      dateEl.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px; margin-right:4px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' + n.fecha;
    }
    const titleEl = $("#newsModalTitle");
    if (titleEl) titleEl.textContent = n.titulo;
    const descEl = $("#newsModalDesc");
    if (descEl) descEl.textContent = n.cuerpo || n.desc;

    newsModal.hidden = false;
    document.body.style.overflow = "hidden";
    const closeBtn = $(".modal__close", newsModal);
    if (closeBtn) closeBtn.focus();
  }

  function closeNewsModal() {
    if (!newsModal) return;
    newsModal.hidden = true;
    document.body.style.overflow = "";
    if (lastNewsFocus) lastNewsFocus.focus();
  }

  if (newsModal) {
    $$("[data-close]", newsModal).forEach((el) => el.addEventListener("click", closeNewsModal));
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && !newsModal.hidden) closeNewsModal();
    });
  }

  function projectCard(p) {
    const cat = CATEGORIES[p.categoria] || { label: p.categoria, color: "#ffc433" };
    const card = document.createElement("article");
    card.className = "project reveal";
    card.dataset.cat = p.categoria;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Ver caso de estudio: " + p.titulo);

    const cover = p.img
      ? '<img src="' + p.img + '" alt="Proyecto: ' + p.titulo + '">'
      : '<span class="project__glyph" aria-hidden="true">' + (CAT_GLYPHS[p.categoria] || "DG") + "</span>";

    card.innerHTML =
      '<div class="project__cover" style="background:' + (CAT_GRADIENTS[p.categoria] || "linear-gradient(135deg, #6d4ac4 0%, #231545 100%)") + '">' +
        '<span class="project__cat" style="color:' + cat.color + '">' + cat.label + "</span>" +
        (p.demo ? '<span class="project__demo">DEMO</span>' : "") +
        cover +
      "</div>" +
      '<div class="project__body">' +
        "<h3>" + p.titulo + "</h3>" +
        "<p>" + p.estudiante + " · " + p.semestre + "</p>" +
      "</div>";

    card.addEventListener("click", () => openProjectModal(p));
    card.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        openProjectModal(p);
      }
    });
    return card;
  }

  if (grid && Array.isArray(PROYECTOS)) {
    PROYECTOS.forEach((p) => {
      const card = projectCard(p);
      grid.appendChild(card);
    });
  }

  $$(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter").forEach((b) => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-selected", String(b === btn));
      });
      const f = btn.dataset.filter;
      $$(".project", grid).forEach((card) => {
        const show = f === "todos" || card.dataset.cat === f;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ═══════════════════════════════════════════════════════════════
     PLAN DE ESTUDIOS INTERACTIVO (EN `plan-de-estudios.html`)
     ═══════════════════════════════════════════════════════════════ */
  const fasesNav         = $("#fasesNav");
  const semNav           = $("#semNav");
  const mallaViewerHead  = $("#mallaViewerHead");
  const mallaSubjects    = $("#mallaSubjects");
  const mallaDetail      = $("#mallaDetail");

  let currentSemestreNum = 1;
  let currentFaseKey     = "descubrir";
  let currentSubjectIdx  = 0;

  const TIPO_ICONS = {
    "Eje del Semestre": "◆",
    "Expresión Plástica": "✎",
    "Medios Digitales": "⌘",
    "Teoría & Comunicación": "◉",
    "Gestión & Proyecto": "▲",
    "Formación Integral": "★",
  };

  function initFasesNav() {
    if (!fasesNav || !FASES) return;
    const keys = Object.keys(FASES);
    fasesNav.innerHTML = keys.map((key) => {
      const f = FASES[key];
      const isActive = key === currentFaseKey;
      const activeStyle = isActive
        ? 'style="background: var(--morado); border-color:' + f.color + '; box-shadow: 0 10px 30px -10px var(--morado-glow);"'
        : 'style="border-color: transparent;"';
      const badgeStyle = 'style="color:' + (isActive ? f.color : f.color) + '; font-weight: 700;"';
      const titleStyle = isActive ? 'style="color: #ffffff;"' : 'style="color: var(--ink);"';
      const rangeStyle = isActive ? 'style="color: rgba(255,255,255,0.85);"' : 'style="color: var(--ink-soft);"';

      return (
        '<button class="fase-tab ' + (isActive ? "is-active" : "") + '" data-fase="' + key + '" role="tab" aria-selected="' + isActive + '" ' + activeStyle + '>' +
          '<span class="fase-tab__badge" ' + badgeStyle + '>' + f.badge + '</span>' +
          '<strong ' + titleStyle + '>' + f.nombre + '</strong>' +
          '<span class="fase-tab__rango" ' + rangeStyle + '>' + f.rango + '</span>' +
        '</button>'
      );
    }).join("");

    $$(".fase-tab", fasesNav).forEach((btn) => {
      btn.addEventListener("click", () => {
        const fKey = btn.dataset.fase;
        if (fKey === currentFaseKey) return;
        currentFaseKey = fKey;
        currentSemestreNum = FASES[fKey].semestres[0];
        currentSubjectIdx = 0;
        updateMallaUI();
      });
    });
  }

  function initSemNav() {
    if (!semNav || !Array.isArray(MALLA)) return;
    semNav.innerHTML = MALLA.map((sem) => {
      const active = sem.semestre === currentSemestreNum;
      const inActiveFase = FASES[currentFaseKey].semestres.includes(sem.semestre);
      const semFase = FASES[sem.fase] || FASES.descubrir;

      let pillStyle = "";
      let numStyle = "";
      let crStyle = "";

      if (active) {
        pillStyle = 'style="background: var(--morado); border-color:' + semFase.color + '; box-shadow: 0 6px 20px -6px var(--morado-glow); transform: scale(1.05);"';
        numStyle = 'style="color:' + semFase.color + '; font-weight: 900;"';
        crStyle = 'style="color: #ffffff;"';
      } else if (inActiveFase) {
        pillStyle = 'style="border-color:' + semFase.color + '; background: rgba(255,255,255,0.95);"';
        numStyle = 'style="color: var(--ink);"';
        crStyle = 'style="color: var(--ink-soft);"';
      } else {
        pillStyle = 'style="border-color: #e5e0ed; background: var(--white);"';
        numStyle = 'style="color: var(--ink);"';
        crStyle = 'style="color: var(--ink-soft);"';
      }

      return (
        '<button class="sem-pill ' + (active ? "is-active " : "") + (inActiveFase ? "in-fase " : "") + '" data-sem="' + sem.semestre + '" role="tab" aria-selected="' + active + '" ' + pillStyle + '>' +
          '<span class="sem-pill__num" ' + numStyle + '>' + sem.semestre + 'º</span>' +
          '<span class="sem-pill__cr" ' + crStyle + '>' + sem.creditos + ' créditos</span>' +
        '</button>'
      );
    }).join("");

    $$(".sem-pill", semNav).forEach((btn) => {
      btn.addEventListener("click", () => {
        const sNum = parseInt(btn.dataset.sem, 10);
        if (sNum === currentSemestreNum) return;
        currentSemestreNum = sNum;
        const foundFase = Object.keys(FASES).find((k) => FASES[k].semestres.includes(sNum));
        if (foundFase) currentFaseKey = foundFase;
        currentSubjectIdx = 0;
        updateMallaUI();
      });
    });
  }

  function renderSemesterView() {
    if (!mallaViewerHead || !mallaSubjects || !mallaDetail || !Array.isArray(MALLA)) return;

    const semData = MALLA.find((s) => s.semestre === currentSemestreNum) || MALLA[0];
    const faseData = FASES[semData.fase] || FASES.descubrir;

    mallaViewerHead.innerHTML =
      '<div class="malla-vh__main">' +
        '<span class="malla-vh__badge" style="background:' + faseData.color + ';color:#120924;font-weight:700;">' + faseData.badge + ' · ' + faseData.nombre + '</span>' +
        '<h3>' + semData.ordinal + ' · <span class="malla-vh__eje" style="color:' + faseData.color + ';">' + semData.eje + '</span></h3>' +
        '<p class="malla-vh__desc">' + semData.descripcionFase + '</p>' +
      '</div>' +
      '<div class="malla-vh__stats">' +
        '<div class="malla-stat-box"><span class="ms-num" style="color:' + faseData.color + ';">' + semData.creditos + '</span><span class="ms-lbl">Créditos</span></div>' +
        '<div class="malla-stat-box"><span class="ms-num" style="color:' + faseData.color + ';">' + semData.asignaturas.length + '</span><span class="ms-lbl">Materias</span></div>' +
      '</div>';

    mallaSubjects.innerHTML = semData.asignaturas.map((subj, idx) => {
      const isSelected = idx === currentSubjectIdx;
      const credText = subj.c + (subj.c === 1 ? " crédito" : " créditos");

      let itemStyle = "";
      let titleStyle = "";
      let credStyle = "";
      let ejeBadge = "";

      if (isSelected) {
        itemStyle = 'style="background: var(--morado); border-color:' + faseData.color + '; box-shadow: 0 6px 18px -6px var(--morado-glow); transform: translateX(4px);"';
        titleStyle = 'style="color: #ffffff;"';
        credStyle = 'style="color:' + faseData.color + '; font-weight: 800;"';
        if (subj.isEje) {
          ejeBadge = '<span class="subj-item__eje-badge" style="background: #ffffff; color: var(--morado); font-weight: 800;">Eje del Semestre</span>';
        }
      } else {
        itemStyle = 'style="background: var(--white); border: 1.5px solid #eae5f0;"';
        titleStyle = 'style="color: var(--ink);"';
        credStyle = 'style="color:' + faseData.color + '; font-weight: 700;"';
        if (subj.isEje) {
          ejeBadge = '<span class="subj-item__eje-badge" style="background: var(--morado); color: #ffffff; font-weight: 700;">Eje del Semestre</span>';
        }
      }

      return (
        '<button class="subj-item ' + (isSelected ? "is-selected " : "") + (subj.isEje ? "is-eje " : "") + '" data-idx="' + idx + '" role="tab" aria-selected="' + isSelected + '" ' + itemStyle + '>' +
          '<div class="subj-item__text">' +
            '<h4 ' + titleStyle + '>' + subj.n + '</h4>' +
            '<div class="subj-item__meta">' +
              '<span class="subj-item__cred" ' + credStyle + '>' + credText + '</span>' +
              ejeBadge +
            '</div>' +
          '</div>' +
        '</button>'
      );
    }).join("");

    $$(".subj-item", mallaSubjects).forEach((btn) => {
      btn.addEventListener("click", () => {
        currentSubjectIdx = parseInt(btn.dataset.idx, 10);
        renderSemesterView();
      });
    });

    renderSubjectDetail(semData);
  }

  function renderSubjectDetail(semData) {
    if (!mallaDetail) return;
    const subj = semData.asignaturas[currentSubjectIdx] || semData.asignaturas[0];
    const faseData = FASES[semData.fase] || FASES.descubrir;
    const credText = subj.c + (subj.c === 1 ? " Crédito Académico" : " Créditos Académicos");
    const ejeTag = subj.isEje
      ? '<span class="sd-tag sd-tag--eje">Eje del Semestre</span>'
      : '';

    mallaDetail.innerHTML =
      '<div class="subj-detail-card">' +
        '<div class="subj-detail__top">' +
          ejeTag +
          '<span class="sd-tag sd-tag--sem" style="background:' + faseData.color + ';color:#120924;font-weight:700;">' + semData.ordinal + '</span>' +
          '<span class="sd-tag sd-tag--cred" style="background:rgba(109,74,196,0.12);color:var(--morado);font-weight:700;">' + credText + '</span>' +
        '</div>' +
        '<h3 class="subj-detail__title">' + subj.n + '</h3>' +
        '<div class="subj-detail__body">' +
          '<h5>Propósito y Contenido Formativo</h5>' +
          '<p>' + subj.d + '</p>' +
        '</div>' +
        '<div class="subj-detail__footer">' +
          '<div class="sd-footer-item">' +
            '<span class="sd-lbl">Eje del Semestre:</span>' +
            '<strong class="sd-val">' + semData.eje + '</strong>' +
          '</div>' +
          '<div class="sd-footer-item">' +
            '<span class="sd-lbl">Fase Curricular:</span>' +
            '<strong class="sd-val" style="color:' + faseData.color + ';">' + faseData.nombre + ' (' + faseData.rango + ')</strong>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function updateMallaUI() {
    initFasesNav();
    initSemNav();
    renderSemesterView();
  }

  if (mallaViewerHead) {
    updateMallaUI();
  }

  /* ═══════════════════════════════════════════════════════════════
     COMUNIDAD & ECOSISTEMA (EN `comunidad.html`)
     ═══════════════════════════════════════════════════════════════ */
  const ecoGrid = $("#ecoGrid");
  if (ecoGrid && Array.isArray(ECOSISTEMA)) {
    const LOGO_SCALE = 0.58;
    ecoGrid.innerHTML = ECOSISTEMA.map((eco) => {
      let logoHtml = "";
      if (eco.logo && eco.viewWidth && eco.viewHeight) {
        const lw = Math.round(eco.viewWidth * LOGO_SCALE);
        const lh = Math.round(eco.viewHeight * LOGO_SCALE);
        logoHtml = '<div class="ecoCard__logo-wrap"><img src="' + eco.logo + '" alt="' + eco.titulo + '" class="ecoCard__logo" width="' + lw + '" height="' + lh + '" style="width:' + lw + 'px;height:' + lh + 'px;" loading="lazy"></div>';
      }
      return (
        '<article class="ecoCard reveal">' +
          '<div class="ecoCard__top">' +
            '<span class="ecoCard__tag" style="background:' + (eco.tagBg || "#6d4ac4") + '; color:' + (eco.tagText || "#ffffff") + ';">' + eco.tag + '</span>' +
          '</div>' +
          logoHtml +
          '<h3>' + eco.titulo + '</h3>' +
          '<p>' + eco.desc + '</p>' +
          '<div class="ecoCard__dest">' + eco.destacado + '</div>' +
        '</article>'
      );
    }).join("");
  }

  /* ═══════════════════════════════════════════════════════════════
     NOTICIAS EN RETÍCULA (EN `comunidad.html`)
     ═══════════════════════════════════════════════════════════════ */
  const noticiasGrid = $("#noticiasGrid");
  if (noticiasGrid && Array.isArray(NOTICIAS)) {
    noticiasGrid.innerHTML = NOTICIAS.map((n) => {
      const imgHtml = n.img
        ? '<div class="newsCard__media" style="background:' + (n.colorBg || '#1e1435') + ';"><img src="' + n.img + '" alt="' + n.titulo + '" loading="lazy" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';"><div class="newsCard__placeholder-cover" style="display:none;"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div></div>'
        : '<div class="newsCard__media" style="background:' + (n.colorBg || '#1e1435') + ';"><div class="newsCard__placeholder-cover"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div></div>';

      return (
        '<article class="newsCard reveal" data-id="' + n.id + '" role="button" tabindex="0" aria-label="Ver noticia ' + n.titulo + '">' +
          imgHtml +
          '<div class="newsCard__body">' +
            '<div class="newsCard__meta">' +
              '<span class="newsCard__tag" style="background:' + (n.tagBg || 'rgba(109,74,196,0.18)') + '; color:' + (n.tagColor || 'var(--morado)') + ';">' + n.tag + '</span>' +
              '<span class="newsCard__date"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px; margin-right:4px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' + n.fecha + '</span>' +
            '</div>' +
            '<h3 class="newsCard__title">' + n.titulo + '</h3>' +
            '<p class="newsCard__desc">' + n.desc + '</p>' +
          '</div>' +
        '</article>'
      );
    }).join("");

    $$(".newsCard", noticiasGrid).forEach((card) => {
      const nId = card.dataset.id;
      const newsData = NOTICIAS.find((n) => n.id === nId);
      card.addEventListener("click", () => {
        if (newsData) openNewsModal(newsData);
      });
      card.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          if (newsData) openNewsModal(newsData);
        }
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     MÉTRICAS & SECTORES DE EGRESADOS (EN `comunidad.html`)
     ═══════════════════════════════════════════════════════════════ */
  const metricasGrid = $("#metricasEgresadosGrid");
  if (metricasGrid && Array.isArray(METRICAS_EGRESADOS)) {
    const iconSvgs = {
      briefcase: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
      clock: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      rocket: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>',
      "check-circle": '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    };

    metricasGrid.innerHTML = METRICAS_EGRESADOS.map((m) => {
      return (
        '<div class="metric-card reveal">' +
          '<div class="metric-card__icon">' + (iconSvgs[m.icono] || iconSvgs.briefcase) + '</div>' +
          '<div class="metric-card__cifra">' + m.cifra + '</div>' +
          '<div class="metric-card__label">' + m.label + '</div>' +
          '<div class="metric-card__sub">' + m.sub + '</div>' +
        '</div>'
      );
    }).join("");
  }

  const sectoresBars = $("#sectoresEgresadosBars");
  if (sectoresBars && Array.isArray(SECTORES_EGRESADOS)) {
    sectoresBars.innerHTML = SECTORES_EGRESADOS.map((s) => {
      return (
        '<div class="sector-bar-item reveal">' +
          '<div class="sector-bar-item__info">' +
            '<span class="sector-bar-item__name">' + s.sector + '</span>' +
            '<span class="sector-bar-item__pct">' + s.pct + '%</span>' +
          '</div>' +
          '<div class="sector-bar-item__track">' +
            '<div class="sector-bar-item__fill" style="width: ' + s.pct + '%; background: ' + s.color + ';"></div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  /* ═══════════════════════════════════════════════════════════════
     EGRESADOS DESTACADOS (EN `comunidad.html`)
     ═══════════════════════════════════════════════════════════════ */
  const egresadosGrid = $("#egresadosGrid");
  if (egresadosGrid && Array.isArray(EGRESADOS_DESTACADOS)) {
    egresadosGrid.innerHTML = EGRESADOS_DESTACADOS.map((eg) => {
      const initials = eg.nombre.split(" ").map(w => w[0]).slice(0, 2).join("");
      const avatarHtml = eg.avatar
        ? '<div class="egresado-card__avatar-wrap"><img src="' + eg.avatar + '" alt="' + eg.nombre + '" class="egresado-card__avatar" loading="lazy" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';"><div class="egresado-card__fallback-avatar" style="display:none;">' + initials + '</div></div>'
        : '<div class="egresado-card__avatar-wrap"><div class="egresado-card__fallback-avatar">' + initials + '</div></div>';

      return (
        '<article class="egresado-card reveal">' +
          '<div class="egresado-card__header">' +
            avatarHtml +
            '<div class="egresado-card__titles">' +
              '<h4>' + eg.nombre + '</h4>' +
              '<span class="egresado-card__cohorte">' + eg.cohorte + '</span>' +
              '<span class="egresado-card__empresa">' + eg.empresa + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="egresado-card__body">' +
            '<p class="egresado-card__rol"><strong>' + eg.rol + '</strong></p>' +
            '<p class="egresado-card__desc">' + eg.descripcion + '</p>' +
          '</div>' +
          '<div class="egresado-card__distincion">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px; margin-right:5px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>' +
            eg.distincion +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  /* ═══════════════════════════════════════════════════════════════
     CATÁLOGO DE DOCENTES (EN `docentes.html`)
     ═══════════════════════════════════════════════════════════════ */
  const docentesGrid = $("#docentesGrid");
  const docentesFilters = $("#docentesFilters");

  if (docentesGrid && Array.isArray(DOCENTES)) {
    function renderDocentes(filterArea) {
      const filtered = filterArea === "todos"
        ? DOCENTES
        : DOCENTES.filter((d) => d.area === filterArea);

      docentesGrid.innerHTML = filtered.map((d) => {
        const areaInfo = (typeof DOCENTES_AREAS !== "undefined" && DOCENTES_AREAS[d.area]) || { label: "Diseño Gráfico", color: "#ffc433" };
        const initials = d.nombre.split(" ").map(w => w[0]).filter(c => /[A-ZÁÉÍÓÚÑ]/.test(c)).slice(0, 2).join("");
        const avatarHtml = d.avatar
          ? '<div class="docente-card__avatar-wrap"><img src="' + d.avatar + '" alt="' + d.nombre + '" class="docente-card__avatar" loading="lazy" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';"><div class="docente-card__fallback-avatar" style="display:none;">' + initials + '</div></div>'
          : '<div class="docente-card__avatar-wrap"><div class="docente-card__fallback-avatar">' + initials + '</div></div>';

        return (
          '<article class="docente-card reveal" data-area="' + d.area + '">' +
            '<div class="docente-card__header">' +
              avatarHtml +
              '<div class="docente-card__meta">' +
                '<span class="docente-card__tag" style="background: ' + areaInfo.color + '22; color: ' + areaInfo.color + ';">' + areaInfo.label + '</span>' +
                '<h3 class="docente-card__name">' + d.nombre + '</h3>' +
                '<p class="docente-card__titulo"><strong>' + d.titulo + '</strong></p>' +
                '<p class="docente-card__pregrado">' + d.pregrado + '</p>' +
              '</div>' +
            '</div>' +
            '<div class="docente-card__body">' +
              '<div class="docente-card__detail">' +
                '<span class="docente-card__lbl">Cargo / Rol:</span>' +
                '<p>' + d.cargo + '</p>' +
              '</div>' +
              '<div class="docente-card__detail">' +
                '<span class="docente-card__lbl">Asignaturas de Taller:</span>' +
                '<p>' + d.asignaturas + '</p>' +
              '</div>' +
              '<div class="docente-card__detail">' +
                '<span class="docente-card__lbl">Línea de Creación / Investigación:</span>' +
                '<p>' + d.investigacion + '</p>' +
              '</div>' +
            '</div>' +
          '</article>'
        );
      }).join("");

      $$(".reveal", docentesGrid).forEach((el) => io.observe(el));
    }

    renderDocentes("todos");

    if (docentesFilters) {
      $$(".filter", docentesFilters).forEach((btn) => {
        btn.addEventListener("click", () => {
          $$(".filter", docentesFilters).forEach((b) => {
            b.classList.remove("is-active");
            b.setAttribute("aria-selected", "false");
          });
          btn.classList.add("is-active");
          btn.setAttribute("aria-selected", "true");
          renderDocentes(btn.dataset.filter);
        });
      });
    }
  }

  /* ═══════════════════════════════════════════════════════════════
     PREGUNTAS FRECUENTES (EN `admisiones.html`)
     ═══════════════════════════════════════════════════════════════ */
  const faqList = $("#faqList");
  if (faqList && Array.isArray(FAQS)) {
    FAQS.forEach((f) => {
      const item = document.createElement("div");
      item.className = "faq-item";
      item.innerHTML =
        "<button aria-expanded='false'><span>" + f.q + "</span>" +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>' +
        "</button><div class='faq-a'><p>" + f.a + "</p></div>";
      const btn  = $("button", item);
      const body = $(".faq-a", item);
      btn.addEventListener("click", () => {
        const open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
        body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
      });
      faqList.appendChild(item);
    });
  }

  /* ───────── Observar todos los elementos .reveal ───────── */
  $$(".reveal").forEach((el) => io.observe(el));

  /* ───────── Formulario → WhatsApp Dinámico ───────── */
  const contactForm = $("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const data = new FormData(ev.target);
      const nombre  = (data.get("nombre") || "").trim();
      const colegio = (data.get("colegio") || "").trim();
      const ciudad  = (data.get("ciudad") || "").trim();
      const interes = (data.get("interes") || "").trim();

      let origen = "";
      if (colegio && ciudad) {
        origen = " del colegio " + colegio + " en " + ciudad;
      } else if (colegio) {
        origen = " del colegio " + colegio;
      } else if (ciudad) {
        origen = " de " + ciudad;
      }

      let interesTexto = "";
      if (interes) {
        interesTexto = " con énfasis en el área de " + interes;
      }

      const msg = "Hola, soy " + (nombre || "aspirante") + origen + ". Me interesa el programa de Diseño Gráfico" + interesTexto + ".";

      if (CONFIG.whatsapp) {
        window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg), "_blank");
      } else {
        alert(
          "Listo, " + nombre + ":\n\n“" + msg + "”\n\n" +
          "(Vista previa del mensaje. Número configurado en js/data.js)"
        );
      }
      ev.target.reset();
    });
  }
})();
