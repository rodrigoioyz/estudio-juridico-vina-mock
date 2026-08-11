import type { Metadata } from 'next';
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
        url: '/images/fotos/vina-del-mar.jpg',
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
    images: ['/images/fotos/vina-del-mar.jpg'],
  },
  robots: {
    index: isPublicSite,
    follow: isPublicSite,
    googleBot: { index: isPublicSite, follow: isPublicSite },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: siteUrl,
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
      <body className="flex flex-col min-h-screen">
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
