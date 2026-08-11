'use client';

import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import { useEffect, useRef, useState } from 'react';

export function HeroMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 768px)');
    if (reducedMotion.matches || !desktop.matches) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;
    const idleApi = window as unknown as {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const load = () => setShouldLoadVideo(true);
        if (idleApi.requestIdleCallback) {
          idleId = idleApi.requestIdleCallback(load, { timeout: 1800 });
        } else {
          timeoutId = globalThis.setTimeout(load, 900);
        }
      },
      { rootMargin: '160px' },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeoutId !== undefined) globalThis.clearTimeout(timeoutId);
      if (idleId !== undefined) idleApi.cancelIdleCallback?.(idleId);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-home-media">
      <Image
        src={assetPath('/images/fotos/vina-del-mar.jpg')}
        alt="Costa de Viña del Mar al amanecer: el Pacífico en calma y una casona blanca sobre los acantilados"
        className="hero-fallback"
        fill
        sizes="(max-width: 1023px) 100vw, 42vw"
        priority
      />
      {shouldLoadVideo && (
        <video
          className={`hero-video${videoReady ? ' is-ready' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={assetPath('/images/fotos/vina-del-mar.jpg')}
          onCanPlay={() => setVideoReady(true)}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={assetPath('/videos/hero-vina-del-mar-12s.mp4')} type="video/mp4" />
        </video>
      )}
      <div className="hero-overlay" aria-hidden="true" />
    </div>
  );
}
