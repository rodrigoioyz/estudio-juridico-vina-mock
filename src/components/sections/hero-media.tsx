import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import { HERO_MEDIA } from '@/lib/hero-media';

/**
 * Hero del home: imagen fija.
 *
 * Sin video y sin animacion, a proposito. El clip de fondo era video generado
 * y parpadeaba entre frames; se retiro el 2026-10-27. Si algun dia vuelve un
 * video, debe ser material estable y comprobado antes de publicarlo.
 */
export function HeroMedia() {
  return (
    <div className="hero-home-media">
      <Image
        src={assetPath(HERO_MEDIA.poster)}
        alt=""
        aria-hidden="true"
        className="hero-fallback"
        fill
        sizes="100vw"
        priority
        style={{ animation: 'none' }}
      />
      <div className="hero-media-tint" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
    </div>
  );
}
