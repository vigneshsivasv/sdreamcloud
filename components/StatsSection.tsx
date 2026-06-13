import { siteData } from '@/lib/data';

const { stats } = siteData;

export default function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="section-pad" style={{ borderTop: '1px solid var(--border)', background: '#09090b' }}>
      <div className="container-lux">
        <div style={{ maxWidth: '48rem', marginBottom: '4rem' }}>
          <h2
            id="stats-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: '#fff',
              margin: 0,
            }}
          >
            {stats.titleMain}{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#71717a' }}>{stats.titleSub}</em>
          </h2>
        </div>

        <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', border: '1px solid var(--border)', borderBottom: 'none' }}>
          <style>{`
            @media (min-width: 640px) { .stats-dl { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .stats-dl { grid-template-columns: repeat(4, 1fr) !important; } }
          `}</style>

          {stats.stats.map((stat, i) => {
            const num = parseInt(stat.value.replace(/\D/g, ''), 10);
            const suffix = stat.value.replace(/[0-9]/g, '');
            return (
              <div
                key={i}
                style={{
                  padding: '3rem',
                  borderBottom: '1px solid var(--border)',
                  borderLeft: i % 1 === 0 ? 'none' : '1px solid var(--border)',
                }}
              >
                <dt
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#fff',
                    marginBottom: '1.5rem',
                  }}
                >
                  {stat.value}
                </dt>
                <dd style={{ margin: 0 }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#e4e4e7', marginBottom: '0.25rem' }}>
                    {stat.label}
                  </p>
                  <p style={{ color: '#52525b', fontSize: '0.85rem' }}>{stat.note}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
