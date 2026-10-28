import type { Metadata } from 'next';
import { BreadcrumbLd } from '@/components/seo/breadcrumb-ld';
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';
import { TeamPhoto } from '@/components/sections/team-photo';
import { EQUIPO } from '@/lib/equipo';

export const metadata: Metadata = {
  title: { absolute: 'Lautaro Fariña Quezada y el equipo de abogados' },
  description:
    'Lautaro Fariña Quezada, Pablo Vilches Letelier, Diego Zárate Núñez y Enzo Bullion: cuatro abogados dedicados solo al Derecho del Trabajo en Viña del Mar.',
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
                <div className="team-photo-wrap">
                  <TeamPhoto
                    abogado={abogado}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    alt={abogado.nombre}
                  />
                </div>
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
