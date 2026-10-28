import { statSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { HERO_MEDIA } from '../hero-media';

const KIB = 1024;
const MIB = 1024 * KIB;

const fileSize = (publicPath: string) => {
  const path = resolve(process.cwd(), 'public', publicPath.replace(/^\//, ''));
  // Paths are constrained by the static HERO_MEDIA contract under test.
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  return statSync(path).size;
};

describe('archivos del hero Pacífico urbano', () => {
  it('incluye el poster dentro del presupuesto de 500 KiB', () => {
    expect(fileSize(HERO_MEDIA.poster)).toBeLessThanOrEqual(500 * KIB);
  });

  it.each(HERO_MEDIA.sources)('incluye $src dentro del presupuesto de 8 MiB', ({ src }) => {
    expect(fileSize(src)).toBeLessThanOrEqual(8 * MIB);
  });
});
