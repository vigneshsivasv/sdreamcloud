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
    throw new Error('Mail is not configured. Set SMTP_USER and SMTP_PASS in .env.local');
  }

  const host = cleanEnv(process.env.SMTP_HOST) || 'smtp.gmail.com';
  const port = Number(cleanEnv(process.env.SMTP_PORT) || '587');

  if (host.includes('gmail.com')) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth,
    });
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth,
  });
}

export async function sendContactEmail({ name, email, message }: ContactFormPayload) {
  const to = getRecipient();
  const auth = getSmtpAuth();

  if (!auth) {
    throw new Error('Mail is not configured. Set SMTP_USER and SMTP_PASS in .env.local');
  }

  const from = cleanEnv(process.env.SMTP_FROM) || `"Sdreamclouds Contact" <${auth.user}>`;
  const transporter = createTransporter();

  await transporter.verify();

  await transporter.sendMail({
    from,
    to,
    replyTo: `"${name}" <${email}>`,
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
    return 'Email is not configured. Add SMTP settings to .env.local and restart the server.';
  }

  if (msg.includes('invalid login') || msg.includes('authentication') || msg.includes('username and password')) {
    return 'Email login failed. Check SMTP_USER and SMTP_PASS (use a Gmail App Password, not your normal password).';
  }

  if (msg.includes('self signed') || msg.includes('certificate')) {
    return 'Email server connection failed. Check SMTP_HOST and SMTP_PORT.';
  }

  return 'Unable to send your message right now. Please try again or email us directly.';
}

export { getMailErrorMessage };
