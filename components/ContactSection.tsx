'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your API / form service
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
      <div className="container-lux">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          <style>{`
            @media (min-width: 1024px) { .contact-grid { grid-template-columns: 5fr 7fr !important; } }
          `}</style>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            {/* Left */}
            <div>
              <h2
                id="contact-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.95,
                  color: '#fff',
                  margin: '0 0 1.5rem',
                }}
              >
                Let's build something<br />
                <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#71717a' }}>worth talking about.</em>
              </h2>
              <p style={{ color: '#a1a1aa', lineHeight: 1.7, maxWidth: '28rem', marginBottom: '2.5rem' }}>
                Whether you're starting from scratch or scaling what's working, we'd love to hear about your goals. Reach out — no pitches, just conversation.
              </p>
              <address style={{ fontStyle: 'normal' }}>
                <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <dt style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#52525b', minWidth: '5rem' }}>Email</dt>
                    <dd style={{ margin: 0 }}>
                      <a href="mailto:hello@sdreamclouds.com" style={{ color: '#e4e4e7', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#e4e4e7')}
                      >
                        hello@sdreamclouds.com
                      </a>
                    </dd>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <dt style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#52525b', minWidth: '5rem' }}>Based</dt>
                    <dd style={{ margin: 0, color: '#e4e4e7' }}>Remote-first, worldwide</dd>
                  </div>
                </dl>
              </address>
            </div>

            {/* Right – Form */}
            <div>
              {sent ? (
                <div role="alert" style={{ padding: '3rem', border: '1px solid rgba(244,63,94,0.3)', background: 'rgba(244,63,94,0.05)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Thanks for reaching out!</p>
                  <p style={{ color: '#a1a1aa' }}>We'll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#71717a', marginBottom: '0.5rem' }}>
                      Full name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s ease', boxSizing: 'border-box' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(244,63,94,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#71717a', marginBottom: '0.5rem' }}>
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s ease', boxSizing: 'border-box' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(244,63,94,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#71717a', marginBottom: '0.5rem' }}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s ease', resize: 'vertical', boxSizing: 'border-box' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(244,63,94,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <button type="submit" className="btn-primary hover-lift" style={{ alignSelf: 'flex-start' }}>
                    Send message
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
