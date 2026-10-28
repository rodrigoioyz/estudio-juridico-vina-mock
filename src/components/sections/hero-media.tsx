'use client';

import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import { HERO_MEDIA } from '@/lib/hero-media';
import { useEffect, useState } from 'react';
import type { SyntheticEvent } from 'react';

export function HeroMedia() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  /*
   * El `loop` nativo vacía y rellena el buffer al reiniciar (comportamiento
   * documentado en Chrome y Firefox), y ese relleno es el salto que se ve
   * antes de que el ciclo vuelva a empezar. Reencuadramos a mano en `ended`:
   * el video nunca llega a "terminar", así que no hay reinicio de buffer.
   */
  const handleEnded = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    video.currentTime = 0;
    void video.play();
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 768px)');
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const cancelPendingLoad = () => {
      if (timeoutId !== undefined) globalThis.clearTimeout(timeoutId);
      timeoutId = undefined;
    };

    const syncVideoPolicy = () => {
      cancelPendingLoad();
      if (reducedMotion.matches || !desktop.matches) {
        setShouldLoadVideo(false);
        setVideoReady(false);
        return;
      }

      timeoutId = globalThis.setTimeout(() => setShouldLoadVideo(true), 900);
    };

    syncVideoPolicy();
    reducedMotion.addEventListener('change', syncVideoPolicy);
    desktop.addEventListener('change', syncVideoPolicy);

    return () => {
      reducedMotion.removeEventListener('change', syncVideoPolicy);
      desktop.removeEventListener('change', syncVideoPolicy);
      cancelPendingLoad();
    };
  }, []);

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
      />
      {shouldLoadVideo && (
        <video
          className={`hero-video${videoReady ? ' is-ready' : ''}`}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={assetPath(HERO_MEDIA.poster)}
          onCanPlay={() => setVideoReady(true)}
          onEnded={handleEnded}
          aria-hidden="true"
          tabIndex={-1}
        >
          {HERO_MEDIA.sources.map((source) => (
            <source key={source.type} src={assetPath(source.src)} type={source.type} />
          ))}
        </video>
      )}
      <div className="hero-media-tint" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
    </div>
  );
}
