import { describe, expect, it, vi } from 'vitest';
import { getRateLimitStore } from '../redis';

describe('rate limit store', () => {
  it('mantiene un fallback funcional cuando Vercel KV no está configurado', async () => {
    vi.stubEnv('KV_REST_API_URL', '');
    vi.stubEnv('KV_REST_API_TOKEN', '');

    const store = await getRateLimitStore();
    const key = `test:${crypto.randomUUID()}`;

    expect(await store.incr(key)).toBe(1);
    await store.expire(key, 60);
    expect(await store.incr(key)).toBe(2);
    expect(await store.get(key)).toBe('2');

    vi.unstubAllEnvs();
  });
});
