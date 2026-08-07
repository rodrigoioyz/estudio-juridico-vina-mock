import type { Metadata } from 'next';
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/site-config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

// Display serif del logo (design-system.md §3). 700 no tiene cursiva real en
// Libre Baskerville: la instancia itálica va en variable separada para que el
// énfasis en titulares use cursiva verdadera, no sintética.
const displayFont = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const displayFontItalic = Libre_Baskerville({
  weight: '400',
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-display-italic',
  display: 'swap',
});

// Body humanista (aprobado por Rodrigo, reemplaza a Inter como body).
const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.location.city}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: SITE_CONFIG.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-CL"
      className={`${displayFont.variable} ${displayFontItalic.variable} ${bodyFont.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
