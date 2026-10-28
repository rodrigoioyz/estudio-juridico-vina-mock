// lib/site-config.ts
// Constantes del sitio. Fuente única de verdad para datos institucionales.
// Datos reales recuperados del WordPress original (vps-5952525-x.dattaweb.com) el 2026-10-27
// y aprobados en docs/superpowers/specs/2026-10-27-estudiovina-contenido-original-design.md §4.5.

const DEFAULT_PUBLIC_EMAIL = "contacto@estudiovina.cl";
const DEFAULT_PUBLIC_URL = "https://estudiojuridicolaboral.cl";

export function getPublicSiteUrl(value?: string, isDevelopment = process.env.NODE_ENV === "development"): string {
  const candidate = value?.trim().replace(/\/$/, "");
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
  name: "Estudio Jurídico Laboral",
  shortName: "EJL",
  tagline: "Derecho del Trabajo, desde el análisis hasta el tribunal.",
  description:
    "Estudio especializado en Derecho del Trabajo en Viña del Mar. " +
    "Asesoría preventiva y representación judicial para trabajadores, empresas y sindicatos. " +
    "Litigación ante Juzgados del Trabajo, Corte de Apelaciones y Corte Suprema.",
  url: getPublicSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  location: {
    city: "Viña del Mar",
    region: "Región de Valparaíso",
    country: "Chile",
  },
  contact: {
    email: getPublicContactEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    phone: "+56 9 7378 1151",
    phoneSecondary: "+56 9 4563 1394",
    whatsapp: null,
    address: "1 Oriente 252, oficinas 203 y 307, Viña del Mar",
    schedule: "Lunes a viernes, 09:00–18:00",
  },
  social: {
    linkedin: "", // Validar
    instagram: "", // Validar
    facebook: "", // Validar
  },
} as const;

export const NAV_LINKS = [
  { href: "/estudio", label: "El Estudio" },
  { href: "/areas", label: "Áreas de Práctica" },
  { href: "/equipo", label: "Equipo" },
  { href: "/empresas", label: "Empresas" },
  { href: "/honorarios", label: "Honorarios" },
  { href: "/publicaciones", label: "Publicaciones" },
  // "Contacto" no va aqui: el header ya lo muestra como boton CTA (dedupe, heuristic pass)
] as const;

export const PRACTICE_AREAS = [
  {
    slug: "terminacion-contrato",
    title: "Terminación del Contrato",
    description:
      "Despido injustificado, improcedente, indirecto. Nulidad del despido. Finiquitos e indemnizaciones.",
    servicios: ["Despidos injustificados", "Demanda de autodespido o despido indirecto"],
  },
  {
    slug: "remuneraciones",
    title: "Remuneraciones",
    description:
      "Sueldo, bonos, comisiones, horas extraordinarias, gratificaciones. Diferencias y cobro de prestaciones.",
    servicios: ["Cotizaciones impagas", "Diferencias de remuneraciones"],
  },
  {
    slug: "derechos-fundamentales",
    title: "Derechos Fundamentales",
    description:
      "Tutela laboral, discriminación, represalias, vulneración de garantías constitucionales.",
    servicios: [
      "Vulneración de los derechos fundamentales",
      "Acoso laboral y sexual",
      "Discriminación laboral",
      "Fuero maternal",
      "Tutela laboral",
    ],
  },
  {
    slug: "relacion-laboral",
    title: "Relación Laboral",
    description:
      "Reconocimiento de vínculo laboral. Honorarios y subordinación. Unidad económica.",
    servicios: ["Incumplimiento de contrato", "Reconocimiento de vínculo laboral"],
  },
  {
    slug: "derecho-colectivo",
    title: "Derecho Colectivo y Negociación Colectiva",
    description:
      "Asesoría a sindicatos en negociación colectiva reglada, fuero sindical, prácticas antisindicales. Acompañamiento en todas las etapas del procedimiento.",
    servicios: ["Negociación colectiva", "Constitución de sindicatos"],
  },
  {
    slug: "litigacion-recursos",
    title: "Litigación y Recursos",
    description:
      "Representación ante Juzgados del Trabajo, Corte de Apelaciones y Corte Suprema.",
    servicios: ["Representación del trabajador ante el Servicio de Conciliación"],
  },
  {
    slug: "accidentes-laborales",
    title: "Accidentes Laborales",
    description:
      "Accidentes del trabajo y enfermedades profesionales. Determinación de responsabilidades y reparación integral del daño.",
    servicios: ["Invalidez y prestaciones", "Indemnización por accidentes laborales"],
  },
] as const;
