import Image from 'next/image';
import { siteData } from '@/lib/data';

const { portfolio } = siteData;

export default function PortfolioSection() {
  const projects = portfolio.projects;
  const left = projects[0];
  const rightProjects = projects.slice(1, 3);

  return (
    <section id="work" aria-labelledby="work-heading" className="section-pad scroll-animation" style={{ borderTop: '1px solid var(--border)', background: '#09090b' }}>
      <div className="container-lux">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '4rem' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#52525b', marginRight: '0.75rem' }}>{portfolio.sectionNumber}</span>
              {portfolio.sectionLabel}
            </p>
            <h2
              id="work-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: '#fff',
                margin: 0,
                maxWidth: '36rem',
              }}
            >
              {portfolio.titleMain}
            </h2>
          </div>
          <a href={portfolio.buttonLink} className="section-link">
            {portfolio.buttonText}
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <style>{`
            @media (min-width: 1024px) { .portfolio-grid { grid-template-columns: 7fr 5fr !important; } }
          `}</style>
          <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {/* Large left card */}
            <article aria-label={`${left.title} case study`} className="portfolio-item" style={{ aspectRatio: '4/3' }}>
              <Image
                src={left.image}
                alt={`${left.title} – ${left.client} project showcase`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#d4d4d8', zIndex: 1 }}>
                <span>{left.client}</span>
                <span>01</span>
              </div>
              <a href={left.link} className="portfolio-overlay" aria-label={`View ${left.title} case study`}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {left.tags.split(',').map((tag) => (
                    <span key={tag} style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', border: '1px solid rgba(255,255,255,0.3)', padding: '0.2rem 0.5rem' }}>
                      {tag.trim()}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', margin: '0 0 0.5rem' }}>
                  {left.title}
                </h3>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>
                  {left.result}
                </p>
              </a>
            </article>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {rightProjects.map((project, i) => (
                <article key={i} aria-label={`${project.title} case study`} className="portfolio-item" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={project.image}
                    alt={`${project.title} – ${project.client} project showcase`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#d4d4d8', zIndex: 1 }}>
                    <span>{project.client}</span>
                    <span>0{i + 2}</span>
                  </div>
                  <a href={project.link} className="portfolio-overlay" aria-label={`View ${project.title} case study`}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                      {project.tags.split(',').map((tag) => (
                        <span key={tag} style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', border: '1px solid rgba(255,255,255,0.3)', padding: '0.2rem 0.5rem' }}>
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', margin: '0 0 0.5rem' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>
                      {project.result}
                    </p>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
