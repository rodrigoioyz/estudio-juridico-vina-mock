import type { Servicio } from './tipos';

export const LEY_BUSTOS: Servicio = {
  slug: 'ley-bustos-nulidad-del-despido',
  path: '/ley-bustos-nulidad-del-despido',
  areaSlug: 'terminacion-contrato',
  eyebrow: 'Término del contrato',
  h1: 'Ley Bustos y nulidad del despido',
  metaTitle: 'Ley Bustos: nulidad del despido por cotizaciones',
  metaDescription:
    'Si su empleador no pagó las cotizaciones, el despido puede ser nulo y seguir devengando sueldo. Qué exige la Ley Bustos y cómo se reclama en tribunales.',
  dek:
    'Un despido puede no poner fin al contrato si las cotizaciones previsionales no estaban pagadas. Esa es la regla que sostiene la nulidad del despido.',
  secciones: [
    {
      titulo: 'Qué es la nulidad del despido',
      parrafos: [
        'El artículo 162 del Código del Trabajo exige que el empleador haya pagado las cotizaciones previsionales al momento del despido. Si no lo hizo, el despido no produce el efecto de poner término al contrato de trabajo.',
        'La consecuencia práctica es inusual: el contrato sigue vigente para ciertos efectos y el empleador debe pagar las remuneraciones y las cotizaciones del período que media entre el despido y la convalidación. A esa figura se la conoce como nulidad del despido.',
        'No se trata de que el trabajador vuelva a su puesto. Se trata de que el despido no extingue el vínculo mientras la deuda previsional no se regularice.',
      ],
    },
    {
      titulo: 'Qué exige para que se declare',
      parrafos: [
        'La regla tiene requisitos concretos que conviene revisar antes de demandar:',
      ],
      lista: [
        'Que existan cotizaciones impagas al momento del despido, total o parcialmente.',
        'Que la deuda sea anterior o contemporánea a la separación, no posterior.',
        'Que el empleador no haya acreditado el pago antes de la demanda o durante el juicio.',
        'Que la demanda se presente dentro de seis meses desde la separación (artículo 510).',
      ],
    },
    {
      titulo: 'La Ley Bustos y sus límites',
      parrafos: [
        'La nulidad del despido se conoce como Ley Bustos porque la introdujo la Ley 19.631, de 1999, que agregó los incisos quinto a séptimo del artículo 162. Su límite más relevante viene de otra norma: con la Ley 20.720, de insolvencia, la Corte Suprema ha resuelto que si el empleador entra en liquidación concursal, las remuneraciones no se devengan más allá de la resolución de liquidación.',
        'En la práctica, eso significa que la estrategia cambia según la situación de la empresa: no es lo mismo demandar a un empleador activo que a uno sometido a un procedimiento de insolvencia.',
      ],
    },
    {
      titulo: 'Los plazos',
      parrafos: [
        'La acción de nulidad del despido prescribe en seis meses contados desde la separación (artículo 510). Si además se reclama que el despido fue injustificado, esa acción caduca en sesenta días hábiles (artículo 168), por lo que en la práctica ambas se presentan juntas dentro del plazo más corto.',
        'Si dentro de ese plazo de sesenta días presenta un reclamo ante la Inspección del Trabajo, se suspende, con un máximo de noventa días hábiles desde la separación (artículo 168, inciso final).',
      ],
    },
    {
      titulo: 'Qué se puede obtener',
      parrafos: [
        'Cuando se declara la nulidad, la sentencia ordena el pago de las remuneraciones y cotizaciones del período comprendido entre el despido y la convalidación, además de las prestaciones propias del despido que se declare injustificado.',
        'El monto final depende de tres variables: la fecha del despido, la fecha en que se acredite el pago de las cotizaciones y la remuneración que se determine como base de cálculo. La ley no fija un tope temporal; la excepción es la liquidación concursal del empleador.',
      ],
    },
    {
      titulo: 'Cómo trabajamos',
      parrafos: [
        'Revisamos el certificado de cotizaciones, la carta de despido y el finiquito antes de definir la estrategia. La consulta inicial es gratuita.',
        'Cobramos por resultas: un porcentaje de lo obtenido, pagadero cuando usted recibe su dinero. Sin adelantos ni cuotas de ingreso.',
      ],
    },
  ],
  faq: [
    {
      pregunta: '¿Qué pasa si mi empleador nunca pagó las cotizaciones?',
      respuesta:
        'Es el supuesto central de la nulidad del despido. Si al momento de despedirlo no estaban pagadas, el despido no extingue el contrato y se devengan remuneraciones y cotizaciones hasta que se convalide. La deuda se reclama en la misma demanda.',
    },
    {
      pregunta: '¿Sigo devengando sueldo después del despido?',
      respuesta:
        'Sí, para los efectos de la nulidad: el período entre el despido y la convalidación genera remuneraciones y cotizaciones que el empleador debe pagar. No implica reincorporación al puesto de trabajo. La ley no fija un máximo, salvo que el empleador entre en liquidación concursal.',
    },
    {
      pregunta: '¿Sirve demandar si la empresa está en quiebra?',
      respuesta:
        'La situación concursal del empleador cambia el análisis, porque la Ley 20.720 introdujo reglas especiales. Antes de demandar conviene revisar el estado del procedimiento concursal y las posibilidades reales de cobro.',
    },
  ],
  relacionados: [
    { label: 'Despido injustificado: plazos y demanda', href: '/despido-injustificado' },
    { label: 'Autodespido por incumplimiento del empleador', href: '/autodespido' },
    { label: 'Remuneraciones y liquidación de sueldo', href: '/areas/remuneraciones' },
    { label: 'Cómo cobramos', href: '/honorarios' },
  ],
};
