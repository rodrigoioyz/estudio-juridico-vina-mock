// lib/servicios/tipos.ts
// Contrato de las páginas de servicio. Todo el texto vive en los archivos de
// contenido (uno por página), nunca en el componente.

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export interface SeccionServicio {
  titulo: string;
  parrafos: string[];
  /** Lista opcional con viñetas, p. ej. causales o documentos. */
  lista?: string[];
}

export interface EnlaceContextual {
  label: string;
  href: string;
}

export interface Servicio {
  /** Segmento de la URL, sin barras. */
  slug: string;
  /** Ruta pública completa, con barra inicial. */
  path: string;
  areaSlug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  dek: string;
  /** Migas de pan adicionales antes de la página (p. ej. Empresas). */
  breadcrumbPadre?: EnlaceContextual;
  secciones: SeccionServicio[];
  faq: FaqItem[];
  relacionados: EnlaceContextual[];
}
