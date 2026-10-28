// Hero del sitio: imagen fija + video de fondo.
//
// El video sale de clip1.mp4 (material crudo de Coder), NO del montaje de 12 s
// anterior: ese montaje mezclaba noche y dia y tenia 25 frames con saltos de
// luma de hasta 14 puntos (eso era el parpadeo). clip1 es estable:
// luma 162.00-163.15, salto maximo entre frames 0.52, cero saltos > 1.
//
// El loop se cierra fundiendo 1.2 s con el primer frame congelado y anadiendo
// ese mismo frame al final: la costura mide 1.149/255, o sea un frame normal
// de movimiento (0.93). Sin parpadeo y sin salto visible.
export const HERO_MEDIA = {
  poster: '/hero/pacifico-urbano/pacifico-poster-v2.jpg',
  sources: [
    {
      src: '/hero/pacifico-urbano/pacifico-hero-v3.mp4',
      type: 'video/mp4',
    },
  ],
} as const;
