import { NextResponse } from 'next/server';
import { getMailErrorMessage, sendContactEmail } from '@/lib/mail';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json({ error: 'Please enter a message with at least 10 characters.' }, { status: 400 });
    }

    if (name.length > 120 || email.length > 254 || message.length > 5000) {
      return NextResponse.json({ error: 'One or more fields are too long.' }, { status: 400 });
    }

    await sendContactEmail({ name, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact]', error);
    return NextResponse.json({ error: getMailErrorMessage(error) }, { status: 500 });
  }
}
