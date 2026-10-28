import type { Servicio } from './tipos';

export const AUTODESPIDO: Servicio = {
  slug: 'autodespido',
  path: '/autodespido',
  areaSlug: 'terminacion-contrato',
  eyebrow: 'Término del contrato',
  h1: 'Autodespido en Chile',
  metaTitle: 'Autodespido en Chile: causales, carta y plazos',
  metaDescription:
    'Cómo autodespedirse por incumplimiento grave del empleador: causales del artículo 171, carta de despido indirecto, plazo de 60 días e indemnización legal.',
  dek:
    'Cuando el que incumple es el empleador, la ley permite terminar el contrato e imputarle las consecuencias. No es una renuncia: es una demanda.',
  secciones: [
    {
      titulo: 'Qué es el autodespido',
      parrafos: [
        'El autodespido, también llamado despido indirecto, es la facultad que entrega el artículo 171 del Código del Trabajo al trabajador: terminar el contrato cuando es el empleador quien ha incurrido en una causal grave, y demandar como si hubiera sido despedido.',
        'La diferencia con la renuncia es decisiva. Quien renuncia no tiene derecho a indemnización por años de servicio. Quien se autodespide y gana el juicio recibe las mismas prestaciones de un despido injustificado.',
        'Por eso no es una decisión que convenga tomar por impulso: el resultado depende de cómo se redacte la carta, de los hechos que se invoquen y de la prueba que exista.',
      ],
    },
    {
      titulo: 'Cuándo aplica',
      parrafos: [
        'El artículo 171 permite el autodespido cuando el empleador incurre en las causales de los números 1, 5 o 7 del artículo 160:',
      ],
      lista: [
        'Conductas indebidas graves del empleador: falta de probidad, acoso sexual, acoso laboral, vías de hecho o injurias (artículo 160 N° 1).',
        'Actos, omisiones o imprudencias temerarias del empleador que afecten la seguridad o la salud del trabajador (artículo 160 N° 5).',
        'Incumplimiento grave de las obligaciones que impone el contrato (artículo 160 N° 7). Es la causal más usada y la que exige mejor prueba.',
      ],
    },
    {
      titulo: 'Causales frecuentes en la práctica',
      parrafos: [
        'El incumplimiento grave no se presume: debe acreditarse. Algunos escenarios que suelen evaluarse son el no pago de remuneraciones durante varios períodos, el no pago de cotizaciones previsionales, el cambio unilateral de condiciones esenciales del contrato y el incumplimiento de medidas de seguridad que expone al trabajador a un riesgo cierto.',
        'Un mismo hecho puede dar lugar a dos caminos distintos. Si el empleador no paga las cotizaciones y luego lo despide, el camino es la nulidad del despido. Si decide terminar usted el contrato por ese mismo incumplimiento, el camino es el autodespido. Conviene comparar ambos antes de actuar.',
      ],
    },
    {
      titulo: 'Cómo se hace y qué plazo corre',
      parrafos: [
        'La terminación se comunica por escrito al empleador, indicando la causal y los hechos. Esa carta es la pieza central del caso: fija lo que después se discutirá en juicio y no puede corregirse con facilidad.',
        'El artículo 171 concede un plazo de sesenta días hábiles contados desde la terminación para demandar. Igual que en el despido injustificado, se trata de un plazo de caducidad.',
        'Si el trabajador invoca falsamente acoso sexual o acoso laboral, o lo hace para lesionar la honra del empleador, y el tribunal declara la demanda carente de motivo plausible, deberá indemnizar los perjuicios causados (artículo 171).',
      ],
    },
    {
      titulo: 'Qué se puede obtener y qué se arriesga',
      parrafos: [
        'Si el tribunal acoge la demanda, se pagan las indemnizaciones por aviso previo y por años de servicio, con un recargo de 50% si la causal es el número 7 del artículo 160 y de hasta 80% si son los números 1 o 5 (artículo 171). La sentencia también puede reconocer prestaciones adeudadas durante la relación laboral.',
        'Si la demanda se rechaza, la terminación se entiende como una renuncia y el trabajador queda sin indemnización. Ese riesgo es la razón por la que el análisis previo —hechos, prueba, tiempos y redacción de la carta— importa más que en cualquier otra materia laboral.',
      ],
    },
    {
      titulo: 'Cómo trabajamos',
      parrafos: [
        'Evaluamos el caso antes de que usted firme o envíe cualquier carta. La consulta es gratuita y en ella revisamos contratos, liquidaciones, correos y registros de asistencia.',
        'Nuestros honorarios son por resultas: se pagan cuando usted recibe su dinero, nunca por adelantado. Si el caso no tiene viabilidad, se lo decimos en esa primera conversación.',
      ],
    },
  ],
  faq: [
    {
      pregunta: '¿Puedo autodespedirme si no me pagan el sueldo?',
      respuesta:
        'El no pago reiterado de remuneraciones puede constituir incumplimiento grave de las obligaciones del contrato, que es la causal del artículo 160 número 7. La fuerza del caso depende de los períodos impagos, de los reclamos previos y de la prueba disponible.',
    },
    {
      pregunta: '¿Cuánto plazo tengo para autodespedirme y demandar?',
      respuesta:
        'La demanda debe presentarse dentro de sesenta días hábiles contados desde la terminación del contrato (artículo 171). Antes de ese paso hay que enviar la carta con la causal y los hechos, y conviene prepararla con asesoría.',
    },
    {
      pregunta: '¿Qué pasa si pierdo el juicio?',
      respuesta:
        'Si el tribunal rechaza el autodespido, la terminación se entiende como renuncia y no proceden las indemnizaciones por años de servicio. Además, puede ser condenado en costas. Por eso se evalúa la prueba antes de presentar la demanda, no después.',
    },
  ],
  relacionados: [
    { label: 'Despido injustificado: plazos y demanda', href: '/despido-injustificado' },
    { label: 'Nulidad del despido por cotizaciones impagas', href: '/ley-bustos-nulidad-del-despido' },
    { label: 'Acoso laboral y Ley Karin', href: '/acoso-laboral-ley-karin' },
    { label: 'Término de contrato de trabajo', href: '/areas/terminacion-contrato' },
  ],
};
