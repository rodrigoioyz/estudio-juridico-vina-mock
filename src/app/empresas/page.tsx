import type { Metadata } from 'next';
import { BreadcrumbLd } from '@/components/seo/breadcrumb-ld';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Empresas',
  description:
    'Asesoría preventiva, cumplimiento normativo y representación judicial para empleadores. Derecho del Trabajo para empresas en Viña del Mar y todo Chile.',
  alternates: { canonical: '/empresas' },
  openGraph: { url: '/empresas' },
};

const SERVICIOS = [
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
] as const;

export default function EmpresasPage() {
  return (
    <>
      <BreadcrumbLd items={[{ name: 'Inicio', path: '/' }, { name: 'Empresas', path: '/empresas' }]} />
      {/* ── Hero editorial ─────────────────────────────────── */}
      <section className="internal-hero">
        <div className="container-narrow">
          <p className="eyebrow">Empleadores</p>
          <h1>Servicios para Empresas</h1>
          <p className="internal-hero-dek">
            Asesoramos a empleadores en la gestión y defensa de controversias laborales.
            Evaluamos la solidez jurídica de las decisiones antes de que se conviertan en
            conflictos y representamos a la empresa ante el Juzgado de Letras del Trabajo
            y la Inspección del Trabajo.
          </p>
        </div>
      </section>

      {/* ── Servicios — lista editorial con reglas ── */}
      <section className="section-white">
        <div className="container-wide">
          <h2 className="section-title">Lo que ofrecemos a su empresa</h2>
          <p className="section-dek">
            Tres líneas de trabajo que se complementan: antes del conflicto, en el
            cumplimiento y en el tribunal.
          </p>

          <div className="ruled-list">
            {SERVICIOS.map((servicio, i) => (
              <div key={servicio.title} className="ruled-row ruled-row--no-link">
                <h3 className="font-display ruled-title">
                  <span className="pillar-num nums" aria-hidden="true">0{i + 1}</span>
                  {servicio.title}
                </h3>
                <p className="ruled-body">{servicio.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dos caras del servicio ──────────────────────── */}
      <section className="section-paper">
        <div className="container-wide">
          <h2 className="section-title">Dos caras de un mismo servicio</h2>
          <p className="section-dek">
            La defensa de la empresa puede ser contenciosa o preventiva. Ambas exigen el
            mismo rigor jurídico.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: '2rem' }}>
            <div>
              <h3 className="font-display text-xl mb-3">Contenciosa</h3>
              <p className="text-text-muted mb-4">Cuando el conflicto ya existe:</p>
              <div className="ruled-list">
                <div className="ruled-row ruled-row--no-link" style={{ padding: '0.9rem 0' }}>
                  <span className="ruled-title" style={{ fontSize: '1rem' }}>Defensa en demandas laborales</span>
                </div>
                <div className="ruled-row ruled-row--no-link" style={{ padding: '0.9rem 0' }}>
                  <span className="ruled-title" style={{ fontSize: '1rem' }}>Representación en audiencias</span>
                </div>
                <div className="ruled-row ruled-row--no-link" style={{ padding: '0.9rem 0' }}>
                  <span className="ruled-title" style={{ fontSize: '1rem' }}>Negociación y conciliación</span>
                </div>
                <div className="ruled-row ruled-row--no-link" style={{ padding: '0.9rem 0' }}>
                  <span className="ruled-title" style={{ fontSize: '1rem' }}>Recursos ante tribunales superiores</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3">Preventiva</h3>
              <p className="text-text-muted mb-4">Antes de que exista el juicio:</p>
              <div className="ruled-list">
                <div className="ruled-row ruled-row--no-link" style={{ padding: '0.9rem 0' }}>
                  <span className="ruled-title" style={{ fontSize: '1rem' }}>Revisión de decisiones laborales</span>
                </div>
                <div className="ruled-row ruled-row--no-link" style={{ padding: '0.9rem 0' }}>
                  <span className="ruled-title" style={{ fontSize: '1rem' }}>Análisis de causales de despido</span>
                </div>
                <div className="ruled-row ruled-row--no-link" style={{ padding: '0.9rem 0' }}>
                  <span className="ruled-title" style={{ fontSize: '1rem' }}>Adecuación normativa de procesos</span>
                </div>
                <div className="ruled-row ruled-row--no-link" style={{ padding: '0.9rem 0' }}>
                  <span className="ruled-title" style={{ fontSize: '1rem' }}>Prevención de contingencias</span>
                </div>
              </div>
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
          <h2 className="font-display final-title">
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
