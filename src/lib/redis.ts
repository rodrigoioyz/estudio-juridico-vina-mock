// lib/redis.ts
// Abstracción de Redis: Valkey local (dev) ↔ Vercel KV (prod).
// Misma API — el código de rate limiting no sabe cuál está usando.

const isDev = process.env.NODE_ENV === 'development';

// ── Dev: ioredis conectando a Valkey ──────────────────────
let ioredisClient: import('ioredis').Redis | null = null;

async function getIOredis() {
  if (!ioredisClient) {
    const { default: Redis } = await import('ioredis');
    ioredisClient = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });
  }
  return ioredisClient;
}

// ── Prod: @vercel/kv ──────────────────────────────────────
let kvClient: import('@vercel/kv').VercelKV | null = null;

async function getVercelKV() {
  if (!kvClient) {
    const { createClient } = await import('@vercel/kv');
    kvClient = createClient({
      url: process.env.KV_REST_API_URL!,
      token: process.env.KV_REST_API_TOKEN!,
    });
  }
  return kvClient;
}

// ── API unificada ──────────────────────────────────────────
export interface RateLimitStore {
  incr(key: string): Promise<number>;
  expire(key: string, seconds: number): Promise<void>;
  get(key: string): Promise<string | null>;
}

export async function getRateLimitStore(): Promise<RateLimitStore> {
  if (isDev) {
    const redis = await getIOredis();
    return {
      async incr(key: string) {
        return redis.incr(key);
      },
      async expire(key: string, seconds: number) {
        await redis.expire(key, seconds);
      },
      async get(key: string) {
        return redis.get(key);
      },
    };
  }

  // Producción: Vercel KV
  const kv = await getVercelKV();
  return {
    async incr(key: string) {
      const current = (await kv.get<number>(key)) || 0;
      const next = current + 1;
      await kv.set(key, next, { ex: 300 });
      return next;
    },
    async expire(key: string, seconds: number) {
      await kv.expire(key, seconds);
    },
    async get(key: string) {
      return (await kv.get<string>(key)) ?? null;
    },
  };
}
