import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { getAllServiceSlugs } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-01');

  const serviceEntries = getAllServiceSlugs().map((slug) => ({
    url: `${siteConfig.url}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceEntries,
  ];
}
