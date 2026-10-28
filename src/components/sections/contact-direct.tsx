import { SITE_CONFIG } from '@/lib/site-config';
import { CONTACTO_COPY, MAILTO_URL, telUrl } from '@/lib/contacto';

/**
 * Modo "direct": no hay backend que reciba el formulario, así que se ofrecen
 * las vías que sí funcionan: correo y teléfono. Todo el texto viene de
 * lib/contacto.ts.
 */
export function ContactoDirecto() {
  const copy = CONTACTO_COPY.direct;
  const telefonos = [SITE_CONFIG.contact.phone, SITE_CONFIG.contact.phoneSecondary];

  return (
    <div className="contact-direct">
      <p className="eyebrow">{copy.eyebrow}</p>
      <h2 className="contact-direct-title">{copy.titulo}</h2>
      <p className="contact-direct-dek">{copy.dek}</p>

      <ul className="contact-actions">
        <li>
          <a className="contact-action contact-action--primary" href={MAILTO_URL}>
            <span className="contact-action-label">{copy.email.label}</span>
            <span className="contact-action-detail">{copy.email.detalle}</span>
            <span className="contact-action-value">{SITE_CONFIG.contact.email}</span>
          </a>
        </li>
        <li>
          <div className="contact-action contact-action--group">
            <span className="contact-action-label">{copy.telefono.label}</span>
            <span className="contact-action-detail">{copy.telefono.detalle}</span>
            {telefonos.map((numero) => (
              <a key={numero} className="contact-action-value" href={telUrl(numero)}>
                {numero}
              </a>
            ))}
          </div>
        </li>
      </ul>

      <p className="contact-direct-note">{copy.nota}</p>
    </div>
  );
}
