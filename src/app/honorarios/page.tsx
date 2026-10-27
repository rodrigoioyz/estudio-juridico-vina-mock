import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Honorarios',
  description:
    'Sistema de honorarios del estudio: solo cobramos si ganamos su juicio. Sin cobros por adelantado.',
  alternates: { canonical: '/honorarios' },
  openGraph: { url: '/honorarios' },
};

export default function HonorariosPage() {
  return (
    <>
      <section className="internal-hero">
        <div className="container-narrow">
          <p className="eyebrow">Condiciones claras</p>
          <h1>Honorarios</h1>
          <p className="internal-hero-dek">
            Nuestro sistema se basa en las resultas del juicio: el estudio solo
            cobra si la gestión obtiene un resultado favorable.
          </p>
        </div>
      </section>

      <section className="section-white">
        <div className="container-narrow">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Nuestro Estudio Jurídico <strong>solo cobra honorarios en el evento de
              ganar su juicio</strong>. Es decir, nuestros honorarios dependen
              exclusivamente del éxito de nuestras gestiones.
            </p>

            <p>
              El honorario se fija <strong>de común acuerdo con el cliente</strong> y
              consiste en un porcentaje de lo que el trabajador gana con su juicio.
              Se paga una vez que la empresa efectivamente paga al trabajador.
            </p>

            <ul>
              <li><strong>No se realizan cobros por adelantado.</strong></li>
              <li>Todo cobro se calcula sobre lo que efectivamente se pague al trabajador.</li>
              <li>El pago ocurre una vez que el trabajador recibe su dinero.</li>
            </ul>

            <p>
              Este sistema alinea el interés del estudio con el resultado concreto de
              cada caso: solo hay honorario si usted efectivamente obtiene lo que le
              corresponde.
            </p>
          </div>
        </div>
      </section>

      <section className="section-paper text-center">
        <div className="container-narrow">
          <h2 className="section-title">Consulte su caso sin costo</h2>
          <p className="section-dek" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Solicite una evaluación y le diremos con claridad si existe un caso,
            qué puede obtener y cómo proceder.
          </p>
          <Link href="/contacto" className="cta-primary">
            Solicitar evaluación →
          </Link>
        </div>
      </section>
    </>
  );
}
