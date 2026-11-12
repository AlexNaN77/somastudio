/* SOMA — editorial scroll. No scroll hijacking, no new libraries, no hero mutations.
   Motion is an enhancement. Every piece of commercial content is static HTML. */
(() => {
  'use strict';
  const main = document.getElementById('recorrido-soma');
  if (!main) return;
  const $ = selector => main.querySelector(selector);
  const $$ = selector => [...main.querySelectorAll(selector)];
  const clamp = (value, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, value));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 600px)');
  const controller = new AbortController();
  const signal = controller.signal;
  const chapters = $$('[data-chapter]');
  const index = $('.indice-scroll');
  const indexLinks = index ? [...index.querySelectorAll('a')] : [];
  const toggle = $('#motion-toggle');
  const services = $$('[data-service]');
  const desk = $('.mesa-servicios');
  const deskCounter = $('.mesa-contador');
  const process = $('#proceso');
  const steps = $$('.paso');
  const digit = $('.proceso-digito');
  const stepDial = $('.reloj-proceso');
  const visible = new Set();
  const ornaments = $$('.acento-estrella,.orbita-editorial,.sello-proyectos>svg,.dudas-signo svg,.cierre-estrella');
  const entries = $$('.titulo_seccion,.proyecto-portada');
  const drifts = $$('[data-drift],[data-drift-x]');
  const contact = $('#contacto');
  const plate = $('.oferta-plato');
  const paper = $('.cambio-papel');
  let paused = false;
  let frame = 0;
  let currentService = -1;
  let currentStep = -1;
  let currentChapter = '';
  let destroyed = false;
  const timerSet = new Set();
  const moving = () => !paused && !reduced.matches;

  function schedule() {
    if (!frame && !destroyed && !document.hidden) frame = requestAnimationFrame(paint);
  }
  function showIndex(show) {
    if (!index || index.hidden === !show) return;
    // Keep focus usable if a keyboard user scrolls beyond the toolbar's range.
    if (!show && index.contains(document.activeElement)) return;
    index.hidden = !show;
  }
  function nearest(items, vh) {
    let chosen = 0;
    items.forEach((item, i) => {
      if (item.getBoundingClientRect().top < vh * .56) chosen = i;
    });
    return chosen;
  }
  function inView(rect, vh) { return rect.bottom > -80 && rect.top < vh + 80; }

  function paint() {
    frame = 0;
    if (destroyed || document.hidden) return;
    const vh = window.innerHeight;
    const bounds = main.getBoundingClientRect();
    const onJourney = bounds.top < 120 && bounds.bottom > 90;
    showIndex(onJourney);
    if (index && !index.hidden) {
      index.style.setProperty('--read', clamp(-bounds.top / Math.max(1, bounds.height - vh)).toFixed(4));
      const active = chapters[nearest(chapters, vh)]?.id;
      if (active && active !== currentChapter) {
        currentChapter = active;
        indexLinks.forEach(link => {
          if (link.hash === '#' + active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }
    if (bounds.top > vh || bounds.bottom < 0) return;

    // Sticky folios: each text block changes the foremost printed sheet.
    if (desk) {
      let selected = nearest(services, vh);
      if (mobile.matches) {
        const r = desk.getBoundingClientRect();
        selected = Math.floor(clamp((vh * .76 - r.top) / Math.max(1, r.height * 1.1)) * 2.999);
      }
      if (selected !== currentService && moving()) {
        currentService = selected;
        desk.dataset.active = String(selected);
        deskCounter.textContent = String(selected + 1).padStart(2, '0') + ' / 03';
      }
    }
    if (process && steps.length) {
      const chosen = nearest(steps, vh);
      if (chosen !== currentStep && moving()) {
        currentStep = chosen;
        digit.textContent = String(chosen + 1).padStart(2, '0');
      }
      if (moving() && inView(process.getBoundingClientRect(), vh)) {
        steps.forEach(step => {
          const r = step.getBoundingClientRect();
          step.style.setProperty('--step-line', clamp((vh * .8 - r.top) / Math.max(1, r.height)).toFixed(4));
        });
        const start = steps[0].getBoundingClientRect().top;
        const end = steps.at(-1).getBoundingClientRect().bottom;
        const progress = clamp((vh * .55 - start) / Math.max(1, end - start));
        stepDial.style.setProperty('--step-progress', (1 - progress).toFixed(4));
      }
    }
    if (!moving()) return;

    // One frame per scroll event, only visible artwork receives style writes.
    for (const el of visible) {
      const r = el.getBoundingClientRect();
      if (!inView(r, vh)) continue;
      const p = clamp((vh - r.top) / Math.max(1, vh + r.height));
      if (el.matches('.titulo_seccion,.proyecto-portada')) {
        el.style.setProperty('--entry', clamp((vh * .95 - r.top) / (vh * .5)).toFixed(4));
      }
      if (el.hasAttribute('data-drift')) {
        const distance = mobile.matches ? 5 : Number(el.dataset.drift);
        el.style.setProperty('--drift', ((p - .5) * distance).toFixed(2) + 'px');
      }
      if (el.hasAttribute('data-drift-x')) {
        el.style.setProperty('--drift-x', (-p * Number(el.dataset.driftX)).toFixed(2) + 'px');
      }
      if (ornaments.includes(el)) el.style.setProperty('--turn', ((p - .5) * 110).toFixed(2) + 'deg');
      if (el === contact) el.style.setProperty('--draw', (1 - clamp(p * 1.8)).toFixed(4));
      if (el === plate) el.style.setProperty('--plate-turn', (-18 + p * 30).toFixed(2) + 'deg');
      if (el === paper) el.style.setProperty('--paper-lift', ((1 - p) * 12).toFixed(2) + 'px');
    }
  }

  function setMotion() {
    const off = !moving();
    main.classList.toggle('motion-paused', off);
    main.dataset.motionState = reduced.matches ? 'reduced' : paused ? 'paused' : 'active';
    if (toggle) {
      toggle.disabled = reduced.matches;
      toggle.setAttribute('aria-pressed', String(off));
      const label = reduced.matches ? 'Movimiento reducido por la preferencia del sistema' : paused ? 'Reanudar animaciones del recorrido' : 'Pausar animaciones del recorrido';
      toggle.setAttribute('aria-label', label);
      toggle.title = toggle.getAttribute('aria-label');
      toggle.firstElementChild.textContent = off ? '▷' : 'Ⅱ';
    }
    if (off) {
      if (desk) desk.dataset.active = '0';
      if (deskCounter) deskCounter.textContent = '01—03';
      if (digit) digit.textContent = '04';
      currentService = currentStep = -1;
    }
    schedule();
  }
  toggle?.addEventListener('click', () => { paused = !paused; setMotion(); }, { signal });
  reduced.addEventListener('change', setMotion, { signal });
  mobile.addEventListener('change', schedule, { signal });
  window.addEventListener('scroll', schedule, { passive: true, signal });
  window.addEventListener('resize', schedule, { passive: true, signal });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && frame) { cancelAnimationFrame(frame); frame = 0; }
    else schedule();
  }, { signal });
  const targets = [...entries, ...ornaments, ...drifts, contact, plate, paper].filter(Boolean);
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(items => {
    items.forEach(item => item.isIntersecting ? visible.add(item.target) : visible.delete(item.target));
    schedule();
  }, { rootMargin: '80px 0px' }) : null;
  targets.forEach(el => observer ? observer.observe(el) : visible.add(el));
  const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(schedule) : null;
  resizeObserver?.observe(main);
  main.classList.add('motion-ready');
  setMotion();

  // Respect reduced motion on in-page links without changing the protected hero.
  main.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute('href');
    const target = hash === '#' ? document.querySelector('.heroxd') : document.getElementById(hash.slice(1));
    if (!target) return;
    const details = target.matches('details') ? target : target.querySelector(':scope > .contenedor_seccion > details');
    if (details) details.open = true;
    if (!moving()) {
      event.preventDefault();
      history.pushState(null, '', hash);
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  }, { signal });
  function openHash() {
    const id = location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target || !main.contains(target)) return;
    const details = target.matches('details') ? target : target.querySelector(':scope > .contenedor_seccion > details');
    if (details) details.open = true;
    schedule();
  }
  window.addEventListener('hashchange', openHash, { signal });
  openHash();

  // Demos: defer external pages until explicit intent. A cross-origin load event
  // is not proof that a page allowed framing; the external-link fallback stays.
  const demoObservers = [];
  $$('.proyecto').forEach(project => {
    const details = project.querySelector('.demo-interactiva');
    const iframe = project.querySelector('iframe');
    const status = project.querySelector('.demo-estado');
    if (!details || !iframe || !status) return;
    let timer = 0;
    function cancelTimer() { clearTimeout(timer); timerSet.delete(timer); timer = 0; }
    function scale() { if (typeof escalar_pantallas === 'function') requestAnimationFrame(escalar_pantallas); }
    function mount() {
      if (!details.open) return;
      scale();
      if (iframe.hasAttribute('src')) return;
      details.dataset.loadState = 'loading';
      status.textContent = 'Cargando la web externa… Si tarda, puedes usar «Abrir sitio». '; 
      iframe.src = iframe.dataset.src;
      timer = setTimeout(() => {
        details.dataset.loadState = 'timeout';
        status.textContent = 'La demo está tardando. Puedes abrir el sitio en una pestaña nueva con «Abrir sitio».';
        timerSet.delete(timer); timer = 0;
      }, 18000);
      timerSet.add(timer);
    }
    iframe.addEventListener('load', () => {
      if (!iframe.hasAttribute('src')) return;
      cancelTimer();
      details.dataset.loadState = 'load-event';
      status.textContent = 'Vista externa interactiva. Si el navegador no la muestra, usa «Abrir sitio».';
      scale();
    }, { signal });
    iframe.addEventListener('error', () => {
      cancelTimer();
      details.dataset.loadState = 'error';
      status.textContent = 'No se ha podido cargar la demo. Prueba el enlace «Abrir sitio».';
    }, { signal });
    details.addEventListener('toggle', () => { mount(); schedule(); }, { signal });
    project.querySelectorAll('[data-modo-btn]').forEach(button => button.addEventListener('click', () => {
      details.open = true;
      // Also supplies a safe fallback if the legacy inline script was unavailable.
      project.dataset.modo = button.dataset.modoBtn;
      project.querySelectorAll('[data-modo-btn]').forEach(b => {
        const selected = b === button;
        b.classList.toggle('activa', selected);
        b.setAttribute('aria-pressed', String(selected));
      });
      mount();
    }, { signal }));
    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(scale);
      ro.observe(project.querySelector('.pantalla_marco'));
      demoObservers.push(ro);
    }
    mount();
  });
  $$('.detalle-comercial').forEach(details => details.addEventListener('toggle', schedule, { signal }));
  // Pause the inherited CSS vegetation loops when their section is offscreen.
  const ruins = $('#servicios');
  const ruinObserver = 'IntersectionObserver' in window ? new IntersectionObserver(items => {
    main.classList.toggle('ruins-asleep', !items[0].isIntersecting);
  }) : null;
  if (ruins) ruinObserver?.observe(ruins);

  window.addEventListener('pagehide', event => {
    if (event.persisted) { if (frame) cancelAnimationFrame(frame); frame = 0; return; }
    destroyed = true;
    controller.abort();
    observer?.disconnect(); resizeObserver?.disconnect(); ruinObserver?.disconnect();
    demoObservers.forEach(ro => ro.disconnect());
    timerSet.forEach(clearTimeout);
    if (frame) cancelAnimationFrame(frame);
  }, { signal });
  window.addEventListener('pageshow', schedule, { signal });
  document.fonts?.ready.then(schedule);
})();
