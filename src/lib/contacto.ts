// lib/contacto.ts
// Textos y enlaces del bloque de contacto. Viven aquí, no en los componentes.
import { SITE_CONFIG } from '@/lib/site-config';

const soloDigitos = (valor: string) => valor.replace(/\D/g, '');

export const CONTACTO_COPY = {
  /** Cabecera de la página, una bajada por modo. */
  hero: {
    eyebrow: 'Primer paso',
    dek: {
      direct:
        'Sin formularios ni pasos intermedios: elija cómo prefiere escribirnos. ' +
        'Le responderemos con claridad sobre los próximos pasos posibles.',
      form: 'Comparta los antecedentes esenciales. Le responderemos con claridad sobre los próximos pasos posibles.',
    },
  },
  /** Bloque de acciones del modo directo. */
  direct: {
    eyebrow: 'Contacto directo',
    titulo: 'Escriba por WhatsApp o por correo',
    dek: 'Elija la vía que le resulte más cómoda. Ambos mensajes llegan al estudio.',
    whatsapp: {
      label: 'Escribir por WhatsApp',
      detalle: 'Le responde una persona del estudio dentro del horario de atención.',
      mensaje: 'Hola, quiero que revisen mi caso laboral.',
    },
    email: {
      label: 'Escribir por correo',
      detalle: 'Cuéntenos brevemente qué ocurrió y le responderemos.',
      asunto: 'Consulta laboral',
    },
    nota:
      'Al escribirnos no está contratando al estudio ni se genera una relación abogado-cliente. ' +
      'La información que comparta se trata de forma confidencial.',
  },
} as const;

export const WHATSAPP_URL = `https://wa.me/${soloDigitos(SITE_CONFIG.contact.whatsapp)}?text=${encodeURIComponent(
  CONTACTO_COPY.direct.whatsapp.mensaje,
)}`;

export const MAILTO_URL = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
  CONTACTO_COPY.direct.email.asunto,
)}`;
