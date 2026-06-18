import { siteData } from '@/lib/data';
import FadeIn from '@/components/ui/FadeIn';
import CountUp from '@/components/ui/CountUp';

const { stats } = siteData;

export default function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="section-pad" style={{ borderTop: '1px solid var(--border)', background: '#09090b' }}>
      <div className="container-lux">
        <FadeIn>
          <div style={{ maxWidth: '48rem', marginBottom: '4rem' }}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#52525b', marginRight: '0.75rem' }}>{stats.sectionNumber}</span>
              {stats.sectionLabel}
            </p>
            <h2 id="stats-heading" className="section-title">
              {stats.titleMain}{' '}
              <em className="section-title-em">{stats.titleSub}</em>
            </h2>
          </div>
        </FadeIn>

        <div className="stats-dl" role="list" aria-label="Company statistics">
          {stats.stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.05}>
              <div
                role="listitem"
                style={{
                  padding: 'clamp(1.5rem, 4vw, 3rem)',
                  borderBottom: '1px solid var(--border)',
                  height: '100%',
                }}
              >
                <p
                  aria-label={`${stat.value} ${stat.label}`}
                  style={{
                    fontFamily: 'var(--font-display), system-ui, sans-serif',
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#fff',
                    marginBottom: '1.5rem',
                  }}
                >
                  <CountUp value={stat.value} duration={2200} />
                </p>
                <p style={{ fontFamily: 'var(--font-display), system-ui, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#e4e4e7', marginBottom: '0.25rem' }}>
                  {stat.label}
                </p>
                <p style={{ color: '#52525b', fontSize: '0.85rem', margin: 0 }}>{stat.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
