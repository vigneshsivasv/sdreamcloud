import { siteData } from '@/lib/data';

const { process } = siteData;

export default function ProcessSection() {
  return (
    <section id="process" className="section-pad section-border-top" aria-labelledby="process-heading">
      <div className="container-lux">
        <div className="section-header-block">
          <p className="eyebrow">{process.sectionLabel}</p>
          <h2 id="process-heading" className="section-title">
            {process.titleMain}
            <br />
            <em className="section-title-em">{process.titleSub}</em>
          </h2>
        </div>

        <div className="process-panel">
          <ol className="process-steps">
            {process.steps.map((step, index) => (
              <li key={step.title} className="process-step">
                <span className="process-step-num">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
