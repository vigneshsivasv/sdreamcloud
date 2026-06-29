import nodemailer from 'nodemailer';
import { siteConfig } from '@/lib/seo';

export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

function cleanEnv(value: string | undefined) {
  return value?.trim().replace(/^["']|["']$/g, '') ?? '';
}

function getRecipient() {
  return cleanEnv(process.env.CONTACT_TO) || siteConfig.email;
}

function getSmtpAuth() {
  const user = cleanEnv(process.env.SMTP_USER);
  const pass = cleanEnv(process.env.SMTP_PASS).replace(/\s/g, '');

  if (!user || !pass) {
    return null;
  }

  return { user, pass };
}

export function isMailConfigured() {
  return getSmtpAuth() !== null;
}

function createTransporter() {
  const auth = getSmtpAuth();

  if (!auth) {
    throw new Error('Mail is not configured. Set SMTP_USER and SMTP_PASS in your hosting environment variables.');
  }

  const host = cleanEnv(process.env.SMTP_HOST) || 'smtp.gmail.com';
  const port = Number(cleanEnv(process.env.SMTP_PORT) || '587');

  const transportOptions = {
    auth,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  };

  if (host.includes('gmail.com')) {
    return nodemailer.createTransport({
      service: 'gmail',
      ...transportOptions,
    });
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    ...transportOptions,
  });
}

function buildEmailContent({ name, email, message }: ContactFormPayload) {
  return {
    subject: `New contact from ${name} — Sdreamclouds`,
    text: [
      'New message from the Sdreamclouds contact form',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #1c1e21;">
        <h2 style="margin: 0 0 1rem; color: #1877F2;">New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f0f2f5; padding: 1rem; border-radius: 8px;">${escapeHtml(message)}</p>
      </div>
    `,
  };
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const to = getRecipient();
  const auth = getSmtpAuth();

  if (!auth) {
    throw new Error('Mail is not configured. Set SMTP_USER and SMTP_PASS in your hosting environment variables.');
  }

  const from = cleanEnv(process.env.SMTP_FROM) || `"Sdreamclouds Contact" <${auth.user}>`;
  const transporter = createTransporter();
  const { subject, text, html } = buildEmailContent(payload);

  await transporter.sendMail({
    from,
    to,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject,
    text,
    html,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getMailErrorMessage(error: unknown) {
  if (!(error instanceof Error)) {
    return 'Unable to send your message right now. Please try again or email us directly.';
  }

  const msg = error.message.toLowerCase();

  if (msg.includes('not configured')) {
    return 'Email is not configured on the server. Add SMTP_USER and SMTP_PASS in Vercel/hosting environment variables, then redeploy.';
  }

  if (msg.includes('invalid login') || msg.includes('authentication') || msg.includes('username and password')) {
    return 'Email login failed. Use a Gmail App Password for SMTP_PASS and redeploy with updated environment variables.';
  }

  if (msg.includes('timeout') || msg.includes('timed out') || msg.includes('etimedout')) {
    return 'Email server timed out. Please try again in a moment or email us directly.';
  }

  if (msg.includes('self signed') || msg.includes('certificate')) {
    return 'Email server connection failed. Check SMTP_HOST and SMTP_PORT in your environment variables.';
  }

  return 'Unable to send your message right now. Please try again or email us directly.';
}

export { getMailErrorMessage };
