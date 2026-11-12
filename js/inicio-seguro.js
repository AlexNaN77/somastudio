/* Respaldo independiente de WebGL y GSAP. No cambia una intro correcta. */
(() => {
  const reveal = () => {
    if (document.body.classList.contains('loaded')) return;
    document.body.classList.add('loaded', 'inicio-respaldo');
    document.getElementById('contenidoHero')?.classList.add('ya_se_ve');
    console.warn('SOMA: contenido visible mediante respaldo de arranque.');
  };
  const start = () => setTimeout(reveal, 6000);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();
