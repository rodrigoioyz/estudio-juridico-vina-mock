import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// TODO: Reemplazar con carga real de MDX desde content/publicaciones/
const PUBLICACIONES: Record<string, { title: string; date: string; area: string }> = {
  'ejemplo-articulo': {
    title: 'La regulación del sueldo en el Código del Trabajo',
    date: '2026-08-01',
    area: 'Remuneraciones',
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pub = PUBLICACIONES[slug];
  if (!pub) return { title: 'Publicación no encontrada' };
  return { title: pub.title };
}

export default async function PublicacionPage({ params }: Props) {
  const { slug } = await params;
  // eslint-disable-next-line security/detect-object-injection
  const pub = PUBLICACIONES[slug];

  if (!pub) notFound();

  return (
    <div className="container-narrow py-20">
      <Link href="/publicaciones" className="text-primary hover:underline text-sm mb-4 inline-block">
        ← Volver a Publicaciones
      </Link>
      <span className="text-xs text-primary font-semibold uppercase tracking-wide">
        {pub.area}
      </span>
      <h1 className="mt-2 mb-2">{pub.title}</h1>
      <time className="text-sm text-text-muted">{pub.date}</time>

      <article className="prose max-w-none mt-8">
        <p>
          El contenido completo de esta publicación está en preparación.
          Próximamente estará disponible el análisis completo de{' '}
          <strong>{pub.title}</strong>.
        </p>
      </article>

      <div className="mt-12 p-6 bg-surface-alt rounded-lg">
        <h2 className="text-lg mb-2">¿Tiene dudas sobre esta materia?</h2>
        <p className="text-text-muted mb-4">
          Si necesita asesoría específica sobre {pub.area.toLowerCase()}, no dude
          en contactarnos.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors"
        >
          Solicitar asesoría →
        </Link>
      </div>
    </div>
  );
}
