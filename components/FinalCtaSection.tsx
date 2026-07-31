import { siteData } from '@/lib/data';
import LeadForm from '@/components/LeadForm';

const { cta } = siteData;

export default function FinalCtaSection() {
  return (
    <section id="cta" className="final-cta" aria-labelledby="cta-heading">
      <div className="container-lux">
        <div className="final-cta-panel">
          <h2 id="cta-heading" className="section-title">
            {cta.titleMain}
            <br />
            <em className="section-title-em">{cta.titleSub}</em>
          </h2>
          <p className="text-secondary" style={{ marginTop: '1rem', maxWidth: '28rem', lineHeight: 1.7 }}>
            {cta.description}
          </p>
          <LeadForm
            source="final-cta"
            compact
            placeholder={cta.placeholder}
            buttonText={cta.btnText}
          />
        </div>
      </div>
    </section>
  );
}
