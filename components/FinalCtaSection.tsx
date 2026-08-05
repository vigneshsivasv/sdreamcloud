import Link from 'next/link';
import { siteData } from '@/lib/data';

const { cta } = siteData;

export default function FinalCtaSection() {
  return (
    <section id="cta" className="final-cta" aria-labelledby="cta-heading">
      <div className="container-lux">
        <div className="final-cta-panel" data-reveal data-magnetic="8">
          <p className="eyebrow">Start today</p>
          <h2 id="cta-heading" className="section-title">
            {cta.titleMain}
            <br />
            <em className="section-title-em">{cta.titleSub}</em>
          </h2>
          <p className="text-secondary" style={{ marginTop: '1rem', maxWidth: '28rem', lineHeight: 1.7 }}>
            {cta.description}
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link
              href="/contact"
              className="btn-primary"
              data-cursor="cta"
              data-cursor-label="Contact"
              data-magnetic="10"
            >
              {cta.btnText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
