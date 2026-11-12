/* Loader original: mismo texto, línea azul y tiempos; independiente del WebGL retirado. */
(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const layers = ['capa_intro', 'linea_intro', 'txtCargando'].map(id => document.getElementById(id));
  let timeline;
  function finish() {
    document.body.classList.add('loaded');
    layers.forEach(el => { if (el) { el.style.opacity = '0'; el.style.visibility = 'hidden'; el.setAttribute('aria-hidden', 'true'); } });
    const nav = document.getElementById('navPrincipal');
    if (nav) { nav.style.opacity = '1'; nav.style.transform = 'none'; }
    document.dispatchEvent(new Event('soma:ready'));
  }
  if (reduced.matches || !window.gsap) { finish(); return; }
  gsap.set('#linea_intro', {width:0, opacity:1});
  timeline = gsap.timeline({onComplete:finish});
  timeline.to('#txtCargando', {opacity:1, duration:.4, ease:'power2.out'}, 0)
    .to('#linea_intro', {width:'40vw', duration:.8, ease:'power4.inOut'}, .2)
    .to('#txtCargando', {opacity:0, letterSpacing:'.6em', duration:.35, ease:'power3.in'}, .9)
    .to('#linea_intro', {width:'110vw', height:'4px', duration:.4, ease:'power4.in'}, 1.1)
    .to('#capa_intro', {autoAlpha:0, duration:.6, ease:'power2.out'}, 1.4)
    .to('#linea_intro', {opacity:0, height:'80vh', duration:.5, ease:'power2.out'}, 1.4)
    .call(() => document.body.classList.add('loaded'), null, 2.0);
  reduced.addEventListener('change', () => { if (reduced.matches) { timeline?.kill(); finish(); } });
  window.addEventListener('pageshow', event => { if (event.persisted) finish(); });
})();
