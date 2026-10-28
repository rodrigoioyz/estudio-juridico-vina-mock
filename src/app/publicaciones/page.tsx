import type { Metadata } from 'next';
import { BreadcrumbLd } from '@/components/seo/breadcrumb-ld';
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';
import articles from './articles-listing.json';

export const metadata: Metadata = {
  title: 'Publicaciones',
  description:
    'Análisis jurídico, doctrina y comentarios sobre Derecho del Trabajo, escritos por el equipo del estudio.',
  alternates: { canonical: '/publicaciones' },
  openGraph: { url: '/publicaciones' },
};

const dateFormatter = new Intl.DateTimeFormat('es-CL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export default function PublicacionesPage() {
  return (
    <>
      <BreadcrumbLd items={[{ name: 'Inicio', path: '/' }, { name: 'Publicaciones', path: '/publicaciones' }]} />
      <section className="internal-hero internal-hero-publications">
        <div className="container-narrow">
          <p className="eyebrow">Doctrina y análisis</p>
          <h1>Publicaciones</h1>
          <p className="internal-hero-dek">
            Derecho del Trabajo estudiado desde la práctica, la doctrina y los tribunales.
          </p>
        </div>
      </section>

      <section className="section-white publications-index" aria-labelledby="publicaciones-recientes">
        <div className="container-wide">
          <div className="section-heading-row">
            <div>
              <h2 id="publicaciones-recientes" className="section-title">Análisis recientes</h2>
              <p className="section-dek">
                Cuatro lecturas para comprender cómo operan las remuneraciones, la jornada y el acceso a la justicia laboral.
              </p>
            </div>
            <p className="publication-count" aria-label={`${articles.length} publicaciones`}>
              <strong>{articles.length}</strong> publicaciones
            </p>
          </div>

          <div className="publication-list">
            {articles.map((article, index) => (
              <article className="publication-entry" key={article.slug}>
                <Link href={`/publicaciones/${article.slug}`} className="publication-image-link" tabIndex={-1} aria-hidden="true">
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
        </div>
      </section>

      <section className="section-paper editorial-cta" aria-labelledby="consulta-publicaciones">
        <div className="container-narrow">
          <h2 id="consulta-publicaciones" className="section-title">Una lectura orienta. Su caso exige contexto.</h2>
          <p className="section-dek">
            Si una de estas materias se relaciona con su situación laboral, podemos evaluar los antecedentes y explicar con claridad qué vías existen.
          </p>
          <Link href="/contacto" className="cta-primary">Solicitar evaluación</Link>
        </div>
      </section>
    </>
  );
}
