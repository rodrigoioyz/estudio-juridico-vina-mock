import { SITE_CONFIG } from '@/lib/site-config';
import { CONTACTO_COPY, MAILTO_URL, WHATSAPP_URL } from '@/lib/contacto';

/**
 * Modo "direct": no hay backend que reciba el formulario, así que se ofrecen
 * dos vías que sí funcionan. Todo el texto viene de lib/contacto.ts.
 */
export function ContactoDirecto() {
  const copy = CONTACTO_COPY.direct;

  return (
    <div className="contact-direct">
      <p className="eyebrow">{copy.eyebrow}</p>
      <h2 className="contact-direct-title">{copy.titulo}</h2>
      <p className="contact-direct-dek">{copy.dek}</p>

      <ul className="contact-actions">
        <li>
          <a
            className="contact-action contact-action--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-action-label">{copy.whatsapp.label}</span>
            <span className="contact-action-detail">{copy.whatsapp.detalle}</span>
            <span className="contact-action-value">{SITE_CONFIG.contact.whatsapp}</span>
          </a>
        </li>
        <li>
          <a className="contact-action" href={MAILTO_URL}>
            <span className="contact-action-label">{copy.email.label}</span>
            <span className="contact-action-detail">{copy.email.detalle}</span>
            <span className="contact-action-value">{SITE_CONFIG.contact.email}</span>
          </a>
        </li>
      </ul>

      <p className="contact-direct-note">{copy.nota}</p>
    </div>
  );
}
