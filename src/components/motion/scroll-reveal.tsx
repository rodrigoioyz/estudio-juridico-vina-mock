'use client';

import { useEffect } from 'react';

/**
 * Reveal de una sola vez para elementos .reveal-up.
 * Solo se activa si el usuario NO pidió reduced-motion: en ese caso
 * body nunca recibe .motion-ok y el contenido es visible desde el inicio.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.body.classList.add('motion-ok');
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal-up'));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.style.transitionDelay = `${Number(el.dataset.revealIndex || 0) * 50}ms`;
          el.classList.add('is-in');
          io.unobserve(el); // una sola vez
        }
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      document.body.classList.remove('motion-ok');
    };
  }, []);
  return null;
}
