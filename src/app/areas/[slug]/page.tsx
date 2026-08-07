import type { Metadata } from 'next';
import Link from 'next/link';
import { PRACTICE_AREAS } from '@/lib/site-config';
import { notFound } from 'next/navigation';

// ── Contenido real de cada área de práctica ──────────────
// Basado en investigación de evidencia pública (documentos judiciales,
// LinkedIn, publicaciones académicas, dictámenes de la DT).

const AREA_CONTENT: Record<string, {
  intro: string;
  subtemas: { title: string; body: string }[];
  evidencia?: string;
  doctrine?: { title: string; body: string };
  image?: string;
}> = {
  'terminacion-contrato': {
    intro:
      'La terminación del contrato de trabajo es una de las áreas centrales de la práctica del estudio. ' +
      'Representamos a trabajadores en causas relacionadas con despidos injustificados, improcedentes e ' +
      'indebidos, así como en el cobro de indemnizaciones y prestaciones derivadas del término del contrato. ' +
      'No se trata solamente de "¿me pueden despedir?": abordamos todo el ecosistema jurídico que rodea ' +
      'la terminación de la relación laboral.',
    subtemas: [
      {
        title: 'Despido injustificado, improcedente e indebido',
        body:
          'La causal de despido debe ser probada por el empleador. Si la causal invocada no se configura ' +
          'o no se acredita en juicio, el despido es declarado injustificado y proceden las indemnizaciones ' +
          'legales con los recargos correspondientes. El despido improcedente, por su parte, se configura ' +
          'cuando la causal es formalmente incorrecta o no se ajusta a los hechos. Revisamos la carta de ' +
          'despido, la causal utilizada y la estrategia judicial más adecuada para cada caso.',
      },
      {
        title: 'Nulidad del despido',
        body:
          'La nulidad del despido —también conocida como Ley Bustos— se produce cuando el empleador no ' +
          'ha enterado las cotizaciones previsionales del trabajador al momento del despido. En esos casos, ' +
          'el despido no produce efectos y el empleador debe pagar las remuneraciones y cotizaciones ' +
          'durante todo el período que media entre el despido y su convalidación. El estudio tiene ' +
          'experiencia reiterada en demandas que combinan despido, nulidad y cobro de prestaciones.',
      },
      {
        title: 'Autodespido o despido indirecto',
        body:
          'El autodespido no consiste simplemente en que el trabajador "renuncie porque el empleador ' +
          'incumplió". Es un mecanismo jurídico que exige determinadas condiciones —incumplimiento grave ' +
          'de las obligaciones del contrato por parte del empleador— y cuya utilización debe analizarse ' +
          'cuidadosamente antes de terminar la relación laboral. Si el tribunal acoge la demanda, se ' +
          'ordenan las indemnizaciones propias de un despido injustificado. Si la rechaza, el autodespido ' +
          'puede entenderse como renuncia, por lo que la asesoría legal previa es indispensable.',
      },
      {
        title: 'Finiquito, reserva de derechos e indemnizaciones',
        body:
          'La firma del finiquito es uno de los momentos jurídicamente más delicados para el trabajador. ' +
          'Asesoramos en la revisión del finiquito antes de su firma, en el cálculo correcto de las ' +
          'indemnizaciones —sustitutiva del aviso previo, por años de servicio, recargos legales— y en ' +
          'la reserva de derechos cuando corresponde. También en el cobro de prestaciones pendientes ' +
          'como feriado proporcional, gratificaciones y diferencias de remuneraciones.',
      },
    ],
    evidencia:
      'El estudio ha representado a trabajadores en procedimientos por despido injustificado, ' +
      'despido indirecto y nulidad del despido ante los Juzgados de Letras del Trabajo, con ' +
      'actuaciones documentadas en causas recientes (2024-2025).',
    image: '/images/fotos/terminacion-contrato.jpg',
  },

  remuneraciones: {
    intro:
      'Las remuneraciones constituyen probablemente el área de mayor profundidad doctrinal del estudio. ' +
      'No es simplemente una materia que se litiga: se ha estudiado y publicado sobre ella. El equipo ' +
      'cuenta con conocimiento especializado en la estructura de las remuneraciones, su regulación legal ' +
      'y la interpretación que de ella han hecho los tribunales y la Dirección del Trabajo.',
    subtemas: [
      {
        title: 'Sueldo y remuneración fija',
        body:
          'El concepto de sueldo y la noción de "fijeza" de las remuneraciones han sido objeto de ' +
          'análisis doctrinal por parte del estudio. La Dirección del Trabajo ha utilizado expresamente ' +
          'esta obra al interpretar el concepto de sueldo en su jurisprudencia administrativa. Esto ' +
          'permite abordar controversias sobre calificación de estipendios con un respaldo doctrinal ' +
          'que pocos estudios pueden ofrecer.',
      },
      {
        title: 'Remuneración variable y participativa',
        body:
          'Comisiones, bonos, incentivos y remuneraciones vinculadas al rendimiento plantean problemas ' +
          'jurídicos específicos: ¿son permanentes o eventuales? ¿Deben considerarse para el cálculo de ' +
          'indemnizaciones? ¿Cómo se relacionan con las gratificaciones? El estudio ha publicado ' +
          'específicamente sobre la distinción entre remuneración fija, variable y participativa, ' +
          'incluyendo un artículo en la Revista Chilena de Derecho del Trabajo y de la Seguridad Social.',
      },
      {
        title: 'Horas extraordinarias',
        body:
          'El estudio interviene en procedimientos donde se reclaman horas extraordinarias, junto con ' +
          'despido indirecto, nulidad y otras prestaciones. La determinación de la jornada ordinaria, ' +
          'el registro de asistencia, los descansos y el cálculo y pago de horas extraordinarias ' +
          'conforman un eje de práctica relevante.',
      },
      {
        title: 'Gratificaciones, semana corrida y otros beneficios',
        body:
          'Asesoramos en la determinación del derecho a gratificación legal, su base de cálculo y la ' +
          'eventual imputación de otros beneficios. También en la aplicación del beneficio de semana ' +
          'corrida a remuneraciones variables, las remuneraciones durante vacaciones y las diferencias ' +
          'de sueldo derivadas de modificaciones contractuales.',
      },
    ],
    doctrine: {
      title: 'Doctrina citada por la Dirección del Trabajo',
      body:
        'El Dictamen 3662/53 de 2010 de la Dirección del Trabajo utiliza el análisis de Lautaro Fariña ' +
        'sobre la "fijeza" de las remuneraciones al interpretar el concepto de sueldo. Este criterio ha ' +
        'sido reiterado en pronunciamientos posteriores, incluyendo el Ordinario 2734/47 y el Ordinario ' +
        '457. La obra del estudio forma parte de la jurisprudencia administrativa laboral chilena.',
    },
    image: '/images/fotos/codigo-trabajo.jpg',
  },

  'derechos-fundamentales': {
    intro:
      'Los derechos fundamentales de los trabajadores gozan de una protección especial en el procedimiento ' +
      'laboral chileno a través de la acción de tutela laboral. El estudio ha intervenido en procedimientos ' +
      'de tutela por vulneración de derechos fundamentales con ocasión del despido y otras conductas ' +
      'lesivas, así como en acuerdos alcanzados dentro de esos mismos procedimientos.',
    subtemas: [
      {
        title: 'Tutela laboral por vulneración de derechos',
        body:
          'El procedimiento de tutela laboral protege la integridad física y psíquica del trabajador, ' +
          'su privacidad y honra, la libertad de conciencia, expresión y libertad de trabajo. También ' +
          'procede cuando el despido es por represalia tras una denuncia o demanda laboral —garantía ' +
          'de indemnidad— o por discriminación arbitraria. El estudio interviene desde el primer día ' +
          'y guía al trabajador en cada etapa.',
      },
      {
        title: 'Discriminación laboral y represalias',
        body:
          'La garantía de no discriminación y la protección contra represalias son derechos que el ' +
          'ordenamiento laboral chileno tutela de manera reforzada. El estudio ha participado en ' +
          'procedimientos donde se alega vulneración de esta garantía asociada al despido, incluyendo ' +
          'casos que han concluido mediante acuerdos dentro del procedimiento judicial.',
      },
      {
        title: 'Dignidad del trabajador e integridad',
        body:
          'Más allá de los aspectos indemnizatorios, la tutela laboral busca restablecer el imperio ' +
          'del derecho cuando los derechos fundamentales del trabajador han sido afectados. Asesoramos ' +
          'en la determinación de la procedencia de la acción y en la construcción de la estrategia ' +
          'probatoria adecuada para acreditar la vulneración.',
      },
    ],
    evidencia:
      'Existen antecedentes de actuaciones del estudio en procedimientos de tutela laboral con ocasión ' +
      'del despido, así como de acuerdos alcanzados dentro de esos procedimientos, lo que demuestra ' +
      'experiencia tanto en litigación como en negociación de soluciones.',
    image: '/images/fotos/derechos-fundamentales.jpg',
  },

  'relacion-laboral': {
    intro:
      'No toda prestación de servicios configura una relación laboral, y no toda relación laboral ' +
      'está correctamente formalizada. El estudio aborda controversias donde se discute la existencia ' +
      'misma de la relación de trabajo, especialmente relevante para personas contratadas formalmente ' +
      'a honorarios o bajo otras figuras, pero que en los hechos han trabajado con subordinación y dependencia.',
    subtemas: [
      {
        title: 'Reconocimiento de relación laboral',
        body:
          'El estudio ha participado en procedimientos donde se discute la existencia de una relación ' +
          'laboral y el correspondiente cobro de prestaciones. Esto es particularmente relevante para ' +
          'trabajadores contratados a honorarios, como prestadores de servicios o bajo otras estructuras ' +
          'contractuales que podrían estar encubriendo una relación laboral.',
      },
      {
        title: 'Subordinación y dependencia',
        body:
          'La determinación de si existe o no un vínculo laboral depende de la presencia de ' +
          'subordinación y dependencia en los hechos, más allá de la denominación del contrato. ' +
          'Analizamos indicios como la continuidad de los servicios, la obligación de asistencia, ' +
          'la rendición de cuenta y la dependencia económica.',
      },
      {
        title: 'Unidad económica y responsabilidad solidaria',
        body:
          'Existen antecedentes donde el estudio ha intervenido en controversias que comprenden ' +
          'varias entidades relacionadas, planteando la existencia de una unidad económica. También ' +
          'en procedimientos donde se demanda a entidades responsables solidarias o subsidiarias, ' +
          'lo que revela experiencia en conflictos laborales con estructuras empresariales complejas.',
      },
    ],
    image: '/images/fotos/relacion-laboral.jpg',
  },

  'derecho-colectivo': {
    intro:
      'El estudio realiza asesoría a organizaciones sindicales en negociación colectiva, fuero sindical, ' +
      'prácticas antisindicales y defensa de dirigentes. La experiencia en litigio laboral permite ' +
      'anticipar las estrategias del empleador y fortalecer la posición del sindicato en cada etapa.',
    subtemas: [
      {
        title: 'Asesoría a sindicatos',
        body:
          'Brindamos asesoría jurídica a organizaciones de trabajadores en materias propias del ' +
          'derecho colectivo: interpretación de instrumentos colectivos, procedimientos laborales ' +
          'colectivos y defensa de derechos sindicales.',
      },
      {
        title: 'Fuero sindical y prácticas antisindicales',
        body:
          'Los dirigentes sindicales gozan de fuero laboral, lo que significa que no pueden ser ' +
          'despedidos sin autorización judicial previa. Asesoramos en la defensa del fuero y en ' +
          'la denuncia de prácticas antisindicales o desleales en la negociación colectiva.',
      },
      {
        title: 'Negociación colectiva',
        body:
          'El estudio asesora a sindicatos en procesos de negociación colectiva reglada, incluyendo ' +
          'la preparación del proyecto de contrato colectivo, la respuesta a la propuesta del empleador, ' +
          'el análisis de la última oferta y la eventual votación de huelga. La representación abarca ' +
          'todas las etapas del procedimiento, desde la presentación del proyecto hasta la suscripción ' +
          'del instrumento colectivo o la resolución del conflicto por la vía que corresponda.',
      },
    ],
    image: '/images/fotos/derecho-colectivo.jpg',
  },

  'litigacion-recursos': {
    intro:
      'La práctica del estudio no se limita a las demandas ante el Juzgado de Letras del Trabajo. ' +
      'El equipo ha intervenido en recursos ante la Corte de Apelaciones de Valparaíso y en un ' +
      'recurso de queja que llegó a la Corte Suprema. Esto permite ofrecer una defensa que va ' +
      'más allá de la primera instancia.',
    subtemas: [
      {
        title: 'Recursos ante la Corte de Apelaciones',
        body:
          'Existen antecedentes de recursos presentados ante la Corte de Apelaciones de Valparaíso ' +
          'por el equipo del estudio. Los recursos ordinarios y extraordinarios permiten revisar ' +
          'decisiones de primera instancia cuando existen errores de hecho, de derecho o vicios ' +
          'procedimentales.',
      },
      {
        title: 'Recurso de queja ante la Corte Suprema',
        body:
          'En 2025, el estudio intervino en un recurso de queja que llegó a la Corte Suprema, ' +
          'relacionado con el acceso de una trabajadora al procedimiento laboral. La litigación ' +
          'ante el máximo tribunal refleja la capacidad del equipo para sostener una estrategia ' +
          'judicial en todas las instancias.',
      },
      {
        title: 'Estrategia judicial integral',
        body:
          'La experiencia en todas las instancias permite diseñar una estrategia desde el inicio ' +
          'del conflicto que considere los criterios de los tribunales superiores. No se trata ' +
          'solo de presentar una demanda: se trata de construir un caso que pueda sostenerse ' +
          'hasta las últimas consecuencias si es necesario.',
      },
    ],
    evidencia:
      'Corte Suprema, Rol N° 24.934-2025 — recurso de queja con intervención del equipo del estudio.',
    image: '/images/fotos/litigante.jpg',
  },

  'accidentes-laborales': {
    intro:
      'Los accidentes del trabajo y las enfermedades profesionales generan derechos que van más allá ' +
      'del seguro de la mutualidad. Si el accidente ocurrió por negligencia del empleador o incumplimiento ' +
      'de normas de seguridad, puede corresponder evaluar la procedencia de acciones judiciales adicionales. ' +
      'El estudio analiza cada caso, determina las responsabilidades que correspondan y ejerce las acciones ' +
      'para obtener la reparación que en derecho corresponda.',
    subtemas: [
      {
        title: 'Accidentes del trabajo',
        body:
          'Un accidente del trabajo es toda lesión que sufra un trabajador a causa o con ocasión del ' +
          'trabajo. Las prestaciones del seguro de la Ley 16.744 cubren atención médica y subsidios, ' +
          'pero no indemnizan el daño moral ni el lucro cesante. Cuando existen antecedentes de falta ' +
          'de medidas de seguridad, capacitación insuficiente o equipos defectuosos, corresponde evaluar ' +
          'la procedencia de una demanda de indemnización de perjuicios por responsabilidad civil.',
      },
      {
        title: 'Enfermedades profesionales',
        body:
          'Las enfermedades profesionales son aquellas causadas directamente por el ejercicio de la ' +
          'profesión u oficio. Su calificación requiere un dictamen de los organismos administradores ' +
          'del seguro. Asesoramos en la obtención de la calificación, en la revisión de dictámenes ' +
          'desfavorables y en la determinación de las prestaciones que corresponden al trabajador.',
      },
      {
        title: 'Reparación del daño',
        body:
          'Más allá de las prestaciones del seguro social, el trabajador puede tener derecho a reclamar ' +
          'otros perjuicios sufridos: daño emergente, lucro cesante y daño moral. El estudio evalúa la ' +
          'viabilidad de cada caso, determina las responsabilidades que correspondan y ejerce las ' +
          'acciones pertinentes para obtener la reparación que en derecho proceda.',
      },
    ],
    image: '/images/fotos/accidentes-laborales.jpg',
  },
};

// ── Componente ────────────────────────────────────────────
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) return { title: 'Área no encontrada' };
  return { title: area.title, description: area.description };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  // eslint-disable-next-line security/detect-object-injection
  const content = AREA_CONTENT[slug];

  if (!area) notFound();

  return (
    <>
      {/* ── Hero del área ───────────────────────────────── */}
      <section className="bg-primary text-white py-16">
        <div className="container-narrow">
          <Link
            href="/areas"
            className="text-white/60 hover:text-white text-sm inline-block mb-4 transition-colors"
          >
            ← Áreas de Práctica
          </Link>
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">{area.title}</h1>
          <p className="text-lg text-white/80">{area.description}</p>
        </div>
      </section>

      {/* ── Contenido ────────────────────────────────────── */}
      <section className="section-white">
        <div className="container-narrow">
          {content?.image && (
            <div className="rounded-lg overflow-hidden mb-12">
              <img
                src={content.image}
                alt={area.title}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
          {content ? (
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">{content.intro}</p>

              {content.subtemas.map((sub, i) => (
                <div key={i} className="mt-8">
                  <h2 className="text-xl">{sub.title}</h2>
                  <p>{sub.body}</p>
                </div>
              ))}

              {content.doctrine && (
                <div className="bg-surface-alt border border-border rounded-lg p-6 my-8 not-prose">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {content.doctrine.title}
                  </h3>
                  <p className="text-text-muted">{content.doctrine.body}</p>
                </div>
              )}

              {content.evidencia && (
                <blockquote className="border-l-4 border-primary/30 pl-4 italic text-text-muted my-8">
                  {content.evidencia}
                </blockquote>
              )}
            </div>
          ) : (
            <div className="prose max-w-none">
              <p>
                El estudio cuenta con experiencia en esta área de práctica. El contenido
                específico para <strong>{area.title}</strong> está en preparación y será
                publicado próximamente.
              </p>
            </div>
          )}

          {/* ── CTA ──────────────────────────────────────── */}
          <div className="mt-12 p-6 bg-surface-alt rounded-lg text-center">
            <h2 className="text-lg mb-2">¿Necesita asesoría en esta área?</h2>
            <p className="text-text-muted mb-4">
              Solicite una evaluación de su caso. Le responderemos con claridad sobre sus
              opciones y los pasos a seguir.
            </p>
            <Link
              href="/contacto"
              className="cta-primary"
            >
              Solicitar evaluación →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
