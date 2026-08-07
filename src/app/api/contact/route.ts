// app/api/contact/route.ts
// POST /api/contact — procesa el formulario de contacto.
// Rate limiting + Zod validation + reCAPTCHA + email.

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limiter';
import { sendEmail } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { contactSchema } from '@/lib/contact-schema';

export async function POST(request: NextRequest) {
  try {
    // ── 1. Rate limiting ──────────────────────────────────
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    const { allowed, remaining } = await checkRateLimit(ip, 'contact');

    if (!allowed) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intente de nuevo en unos minutos.' },
        {
          status: 429,
          headers: { 'Retry-After': '300', 'X-RateLimit-Remaining': String(remaining) },
        },
      );
    }

    // ── 2. Parse y validación ─────────────────────────────
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Datos inválidos.' }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos. Revise el formulario.' },
        { status: 400 },
      );
    }

    const { nombre, email, telefono, area, consulta } = parsed.data;

    // ── 3. reCAPTCHA (bypass en dev) ──────────────────────
    const recaptchaToken = request.headers.get('x-recaptcha-token') || '';
    const isValid = await verifyRecaptcha(recaptchaToken);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Verificación de seguridad fallida.' },
        { status: 400 },
      );
    }

    // ── 4. Enviar email ───────────────────────────────────
    await sendEmail({
      to: process.env.CONTACT_EMAIL_TO || 'abogados@estudiojuridico.local',
      subject: `[Contacto Web] ${nombre} — ${area || 'Sin área especificada'}`,
      html: `
        <h2>Nueva consulta desde el sitio web</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5">Nombre:</td><td style="padding:8px;border:1px solid #ddd">${nombre}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5">Email:</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5">Teléfono:</td><td style="padding:8px;border:1px solid #ddd">${telefono || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5">Área:</td><td style="padding:8px;border:1px solid #ddd">${area || '—'}</td></tr>
        </table>
        <h3 style="font-family:sans-serif">Consulta:</h3>
        <pre style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:4px;font-family:sans-serif">${consulta}</pre>
        <p style="color:#999;font-size:12px;font-family:sans-serif">Recibido desde ${process.env.NEXT_PUBLIC_SITE_URL || 'el sitio web'} — IP: ${ip}</p>
      `,
      replyTo: email,
    });

    // ── 5. Respuesta ──────────────────────────────────────
    return NextResponse.json(
      { success: true, message: 'Gracias. Le contactaremos pronto.' },
      { status: 200, headers: { 'X-RateLimit-Remaining': String(remaining) } },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Error interno. Intente nuevamente más tarde.' },
      { status: 500 },
    );
  }
}
