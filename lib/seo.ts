import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Sdreamclouds',
  title: 'Sdreamclouds | Digital Marketing & SEO Agency',
  description:
    'Sdreamclouds is a results-driven digital marketing agency offering SEO services, Google Ads, Facebook advertising, content marketing, and conversion-focused web design for growing brands worldwide.',
  url: 'https://sdreamclouds.com',
  locale: 'en_US',
  language: 'en',
  twitterHandle: '@sdreamclouds',
  email: 'sdreamclouds@gmail.com',
  keywords: [
    'digital marketing agency',
    'SEO services',
    'search engine optimization',
    'Google Ads management',
    'Facebook advertising',
    'Meta ads agency',
    'content marketing strategy',
    'conversion rate optimization',
    'web design agency',
    'social media marketing',
    'local SEO services',
    'paid media advertising',
    'brand strategy consulting',
    'Sdreamclouds',
    'S Dream Clouds',
  ],
  sameAs: [
    'https://twitter.com/sdreamclouds',
    'https://linkedin.com/company/sdreamclouds',
    'https://instagram.com/sdreamclouds',
  ],
} as const;

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  const { name, title, description, url, locale, twitterHandle, keywords } = siteConfig;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    description,
    keywords: [...keywords],
    authors: [{ name, url }],
    creator: name,
    publisher: name,
    category: 'Digital Marketing',
    openGraph: {
      type: 'website',
      locale,
      url,
      siteName: name,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: twitterHandle,
      site: twitterHandle,
    },
    icons: {
      icon: [{ url: '/favicon.png', sizes: '64x64', type: 'image/png' }],
      apple: [{ url: '/favicon.png', sizes: '180x180', type: 'image/png' }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'x-default': url,
      },
    },
    ...overrides,
  };
}

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
      width: 512,
      height: 512,
    },
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: siteConfig.sameAs,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: siteConfig.language,
  };
}

export function marketingAgencySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    '@id': `${siteConfig.url}/#agency`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    parentOrganization: { '@id': `${siteConfig.url}/#organization` },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: siteConfig.email,
      availableLanguage: ['English'],
    },
    sameAs: siteConfig.sameAs,
    areaServed: 'Worldwide',
    knowsAbout: [
      'Search Engine Optimization',
      'Google Ads',
      'Facebook Advertising',
      'Content Marketing',
      'Web Design',
      'Conversion Rate Optimization',
      'Social Media Marketing',
    ],
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#faq`,
    url: `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
