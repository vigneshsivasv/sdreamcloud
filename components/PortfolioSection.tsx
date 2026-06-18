import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import FadeIn from '@/components/ui/FadeIn';
import { scaleIn } from '@/lib/animations';

const { portfolio } = siteData;

export default function PortfolioSection() {
  const projects = portfolio.projects;
  const left = projects[0];
  const rightProjects = projects.slice(1, 3);

  return (
    <section id="work" aria-labelledby="work-heading" className="section-pad section-border-top">
      <div className="container-lux">
        <FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '4rem' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>
                {portfolio.sectionLabel}
              </p>
              <h2 id="work-heading" className="section-title" style={{ maxWidth: '36rem' }}>
                {portfolio.titleMain}
              </h2>
            </div>
            <a href={portfolio.buttonLink} className="section-link">
              {portfolio.buttonText}
            </a>
          </div>
        </FadeIn>

        <div className="portfolio-grid">
          <FadeIn variants={scaleIn}>
            <article aria-label={`${left.title} case study`} className="portfolio-item">
              <Image
                src={left.image}
                alt={`${left.title} – ${left.client} digital marketing project showcase`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 55vw"
                loading="lazy"
              />
              <div className="portfolio-meta">
                <span>{left.client}</span>
                <span>01</span>
              </div>
              <Link href={left.link} className="portfolio-overlay" aria-label={`View ${left.title} case study details`}>
                <div className="portfolio-tags">
                  {left.tags.split(',').map((tag) => (
                    <span key={tag.trim()} className="portfolio-tag">{tag.trim()}</span>
                  ))}
                </div>
                <h3 className="portfolio-title">{left.title}</h3>
                <p className="portfolio-result">{left.result}</p>
              </Link>
            </article>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {rightProjects.map((project, i) => (
              <FadeIn key={project.title} variants={scaleIn} delay={(i + 1) * 0.1}>
                <article aria-label={`${project.title} case study`} className="portfolio-item">
                  <Image
                    src={project.image}
                    alt={`${project.title} – ${project.client} digital marketing project showcase`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    loading="lazy"
                  />
                  <div className="portfolio-meta">
                    <span>{project.client}</span>
                    <span>0{i + 2}</span>
                  </div>
                  <Link href={project.link} className="portfolio-overlay" aria-label={`View ${project.title} case study details`}>
                    <div className="portfolio-tags">
                      {project.tags.split(',').map((tag) => (
                        <span key={tag.trim()} className="portfolio-tag">{tag.trim()}</span>
                      ))}
                    </div>
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-result">{project.result}</p>
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
