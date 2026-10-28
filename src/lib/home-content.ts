// lib/home-content.ts
// Copy de la home. Todo el texto vive aquí: los componentes solo lo renderizan.
// Regla: solo hechos verificados del sitio original; tratamiento de "usted".

export type Cta = { label: string; href: string };

export const HOME_HERO = {
  /** Línea pequeña sobre el H1. */
  eyebrow: 'Derecho del Trabajo, desde el análisis hasta el tribunal',
  /** El H1 completo se compone de titulo + enfasis (el enfasis va en cursiva serif). */
  titulo: 'Abogado laboral en',
  tituloEnfasis: 'Viña del Mar',
  bajada:
    '¿Lo despidieron o le deben dinero? Revisamos su caso sin costo. Solo cobramos si usted cobra.',
  ctaPrimario: { label: 'Revisar mi caso gratis', href: '/contacto' } as Cta,
  ctaSecundario: { label: 'Cómo cobramos', href: '/honorarios' } as Cta,
} as const;

/** Barra de prueba: va dentro del hero, en la primera pantalla. */
export const HOME_PRUEBA = [
  { titulo: '+600', detalle: 'juicios laborales' },
  { titulo: 'Más de 10 años', detalle: 'en la V Región' },
  { titulo: 'Doctrina citada', detalle: 'por la Dirección del Trabajo' },
] as const;

/** Bloque principal de públicos: trabajadores. */
export const HOME_TRABAJADORES = {
  eyebrow: 'Representamos a trabajadores',
  titulo: 'Defendemos a trabajadores',
  body:
    'Despido injustificado, autodespido, nulidad del despido, remuneraciones impagas y tutela de derechos fundamentales. El plazo para demandar un despido es de 60 días hábiles: evaluar el caso a tiempo es parte de la defensa.',
  cta: { label: 'Revisar mi caso', href: '/contacto' } as Cta,
  ctaSecundario: { label: 'Ver áreas de práctica', href: '/areas' } as Cta,
} as const;

/** Franja secundaria: empresas y sindicatos, en una sola línea. */
export const HOME_SECUNDARIO = {
  texto: '¿Representa a una empresa o sindicato?',
  cta: { label: 'Ver servicios para empresas', href: '/empresas' } as Cta,
} as const;

/**
 * Cada área se presenta por el problema del usuario.
 * La clave es el slug de PRACTICE_AREAS; el nombre técnico va en pequeño.
 */
export const AREA_PROBLEMAS: Record<string, { problema: string; tecnico: string }> = {
  'terminacion-contrato': { problema: 'Me despidieron', tecnico: 'Terminación del contrato' },
  remuneraciones: { problema: 'No me pagan el sueldo o las cotizaciones', tecnico: 'Remuneraciones' },
  'derechos-fundamentales': { problema: 'Sufro acoso o discriminación', tecnico: 'Derechos fundamentales' },
  'relacion-laboral': { problema: 'Trabajo sin contrato o con boletas', tecnico: 'Relación laboral' },
  'derecho-colectivo': { problema: 'Somos un sindicato', tecnico: 'Derecho colectivo' },
  'accidentes-laborales': { problema: 'Tuve un accidente en el trabajo', tecnico: 'Accidentes laborales' },
  'litigacion-recursos': { problema: 'Mi caso ya está en tribunales', tecnico: 'Litigación y recursos' },
};

export const HOME_AREAS_INTRO = {
  titulo: 'Áreas de práctica',
  dek: 'Siete materias, una sola especialidad. De la asesoría preventiva al recurso ante la Corte Suprema.',
  cta: { label: 'Vea todas las áreas', href: '/areas' } as Cta,
} as const;

/** Bloque único que reemplaza a "Lo que ofrecemos" y "Un compromiso claro". */
export const HOME_TRABAJAMOS = {
  eyebrow: 'Cómo trabajamos',
  titulo: 'Cómo trabajamos',
  dek: 'Tres reglas que no cambian de un caso a otro.',
  puntos: [
    {
      titulo: 'Consulta gratuita',
      body:
        'La primera evaluación no tiene costo. Le decimos con claridad si existe un caso y qué puede obtener.',
    },
    {
      titulo: 'Cobro solo por resultado',
      body:
        'Honorarios por resultas: un porcentaje de lo que se obtiene, que se paga cuando usted recibe su dinero. Sin adelantos.',
    },
    {
      titulo: 'Información en cada paso',
      body:
        'Le informamos con anticipación y usted participa en las decisiones relevantes de su causa.',
    },
  ],
  cta: { label: 'Conozca nuestro sistema de honorarios', href: '/honorarios' } as Cta,
} as const;
