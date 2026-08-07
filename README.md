# Estudio Jurídico Laboral — Sitio Web

Sitio web del Estudio Jurídico Laboral de Viña del Mar, especializado en Derecho del Trabajo.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4** para estilos
- **MDX** para publicaciones del blog
- **Zod** + React Hook Form para formularios
- **ioredis** + Valkey (dev) / Vercel KV (prod) para rate limiting
- **nodemailer** + Mailpit (dev) / Resend (prod) para email

## Requisitos

- Node.js ≥ 20
- Docker Desktop (para servicios locales de desarrollo)

## Desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.local.example .env.local

# 3. Levantar servicios Docker (Valkey + Mailpit)
npm run docker:up

# 4. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:3000
```

### Servicios locales

| Servicio | URL | Propósito |
|---|---|---|
| Next.js dev server | http://localhost:3000 | Aplicación |
| Mailpit UI | http://localhost:8025 | Captura de emails (desarrollo) |
| Valkey (Redis) | localhost:6379 | Rate limiting (desarrollo) |

### Probar el formulario de contacto

1. Ir a http://localhost:3000/contacto
2. Llenar y enviar el formulario
3. Abrir http://localhost:8025 para ver el email capturado
4. Enviar 6+ veces para verificar rate limiting (429)

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm test` | Tests unitarios (Vitest) |
| `npm run docker:up` | Levantar Valkey + Mailpit |
| `npm run docker:down` | Detener servicios Docker |
| `npm run docker:reset` | Resetear servicios (datos limpios) |

## Estructura del proyecto

```
src/
├── app/                    # App Router (páginas + API)
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Inicio
│   ├── estudio/            # El Estudio
│   ├── areas/              # Áreas de práctica
│   ├── equipo/             # Equipo
│   ├── empresas/           # Empresas
│   ├── publicaciones/      # Blog
│   ├── contacto/           # Formulario
│   └── api/contact/        # API endpoint
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # ContactForm, Hero, etc.
│   └── ui/                 # Button, Card, Input
└── lib/                    # Utilidades
    ├── redis.ts            # Abstracción Redis (Valkey ↔ Vercel KV)
    ├── email.ts            # Abstracción email (Mailpit ↔ Resend)
    ├── recaptcha.ts        # Abstracción reCAPTCHA (bypass ↔ Google)
    ├── rate-limiter.ts     # Rate limiting
    ├── contact-schema.ts   # Zod schema formulario
    └── site-config.ts      # Constantes del sitio

content/
└── publicaciones/          # Artículos MDX

public/
└── images/equipo/          # Fotos del equipo (sin EXIF)
```

## Variables de entorno

Copiar `.env.local.example` a `.env.local` y ajustar:

| Variable | Dev | Prod |
|---|---|---|
| `REDIS_HOST` | `localhost` | — (usa Vercel KV) |
| `SMTP_HOST` | `localhost` | — (usa Resend) |
| `CONTACT_EMAIL_TO` | `abogados@ejemplo.local` | Email real del estudio |
| `RESEND_API_KEY` | — | Key de Resend |
| `KV_REST_API_URL` | — | URL de Vercel KV |
| `RECAPTCHA_SECRET_KEY` | — | Secret de Google reCAPTCHA |

## Deploy

El proyecto está configurado para deploy en Vercel mediante GitHub Actions:

- **PRs**: deploy automático a preview URL
- **Push a main**: deploy automático a producción

Requiere secrets en GitHub:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Licencia

Privado. Todos los derechos reservados.
