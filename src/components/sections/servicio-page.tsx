import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbLd } from '@/components/seo/breadcrumb-ld';
import { PRACTICE_AREAS, SITE_CONFIG } from '@/lib/site-config';
import type { Servicio } from '@/lib/servicios/tipos';

/** Metadata de una página de servicio, con title absoluto para esquivar el sufijo. */
export function metadataServicio(servicio: Servicio): Metadata {
  return {
    title: { absolute: servicio.metaTitle },
    description: servicio.metaDescription,
    alternates: { canonical: servicio.path },
    openGraph: {
      url: servicio.path,
      title: servicio.metaTitle,
      description: servicio.metaDescription,
    },
  };
}

/** JSON-LD de preguntas frecuentes. Solo se emite cuando la FAQ es visible. */
function faqJsonLd(servicio: Servicio) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: servicio.faq.map((item) => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
    })),
  };
}

export function ServicioContenido({ servicio }: { servicio: Servicio }) {
  const area = PRACTICE_AREAS.find((a) => a.slug === servicio.areaSlug);

  const migas = [
    { name: 'Inicio', path: '/' },
    ...(servicio.breadcrumbPadre
      ? [{ name: servicio.breadcrumbPadre.label, path: servicio.breadcrumbPadre.href }]
      : []),
    { name: servicio.h1, path: servicio.path },
  ];

  return (
    <>
      <BreadcrumbLd items={migas} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(servicio)).replace(/</g, '\\u003c'),
        }}
      />

      <section className="internal-hero">
        <div className="container-narrow">
          <p className="eyebrow">{servicio.eyebrow}</p>
          <h1>{servicio.h1}</h1>
          <p className="internal-hero-dek">{servicio.dek}</p>
          {area && (
            <p className="servicio-area">
              Área de práctica:{' '}
              <Link href={`/areas/${area.slug}`} className="ruled-link">
                {area.title}
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="section-white">
        <div className="container-narrow">
          <div className="prose max-w-none">
            {servicio.secciones.map((seccion) => (
              <div key={seccion.titulo} className="servicio-seccion">
                <h2 className="text-xl">{seccion.titulo}</h2>
                {seccion.parrafos.map((parrafo) => (
                  <p key={parrafo.slice(0, 40)}>{parrafo}</p>
                ))}
                {seccion.lista && (
                  <ul>
                    {seccion.lista.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="servicio-faq" aria-labelledby="faq-servicio">
            <h2 id="faq-servicio">Preguntas frecuentes</h2>
            <dl>
              {servicio.faq.map((item) => (
                <div key={item.pregunta} className="servicio-faq-item">
                  <dt>{item.pregunta}</dt>
                  <dd>{item.respuesta}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="servicio-cierre">
            <h2>¿Necesita evaluar su caso?</h2>
            <p>
              La primera consulta es gratuita y sin compromiso. Revise su situación con un abogado
              del estudio antes de decidir el siguiente paso.
            </p>
            <div className="servicio-cierre-acciones">
              <Link href="/contacto" className="cta-primary">
                Solicitar evaluación gratuita
              </Link>
              <Link href="/honorarios" className="cta-ghost">
                Cómo cobramos
              </Link>
            </div>
          </div>

          {servicio.relacionados.length > 0 && (
            <nav className="servicio-relacionados" aria-labelledby="relacionados">
              <h2 id="relacionados">Siga leyendo</h2>
              <ul>
                {servicio.relacionados.map((enlace) => (
                  <li key={enlace.href}>
                    <Link href={enlace.href} className="ruled-link">
                      {enlace.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <p className="servicio-nota">
            Este contenido es información general sobre la legislación chilena y no constituye
            asesoría jurídica para un caso concreto. {SITE_CONFIG.name} atiende en Viña del Mar y
            por videollamada.
          </p>
        </div>
      </section>
    </>
  );
}
