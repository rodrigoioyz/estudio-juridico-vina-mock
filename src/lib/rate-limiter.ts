// lib/rate-limiter.ts
import { getRateLimitStore } from './redis';

interface RateLimitConfig {
  maxRequests: number;
  windowSeconds: number;
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxRequests: 5,
  windowSeconds: 300, // 5 minutos
};

export async function checkRateLimit(
  ip: string,
  endpoint: string,
  config: RateLimitConfig = DEFAULT_CONFIG,
): Promise<{ allowed: boolean; remaining: number }> {
  const store = await getRateLimitStore();
  const key = `ratelimit:${endpoint}:${ip}`;

  const current = await store.incr(key);

  // En la primera request, seteamos TTL
  if (current === 1) {
    await store.expire(key, config.windowSeconds);
  }

  const remaining = Math.max(0, config.maxRequests - current);

  return {
    allowed: current <= config.maxRequests,
    remaining,
  };
}
