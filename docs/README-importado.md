# SOMA — Webs y sistemas a la medida

## Objetivo
Presentar las webs, catálogos y sistemas de SOMA, mostrar Intensity y Delizzia y facilitar una consulta por WhatsApp. Los paquetes publicados son exclusivamente para restaurantes.

## Estado actual — Importación y propuesta, 12/09/2026
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
