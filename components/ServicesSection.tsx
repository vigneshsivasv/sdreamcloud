import Link from 'next/link';
import { siteData } from '@/lib/data';
import { getServiceHref } from '@/lib/services';

const { services } = siteData;

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad section-border-top" aria-labelledby="services-heading">
      <div className="container-lux">
        <div className="section-header-block">
          <p className="eyebrow">{services.sectionLabel}</p>
          <h2 id="services-heading" className="section-title">
            {services.titleMain}
            <br />
            <em className="section-title-em">{services.titleSub}</em>
          </h2>
          <p className="text-secondary" style={{ marginTop: '1rem', lineHeight: 1.7 }}>
            {services.description}
          </p>
        </div>

        <ul className="services-grid">
          {services.services.map((service) => (
            <li key={service.slug}>
              <article className="glass-card service-card">
                <h3>
                  <Link href={getServiceHref(service.slug)} className="link-accent">
                    {service.title}
                  </Link>
                </h3>
                <p>{service.description}</p>
                <Link href={getServiceHref(service.slug)} className="service-link">
                  Learn more →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
