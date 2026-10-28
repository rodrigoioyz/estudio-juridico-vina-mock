import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_CONFIG, PRACTICE_AREAS } from '@/lib/site-config';
import { EQUIPO } from '@/lib/equipo';
import { assetPath } from '@/lib/asset-path';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { HeroMedia } from '@/components/sections/hero-media';
import { PUBLICACIONES as articles } from '@/lib/publicaciones';
import { FaqBlock, faqJsonLd } from '@/components/sections/faq-block';
import { FAQ_HOME } from '@/lib/faq';
import {
  HOME_HERO,
  HOME_PRUEBA,
  HOME_TRABAJADORES,
  HOME_SECUNDARIO,
  AREA_PROBLEMAS,
  HOME_AREAS_INTRO,
  HOME_TRABAJAMOS,
} from '@/lib/home-content';
import { TeamPhoto } from '@/components/sections/team-photo';

export const metadata: Metadata = {
  title: { absolute: 'Abogado laboral en Viña del Mar | Estudio Jurídico' },
  description:
    'Estudio dedicado solo al Derecho del Trabajo en Viña del Mar. Más de 600 juicios. ' +
    'Honorarios por resultas: paga cuando recibe su dinero. Consulta gratuita.',
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
          <p className="eyebrow">{HOME_HERO.eyebrow}</p>
          <h1 className="font-display hero-title">
            {HOME_HERO.titulo} <em>{HOME_HERO.tituloEnfasis}</em>
          </h1>
          <span className="signature-rule" aria-hidden="true" />
          <p className="hero-sub">{HOME_HERO.bajada}</p>
          <div className="hero-ctas">
            <Link href={HOME_HERO.ctaPrimario.href} className="cta-primary">
              {HOME_HERO.ctaPrimario.label}
            </Link>
            <Link href={HOME_HERO.ctaSecundario.href} className="cta-ghost">
              {HOME_HERO.ctaSecundario.label}
            </Link>
          </div>
        </div>
        <HeroMedia />
        <ul className="hero-proof" aria-label="Trayectoria del estudio">
          {HOME_PRUEBA.map((item) => (
            <li key={item.detalle}>
              <span className="hero-proof-title nums">{item.titulo}</span>
              <span className="hero-proof-detail">{item.detalle}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 2a. El estudio — texto del sitio antiguo (a cargo de Lautaro) ── */}
      <section className="section-paper section-paper--cierre" aria-labelledby="estudio-intro-home">
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

      {/* ── 2a-bis. Banda panorámica — pausa editorial de la ciudad ── */}
      <figure className="city-band">
        <Image
          src={assetPath('/images/ciudad/valparaiso-nocturno.jpg')}
          alt="Vista nocturna de Viña del Mar y Valparaíso desde el cerro"
          width={1600}
          height={428}
          sizes="100vw"
          className="city-band-img"
        />
        <figcaption className="city-band-caption">
          <span className="container-wide">Viña del Mar · Región de Valparaíso</span>
        </figcaption>
      </figure>

      {/* ── 3. Públicos — lista editorial con reglas, no tarjetas ── */}
      <section className="section-paper section-audiencias">
        <div className="container-wide">
          <p className="eyebrow reveal-up" data-reveal-index={0}>{HOME_TRABAJADORES.eyebrow}</p>
          <h2 className="font-display section-title reveal-up" data-reveal-index={1}>
            {HOME_TRABAJADORES.titulo}
          </h2>
          <div className="ruled-list">
            <div className="ruled-row reveal-up" data-reveal-index={2}>
              <p className="ruled-body">{HOME_TRABAJADORES.body}</p>
              <div className="hero-ctas" style={{ marginTop: '1.75rem', marginBottom: 0 }}>
                <Link href={HOME_TRABAJADORES.cta.href} className="cta-primary">
                  {HOME_TRABAJADORES.cta.label}
                </Link>
                <Link href={HOME_TRABAJADORES.ctaSecundario.href} className="cta-ghost">
                  {HOME_TRABAJADORES.ctaSecundario.label}
                </Link>
              </div>
            </div>
          </div>
          <p className="audiencias-secundario reveal-up" data-reveal-index={3}>
            {HOME_SECUNDARIO.texto}{' '}
            <Link href={HOME_SECUNDARIO.cta.href} className="ruled-link">
              {HOME_SECUNDARIO.cta.label} →
            </Link>
          </p>
        </div>
      </section>

      {/* ── 4. Áreas — intro sticky + índice con hairlines ── */}
      <section className="section-white areas-home">
        <div className="container-wide areas-grid">
          <div className="areas-intro">
            <h2 className="font-display section-title">{HOME_AREAS_INTRO.titulo}</h2>
            <p className="section-dek">{HOME_AREAS_INTRO.dek}</p>
            <Link href={HOME_AREAS_INTRO.cta.href} className="ruled-link">
              {HOME_AREAS_INTRO.cta.label} →
            </Link>
          </div>
          <ul className="index-list">
            {PRACTICE_AREAS.map((area) => {
              const problema = AREA_PROBLEMAS[area.slug];
              return (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="index-row index-row--area">
                    <span className="index-problem">{problema?.problema ?? area.title}</span>
                    <span className="index-tech">{problema?.tecnico ?? area.title}</span>
                  </Link>
                </li>
              );
            })}
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

          <div className="team-grid team-grid--four">
            {EQUIPO_DESTACADO.map((abogado) => (
              <article className="team-card" key={abogado.slug}>
                <Link
                  href="/equipo"
                  className="team-photo-wrap"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <TeamPhoto
                    abogado={abogado}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
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

      {/* ── 6b. Cómo trabajamos — bloque único ── */}
      <section className="section-white section-white--cierre" aria-labelledby="trabajamos-home">
        <div className="container-wide">
          <div className="areas-grid">
            <div className="areas-intro">
              <p className="eyebrow">{HOME_TRABAJAMOS.eyebrow}</p>
              <h2 id="trabajamos-home" className="font-display section-title">
                {HOME_TRABAJAMOS.titulo}
              </h2>
              <p className="section-dek">{HOME_TRABAJAMOS.dek}</p>
              <Link href={HOME_TRABAJAMOS.cta.href} className="ruled-link">
                {HOME_TRABAJAMOS.cta.label} →
              </Link>
            </div>
            <div className="index-list">
              {HOME_TRABAJAMOS.puntos.map((punto) => (
                <div className="index-row" key={punto.titulo}>
                  <span className="index-title">{punto.titulo}</span>
                  <span className="index-desc">{punto.body}</span>
                </div>
              ))}
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

      {/* ── 7b. Preguntas frecuentes ── */}
      <section className="section-paper" aria-labelledby="faq-home">
        <div className="container-narrow">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd(FAQ_HOME)).replace(/</g, '\\u003c'),
            }}
          />
          <FaqBlock faq={FAQ_HOME} id="faq-home" standalone />
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
