# Hero video — Inicio (clip 1)

## Fuente
- `start-frame.png` = resize LANCZOS 1280x720 de `public/images/fotos/vina-del-mar.jpg` (foto real, píxeles intactos).
- Sin stills generados (stills_route=codex queda sin uso en este job).

## Prompt Veo (veo-3.1-lite-generate-preview)
> Early morning static wide shot of the Viña del Mar coastline, Chile: calm deep-blue
> Pacific water filling the lower two-thirds of frame, gentle waves breaking softly
> against rocky cliffs on the right, a white historic mansion atop the cliffs, distant
> coastal city on the green hills behind. Clear sky with soft luminous haze near the
> horizon. Cool, muted natural color palette: deep navy blues, slate grays, soft whites.
> Subtle motion only: slow water swell, faint drifting haze, small white foam on the
> rocks. Camera locked, no pan, no zoom shake. No people, no moving boats, no text,
> no logos, no watermarks. Calm, institutional, cinematic realism.

## Specs
- 16:9, 720p, ~8s (Veo Lite cobra por segundo; duración mínima por defecto 8s)
- Audio: se elimina con ffmpeg post-descarga (`-an`) — el hero va muted de todos modos
- Negative space: no aplica overlay — el video vive en la columna derecha del split
  (el texto va en HTML, nunca en píxeles de video)
- Paleta: dominante navy/slate del design-system; el dorado queda SOLO en la regla
  CSS (signature), nunca en el video

## Integración (post-aprobación)
- Reemplazar `<img>` del hero por `<video autoplay muted loop playsinline poster>`
- `poster` = start-frame actual (vina-del-mar.jpg) para LCP y fallback
- `prefers-reduced-motion`: mostrar imagen estática en vez de video
- Respaldar página actual antes de tocar page.tsx

## Costo
- 1 clip x 8s x $0.05/s (720p) = **$0.40 máximo** (cobra solo si el video se genera)
- Punto de parada: tras el clip 1, revisión visual antes de cualquier variante extra.
