import { siteData } from '@/lib/data';
import FadeIn from '@/components/ui/FadeIn';

const { process } = siteData;

export default function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="section-pad section-border-top">
      <div className="container-lux">
        <FadeIn>
          <div style={{ maxWidth: '48rem', marginBottom: '4rem' }}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>
              {process.sectionLabel}
            </p>
            <h2 id="process-heading" className="section-title">
              {process.titleMain}
              <em className="section-title-em"> {process.titleSub}</em>
            </h2>
          </div>
        </FadeIn>

        <ol style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          {process.steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <li
                className="hover-surface process-step"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2.5rem) 0.5rem',
                  borderBottom: i < process.steps.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div className="process-inner">
                  <h3 style={{ fontFamily: 'var(--font-display), system-ui, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: 'var(--heading)', margin: 0, lineHeight: 1.1 }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                    {step.description}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
