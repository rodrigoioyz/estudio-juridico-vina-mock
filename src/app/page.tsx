import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_CONFIG, PRACTICE_AREAS } from '@/lib/site-config';
import { EQUIPO } from '@/lib/equipo';
import { assetPath } from '@/lib/asset-path';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { HeroMedia } from '@/components/sections/hero-media';
import articles from './publicaciones/articles-listing.json';

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
    images: [
      {
        url: '/images/fotos/vina-del-mar.jpg',
        width: 1200,
        height: 675,
        alt: 'Costa de Viña del Mar al amanecer',
      },
    ],
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

const METRICAS = [
  { value: '10+', label: 'años de trayectoria en litigación laboral' },
  { value: '600+', label: 'juicios laborales en los que ha intervenido el estudio' },
  { value: '3', label: 'dictámenes de la Dirección del Trabajo que citan su doctrina' },
  { value: '1', label: 'especialidad exclusiva: Derecho del Trabajo' },
] as const;

const EQUIPO_DESTACADO = EQUIPO.slice(0, 4);

const dateFormatter = new Intl.DateTimeFormat('es-CL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

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

      {/* ── 2. Cifras de prueba — banda de mínimos históricos ── */}
      <section className="metrics-band" aria-label="Trayectoria institucional">
        <div className="container-wide metrics-grid">
          {METRICAS.map((m) => (
            <div key={m.value}>
              <p className="metric-value nums">{m.value}</p>
              <p className="metric-label">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2a. El estudio — texto del sitio antiguo (a cargo de Lautaro) ── */}
      <section className="section-paper" aria-labelledby="estudio-intro-home">
        <div className="container-narrow">
          <p className="eyebrow">El estudio</p>
          <h2 id="estudio-intro-home" className="section-title">
            Un estudio dedicado exclusivamente al Derecho del Trabajo
          </h2>
          <div className="prose max-w-none" style={{ marginTop: '1.5rem' }}>
            <p>
              Somos un Estudio Jurídico dedicado de manera exclusiva al Derecho del
              Trabajo. Este Estudio está a cargo de{' '}
              <strong>Lautaro Fariña Quezada</strong>, abogado de la Pontificia
              Universidad Católica de Valparaíso y Magíster en Derecho del Trabajo
              por la Universidad de Talca y la Universidad de Valencia (España).
            </p>
            <p>
              Nuestra área de litigación es exclusivamente el Derecho Laboral, y
              llevamos más de una década litigando en distintos tribunales del país
              en esta materia, especialmente en la V Región y la Región
              Metropolitana.
            </p>
          </div>
          <Link href="/estudio" className="ruled-link">
            Conozca el estudio →
          </Link>
        </div>
      </section>

      {/* ── 2b. OFRECEMOS — 6 ítems del sitio antiguo ── */}
      <section className="offers-section" aria-labelledby="ofrecemos-home">
        <div className="container-wide">
          <h2 id="ofrecemos-home" className="offers-title">Lo que ofrecemos</h2>
          <ul className="offers-grid">
            <li className="offers-item">Profesionales con experiencia</li>
            <li className="offers-item">Estudio Jurídico exclusivo laboral</li>
            <li className="offers-item">Consulta gratuita</li>
            <li className="offers-item">Atención personalizada</li>
            <li className="offers-item">No cobros por adelantado</li>
            <li className="offers-item">Pago sólo por juicio ganado</li>
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

      {/* ── 5. Equipo destacado — foto + especialidad + bio ── */}
      <section className="section-white team-feature" aria-labelledby="equipo-destacado">
        <div className="container-wide">
          <div className="section-heading-row">
            <div>
              <h2 id="equipo-destacado" className="font-display section-title">El equipo</h2>
              <p className="section-dek">
                Cada asunto lo aborda un equipo jurídico, no una práctica
                individual. Conozca quiénes llevan los casos.
              </p>
            </div>
          </div>

          <div className="team-grid">
            {EQUIPO_DESTACADO.map((abogado) => (
              <article className="team-card" key={abogado.slug}>
                <Link
                  href="/equipo"
                  className="team-photo-wrap"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {abogado.foto ? (
                    <Image
                      src={assetPath(abogado.foto)}
                      alt=""
                      width={1200}
                      height={1500}
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="team-photo"
                    />
                  ) : (
                    <span className="team-photo team-photo--placeholder" aria-hidden="true">
                      {abogado.nombre.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                    </span>
                  )}
                </Link>
                <p className="team-area">{abogado.area}</p>
                <h3 className="team-name">{abogado.nombre}</h3>
                <p className="team-bio">{abogado.bio}</p>
                <Link href="/equipo" className="ruled-link team-link">
                  Conozca el equipo →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Doctrina — declaración editorial ── */}
      <section className="section-paper statement-section">
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

      {/* ── 6b. Compromiso + honorarios ── */}
      <section className="section-white" aria-labelledby="compromiso-home">
        <div className="container-wide">
          <div className="areas-grid">
            <div className="areas-intro">
              <h2 id="compromiso-home" className="font-display section-title">Un compromiso claro</h2>
              <p className="section-dek">
                Nuestros clientes están informados de cada paso con anticipación
                y participan plenamente en la toma de decisiones.
              </p>
              <Link href="/honorarios" className="ruled-link">
                Conozca nuestro sistema de honorarios →
              </Link>
            </div>
            <div className="index-list">
              <div className="index-row">
                <span className="index-title">Honorarios por resultas</span>
                <span className="index-desc">
                  Solo cobramos si ganamos su juicio: un porcentaje de lo obtenido,
                  sin cobros por adelantado.
                </span>
              </div>
              <div className="index-row">
                <span className="index-title">Informado en cada paso</span>
                <span className="index-desc">
                  Le informamos con anticipación y usted participa en las decisiones
                  relevantes de su causa.
                </span>
              </div>
              <div className="index-row">
                <span className="index-title">Consulta sin costo</span>
                <span className="index-desc">
                  Solicite una evaluación de su caso. Le diremos con claridad si
                  existe un caso y qué puede obtener.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Publicaciones recientes — feed editorial ── */}
      <section className="section-white" aria-labelledby="publicaciones-home">
        <div className="container-wide">
          <div className="section-heading-row">
            <div>
              <h2 id="publicaciones-home" className="font-display section-title">Análisis recientes</h2>
              <p className="section-dek">
                Doctrina y comentarios sobre remuneraciones, jornada y acceso a
                la justicia, escritos por el equipo.
              </p>
            </div>
            <p className="publication-count" aria-label={`${articles.length} publicaciones`}>
              <strong>{articles.length}</strong> publicaciones
            </p>
          </div>

          <div className="publication-list">
            {articles.slice(0, 3).map((article, index) => (
              <article className="publication-entry" key={article.slug}>
                <Link
                  href={`/publicaciones/${article.slug}`}
                  className="publication-image-link"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={assetPath(article.image)}
                    alt=""
                    width={1024}
                    height={576}
                    sizes="(max-width: 767px) 100vw, 34vw"
                    className="publication-image"
                  />
                </Link>
                <div className="publication-copy">
                  <div className="publication-meta">
                    <span>{article.area}</span>
                    <time dateTime={article.date}>{dateFormatter.format(new Date(article.date))}</time>
                  </div>
                  <h3>
                    <Link href={`/publicaciones/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p>{article.excerpt}</p>
                  <Link href={`/publicaciones/${article.slug}`} className="ruled-link" aria-label={`Leer análisis: ${article.title}`}>
                    Leer análisis <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <span className="publication-number nums" aria-hidden="true">0{index + 1}</span>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/publicaciones" className="ruled-link">
              Ver todas las publicaciones →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. CTA final ── */}
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
