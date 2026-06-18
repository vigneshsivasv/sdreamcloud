import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { createMetadata, siteConfig, organizationSchema, websiteSchema, marketingAgencySchema, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { siteData } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import PageShell from '@/components/PageShell';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import ProcessSection from '@/components/ProcessSection';
import FaqSection from '@/components/FaqSection';

const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div className="hero-skeleton" aria-hidden="true" />,
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="section-skeleton" aria-hidden="true" />,
});

export const metadata: Metadata = createMetadata({
  title: siteConfig.title,
  description:
    'We transform ambitious brands into market leaders through data-driven digital marketing strategies: SEO, paid media, brand strategy, and content creation.',
  openGraph: {
    title: siteConfig.title,
    description:
      'We transform ambitious brands into market leaders through data-driven digital marketing strategies: SEO, paid media, brand strategy, and content creation.',
    url: siteConfig.url,
  },
});

const structuredData = [
  organizationSchema(),
  websiteSchema(),
  marketingAgencySchema(),
  breadcrumbSchema([{ name: 'Home', url: siteConfig.url }]),
  faqSchema(siteData.faq.items),
];

export default function HomePage() {
  return (
    <PageShell>
      <JsonLd data={structuredData} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
    </PageShell>
  );
}
