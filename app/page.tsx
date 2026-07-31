import type { Metadata } from 'next';
import { createMetadata, siteConfig, organizationSchema, websiteSchema, marketingAgencySchema, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { siteData } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import PageShell from '@/components/PageShell';
import HeroSection from '@/components/HeroSection';
import LogoBar from '@/components/LogoBar';
import FeaturesSection from '@/components/FeaturesSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';

export const metadata: Metadata = createMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  ogImagePath: '/opengraph-image',
  ogImageAlt: siteConfig.title,
  openGraph: {
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
      <LogoBar />
      <FeaturesSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      {/* <TestimonialsSection /> */}
      <FaqSection />
      <FinalCtaSection />
    </PageShell>
  );
}
