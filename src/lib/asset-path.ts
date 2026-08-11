/** Devuelve una ruta de asset compatible con el subdirectorio de GitHub Pages. */
export function assetPath(path: string): string {
  if (!path.startsWith('/')) return path;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || '';
  return `${basePath}${path}`;
}
