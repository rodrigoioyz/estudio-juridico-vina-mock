// Hero del sitio: solo imagen fija.
// El video de fondo era un clip generado y parpadeaba (se midieron 14 frames
// con saltos de hasta 10.5 puntos de luma entre frames consecutivos, y el
// cliente lo confirmo incluso en una pagina aislada con el video pelado).
// Se retiro el video el 2026-10-27: el hero no usa video ni animacion.
export const HERO_MEDIA = {
  poster: '/hero/pacifico-urbano/pacifico-poster-v2.jpg',
} as const;
