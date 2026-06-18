'use client';

import Link from 'next/link';
import { siteData } from '@/lib/data';
import CountUp from '@/components/ui/CountUp';

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
  return (
    <>
      <section aria-label="Hero" className="hero-section">
        <div aria-hidden="true" className="hero-gradient" />

        <div className="container-lux hero-content">
            <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>
              {hero.sectionLabel}
            </p>

            <h1 className="hero-title">
              {hero.titleMain}
              <br />
              <em className="hero-title-em">{hero.titleSub}</em>
            </h1>

            <p className="hero-description">{hero.description}</p>

            <div className="hero-cta-group">
              <Link href={hero.btn1Link} className="btn-primary hover-lift">
                {hero.btn1Text} <ArrowRight />
              </Link>
              <a href={hero.btn2Link} className="btn-ghost hover-lift">
                {hero.btn2Text} <EyeIcon />
              </a>
            </div>

            <dl className="hero-stats">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="hero-stat-item">
                  <dt
                    className="hero-stat-value"
                    style={{
                      fontFamily: 'var(--font-display), system-ui, sans-serif',
                      fontSize: 'clamp(1.25rem, 4vw, 2.5rem)',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <CountUp value={stat.value} />
                  </dt>
                  <dd className="hero-stat-label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)', margin: 0 }}>
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
        </div>
      </section>

      <div aria-hidden="true" className="marquee-wrapper">
        <div className="marquee marquee-track">
          {[...hero.marqueeItems, ...hero.marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="marquee-item">
              {item}
              {i < hero.marqueeItems.length * 2 - 1 && (
                <span className="marquee-separator">✦</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
