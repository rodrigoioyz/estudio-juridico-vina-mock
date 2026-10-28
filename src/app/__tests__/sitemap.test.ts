import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap from '../sitemap';
import { PUBLICACIONES, TODAS_LAS_PUBLICACIONES } from '@/lib/publicaciones';

const BORRADOR = 'procedimiento-monitorio-laboral-acceso-justicia-corte-suprema';

describe('sitemap editorial', () => {
  it('publica solo los artículos con status published y ninguna ruta de ejemplo', () => {
    const urls = sitemap().map((entry) => entry.url);
    // Solo artículos (slug + barra final); excluye el índice /publicaciones/
    const publicationUrls = urls.filter((url) => /\/publicaciones\/[^/]+\/$/.test(url));

    const borradores = TODAS_LAS_PUBLICACIONES.filter((a) => a.status === 'draft');
    expect(publicationUrls).toHaveLength(PUBLICACIONES.length);
    expect(PUBLICACIONES.length + borradores.length).toBe(TODAS_LAS_PUBLICACIONES.length);
    expect(borradores.length).toBeGreaterThan(0);
    expect(publicationUrls.some((url) => url.includes('ejemplo-articulo'))).toBe(false);
    // Ningún borrador puede aparecer en el sitemap.
    for (const borrador of borradores) {
      expect(publicationUrls.some((url) => url.includes(borrador.slug)), borrador.slug).toBe(false);
    }
    expect(publicationUrls.some((url) => url.includes(BORRADOR))).toBe(false);

    for (const article of PUBLICACIONES) {
      // trailingSlash: true → el sitemap publica las URLs con barra final
      expect(publicationUrls.some((url) => url.endsWith(`/publicaciones/${article.slug}/`))).toBe(true);
    }
  });

  it('usa la fecha editorial como lastModified de cada artículo publicado', () => {
    const entries = sitemap();

    for (const article of PUBLICACIONES) {
      const entry = entries.find((item) => item.url.endsWith(`/publicaciones/${article.slug}/`));
      expect(entry?.lastModified).toEqual(new Date(article.date));
    }
  });

  it('referencia imágenes que existen en public/', () => {
    for (const article of TODAS_LAS_PUBLICACIONES) {
      const assetPath = join(process.cwd(), 'public', article.image.replace(/^\//, ''));
      // Ruta formada desde un manifiesto versionado del propio repositorio.
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      expect(existsSync(assetPath), `${article.slug}: ${article.image}`).toBe(true);
    }
  });
});
