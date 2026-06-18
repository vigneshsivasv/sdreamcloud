'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { slideInLeft, slideInRight } from '@/lib/animations';

type ContactSectionProps = {
  asPage?: boolean;
};

export default function ContactSection({ asPage = false }: ContactSectionProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.website) return;

    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id={asPage ? undefined : 'contact'}
      aria-labelledby="contact-heading"
      className={`section-pad ${asPage ? 'contact-page' : ''}`}
      style={{ background: 'var(--bg-2)', borderTop: asPage ? 'none' : '1px solid var(--border)' }}
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
            <p style={{ color: '#a1a1aa', lineHeight: 1.7, maxWidth: '28rem', marginBottom: '2.5rem' }}>
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

          <FadeIn variants={slideInRight}>
            {sent ? (
              <div role="alert" className="contact-success">
                <p className="contact-success-title">Email client opened!</p>
                <p className="contact-success-text">
                  Send the pre-filled message from your email app, or contact us at{' '}
                  <a href={`mailto:${siteConfig.email}`} className="contact-link">{siteConfig.email}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-honeypot" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-name" className="form-label">Full name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
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
                    required
                    autoComplete="email"
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
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input form-textarea"
                  />
                </div>
                <button type="submit" className="btn-primary hover-lift">
                  Send message
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
