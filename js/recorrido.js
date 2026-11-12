/* Contacto contextual: solo prepara un enlace. No guarda ni envía datos. */
(() => {
  const opciones = {
    web: {
      ayuda: 'Cuéntanos qué ofrece tu negocio y qué te gustaría que hiciera el visitante en tu web.',
      mensaje: 'Hola SOMA, quiero una web para mi negocio. Me gustaría revisar objetivos, alcance y cotización.'
    },
    sistema: {
      ayuda: '¿Qué proceso quieres organizar o simplificar? Un ejemplo de cómo trabajas hoy es un buen comienzo.',
      mensaje: 'Hola SOMA, necesito un sistema o catálogo a la medida para mi negocio. Quiero platicar sobre el proceso que necesito resolver.'
    },
    restaurante: {
      ayuda: 'Puedes consultar los paquetes más abajo o contarnos primero qué necesita tu restaurante.',
      mensaje: 'Hola SOMA, quiero una web para mi restaurante. Me gustaría saber qué paquete encaja con lo que necesito.'
    },
    idea: {
      ayuda: 'No necesitas saber el nombre técnico. Empieza por contarnos qué quieres resolver.',
      mensaje: 'Hola SOMA, tengo una idea para mi negocio y quiero ayuda para aterrizarla.'
    }
  };
  const selector = document.getElementById('interes-proyecto');
  const enlace = document.getElementById('consulta-whatsapp');
  const orientacion = document.getElementById('orientacion-proyecto');
  if (!selector || !enlace || !orientacion) return;

  function seleccionar(valor) {
    const opcion = opciones[valor];
    if (!opcion) return;
    const radio = selector.querySelector('input[value="' + valor + '"]');
    if (radio) radio.checked = true;
    orientacion.textContent = opcion.ayuda;
    enlace.href = 'https://wa.me/523411786711?text=' + encodeURIComponent(opcion.mensaje);
  }
  selector.addEventListener('change', event => seleccionar(event.target.value));
  document.querySelectorAll('[data-interes]').forEach(link => {
    link.addEventListener('click', () => seleccionar(link.dataset.interes));
  });
  seleccionar(selector.querySelector('input:checked').value);

  // Estado accesible de los controles originales de las demos.
  document.querySelectorAll('.proyecto').forEach(proyecto => {
    const botones = proyecto.querySelectorAll('[data-modo-btn]');
    function actualizarEstado() {
      botones.forEach(boton => boton.setAttribute('aria-pressed', String(boton.dataset.modoBtn === proyecto.dataset.modo)));
    }
    botones.forEach(boton => boton.addEventListener('click', actualizarEstado));
    actualizarEstado();
  });

  // El menú cerrado no debe recibir foco; al abrir, permite recorrerlo con teclado.
  const botonMenu = document.getElementById('botonMenu');
  const menu = document.getElementById('overlayMenu');
  if (botonMenu && menu) {
    function sincronizarMenu() {
      const abierto = botonMenu.getAttribute('aria-expanded') === 'true';
      menu.inert = !abierto;
      menu.setAttribute('aria-hidden', String(!abierto));
      if (abierto) menu.querySelector('a')?.focus({ preventScroll: true });
    }
    new MutationObserver(sincronizarMenu).observe(botonMenu, { attributes: true, attributeFilter: ['aria-expanded'] });
    sincronizarMenu();
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.contains(document.activeElement)) botonMenu.focus({ preventScroll: true });
      if (event.key !== 'Tab' || botonMenu.getAttribute('aria-expanded') !== 'true') return;
      const enlaces = [...menu.querySelectorAll('a[href]')];
      const orden = [botonMenu, ...enlaces];
      const indice = orden.indexOf(document.activeElement);
      if (event.shiftKey && indice <= 0) {
        event.preventDefault(); orden.at(-1).focus();
      } else if (!event.shiftKey && (indice === orden.length - 1 || indice === -1)) {
        event.preventDefault(); botonMenu.focus();
      }
    });
  }
})();
