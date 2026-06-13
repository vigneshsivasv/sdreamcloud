'use client';
import { useState, useEffect, useRef } from 'react';
import { siteData } from '@/lib/data';

const { testimonials } = siteData;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    stopAuto();
    if (testimonials.length < 2) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
  };
  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const current = testimonials[index];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-pad scroll-animation"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', position: 'relative' }}
    >
      <div className="container-lux">
        <div style={{ marginBottom: '3rem' }}>
          <h2
            id="testimonials-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: '#fff',
              margin: 0,
              maxWidth: '48rem',
            }}
          >
            Words from the{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#71717a' }}>people we built for.</em>
          </h2>
        </div>

        <div
          role="region"
          aria-label="Testimonials slider"
          style={{ border: '1px solid var(--border)', padding: 'clamp(2rem, 5vw, 4rem)', background: '#09090b', position: 'relative' }}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <figure style={{ margin: 0, position: 'relative' }}>
            {/* decorative quote mark */}
            <span aria-hidden="true" style={{ position: 'absolute', top: '-1.5rem', left: '-0.5rem', fontSize: '8rem', fontFamily: 'Georgia,serif', color: 'rgba(244,63,94,0.12)', lineHeight: 1, userSelect: 'none' }}>"</span>

            <blockquote
              cite={current.role}
              style={{ margin: 0, position: 'relative', zIndex: 1 }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: '#fff',
                  margin: '0 0 2.5rem',
                }}
              >
                "{current.quote}"
              </p>
              <footer style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span
                  aria-hidden="true"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'grid',
                    placeItems: 'center',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    flexShrink: 0,
                  }}
                >
                  {current.author.charAt(0).toUpperCase()}
                </span>
                <div>
                  <cite style={{ fontStyle: 'normal', fontWeight: 600, color: '#fff', display: 'block' }}>
                    {current.author}
                  </cite>
                  <span style={{ fontSize: '0.85rem', color: '#71717a' }}>{current.role}</span>
                </div>
              </footer>
            </blockquote>
          </figure>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#52525b' }}>
              {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => { setIndex((i) => (i - 1 + testimonials.length) % testimonials.length); startAuto(); }}
                aria-label="Previous testimonial"
                style={{ width: '44px', height: '44px', border: '1px solid var(--border)', background: 'none', color: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', transition: 'border-color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                ←
              </button>
              <button
                onClick={() => { setIndex((i) => (i + 1) % testimonials.length); startAuto(); }}
                aria-label="Next testimonial"
                style={{ width: '44px', height: '44px', border: '1px solid var(--border)', background: 'none', color: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', transition: 'border-color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
