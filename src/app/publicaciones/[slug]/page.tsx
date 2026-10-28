import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { assetPath } from '@/lib/asset-path';
import { SITE_CONFIG, PRACTICE_AREAS } from '@/lib/site-config';
import { BreadcrumbLd } from '@/components/seo/breadcrumb-ld';
import articlesData from '../articles-data.json';

interface ArticleData {
  title: string;
  date: string;
  area: string;
  meta_title: string;
  meta_description: string;
  image: string;
  body_html: string;
  slug: string;
}

const ARTICLE_ENTRIES = Object.entries(articlesData) as [string, ArticleData][];
const ARTICLES = new Map(ARTICLE_ENTRIES);
const ARTICLE_SLUGS = new Set(ARTICLES.keys());

// Las etiquetas de área del artículo no coinciden con los títulos de
// PRACTICE_AREAS; se mapean al slug de práctica correspondiente.
const AREA_SLUG_BY_ARTICLE_AREA: Record<string, string> = {
  'Jornada Laboral': 'remuneraciones',
  Remuneraciones: 'remuneraciones',
  'Derecho Procesal Laboral': 'litigacion-recursos',
};
const dateFormatter = new Intl.DateTimeFormat('es-CL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

interface Props {
  params: Promise<{ slug: string }>;
}

function prepareArticleBody(html: string) {
  const withoutHeading = html.replace(/^<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i, '');
  const withoutInlineSchema = withoutHeading.replace(
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
    '',
  );

  const withLinks = withoutInlineSchema.replace(/href=["']\/([^"'/]+)["']/g, (match, slug: string) =>
    ARTICLE_SLUGS.has(slug) ? `href="/publicaciones/${slug}"` : match,
  );

  // Accesibilidad: un <th> sin scope no se anuncia como encabezado de columna
  return withLinks.replace(/<th(\s[^>]*)?>/gi, (m, attrs: string | undefined) =>
    attrs && /scope=/i.test(attrs) ? m : `<th scope="col"${attrs ?? ''}>`,
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.get(slug);
  if (!article) return { title: 'Publicación no encontrada', robots: { index: false } };

  const canonical = `/publicaciones/${slug}`;
  return {
    title: article.meta_title || article.title,
    description: article.meta_description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: article.title,
      description: article.meta_description,
      publishedTime: article.date,
      images: [{ url: article.image, width: 1024, height: 576, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.meta_description,
      images: [article.image],
    },
  };
}

export async function generateStaticParams() {
  return [...ARTICLES.keys()].map((slug) => ({ slug }));
}

export default async function PublicacionPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.get(slug);
  if (!article) notFound();

  const articleBody = prepareArticleBody(article.body_html);
  const canonicalUrl = `${SITE_CONFIG.url}/publicaciones/${slug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.meta_description,
    datePublished: article.date,
    dateModified: article.date,
    image: `${SITE_CONFIG.url}${article.image}`,
    mainEntityOfPage: canonicalUrl,
    author: { '@type': 'Organization', name: SITE_CONFIG.name },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/images/logo.png` },
    },
  };

  return (
    <>
      <BreadcrumbLd
        items={[
          { name: 'Inicio', path: '/' },
          { name: 'Publicaciones', path: '/publicaciones' },
          { name: article.title, path: `/publicaciones/${slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
      />
      <header className="article-header">
        <div className="container-narrow">
          <Link href="/publicaciones" className="article-back">
            <span aria-hidden="true">←</span> Publicaciones
          </Link>
          <div className="article-kicker">
            <span>{article.area}</span>
            <time dateTime={article.date}>{dateFormatter.format(new Date(article.date))}</time>
          </div>
          <h1>{article.title}</h1>
          <p>{article.meta_description}</p>
        </div>
      </header>

      <div className="article-media container-wide">
        <Image
          src={assetPath(article.image)}
          alt={`Portada del análisis: ${article.title}`}
          width={1024}
          height={576}
          sizes="(max-width: 900px) 100vw, 1024px"
          priority
        />
      </div>

      <div className="article-layout container-wide">
        <aside className="article-aside" aria-label="Información de la publicación">
          <span className="eyebrow">Análisis jurídico</span>
          <p>Publicado por el equipo de {SITE_CONFIG.name}.</p>
          <Link href="/contacto" className="ruled-link">Consultar esta materia →</Link>
          {(() => {
            const relatedArea = PRACTICE_AREAS.find(
              (a) => a.slug === AREA_SLUG_BY_ARTICLE_AREA[article.area],
            );
            return relatedArea ? (
              <Link href={`/areas/${relatedArea.slug}`} className="ruled-link">
                Ver área de práctica: {relatedArea.title} →
              </Link>
            ) : null;
          })()}
        </aside>
        <article className="article-prose" dangerouslySetInnerHTML={{ __html: articleBody }} />
      </div>

      <section className="article-cta" aria-labelledby="article-consultation">
        <div className="container-narrow">
          <p className="eyebrow">Su situación concreta</p>
          <h2 id="article-consultation">El contexto cambia el análisis.</h2>
          <p>
            Esta publicación entrega información general. Una evaluación jurídica requiere revisar
            fechas, documentos y objetivos específicos.
          </p>
          <Link href="/contacto" className="cta-accent">Solicitar evaluación</Link>
        </div>
      </section>
    </>
  );
}
