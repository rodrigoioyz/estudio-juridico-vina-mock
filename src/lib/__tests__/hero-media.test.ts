import { describe, expect, it } from 'vitest';
import { HERO_MEDIA } from '../hero-media';

const EXPECTED_HERO_MEDIA = {
  poster: '/hero/pacifico-urbano/pacifico-urbano-poster.jpg',
  sources: [
    {
      src: '/hero/pacifico-urbano/pacifico-urbano.webm',
      type: 'video/webm',
    },
    {
      src: '/hero/pacifico-urbano/pacifico-urbano.mp4',
      type: 'video/mp4',
    },
  ],
};

const REJECTED_MEDIA = /hero-vina-del-mar-12s|vina-del-mar\.jpg|costero|pexels|unsplash/i;

describe('contrato de medios del hero Pacífico urbano', () => {
  it('define exactamente el poster y las fuentes WebM y MP4 aprobadas en ese orden', () => {
    expect(HERO_MEDIA).toEqual(EXPECTED_HERO_MEDIA);
    expect(JSON.stringify(HERO_MEDIA)).not.toMatch(REJECTED_MEDIA);
  });
});
