import type { Metadata } from 'next';
import { assetPath } from '@/lib/asset-path';
import { SITE_CONFIG } from '@/lib/site-config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const siteUrl = SITE_CONFIG.url;
const isGitHubPagesDemo = process.env.NEXT_PUBLIC_GITHUB_PAGES_DEMO === 'true';
const isPublicSite = !isGitHubPagesDemo && /^https:\/\//.test(siteUrl) && !/localhost|127\.0\.0\.1/.test(siteUrl);

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.location.city}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: SITE_CONFIG.name,
    url: '/',
    images: [
      {
        url: assetPath('/images/fotos/vina-del-mar.jpg'),
        width: 1536,
        height: 1024,
        alt: 'Costa de Viña del Mar al amanecer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [assetPath('/images/fotos/vina-del-mar.jpg')],
  },
  robots: {
    index: isPublicSite,
    follow: isPublicSite,
    googleBot: { index: isPublicSite, follow: isPublicSite },
  },
  icons: {
    icon: assetPath('/icon.png'),
    apple: assetPath('/apple-icon.png'),
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${siteUrl}/#legalservice`,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: siteUrl,
  priceRange: '$$',
  ...(SITE_CONFIG.social.facebook ? { sameAs: [SITE_CONFIG.social.facebook] } : {}),
  image: `${siteUrl}/images/logo.png`,
  email: SITE_CONFIG.contact.email,
  ...(SITE_CONFIG.contact.phone ? { telephone: SITE_CONFIG.contact.phone } : {}),
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE_CONFIG.location.city,
    addressRegion: SITE_CONFIG.location.region,
    addressCountry: 'CL',
  },
  areaServed: { '@type': 'Country', name: 'Chile' },
  knowsAbout: [
    'Derecho del Trabajo',
    'Terminación del Contrato de Trabajo',
    'Remuneraciones',
    'Derechos Fundamentales',
    'Relación Laboral',
    'Derecho Colectivo',
    'Litigación y Recursos',
    'Accidentes Laborales',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <body
        className="flex flex-col min-h-screen"
        style={{ '--internal-hero-background': `url("${assetPath('/images/fotos/codigo-trabajo.jpg')}")` } as React.CSSProperties}
      >
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <Header />
        <main id="contenido-principal" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
