// lib/contacto.ts
// Textos y enlaces del bloque de contacto. Viven aquí, no en los componentes.
import { SITE_CONFIG } from '@/lib/site-config';

/** Número en formato tel: (sin espacios ni guiones). */
export function telUrl(numero: string): string {
  return `tel:${numero.replace(/[^\d+]/g, '')}`;
}

export const CONTACTO_COPY = {
  /** Cabecera de la página, una bajada por modo. */
  hero: {
    eyebrow: 'Primer paso',
    dek: {
      direct:
        'Sin formularios ni pasos intermedios: escriba o llame y le responderemos ' +
        'con claridad sobre los próximos pasos posibles.',
      form: 'Comparta los antecedentes esenciales. Le responderemos con claridad sobre los próximos pasos posibles.',
    },
  },
  /** Bloque de acciones del modo directo. */
  direct: {
    eyebrow: 'Contacto directo',
    titulo: 'Escriba por correo o llame',
    dek: 'Elija la vía que le resulte más cómoda. Le responde una persona del estudio.',
    email: {
      label: 'Escribir por correo',
      detalle: 'Cuéntenos brevemente qué ocurrió y le responderemos.',
      asunto: 'Consulta laboral',
    },
    telefono: {
      label: 'Llamar al estudio',
      detalle: 'Atención de lunes a viernes, de 9:00 a 18:00.',
    },
    nota:
      'Al escribirnos no está contratando al estudio ni se genera una relación abogado-cliente. ' +
      'La información que comparta se trata de forma confidencial.',
  },
} as const;

export const MAILTO_URL = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
  CONTACTO_COPY.direct.email.asunto,
)}`;
