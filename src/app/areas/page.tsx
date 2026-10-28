import type { Metadata } from 'next';
import Link from 'next/link';
import { PRACTICE_AREAS } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Áreas de Práctica',
  description:
    'Siete áreas de especialización exclusiva en Derecho del Trabajo: término de contrato, remuneraciones, tutela, relación laboral, colectivo, litigación y accidentes.',
  alternates: { canonical: '/areas' },
  openGraph: { url: '/areas' },
};

export default function AreasPage() {
  return (
    <>
      {/* ── Hero editorial ─────────────────────────── */}
      <section className="section-white" style={{ paddingBottom: '3rem' }}>
        <div className="container-wide">
          <h1 className="section-title">Áreas de Práctica</h1>
          <p className="section-dek">
            Siete áreas de especialización exclusiva en Derecho del Trabajo.
            No ofrecemos familia, civil, penal ni otras materias: todo lo que
            hacemos es laboral.
          </p>
        </div>
      </section>

      {/* ── Índice editorial con servicios por área ── */}
      <section className="section-paper" style={{ paddingTop: '3rem' }}>
        <div className="container-wide">
          <div className="index-list">
            {PRACTICE_AREAS.map((area) => (
              <div key={area.slug} className="area-block">
                <Link href={`/areas/${area.slug}`} className="index-row no-underline">
                  <span className="index-title">{area.title}</span>
                  <span className="index-desc">{area.description}</span>
                </Link>
                {area.servicios && area.servicios.length > 0 && (
                  <ul className="area-services">
                    {area.servicios.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="section-white text-center">
        <div className="container-narrow">
          <h2 className="section-title">¿No encuentra su materia?</h2>
          <p className="section-dek" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Si su caso no encaja exactamente en una de estas áreas, consulte
            igual. La práctica laboral frecuentemente combina más de una materia
            en un mismo conflicto.
          </p>
          <Link href="/contacto" className="cta-primary">
            Solicitar evaluación →
          </Link>
        </div>
      </section>
    </>
  );
}
