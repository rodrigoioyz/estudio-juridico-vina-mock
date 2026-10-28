'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { assetPath } from '@/lib/asset-path';
import { NAV_LINKS } from '@/lib/site-config';

function isCurrentPath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container-wide header-row">
        <Link href="/" className="brand-link">
          <Image
            src={assetPath('/images/logo.png')}
            alt=""
            width={54}
            height={54}
            className="brand-mark"
            priority
          />
          <span className="brand-wordmark">
            <span>Estudio</span>
            Jurídico Laboral
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => {
            const current = isCurrentPath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${current ? ' is-current' : ''}`}
                aria-current={current ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contacto" className="header-cta">
            Solicitar evaluación
          </Link>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true" className={`menu-icon${mobileOpen ? ' is-open' : ''}`}>
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${mobileOpen ? ' is-open' : ''}`}
        aria-label="Navegación móvil"
        hidden={!mobileOpen}
      >
        <div className="container-wide mobile-nav-inner">
          {NAV_LINKS.map((link) => {
            const current = isCurrentPath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link${current ? ' is-current' : ''}`}
                aria-current={current ? 'page' : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contacto" className="header-cta mobile-cta" onClick={() => setMobileOpen(false)}>
            Solicitar evaluación
          </Link>
        </div>
      </nav>
    </header>
  );
}
