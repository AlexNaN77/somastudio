(async () => {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  for (let i=0; i<150 && !document.body.classList.contains('loaded'); i++) await wait(200);
  await document.fonts.ready;
  const scene = document.querySelector('#soma-paisaje');
  const stage = document.querySelector('#hero-recorrido');
  const title = document.querySelector('#titulo-servicios');
  const pause = document.querySelector('#paisaje-pausa');
  const menu = document.querySelector('#paisaje-menu');
  const portrait = matchMedia('(max-width:700px) and (orientation:portrait)').matches;
  const results = [];
  const check = (name, ok) => { results.push({name,ok:!!ok}); console.log((ok?'PASS ':'FAIL ')+name); };
  const style = el => getComputedStyle(el);
  const rect = el => el.getBoundingClientRect();
  const visible = el => { const r=rect(el);return r.left>=-1 && r.right<=innerWidth+1 && r.top>=0 && r.bottom<=innerHeight+1; };
  check('Un H1 con texto completo',document.querySelectorAll('h1').length===1 && title.textContent.replace(/\s+/g,' ').trim()==='Tu negocio mejor pensado');
  check('Titular en dos líneas, no tres',title.querySelectorAll('.paisaje-linea').length===2 && style(title.querySelector('.paisaje-linea:last-child')).whiteSpace==='nowrap');
  check('Sin overflow horizontal',document.documentElement.scrollWidth<=innerWidth+1);
  const images=[...scene.querySelectorAll('.paisaje-capa')];
  await Promise.all(images.map(el=>el.decode().catch(()=>{})));
  check('12 imágenes originales cargadas',images.length===12 && images.every(el=>el.naturalWidth>0));
  check('Microtextos de ambos lados visibles',[...scene.querySelectorAll('.paisaje-micro')].every(el=>style(el).display!=='none' && rect(el).width>0));
  check('Laptop delante del aro',+style(scene.querySelector('.paisaje-portatil')).zIndex>+style(scene.querySelector('.paisaje-orbita')).zIndex);
  check('Piedras delante del titular',[...scene.querySelectorAll('.paisaje-roca-alta,.paisaje-roca-izquierda,.paisaje-roca-derecha,.paisaje-rocas')].every(el=>+style(el).zIndex>+style(title).zIndex));
  check('Cabecera y pie dentro de pantalla',visible(scene.querySelector('.paisaje-cabecera')) && visible(scene.querySelector('.paisaje-pie')));
  check('Objetivos táctiles de al menos 44px',[pause,menu.querySelector('summary'),scene.querySelector('.paisaje-hagamos'),scene.querySelector('.paisaje-descubre')].every(el=>rect(el).height>=43.5 && rect(el).width>=43.5));
  if(portrait) {
    check('Hero ocupa el viewport vertical',Math.abs(rect(scene).height-Math.max(600,innerHeight))<2);
    check('Composición sin banda panorámica',Math.abs(rect(scene.querySelector('.paisaje-composicion')).height-rect(scene).height)<2);
    check('Sin pista de scroll vacía',Math.abs(rect(stage).height-rect(scene).height)<2);
  }
  pause.click();await wait(150);
  check('Pausa funcional',pause.getAttribute('aria-pressed')==='true');
  pause.click();await wait(150);
  check('Reanudación funcional',pause.getAttribute('aria-pressed')==='false');
  menu.querySelector('summary').click();await wait(100);
  check('Menú abre y encaja',menu.open && visible(menu.querySelector('nav')));
  document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));await wait(100);
  check('Escape cierra el menú',!menu.open);
  menu.querySelector('summary').blur();
  document.documentElement.dataset.heroQa=results.every(r=>r.ok)?'passed':'failed';
  console.log('QA HERO '+(portrait?'MOBILE':'DESKTOP')+': '+JSON.stringify(results));
  if(results.some(r=>!r.ok)) {
    const output=document.createElement('pre');output.textContent=results.filter(r=>!r.ok).map(r=>r.name).join('\n');output.style.cssText='position:fixed;bottom:0;left:0;right:0;background:#fff;color:#900;z-index:999999;font:12px monospace;padding:8px';document.body.append(output);
  }
})();
