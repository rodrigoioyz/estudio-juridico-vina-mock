import { describe, expect, it } from 'vitest';
import { HERO_MEDIA } from '../hero-media';

// El video del hero sale de clip1.mp4 (material crudo), no del montaje de 12 s
// que parpadeaba. Un solo MP4: h264 es universal y el WebM pesaba mas.
const EXPECTED_HERO_MEDIA = {
  poster: '/hero/pacifico-urbano/pacifico-poster-v2.jpg',
  sources: [
    {
      src: '/hero/pacifico-urbano/pacifico-hero.mp4',
      type: 'video/mp4',
    },
  ],
};

const REJECTED_MEDIA = /hero-vina-del-mar-12s|vina-del-mar\.jpg|costero|pexels|unsplash|pacifico-urbano\.mp4|pacifico-plat/i;

describe('contrato de medios del hero Pacífico urbano', () => {
  it('define el poster aprobado y un unico MP4 derivado de clip1', () => {
    expect(HERO_MEDIA).toEqual(EXPECTED_HERO_MEDIA);
    expect(JSON.stringify(HERO_MEDIA)).not.toMatch(REJECTED_MEDIA);
  });
});
