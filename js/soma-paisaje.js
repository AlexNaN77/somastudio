/* SOMA / materia en movimiento.
 * Sticky nativo + capas 2.5D. Un solo RAF; torsión tipográfica fija, sin WebGL.
 * Todo se detiene fuera del viewport, al ocultar la pestaña o al pausar.
 */
(() => {
  'use strict';
  const scene = document.getElementById('soma-paisaje');
  if (!scene) return;
  const root = document.documentElement;
  const stage = document.getElementById('hero-recorrido');
  const journey = document.getElementById('recorrido-soma');
  const menu = document.getElementById('paisaje-menu');
  const pause = document.getElementById('paisaje-pausa');
  const globalNav = document.getElementById('navPrincipal');
  const navStart = document.getElementById('sector-restaurantes');
  const displacement = document.getElementById('paisaje-desplazamiento');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const small = matchMedia('(max-width:700px)');
  const pieces = [...scene.querySelectorAll('[data-paisaje-move]')];
  const clamp = (n, lo=0, hi=1) => Math.min(hi, Math.max(lo, n));
  let frame=0, current=0, target=0, visible=true, paused=false;
  let last=0, time=0, width=innerWidth;
  const enabled = () => !reduced.matches && !paused && !journey?.classList.contains('motion-paused');
  function measure() {
    const r = scene.getBoundingClientRect();
    const s = stage.getBoundingClientRect();
    width = r.width;
    // Misma curva proporcional a la tipografía; no cambia de forma al pausar.
    if (displacement) displacement.setAttribute('scale', (width * .035).toFixed(2));
    visible = r.bottom > 0 && r.top < innerHeight;
    // En el encuadre compacto no hay pista sticky: no completar el viaje
    // de golpe al desplazar el primer píxel ni separar las piezas.
    const travel = stage.offsetHeight - scene.offsetHeight;
    target = travel > 1 ? clamp(-s.top / travel) : 0;
    if (travel <= 1) current = 0; // Recuperar el encuadre al girar el dispositivo o reducir el visor.
    const globalFocus = document.activeElement?.closest('#navPrincipal,.indice-scroll,#overlayMenu');
    const atHero = r.top < 110 && r.bottom > Math.min(200, innerHeight*.3) && !globalFocus;
    root.classList.toggle('paisaje-en-vista', atHero);
    root.classList.toggle('paisaje-fuera', !atHero);
    // Umbral ligado a la sección real, no a una cantidad fija de scroll.
    // Al volver al hero se ocultan de nuevo Hablemos y su hamburguesa.
    const navVisible = !!navStart && document.body.classList.contains('loaded') &&
      navStart.getBoundingClientRect().top <= Math.min(96, innerHeight * .12);
    root.classList.toggle('nav-secciones-visible', navVisible);
    if (globalNav) {
      globalNav.toggleAttribute('inert', !navVisible);
      globalNav.setAttribute('aria-hidden', String(!navVisible));
    }
    schedule();
  }
  function place(el,x,y,rotation=0,scale=1,rx=0,ry=0) {
    el.style.setProperty('--px',x.toFixed(2)+'px');
    el.style.setProperty('--py',y.toFixed(2)+'px');
    el.style.setProperty('--pr',rotation.toFixed(2)+'deg');
    el.style.setProperty('--ps',scale.toFixed(4));
    el.style.setProperty('--rx',rx.toFixed(2)+'deg');
    el.style.setProperty('--ry',ry.toFixed(2)+'deg');
  }
  function draw(p,t,on) {
    const unit = Math.min(1.3,width/1600);
    const idle = on ? 1 : 0;
    const wave = Math.sin(t*.65)*idle;
    for (const el of pieces) {
      switch(el.dataset.paisajeMove) {
        case 'busto': place(el,-p*18*unit,p*30*unit,0,1+p*.025); break;
        case 'portatil': place(el,p*75*unit,(-p*140+wave*5)*unit,-p*13+wave*.65,1+p*(small.matches?.28:.5),p*7,-p*18); break;
        case 'alta': place(el,(p*125+Math.sin(t*.4)*idle*7)*unit,(-p*120+wave*13)*unit,p*36+wave*3,1+p*.15); break;
        case 'izquierda': place(el,(-p*105-wave*5)*unit,(-p*95-wave*10)*unit,-p*45+wave*4,1+p*.24); break;
        case 'derecha': place(el,(p*115+wave*7)*unit,(-p*80+Math.sin(t*.6+1)*idle*12)*unit,p*48-wave*4,1+p*.3); break;
        case 'frente-izquierdo': place(el,-p*85*unit,p*48*unit,-p*3,1+p*.07); break;
        case 'frente-derecho': place(el,p*105*unit,p*60*unit,p*3,1+p*.09); break;
        case 'nodo': place(el,Math.sin(p*.8)*110+wave*4,-p*42); break;
      }
    }
    scene.style.setProperty('--titulo-y',(-p*32*unit+wave*1.2*(small.matches?unit:1))+'px');
    scene.style.setProperty('--hero-progress',p.toFixed(4));
  }
  function paint(now) {
    frame=0;
    if(document.hidden) { last=0; return; }
    const moving = enabled() && document.body.classList.contains('loaded');
    scene.dataset.motion = moving && visible ? 'scroll' : 'static';
    if(!moving) {
      last=0; // Mantener también el progreso congelado mientras está en pausa.
      draw(reduced.matches?0:current,0,false);
      return;
    }
    if(!visible) { last=0; return; }
    const dt=last?Math.min(50,now-last):16;
    last=now; time+=dt/1000;
    current+=(target-current)*(1-Math.exp(-dt/110));
    if(Math.abs(target-current)<.0001) current=target;
    draw(current,time,true);
    schedule();
  }
  function schedule() { if(!frame&&!document.hidden) frame=requestAnimationFrame(paint); }
  function motionState() {
    // La pausa no colapsa el recorrido para evitar un salto de lectura.
    stage.classList.toggle('paisaje-scroll-activo',!reduced.matches);
    const off=!enabled();
    pause.disabled=reduced.matches;
    pause.setAttribute('aria-pressed',String(off));
    pause.setAttribute('aria-label',reduced.matches?'Movimiento reducido por tu sistema':off?'Reanudar movimiento del hero':'Pausar movimiento del hero');
    pause.querySelector('[aria-hidden]').textContent=off?'▷':'Ⅱ';
    pause.querySelector('.paisaje-pausa-texto').textContent=off?'REANUDAR':'PAUSAR';
    measure();
  }
  pause.addEventListener('click',()=>{paused=!paused;motionState();});
  reduced.addEventListener('change',motionState);
  small.addEventListener('change',measure);
  window.addEventListener('scroll',measure,{passive:true});
  window.addEventListener('resize',measure,{passive:true});
  document.addEventListener('focusin',measure);
  document.addEventListener('focusout',measure);
  document.addEventListener('soma:ready',measure);
  new IntersectionObserver(measure).observe(scene);
  new ResizeObserver(measure).observe(scene);
  if (navStart) new ResizeObserver(measure).observe(navStart);
  new MutationObserver(motionState).observe(journey,{attributes:true,attributeFilter:['class']});
  new MutationObserver(measure).observe(document.body,{attributes:true,attributeFilter:['class']});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){cancelAnimationFrame(frame);frame=0;last=0;}
    else measure();
  });
  menu.addEventListener('click',e=>{if(e.target.closest('a'))menu.open=false;});
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus();}
  });
  document.addEventListener('click',e=>{if(menu.open&&!menu.contains(e.target))menu.open=false;});
  window.addEventListener('pagehide',()=>{cancelAnimationFrame(frame);frame=0;last=0;});
  window.addEventListener('pageshow',measure);
  motionState();
})();
