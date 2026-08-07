import type { Metadata } from 'next';
import Link from 'next/link';
import { PRACTICE_AREAS } from '@/lib/site-config';

export const metadata: Metadata = { title: 'Áreas de Práctica' };

export default function AreasPage() {
  return (
    <div className="container-wide py-20">
      <h1 className="text-center mb-4">Áreas de Práctica</h1>
      <p className="text-center text-text-muted mb-12 max-w-xl mx-auto">
        Seis áreas de especialización en Derecho del Trabajo, desde la
        terminación del contrato hasta la litigación ante tribunales superiores.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRACTICE_AREAS.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="block border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
          >
            <h2 className="text-xl mb-2">{area.title}</h2>
            <p className="text-text-muted">{area.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
