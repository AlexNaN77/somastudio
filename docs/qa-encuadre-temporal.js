(async()=>{
 const frame=document.getElementById('sitio'),wait=ms=>new Promise(r=>setTimeout(r,ms));
 for(let i=0;i<150&&!frame.contentDocument?.body?.classList.contains('loaded');i++)await wait(200);
 const d=frame.contentDocument,w=frame.contentWindow,s=e=>w.getComputedStyle(e),q=x=>d.querySelector(x),rect=e=>e.getBoundingClientRect();
 await d.fonts.ready;
 let failures=0,count=0;const check=(label,ok)=>{count++;if(!ok)failures++;console.log((ok?'PASS ':'FAIL ')+label);};
 const hero=q('#soma-paisaje'),pause=q('#paisaje-pausa'),menu=q('#paisaje-menu'),title=q('#titulo-servicios');
 for(const [width,height] of [[390,844],[320,640],[430,932],[575,1024],[1280,800]]){
  frame.width=width;frame.height=height;w.scrollTo(0,0);await wait(350);
  const mobile=width<=700,label=width+'x'+height;
  check(label+' sin overflow horizontal',d.documentElement.scrollWidth<=width+1);
  check(label+' altura del hero',Math.abs(rect(hero).height-(mobile?Math.max(600,height):Math.min(height,width*.625)))<2);
  check(label+' reparto tipográfico',s(q('.paisaje-palabra-pensado')).display===(mobile?'block':'inline-block'));
  check(label+' cabecera y pie visibles',[q('.paisaje-cabecera'),q('.paisaje-pie')].every(e=>{const r=rect(e);return r.left>=-1&&r.right<=width+1&&r.top>=0&&r.bottom<=height+1;}));
  check(label+' laptop sobre aro',+s(q('.paisaje-portatil')).zIndex>+s(q('.paisaje-orbita')).zIndex);
  check(label+' piedras sobre texto',[...d.querySelectorAll('.paisaje-roca-alta,.paisaje-roca-izquierda,.paisaje-roca-derecha,.paisaje-rocas')].every(e=>+s(e).zIndex>+s(title).zIndex));
  menu.querySelector('summary').click();await wait(80);
  check(label+' menú utilizable',menu.open&&rect(menu.querySelector('nav')).right<=width+1&&rect(menu.querySelector('nav')).bottom<=height+1);
  d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));
  check(label+' Escape cierra',!menu.open);menu.querySelector('summary').blur();
  const nav=q('#navPrincipal'),start=q('#sector-restaurantes');
  check(label+' nav oculta al inicio',s(nav).visibility==='hidden'&&nav.hasAttribute('inert'));
  const sectionY=rect(start).top+w.scrollY;
  w.scrollTo({top:Math.max(0,sectionY-160),behavior:'instant'});await wait(250);
  check(label+' nav oculta antes de la sección',s(nav).visibility==='hidden');
  w.scrollTo({top:sectionY-60,behavior:'instant'});await wait(250);
  check(label+' nav visible en Tu menú A mano',s(nav).visibility==='visible'&&!nav.hasAttribute('inert'));
  w.scrollTo({top:0,behavior:'instant'});await wait(250);
  check(label+' nav se oculta al volver',s(nav).visibility==='hidden');
 }
 check('Un H1 con texto completo',d.querySelectorAll('h1').length===1&&title.textContent.replace(/\s+/g,' ').trim()==='Tu negocio mejor pensado');
 check('12 capas originales cargadas',[...d.querySelectorAll('.paisaje-capa')].length===12&&[...d.querySelectorAll('.paisaje-capa')].every(e=>e.naturalWidth>0));
 pause.click();await wait(100);check('Pausa funcional',pause.getAttribute('aria-pressed')==='true');
 pause.click();await wait(100);check('Reanudar funcional',pause.getAttribute('aria-pressed')==='false');
 console.log('RESULTADO HERO: '+(count-failures)+'/'+count+' correctas; '+failures+' fallos');
})();
