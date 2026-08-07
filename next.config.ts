import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Output standalone para Docker si se necesita en el futuro
  // output: 'standalone',

  // Headers de seguridad a nivel de Next.js (complementan middleware.ts)
  async headers() {
    return [
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

  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },

  // Redirecciones (SEO-friendly)
  async redirects() {
    return [
      { source: '/inicio', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
