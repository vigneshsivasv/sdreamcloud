import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Sdreamclouds',
  title: 'Performance Marketing Agency In India | Sdreamclouds',
  description:
    'We are the Best Performance Marketing Agency In India helping businesses grow 3X to 4X with proven performance marketing strategies.',
  url: 'https://sdreamclouds.com',
  locale: 'en_US',
  language: 'en',
  twitterHandle: '@sdreamclouds',
  email: 'sdreamclouds@gmail.com',
  gtmId: 'GTM-MW3496JQ',
  clarityId: 'xb270rp3yq',
  focusKeyword: 'performance marketing agency in india',
  keywords: [
    'digital marketing agency in india',
    'digital marketing agency',
    'performance marketing agency in india',
    'performance marketing agency',
    'performance marketing agency india',
    'digital marketing agency india',
    'facebook ads agency in india',
    'google ads lead generation services in india',
    'meta ads lead generation',
    'SEO services',
    'search engine optimization',
    'Google Ads management',
    'Facebook advertising',
    'paid media advertising',
    'content marketing strategy',
    'conversion rate optimization',
    'web design agency',
    'brand strategy',
    'brand strategy agency',
    'brand strategy agency in india',
    'brand strategy agency in india',
    'Sdreamclouds',
  ],
  sameAs: [
    'https://twitter.com/sdreamclouds',
    'https://linkedin.com/company/sdreamclouds',
    'https://instagram.com/sdreamclouds',
  ],
} as const;

export type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
  focusKeyword?: string;
  path?: string;
};

export function getOgImageUrl(path = '/opengraph-image') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

export function buildOpenGraphImages(path = '/opengraph-image', alt?: string) {
  return [
    {
      url: getOgImageUrl(path),
      width: 1200,
      height: 630,
      alt: alt ?? `${siteConfig.name} – Digital Marketing Agency`,
    },
  ];
}

type CreateMetadataOptions = Partial<Metadata> & {
  keywords?: string[];
  ogImagePath?: string;
  ogImageAlt?: string;
};

export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const { name, title, description, url, locale, twitterHandle, keywords } = siteConfig;

  const pageTitle = (options.title as string | undefined) ?? title;
  const pageDescription = options.description ?? description;
  const pageKeywords = options.keywords ?? [...keywords];
  const ogPath = options.ogImagePath ?? '/opengraph-image';
  const ogImages = buildOpenGraphImages(ogPath, options.ogImageAlt ?? pageTitle);

  const { keywords: _k, ogImagePath: _p, ogImageAlt: _a, openGraph: ogOverride, twitter: twitterOverride, ...rest } = options;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name, url }],
    creator: name,
    publisher: name,
    category: 'Digital Marketing',
    openGraph: {
      type: 'website',
      locale,
      url,
      siteName: name,
      title: pageTitle,
      description: pageDescription,
      images: ogImages,
      ...(ogOverride && typeof ogOverride === 'object' ? ogOverride : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: twitterHandle,
      site: twitterHandle,
      images: [getOgImageUrl(ogPath)],
      ...(twitterOverride && typeof twitterOverride === 'object' ? twitterOverride : {}),
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
    ...rest,
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
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: siteConfig.email,
      availableLanguage: ['English'],
    },
    sameAs: siteConfig.sameAs,
    areaServed: ['India', 'Worldwide'],
    knowsAbout: [
      'Digital Marketing',
      'Digital Marketing Agency',
      'Digital Marketing Agency In India',
      'Digital Marketing Agency In India',
      'Performance Marketing',
      'Brand Strategy',
      'Search Engine Optimization',
      'Google Ads',
      'Facebook Advertising',
      'Content Marketing',
      'Web Design',
      'Conversion Rate Optimization',
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
