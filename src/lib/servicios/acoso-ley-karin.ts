import type { Servicio } from './tipos';

export const ACOSO_LEY_KARIN: Servicio = {
  slug: 'acoso-laboral-ley-karin',
  path: '/acoso-laboral-ley-karin',
  areaSlug: 'derechos-fundamentales',
  eyebrow: 'Derechos fundamentales',
  h1: 'Acoso laboral y Ley Karin',
  metaTitle: 'Acoso laboral y Ley Karin: cómo denunciar en Chile',
  metaDescription:
    'Qué es el acoso laboral y cómo denunciarlo bajo la Ley Karin 21.643: protocolo obligatorio, denuncia ante la Dirección del Trabajo e indemnización del daño.',
  dek:
    'La Ley 21.643 cambió las reglas: hoy el empleador está obligado a prevenir, investigar y sancionar. La denuncia ya no depende de su voluntad.',
  secciones: [
    {
      titulo: 'Qué es el acoso laboral',
      parrafos: [
        'El acoso laboral es una conducta reiterada de agresión u hostigamiento ejercida por el empleador, por sus representantes o por otros trabajadores, que tiene por resultado menoscabar la dignidad de la persona o crear un entorno hostil o humillante.',
        'La Ley 21.643, conocida como Ley Karin, incorporó esa definición al Código del Trabajo y estableció un estatuto de prevención y sanción. Entró en vigencia el 1 de agosto de 2024. [VERIFICAR: artículo exacto del Código del Trabajo que contiene la definición]',
        'Conviene distinguir dos figuras que la ley separa: el acoso laboral, entre compañeros o de jefaturas hacia subordinados, y el acoso sexual, que tiene connotación sexual y reglas propias de investigación.',
      ],
    },
    {
      titulo: 'Qué cambió con la Ley Karin',
      parrafos: [
        'Antes, la respuesta dependía en buena medida de la voluntad del empleador. Desde la vigencia de la ley, existen obligaciones exigibles:',
      ],
      lista: [
        'Protocolo de prevención del acoso laboral y sexual, obligatorio para los empleadores (artículo 154 del Código del Trabajo). [VERIFICAR: umbral de trabajadores y contenido mínimo exigido]',
        'Canal de denuncias conocido y accesible para todas las personas que trabajan en la empresa, incluidas las que están a honorarios.',
        'Procedimiento de investigación con plazos, medidas de resguardo para la persona denunciante y resguardo de confidencialidad.',
        'Posibilidad de denunciar directamente ante la Dirección del Trabajo cuando el empleador no investiga o lo hace deficientemente.',
      ],
    },
    {
      titulo: 'Cómo se denuncia',
      parrafos: [
        'La denuncia puede presentarse ante el empleador —a través del canal que debe existir— o directamente ante la Dirección del Trabajo. Los hechos deben relatarse con fechas, personas involucradas y testigos, y conviene acompañar la prueba disponible: correos, mensajes, registros de asistencia, licencias médicas.',
        'El empleador debe adoptar medidas de resguardo mientras se investiga, como separar a las partes o cambiar el turno de la persona denunciante. [VERIFICAR: plazo para adoptar medidas y para concluir la investigación]',
        'Si el empleador no investiga, o la investigación no es imparcial, la denuncia administrativa y la acción judicial pueden ejercerse en paralelo.',
      ],
    },
    {
      titulo: 'La vía judicial: tutela laboral',
      parrafos: [
        'El acoso laboral afecta derechos fundamentales, en particular la dignidad y la integridad psíquica. Por eso se reclama por el procedimiento de tutela laboral, que tiene reglas probatorias favorables al trabajador: si existen indicios de la vulneración, corresponde al empleador explicar y probar lo contrario.',
        'La acción de tutela tiene un plazo de caducidad de sesenta días contados desde la vulneración o desde el cese de la conducta. [VERIFICAR: artículo y cómputo exacto del plazo]',
      ],
    },
    {
      titulo: 'Qué se puede obtener',
      parrafos: [
        'La tutela busca restablecer el derecho y reparar el daño. Según el caso, la sentencia puede ordenar el cese de la conducta, la adopción de medidas, una indemnización por daño moral y, cuando ha habido despido, el recargo legal correspondiente.',
        'A eso se suman las prestaciones propias del término del contrato, si el acoso derivó en un despido o en un autodespido. [VERIFICAR: montos y recargos aplicables según el artículo 489]',
      ],
    },
    {
      titulo: 'Cómo trabajamos',
      parrafos: [
        'Revisamos los antecedentes antes de presentar la denuncia, porque lo que se declare al inicio condiciona todo el procedimiento. La consulta inicial es gratuita y confidencial.',
        'Nuestros honorarios son por resultas, pagaderos cuando usted recibe su dinero.',
      ],
    },
  ],
  faq: [
    {
      pregunta: '¿Necesito testigos para denunciar acoso laboral?',
      respuesta:
        'No es imprescindible, pero ayuda. En la tutela laboral basta con aportar indicios de la conducta; a partir de ahí el empleador debe explicar los hechos. Correos, mensajes, licencias médicas y registros de asistencia suelen ser prueba relevante.',
    },
    {
      pregunta: '¿Puedo denunciar si ya renuncié?',
      respuesta:
        'Sí, siempre que la acción se presente dentro del plazo de caducidad contado desde la vulneración o desde el cese de la conducta. La renuncia no borra lo ocurrido, aunque conviene revisar con cuidado las fechas.',
    },
    {
      pregunta: '¿Qué pasa con mi trabajo mientras se investiga?',
      respuesta:
        'El empleador debe adoptar medidas de resguardo, que pueden incluir la separación de las partes o el cambio de turno. Esas medidas no pueden significar un perjuicio para la persona denunciante.',
    },
  ],
  relacionados: [
    { label: 'Protocolo Ley Karin para empresas', href: '/empresas/protocolo-ley-karin' },
    { label: 'Autodespido por incumplimiento del empleador', href: '/autodespido' },
    { label: 'Derechos fundamentales', href: '/areas/derechos-fundamentales' },
    { label: 'Cómo cobramos', href: '/honorarios' },
  ],
};
