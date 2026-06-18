import Image from 'next/image';
import Link from 'next/link';
import type { ServicePage } from '@/lib/services';
import FadeIn from '@/components/ui/FadeIn';

type ServicePageContentProps = {
  service: ServicePage;
};

export default function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      <section className="page-hero" style={{ background: '#09090b', borderBottom: '1px solid var(--border)' }}>
        <div className="container-lux">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#services">Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Service</p>
            <h1 className="section-title" style={{ marginBottom: '1.5rem', maxWidth: '48rem' }}>
              {service.title}
            </h1>
            <p style={{ color: '#a1a1aa', fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, maxWidth: '42rem', marginBottom: '2rem' }}>
              {service.description}
            </p>
            <Link href="/contact" className="btn-primary hover-lift">
              Start a project
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#09090b' }}>
        <div className="container-lux">
          <div className="service-detail-grid">
            <FadeIn>
              <figure style={{ margin: 0, overflow: 'hidden', aspectRatio: '4/3', position: 'relative', background: 'var(--surface)' }}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </figure>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>
                What&apos;s included
              </h2>
              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p style={{ color: '#eeeeee', lineHeight: 1.7, marginTop: '2rem' }}>
                {service.shortDescription}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container-lux">
          <FadeIn>
            <div className="service-cta-block">
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '1rem' }}>
                Ready to get started?
              </h2>
              <p style={{ color: '#a1a1aa', marginBottom: '2rem', maxWidth: '32rem' }}>
                Tell us about your goals and we&apos;ll show you how {service.title.toLowerCase()} can drive measurable growth.
              </p>
              <Link href="/contact" className="btn-primary hover-lift">
                Contact us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
