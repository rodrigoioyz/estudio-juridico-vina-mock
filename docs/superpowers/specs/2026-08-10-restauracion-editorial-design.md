# Restauración editorial integral — Estudio Jurídico Laboral

Fecha: 2026-08-10
Estado: aprobado conceptualmente por Rodrigo

## 1. Objetivo

Recuperar y elevar la identidad institucional-editorial del sitio sin alterar el contenido jurídico ni convertirlo en una estética corporativa genérica. La experiencia debe permitir que una persona identifique en menos de 30 segundos si entra como trabajador, empresa o sindicato y llegue con confianza a una evaluación de su caso.

## 2. Dirección creativa

**Craft Read:** sitio jurídico editorial para trabajadores, empresas y sindicatos; lenguaje institucional; navy, papel y regla arena; variance 6; firma visual: regla arena y fotografía territorial de Viña del Mar.

Se conserva el sistema aprobado:

- Clásico-institucional con calidez contenida.
- Navy como autoridad, papel frío como superficie y arena como único acento.
- Serif editorial en titulares y Source Sans 3 para lectura.
- Fotografía real con temperatura fría-neutra.
- Movimiento contenido, funcional y compatible con `prefers-reduced-motion`.
- Registro verbal en español neutro y trato de usted.

No se generarán imágenes nuevas ni se usarán servicios de pago.

## 3. Alcance funcional

### 3.1 SEO y metadatos

- Generar el sitemap desde las rutas institucionales, áreas y los cuatro artículos reales.
- Eliminar `/publicaciones/ejemplo-articulo` y cualquier enlace roto.
- Añadir canonical y `openGraph.url` deterministas a cada página.
- Garantizar `og:image`, Twitter Card, favicon e iconos básicos.
- Usar dominio público en metadatos de producción y `noindex` automático en localhost/staging.
- Usar fechas editoriales reales en `lastModified`, no la hora de cada solicitud.
- Mantener un único `robots` coherente en páginas 404.

### 3.2 Contacto y confianza

- Ocultar teléfono y WhatsApp mientras sigan siendo marcadores no validados.
- Excluir teléfono falso del JSON-LD.
- Mantener email y formulario como canales visibles.
- Añadir `required`, `autocomplete`, `aria-invalid`, errores asociados y foco en el primer error.
- Sanitizar valores interpolados en el correo HTML.
- Mantener rate limit, validación Zod y reCAPTCHA existentes.

### 3.3 Publicaciones

- Listar los cuatro artículos reales desde una sola fuente de datos.
- Mantener el contenido jurídico sin cambios sustantivos.
- Mejorar jerarquía visual, metadatos, fechas legibles, imagen destacada y CTA final.
- Migrar imágenes de contenido a `next/image` cuando no comprometa el HTML editorial.

### 3.4 Rendimiento y seguridad

- Cambiar el hero de `preload="auto"` a una estrategia que priorice poster/LCP y difiera el video.
- Mantener el video solo para escritorio y sin audio.
- Eliminar overflow horizontal en todos los breakpoints.
- Aplicar caché larga al video versionado desde configuración de Next.js.
- Actualizar dependencias vulnerables de forma controlada, sin `npm audit fix --force` ciego.
- Evitar upgrades mayores que rompan Next.js 15 salvo necesidad comprobada.

## 4. Arquitectura visual

### 4.1 Navegación

- Header editorial compacto, sticky, con logo legible y CTA principal “Solicitar evaluación”.
- Estado activo visible sin depender solo del color.
- Menú móvil accesible con `aria-expanded`, `aria-controls`, cierre al navegar y objetivos táctiles de 44 px.
- Enlace “Saltar al contenido” y `id="contenido-principal"` en el landmark principal.

### 4.2 Home

- Hero split editorial con texto a la izquierda y fotografía/video a la derecha.
- Máximo cuatro elementos de texto en el hero; jerarquía inequívoca H1 → CTA.
- Regla arena como única firma visual.
- Tres puertas de entrada claramente diferenciadas por contenido, no por tarjetas genéricas.
- Prueba institucional, áreas de práctica y CTA final con familias de layout distintas.
- Sin scroll horizontal, sin motion ornamental y sin bloques uniformes de apariencia generada.

### 4.3 Páginas internas

- Hero interno sobrio y consistente, con mejor ritmo vertical.
- Anchos de lectura y jerarquía editorial adecuados.
- Componentes de contacto y prueba tratados como superficies de apoyo, no cajas repetitivas.
- Footer claro, legal y orientado a navegación/contacto.

### 4.4 Sistema de diseño

`docs/design-system.md` seguirá siendo la única fuente canónica. Se reconciliará con `globals.css`:

- tokens primitivos → semánticos → componente;
- declaración real de fuentes;
- escala fluida de tipografía y espaciado;
- foco visible, targets táctiles, radios y sombras deliberados;
- sin `transition: all`;
- hover motion solo bajo `(hover: hover) and (pointer: fine)`.

## 5. Estrategia de pruebas

Se aplicará TDD para los cambios de comportamiento:

1. Test que falla porque el sitemap contiene una ruta inexistente.
2. Implementación dinámica del sitemap y verificación verde.
3. Test de configuración que falla si expone teléfono/WhatsApp marcador.
4. Implementación para ocultarlos y verificación verde.
5. Tests del formulario para campos requeridos y datos de contacto seguros.
6. Prueba de sanitización del correo HTML.

Validación final:

- `npm run test`
- `npm run typecheck`
- build limpio con `.next` y `node_modules/.cache` eliminados
- `npm audit --audit-level=high`
- rastreo de todas las URLs del sitemap
- verificación visual real en móvil, tablet y escritorio
- consola del navegador sin errores
- 0 overflow horizontal
- headings, landmarks, foco y formulario accesibles

## 6. Restricciones y protección de contenido

- No modificar el fondo jurídico de los cuatro artículos.
- No sobrescribir ni descartar los cambios no comprometidos existentes.
- No inventar teléfono, WhatsApp, dirección precisa, testimonios, cifras ni credenciales.
- No crear una segunda fuente de tokens paralela.
- No introducir Tailwind, librerías visuales nuevas ni animación pesada.
- No declarar éxito sin build, pruebas, rutas y revisión visual ejecutadas.

## 7. Criterios de aceptación

- Todas las URLs del sitemap responden 200.
- Los cuatro artículos aparecen en `/publicaciones` y tienen metadata completa.
- No hay marcadores `XXXX`, `.local` ni URLs localhost en una build de producción configurada.
- La home y páginas internas no tienen overflow horizontal en 390, 768, 1280 y 1440 px.
- El formulario tiene semántica accesible y feedback asociado.
- El sitio conserva la identidad editorial aprobada y la regla arena como firma única.
- No hay más de un H1 por página ni saltos de heading.
- El sitio sigue disponible en `http://localhost:3000` tras la validación.
- Se entrega SHA256 de los archivos principales modificados.
