import { siteData } from '@/lib/data';

const { process } = siteData;

export default function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="section-pad scroll-animation" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
      <div className="container-lux">
        <div style={{ maxWidth: '48rem', marginBottom: '4rem' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>
            <span style={{ color: '#52525b', marginRight: '0.75rem' }}>{process.sectionNumber}</span>
            {process.sectionLabel}
          </p>
          <h2
            id="process-heading"
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
            {process.titleMain}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#71717a' }}>{process.titleSub}</em>
          </h2>
        </div>

        <ol style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          {process.steps.map((step, i) => (
            <li
              key={step.number}
              className="hover-surface"
              style={{
                display: 'grid',
                gridTemplateColumns: '3rem 1fr',
                gap: '1.5rem',
                padding: '2.5rem 0.5rem',
                borderBottom: i < process.steps.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--accent)', paddingTop: '0.5rem' }}>
                {step.number}
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <style>{`
                  @media (min-width: 1024px) {
                    .process-inner { grid-template-columns: 2fr 3fr !important; }
                  }
                `}</style>
                <div className="process-inner" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', alignItems: 'start' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: '#fff', margin: 0, lineHeight: 1.1 }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#71717a', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
