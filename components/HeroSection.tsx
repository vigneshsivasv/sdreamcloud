import Image from 'next/image';
import { siteData } from '@/lib/data';
import LeadForm from '@/components/LeadForm';

const { hero } = siteData;

export default function HeroSection() {
  return (
    <section aria-label="Hero" className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container-lux hero-inner">
        <p className="eyebrow">{hero.sectionLabel}</p>
        <h1 className="hero-title">
          {hero.titleMain}
          <em className="hero-title-em">{hero.titleSub}</em>
        </h1>
        <p className="hero-description">{hero.description}</p>
        <LeadForm
          source="hero"
          compact
          placeholder={hero.placeholder}
          buttonText={hero.btnText}
        />
        <p className="hero-proof">{hero.proof}</p>

        <div className="hero-visual">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&q=80"
            alt="Digital marketing growth dashboard with SEO and ads analytics"
            width={1400}
            height={800}
            priority
            sizes="(max-width: 1180px) 100vw, 1120px"
          />
        </div>
      </div>
    </section>
  );
}
