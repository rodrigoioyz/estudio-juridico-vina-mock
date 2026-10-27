import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/contact-form';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Solicite una evaluación de su caso laboral. Atención en Viña del Mar y en todo Chile.',
  alternates: { canonical: '/contacto' },
  openGraph: { url: '/contacto' },
};

export default function ContactoPage() {
  const { contact } = SITE_CONFIG;

  return (
    <>
      <section className="internal-hero contact-hero">
        <div className="container-narrow">
          <p className="eyebrow">Primer paso</p>
          <h1>Conversemos sobre su situación laboral.</h1>
          <p className="internal-hero-dek">
            Comparta los antecedentes esenciales. Le responderemos con claridad sobre los próximos pasos posibles.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container-wide contact-layout">
          <div className="contact-form-column">
            <ContactForm />
          </div>

          <aside className="contact-information" aria-labelledby="contact-information-title">
            <p className="eyebrow">Información práctica</p>
            <h2 id="contact-information-title">Atención desde Viña del Mar</h2>
            <p className="contact-information-dek">
              Reuniones presenciales en Viña del Mar y por videollamada para personas y organizaciones de otras regiones de Chile.
            </p>

            <dl className="contact-details">
              <div>
                <dt>Dirección</dt>
                <dd>{contact.address}</dd>
              </div>
              <div>
                <dt>Correo</dt>
                <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
              </div>
              <div>
                <dt>Teléfonos</dt>
                <dd>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  <br />
                  <a href={`tel:${contact.phoneSecondary}`}>{contact.phoneSecondary}</a>
                </dd>
              </div>
              <div>
                <dt>Horario</dt>
                <dd>{contact.schedule}</dd>
              </div>
            </dl>

            <div className="confidentiality-note">
              <span aria-hidden="true">§</span>
              <p>
                La información enviada se trata de forma confidencial. El contacto inicial no constituye aceptación del caso ni genera una relación abogado-cliente.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
