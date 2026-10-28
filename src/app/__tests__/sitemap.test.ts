import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap from '../sitemap';
import articles from '../publicaciones/articles-listing.json';

const articleSlugs = articles.map((article) => article.slug);

describe('sitemap editorial', () => {
  it('publica exactamente los cuatro artículos reales y ninguna ruta de ejemplo', () => {
    const urls = sitemap().map((entry) => entry.url);
    // Solo artículos (slug + barra final); excluye el índice /publicaciones/
    const publicationUrls = urls.filter((url) => /\/publicaciones\/[^/]+\/$/.test(url));

    expect(publicationUrls).toHaveLength(4);
    expect(publicationUrls.some((url) => url.includes('ejemplo-articulo'))).toBe(false);
    for (const slug of articleSlugs) {
      // trailingSlash: true → el sitemap publica las URLs con barra final
      expect(publicationUrls.some((url) => url.endsWith(`/publicaciones/${slug}/`))).toBe(true);
    }
  });

  it('usa la fecha editorial como lastModified de cada artículo', () => {
    const entries = sitemap();

    for (const article of articles) {
      const entry = entries.find((item) => item.url.endsWith(`/publicaciones/${article.slug}/`));
      expect(entry?.lastModified).toEqual(new Date(article.date));
    }
  });

  it('referencia imágenes que existen en public/', () => {
    for (const article of articles) {
      const assetPath = join(process.cwd(), 'public', article.image.replace(/^\//, ''));
      // Ruta formada desde un manifiesto versionado del propio repositorio.
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      expect(existsSync(assetPath), `${article.slug}: ${article.image}`).toBe(true);
    }
  });
});
