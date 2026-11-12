# SOMA — Webs y sistemas a la medida

## Laptop delante del aro SVG — 19/09/2026

- Completado: `.paisaje-portatil` pasa de `z-index:13` a `19`; `.paisaje-orbita` conserva `18`. La laptop queda delante del aro y detrás de los controles (`40–42`). No se modifican posición, tamaño, tipografía, encuadre ni animación en este ajuste.
- Verificación visual del `index.html` real: escritorio 1280×800 confirma que el aro queda oculto tras la laptop en la intersección; móvil 390×844 conserva titular y controles, sin cruce visible entre aro y portátil en esa captura.
- Evidencias: escritorio https://www.genspark.ai/api/files/s/KX27Ieq8 ; móvil https://www.genspark.ai/api/files/s/a5YXtErx .
- Entrada: `/`, `/index.html` y `/#soma-paisaje`, sin parámetros. Proyecto SOMA: servicios, portafolio y contacto. Datos: archivos estáticos en el repositorio, sin API propia, tablas ni persistencia añadida.
- Producción no facilitada; no se ha desplegado. Contacto público: https://wa.me/523411786711 .
- Pendiente y siguiente paso: completar los recursos ausentes de Drive documentados abajo y revisar en dispositivos físicos. No se han corregido los 404 ajenos a este cambio.

---

## Ajuste del titular según referencia — 19/09/2026

### Completado y alcance
- Ajustado únicamente «Tu negocio mejor pensado»: conserva Bodoni Moda 800 cursiva, texto HTML seleccionable y un solo H1. Cuatro palabras con inclinaciones independientes; sesgo compensado, escala y espaciado retocados. Quitado el punto final para seguir la referencia.
- Sustituida la turbulencia aleatoria animada del titular por un mapa SVG de desplazamiento suave y determinista (`images/titular-deformacion.svg`). El SVG es un mapa de canales para `feDisplacementMap`, no un dibujo de las letras ni una copia rasterizada de la referencia. Región ampliada para evitar discontinuidades en los extremos de los glifos.
- La deformación mantiene su forma con pausa y movimiento reducido; su intensidad se adapta al ancho. Se conservan las animaciones de los objetos, la fuente cargada, imágenes, navegación, resto del hero y resto de secciones.
- Escritorio en dos líneas; móvil conserva tres líneas y moderación de los giros por palabra. No se afirma coincidencia del 100 % ni equivalencia píxel a píxel con la referencia: para una reproducción exacta se necesita el arte vectorial original del titular.

### Comprobaciones actuales
- Capturas del `index.html` real a 1280×800 y 390×844: contornos continuos, sin cortes horizontales ni recorte lateral del titular, menú y controles visibles. Superposición del portátil conservada.
- Escritorio: https://www.genspark.ai/api/files/s/LabJCm7u . Móvil: https://www.genspark.ai/api/files/s/nrFfvvH3 .
- 12 comprobaciones automatizadas aprobadas sobre la página real: carga, H1 único, texto completo seleccionable, cuatro transformaciones, fuente disponible, filtro activo, ausencia de turbulencia en el titular, estabilidad de forma en reposo, conservación del filtro al pausar, reanudación, ausencia de overflow global y mapa SVG local accesible. Utilidades temporales de QA eliminadas.
- Persisten errores 404 preexistentes de recursos no aportados en Drive, incluido `js/escaparate.js`; quedan fuera del ajuste tipográfico. Pendiente comprobación física en Safari y de la preferencia de movimiento reducido del sistema; no se certifica auditoría integral del sitio.

### Proyecto, rutas, datos y siguientes pasos
- SOMA: presentación de servicios de webs y sistemas a medida, portafolio, paquetes y contacto. Entradas `/` y `/index.html`, sin parámetros; titular en `/#soma-paisaje` y `/#servicios`. Se conservan las anclas y utilidades documentadas abajo.
- Archivos del ajuste: `index.html`, `css/soma-paisaje.css`, `js/soma-paisaje.js`, `images/titular-deformacion.svg` y este README.
- Almacenamiento: HTML/CSS/JS e imágenes locales en el repositorio; estado de animación en memoria. Sin tablas, base de datos, API propia ni nuevos servicios.
- Producción no facilitada; no se ha desplegado. Contacto público conservado: https://wa.me/523411786711 . Sin endpoints propios de API.
- Siguiente paso: revisar con el usuario la intensidad y disposición; solicitar el titular vectorial original si exige fidelidad exacta, y aportar los recursos ausentes del proyecto por separado.

---

## Importación actual desde Drive — 19/09/2026

- **Completado:** importados los 48 archivos de la carpeta compartida y todas sus subcarpetas, conservando nombres y estructura: 2 archivos raíz, 8 CSS, 7 JavaScript en `js/`, 7 documentos en `docs/` y 24 imágenes (12 WebP, 8 JPG y 4 PNG en `images/sectores/`).
- **Origen:** https://drive.google.com/drive/folders/1F3x05iekQBDgNpn5QIOwCI73Toj5jSnk?usp=sharing
- Descarga con `WriteFileFromUrl`. Para los JavaScript se confirmó el aviso estándar de descarga de Drive; se verificó que los archivos finales no contienen la página de advertencia en lugar del código.
- **Verificación actual:** 48/48 rutas del inventario responden con contenido no vacío; las 24 imágenes se decodifican correctamente en el navegador. El sitio alcanza `body.loaded`. La captura visual no pudo realizarse por saturación del servicio de navegador en dos intentos; no se certifica una revisión visual ni una auditoría funcional completa en esta importación.
- **Alcance:** código, imágenes y diseño originales sin modificar. Únicamente se añade este registro al README; los registros inferiores pertenecen al proyecto de origen y no son pruebas nuevas de esta sesión.
- **Incidencias preexistentes:** el sitio referencia recursos que no están en la carpeta de Drive, incluido `js/escaparate.js` y varias imágenes; la consola mantiene respuestas 404 y avisos de precarga. No son descargas pendientes del inventario: esos archivos no fueron proporcionados. No se han creado sustitutos.
- **Proyecto y funciones importadas:** presentación de SOMA, servicios de webs y sistemas a medida, portafolio, paquetes para restaurantes, contacto por WhatsApp y animaciones existentes.
- **Entradas:** `/` y `/index.html`, sin parámetros obligatorios; anclas `/#soma-paisaje`, `/#hero-recorrido`, `/#servicios`, `/#negocios-soma`, `/#portafolio`, `/#contacto`, `/#menus`, `/#proceso` y `/#dudas`. Utilidades originales: `/docs/comprobar-assets.html` y `/docs/verificar-stems.html`. Los archivos `docs/antes-*.html` son copias históricas, no páginas autónomas verificadas.
- **Datos y almacenamiento:** archivos estáticos HTML/CSS/JS e imágenes en el repositorio, estado de interfaz en memoria del navegador. Sin tablas, base de datos, API propia ni servicios de persistencia añadidos.
- **URLs públicas:** producción no facilitada; no se ha desplegado. Contacto original: https://wa.me/523411786711 . No hay endpoints de API propios.
- **Pendiente / próximos pasos:** facilitar los recursos ausentes del Drive y revisar el sitio antes de nuevos cambios; repetir la captura cuando el servicio esté disponible. No se han implementado funciones nuevas.

---

## Ticket #1 — Hero único con tipografía líquida, 19/09/2026

### Completado
- Eliminado del DOM el hero «Tú lo imaginas. Nosotros lo hacemos real.» y su canvas. «Tu negocio mejor pensado.» es ahora el único H1 y la apertura en Y=0.
- Conservados los elementos y la secuencia visual del loader (SOMA_, línea azul, expansión y desvanecimiento). Nuevo `js/intro-soma.js` desacoplado de Three.js; fallback de arranque y preferencia de movimiento reducido conservados. Ya no se carga la librería Three.js ni sus plugins. El bloque histórico del renderer queda inactivo, protegido por la existencia del canvas eliminado; su limpieza física queda para mantenimiento.
- Titular HTML seleccionable: inclinaciones por línea, perspectiva ligera y `feTurbulence` + `feDisplacementMap` SVG animados suavemente, sin cambios bruscos de seed. La tipografía se superpone al busto y queda detrás del portátil para dar profundidad siguiendo la referencia; no se afirma reproducción tipográfica exacta.
- Recorrido sticky nativo de 65svh adicionales en escritorio / 45svh en móvil, sin interceptar rueda o gestos. Portátil: aproximación por escala, elevación y giro en tres ejes; rocas: trayectorias y rotaciones diferenciadas; primer plano: parallax. Es una composición 2.5D con los WebP originales, no un modelo 3D del portátil.
- Idle orgánico de texto/rocas, botón accesible de pausa/reanudación que congela también el progreso por scroll, respeto a la pausa global del recorrido. Movimiento reducido desactiva filtro y recorrido prolongado. Animación suspendida fuera de pantalla y con pestaña oculta; filtro limitado a 24 actualizaciones/s.
- Cabecera local única durante el hero; navegación global regresa al salir. Menú nativo con Escape y restitución de foco.

### Comprobaciones
- Capturas del `index.html` real en escritorio 1280×800 y móvil 390×844, tanto al inicio como al 70% del recorrido. Título legible, controles visibles, sin recorte global ni navegación duplicada. La superposición parcial del portátil sobre la segunda línea es intencional.
- Inicio: https://www.genspark.ai/api/files/s/rIzyFyMI (escritorio), https://www.genspark.ai/api/files/s/UpENBWMh (móvil).
- Scroll 70%: https://www.genspark.ai/api/files/s/WgEocGf6 (escritorio), https://www.genspark.ai/api/files/s/jAorJily (móvil).
- Pruebas automatizadas sobre el sitio real en iframe: loader termina, H1 único, Y=0, sin overflow horizontal, 12/12 imágenes decodificadas, filtro idle evoluciona, scroll cambia escala/rotación y conserva sticky, pausa congela idle/filtro/scroll, reanudación funciona, menú abre/Escape cierra, navegación global reaparece y filtro se detiene fuera de pantalla. Todas estas aserciones pasaron.
- Eliminados los scripts y páginas temporales de QA; el sitio no hace autoscroll al abrir.
- Persisten 404 preexistentes fuera del hero y `js/escaparate.js` ausente. No se han inventado recursos para otras secciones. Pendiente prueba manual en Safari/dispositivos físicos y con preferencia reducida del sistema; no se certifica rendimiento en todos los equipos.

### Rutas, datos y siguientes pasos
- Entradas: `/`, `/index.html`; sin parámetros obligatorios. Anclas: `/#soma-paisaje`, `/#hero-recorrido`, `/#servicios`, `/#negocios-soma`, `/#portafolio`, `/#contacto`, `/#menus`, `/#proceso`, `/#dudas`. Se mantienen `/docs/comprobar-assets.html` y `/docs/verificar-stems.html`.
- Modelo: HTML/CSS/JavaScript estático, imágenes WebP locales y estado de animación en memoria; sin tablas, API propia, base de datos ni persistencia añadida.
- Producción: no facilitada; no se ha desplegado. Contacto conservado: https://wa.me/523411786711 . Dependencias externas: Google Fonts y GSAP; el movimiento del hero usa APIs nativas.
- Siguientes pasos: ajustar intensidad con el usuario si lo desea, comprobar dispositivos físicos y completar recursos faltantes del resto del proyecto. Los registros inferiores describen versiones anteriores.

---

## Importación de Drive — 19/09/2026

- Importados los **47 archivos** disponibles en la carpeta facilitada, mediante `WriteFileFromUrl`, conservando nombres y estructura: 2 archivos raíz, 8 CSS, 6 JavaScript, 7 documentos y 24 imágenes (12 WebP, 8 JPG y 4 PNG en `images/sectores/`).
- Origen: https://drive.google.com/drive/folders/1p6HNLXzL12U6JSwgSqqPMwz1L3KNyHtT?usp=sharing
- No se ha modificado el código, diseño ni imágenes originales. Solo se añade este registro al README. Los resultados anteriores de este documento son históricos.
- Verificación: todas las descargas completadas y rutas cotejadas con el inventario de Drive. Captura de escritorio de `index.html`: hero, navegación y texto visibles, sin código expuesto. Evidencia: https://www.genspark.ai/api/files/s/jWOO7yO4 . La comprobación adicional por navegador de cada archivo no pudo ejecutarse por saturación del servicio; no se certifica una auditoría funcional completa ni nueva revisión móvil.
- Incidencias preexistentes conservadas: la consola registra recursos 404, incluido `js/escaparate.js`, que no está en Drive, y avisos WebGL. El README de origen ya documentaba imágenes antiguas ausentes. No se han inventado sustitutos ni corregido funcionalidades fuera de la importación solicitada.
- Funciones importadas: presentación de SOMA, servicios, portafolio, paquetes, contacto por WhatsApp y animaciones existentes. Entrada: `/` o `/index.html`; anclas `/#servicios`, `/#soma-paisaje`, `/#negocios-soma`, `/#portafolio`, `/#contacto`, `/#menus`, `/#proceso`, `/#dudas`; sin parámetros obligatorios. Utilidades originales: `/docs/comprobar-assets.html` y `/docs/verificar-stems.html`.
- Pendiente / siguiente paso recomendado: aportar los recursos referenciados que faltan en el Drive y revisar el funcionamiento antes de nuevos cambios. No se ha implementado ninguna función nueva.
- Datos y almacenamiento: archivos estáticos HTML/CSS/JS e imágenes en el repositorio; estado de interfaz en el navegador. No se han creado tablas, base de datos, API propia ni autenticación.
- Producción: no facilitada y no se ha desplegado este proyecto. Contacto público original: https://wa.me/523411786711 .

---

## Objetivo
Presentar las webs, catálogos y sistemas de SOMA, mostrar Intensity y Delizzia y facilitar una consulta por WhatsApp. Los paquetes publicados son exclusivamente para restaurantes.

## Estado actual — Montaje editorial implementado y arranque desacoplado, 18/09/2026

### Funciones implementadas
- Sustituida únicamente la apertura de `#servicios` por `#soma-paisaje`. El hero inicial, el escaparate de negocios, portafolio, contacto y paquetes no se han rediseñado.
- Composición 16:9 con los 12 WebP independientes; el prototipo no se utiliza como una imagen de fondo completa. Posiciones y tamaños compensan el aire transparente medido en los stems. Alfa medio visible ~247–252/255 en los objetos y ~232/255 en reflejos: no son objetos casi invisibles.
- Titular HTML seleccionable exacto: **Tu negocio mejor pensado.** Bodoni Moda 800 cursiva, fuente real de Google Fonts; aproximación editorial a la referencia, no identificación certificada de su tipografía.
- Arco, busto, portátil cerrado, agua, reflejos y rocas; órbita/nodo SVG, microcopy y marca HTML. Jerarquía de capas documentada en `css/soma-paisaje.css`.
- Enlaces a anclas existentes, CTA de contacto, «Descubre más» hacia `#negocios-soma`, menú nativo `details`, cierre con Escape y devolución de foco.
- Scroll con desplazamientos limitados en seis capas. Sin scroll hijacking ni movimiento del titular. Fallback estático en táctil y movimiento reducido; respeta la pausa existente del recorrido.
- Adaptación móvil vertical con titular refluido y composición/reposicionamiento independiente, no miniatura del escritorio. Objetivos principales de al menos 44 px.

### Arranque
- Verificación final sobre `index.html` real, sin QA: móvil 390×844 muestra el hero y navegación, sin cobertura permanente de carga ni código visible. Evidencia: `https://www.genspark.ai/api/files/s/8xku1OL2`. Persiste un icono de imagen antigua ausente dentro del hero, fuera de los stems del montaje.
- Retirado el script temporal que desplazaba automáticamente al bloque durante las pruebas; no se ejecutan pruebas ni saltos de scroll al abrir la web.
- La intro original se inicia en `DOMContentLoaded`, ya no en `window.onload`: no necesita esperar todas las imágenes.
- Añadidos `js/inicio-seguro.js` y `css/inicio-seguro.css`: si el cuerpo no recibe `loaded` en seis segundos desde el DOM preparado, muestra texto y navegación y retira la cobertura de carga. No reconstruye WebGL cuando falla ni evita la espera de scripts bloqueantes anteriores al DOM.
- El arranque normal se vio correctamente en escritorio después de retirar el autoscroll. No se ha reproducido el síntoma del usuario en una URL publicada, que no se ha facilitado; no se afirma diagnóstico definitivo de ese entorno.

### Archivos y rutas
- Modificados: `index.html`, `README.md`, `docs/verificar-stems.js` (añade bbox y alfa medio).
- Nuevos: `css/soma-paisaje.css`, `js/soma-paisaje.js`, `css/inicio-seguro.css`, `js/inicio-seguro.js`.
- Copia previa: `docs/antes-paisaje.html` (archivo histórico; sus rutas relativas no están adaptadas para usarse como sitio autónomo).
- Entrada: `/` o `/index.html`; sección: `/#servicios`, `/#punto-de-partida` o `/#soma-paisaje`. Destinos existentes: `/#negocios-soma`, `/#portafolio`, `/#contacto`, `/#menus`, `/#proceso`, `/#dudas`. Sin parámetros obligatorios.
- Verificador de imágenes: `/docs/verificar-stems.html`. Eliminados `js/paisaje-qa-temporal.js` y `docs/lanzar-qa-paisaje.html` al entregar.

### Checklist verificado y límites
- [x] 12/12 stems cargan; dimensiones y canal alfa medidos con Canvas.
- [x] Bodoni cargada, copy exacto, destinos internos existentes y sin overflow global en comprobación de consola a 800 px.
- [x] Menú abre; Escape cierra y restaura foco; modo estático no desplaza capas; pausa restablece transformaciones. Pruebas sintéticas, no auditoría manual completa de teclado.
- [x] Captura del sitio real a 1280 px y a 390 px: texto legible, menú cerrado, composición por capas sin fondos negros rectangulares ni código expuesto.
- [ ] Comparación exacta a 1600×900 y revisión a 768 px pendientes. Herramientas de captura disponibles con presets 1280 y 390; no se extrapolan sus resultados.
- [ ] La última captura de escritorio todavía muestra la cabecera global junto a la local. La regla de ocultación existe, pero esta interferencia visual no se da por resuelta.
- [ ] Recapturar móvil tras ajustar altura a 100svh y comprobar ambos CTA al pie: la herramienta devolvió «browserless sandbox renders are saturated on this pod» y no completó esa revisión final.
- [ ] Verificación física del parallax con ratón, movimiento reducido de sistema y fallo deliberado de WebGL/GSAP pendiente; la sesión de consola se ejecutó en modo estático.
- [ ] Persisten 404 de imágenes antiguas y `js/escaparate.js`, que no fueron adjuntados; no se han inventado archivos sustitutos. Estos errores son anteriores al nuevo bloque. Persisten avisos del renderer WebGL original.
- Evidencias: escritorio `https://www.genspark.ai/api/files/s/I1cGTJLu`, móvil `https://www.genspark.ai/api/files/s/ZCGxTMRY`; arranque sin autoscroll `https://www.genspark.ai/api/files/s/mnGATSDD`. Última captura escritorio `https://www.genspark.ai/api/files/s/swRvoqa3`.

### Datos, publicación y próximos pasos
- Modelo: HTML/CSS/JavaScript estático, coordenadas de movimiento en memoria y variables CSS. Sin tablas, base de datos, API propia, autenticación ni persistencia añadida.
- Producción: no facilitada; no se ha desplegado. Contacto público conservado: `https://wa.me/523411786711?text=...`. Fuentes externas: Google Fonts. Imágenes servidas desde `images/`, no desde Drive en tiempo de ejecución.
- Siguiente paso: resolver/verificar la duplicación de cabecera y las capturas pendientes cuando el navegador de pruebas esté disponible; ajustar fidelidad junto al usuario; completar recursos ausentes del sitio importado. No se certifica equivalencia píxel a píxel con el prototipo.

---

## Registro anterior — Originales descargados y alfa comprobado, 18/09/2026

- Descargados correctamente los **12 WebP originales** desde la carpeta de Google Drive facilitada: `https://drive.google.com/drive/folders/1b6nbC8CpqhZYOlvEAnTRECIjlmOonjt4`. Guardados en `images/` con sus nombres originales. Los cuatro WebP iniciales se actualizaron desde Drive; los ocho JPEG anteriores se conservan sin usarlos como stems.
- Inventario: `agua-superficie.webp`, `arquitectura-arco.webp`, `busto-marmol.webp`, `fondo-atmosferico.webp`, `portatil.webp`, `reflejos-rocas.webp`, `roca-flotante-superior.webp`, `roca-fragmento-derecho.webp`, `roca-fragmento-izquierdo.webp`, `rocas-centrales.webp`, `rocas-primer-plano-derecho.webp`, `rocas-primer-plano-izquierdo.webp`.
- Verificación real con navegador y Canvas: 12/12 archivos decodificados; dimensiones coinciden con el inventario curado del usuario; cielo y agua opacos; las otras diez piezas tienen píxeles de alfa cero y parcial. La mayor parte de los píxeles visibles de esas diez piezas es semitransparente, por lo que el aspecto final sobre el fondo requiere revisión durante el montaje.
- Utilidad verificable: `/docs/verificar-stems.html`, sin parámetros, con resultados de carga, dimensiones y conteos alfa. Script: `docs/verificar-stems.js`. Eliminados los archivos temporales del listado de Drive.
- Resuelto el bloqueo de descarga. Próximo paso pendiente: implementar la composición por capas en `#servicios .direccion-apertura`, con texto HTML «Tu negocio mejor pensado.», órbita, movimiento y adaptación responsive. No se ha modificado todavía el HTML/CSS/JS de la página principal ni se afirma fidelidad visual terminada.
- Entradas existentes: `/`, `/index.html`, `/#servicios`, `/#portafolio`, `/#contacto` y `/#menus`. Datos: archivos estáticos y estado de navegador; sin tablas ni API propia. Producción no facilitada; no se ha desplegado. Contacto conservado: `https://wa.me/523411786711?text=...`.

---

## Registro anterior — Preparación del rediseño por capas, 18/09/2026

- Revisados el README y el bloque `#servicios .direccion-apertura`, correspondiente a la captura del usuario. No se ha modificado HTML, CSS ni JavaScript ni el resto de la página.
- Descargados cuatro originales WebP en `images/`: `agua-superficie.webp`, `arquitectura-arco.webp`, `busto-marmol.webp` y `fondo-atmosferico.webp`. Son recursos preparatorios; aún no están enlazados en la página.
- Montaje detenido conforme a la regla del usuario de no continuar si faltan stems originales. Del resto se ven previsualizaciones en el mensaje, pero no se han recibido enlaces descargables de los originales.
- Nueva recepción: guardados mediante WriteFileFromUrl `images/portatil.jpg`, `images/reflejos-rocas.jpg`, `images/roca-flotante-superior.jpg` e `images/roca-fragmento-derecho.jpg`, según el orden y contenido de los adjuntos. El servidor confirma `image/jpeg`: estas copias no tienen canal alfa y no sustituyen a los stems transparentes para el montaje.
- Recepción completada con cuatro archivos adicionales mediante WriteFileFromUrl: `images/roca-fragmento-izquierdo.jpg`, `images/rocas-centrales.jpg`, `images/rocas-primer-plano-izquierdo.jpg` e `images/rocas-primer-plano-derecho.jpg`. El servidor también confirma `image/jpeg`. Están guardadas las doce piezas: cuatro WebP iniciales y ocho JPEG posteriores. No se han descargado previsualizaciones como originales. Queda por resolver la falta de alfa en los ocho JPEG antes del montaje por capas.
- Pendiente: implementación de composición independiente, titular HTML «Tu negocio mejor pensado.», órbita SVG, movimiento limitado al scroll, adaptación móvil y comprobaciones visuales/funcionales. No se ha generado ni sustituido ningún asset, ni se han consumido herramientas de generación.
- Siguiente paso: obtener versiones PNG/WebP con alfa de las ocho piezas recibidas como JPEG mediante enlaces directos a los archivos originales; después montar y comprobar la composición. Renombrar JPEG a PNG/WebP no recupera transparencia. La nota de QC del portátil cerrado prevalece sobre la descripción contradictoria del manifiesto.
- No se han ejecutado pruebas de render, alfa o responsive en este pase de preparación. No se afirma fidelidad visual ni implementación terminada.
- Rutas de entrada, contacto, modelo de datos y publicación sin cambios respecto a la importación documentada a continuación. No se han añadido APIs ni almacenamiento; no se ha desplegado.

---

## Registro anterior — Importación rápida, 18/09/2026

- Importados los 16 archivos de texto adjuntos y los cuatro PNG originales en un repositorio inicialmente vacío. No se ha modificado el código de los archivos importados; únicamente se añade esta nota al README.
- Organización: `index.html` y `README.md` en raíz; seis hojas en `css/`; cuatro scripts en `js/`; copias históricas, documentación anterior y comprobador de assets en `docs/`.
- Imágenes en `images/sectores/soma-evento.png`, `soma-moda.png`, `soma-producto.png` y `soma-restaurante.png`.
- Funciones importadas: presentación de SOMA, servicios, proyectos, paquetes de restaurantes, contacto contextual por WhatsApp, cursor y animaciones existentes. Importación de archivos, no certificación de funcionamiento.
- Entradas principales: `/`, `/index.html`, `/#servicios`, `/#portafolio`, `/#contacto` y `/#menus`; sin parámetros obligatorios. Utilidad importada: `/docs/comprobar-assets.html`. `docs/antes-escaparate.html` se conserva como archivo histórico, no como una página autónoma con rutas adaptadas.
- Pendiente: `index.html` referencia `js/escaparate.js`, que no se ha adjuntado. Tampoco se han recibido todas las imágenes anteriores, incluidos los trazos de marcador referenciados desde la raíz. No se han inventado sustitutos ni eliminado referencias.
- El script `js/review-temporary.js` se conserva como adjunto de revisión, sin añadirlo a la página.
- Verificación de esta importación: descargas completadas y revisión breve de rutas. Por petición del usuario no se ejecutan pruebas de navegador ni auditoría visual; los resultados documentados más abajo son históricos, no pruebas de este directorio.
- Próximo paso recomendado: aportar el script y las imágenes restantes y después revisar la página antes de realizar cambios.
- Datos: frontend estático HTML/CSS/JavaScript; no se han creado tablas, base de datos, API propia ni servicios de almacenamiento. Los estados de interacción existentes se gestionan en el navegador.
- URL pública de producción: no facilitada; no se ha desplegado. Contacto conservado: `https://wa.me/523411786711?text=...`.

---

## Registro anterior — Capitales con mayor presencia; asset pendiente de confirmación, 12/09/2026

### Completado
- Aumentados el tamaño óptico y el espacio reservado para las capitales SVG T/P de `#titulo-servicios`. Altura de caja SVG de 1em a 1.2em, ancho al 112% de la caja y ajuste de espaciado/baseline. No se cambia el tamaño de toda la frase.
- Separación entre las dos líneas ligeramente ampliada para dar espacio a las capitales, conservando fondo, copy y tarjetas.
- Cambio visual limitado a tres reglas de `css/servicios-direccion.css`.
- Retirados de `index.html` y del repositorio el script temporal `js/cursor-qa.js` que había quedado al interrumpirse el turno anterior. El cursor de producción se conserva.

### Pruebas
- Captura escritorio 1280 × 800 y móvil 390 × 844: T/P destacadas y legibles, sin colisión con U/E ni recortes del punto final. Sin overflow visible. En móvil no aparece cursor personalizado tras touch.
- Consola a 800 × 600: 19 pruebas sintéticas del cursor PASS y cuatro verificaciones adicionales PASS de ancho de las líneas y límites de los SVG.
- Persisten 404 de imágenes originales ausentes y avisos WebGL; no son una certificación de rendimiento del sitio.
- Captura escritorio: https://www.genspark.ai/api/files/s/ETCAKi74
- Captura móvil: https://www.genspark.ai/api/files/s/c1D3n7eA

### Rutas, datos y publicación
- Entradas: `/`, `/index.html`, `/#servicios` y `/#punto-de-partida`, sin parámetros nuevos. Destinos de tarjetas intactos.
- Modelo: HTML/CSS/SVG y estados JavaScript existentes en memoria; sin bases de datos, almacenamiento persistente ni API propia añadidos.
- Producción no facilitada; no se ha desplegado. Contacto existente: `https://wa.me/523411786711?text=...`.
- Objetivo del proyecto: presentar los servicios, proyectos y paquetes de SOMA y facilitar el contacto, con diseño editorial y frontend visual.

### Pendiente y siguiente paso
- Propuesta de UN asset: puntero escultórico de marfil satinado con cantos burdeos, aislado, sin texto, para un acento visual de la apertura. No está generado ni integrado.
- Solicitar confirmación antes de usar créditos. Modelo propuesto: `nano-banana-2-flash-lite`, opción ligera disponible, sin afirmar una tarifa exacta ni garantía de alfa nativo.
- Si se aprueba, solicitar PNG transparente a 1K y comprobar canal alfa real; si no se obtiene, explicar la necesidad de recorte antes de dar por terminado el asset. No aceptar un damero pintado como transparencia.
- Mantener las letras en SVG, no convertir el titular en una imagen. Verificar la composición con el asset y sus dimensiones antes de integrarlo.
- Capturas a 768/1440, pruebas de hardware real del cursor e imágenes originales siguen pendientes según el registro inferior.

---

## Registro anterior — Cursor de registro, 12/09/2026

### Funciones completadas
- Conservados el punto y aro de SOMA. Sustituido el seguimiento anterior (aro 0.1 y punto 0.5 por frame) por punto directo y aro con constante temporal de 22 ms y separación geométrica máxima de 10 px.
- Al mantener pulsado, aro y punto se posicionan juntos, sin interpolación. El arrastre nativo del navegador conserva su propio cursor.
- Aro de 34 px con cuatro marcas de registro; flecha en enlaces/controles y contracción al pulsar. SVG inline, sin imágenes, fuentes, WebGL ni librerías añadidas.
- Controlador independiente en `js/cursor.js`; estilos en `css/cursor.css`. Se retira únicamente el código del cursor del loop Three.js de `index.html`, conservando el render y parallax del hero.
- La activación depende de eventos Pointer Events de ratón, no del ancho de pantalla ni de asumir que un portátil táctil no tiene ratón. Touch y lápiz no activan el cursor.
- Puntero nativo por defecto y en formularios, contenido editable, vídeos e iframes. Se oculta el personalizado al salir, perder foco, pulsar Tab o iniciar drag nativo.
- Seguimiento directo con `prefers-reduced-motion`; sin bucle propio cuando el cursor ya está quieto u oculto. Listeners limpiados al abandonar la página, conservando compatibilidad con bfcache.
- No se han cambiado contenido comercial, tarjetas, enlaces, precios, rutas ni geometría de la página.

### Entradas, URLs y datos
- Cursor disponible en `/`, `/index.html` y todas sus anclas, sin parámetros nuevos.
- No hay modelo persistente: coordenadas y estados solo en memoria. Sin tablas, base de datos, APIs ni almacenamiento añadidos.
- Producción: no facilitada; no se ha realizado Hosted Deploy. Se conservan WhatsApp `https://wa.me/523411786711?text=...` y los demás destinos documentados más abajo.

### Verificación y límites
- Pruebas temporales sobre el `index.html` real mediante eventos sintéticos: 19 PASS en consola a 800 × 600. Incluyen activación, primera aparición, posición directa del punto, separación <=10 px, asentamiento, coincidencia al pulsar/arrastrar, liberación, hover, formulario, blur, Tab, touch, drag nativo, no cancelación de pulsación, no intercepción de clics, ausencia de transición posicional y anchura.
- Son pruebas geométricas y de estados: NO miden latencia física ratón-pantalla, FPS, selección real de texto ni sensaciones en hardware del usuario.
- Captura escritorio 1280 × 800 confirma aro, marcas y punto visibles sobre burdeos, sin código expuesto ni cambios de composición.
- Permanecen errores 404 de imágenes no importadas y avisos WebGL de la página original. No se afirma ausencia total de errores ni rendimiento global mejorado.
- El script temporal de QA se retira al entregar. No hay desplazamientos ni eventos de prueba en producción.

### Pendientes y próximos pasos
1. Probar con el ratón real de Alex: movimientos rápidos, clic mantenido, selección de texto y enlaces, tanto sobre hero como en servicios.
2. Comprobar físicamente trackpad, pantallas de alto refresco, dispositivos híbridos, movimiento reducido e iframes externos. No se certifica una auditoría integral de accesibilidad.
3. Si hace falta otro tacto, ajustar la constante de 22 ms o el límite de 10 px, sin añadir retraso al punto ni al arrastre.
4. Las imágenes originales ausentes y el relieve WebGL de la P siguen fuera del alcance de este ticket. Publicación solo a petición.

---

## Registro anterior — Primer pase tipográfico burdeos/blanco, 12/09/2026

### Objetivo y funciones completadas
Aplicar la dirección aprobada a «Tu negocio. Bien pensado.» primero como composición estática, antes de decidir el relieve WebGL.
- Apertura burdeos `#351522`, texto blanco y secundario `#E8CCD7`. Panel de borde recto limitado a la cabecera de servicios; el resto conserva el verde.
- Titular en dos líneas y mayúsculas, con Bricolage Grotesque 600 existente y dos caracteres originales T/P dibujados mediante paths SVG inline. Nombre accesible del h2: «Tu negocio. Bien pensado.».
- Retirados el subrayado, flor, anotación marginal y colofón. El metadato pasa a «Webs y sistemas a medida.»; se conservan las dos frases descriptivas y «Empezamos por lo que necesitas.».
- Copy auxiliar simplificado: «Explora los proyectos.», «Cuéntanos qué necesitas organizar.» y «Consulta los paquetes.». Cabeceras de tarjetas más descriptivas.
- Se mantienen estructura, ilustraciones, colores, enlaces y comportamiento de las tres tarjetas. Solo se adapta el tamaño/reflujo de las notas móviles al nuevo texto.
- Cambios de producción: `index.html`, `css/servicios-direccion.css` y este README. Se reemplazaron las reglas anteriores del encabezado, no se añadió otra hoja de overrides.
- Cero imágenes raster, fuentes, librerías o JavaScript de producción añadidos en este pase. No se ha implementado aún el relieve WebGL y no se ha modificado el renderer del hero.

### Rutas, URLs y datos
- `/` y `/index.html`: página principal, sin parámetros necesarios.
- `/#servicios` y `/#punto-de-partida`: apertura intervenida.
- Tarjetas: `#portafolio`, `#contacto` con `data-interes="sistema"`, y `#menus`.
- WhatsApp existente: `https://wa.me/523411786711?text=...`, con mensaje contextual. No hay API propia ni almacenamiento nuevo.
- Modelo: HTML estático, SVG inline y objeto `opciones` JavaScript existente; selección en memoria del navegador. Sin tablas, D1, login ni persistencia añadida.
- Producción: no facilitada; no se ha desplegado. Las URLs de captura de abajo son evidencias visuales, no dominios de producción.

### Verificación de este pase
Pruebas temporales sobre el `index.html` real; se retiran el script y la copia de comparación al entregar.
- Captura escritorio 1280 × 800: titular, T/P, metadatos y copy legibles, sin recortes. Se observan imágenes ausentes del hero original fuera del bloque.
- Captura móvil 390 × 844: dos líneas completas, sin desbordamientos ni solapamientos. Captura móvil adicional de las TRES tarjetas: copy e ilustraciones visibles, sin recortes.
- Consola a 800 × 600: 30 comprobaciones PASS. Incluyen comparación de fuente sin cambios de ruinas, relato, portafolio, contacto, paquetes, proceso y dudas; scripts originales intactos; destinos y clics; interés/mensaje de sistema; foco programático; nombre del h2; ausencia de ornamentos retirados; anchura; áreas táctiles y titular estático.
- Contraste calculado con luminancia sRGB: blanco sobre burdeos 16.38:1; secundario sobre burdeos 10.96:1. Ambos superan AA para texto normal. Esto no certifica el contraste del sitio entero.
- Evidencia escritorio: https://www.genspark.ai/api/files/s/qpU3VTMu
- Evidencia móvil apertura: https://www.genspark.ai/api/files/s/iBOm8z69
- Evidencia móvil tarjetas: https://www.genspark.ai/api/files/s/YS4NEms6
- La consola mantiene 404 de recursos originales no importados y avisos WebGL. No se afirma que la web esté libre de errores ni que haya mejorado su rendimiento global.
- Una segunda captura de consola no se pudo completar por saturación de la plataforma. No se contabilizan comprobaciones adicionales de esa tentativa.
- No se han simulado pulsaciones reales de Tab/Enter, lector de pantalla, fallo de fuentes o JavaScript desactivado. El foco probado es programático, no una auditoría completa de teclado.
- Herramientas de captura limitadas a 390 y 1280 px: 768 y 1440 px siguen pendientes. No se extrapolan las capturas disponibles a esos tamaños.

### Pendientes y próximos pasos
1. Revisar con Alex esta composición estática en la página real; confirmar forma y espaciado de las letras antes de añadir efectos.
2. Después de la revisión, decidir si se implementa el relieve de la P. Debe conservar un fallback vectorial, pausa fuera de pantalla y soporte de movimiento reducido; NO existe aún ese efecto ni se afirma probado.
3. Completar teclado real, lector de pantalla, movimiento reducido y capturas a 768/1440 cuando haya herramientas disponibles.
4. Resolver las imágenes ausentes del resto del proyecto antes de una evaluación de rendimiento completa. No se necesitan imágenes generadas para esta apertura.
5. Publicar solo a petición. Este cambio no implica Hosted Deploy ni modifica un dominio live.

---

## Registro histórico — Primera dirección de la apertura de servicios, 12/09/2026
El siguiente bloque describe la versión anterior; el estado vigente está arriba.

### Objetivo y funciones completadas
Pulir únicamente «Tu negocio. Bien pensado.» y sus tres llamadas a la acción con una composición editorial propia, sin depender de imágenes importadas.
- Titular con contraste entre Bricolage y Fraunces, subrayado dibujado, flor geométrica y anotación marginal en SVG inline.
- Tres tarjetas-enlace: papel editorial con ventanas web, plano azul de sistemas y menú coral de restaurantes. Cada una tiene ilustración, flecha y microinteracción propias.
- Se conserva todo el texto solicitado y los destinos existentes. La tarjeta de sistemas sigue preseleccionando el interés y preparando el mensaje de WhatsApp.
- Escritorio: tres piezas ligeramente desplazadas; móvil: tarjetas horizontales apiladas. Foco visible, SVG decorativos excluidos de accesibilidad y transiciones desactivadas con movimiento reducido o pausa del recorrido.
- Nuevos estilos en `css/servicios-direccion.css`, limitados a esta apertura. SVG embebidos en `index.html`: sin peticiones de imágenes, nuevas fuentes, librerías ni JavaScript de producción añadido para el rediseño.
- Retirada la carga de `js/review-temporary.js` desde el HTML. El archivo recibido se conserva, pero ya no causa saltos automáticos a Intensity.
- Hero, ruinas, relato de servicios y secciones siguientes no se han rediseñado.

### Entradas funcionales y datos
- `/` y `/index.html`: sitio completo, sin parámetros.
- `/#servicios`: sección; `/#punto-de-partida`: apertura rediseñada.
- Tarjetas: `#portafolio`, `#contacto` (interés `sistema`) y `#menus`.
- Modelo: contenido HTML, SVG inline y objeto JavaScript `opciones` existente. Selección en memoria del navegador, sin almacenamiento persistente ni tablas/API propias.
- URLs públicas: producción no facilitada; no se ha realizado Hosted Deploy. WhatsApp existente: `https://wa.me/523411786711?text=...`. Resto de enlaces públicos y dependencias en la documentación inferior.

### Pruebas de esta intervención
- Script temporal ejecutado sobre el `index.html` real: 18 comprobaciones PASS en consola (viewport de esa herramienta: 800 × 600): número de rutas, existencia de destinos, clic y selección de sistemas, mensaje contextual, SVG autónomos, ausencia de la carga del QA anterior, anchura de página, áreas táctiles y etiquetas accesibles. No equivalen a una auditoría exhaustiva de todo el sitio.
- Capturas de apertura en escritorio 1280 × 800 y móvil 390 × 844: título, ornamento y textos sin solapamientos ni código visible.
- Captura adicional de tarjetas en escritorio: las tres ilustraciones, etiquetas y flechas visibles y sin recortes.
- En móvil se verificaron la apertura y las tarjetas visibles en el primer encuadre. La captura adicional desplazada hasta las tres tarjetas no se pudo obtener por saturación del navegador de la plataforma (tres intentos). Queda pendiente esa verificación visual específica de la tarjeta coral en móvil; no se extrapola la captura de escritorio.
- El resto de la página sigue registrando 404 por imágenes que no se han importado y avisos WebGL del navegador de pruebas. No se declara resuelto el rendimiento global ni diagnosticada la lentitud de importación.
- El script de prueba de esta intervención se retira antes de la entrega; no se añaden desplazamientos de revisión a la navegación de producción.

### Pendientes y próximos pasos
1. Recoger feedback visual sobre esta primera propuesta. La aspiración «Awwwards» es una dirección de calidad, no un premio ni una certificación.
2. No se necesitan imágenes generadas para esta apertura. Para otras secciones, decidir entre SVG, imágenes optimizadas WebP/AVIF o recursos en un CDN público; no se ha migrado ni eliminado el resto de imágenes.
3. Resolver los recursos originales pendientes antes de evaluar la web completa. Comprobar calidad visual y medir rendimiento real tras esa decisión.
4. Completar pruebas de teclado, movimiento reducido y navegación integral; publicar solo cuando el usuario lo solicite.

---

## Registro histórico — Importación inicial sin imágenes, 12/09/2026
Las afirmaciones de este bloque corresponden a la importación inicial; los cambios posteriores se describen arriba.

Esta sección describe el estado real de este sandbox. El resto del documento es histórico y puede mencionar recursos o verificaciones que NO se han trasladado. El README recibido íntegro se conserva en `docs/README-importado.md`.

### Completado
- Descargados íntegramente los ocho adjuntos facilitados por el usuario (aproximadamente 246 KB en total).
- HTML sin modificaciones en `index.html`.
- CSS sin modificaciones en `css/editorial.css`, `css/editorial-responsive.css` y `css/recorrido.css`.
- JavaScript sin modificaciones en `js/recorrido.js`, `js/recorrido-motion.js` y `js/review-temporary.js`.
- Las rutas coinciden con las referencias del HTML. No se han sustituido imágenes, rediseñado secciones ni cambiado comportamientos.

### Verificación actual y limitaciones
- La página alcanza `body.loaded` en el navegador de pruebas.
- Capturas reales a 1280 × 800 y 390 × 844: contenido del portafolio visible, sin código fuente impreso. En móvil se observa la imagen ausente de Intensity.
- La consola registra errores HTTP 404 de recursos ausentes, avisos de precargas de imágenes y avisos de WebGL por software. No se afirma que el sitio esté libre de errores.
- `js/review-temporary.js` tiene `RUN_TESTS = false`, pero desplaza la página automáticamente al caso Intensity incluso con las pruebas desactivadas (líneas 95–100). Se conserva tal como llegó; esto explica que la vista inicial termine en el portafolio.
- No se han ejecutado pruebas interactivas exhaustivas ni validado todas las secciones. La duración del navegador de pruebas no diagnostica la lentitud de importación de la plataforma.

### Pendientes y próximos pasos
1. Importar las imágenes con sus nombres y rutas originales, incluidos los recursos de `images/` y los de la raíz. No hay imágenes locales en esta copia.
2. Decidir si se retira del HTML el script temporal de revisión para evitar el desplazamiento automático; no se ha retirado porque esta tarea es únicamente una importación fiel.
3. Revisar recursos ausentes y probar menú, contacto, demos, animaciones y diseño completo cuando estén las imágenes.
4. Publicar solo cuando lo solicite el usuario. No se ha realizado ningún despliegue.

### Entradas, URLs y datos de esta copia
- Entradas: `/` y `/index.html`, sin parámetros; anclas de secciones recogidas en la tabla histórica inferior.
- Producción: no facilitada y no desplegada desde este sandbox. API propia: ninguna.
- Objetivo y funciones: presentación de SOMA, servicios, portafolio, paquetes y preparación de contacto por WhatsApp; código importado, no certificación de todos los flujos.
- Datos: contenido estático en HTML y objetos JavaScript; selección en memoria del navegador. No se han creado tablas, bases de datos ni servicios de almacenamiento.
- Dependencias externas y enlaces públicos: véase el apartado histórico «URLs públicas y dependencias»; su disponibilidad no se ha certificado exhaustivamente.

---

## Documentación histórica recibida — NO describe íntegramente esta copia

## Estado anterior — Importación y propuesta, 12/09/2026
- Repositorio inicialmente vacío. Importados `index.html`, `css/recorrido.css` y `js/recorrido.js` sin modificar su código. CSS y JS se ubicaron en las rutas que ya referencia el HTML.
- Importadas 48 imágenes en raíz para reconstruir los recursos actuales y archivar los adjuntos restantes. Cuatro originales se conservan también en `images/`.
- Nombres de recursos reconstruidos desde las referencias del código y la correspondencia visual con los adjuntos; no se recibió un manifiesto original de imágenes. El orden de los frames de marcador y de las imágenes orbitales se asignó siguiendo el orden facilitado, por lo que no se certifica identidad binaria con el repositorio anterior.
- Referencias descargadas: `images/referencia-unleash.webp` y `images/referencia-digital-archive.webp`. Son referencias artísticas, no contenido integrado en la página.
- README recibido conservado íntegro en `docs/README-recibido.md`. Sus pruebas y afirmaciones históricas NO son verificaciones de esta importación.
- No se ha rediseñado el hero, ni el contenido bajo él. No se han generado imágenes, añadido librerías o desplegado el proyecto.
- Ticket en fase de concepto: esperar aprobación antes de programar el rediseño.

## Funcionalidades existentes importadas
- Hero Three.js r128 y GSAP 3.12.2: blob, estética PS1, imágenes orbitales y trazos animados.
- Servicios, ruinas con profundidad por capas y vuelo de lentes vinculado al scroll.
- Dos casos: Intensity y Delizzia, iframes diferidos, alternancia PC/móvil y enlaces externos.
- Contacto temprano con radios nativos de interés, ayuda contextual y mensaje editable en WhatsApp. La web prepara un enlace, no envía ni almacena una consulta.
- Paquetes para restaurantes: Estándar $5,000–$7,000 MXN; Premium $10,000–$15,000 MXN; Enterprise desde $20,000 MXN.
- Comparativa ampliable, cuatro pasos de proceso y seis preguntas frecuentes.
- Complementos QR: $25 / $60 / $89 / $500 MXN. Fotografías archivadas; no se asignan a modelos comerciales sin confirmación.
- Menú con estados ARIA, gestión de foco y Escape; radios y details nativos; reglas responsive y de movimiento reducido existentes. Son capacidades del código recibido, no una certificación completa de accesibilidad.
- La sección Nosotros no existe en esta versión. Los retratos no se han reintroducido.

## Entradas funcionales
Página única `/` o `/index.html`; sin parámetros necesarios.

| Ruta | Contenido |
| --- | --- |
| `/#servicios` | Servicios y ruinas |
| `/#portafolio` | Intensity y Delizzia |
| `/#contacto` | Selector de consulta, WhatsApp y llamada |
| `/#menus` | Paquetes de restaurantes |
| `/#comparacion-paquetes` | Comparativa desplegable |
| `/#proceso` | Pasos de contratación |
| `/#dudas` | Preguntas frecuentes |
| `/#complementos` | Soportes QR |
| `/#cierre` | Contacto final y redes |

`/#estudio` no tiene destino. Los enlaces a desplegables no los abren automáticamente en el código recibido.

## URLs públicas y dependencias
- Producción de SOMA: no facilitada; no se ha ejecutado Hosted Deploy.
- WhatsApp: `https://wa.me/523411786711?text=...`; `text` es el mensaje codificado.
- Teléfono: `tel:+523411786711`.
- Instagram: https://www.instagram.com/somascale/
- YouTube: https://youtube.com/@7_wndal1
- Intensity: https://intensitywear.store
- Delizzia: https://alexnan77.github.io/delizzia/
- Dependencias recibidas: Three.js r128, sus complementos de postprocesado, GSAP 3.12.2, Google Fonts e iconos del hero en postimg.cc.
- No se ha encontrado una carga de ScrollTrigger en las dependencias inspeccionadas. El scroll existente usa JavaScript nativo y observadores.
- API propia: ninguna.

## Archivos, modelos de datos y almacenamiento
- `index.html`: estructura, copy, precios, CSS y JavaScript originales, WebGL, menú, demos y ruinas.
- `css/recorrido.css`: estilos comerciales y responsive existentes.
- `js/recorrido.js`: objeto `opciones` con ayuda y mensajes por interés; cambios de selección, ARIA de demos y foco de menú.
- Selección en memoria del navegador; sin persistencia, tablas, D1, login o formularios almacenados.
- Imágenes en raíz: recursos del código recibido y adjuntos archivados.
- `images/`: cuatro originales de subida y dos referencias artísticas.
- `docs/README-recibido.md`: documentación histórica original, sin cambios.
- Los archivos `sitio-3.png` a `sitio-14.png` y `dali.png` contienen JPEG según la descarga; nombres conservados por compatibilidad. `sitio-1.jpg` y `sitio-2.jpg` sí usan la extensión referenciada por el código.

## Verificación de ESTA importación
- Lectura de README, CSS, JS comercial y zonas relevantes del HTML: rutas, contenido, precios, hero, recursos orbitales y scroll de ruinas.
- Captura del `index.html` real en escritorio 1280 × 800: hero y navegación visibles; sin texto de código ni imágenes rotas aparentes en el encuadre.
- Captura móvil con viewport CSS 390 × 844 (raster de mayor resolución por DPR): hero, botones y navegación visibles; sin desbordamiento aparente en el encuadre.
- Captura de consola esperando `body.loaded`: sin errores JavaScript reportados durante esa observación. Avisos de WebGL por software y GPU stall / ReadPixels en el navegador de prueba.
- El tiempo de carga del navegador de pruebas NO se usa como métrica de rendimiento de usuario.
- No se han ejecutado aquí pruebas interactivas de menú, iframes, selector, radios, teclado, FAQ o CTAs. No se certifican todavía esos flujos.
- No se ha certificado visualmente el contenido inferior, contraste AA, rendimiento, red completa, 768 px ni 1440 px. Las herramientas actuales de capturas ofrecen 390 y 1280 px, no dimensiones arbitrarias.

## Dirección propuesta — NO implementada
Concepto interno: «SOMA / trabajo a la vista». Continuidad entre las ruinas y un dossier editorial de proyectos. Materia orgánica y papel envejecido en contraste con retícula exacta, texto breve e interfaces reales.
- Conservar hero y ruinas; no sustituir shaders, orbitales, composición o tipografías globales.
- Bajo el hero: retícula de 12 columnas en escritorio, 6 en tablet y 4 en móvil. Bricolage para titulares, Fraunces para acentos e Inter para lectura y controles; sin nuevas fuentes.
- Paleta: papel #EDE6D6, tinta #13251E, negro #050507, azul #2D5BFF y acento #FF3366. Verificar contrastes antes de cerrar la implementación.
- Servicios como índice editorial; portafolio como dos fichas de proyecto con capturas reales protagonistas y demos conservadas.
- Contacto como ficha de consulta; restaurantes como tabla editorial de tres ofertas; proceso como lista secuencial; FAQ y complementos con tratamiento tipográfico y desplegables nativos.
- Scroll nativo: pocos desplazamientos de elementos decorativos, una guía sticky en escritorio, lectura y precios estáticos. Sin scroll horizontal narrativo, sin secuestro de rueda y sin iframes atrapados en escenas fijadas.
- Reutilizar assets existentes. No se necesitan imágenes generadas para este concepto; capturas reales de proyectos quedan pendientes para la fase aprobada, sin generar pruebas ficticias.
- Mantener información, condiciones y precios. Recortar eslóganes y repeticiones, no prestaciones.

## Pendientes y próximos pasos
1. Aprobar la dirección visual y el tratamiento de cada sección antes de programar.
2. Establecer una referencia visual completa del sitio inferior y probar flujos actuales antes de intervenir.
3. Implementar primero servicios → portafolio → contacto; revisar ese tramo antes de extender a oferta, proceso, FAQ y cierre.
4. Confirmar correspondencia de fotos QR antes de presentarlas como productos. No cambiar Premium a otro rango ni inventar plazos, impuestos, integraciones o resultados.
5. Capturar proyectos reales para el portafolio; mantener alternativa de enlace externo si no permiten iframe. No mostrar el panel privado de Intensity.
6. Aplicar un presupuesto incremental propuesto: sin nuevas familias tipográficas ni motores gráficos; JS adicional de motion ≤12 KB gzip, imágenes nuevas bajo el hero ≤1.2 MB en móvil, carga diferida y tamaños reservados. Son objetivos, no mediciones.
7. Validar teclado, foco, movimiento reducido, ausencia de JS, estados de carga/fallo de demo, anclas, precios, mensajes y contraste. Completar capturas a 390, 768 y 1440 cuando exista herramienta con esas dimensiones; no sustituirlas por anchos aproximados.
8. Revisar activos para producción, excluir referencias/duplicados de la carga pública innecesaria y medir LCP/CLS antes de afirmar mejoras.

## Publicación
Nada se ha desplegado. Publicación manual desde Publish; Hosted Deploy solo a petición y con aprobación del usuario. La importación en el editor no modifica ningún dominio live.
