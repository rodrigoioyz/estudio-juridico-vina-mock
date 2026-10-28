import type { Servicio } from './tipos';

export const DESPIDO_INJUSTIFICADO: Servicio = {
  slug: 'despido-injustificado',
  path: '/despido-injustificado',
  areaSlug: 'terminacion-contrato',
  eyebrow: 'Término del contrato',
  h1: 'Despido injustificado en Chile',
  metaTitle: 'Despido injustificado en Chile: reclamo, plazos y demanda',
  metaDescription:
    'Qué hacer ante un despido injustificado: plazo de 60 días, reclamo ante la Dirección del Trabajo, nulidad del despido e indemnización que le corresponde.',
  dek:
    'Si lo despidieron sin causa justificada, o la carta no explica los hechos, hay un plazo que empieza a correr el día de la separación.',
  secciones: [
    {
      titulo: 'Qué es un despido injustificado',
      parrafos: [
        'El Código del Trabajo no permite despedir por cualquier motivo. El empleador debe invocar una causal legal y, además, describir en la carta de aviso los hechos concretos en que se apoya. El artículo 162 exige que esa carta exista y que exprese la causal invocada.',
        'Cuando el caso llega a tribunales, la carga de la prueba recae en el empleador: es él quien debe acreditar que los hechos ocurrieron. Si no lo consigue, el juez declara el despido injustificado y aplica los recargos legales sobre las indemnizaciones.',
        'Hay una diferencia práctica entre dos situaciones que suelen confundirse. El artículo 168 distingue según la causal: el despido es indebido si se invocó una causal del artículo 160 que no se acredita, improcedente si se invocó el artículo 161 sin fundamento, e injustificado si se invocó una del artículo 159 sin fundamento o no se invocó causal alguna. Esa calificación determina el recargo.',
      ],
    },
    {
      titulo: 'Cuándo conviene reclamar',
      parrafos: [
        'No todo despido es reclamable, y no todo despido injusto se reclama a tiempo. Estos son los casos en que vale la pena revisar los antecedentes con un abogado:',
      ],
      lista: [
        'Lo despidieron sin carta, o con una carta que no indica causal ni hechos.',
        'La carta invoca necesidades de la empresa, pero no hubo reestructuración ni antecedentes que la respalden.',
        'La carta atribuye faltas graves que no ocurrieron o que no puede probar.',
        'El despido ocurrió durante el período de fuero maternal, o mientras estaba en trámite una denuncia o una demanda laboral.',
        'La indemnización que le ofrecieron no corresponde a los años trabajados o a la última remuneración.',
      ],
    },
    {
      titulo: 'Los plazos que corren',
      parrafos: [
        'El plazo para demandar el despido injustificado es de sesenta días hábiles contados desde la separación, conforme al artículo 168 del Código del Trabajo. Es un plazo de caducidad: si vence, se pierde la acción, aunque el despido haya sido efectivamente injusto.',
        'Cuando el despido se funda en necesidades de la empresa (artículo 161), el artículo 162 exige avisar con treinta días de anticipación; si no se avisa, corresponde una indemnización sustitutiva equivalente a la última remuneración mensual.',
        'Si dentro de ese plazo presenta un reclamo ante la Inspección del Trabajo, el plazo se suspende y sigue corriendo cuando termina ese trámite. Pero en ningún caso se puede demandar después de noventa días hábiles desde la separación (artículo 168, inciso final).',
      ],
    },
    {
      titulo: 'Qué se puede obtener',
      parrafos: [
        'Las prestaciones dependen de los años trabajados, de la causal invocada y de cómo se declare el despido. En términos generales, una demanda puede comprender:',
      ],
      lista: [
        'Indemnización sustitutiva del aviso previo, cuando no hubo los treinta días de anticipación (artículo 162).',
        'Indemnización por años de servicio, equivalente a treinta días de la última remuneración mensual por cada año trabajado y fracción superior a seis meses, con un máximo de once años y una base de cálculo con tope de 90 UF (artículos 163 y 172).',
        'Recargo sobre la indemnización por años de servicio (artículo 168): 30% si se aplicó mal el artículo 161; 50% si no hubo causal o se aplicó mal el artículo 159; 80% si se aplicó indebidamente el artículo 160; y 100% si se invocaron los números 1, 5 o 6 del artículo 160 y el tribunal declara que el despido careció de motivo plausible.',
        'Feriado proporcional y otras prestaciones devengadas e impagas.',
        'Nulidad del despido, cuando el empleador no pagó las cotizaciones previsionales al momento de despedir (artículo 162, inciso quinto).',
      ],
    },
    {
      titulo: 'Cómo trabajamos',
      parrafos: [
        'La primera consulta es gratuita. Revisamos la carta de despido, el contrato, las liquidaciones y las cotizaciones antes de decirle si existe un caso y qué se puede obtener.',
        'Nuestros honorarios son por resultas: un porcentaje de lo que se obtiene en el juicio, que se paga cuando usted recibe su dinero. No pedimos pagos por adelantado ni cuotas de ingreso.',
        'Si el caso se judicializa, lo acompañamos en cada etapa y le informamos con anticipación de las decisiones relevantes: la demanda, la audiencia, la oferta de acuerdo y el eventual recurso.',
      ],
    },
  ],
  faq: [
    {
      pregunta: '¿Tienen abogados especialistas en despidos?',
      respuesta:
        'El estudio se dedica de manera exclusiva al Derecho del Trabajo desde hace más de diez años, y el despido es una de sus materias principales. No tomamos causas de otras áreas.',
    },
    {
      pregunta: '¿Necesito un abogado de despido laboral?',
      respuesta:
        'Puede reclamar por su cuenta, pero el procedimiento exige cumplir plazos de caducidad, redactar la demanda y probar la falta de justificación de la causal. Un error en cualquiera de esos puntos puede hacer perder la acción aunque usted tenga razón.',
    },
    {
      pregunta: '¿Puedo demandar por malas referencias laborales?',
      respuesta:
        'Si el empleador entrega referencias falsas o entrega información que perjudica su búsqueda de trabajo, podría configurarse una vulneración de derechos fundamentales reclamable por la vía de tutela. Es una materia que se evalúa caso a caso, según la prueba disponible.',
    },
  ],
  relacionados: [
    { label: 'Autodespido: cuando el incumplimiento es del empleador', href: '/autodespido' },
    { label: 'Nulidad del despido por cotizaciones impagas', href: '/ley-bustos-nulidad-del-despido' },
    { label: 'Término de contrato de trabajo', href: '/areas/terminacion-contrato' },
    { label: 'Honorarios y consulta gratuita', href: '/honorarios' },
  ],
};
