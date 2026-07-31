import { siteData } from '@/lib/data';

const { benefits } = siteData;

export default function BenefitsSection() {
  return (
    <section className="section-pad section-border-top" aria-labelledby="benefits-heading">
      <div className="container-lux">
        <div className="section-header-block">
          <p className="eyebrow">{benefits.sectionLabel}</p>
          <h2 id="benefits-heading" className="section-title">
            {benefits.titleMain}
            <br />
            <em className="section-title-em">{benefits.titleSub}</em>
          </h2>
        </div>

        <div className="benefits-grid">
          {benefits.cards.map((card) => (
            <article key={card.title} className="glass-card benefit-card">
              <div className="benefit-metric">
                {card.metric}
                <span>{card.metricLabel}</span>
              </div>
              <div>
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
