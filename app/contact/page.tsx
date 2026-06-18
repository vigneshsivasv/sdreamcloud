import type { Metadata } from 'next';
import { createMetadata, siteConfig, breadcrumbSchema } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = createMetadata({
  title: 'Contact – Sdreamclouds',
  description:
    'Get in touch with Sdreamclouds. Start a project, ask a question, or tell us about your growth goals — we respond within one business day.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
    languages: {
      'en-US': `${siteConfig.url}/contact`,
      'x-default': `${siteConfig.url}/contact`,
    },
  },
  openGraph: {
    title: 'Contact – Sdreamclouds',
    description:
      'Get in touch with Sdreamclouds. Start a project, ask a question, or tell us about your growth goals.',
    url: `${siteConfig.url}/contact`,
  },
});

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Contact', url: `${siteConfig.url}/contact` },
        ])}
      />
      <ContactSection asPage />
    </PageShell>
  );
}
