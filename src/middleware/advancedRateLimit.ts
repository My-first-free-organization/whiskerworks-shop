// Advanced rate limiting with Redis
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function slidingWindowRateLimit(key: string, limit: number, windowSec: number) {
  const now = Date.now();
  const windowStart = now - windowSec * 1000;
  await redis.zremrangebyscore(key, 0, windowStart);
  const count = await redis.zcard(key);
  if (count >= limit) return false;
  await redis.zadd(key, now, `${now}`);
  await redis.expire(key, windowSec);
  return true;
}
