import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { isAbsolute, posix, resolve, win32 } from 'node:path';
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
const EXPECTED_SOURCE_FILES = [
  '01-al-borde-del-estero.jpg',
  '02-edificio-copacabana.jpg',
  '03-muelle-vergara.jpg',
  '04-entre-arboles.jpg',
  '05-valparaiso-406.jpg',
  '06-valparaiso-at-night.jpg',
];
const EXPECTED_EVIDENCE_FILES = [
  '01-al-borde-del-estero.md',
  '02-edificio-copacabana.md',
  '03-muelle-vergara.md',
  '04-entre-arboles.md',
  '05-valparaiso-406.md',
  '06-valparaiso-at-night.md',
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
type AssetDirectory = 'sources' | 'evidence';

function readFixtureFile(path: string): Buffer {
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- Test paths are validated before asset reads; metadata paths are fixed below.
  return readFileSync(path);
}

function fixtureExists(path: string): boolean {
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- Test paths are validated before asset checks; metadata paths are fixed below.
  return existsSync(path);
}

function directoryInventory(directory: AssetDirectory): string[] {
  const directoryPath = resolve(ROOT, directory);
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- directory is restricted by the AssetDirectory union.
  return readdirSync(directoryPath).sort();
}

function readJson<T>(path: string): T {
  return JSON.parse(readFixtureFile(path).toString('utf8')) as T;
}

function expectConfinedRelativePath(path: string, directory: AssetDirectory): void {
  expect(isAbsolute(path)).toBe(false);
  expect(win32.isAbsolute(path)).toBe(false);
  expect(posix.normalize(path)).toBe(path);
  expect(path.split('/')).not.toContain('..');
  expect(path.startsWith(`${directory}/`)).toBe(true);
  expect(path).not.toBe(`${directory}/`);
}

describe('expediente de activos del hero Pacífico urbano', () => {
  it('contiene exactamente los seis originales aprobados y evidencia verificable', () => {
    const lockPath = resolve(ROOT, 'approved-assets.lock.json');
    const manifestPath = resolve(ROOT, 'manifest.json');

    expect(fixtureExists(lockPath), 'falta el lock aprobado').toBe(true);
    expect(fixtureExists(manifestPath), 'falta manifest.json').toBe(true);

    const lock = readJson<{ assets: LockedAsset[] }>(lockPath);
    const manifest = readJson<{ assets: ManifestAsset[] }>(manifestPath);
    const pairedAssets = manifest.assets.map((asset, index) => ({
      asset,
      approved: lock.assets.at(index),
    }));

    expect(lock.assets.map(({ id }) => id)).toEqual(EXPECTED_IDS);
    expect(manifest.assets.map(({ id }) => id)).toEqual(EXPECTED_IDS);
    expect(directoryInventory('sources')).toEqual(EXPECTED_SOURCE_FILES);
    expect(directoryInventory('evidence')).toEqual(EXPECTED_EVIDENCE_FILES);

    for (const { asset, approved } of pairedAssets) {
      expect(approved).toBeDefined();
      if (!approved) continue;

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

      expectConfinedRelativePath(approved.localFile, 'sources');
      expectConfinedRelativePath(asset.localFile, 'sources');
      expectConfinedRelativePath(asset.evidenceFile, 'evidence');

      const sourcePath = resolve(ROOT, asset.localFile);
      const evidencePath = resolve(ROOT, asset.evidenceFile);
      expect(fixtureExists(sourcePath), `falta ${asset.localFile}`).toBe(true);
      expect(fixtureExists(evidencePath), `falta ${asset.evidenceFile}`).toBe(true);

      const actualHash = createHash('sha256').update(readFixtureFile(sourcePath)).digest('hex');
      expect(actualHash).toBe(asset.sha256);
    }
  });
});
