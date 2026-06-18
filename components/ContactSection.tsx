'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { slideInLeft } from '@/lib/animations';

type ContactSectionProps = {
  asPage?: boolean;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

function validateForm(form: FormState) {
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (name.length < 2) {
    return 'Please enter your full name.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address.';
  }

  if (message.length < 10) {
    return 'Please enter a message with at least 10 characters.';
  }

  return null;
}

export default function ContactSection({ asPage = false }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      let data: { ok?: boolean; error?: string } = {};
      try {
        data = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        throw new Error('Unexpected server response. Please try again.');
      }

      if (!response.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={asPage ? undefined : 'contact'}
      aria-labelledby="contact-heading"
      className={`section-pad ${asPage ? 'contact-page section-bg-alt' : 'section-bg-alt section-border-top'}`}
    >
      <div className="container-lux">
        {asPage && (
          <FadeIn>
            <nav aria-label="Breadcrumb" className="breadcrumb" style={{ marginBottom: '2rem' }}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact</span>
            </nav>
          </FadeIn>
        )}
        <div className="contact-grid">
          <FadeIn variants={slideInLeft}>
            <h1 id="contact-heading" className="section-title" style={{ marginBottom: '1.5rem' }}>
              Let&apos;s build something
              <br />
              <em className="section-title-em">worth talking about.</em>
            </h1>
            <p className="text-secondary" style={{ lineHeight: 1.7, maxWidth: '28rem', marginBottom: '2.5rem' }}>
              Whether you&apos;re starting from scratch or scaling what&apos;s working, we&apos;d love to hear about your goals. Reach out — no pitches, just conversation.
            </p>
            <address style={{ fontStyle: 'normal' }}>
              <dl className="contact-details">
                <div className="contact-detail-row">
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${siteConfig.email}`} className="contact-link">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div className="contact-detail-row">
                  <dt>Based</dt>
                  <dd>Remote-first, worldwide</dd>
                </div>
              </dl>
            </address>
          </FadeIn>

          <div className="contact-form-wrap">
            {sent ? (
              <div role="alert" className="contact-success">
                <p className="contact-success-title">Message sent!</p>
                <p className="contact-success-text">
                  Thanks for reaching out. We&apos;ll get back to you at your email within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div>
                  <label htmlFor="contact-name" className="form-label">Full name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    disabled={loading}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="form-label">Email address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    disabled={loading}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    disabled={loading}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input form-textarea"
                  />
                </div>
                {error ? <p className="contact-error" role="alert">{error}</p> : null}
                <button type="submit" className="btn-primary hover-lift" disabled={loading} aria-busy={loading}>
                  {loading ? 'Sending…' : 'Send message'}
                  {!loading ? (
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  ) : null}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
