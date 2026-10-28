// lib/site-config.ts
// Constantes del sitio. Fuente única de verdad para datos institucionales.
// Datos reales recuperados del WordPress original (vps-5952525-x.dattaweb.com) el 2026-10-27
// y aprobados en docs/superpowers/specs/2026-10-27-estudiovina-contenido-original-design.md §4.5.

const DEFAULT_PUBLIC_EMAIL = "contacto@estudiovina.cl";
const DEFAULT_PUBLIC_URL = "https://www.estudiovina.cl";

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

/** "direct": WhatsApp y correo, sin formulario. "form": formulario (requiere backend). */
export type ContactMode = "direct" | "form";

export const SITE_CONFIG = {
  name: "Estudio Jurídico Laboral",
  shortName: "EJL",
  tagline: "Derecho del Trabajo, desde el análisis hasta el tribunal.",
  description:
    "Estudio dedicado solo al Derecho del Trabajo en Viña del Mar. " +
    "Asesoría y litigio para trabajadores, empresas y sindicatos, ante la Corte Suprema de Chile.",
  url: getPublicSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  location: {
    city: "Viña del Mar",
    region: "Región de Valparaíso",
    country: "Chile",
  },
  contact: {
    /**
     * Cambiar aquí y nada más. "direct" funciona hoy; "form" solo cuando
     * exista un backend que reciba el POST (hoy no existe).
     */
    mode: (process.env.NEXT_PUBLIC_CONTACT_MODE as ContactMode | undefined) ?? "direct",
    email: getPublicContactEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    phone: "+56 9 7378 1151",
    phoneSecondary: "+56 9 4563 1394",
    whatsapp: "+56 9 7378 1151",
    address: "1 Oriente 252, oficinas 203 y 307, Viña del Mar",
    schedule: "Lunes a viernes, 09:00–18:00",
  },
} as const;

export type SocialNetwork = "facebook" | "instagram" | "linkedin";

export interface SocialLink {
  network: SocialNetwork;
  label: string;
  href: string;
}

/**
 * Solo las redes que el estudio tiene de verdad (confirmado 2026-10-28):
 * no hay LinkedIn ni Instagram, únicamente Facebook.
 * El footer y el schema iteran sobre esta lista, así que una red que no
 * esté aquí no se renderiza ni entra en `sameAs`. Agregar una red es
 * agregar un objeto; no hace falta tocar componentes.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    network: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100064638596912",
  },
];

export const NAV_LINKS = [
  { href: "/estudio", label: "El Estudio" },
  { href: "/areas", label: "Áreas de Práctica" },
  { href: "/equipo", label: "Equipo" },
  { href: "/empresas", label: "Empresas" },
  { href: "/honorarios", label: "Honorarios" },
  { href: "/publicaciones", label: "Publicaciones" },
  // "Contacto" no va aqui: el header ya lo muestra como boton CTA (dedupe, heuristic pass)
] as const;

export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  /** Title del <head>, sin el sufijo del template. */
  metaTitle?: string;
  /** Meta description de 150-160 caracteres. */
  metaDescription?: string;
  /** H1 visible cuando difiere del label de navegación. */
  h1?: string;
  servicios: string[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "terminacion-contrato",
    title: "Terminación del Contrato",
    description:
      "Despido injustificado e indirecto. Nulidad del despido. Finiquitos e indemnizaciones.",
    metaTitle: "Término de contrato de trabajo: causales y salidas",
    metaDescription:
      "Las tres vías legales ante un término de contrato: despido injustificado, autodespido y nulidad por cotizaciones. Qué exige cada una y qué plazos corren.",
    h1: "Término de contrato de trabajo",
    servicios: ["Despidos injustificados", "Demanda de autodespido o despido indirecto"],
  },
  {
    slug: "remuneraciones",
    title: "Remuneraciones",
    description:
      "Sueldo, bonos, comisiones, horas extraordinarias, gratificaciones. Diferencias y cobro de prestaciones.",
    metaTitle: "Liquidación laboral y sueldos adeudados en Chile",
    metaDescription:
      "Cómo revisar la liquidación de sueldo, reclamar diferencias de remuneraciones y cobrar horas extras impagas. Qué descuentos son legales y cuáles no lo son.",
    h1: "Remuneraciones y liquidación de sueldo",
    servicios: ["Cotizaciones impagas", "Diferencias de remuneraciones"],
  },
  {
    slug: "derechos-fundamentales",
    title: "Derechos Fundamentales",
    description:
      "Tutela laboral, discriminación, represalias, vulneración de garantías constitucionales.",
    metaTitle: "Tutela laboral y derechos fundamentales en Chile",
    metaDescription:
      "Tutela por vulneración de derechos fundamentales: discriminación, represalias y fuero maternal. Cómo se denuncia, qué prueba se exige y qué se puede obtener.",
    h1: "Derechos Fundamentales",
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
    metaTitle: "Trabajo sin contrato: reconocimiento del vínculo laboral",
    metaDescription:
      "Si trabajó sin contrato o emitió boletas de honorarios, se puede declarar el vínculo laboral. Subordinación, unidad económica y responsabilidad solidaria.",
    h1: "Relación Laboral",
    servicios: ["Incumplimiento de contrato", "Reconocimiento de vínculo laboral"],
  },
  {
    slug: "derecho-colectivo",
    title: "Derecho Colectivo y Negociación Colectiva",
    description:
      "Asesoría a sindicatos en negociación colectiva reglada, fuero sindical, prácticas antisindicales. Acompañamiento en todas las etapas del procedimiento.",
    metaTitle: "Negociación colectiva y sindicatos en Chile",
    metaDescription:
      "Asesoría a sindicatos y trabajadores en negociación colectiva reglada: constitución de sindicatos, fuero sindical y denuncias por prácticas antisindicales.",
    h1: "Derecho Colectivo",
    servicios: ["Negociación colectiva", "Constitución de sindicatos"],
  },
  {
    slug: "litigacion-recursos",
    title: "Litigación y Recursos",
    description:
      "Representación ante Juzgados del Trabajo, Corte de Apelaciones y Corte Suprema.",
    metaTitle: "Recurso de nulidad laboral y litigación en tribunales",
    metaDescription:
      "Representación ante Juzgados del Trabajo, Corte de Apelaciones y Corte Suprema: recurso de nulidad, recurso de queja y estrategia judicial desde el inicio.",
    h1: "Litigación y Recursos",
    servicios: ["Representación del trabajador ante el Servicio de Conciliación"],
  },
  {
    slug: "accidentes-laborales",
    title: "Accidentes Laborales",
    description:
      "Accidentes del trabajo y enfermedades profesionales. Determinación de responsabilidades y reparación integral del daño.",
    metaTitle: "Accidente laboral: demanda al empleador e indemnización",
    metaDescription:
      "Además de la denuncia ante la mutual, un accidente puede dar lugar a demanda contra el empleador por falta de seguridad. Qué se puede reclamar y cómo.",
    h1: "Accidentes laborales y responsabilidad del empleador",
    servicios: ["Invalidez y prestaciones", "Indemnización por accidentes laborales"],
  },
] as const;
