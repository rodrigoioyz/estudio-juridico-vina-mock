import { expect, test } from '@playwright/test';

const POSTER = '/hero/pacifico-urbano/pacifico-urbano-poster.jpg';
const WEBM = '/hero/pacifico-urbano/pacifico-urbano.webm';
const MP4 = '/hero/pacifico-urbano/pacifico-urbano.mp4';

test('desktop muestra poster inmediato y reproduce los medios locales aprobados', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('.hero-fallback')).toBeVisible();

  const video = page.locator('.hero-video');
  await expect(video).toBeAttached({ timeout: 8_000 });
  await expect(video).toHaveAttribute('poster', POSTER);
  await expect(video.locator('source')).toHaveCount(2);
  await expect(video.locator('source').nth(0)).toHaveAttribute('src', WEBM);
  await expect(video.locator('source').nth(0)).toHaveAttribute('type', 'video/webm');
  await expect(video.locator('source').nth(1)).toHaveAttribute('src', MP4);
  await expect(video.locator('source').nth(1)).toHaveAttribute('type', 'video/mp4');
  await expect(video).toHaveJSProperty('error', null);
  await expect.poll(() => video.evaluate((node: HTMLVideoElement) => node.readyState)).toBeGreaterThanOrEqual(2);
  await expect.poll(() => video.evaluate((node: HTMLVideoElement) => node.duration)).toBeGreaterThanOrEqual(11.8);

  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('reduced motion mantiene poster y desmonta video incluso al cambiar la preferencia', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await expect(page.locator('.hero-video')).toBeAttached({ timeout: 8_000 });

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.hero-video')).toHaveCount(0);
  await expect(page.locator('.hero-fallback')).toBeVisible();
});

test('móvil muestra poster local sin cargar video ni producir overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  await expect(page.locator('.hero-fallback')).toBeVisible();
  await expect(page.locator('.hero-video')).toHaveCount(0);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
