// lib/site-config.ts
// Constantes del sitio. Fuente única de verdad para datos institucionales.

const DEFAULT_PUBLIC_EMAIL = 'contacto@estudiojuridicolaboral.cl';
const DEFAULT_PUBLIC_URL = 'https://estudiojuridicolaboral.cl';

export function getPublicSiteUrl(value?: string, isDevelopment = process.env.NODE_ENV === 'development'): string {
  const candidate = value?.trim().replace(/\/$/, '');
  if (isDevelopment && candidate) return candidate;
  if (!candidate || /localhost|127\.0\.0\.1/i.test(candidate)) return DEFAULT_PUBLIC_URL;
  return candidate;
}

export function getPublicContactEmail(value?: string): string {
  const candidate = value?.trim();
  if (!candidate || /\.local$/i.test(candidate)) return DEFAULT_PUBLIC_EMAIL;
  return candidate;
}

export const SITE_CONFIG = {
  name: 'Estudio Jurídico Laboral',
  shortName: 'EJL',
  tagline: 'Derecho del Trabajo, desde el análisis hasta el tribunal.',
  description:
    'Estudio especializado en Derecho del Trabajo en Viña del Mar. ' +
    'Asesoría preventiva y representación judicial para trabajadores, empresas y sindicatos. ' +
    'Litigación ante Juzgados del Trabajo, Corte de Apelaciones y Corte Suprema.',
  url: getPublicSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  location: {
    city: 'Viña del Mar',
    region: 'Región de Valparaíso',
    country: 'Chile',
  },
  contact: {
    email: getPublicContactEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || null,
    whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || null,
  },
  social: {
    linkedin: '', // Validar
    instagram: '', // Validar
    facebook: '', // Validar
  },
} as const;

export const NAV_LINKS = [
  { href: '/estudio', label: 'El Estudio' },
  { href: '/areas', label: 'Áreas de Práctica' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/empresas', label: 'Empresas' },
  { href: '/publicaciones', label: 'Publicaciones' },
  // 'Contacto' no va aqui: el header ya lo muestra como boton CTA (dedupe, heuristic pass)
] as const;

export const PRACTICE_AREAS = [
  {
    slug: 'terminacion-contrato',
    title: 'Terminación del Contrato',
    description:
      'Despido injustificado, improcedente, indirecto. Nulidad del despido. Finiquitos e indemnizaciones.',
  },
  {
    slug: 'remuneraciones',
    title: 'Remuneraciones',
    description:
      'Sueldo, bonos, comisiones, horas extraordinarias, gratificaciones. Diferencias y cobro de prestaciones.',
  },
  {
    slug: 'derechos-fundamentales',
    title: 'Derechos Fundamentales',
    description:
      'Tutela laboral, discriminación, represalias, vulneración de garantías constitucionales.',
  },
  {
    slug: 'relacion-laboral',
    title: 'Relación Laboral',
    description:
      'Reconocimiento de vínculo laboral. Honorarios y subordinación. Unidad económica.',
  },
  {
    slug: 'derecho-colectivo',
    title: 'Derecho Colectivo y Negociación Colectiva',
    description:
      'Asesoría a sindicatos en negociación colectiva reglada, fuero sindical, prácticas antisindicales. Acompañamiento en todas las etapas del procedimiento.',
  },
  {
    slug: 'litigacion-recursos',
    title: 'Litigación y Recursos',
    description:
      'Representación ante Juzgados del Trabajo, Corte de Apelaciones y Corte Suprema.',
  },
  {
    slug: 'accidentes-laborales',
    title: 'Accidentes Laborales',
    description:
      'Accidentes del trabajo y enfermedades profesionales. Determinación de responsabilidades y reparación integral del daño.',
  },
] as const;
