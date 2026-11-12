/* Cursor independiente de WebGL. Punto directo, aro a <=10px; al pulsar, 0px.
   Sin captura de puntero, preventDefault ni alteración de selección/arrastre nativo. */
(() => {
  'use strict';
  const root = document.documentElement;
  const ring = document.getElementById('cursorCirculote');
  const dot = document.getElementById('cursorPuntito');
  if (!ring || !dot) return;
  // pointerType identifica el dispositivo usado, también en portátiles táctiles.
  const reduced = matchMedia('(prefers-reduced-motion:reduce)');
  const controller = new AbortController();
  const options = {passive:true, signal:controller.signal};
  const nativeSelector = 'input,textarea,select,[contenteditable]:not([contenteditable="false"]),iframe,video,audio';
  const actionSelector = 'a[href],button,summary,[role="button"],[data-hover],label[for]';
  let x=0,y=0,rx=0,ry=0,active=false,pressed=false,raf=0,last=0;
  const place = (el,px,py) => {el.style.transform=`translate3d(${px}px,${py}px,0) translate(-50%,-50%)`;};
  function setPressed(value) {
    pressed=value;
    ring.classList.toggle('esta_pulsado',value);
    root.classList.toggle('cursor-pulsado',value);
  }
  function hide() {
    active=false;cancelAnimationFrame(raf);raf=0;last=0;
    root.classList.remove('cursor-activo','cursor-enlace');
    ring.classList.remove('esta_encima');setPressed(false);
  }
  function nativeTarget(target) {return target instanceof Element && target.closest(nativeSelector);}
  function state(target) {
    const action=target instanceof Element && target.closest(actionSelector);
    const link=!!action && !action.matches(':disabled,[aria-disabled="true"]');
    ring.classList.toggle('esta_encima',link);
    root.classList.toggle('cursor-enlace',link);
  }
  function constrain() {
    const dx=rx-x,dy=ry-y,distance=Math.hypot(dx,dy);
    if(distance>10){rx=x+dx/distance*10;ry=y+dy/distance*10;}
  }
  function paint(now) {
    raf=0;if(!active) return;
    const dt=last?Math.min(40,Math.max(1,now-last)):16.67;last=now;
    // Constante temporal de 22 ms, independiente del refresco de la pantalla.
    const alpha=1-Math.exp(-dt/22);
    rx+=(x-rx)*alpha;ry+=(y-ry)*alpha;
    if(pressed||reduced.matches||Math.hypot(x-rx,y-ry)<.12){rx=x;ry=y;}
    constrain();place(ring,rx,ry);
    if(rx!==x||ry!==y) raf=requestAnimationFrame(paint);else last=0;
  }
  function follow(event) {
    if(event.pointerType!=='mouse'||nativeTarget(event.target)){hide();return;}
    x=event.clientX;y=event.clientY;
    setPressed(event.buttons!==0);state(event.target);
    if(!active){active=true;rx=x;ry=y;root.classList.add('cursor-activo');}
    place(dot,x,y);
    if(pressed||reduced.matches){rx=x;ry=y;}
    constrain();place(ring,rx,ry);
    if(!raf&&(rx!==x||ry!==y))raf=requestAnimationFrame(paint);
  }
  document.addEventListener('pointermove',follow,options);
  document.addEventListener('pointerdown',follow,options);
  document.addEventListener('pointerup',follow,options);
  document.addEventListener('pointerover',event=>{
    if(event.pointerType!=='mouse'||nativeTarget(event.target)){hide();return;}
    if(active)state(event.target);
  },options);
  document.addEventListener('pointerout',event=>{if(!event.relatedTarget)hide();},options);
  document.addEventListener('pointercancel',hide,options);
  document.addEventListener('dragstart',hide,options);
  document.addEventListener('dragend',hide,options);
  document.addEventListener('keydown',event=>{if(event.key==='Tab')hide();},options);
  window.addEventListener('blur',hide,options);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)hide();},options);
  window.addEventListener('scroll',()=>{
    if(!active)return;
    const target=document.elementFromPoint(x,y);
    if(!target||nativeTarget(target)){hide();return;}state(target);
  },options);
  reduced.addEventListener('change',()=>{if(active){rx=x;ry=y;place(ring,x,y);}}, {signal:controller.signal});
  window.addEventListener('pagehide',event=>{
    hide();if(!event.persisted)controller.abort();
  },{signal:controller.signal});
})();
