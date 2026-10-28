import type { NextConfig } from 'next';

const isGitHubPagesMock = process.env.NEXT_PUBLIC_GITHUB_PAGES_DEMO === 'true';
// Export estático limpio (Hostinger u otro hosting sin Node): sin basePath
// y sin el noindex del demo.
const isStaticExport =
  process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' || isGitHubPagesMock;
const basePath = isGitHubPagesMock ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '';

const sharedConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Un export estático no tiene servidor que optimice imágenes.
  images: isStaticExport
    ? { unoptimized: true }
    : {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 768, 1024, 1280, 1536],
      },
};

const nextConfig: NextConfig = isStaticExport
  ? {
      ...sharedConfig,
      output: 'export',
      trailingSlash: true,
      ...(isGitHubPagesMock ? { basePath, assetPrefix: basePath } : {}),
    }
  : {
      ...sharedConfig,
      async headers() {
        return [
          {
            source: '/videos/:path*',
            headers: [
              { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
            ],
          },
          {
            source: '/(.*)',
            headers: [
              { key: 'X-Content-Type-Options', value: 'nosniff' },
              { key: 'X-Frame-Options', value: 'DENY' },
              { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
              { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
            ],
          },
        ];
      },
      async redirects() {
        return [
          { source: '/inicio', destination: '/', permanent: true },
          { source: '/home', destination: '/', permanent: true },
        ];
      },
    };

export default nextConfig;
