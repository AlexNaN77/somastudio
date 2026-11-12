/* Temporary QA on the REAL index.html. Removed before handoff. */
(async () => {
  const RUN_TESTS = false;
  const TARGET = '.proyecto--intensity';
  const OFFSET = 0;
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const checks = [];
  const check = (name, condition, detail = '') => {
    checks.push({name, pass: Boolean(condition), detail});
    console.log('QA ' + (condition ? 'PASS ' : 'FAIL ') + name + (detail ? ' | ' + detail : ''));
  };
  await document.fonts.ready;
  for (let i=0; i<100 && !document.body.classList.contains('loaded'); i++) await wait(100);
  await wait(800);
  try {
    if (RUN_TESTS) {
      const [base, current] = await Promise.all(['docs/index-before.html', 'index.html'].map(path => fetch(path).then(r => r.text())));
      const parser = new DOMParser();
      const before = parser.parseFromString(base, 'text/html');
      const after = parser.parseFromString(current, 'text/html');
      check('Hero markup unchanged', before.querySelector('.heroxd').outerHTML === after.querySelector('.heroxd').outerHTML);
      check('Original inline styles unchanged', before.querySelector('style').textContent === after.querySelector('style').textContent);
      const scriptBefore = [...before.scripts].find(s => s.textContent.includes('const ruido_glsl'));
      const scriptAfter = [...after.scripts].find(s => s.textContent.includes('const ruido_glsl'));
      check('Hero and ruins JS unchanged', scriptBefore.textContent.split('const boton_menu')[0] === scriptAfter.textContent.split('const boton_menu')[0]);
      check('Prices unchanged', [...before.querySelectorAll('.plan-precio,.qr-precio')].map(e => e.textContent).join('|') === [...after.querySelectorAll('.plan-precio,.qr-precio')].map(e => e.textContent).join('|'));
      check('Price conditions unchanged', before.querySelector('.condiciones-precio').textContent === after.querySelector('.condiciones-precio').textContent);
      check('Comparison includes unchanged', before.querySelector('.tabla-planes').textContent === after.querySelector('.tabla-planes').textContent);
      const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
      check('Unique IDs', ids.length === new Set(ids).size);
      check('Internal anchors resolve', [...document.querySelectorAll('a[href^="#"]')].every(a => a.hash === '' || document.getElementById(a.hash.slice(1))));
      check('Three services, two cases, three plans, four steps', document.querySelectorAll('.servicio').length===3 && document.querySelectorAll('.proyecto').length===2 && document.querySelectorAll('.plan-comercial').length===3 && document.querySelectorAll('.paso').length===4);
      check('No unsolicited iframe mounting', [...document.querySelectorAll('.proyecto iframe')].every(f => !f.hasAttribute('src')));
      const main = document.querySelector('.cuerpo_sitio');
      const selector = document.getElementById('interes-proyecto');
      for (const value of ['web','sistema','restaurante','idea']) {
        const radio = selector.querySelector('[value="'+value+'"]'); radio.checked=true;
        radio.dispatchEvent(new Event('change', {bubbles:true}));
        const wa = document.getElementById('consulta-whatsapp').href;
        const text = new URL(wa).searchParams.get('text');
        check('Consultation '+value, text.includes('SOMA') && wa.startsWith('https://wa.me/523411786711') && document.getElementById('orientacion-proyecto').textContent.length>30);
      }
      const serviceLink = document.querySelector('.servicio [data-interes="web"]');
      serviceLink.addEventListener('click',e => e.preventDefault(), {once:true}); serviceLink.click();
      check('Service preselects consultation', selector.querySelector('[value="web"]').checked);
      selector.querySelector('[value="idea"]').checked=true;selector.querySelector('[value="idea"]').dispatchEvent(new Event('change',{bubbles:true}));
      const menuButton=document.getElementById('botonMenu'), menu=document.getElementById('overlayMenu');
      menuButton.click();await wait(100);
      check('Menu open + focus', menuButton.getAttribute('aria-expanded')==='true' && !menu.inert && menu.contains(document.activeElement));
      const menuLinks=[...menu.querySelectorAll('a[href]')];menuLinks.at(-1).focus();
      document.dispatchEvent(new KeyboardEvent('keydown',{key:'Tab',bubbles:true,cancelable:true}));
      check('Menu focus loop',document.activeElement===menuButton);
      document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));await wait(100);
      check('Menu Escape closes',menuButton.getAttribute('aria-expanded')==='false' && menu.inert);
      const toggle=document.getElementById('motion-toggle');
      if (!toggle.disabled) {
        toggle.click();check('Pause motion',main.classList.contains('motion-paused')&&toggle.getAttribute('aria-pressed')==='true');
        toggle.click();check('Resume motion',!main.classList.contains('motion-paused')&&main.dataset.motionState==='active');
      }
      for (const project of document.querySelectorAll('.proyecto')) {
        const details=project.querySelector('details'), iframe=project.querySelector('iframe');
        project.querySelector('[data-modo-btn="movil"]').click();await wait(180);
        check(project.id+' mobile and mount',details.open && project.dataset.modo==='movil' && iframe.getAttribute('src')===iframe.dataset.src && project.querySelector('[data-modo-btn="movil"]').getAttribute('aria-pressed')==='true');
        const screen=project.querySelector('.pantalla_marco');
        check(project.id+' iframe scaling',Math.abs(iframe.getBoundingClientRect().width-screen.clientWidth)<2);
        iframe.dispatchEvent(new Event('error'));
        check(project.id+' error fallback',details.dataset.loadState==='error'&&project.querySelector('.demo-estado').textContent.includes('Abrir sitio'));
        project.querySelector('[data-modo-btn="pc"]').click();await wait(100);
        check(project.id+' PC state',project.dataset.modo==='pc'&&project.querySelector('[data-modo-btn="pc"]').getAttribute('aria-pressed')==='true');
        details.open=false;
      }
      for (const details of document.querySelectorAll('.detalle-comercial')) {
        details.querySelector('summary').click();await wait(30);
        check('Details '+(details.id || details.querySelector('summary').textContent.slice(0,35)),details.open);
        details.open=false;
      }
      await wait(100);
      const roots=['#servicios','#portafolio','#contacto','#menus','#proceso','#dudas','#complementos','#cierre'];
      for (const id of roots) {
        const element=document.querySelector(id);window.scrollTo({top:element.getBoundingClientRect().top+window.scrollY,behavior:'instant'});await wait(150);
        check(id+' no page overflow',document.documentElement.scrollWidth<=innerWidth+1, innerWidth+' / '+document.documentElement.scrollWidth);
      }
      const sheet=document.querySelector('.mesa-servicios');
      if(innerWidth>600){
        const second=document.querySelector('[data-service="1"]');window.scrollTo({top:second.getBoundingClientRect().top+scrollY-innerHeight*.32,behavior:'instant'});await wait(200);
        check('Scroll selects second service sheet',sheet.dataset.active==='1',sheet.dataset.active);
        check('Desktop sticky desk position',Math.abs(sheet.getBoundingClientRect().top-125)<12,sheet.getBoundingClientRect().top.toFixed(1));
      }
      const third=document.querySelectorAll('.paso')[2];window.scrollTo({top:third.getBoundingClientRect().top+scrollY-innerHeight*.3,behavior:'instant'});await wait(200);
      check('Scroll selects third process step',document.querySelector('.proceso-digito').textContent==='03');
      const assets=['css/editorial.css','css/editorial-responsive.css','js/recorrido-motion.js','images/soma-editorial.svg','images/proyecto-intensity.png','images/proyecto-delizzia.png'];
      for(const asset of assets){const r=await fetch(asset);check('Asset '+asset,r.ok);}
      console.log('QA SUMMARY '+JSON.stringify({viewport:[innerWidth,innerHeight],passed:checks.filter(c=>c.pass).length,failed:checks.filter(c=>!c.pass)}));
    }
    const target=document.querySelector(TARGET);
    document.activeElement?.blur();
    const position=target.getBoundingClientRect().top+scrollY-105+OFFSET;
    window.scrollTo({top:position,behavior:'instant'});
    await wait(1000);
    window.scrollTo({top:target.getBoundingClientRect().top+scrollY-105+OFFSET,behavior:'instant'});
    await wait(800);
    document.body.dataset.qaReady='true';
    console.log('QA VIEW '+TARGET+' '+innerWidth+'x'+innerHeight);
  } catch(error) { console.error('QA EXCEPTION '+error.stack);document.body.dataset.qaReady='error'; }
})();
