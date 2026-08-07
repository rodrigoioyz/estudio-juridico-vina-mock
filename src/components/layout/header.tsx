'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/site-config';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="container-wide flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image
            src="/images/logo.png"
            alt={SITE_CONFIG.name}
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="text-primary font-bold text-sm leading-tight hidden sm:block">
            ESTUDIO<br />JURÍDICO LABORAL
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="bg-primary text-white text-sm px-4 py-2 rounded-md font-semibold hover:bg-primary-light transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-white px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-text-muted hover:text-primary transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="block bg-primary text-white text-center px-4 py-2 rounded-md font-semibold hover:bg-primary-light transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
}
