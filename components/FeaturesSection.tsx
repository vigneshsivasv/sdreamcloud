import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/lib/data';

const { features } = siteData;

export default function FeaturesSection() {
  return (
    <section id="about" className="philosophy section-pad" aria-labelledby="features-heading">
      <div className="container-lux philosophy__top">
        <div className="philosophy__left" data-reveal>
          <h2 id="features-heading" className="philosophy__title">
            <span aria-hidden="true">•</span> Our
            <br />
            Growth System
          </h2>
        </div>
        <div className="philosophy__right" data-reveal>
          <p className="eyebrow">{features.sectionLabel}</p>
          <p className="philosophy__copy">
            {features.titleMain} {features.titleSub} We build SEO, paid media, and conversion systems that turn attention into pipeline — without agency fluff.
          </p>
          <Link href="/#services" className="philosophy__link" data-cursor="view" data-cursor-label="Services">
            Discover services →
          </Link>
        </div>
      </div>

      <div className="philosophy__marquee" aria-hidden="true" data-reveal>
        <div className="philosophy__marquee-track">
          <span>SEO</span>
          <span>Ads</span>
          <span>CRO</span>
          <span>Web</span>
          <span>Content</span>
          <span>Strategy</span>
          <span>SEO</span>
          <span>Ads</span>
          <span>CRO</span>
          <span>Web</span>
          <span>Content</span>
          <span>Strategy</span>
        </div>
      </div>

      <div className="container-lux">
        <div className="feature-grid">
          {features.cards.map((card) => (
            <article
              key={card.title}
              className="glass-card"
              data-reveal
              data-magnetic="14"
              data-cursor="discover"
              data-cursor-label="Explore"
            >
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
