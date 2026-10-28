import type { Metadata } from 'next';
import { BreadcrumbLd } from '@/components/seo/breadcrumb-ld';
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';
import { EQUIPO } from '@/lib/equipo';

export const metadata: Metadata = {
  title: 'Equipo',
  description:
    'Los abogados del Estudio Jurídico Laboral de Viña del Mar: especialistas en Derecho del Trabajo con formación en la PUCV, UAI y UNAB.',
  alternates: { canonical: '/equipo' },
  openGraph: { url: '/equipo' },
};

const [FUNDADOR, ...RESTO] = EQUIPO;

export default function EquipoPage() {
  return (
    <>
      <BreadcrumbLd items={[{ name: 'Inicio', path: '/' }, { name: 'Equipo', path: '/equipo' }]} />
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

      {/* ── Fundador destacado: retrato grande + formación + publicaciones ── */}
      {FUNDADOR && (
        <section className="section-white">
          <div className="container-wide">
            <div className="founder-grid">
              <div className="founder-photo">
                {FUNDADOR.foto && (
                  <Image
                    src={assetPath(FUNDADOR.foto)}
                    alt={FUNDADOR.nombre}
                    width={1200}
                    height={1500}
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className="founder-img"
                  />
                )}
              </div>
              <div className="founder-copy">
                <p className="founder-area">{FUNDADOR.area}</p>
                <h2 className="founder-name">{FUNDADOR.nombre}</h2>

                <ul className="founder-cred">
                  {FUNDADOR.credenciales.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>

                {FUNDADOR.email && (
                  <p className="founder-email">
                    <a href={`mailto:${FUNDADOR.email}`}>{FUNDADOR.email}</a>
                  </p>
                )}

                {FUNDADOR.linkedin && (
                  <a
                    className="li-link"
                    href={FUNDADOR.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${FUNDADOR.nombre}`}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                    <span>LinkedIn</span>
                  </a>
                )}

                <p className="founder-bio">{FUNDADOR.bio}</p>

                {FUNDADOR.publicaciones && FUNDADOR.publicaciones.length > 0 && (
                  <div className="founder-pubs">
                    <p className="founder-pubs-label">Publicaciones</p>
                    <ol>
                      {FUNDADOR.publicaciones.map((p) => (
                        <li key={p.titulo}>
                          <strong>{p.titulo}</strong>
                          <span>
                            {p.medio} · {p.anio}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Resto del equipo ────────────────────────────── */}
      <section className="section-paper">
        <div className="container-wide">
          <div className="team-grid">
            {RESTO.map((abogado) => (
              <article className="team-card" key={abogado.slug}>
                {abogado.foto ? (
                  <div className="team-photo-wrap">
                    <Image
                      src={assetPath(abogado.foto)}
                      alt={abogado.nombre}
                      width={1200}
                      height={1500}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="team-photo"
                    />
                  </div>
                ) : (
                  <div className="team-photo-wrap team-photo--placeholder" aria-hidden="true">
                    {abogado.nombre.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                  </div>
                )}
                <p className="team-area">{abogado.area}</p>
                <h2 className="team-name">{abogado.nombre}</h2>
                <ul className="team-cred">
                  {abogado.credenciales.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                {abogado.email && (
                  <p className="team-email">
                    <a href={`mailto:${abogado.email}`}>{abogado.email}</a>
                  </p>
                )}

                {abogado.linkedin && (
                  <a
                    className="li-link li-link--sm"
                    href={abogado.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${abogado.nombre}`}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                    <span>LinkedIn</span>
                  </a>
                )}
                <p className="team-bio">{abogado.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="final-cta">
        <div className="container-narrow">
          <h2 className="font-display final-title">¿Quiere saber quién llevaría su caso?</h2>
          <p className="final-sub">
            Solicite una evaluación y le diremos exactamente qué abogado del
            equipo se haría cargo, con base en la materia y la instancia.
          </p>
          <Link href="/contacto" className="cta-accent">
            Solicitar evaluación →
          </Link>
        </div>
      </section>
    </>
  );
}
