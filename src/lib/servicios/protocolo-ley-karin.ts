import type { Servicio } from './tipos';

export const PROTOCOLO_LEY_KARIN: Servicio = {
  slug: 'protocolo-ley-karin',
  path: '/empresas/protocolo-ley-karin',
  areaSlug: 'derechos-fundamentales',
  eyebrow: 'Empresas y cumplimiento',
  h1: 'Protocolo Ley Karin para empresas',
  metaTitle: 'Protocolo Ley Karin para empresas: qué exige la ley',
  metaDescription:
    'El protocolo de prevención del acoso que exige la Ley 21.643: contenido mínimo, canal de denuncias, investigación y sanciones por incumplimiento de la empresa.',
  dek:
    'La Ley 21.643 no solo protege a quien denuncia: obliga a la empresa a prevenir, investigar y documentar. Un protocolo mal hecho es un pasivo laboral.',
  breadcrumbPadre: { label: 'Empresas', href: '/empresas' },
  secciones: [
    {
      titulo: 'Qué exige la ley a la empresa',
      parrafos: [
        'La Ley 21.643, vigente desde el 1 de agosto de 2024, modificó el Código del Trabajo para exigir a los empleadores un protocolo de prevención del acoso laboral y sexual, además de un procedimiento de investigación y sanción.',
        'La obligación no se agota en redactar un documento: exige difundirlo, aplicarlo y dejar registro. En una fiscalización, lo que se revisa es la conducta efectiva de la empresa frente a una denuncia, no solo la existencia del protocolo. [VERIFICAR: artículo 154 y alcance de la obligación según tamaño de empresa]',
      ],
    },
    {
      titulo: 'Contenido mínimo del protocolo',
      parrafos: [
        'Un protocolo útil tiene que permitir que cualquier persona sepa qué hacer, a quién acudir y qué esperar. Estos son los componentes que debe cubrir:',
      ],
      lista: [
        'Identificación de los riesgos psicosociales y de las situaciones de acoso en la organización.',
        'Medidas de prevención, información y capacitación permanentes.',
        'Canal de denuncias conocido, accesible y con resguardo de confidencialidad.',
        'Procedimiento de investigación con etapas, responsables y plazos definidos.',
        'Medidas de resguardo para la persona denunciante mientras se investiga.',
        'Reglas de imparcialidad: quién investiga, cómo se evita el conflicto de interés y cómo se sanciona.',
        'Registro y trazabilidad de cada caso, con resguardo de datos personales.',
      ],
    },
    {
      titulo: 'Qué pasa si la empresa no lo tiene',
      parrafos: [
        'La Dirección del Trabajo puede fiscalizar y aplicar multas por incumplimiento de las obligaciones de prevención. Pero el costo mayor suele ser otro: una denuncia mal gestionada puede terminar en una demanda de tutela laboral, con indemnización del daño y eventual responsabilidad de la empresa.',
        'A eso se suma el riesgo reputacional y la rotación. [VERIFICAR: montos de las multas y su graduación]',
      ],
    },
    {
      titulo: 'Cómo lo implementamos',
      parrafos: [
        'Revisamos el reglamento interno, los contratos y los canales existentes; identificamos brechas frente a la ley y proponemos un protocolo ajustado al tamaño y al rubro de la empresa.',
        'También acompañamos la investigación de denuncias concretas, para que el procedimiento resista una revisión administrativa o judicial.',
        'Si la empresa ya tiene un protocolo, lo auditamos antes de que lo audite la Dirección del Trabajo.',
      ],
    },
    {
      titulo: 'Cómo trabajamos',
      parrafos: [
        'Para empresas, el trabajo se cotiza por proyecto y se informa antes de comenzar. No hay cobros por adelantado sin alcance definido.',
        'La primera reunión de diagnóstico es gratuita y sirve para determinar qué exige la ley en su caso concreto.',
      ],
    },
  ],
  faq: [
    {
      pregunta: '¿Todas las empresas deben tener protocolo Ley Karin?',
      respuesta:
        'La obligación de prevención alcanza a los empleadores. El alcance y los documentos exigidos varían según el tamaño de la empresa y si tiene o no reglamento interno. [VERIFICAR: umbral de trabajadores]',
    },
    {
      pregunta: '¿Qué debe contener el canal de denuncias?',
      respuesta:
        'Debe ser conocido por toda la plantilla, permitir denunciar por escrito o verbalmente, resguardar la confidencialidad y garantizar que la denuncia llegue a alguien sin conflicto de interés con la persona denunciada.',
    },
    {
      pregunta: '¿Cómo se investiga una denuncia?',
      respuesta:
        'Con un procedimiento escrito, plazos definidos, medidas de resguardo inmediatas para la persona denunciante y garantías para la persona denunciada. La investigación debe ser imparcial y quedar documentada, porque es la prueba de que la empresa cumplió.',
    },
  ],
  relacionados: [
    { label: 'Acoso laboral: cómo denunciar', href: '/acoso-laboral-ley-karin' },
    { label: 'Derechos fundamentales', href: '/areas/derechos-fundamentales' },
    { label: 'Servicios para empresas', href: '/empresas' },
    { label: 'Contacto', href: '/contacto' },
  ],
};
