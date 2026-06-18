import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import nodemailer from 'nodemailer';

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), '.env.local');
  if (!existsSync(envPath)) {
    console.error('Missing .env.local — copy .env.example and add your Gmail App Password.');
    process.exit(1);
  }

  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[key] ??= value;
  }
}

loadEnvLocal();

const user = process.env.SMTP_USER?.trim();
const pass = process.env.SMTP_PASS?.replace(/\s/g, '');
const to = process.env.CONTACT_TO?.trim() ?? user;

if (!user || !pass) {
  console.error('SMTP_USER and SMTP_PASS must be set in .env.local');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user, pass },
});

try {
  console.log('Verifying Gmail connection…');
  await transporter.verify();
  console.log('Sending test email to', to);
  await transporter.sendMail({
    from: `"Sdreamclouds Test" <${user}>`,
    to,
    subject: 'Sdreamclouds contact form test',
    text: 'If you received this, the contact form email setup is working.',
  });
  console.log('Test email sent successfully. Check your inbox and spam folder.');
} catch (error) {
  console.error('Mail test failed:', error instanceof Error ? error.message : error);
  process.exit(1);
}
