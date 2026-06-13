'use client';
import { useEffect, useRef } from 'react';
import { siteData } from '@/lib/data';

const { hero } = siteData;

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function EyeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

export default function HeroSection() {
  const counterRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('[data-counter]');
    counters.forEach((el) => {
      const target = parseInt(el.dataset.counter || '0', 10);
      const duration = 2000;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = el.dataset.suffix ? current + el.dataset.suffix : String(current);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-label="Hero"
        style={{
          position: 'relative',
          width: '100%',
          background: '#09090b',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '6rem',
          paddingBottom: '2rem',
        }}
      >
        {/* Background gradient */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 25% 25%, rgba(244,63,94,0.08) 0%, transparent 55%), radial-gradient(circle at 75% 75%, rgba(244,63,94,0.04) 0%, transparent 55%)' }} />

        <div className="container-lux" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '56rem' }}>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: '#fff',
                margin: '0 0 1.5rem',
              }}
            >
              {hero.titleMain}
              <br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#71717a' }}>{hero.titleSub}</em>
            </h1>

            <p style={{ fontSize: '1.125rem', color: '#a1a1aa', fontFamily: 'var(--font-body)', lineHeight: 1.7, maxWidth: '38rem', marginBottom: '2.5rem' }}>
              {hero.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
              <a href={hero.btn1Link} className="btn-primary hover-lift">
                {hero.btn1Text} <ArrowRight />
              </a>
              <a href={hero.btn2Link} className="btn-ghost hover-lift">
                {hero.btn2Text} <EyeIcon />
              </a>
            </div>

            {/* Stats */}
            <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '1px solid var(--border)' }}>
              {hero.stats.map((stat, i) => {
                const num = parseInt(stat.value.replace(/\D/g, ''), 10);
                const suffix = stat.value.replace(/[0-9]/g, '');
                return (
                  <div key={i} style={{ padding: '1.25rem', textAlign: 'center', borderLeft: i > 0 ? '1px solid var(--border)' : 'none' }}>
                    <dt
                      data-counter={num}
                      data-suffix={suffix}
                      style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}
                    >
                      {stat.value}
                    </dt>
                    <dd style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#71717a', margin: 0 }}>
                      {stat.label}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div
        aria-hidden="true"
        style={{ padding: '1.25rem 0', background: '#18181b', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}
      >
        <div className="marquee" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
          {[...hero.marqueeItems, ...hero.marqueeItems].map((item, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: '#52525b', whiteSpace: 'nowrap' }}>
              {item}
              {i < hero.marqueeItems.length * 2 - 1 && (
                <span style={{ color: 'var(--accent)', marginLeft: '4rem' }}>✦</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
