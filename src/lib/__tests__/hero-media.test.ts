import { describe, expect, it } from 'vitest';
import { HERO_MEDIA } from '../hero-media';

// El hero es SOLO imagen desde 2026-10-27: el video de fondo se retiro porque
// el clip generado parpadeaba entre frames (ver Kai_Learning_Log).
const EXPECTED_HERO_MEDIA = {
  poster: '/hero/pacifico-urbano/pacifico-poster-v2.jpg',
};

const REJECTED_MEDIA = /hero-vina-del-mar-12s|vina-del-mar\.jpg|costero|pexels|unsplash/i;

describe('contrato de medios del hero Pacífico urbano', () => {
  it('define exactamente el poster aprobado y ningun video', () => {
    expect(HERO_MEDIA).toEqual(EXPECTED_HERO_MEDIA);
    expect(JSON.stringify(HERO_MEDIA)).not.toMatch(REJECTED_MEDIA);
    expect(JSON.stringify(HERO_MEDIA)).not.toMatch(/\.(mp4|webm)/i);
  });
});
