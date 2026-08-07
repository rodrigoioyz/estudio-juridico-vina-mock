// middleware.ts
// CSP + security headers aplicados a todas las rutas.
// Corre en Edge Runtime — no puede importar librerías Node.js.

import { NextResponse } from 'next/server';

export function middleware() {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const isDev = process.env.NODE_ENV === 'development';

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'${isDev ? " 'unsafe-eval'" : ''} https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self' https://api.resend.com",
    "frame-src 'self' https://www.google.com/recaptcha/",
    "form-action 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    'upgrade-insecure-requests',
  ].join('; ');

  const response = NextResponse.next();

  // Security headers
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Exponer nonce para que el layout lo use en scripts inline
  response.headers.set('x-nonce', nonce);

  return response;
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
