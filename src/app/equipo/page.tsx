import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';
import { EQUIPO } from '@/lib/equipo';

export const metadata: Metadata = { title: 'Equipo' };

export default function EquipoPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="internal-hero">
        <div className="container-narrow">
          <p className="eyebrow">El equipo</p>
          <h1>Equipo</h1>
          <p className="internal-hero-dek">
            Los asuntos son abordados por un equipo jurídico, no mediante
            prácticas individuales organizadas alrededor de un único abogado.
          </p>
        </div>
      </section>

      {/* ── Perfiles ────────────────────────────────────── */}
      <section className="section-white">
        <div className="container-wide">
          <div className="team-grid">
            {EQUIPO.map((abogado) => (
              <article className="team-card" key={abogado.slug}>
                {abogado.foto ? (
                  <div className="team-photo-wrap">
                    <Image
                      src={assetPath(abogado.foto)}
                      alt={abogado.nombre}
                      width={1200}
                      height={1500}
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="team-photo"
                    />
                  </div>
                ) : (
                  <div
                    className="team-photo-wrap"
                    style={{
                      aspectRatio: '4 / 5',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--text-muted)',
                      fontSize: '0.875rem',
                    }}
                  >
                    Fotografía pendiente
                  </div>
                )}

                <p className="team-area">{abogado.area}</p>
                <h2 className="team-name">{abogado.nombre}</h2>

                {abogado.credenciales.length > 0 && (
                  <ul
                    style={{
                      margin: '0 0 0.75rem',
                      color: 'var(--slate-600)',
                      fontSize: '0.85rem',
                      lineHeight: '1.55',
                      listStyle: 'none',
                    }}
                  >
                    {abogado.credenciales.map((c) => (
                      <li key={c} style={{ marginBottom: '0.25rem' }}>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}

                {abogado.email && (
                  <p style={{ margin: '0 0 0.75rem' }}>
                    <a
                      href={`mailto:${abogado.email}`}
                      style={{
                        color: 'var(--navy-700)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                        textDecorationColor: 'var(--sand-300)',
                        fontSize: '0.85rem',
                      }}
                    >
                      {abogado.email}
                    </a>
                  </p>
                )}

                <p className="team-bio">{abogado.bio}</p>
              </article>
            ))}
          </div>

          <p
            className="text-center text-text-muted mt-12 text-sm max-w-xl mx-auto"
          >
            Los perfiles, fotos y biografías de los demás integrantes del equipo
            se completarán una vez que el estudio proporcione la información y
            autorizaciones correspondientes.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-paper text-center">
        <div className="container-narrow">
          <h2 className="section-title">¿Quiere saber quién llevaría su caso?</h2>
          <p className="section-dek" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Solicite una evaluación y le diremos exactamente qué abogado del
            equipo se haría cargo, con base en la materia y la instancia.
          </p>
          <Link href="/contacto" className="cta-primary">
            Solicitar evaluación →
          </Link>
        </div>
      </section>
    </>
  );
}
