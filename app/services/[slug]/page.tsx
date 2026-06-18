import type { Metadata } from 'next';
import { createMetadata, siteConfig, breadcrumbSchema } from '@/lib/seo';
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/services';
import PageShell from '@/components/PageShell';
import ServicePageContent from '@/components/ServicePageContent';
import JsonLd from '@/components/JsonLd';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const url = `${siteConfig.url}/services/${service.slug}`;

  return createMetadata({
    title: `${service.title} – Sdreamclouds`,
    description: service.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'x-default': url,
      },
    },
    openGraph: {
      title: `${service.title} – Sdreamclouds`,
      description: service.metaDescription,
      url,
    },
  });
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const url = `${siteConfig.url}/services/${service.slug}`;

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/#services` },
          { name: service.title, url },
        ])}
      />
      <ServicePageContent service={service} />
    </PageShell>
  );
}
