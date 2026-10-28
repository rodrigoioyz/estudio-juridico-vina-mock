import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import type { Abogado } from '@/lib/equipo';

/**
 * Foto del abogado, o monograma cuando el miembro no tiene foto.
 *
 * El monograma no es un caso especial de una persona: cualquier miembro sin
 * `foto` y con `monograma` lo recibe. Las proporciones son las mismas que las
 * de la foto para que la retícula no se rompa.
 */
export function TeamPhoto({
  abogado,
  sizes = '(max-width: 767px) 100vw, 33vw',
  alt,
}: {
  abogado: Abogado;
  sizes?: string;
  /** Alt real; si se omite, la imagen se trata como decorativa. */
  alt?: string;
}) {
  if (abogado.foto) {
    return (
      <Image
        src={assetPath(abogado.foto)}
        alt={alt ?? ''}
        width={1200}
        height={1500}
        sizes={sizes}
        className="team-photo"
      />
    );
  }

  const iniciales = abogado.monograma ?? '';

  return (
    <div className="team-photo team-monogram" aria-hidden="true">
      <span className="team-monogram-iniciales">{iniciales}</span>
    </div>
  );
}
