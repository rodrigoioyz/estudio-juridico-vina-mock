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

interface MemoryEntry {
  value: number;
  expiresAt: number;
}

const memoryEntries = new Map<string, MemoryEntry>();

function getMemoryStore(): RateLimitStore {
  return {
    async incr(key) {
      const now = Date.now();
      const existing = memoryEntries.get(key);
      const value = !existing || existing.expiresAt <= now ? 1 : existing.value + 1;
      memoryEntries.set(key, { value, expiresAt: existing?.expiresAt && existing.expiresAt > now ? existing.expiresAt : now + 300_000 });
      return value;
    },
    async expire(key, seconds) {
      const existing = memoryEntries.get(key);
      if (existing) memoryEntries.set(key, { ...existing, expiresAt: Date.now() + seconds * 1000 });
    },
    async get(key) {
      const existing = memoryEntries.get(key);
      if (!existing || existing.expiresAt <= Date.now()) {
        memoryEntries.delete(key);
        return null;
      }
      return String(existing.value);
    },
  };
}

export async function getRateLimitStore(): Promise<RateLimitStore> {
  const hasVercelKv = Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
  if (!isDev && !hasVercelKv) return getMemoryStore();

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
