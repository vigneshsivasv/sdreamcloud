import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-pad scroll-animation" style={{ background: '#09090b' }}>
      <div className="container-lux">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
          <style>{`
            @media (min-width: 1024px) {
              .about-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2
                id="about-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.95,
                  color: '#fff',
                  margin: '0 0 1.5rem',
                }}
              >
                About<br />
                <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#71717a' }}>Sdreamclouds</em>
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '36rem' }}>
                We're a team of digital marketing experts passionate about transforming ambitious brands into market leaders through data-driven strategies and creative excellence.
              </p>

              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  { value: '8+', label: 'Years Experience' },
                  { value: '50+', label: 'Projects Completed' },
                  { value: '300%', label: 'Average Growth' },
                  { value: '24/7', label: 'Support Available' },
                ].map((item) => (
                  <div key={item.label}>
                    <dt style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                      {item.value}
                    </dt>
                    <dd style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#71717a', margin: 0 }}>
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <a href="#contact" className="btn-primary hover-lift">
                Meet the Team
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <figure style={{ margin: 0, borderRadius: '0', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1521737584312-4a8e4e4b2f8?w=700&h=500&fit=crop"
                alt="Sdreamclouds team collaborating in a creative workspace"
                width={700}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
