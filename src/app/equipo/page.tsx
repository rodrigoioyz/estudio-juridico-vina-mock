import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = { title: 'Equipo' };

const EQUIPO = [
  {
    nombre: 'Lautaro Fariña Quezada',
    rol: 'Abogado — Derecho del Trabajo',
    foto: '/images/equipo/lautaro-farina.jpg',
    bio: 'Abogado especializado en Derecho del Trabajo. Su producción académica incluye el libro "Regulación del sueldo en el Código del Trabajo" (2009) y el artículo "Remuneración variable: elemento diferenciador y relación con las remuneraciones participativas", publicado en la Revista Chilena de Derecho del Trabajo y de la Seguridad Social de la Universidad de Chile (2015). La Dirección del Trabajo ha utilizado expresamente su obra como doctrina jurídica en la construcción de su jurisprudencia administrativa sobre remuneraciones (Dictamen 3662/53 de 2010 y pronunciamientos posteriores).',
  },
  {
    nombre: 'Joaquín Hernández Sepúlveda',
    rol: 'Abogado — Derecho del Trabajo',
    foto: null,
    bio: 'Abogado con práctica en asesoría y representación de trabajadores, empresas y organizaciones sindicales. Su experiencia comprende litigación laboral, cumplimiento normativo y asesoría preventiva para empleadores.',
  },
  {
    nombre: 'Pablo Vilches',
    rol: 'Abogado — Derecho del Trabajo',
    foto: null,
    bio: 'Abogado del estudio con experiencia en litigación laboral y comparecencia ante los Juzgados de Letras del Trabajo.',
  },
];

export default function EquipoPage() {
  return (
    <div className="container-wide py-20">
      <h1 className="text-center mb-4">Equipo</h1>
      <p className="text-center text-text-muted mb-12 max-w-xl mx-auto">
        Los asuntos son abordados por un equipo jurídico, no mediante prácticas
        individuales organizadas alrededor de un único abogado.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EQUIPO.map((abogado) => (
          <div
            key={abogado.nombre}
            className="bg-white border border-border rounded-lg overflow-hidden"
          >
            {/* Foto o placeholder */}
            {abogado.foto ? (
              <div className="relative w-full" style={{ aspectRatio: '4/5', background: '#f7fafc' }}>
                <Image
                  src={abogado.foto}
                  alt={abogado.nombre}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center bg-surface-alt" style={{ aspectRatio: '4/5' }}>
                <span className="text-text-muted text-sm">Foto pendiente</span>
              </div>
            )}

            {/* Info */}
            <div className="p-6">
              <h2 className="text-lg font-bold mb-1">{abogado.nombre}</h2>
              <p className="text-sm text-primary font-medium mb-3">{abogado.rol}</p>
              <p className="text-sm text-text-muted leading-relaxed">{abogado.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-text-muted mt-12 text-sm max-w-xl mx-auto">
        Los perfiles, fotos y biografías de los demás integrantes del equipo se
        completarán una vez que el estudio proporcione la información y
        autorizaciones correspondientes.
      </p>
    </div>
  );
}
