import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = resolve(process.cwd(), 'public/hero/pacifico-urbano');
const EXPECTED_IDS = [
  'al-borde-del-estero',
  'edificio-copacabana',
  'muelle-vergara',
  'entre-arboles',
  'valparaiso-406',
  'valparaiso-at-night',
];
const ALLOWED_LICENSES = ['CC0-1.0', 'Public-Domain-Worldwide'];
const REJECTED_PROVENANCE = /CC-BY|CC-BY-SA|Pexels|Unsplash|US-only/i;

type Dimensions = { width: number; height: number };
type LockedAsset = {
  id: string;
  commonsTitle: string;
  sourcePage: string;
  author: string;
  license: string;
  dimensions: Dimensions;
  localFile: string;
  sha256: string;
};
type ManifestAsset = LockedAsset & {
  downloadUrl: string;
  date: string;
  consultedAt: string;
  evidenceFile: string;
  transformations: string[];
};

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

describe('expediente de activos del hero Pacífico urbano', () => {
  it('contiene exactamente los seis originales aprobados y evidencia verificable', () => {
    const lockPath = resolve(ROOT, 'approved-assets.lock.json');
    const manifestPath = resolve(ROOT, 'manifest.json');

    expect(existsSync(lockPath), 'falta el lock aprobado').toBe(true);
    expect(existsSync(manifestPath), 'falta manifest.json').toBe(true);

    const lock = readJson<{ assets: LockedAsset[] }>(lockPath);
    const manifest = readJson<{ assets: ManifestAsset[] }>(manifestPath);

    expect(lock.assets.map(({ id }) => id)).toEqual(EXPECTED_IDS);
    expect(manifest.assets.map(({ id }) => id)).toEqual(EXPECTED_IDS);

    for (const [index, asset] of manifest.assets.entries()) {
      const approved = lock.assets[index];
      const requiredStrings = [
        asset.id,
        asset.commonsTitle,
        asset.sourcePage,
        asset.downloadUrl,
        asset.author,
        asset.date,
        asset.license,
        asset.consultedAt,
        asset.sha256,
        asset.localFile,
        asset.evidenceFile,
      ];

      for (const value of requiredStrings) {
        expect(value).toEqual(expect.any(String));
        expect(value.length).toBeGreaterThan(0);
      }
      expect(asset.dimensions.width).toBeGreaterThan(0);
      expect(asset.dimensions.height).toBeGreaterThan(0);
      expect(asset.transformations.length).toBeGreaterThan(0);

      expect(asset).toMatchObject({
        id: approved.id,
        commonsTitle: approved.commonsTitle,
        sourcePage: approved.sourcePage,
        author: approved.author,
        license: approved.license,
        dimensions: approved.dimensions,
        localFile: approved.localFile,
        sha256: approved.sha256,
      });
      expect(ALLOWED_LICENSES).toContain(asset.license);
      expect(JSON.stringify(asset)).not.toMatch(REJECTED_PROVENANCE);
      expect(asset.sourcePage).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
      expect(asset.downloadUrl).toMatch(/^https:\/\/upload\.wikimedia\.org\//);
      expect(asset.sha256).toMatch(/^[a-f0-9]{64}$/);

      const sourcePath = resolve(ROOT, asset.localFile);
      const evidencePath = resolve(ROOT, asset.evidenceFile);
      expect(existsSync(sourcePath), `falta ${asset.localFile}`).toBe(true);
      expect(existsSync(evidencePath), `falta ${asset.evidenceFile}`).toBe(true);

      const actualHash = createHash('sha256').update(readFileSync(sourcePath)).digest('hex');
      expect(actualHash).toBe(asset.sha256);
    }
  });
});
