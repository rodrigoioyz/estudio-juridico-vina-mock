# Sistema de Diseño — Estudio Jurídico Laboral, Viña del Mar

## 1. Propósito del archivo

Archivo canónico de tokens de este proyecto. Sigue la estructura de 3 capas de ui-craft:
**primitivo → semántico → componente**. Los nombres y valores reflejan exactamente lo que está definido en `src/app/globals.css` — no hay tokens "aspiracionales". Divergencias conocidas (como `--accent` legado) se documentan explícitamente.

---

## 2. Personalidad de marca

**Clásico-institucional con calidez contenida.** El logo lo define: pluma estilográfica (tradición legal), serif en negrita con mayúsculas (autoridad), sans con tracking amplio para "ESTUDIO" (toque moderno medido), azul marino monocromático (confianza). Las 4 fotos de sección ya comparten un tratamiento coherente: luz natural, temperatura fría-neutra, saturación natural, contraste moderado-alto. La foto de Viña del Mar aporta el ancla territorial: calma, vastedad, elegancia histórica.

---

## 3. Capa 1 — Tokens primitivos (valores crudos)

### 3.1 Color — extraído de las 6 referencias

**Primarios de marca** — del logo (navy monocromático):

| Token | Hex | Origen |
|---|---|---|
| `--navy-900` | `#041750` | logo (texto principal) |
| `--navy-800` | `#0C1D55` | logo |
| `--navy-700` | `#1E2E62` | logo |
| `--steel-500` | `#747E9E` | logo (pluma, degradado) |

**Neutros fríos** — de las fotos (piedra, mar, cielo):

| Token | Hex | Origen |
|---|---|---|
| `--ink-900` | `#0F0F13` | retrato Lautaro |
| `--slate-600` | `#4E525C` | codigo-trabajo |
| `--slate-400` | `#8A8D97` | litigante |
| `--mist-200` | `#D8E0E5` | vina-del-mar |
| `--mist-300` | `#C4CDD8` | derivado — usado en hairlines del índice de áreas |
| `--paper` | `#EDEEED` | vina-del-mar (horizonte) |

**Acento cálido** — madera/cuero/dorado del lomo del Código del Trabajo (uso restrictivo, ~10%):

| Token | Hex | Origen |
|---|---|---|
| `--wood-600` | `#66533D` | retrato Lautaro |
| `--wood-400` | `#846E4C` | retrato Lautaro |
| `--sand-300` | `#C0AE8C` | retrato Lautaro |

✅ **Migrado (2026-08-07):** `--accent` legado → `--sand-300` — unificación de dorado.

| Token | Hex | Origen | Estado |
|---|---|---|---|
| `--accent` (extinto) | `#c59a3e` → `#C0AE8C` | páginas internas migradas el 2026-08-07 | Las clases `.text-accent` y `.bg-accent` ahora resuelven a `var(--sand-300)`. |

**Estado (formularios):**

| Token | Hex | Uso |
|---|---|---|
| `--red-50` | `#fef2f2` | bg error suave |
| `--red-200` | `#fecaca` | border error |
| `--red-600` | `#dc2626` | texto error |
| `--red-700` | `#b91c1c` | texto error oscuro |
| `--green-50` | `#f0fdf4` | bg success suave |
| `--green-200` | `#bbf7d0` | border success |
| `--green-700` | `#15803d` | texto success |
| `--green-800` | `#166534` | texto success oscuro |

### 3.2 Tipografía

| Token | Declarado en `:root` | Valor efectivo |
|---|---|---|
| `--font-display` | ✅ Sí | `'Libre Baskerville'`, con Georgia y serif como fallback |
| `--font-display-italic` | ✅ Sí | `'Libre Baskerville'`, con Georgia y serif como fallback |
| `--font-body` | ✅ Sí | `'Source Sans 3'`, con `system-ui` y sans-serif como fallback |

Los tokens tipográficos están declarados en `:root` y se consumen en todo el sistema editorial. El sitio no carga fuentes remotas en tiempo de ejecución: si las familias de marca no están disponibles, usa fallbacks seguros sin bloquear el render.

### 3.3 Motion

| Token | Valor | Referencia |
|---|---|---|
| `--motion-fast` | `120ms` | ui-craft motion.md |
| `--motion-base` | `200ms` | ui-craft motion.md |
| `--motion-medium` | `280ms` | ui-craft motion.md |
| `--motion-slow` | `400ms` | ui-craft motion.md |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | ui-craft motion.md |

---

## 4. Capa 2 — Tokens semánticos (alias de contexto)

Estos son los nombres **reales** que usa `globals.css`. Cada uno resuelve a un primitivo y se usa con significado contextual en el sitio.

### 4.1 Superficies

| Token | Resuelve a | Uso |
|---|---|---|
| `--surface` | `#ffffff` | fondo base del sitio |
| `--surface-alt` | `var(--paper)` | fondo alternativo (secciones `.section-paper`) |

### 4.2 Texto

| Token | Resuelve a | Uso |
|---|---|---|
| `--text` | `var(--ink-900)` | color de texto principal |
| `--text-muted` | `var(--slate-600)` | texto secundario, captions |
| `--white` | `#ffffff` | texto sobre navy o fondos oscuros |

### 4.3 Marca y acento

| Token | Resuelve a | Uso |
|---|---|---|
| `--primary` | `var(--navy-800)` | headings (h1–h4), header, CTAs, focus ring |
| `--primary-light` | `var(--navy-700)` | gradients, hover states |
| `--accent` (extinto) | — | Migrado. `.text-accent` y `.bg-accent` ahora usan `var(--sand-300)` directamente. |

### 4.4 Borde

| Token | Resuelve a | Uso |
|---|---|---|
| `--border` | `var(--mist-200)` | borde base del sistema |

### 4.5 Proporción aprobada

60% neutros claros (`--paper`/`--mist-200`) · 30% navy/ink · 10% acento cálido.

---

## 5. Capa 3 — Tokens de componente

**Esta capa no está extraída a tokens en el front actual.** Los valores se usan directamente desde primitivos o semánticos en cada clase CSS. Por ejemplo:

| Clase en globals.css | Valor directo | Equivalente semántico |
|---|---|---|
| `.hero-title` | `color: var(--navy-900)` | primitivo directo |
| `.hero-sub` | `color: var(--slate-600)` | primitivo directo |
| `.cta-primary` | `background: var(--navy-800)` | `var(--primary)` |
| `.cta-accent` | `background: var(--sand-300)` | primitivo directo |
| `.cta-accent:hover` | `color-mix(in srgb, var(--sand-300), white 8%)` | derivado del token, sin hex paralelo |
| `.signature-rule` | `background: var(--sand-300)` | primitivo directo |
| `.ruled-link` | `color: var(--navy-800)` | `var(--primary)` |
| `.final-cta` | `background: var(--navy-900)` | primitivo directo |
| `.final-title` | `color: var(--white)` | `var(--white)` |

La extracción de estos a tokens de componente (ej. `--button-primary-bg`, `--hero-text`) queda reservada para cuando exista reutilización que la justifique. Hasta entonces, el front usa directamente las capas 1 y 2 y evita una capa especulativa.

### 5.1 Componentes editoriales vigentes

- **Header institucional:** logo, wordmark, navegación activa con regla arena y CTA único “Solicitar evaluación”.
- **Hero de inicio:** split 7/5, fotografía LCP y video diferido tras idle/viewport; sin video en móvil o reduced motion.
- **Tres públicos:** lista regida por hairlines; no tarjetas homogéneas.
- **Índice de áreas:** introducción sticky e índice editorial.
- **Publicaciones:** lista numerada con imagen 16:9, metadata y lectura jerarquizada.
- **Artículo:** hero navy, imagen editorial, aside sticky y cuerpo limitado a 68ch.
- **Formulario:** grilla de dos columnas en desktop, estados accesibles y bloque de confidencialidad.
- **Firma visual:** regla arena en momentos de jerarquía; el acento cálido sigue limitado a aproximadamente 10%.

---

## 6. Tratamiento de imagen (reglas canónicas)

Lo que las 6 referencias ya hacen — codificado como norma:

- ✅ **Temperatura fría-neutra**; dominante azul en todas las fotos
- ✅ **Saturación natural, ligeramente reducida** (−5 a −10%); nada vibrante
- ✅ **Contraste moderado-alto** con sombras profundas pero con detalle
- ✅ **Luz natural** (ventana, día); profundidad de campo selectiva en retratos/detalle
- ✅ Madera/cuero como única fuente de calidez permitida
- ❌ Evitar: filtros sepia/cálidos, HDR agresivo, look de estudio artificial, stock corporativo sonriente genérico
- **Heroes con texto encima:** overlay `--navy-900` sobre imagen o video, conservando espacio negativo a la izquierda
- **Video del hero:** nunca lleva texto, logos ni la regla arena en píxeles; la firma sigue en HTML/CSS

---

## 7. Tono de voz

Serio, claro, institucional. Trato de **usted**. Sin jerga legal innecesaria ni hype comercial. La cercanía la aporta el territorio (Viña del Mar) y la persona, no el lenguaje informal.

---

## 8. Fuente de verdad y uso

Este archivo es la **fuente de verdad canónica de tokens** del proyecto. No existe un `.ui-craft/tokens.md` paralelo. Los tokens aquí documentados reflejan exactamente lo declarado en `src/app/globals.css`. Todo cambio en uno debe reflejarse en el otro.

---

## 9. Observación honesta

La foto de Lautaro es **en un dojo de kendo** (armadura, placa CHILE/FARIÑA), no un retrato corporativo. Transmite disciplina y lado humano — funciona muy bien para una sección de confianza/"quién te representa" — pero si el sitio necesita un headshot formal de abogado, ese es un gap a decidir por ti. No lo cambié ni lo di por hecho; solo lo registro.
