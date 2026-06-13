import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InsightsSection from '@/components/InsightsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

export const metadata: Metadata = {
  title: 'Sdreamclouds – Digital Marketing Agency',
  description:
    'We transform ambitious brands into market leaders through data-driven digital marketing strategies: SEO, paid media, brand strategy, and content creation.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'Sdreamclouds',
  url: 'https://sdreamclouds.com',
  logo: 'https://sdreamclouds.com/logo.png',
  description:
    'Premium digital marketing agency specialising in SEO, paid media, content strategy, and brand growth.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@sdreamclouds.com',
  },
  sameAs: [
    'https://twitter.com/sdreamclouds',
    'https://linkedin.com/company/sdreamclouds',
    'https://instagram.com/sdreamclouds',
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollObserver />
      <Header />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <InsightsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
