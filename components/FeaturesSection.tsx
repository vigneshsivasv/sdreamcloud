import Image from 'next/image';
import { siteData } from '@/lib/data';

const { features } = siteData;

export default function FeaturesSection() {
  return (
    <section id="about" className="section-pad" aria-labelledby="features-heading">
      <div className="container-lux">
        <div className="section-header-block">
          <p className="eyebrow">{features.sectionLabel}</p>
          <h2 id="features-heading" className="section-title">
            {features.titleMain}
            <br />
            <em className="section-title-em">{features.titleSub}</em>
          </h2>
        </div>

        <div className="feature-grid">
          {features.cards.map((card) => (
            <article key={card.title} className="glass-card">
              <div className="feature-media">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={800}
                  height={520}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="feature-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
