import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/contact-form';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Solicite una evaluación de su caso laboral. Atención en Viña del Mar y todo Chile.',
};

export default function ContactoPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="bg-primary text-white py-20">
        <div className="container-narrow">
          <h1 className="text-white text-4xl font-bold mb-6">Contacto</h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Complete el formulario y le responderemos con una evaluación honesta
            de su caso. Sin compromiso.
          </p>
        </div>
      </section>

      {/* ── Formulario + Info ────────────────────────────── */}
      <section className="section-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <ContactForm />
            </div>

            {/* Info de contacto */}
            <div className="lg:pl-8">
              <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Información de contacto</h2>

              <div className="space-y-4 text-text-muted" style={{ marginTop: '2rem' }}>
                <div>
                  <strong className="text-text">Dirección:</strong>
                  <br />
                  Viña del Mar, Región de Valparaíso, Chile
                </div>

                <div>
                  <strong className="text-text">Teléfono:</strong>
                  <br />
                  <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-primary">
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>

                <div>
                  <strong className="text-text">WhatsApp:</strong>
                  <br />
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +{SITE_CONFIG.contact.whatsapp}
                  </a>
                </div>

                <div>
                  <strong className="text-text">Email:</strong>
                  <br />
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-primary">
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>

                <div>
                  <strong className="text-text">Horario:</strong>
                  <br />
                  Lunes a viernes, 9:00 – 18:00 hrs
                </div>
              </div>

              <div className="mt-8 p-6 bg-surface-alt rounded-lg">
                <h3 className="text-lg mb-2">Atención en todo Chile</h3>
                <p className="text-text-muted text-sm">
                  Atendemos de forma presencial en Viña del Mar y también por
                  videollamada para clientes en otras regiones del país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
