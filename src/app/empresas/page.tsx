import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Empresas',
  description:
    'Asesoría preventiva, cumplimiento normativo y representación judicial para empleadores. Derecho del Trabajo para empresas en Viña del Mar y todo Chile.',
};

export default function EmpresasPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="bg-primary text-white py-20">
        <div className="container-narrow">
          <h1 className="text-white text-4xl font-bold mb-6">Servicios para Empresas</h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
            Asesoramos a empleadores en la gestión y defensa de controversias laborales.
            Evaluamos la solidez jurídica de las decisiones antes de que se conviertan en
            conflictos y representamos a la empresa ante el Juzgado de Letras del Trabajo
            y la Inspección del Trabajo.
          </p>
        </div>
      </section>

      {/* ── Servicios ───────────────────────────────────── */}
      <section className="section-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Asesoría Preventiva',
                body: 'Evaluamos la solidez jurídica de las decisiones laborales antes de que se conviertan en conflictos. Revisamos la causal invocada, redactamos cartas de término de contrato y diseñamos la estrategia preventiva adecuada para cada situación. Una decisión mal fundada puede costar indemnizaciones con recargos, multas y un juicio evitable.',
              },
              {
                title: 'Cumplimiento Normativo',
                body: 'Acompañamos a las empresas en la adecuación de sus procesos a la normativa laboral vigente, reduciendo la exposición a contingencias y fiscalizaciones. Esto incluye auditorías de cumplimiento, implementación de protocolos exigidos por la ley —como los relativos a la Ley Karin sobre acoso laboral y sexual— y due diligence laboral en procesos de reorganización empresarial.',
              },
              {
                title: 'Representación Judicial',
                body: 'Defensa técnica ante el Juzgado de Letras del Trabajo, la Inspección del Trabajo y, cuando corresponde, tribunales superiores. El estudio tiene experiencia en controversias que involucran estructuras empresariales complejas, incluyendo subcontratación, empresas relacionadas y responsabilidad solidaria.',
              },
            ].map((servicio) => (
              <div key={servicio.title} className="border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-bold mb-4">{servicio.title}</h2>
                <p className="text-text-muted leading-relaxed">{servicio.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dos caras del servicio ──────────────────────── */}
      <section className="section-paper">
        <div className="container-wide">
          <h2 className="section-title text-center">
            Dos caras de un mismo servicio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" style={{ marginTop: '3rem' }}>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Contenciosa</h3>
              <p className="text-text-muted mb-4">Cuando el conflicto ya existe:</p>
              <ul className="space-y-2 text-text-muted">
                <li>• Defensa en demandas laborales</li>
                <li>• Representación en audiencias</li>
                <li>• Negociación y conciliación</li>
                <li>• Recursos ante tribunales superiores</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Preventiva</h3>
              <p className="text-text-muted mb-4">Antes de que exista el juicio:</p>
              <ul className="space-y-2 text-text-muted">
                <li>• Revisión de decisiones laborales</li>
                <li>• Análisis de causales de despido</li>
                <li>• Adecuación normativa de procesos</li>
                <li>• Prevención de contingencias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Por qué elegirnos ───────────────────────────── */}
      <section className="section-white">
        <div className="container-narrow">
          <h2 className="section-title">Por qué elegir un estudio especializado</h2>
          <div className="prose max-w-none" style={{ marginTop: '2rem' }}>
            <p>
              No somos un estudio generalista que ofrece familia, civil, penal, laboral e
              inmobiliario simultáneamente. Somos <strong>exclusivamente laboralistas</strong>,
              y eso cambia la defensa.
            </p>
            <p>
              La especialización exclusiva nos permite conocer los criterios de los tribunales
              del trabajo, la jurisprudencia actualizada y las estrategias que funcionan en sala.
              Cuando una empresa enfrenta un conflicto laboral, contar con abogados que se dedican
              únicamente a esta materia no es un lujo: es una ventaja procesal concreta.
            </p>
            <p>
              Además, la experiencia asesorando a trabajadores nos da una perspectiva que pocos
              estudios que defienden exclusivamente a empresas pueden ofrecer: conocemos la
              relación laboral desde ambas posiciones, lo que permite anticipar argumentos y
              diseñar defensas mejor informadas.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="final-cta">
        <div className="container-narrow">
          <h2 className="final-title">
            ¿Necesita asesoría laboral para su empresa?
          </h2>
          <p className="final-sub">
            Agende una evaluación para analizar sus necesidades y diseñar una estrategia adecuada.
          </p>
          <Link href="/contacto" className="cta-accent">
            Agendar evaluación →
          </Link>
        </div>
      </section>
    </>
  );
}
