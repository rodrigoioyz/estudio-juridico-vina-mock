# Hero «Pacífico urbano en capas» — Diseño

Fecha: 2026-10-27  
Estado: aprobado por Rodrigo  
Proyecto: Estudio Jurídico Laboral de Viña del Mar

## 1. Objetivo

Reemplazar la dirección costera/turística rechazada por un hero audiovisual editorial que represente el territorio real del estudio:

- Viña del Mar como identidad principal;
- Valparaíso como contexto regional;
- ciudad, arquitectura, cerros e infraestructura antes que playa;
- movimiento sobrio, sin apariencia hotelera, inmobiliaria o de banco de imágenes;
- espacio estable para la propuesta de valor y la llamada a la acción.

El hero se integrará en la portada completa acordada sin incorporar al equipo en ninguna sección de Inicio.

## 2. Dirección aprobada

El concepto es **Pacífico urbano en capas**: un video silencioso de aproximadamente 12 segundos construido con fotografías reales, conectado mediante disoluciones, máscaras arquitectónicas y movimientos Ken Burns lentos. Valparaíso abre como contexto; Viña cierra y domina.

Principios:

- paleta fría de hormigón, azul petróleo y turquesa;
- gradación consistente entre cámaras y épocas;
- movimiento editorial contenido;
- ningún texto o logotipo incrustado en el video;
- titular y CTA como HTML accesible;
- degradado estable bajo el texto;
- sin playa protagonista, resort, postal, dron inmobiliario ni atardecer saturado.

## 3. Activos aprobados

Solo se utilizarán archivos CC0 1.0 o liberados mundialmente al dominio público por el titular. Pexels queda excluido.

### 3.1 Viña urbana — estero Marga Marga

- Archivo: `Al borde del estero.jpg`
- Autor: Mitchele Vidal Castro
- Fecha: 2023-12-16
- Resolución: 1006 × 567
- Licencia: CC0 1.0 Universal
- Evidencia: <https://commons.wikimedia.org/wiki/File:Al_borde_del_estero.jpg>
- Uso: plano principal y final; paneo lateral, upscale moderado y gradación fría.

### 3.2 Viña arquitectónica — Edificio Copacabana

- Archivo: `Edificio Copacabana - Viña del Mar.jpg`
- Autor: Mitchele Vidal Castro
- Fecha: 2020-05-30
- Resolución: 607 × 607
- Licencia: CC0 1.0 Universal
- Evidencia: <https://commons.wikimedia.org/wiki/File:Edificio_Copacabana_-_Vi%C3%B1a_del_Mar.jpg>
- Uso: detalle breve con máscara parcial; nunca fullscreen sostenido.

### 3.3 Viña industrial — Muelle Vergara

- Archivo: `Muelle Vergara - Viña del Mar.jpg`
- Autor: Mitchele Vidal Castro
- Fecha: 2023-12-23
- Resolución: 341 × 607
- Licencia: CC0 1.0 Universal
- Evidencia: <https://commons.wikimedia.org/wiki/File:Muelle_Vergara_-_Vi%C3%B1a_del_Mar.jpg>
- Uso: microplano de infraestructura de 1–1,2 segundos, con recorte cerrado.

### 3.4 Reñaca Alto — territorio entre árboles

- Archivo: `Entre Arboles.jpg`
- Autor: Davidcromero
- Fecha: 2024-03-20
- Resolución: 1024 × 768
- Licencia: CC0 1.0 Universal
- Evidencia: <https://commons.wikimedia.org/wiki/File:Entre_Arboles.jpg>
- Uso: transición territorial mediante acercamiento lento.

### 3.5 Valparaíso arquitectónico

- Archivo: `Valparaiso 406.jpg`
- Autor: Andrés Leiva
- Resolución: 1936 × 1288
- Licencia: liberación mundial al dominio público, con permiso subsidiario para cualquier propósito sin condiciones
- Evidencia: <https://commons.wikimedia.org/wiki/File:Valparaiso_406.jpg>
- Uso: arquitectura y densidad urbana; paneo horizontal y menor saturación.

### 3.6 Valparaíso nocturno

- Archivo: `080722-Valparaíso at Night.jpg`
- Autor: Karora
- Fecha: 2008-07-22
- Resolución: 6402 × 1709
- Licencia: liberación mundial al dominio público, con permiso subsidiario para cualquier propósito sin condiciones
- Evidencia: <https://commons.wikimedia.org/wiki/File:080722-Valpara%C3%ADso_at_Night.jpg>
- Uso: apertura panorámica y enlace del bucle; barrido horizontal lento.

## 4. Storyboard aprobado

| Tiempo | Plano | Movimiento y transición |
|---:|---|---|
| 0,0–2,2 s | Valparaíso nocturno | Barrido panorámico lento. |
| 1,9–4,0 s | Arquitectura porteña | Disolución mediante máscara diagonal. |
| 3,7–5,5 s | Reñaca Alto entre árboles | Acercamiento lento. |
| 5,2–6,5 s | Maquinaria del Muelle Vergara | Capa vertical breve. |
| 6,2–8,0 s | Edificio Copacabana | Movimiento ascendente. |
| 7,7–12,0 s | Edificios del estero Marga Marga | Paneo lateral y permanencia final en Viña. |

Los tiempos pueden ajustarse para evitar cortes bruscos, pero no el orden territorial: **Valparaíso contextualiza; Viña cierra y domina**.

## 5. Composición del hero

- Video a cobertura completa con `object-fit: cover`.
- Degradado azul petróleo protegiendo el tercio izquierdo.
- Titular y CTA fuera del video y por encima del medio.
- Contraste válido durante todos los planos.
- Recorte móvil que preserve arquitectura y territorio, sin convertir mar o cielo en protagonistas.
- La navegación no cambia en este alcance.

## 6. Producción y formatos

- duración objetivo: 12 segundos;
- 1920 × 1080;
- reproducción automática, silenciosa, en bucle y `playsInline`;
- WebM y MP4, sin pista de audio;
- tasa de bits contenida;
- poster estático derivado del plano final de Viña;
- `prefers-reduced-motion: reduce` muestra solo el poster;
- contenido y CTA completamente funcionales sin video y sin JavaScript.

Todos los medios vivirán en `public/` y usarán el mecanismo de rutas base existente. Deben funcionar en GitHub Pages bajo subdirectorio, exportación estática y `public_html/` sin servidor Node.

## 7. Expediente de licencias

La implementación conservará un manifiesto durable con:

- nombre local;
- URL de la página de Commons;
- URL de descarga;
- autor, fecha, dimensiones y licencia exacta;
- fecha de consulta;
- SHA-256 del original;
- transformaciones aplicadas.

También se guardará evidencia textual o visual de cada declaración de licencia. Aunque no se exige atribución, se conservarán créditos y fuentes por trazabilidad.

## 8. Activos excluidos

- Pexels #33970146 y #5468007;
- video costero anterior;
- `public/images/fotos/vina-del-mar.jpg`;
- marcas de agua de 500px;
- fechas digitales impresas;
- escenas con humo de incendios;
- Reloj de Flores;
- playa o bañistas como protagonistas;
- CC BY, CC BY-SA o dominio público solo en EE. UU.;
- personas reconocibles, marcas o carteles prominentes;
- imágenes generadas con ChatGPT o ComfyUI.

## 9. Rendimiento y accesibilidad

- poster disponible inmediatamente;
- video no bloquea contenido principal ni LCP;
- carga diferida compatible con el hero actual;
- contraste WCAG AA sobre fotogramas representativos;
- sin audio;
- poster bajo movimiento reducido;
- semántica, foco visible y CTA por teclado preservados.

## 10. Estrategia de pruebas

Se seguirá RED → GREEN → REFACTOR.

### RED

Crear pruebas o verificaciones que fallen mientras:

- el hero siga usando el video rechazado;
- falten poster, WebM o MP4;
- no exista fallback de movimiento reducido;
- las rutas fallen bajo el `basePath` de GitHub Pages;
- el equipo aparezca en Inicio;
- el manifiesto no contenga los seis activos y campos obligatorios.

### GREEN

Implementar la composición y el componente mínimos que reproduzcan el storyboard.

### REFACTOR

Eliminar solo duplicación introducida por este hero; no refactorizar componentes adyacentes.

### Verificación final

- tests, typecheck, lint y build;
- exportación estática;
- respuestas HTTP reales de MP4, WebM y poster;
- bucle completo en escritorio y móvil;
- `prefers-reduced-motion`;
- legibilidad sobre fotogramas representativos;
- peso y carga;
- ausencia del equipo en Inicio;
- manifiesto y hashes de originales.

## 11. Alcance

### Incluido

- descarga de seis originales;
- expediente de licencias y hashes;
- composición del video;
- WebM, MP4 y poster;
- integración en hero;
- fallback de movimiento reducido;
- verificación estática, móvil y escritorio.

### Excluido

- cambio de logo;
- equipo en Inicio;
- generación con IA;
- reutilización del hero rechazado;
- rediseño de interiores;
- publicación directa en producción;
- cambios de contenido no aprobados;
- reproductores o dependencias innecesarias.

## 12. Criterios de aceptación

- [ ] El video usa exclusivamente los seis activos aprobados.
- [ ] Valparaíso contextualiza y Viña domina el cierre.
- [ ] No hay playa protagonista ni estética turística, hotelera o inmobiliaria.
- [ ] El bucle dura aproximadamente 12 segundos sin saltos perceptibles.
- [ ] Titular y CTA son HTML y permanecen legibles.
- [ ] Existen MP4, WebM y poster funcionales.
- [ ] Movimiento reducido muestra el poster.
- [ ] No aparece el equipo en Inicio.
- [ ] Funciona bajo GitHub Pages y exportación estática.
- [ ] Existe manifiesto con fuentes, licencias, autores, dimensiones, fecha y hashes.
- [ ] Tests, typecheck, lint, build y revisión visual terminan correctamente.
- [ ] No se publica en producción sin aprobación posterior explícita.

## 13. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Resolución limitada de tres imágenes | Planos breves o capas parciales; poster desde la toma principal con tratamiento controlado. |
| Lectura turística | Priorizar arquitectura e infraestructura y aplicar gradación fría común. |
| Cambios de luminosidad | Degradado persistente y pruebas de contraste. |
| Rendimiento | Duración y bitrate limitados, WebM/MP4, poster inmediato y carga diferida. |
| Desaparición de evidencia de licencia | Conservar copia, metadatos, fecha y hash. |
| Recorte móvil pierde identidad | Definir puntos focales y validar a 390 × 844. |
