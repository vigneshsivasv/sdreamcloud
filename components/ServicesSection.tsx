import { siteData } from '@/lib/data';

const { services } = siteData;

const icons: Record<string, JSX.Element> = {
  'SEO & Organic Growth': (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  'Paid Media': (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  ),
  'Brand Strategy': (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  'Content Creation': (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  'Web Design & Dev': (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  'Analytics & CRO': (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-pad scroll-animation" style={{ background: '#09090b', borderTop: '1px solid var(--border)' }}>
      <div className="container-lux">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '4rem' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#52525b', marginRight: '0.75rem' }}>{services.sectionNumber}</span>
              {services.sectionLabel}
            </p>
            <h2
              id="services-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: '#fff',
                margin: '0 0 1rem',
              }}
            >
              {services.titleMain}<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#71717a' }}>{services.titleSub}</em>
            </h2>
            <p style={{ color: '#a1a1aa', maxWidth: '36rem', lineHeight: 1.7 }}>{services.description}</p>
          </div>
          <a href={services.btnLink} className="btn-ghost">
            {services.btnText}
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <ul
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}
          aria-label="Our services"
        >
          <style>{`
            @media (min-width: 768px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          `}</style>
          <style>{`.services-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 1.5rem; list-style: none; margin: 0; padding: 0; }`}</style>

          {services.services.map((service) => (
            <li key={service.title} className="lx-card" style={{ padding: '2rem' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(244,63,94,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--accent)', transition: 'background 0.2s ease' }}>
                {icons[service.title] || icons['Brand Strategy']}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: '0 0 0.75rem' }}>
                {service.title}
              </h3>
              <p style={{ color: '#71717a', lineHeight: 1.7, margin: '0 0 1.5rem', fontSize: '0.9rem' }}>
                {service.description}
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600 }}>
                Learn more
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
