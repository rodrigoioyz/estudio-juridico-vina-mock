import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'El Estudio',
  description: `Conozca al ${SITE_CONFIG.name}. Especialistas en Derecho del Trabajo con más de una década de trayectoria en Viña del Mar.`,
};

export default function EstudioPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="bg-primary text-white py-20">
        <div className="container-narrow">
          <h1 className="text-white text-4xl font-bold mb-6">El Estudio</h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
            El Estudio Jurídico Laboral es una firma especializada en Derecho del Trabajo
            que desarrolla asesoría preventiva y representación judicial para trabajadores,
            empresas y organizaciones sindicales. Su práctica comprende conflictos derivados
            de la terminación del contrato, despidos y autodespidos, remuneraciones y
            prestaciones laborales, tutela de derechos fundamentales, reconocimiento de
            relaciones laborales, accidentes del trabajo y enfermedades profesionales, así
            como materias de derecho colectivo y negociación colectiva.
          </p>
        </div>
      </section>

      {/* ── Descripción maestra ──────────────────────────── */}
      <section className="section-white">
        <div className="container-narrow">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              El <strong>{SITE_CONFIG.name}</strong> combina{' '}
              <strong>asesoría preventiva y representación judicial para trabajadores,
              empresas y organizaciones sindicales</strong>. Su práctica comprende las distintas
              dimensiones de la relación laboral, desde la prevención de contingencias hasta la
              resolución judicial de conflictos individuales y colectivos ante Juzgados de Letras
              del Trabajo, Corte de Apelaciones y Corte Suprema.
            </p>

            <p>
              En el ámbito empresarial, el estudio desarrolla asesoría en{' '}
              <strong>cumplimiento normativo laboral, implementación de obligaciones derivadas
              de la Ley Karin, revisión de contingencias laborales y due diligence</strong>,
              además de representación en procedimientos judiciales. En materia sindical,
              acompaña procesos de negociación colectiva, analiza instrumentos colectivos
              y representa a organizaciones y dirigentes en conflictos laborales.
            </p>

            <p>
              La práctica combina esta experiencia litigiosa con una{' '}
              <strong>dimensión académica y doctrinal</strong>, particularmente en materias
              de remuneraciones, donde existen publicaciones especializadas de Lautaro Fariña
              Quezada citadas por la Dirección del Trabajo en su jurisprudencia administrativa.
            </p>
          </div>
        </div>
      </section>

      {/* ── Los 4 pilares ────────────────────────────────── */}
      <section className="section-paper">
        <div className="container-wide">
          <h2 className="section-title text-center">Lo que define nuestra práctica</h2>
          <p className="section-dek text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Cuatro componentes que distinguen al estudio en el ejercicio del Derecho del Trabajo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" style={{ marginTop: '3rem' }}>
            {[
              {
                number: '1',
                title: 'Especialización',
                body: 'Derecho Laboral como disciplina central y exclusiva. No ofrecemos familia, civil, penal ni otras materias. Todo lo que hacemos es Derecho del Trabajo, y esa concentración nos permite conocer los criterios de los tribunales, la jurisprudencia actualizada y las estrategias que funcionan en sala.',
              },
              {
                number: '2',
                title: 'Litigación',
                body: 'Experiencia real y continuada ante Juzgados de Letras del Trabajo, Corte de Apelaciones de Valparaíso y Corte Suprema. El estudio ha intervenido en recursos de queja, procedimientos de tutela laboral y causas con estructuras empresariales complejas que involucran responsabilidad solidaria y unidad económica.',
              },
              {
                number: '3',
                title: 'Asesoría',
                body: 'Atendemos a trabajadores, empresas y organizaciones sindicales. Esto nos permite conocer la relación laboral desde más de una posición, lo que se traduce en estrategias mejor informadas. La práctica incluye tanto la resolución de conflictos ya existentes como la prevención de contingencias futuras.',
              },
              {
                number: '4',
                title: 'Conocimiento',
                body: 'La actividad profesional del estudio se complementa con investigación y producción académica en Derecho del Trabajo. Estas contribuciones incluyen trabajos doctrinales sobre regulación del sueldo y remuneraciones variables que han sido considerados por la Dirección del Trabajo en la construcción de su jurisprudencia administrativa.',
              },
            ].map((pilar) => (
              <div key={pilar.number} className="bg-white p-8 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-primary/20">{pilar.number}</span>
                <h3 className="text-xl mt-2 mb-3">{pilar.title}</h3>
                <p className="text-text-muted leading-relaxed">{pilar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Producción académica ─────────────────────────── */}
      <section className="section-white">
        <div className="container-narrow">
          <h2 className="section-title">Conocimiento que forma parte de nuestra práctica</h2>
          <div className="prose max-w-none" style={{ marginTop: '2rem' }}>
            <p>
              La actividad profesional del estudio se complementa con producción académica
              especializada en Derecho del Trabajo. Entre estas contribuciones se encuentra
              el trabajo de <strong>Lautaro Fariña Quezada</strong> sobre regulación del
              sueldo y remuneraciones variables.
            </p>

            <div className="bg-surface-alt border border-border rounded-lg p-6 my-8">
              <h3 className="text-lg mb-2">Publicaciones</h3>
              <ul className="space-y-3 text-text-muted">
                <li>
                  <strong>Regulación del sueldo en el Código del Trabajo</strong> (2009)
                </li>
                <li>
                  <strong>&ldquo;Remuneración variable: elemento diferenciador y relación con
                  las remuneraciones participativas&rdquo;</strong>, publicado en la{' '}
                  <em>Revista Chilena de Derecho del Trabajo y de la Seguridad Social</em> de
                  la Universidad de Chile, volumen 6, número 11, 2015.
                </li>
              </ul>
            </div>

            <p>
              Lo particularmente valioso es que la <strong>Dirección del Trabajo</strong> ha
              utilizado expresamente esta obra como doctrina jurídica al interpretar el
              concepto de sueldo. El Dictamen 3662/53 de 2010 recoge el análisis sobre la
              &ldquo;fijeza&rdquo; de las remuneraciones, criterio reiterado en pronunciamientos
              posteriores como el Ordinario 2734/47.
            </p>

            <p>
              Esto permite afirmar algo poco frecuente en estudios jurídicos: nuestra práctica
              cuenta con producción doctrinal que ha sido considerada por la autoridad
              administrativa del trabajo en la construcción de su jurisprudencia.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cómo trabajamos ──────────────────────────────── */}
      <section className="section-paper">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/fotos/pareja-abogados.jpg"
              alt="Abogados revisando documentos con el Código del Trabajo"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="section-title">Cómo trabajamos</h2>
            <div className="prose max-w-none" style={{ marginTop: '2rem' }}>
            <p>
              Los asuntos son abordados por un <strong>equipo jurídico</strong>, no mediante
              una práctica individual organizada alrededor de un único abogado. En los
              procedimientos judiciales, el estudio comparece con un abogado patrocinante
              acompañado por abogados apoderados que integran el equipo.
            </p>

            <p>
              Una estrategia laboral no consiste necesariamente en llevar todos los conflictos
              hasta una sentencia. Dependiendo del caso, puede incluir{' '}
              <strong>negociación, conciliación o la construcción de un acuerdo</strong> que
              permita terminar el conflicto en condiciones jurídicamente adecuadas.
            </p>

            <p>
              Definimos la herramienta apropiada para cada conflicto, combinando análisis
              jurídico, conocimiento de los tribunales y experiencia práctica en las distintas
              etapas del procedimiento laboral.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-white text-center">
        <div className="container-narrow">
          <h2 className="section-title">¿Necesita asesoría en Derecho del Trabajo?</h2>
          <p className="section-dek" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Solicite una evaluación de su caso. Le diremos con claridad si existe un caso,
            qué puede obtener y cómo proceder.
          </p>
          <Link
            href="/contacto"
            className="cta-primary"
          >
            Solicitar evaluación →
          </Link>
        </div>
      </section>
    </>
  );
}
