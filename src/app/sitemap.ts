import type { MetadataRoute } from 'next';
import { PRACTICE_AREAS } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://estudiojuridicolaboral.cl';

  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/estudio`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/areas`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/equipo`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/empresas`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/publicaciones`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const areaRoutes = PRACTICE_AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // TODO: generar dinámicamente desde content/publicaciones/
  const publicacionesRoutes = [
    {
      url: `${baseUrl}/publicaciones/ejemplo-articulo`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  return [...staticRoutes, ...areaRoutes, ...publicacionesRoutes];
}
