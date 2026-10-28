// lib/faq.ts
// Preguntas frecuentes de la home y de las páginas de área.
// Todo el texto vive aquí; el componente solo lo pinta.
import type { FaqItem } from '@/lib/servicios/tipos';

/** Home: consultas genéricas de «abogado…», asignadas por intención. */
export const FAQ_HOME: FaqItem[] = [
  {
    pregunta: '¿Atienden casos urgentes?',
    respuesta:
      'Sí. En materia laboral los plazos son cortos: la acción por despido caduca a los sesenta días hábiles desde la separación (artículo 168) y la de nulidad del despido prescribe a los seis meses (artículo 510). Si su plazo está por vencer, escríbanos indicando la fecha de término del contrato y revisamos primero ese punto.',
  },
  {
    pregunta: '¿Qué hace un abogado experto en lo laboral?',
    respuesta:
      'Determina si existe un derecho vulnerado, calcula las prestaciones que corresponden, prepara la prueba y litiga ante el Juzgado del Trabajo. La diferencia con un abogado generalista está en el volumen: quien ve causas laborales todos los días conoce los criterios del tribunal, los plazos que no se recuperan y las causales que se acreditan con qué prueba.',
  },
  {
    pregunta: '¿Llevan casos laborales de cualquier tipo?',
    respuesta:
      'Llevamos siete materias, todas de Derecho del Trabajo: término de contrato, remuneraciones, derechos fundamentales, relación laboral, derecho colectivo, litigación y accidentes laborales. No tomamos causas de otras áreas, ni siquiera cuando el cliente es el mismo.',
  },
  {
    pregunta: '¿Puedo consultar sin compromiso?',
    respuesta:
      'Sí. La primera consulta es gratuita y no obliga a nada: sirve para revisar los antecedentes y decirle con claridad si existe un caso y qué se puede obtener. Si el caso no es viable, se lo decimos en esa conversación.',
  },
  {
    pregunta: '¿Necesito un abogado para demandar a mi empleador?',
    respuesta:
      'Para demandar ante el Juzgado del Trabajo, sí: la ley exige comparecer con patrocinio de abogado (artículo 434 del Código del Trabajo). El reclamo ante la Inspección del Trabajo, en cambio, puede presentarlo usted mismo. Si no puede pagar un abogado, las Corporaciones de Asistencia Judicial ofrecen defensa gratuita (artículo 431). Con nosotros, la primera consulta es gratuita y los honorarios se pagan solo si usted recibe su dinero.',
  },
  {
    pregunta: '¿Conviene un abogado de derecho laboral?',
    respuesta:
      'Conviene cuando el caso depende de una causal, un plazo o una base de cálculo. Un despido por necesidades de la empresa, una nulidad por cotizaciones impagas o una diferencia de remuneraciones se ganan o se pierden en el detalle: la causal que se invocó, la fecha exacta y la forma en que se acreditó la remuneración.',
  },
  {
    pregunta: '¿Atienden en Valparaíso?',
    respuesta:
      'Sí. Atendemos en Viña del Mar, Valparaíso, Quilpué y Villa Alemana, con oficina en 1 Oriente 252, Viña del Mar. Para personas de otras regiones hacemos reuniones por videollamada; litigamos principalmente en la V Región y la Región Metropolitana.',
  },
  {
    pregunta: '¿La primera consulta tiene costo?',
    respuesta:
      'No tiene costo. Incluye revisar la carta de despido, el contrato, las liquidaciones y el certificado de cotizaciones, y explicarle las vías que existen.',
  },
];

/** Por área de práctica: hoy solo accidentes tiene bloque propio. */
export const FAQ_POR_AREA: Record<string, FaqItem[]> = {
  'accidentes-laborales': [
    {
      pregunta: '¿Un abogado para accidente laboral cobra por adelantado?',
      respuesta:
        'No. Nuestros honorarios son por resultas: un porcentaje de lo que se obtiene, que se paga cuando usted recibe su dinero. No hay cuota de ingreso ni pago por adelantado, incluso en causas de accidente donde la tramitación puede durar más.',
    },
    {
      pregunta: '¿Se puede reclamar un accidente sin abogado?',
      respuesta:
        'La denuncia y las prestaciones del seguro no requieren abogado: el empleador debe denunciar el accidente y, si no lo hace dentro de veinticuatro horas, usted puede denunciarlo directamente ante el organismo administrador al que está afiliado su empleador (la mutual o el ISL). Lo que sí cambia con asesoría es la segunda parte: reclamar el daño que el seguro no cubre.',
    },
    {
      pregunta: '¿Puedo contratar un abogado para un accidente?',
      respuesta:
        'Sí, y conviene hacerlo pronto. Un abogado revisa el grado de incapacidad que se le asignó, las prestaciones que corresponden y si además existe responsabilidad de un tercero o del empleador por el daño sufrido.',
    },
    {
      pregunta: '¿Quién ve accidentes: un laboralista?',
      respuesta:
        'Sí, cuando se demanda al empleador: esos juicios corresponden a los juzgados del trabajo (artículo 420 del Código del Trabajo), y las prestaciones del seguro se rigen por la Ley 16.744. Si el responsable es un tercero, como en muchos accidentes de trayecto, la demanda se presenta ante los tribunales civiles.',
    },
    {
      pregunta: '¿Tienen experiencia en accidentes de trabajo?',
      respuesta:
        'El estudio lleva más de diez años litigando y más de seiscientos juicios laborales, y el área de accidentes cubre dos frentes: la invalidez y las prestaciones ante el organismo administrador, y la indemnización por accidentes laborales ante los tribunales.',
    },
    {
      pregunta: '¿Atienden temas de seguridad social?',
      respuesta:
        'Sí, en lo que se cruza con el trabajo: calificación de invalidez, prestaciones de la mutual o del ISL y revisión de dictámenes desfavorables. Si el accidente se debe a culpa o dolo del empleador o de un tercero, la ley permite reclamar además las indemnizaciones del derecho común, incluido el daño moral (artículo 69 de la Ley 16.744).',
    },
  ],
};
