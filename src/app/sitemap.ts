import { statSync } from 'node:fs';
import { join } from 'node:path';
import type { MetadataRoute } from 'next';
import { PRACTICE_AREAS, SITE_CONFIG } from '@/lib/site-config';
import articles from '@/app/publicaciones/articles-listing.json';

const FALLBACK = new Date('2026-08-07');
const AREA_FILE = 'src/app/areas/[slug]/page.tsx';

/** Fecha de última modificación del archivo fuente, con fallback. */
function fileDate(relPath: string): Date {
  try {
    return statSync(join(process.cwd(), relPath)).mtime;
  } catch {
    return FALLBACK;
  }
}

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: fileDate('src/app/page.tsx'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/estudio/`, lastModified: fileDate('src/app/estudio/page.tsx'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/areas/`, lastModified: fileDate('src/app/areas/page.tsx'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/equipo/`, lastModified: fileDate('src/app/equipo/page.tsx'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/empresas/`, lastModified: fileDate('src/app/empresas/page.tsx'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/honorarios/`, lastModified: fileDate('src/app/honorarios/page.tsx'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/publicaciones/`, lastModified: fileDate('src/app/publicaciones/page.tsx'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contacto/`, lastModified: fileDate('src/app/contacto/page.tsx'), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const areaRoutes: MetadataRoute.Sitemap = PRACTICE_AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}/`,
    lastModified: fileDate(AREA_FILE),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const publicationRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/publicaciones/${article.slug}/`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...areaRoutes, ...publicationRoutes];
}
