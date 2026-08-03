'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ServicePage } from '@/lib/services';
import LeadForm from '@/components/LeadForm';

type ServicePageContentProps = {
  service: ServicePage;
};

export default function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      <section className="service-page-hero">
        <div className="container-lux">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-reveal>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>

          <p className="eyebrow" data-reveal>
            Service
          </p>
          <h1 className="service-page-title" data-reveal>
            {service.title}
            <span className="landing-red-dot" aria-hidden="true" />
          </h1>
          <p className="service-page-lead" data-reveal>
            {service.description}
          </p>
          <div data-reveal data-magnetic="10">
            <Link href="/#cta" className="btn-primary" data-cursor="cta" data-cursor-label="Audit">
              Get free growth audit
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <div className="service-detail-grid">
            <figure className="service-page-media" data-reveal data-magnetic="12" data-cursor="discover" data-cursor-label="View">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </figure>

            <div data-reveal>
              <h2 className="section-title section-title--sm">What&apos;s included</h2>
              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature} data-magnetic="6">
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-secondary" style={{ lineHeight: 1.7, marginTop: '2rem' }}>
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-cta section-pad">
        <div className="container-lux">
          <div className="service-cta-panel" data-reveal data-magnetic="8">
            <h2 className="section-title section-title--sm">
              Ready to grow with {service.title}?
            </h2>
            <p className="text-secondary" style={{ margin: '1rem 0 1.5rem', maxWidth: '32rem', lineHeight: 1.7 }}>
              Tell us your goals — we&apos;ll reply with a clear plan for {service.title.toLowerCase()}.
            </p>
            <LeadForm source={`service-${service.slug}`} compact buttonText="Start free audit" />
          </div>
        </div>
      </section>
    </>
  );
}
