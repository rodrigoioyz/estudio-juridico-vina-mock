import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_CONFIG, PRACTICE_AREAS } from '@/lib/site-config';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { HeroMedia } from '@/components/sections/hero-media';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.location.city}`,
  description:
    'Estudio especializado exclusivamente en Derecho del Trabajo en Viña del Mar. ' +
    'Litigación, asesoría preventiva y representación de trabajadores, empresas y organizaciones sindicales.',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE_CONFIG.name} — Derecho del Trabajo en ${SITE_CONFIG.location.city}`,
    description:
      'Especialistas en Derecho del Trabajo. Litigación, asesoría preventiva y ' +
      'representación de trabajadores, empresas y sindicatos.',
    type: 'website',
    locale: 'es_CL',
    url: '/',
  },
};

const AUDIENCIAS = [
  {
    title: 'Trabajadores',
    body: 'Despido injustificado, autodespido, nulidad del despido, remuneraciones impagas y tutela de derechos fundamentales. El plazo para demandar un despido es de 60 días hábiles: evaluar el caso a tiempo es parte de la defensa.',
    cta: 'Consulte como trabajador',
    href: '/areas/terminacion-contrato',
  },
  {
    title: 'Empresas',
    body: 'Asesoría preventiva, cumplimiento normativo y defensa judicial. Evaluamos la solidez jurídica de cada decisión antes de que se transforme en contingencia.',
    cta: 'Consulte como empresa',
    href: '/empresas',
  },
  {
    title: 'Organizaciones sindicales',
    body: 'Negociación colectiva, fuero sindical, prácticas antisindicales y defensa de dirigentes, con acompañamiento en todas las etapas del procedimiento.',
    cta: 'Consulte como sindicato',
    href: '/areas/derecho-colectivo',
  },
] as const;

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      {/* ── 1. Hero — split editorial, imagen cortada en borde y fold ── */}
      <section className="hero-home">
        <div className="hero-home-text">
          <p className="eyebrow">Viña del Mar · Región de Valparaíso</p>
          <h1 className="font-display hero-title">
            Derecho del Trabajo, desde el análisis <em>hasta el tribunal</em>.
          </h1>
          <span className="signature-rule" aria-hidden="true" />
          <p className="hero-sub">
            Asesoría y litigio para trabajadores, empresas y sindicatos, con
            experiencia ante la Corte Suprema.
          </p>
          <div className="hero-ctas">
            <Link href="/contacto" className="cta-primary">
              Solicitar evaluación
            </Link>
            <Link href="/estudio" className="cta-ghost">
              Conozca el estudio
            </Link>
          </div>
          <p className="hero-trust">
            Doctrina del estudio citada por la Dirección del Trabajo.
          </p>
        </div>
        <HeroMedia />
      </section>

      {/* ── 2. Prueba — franja de trayectoria institucional ── */}
      <section className="proof-strip" aria-label="Trayectoria institucional">
        <div className="container-wide proof-strip-row">
          <span className="proof-label">Trayectoria ante</span>
          <ul className="proof-items">
            <li>Juzgados de Letras del Trabajo</li>
            <li>Corte de Apelaciones de Valparaíso</li>
            <li>Corte Suprema</li>
          </ul>
        </div>
      </section>

      {/* ── 3. Públicos — lista editorial con reglas, no tarjetas ── */}
      <section className="section-paper section-audiencias">
        <div className="container-wide">
          <h2 className="font-display section-title reveal-up" data-reveal-index={0}>¿A quién representamos?</h2>
          <p className="section-dek reveal-up" data-reveal-index={1}>
            La práctica abarca las tres posiciones de la relación laboral.
            Conocer el conflicto desde cada lado es parte de la estrategia.
          </p>
          <div className="ruled-list">
            {AUDIENCIAS.map((a, idx) => (
              <div key={a.title} className="ruled-row reveal-up" data-reveal-index={idx + 2}>
                <h3 className="font-display ruled-title">{a.title}</h3>
                <p className="ruled-body">{a.body}</p>
                <Link href={a.href} className="ruled-link">
                  {a.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Áreas — intro sticky + índice con hairlines ── */}
      <section className="section-white areas-home">
        <div className="container-wide areas-grid">
          <div className="areas-intro">
            <h2 className="font-display section-title">Áreas de práctica</h2>
            <p className="section-dek">
              Siete materias, una sola especialidad. De la asesoría preventiva
              al recurso ante la Corte Suprema.
            </p>
            <Link href="/areas" className="ruled-link">
              Vea todas las áreas →
            </Link>
          </div>
          <ul className="index-list">
            {PRACTICE_AREAS.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}`} className="index-row">
                  <span className="index-title">{area.title}</span>
                  <span className="index-desc">{area.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. Doctrina — declaración editorial ── */}
      <section className="section-white statement-section">
        <div className="container-narrow">
          <p className="eyebrow">Conocimiento que respalda</p>
          <p className="font-display statement">
            La Dirección del Trabajo ha citado la producción académica de este
            estudio en su jurisprudencia administrativa sobre remuneraciones.
          </p>
          <p className="statement-refs nums">
            Dictamen N° 3662/53 (2010) · Ordinario N° 2734/47 · Ordinario N° 457
          </p>
          <Link href="/estudio" className="ruled-link">
            Conozca el estudio →
          </Link>
        </div>
      </section>

      {/* ── 6. CTA final ── */}
      <section className="final-cta">
        <div className="container-narrow">
          <h2 className="font-display final-title">
            Su caso merece una evaluación honesta
          </h2>
          <p className="final-sub">
            Le diremos con claridad si existe un caso, qué puede obtener y cómo
            proceder. Sin compromiso.
          </p>
          <Link href="/contacto" className="cta-accent">
            Solicitar evaluación
          </Link>
        </div>
      </section>
    </>
  );
}
