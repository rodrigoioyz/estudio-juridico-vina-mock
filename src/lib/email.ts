// lib/email.ts
// Abstracción de email: Mailpit SMTP (dev) ↔ Resend API (prod).
// Misma función sendEmail(), distinto backend.

const isDev = process.env.NODE_ENV === 'development';

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail(payload: EmailPayload): Promise<void> {
  if (isDev) {
    return sendDevEmail(payload);
  }
  return sendProdEmail(payload);
}

// ── Dev: nodemailer → Mailpit SMTP ────────────────────────
async function sendDevEmail(payload: EmailPayload): Promise<void> {
  const nodemailer = (await import('nodemailer')).default;

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: Number(process.env.SMTP_PORT) || 1025,
    secure: false,
    ignoreTLS: true,
  });

  await transport.sendMail({
    from: `"Estudio Jurídico Laboral" <${process.env.CONTACT_EMAIL_FROM || 'no-reply@estudiojuridico.local'}>`,
    to: payload.to,
    subject: `[DEV] ${payload.subject}`,
    html: payload.html,
    replyTo: payload.replyTo,
  });

  console.log('📧 [DEV] Email capturado por Mailpit → http://localhost:8025');
  console.log(`   Asunto: ${payload.subject}`);
}

// ── Prod: Resend SDK ───────────────────────────────────────
async function sendProdEmail(payload: EmailPayload): Promise<void> {
  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_EMAIL_FROM || 'no-reply@estudiojuridico.cl',
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    replyTo: payload.replyTo,
  });

  if (error) {
    console.error('❌ Resend error:', error);
    throw new Error('Error al enviar el email. Intente nuevamente.');
  }
}
