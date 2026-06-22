import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import CountUp from '@/components/ui/CountUp';
import { slideInLeft, slideInRight } from '@/lib/animations';

const aboutStats = [
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Dedicated Partnership' },
  { value: '48hr', label: 'Strategy Delivery' },
  { value: '24/7', label: 'Support Available' },
];

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-pad">
      <div className="container-lux">
        <div className="about-grid">
          <FadeIn variants={slideInLeft}>
            <h2 id="about-heading" className="section-title" style={{ marginBottom: '1.5rem' }}>
              About
              <br />
              <em className="section-title-em">Sdreamclouds</em>
            </h2>
            <p className="text-secondary" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '36rem' }}>
              Sdreamclouds is a digital marketing agency focused on search engine optimization, paid advertising, and conversion-driven web experiences. We help brands get found on Google, win on Facebook, and convert traffic into revenue.
            </p>

            <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {aboutStats.map((item) => (
                <div key={item.label}>
                  <dt style={{ fontFamily: 'var(--font-display), system-ui, sans-serif', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, color: 'var(--heading)', marginBottom: '0.25rem' }}>
                    <CountUp value={item.value} />
                  </dt>
                  <dd style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)', margin: 0 }}>
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>

            <Link href="/contact" className="btn-primary hover-lift">
              Meet the Team
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>

          <FadeIn variants={slideInRight}>
            <figure style={{ margin: 0, overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop&q=80"
                alt="Sdreamclouds digital marketing team collaborating on SEO and advertising strategy"
                width={700}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
