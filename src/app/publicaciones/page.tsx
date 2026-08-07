import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Publicaciones',
  description:
    'Análisis jurídico, doctrina y comentarios sobre Derecho del Trabajo, escritos por el equipo del estudio.',
};

const PUBLICACIONES = [
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
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="bg-primary text-white py-20">
        <div className="container-narrow">
          <h1 className="text-white text-4xl font-bold mb-6">Publicaciones</h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Análisis jurídico, doctrina y comentarios sobre Derecho del Trabajo,
            escritos por el equipo del estudio. La práctica no solo se litiga:
            también se estudia, se escribe y se publica.
          </p>
        </div>
      </section>

      {/* ── Listado ─────────────────────────────────────── */}
      <section className="section-white">
        <div className="container-wide">
          {PUBLICACIONES.length === 0 ? (
            <p className="text-center text-text-muted py-12">
              Las publicaciones estarán disponibles próximamente.
            </p>
          ) : (
            <div className="ruled-list">
              {PUBLICACIONES.map((pub) => (
                <Link
                  key={pub.slug}
                  href={`/publicaciones/${pub.slug}`}
                  className="ruled-row no-underline"
                >
                  <div>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                      {pub.area}
                    </span>
                    <h2 className="text-lg mt-1 mb-1">{pub.title}</h2>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">{pub.excerpt}</p>
                    <time className="text-xs text-text-muted mt-1 block">{pub.date}</time>
                  </div>
                  <span className="ruled-link">Leer →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-paper text-center">
        <div className="container-narrow">
          <h2 className="section-title">¿Tiene dudas sobre alguna de estas materias?</h2>
          <p className="section-dek" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Si necesita asesoría específica sobre cualquiera de los temas tratados
            en nuestras publicaciones, no dude en contactarnos.
          </p>
          <Link href="/contacto" className="cta-primary">
            Solicitar asesoría →
          </Link>
        </div>
      </section>
    </>
  );
}
