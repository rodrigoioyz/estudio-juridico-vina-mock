// lib/publicaciones.ts
// Un artículo con status "draft" queda fuera del build, del sitemap, del
// listado, del feed de la home y de los enlaces sugeridos. El contenido se
// conserva íntegro en articles-data.json para publicarlo cuando se confirme.
import articles from '@/app/publicaciones/articles-listing.json';

export type EstadoPublicacion = 'published' | 'draft';

export interface PublicacionListada {
  slug: string;
  title: string;
  date: string;
  area: string;
  image: string;
  excerpt: string;
  meta_title: string;
  meta_description: string;
  description: string;
  status: EstadoPublicacion;
}

export const TODAS_LAS_PUBLICACIONES = articles as PublicacionListada[];

/** Solo las que se publican: es la única lista que deben usar las vistas. */
export const PUBLICACIONES = TODAS_LAS_PUBLICACIONES.filter((a) => a.status !== 'draft');

export function esPublicada(slug: string): boolean {
  return PUBLICACIONES.some((a) => a.slug === slug);
}
