import type { MetadataRoute } from 'next';
import { PRACTICE_AREAS, SITE_CONFIG } from '@/lib/site-config';
import articles from '@/app/publicaciones/articles-listing.json';

const LAST_CONTENT_UPDATE = new Date('2026-08-07');

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/estudio`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/areas`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/equipo`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/empresas`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/honorarios`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/publicaciones`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contacto`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const areaRoutes: MetadataRoute.Sitemap = PRACTICE_AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const publicationRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/publicaciones/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...areaRoutes, ...publicationRoutes];
}
