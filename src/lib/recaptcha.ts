// lib/recaptcha.ts
// En desarrollo: bypass sin llamada externa.
// En producción: verify contra Google reCAPTCHA v3.

const isDev = process.env.NODE_ENV === 'development';

export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (isDev) {
    console.log('🔓 [DEV] reCAPTCHA bypassed');
    return true;
  }

  if (!token) {
    return false;
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error('RECAPTCHA_SECRET_KEY no configurada');
  }

  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    },
  );

  const data = await response.json();
  return data.success === true && data.score >= 0.5;
}
