import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Publicaciones' };

// TODO: Reemplazar con carga real desde content/publicaciones/
const PUBLICACIONES_EJEMPLO = [
  {
    slug: 'ejemplo-articulo',
    title: 'La regulación del sueldo en el Código del Trabajo',
    date: '2026-08-01',
    excerpt:
      'Análisis de los elementos que configuran el concepto de sueldo en la legislación laboral chilena y su interpretación por la Dirección del Trabajo.',
    area: 'Remuneraciones',
  },
];

export default function PublicacionesPage() {
  return (
    <div className="container-wide py-20">
      <h1 className="text-center mb-4">Publicaciones</h1>
      <p className="text-center text-text-muted mb-12 max-w-xl mx-auto">
        Análisis jurídico, doctrina y comentarios sobre Derecho del Trabajo,
        escritos por el equipo del estudio.
      </p>

      {PUBLICACIONES_EJEMPLO.length === 0 ? (
        <p className="text-center text-text-muted py-12">
          Las publicaciones estarán disponibles próximamente.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PUBLICACIONES_EJEMPLO.map((pub) => (
            <Link
              key={pub.slug}
              href={`/publicaciones/${pub.slug}`}
              className="block border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                {pub.area}
              </span>
              <h2 className="text-lg mt-2 mb-2">{pub.title}</h2>
              <p className="text-text-muted text-sm mb-3">{pub.excerpt}</p>
              <time className="text-xs text-text-muted">{pub.date}</time>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
