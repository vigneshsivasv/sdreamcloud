'use client';

import { useState } from 'react';

type LeadFormProps = {
  source?: string;
  buttonText?: string;
  placeholder?: string;
  className?: string;
  compact?: boolean;
};

export default function LeadForm({
  source = 'website',
  buttonText = 'Get free audit',
  placeholder = 'Enter your work email',
  className = '',
  compact = false,
}: LeadFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Enter a valid work email.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || 'Website lead',
          email: trimmed,
          message: `New lead signup from ${source}.\nEmail: ${trimmed}${name ? `\nName: ${name}` : ''}`,
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok) throw new Error(data.error ?? 'Something went wrong.');

      setSent(true);
      setEmail('');
      setName('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className={`lead-success ${className}`} role="status">
        You&apos;re in. We&apos;ll reach out within 24 hours.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`lead-form ${compact ? 'lead-form-compact' : ''} ${className}`}>
      {!compact && (
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          disabled={loading}
          onChange={(e) => setName(e.target.value)}
          className="lead-input"
          aria-label="Your name"
        />
      )}
      <div className="lead-row">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
          className="lead-input lead-input-main"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="btn-lead"
          disabled={loading}
          aria-busy={loading}
          data-cursor="cta"
          data-cursor-label="Sign up"
          data-magnetic="12"
        >
          {loading ? 'Sending…' : buttonText}
        </button>
      </div>
      {error ? <p className="lead-error" role="alert">{error}</p> : null}
    </form>
  );
}
