import type { FaqItem } from '@/lib/servicios/tipos';

/**
 * JSON-LD de preguntas frecuentes. Se emite solo donde la FAQ es visible.
 * Fuente única: el mismo arreglo que pinta el bloque.
 */
export function faqJsonLd(faq: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
    })),
  };
}

interface Props {
  faq: FaqItem[];
  /** id del bloque, para el aria-labelledby. */
  id?: string;
  titulo?: string;
  /** true cuando el bloque abre su propia sección: sin filete ni margen superior. */
  standalone?: boolean;
}

/** Bloque de preguntas frecuentes: título + lista de definiciones. */
export function FaqBlock({
  faq,
  id = 'faq',
  titulo = 'Preguntas frecuentes',
  standalone = false,
}: Props) {
  if (faq.length === 0) return null;

  const clase = standalone ? 'faq-block faq-block--standalone' : 'faq-block';

  return (
    <div className={clase} aria-labelledby={id}>
      <h2 id={id}>{titulo}</h2>
      <dl>
        {faq.map((item) => (
          <div key={item.pregunta} className="faq-item">
            <dt>{item.pregunta}</dt>
            <dd>{item.respuesta}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
