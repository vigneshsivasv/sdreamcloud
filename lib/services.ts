export type ServicePage = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  keywords: string[];
  features: string[];
  ctaText: string;
  image: string;
  imageAlt: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'seo-organic-growth',
    title: 'SEO Services',
    focusKeyword: 'SEO services',
    seoTitle: 'SEO Services | SEO Agency | Sdreamclouds',
    shortDescription:
      'Rank higher on Google and turn search traffic into paying customers with technical SEO, local SEO, and content strategies that compound.',
    description:
      'Sdreamclouds is an SEO agency that builds technical SEO, local SEO, and content strategies that compound over time. We focus on buyer-intent keywords so every ranking drives qualified leads — not empty traffic.',
    metaDescription:
      'SEO services from Sdreamclouds. Technical SEO audits, keyword research, on-page optimization, local SEO, and monthly reporting that grows organic leads.',
    keywords: [
      'SEO services',
      'SEO agency',
      'technical SEO audit',
      'local SEO',
      'keyword research',
      'on-page SEO',
      'Google Business Profile optimization',
      'Sdreamclouds SEO',
    ],
    features: [
      'Technical SEO audits and fixes (site speed, crawlability, indexing)',
      'Keyword research built around buyer intent',
      'On-page optimization: titles, meta tags, headings, internal linking',
      'Local SEO and Google Business Profile optimization',
      'Monthly reporting on rankings, traffic, and conversions',
    ],
    ctaText: 'Get SEO Audit',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=600&fit=crop&q=80',
    imageAlt: 'SEO specialist reviewing organic search performance dashboard',
  },
  {
    slug: 'paid-media',
    title: 'Google Ads & PPC',
    focusKeyword: 'Google Ads management',
    seoTitle: 'Google Ads & PPC Management | Meta Ads | Sdreamclouds',
    shortDescription:
      'Google Ads and Meta Ads campaigns optimized for cost-per-lead, not just clicks — with tracking, creative, and weekly optimization.',
    description:
      'As a performance-driven digital marketing agency, we run Google Ads and Meta Ads campaigns optimized for cost-per-lead, not just clicks. Every dollar is tracked, tested, and scaled toward pipeline.',
    metaDescription:
      'Google Ads management and Meta Ads from Sdreamclouds. Search, Display, Shopping, YouTube, and Instagram campaigns built for leads and ROAS.',
    keywords: [
      'Google Ads management',
      'PPC management',
      'Meta Ads',
      'Instagram Ads',
      'YouTube Ads',
      'paid media agency',
      'lead generation ads',
      'Sdreamclouds paid media',
    ],
    features: [
      'Google Search, Display, Shopping & YouTube Ads',
      'Meta and Instagram Ads: creative, targeting, retargeting',
      'Conversion tracking and pixel setup done right',
      'Weekly bid, budget, and creative optimization',
    ],
    ctaText: 'Get Ads Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Paid media analyst reviewing PPC campaign performance metrics',
  },
  {
    slug: 'content-creation',
    title: 'Social Media Marketing',
    focusKeyword: 'social media marketing agency',
    seoTitle: 'Social Media Marketing Agency | Instagram & LinkedIn | Sdreamclouds',
    shortDescription:
      'Platform strategy, content calendars, and paid social campaigns that grow engaged audiences and generate leads.',
    description:
      'We manage social media for growing brands — building content calendars, running paid social, and growing engaged audiences across Instagram, LinkedIn, and Facebook.',
    metaDescription:
      'Social media marketing agency services from Sdreamclouds. Instagram, LinkedIn, and Facebook strategy, content calendars, and paid social for lead generation.',
    keywords: [
      'social media marketing agency',
      'Instagram marketing',
      'LinkedIn marketing',
      'Facebook advertising',
      'paid social campaigns',
      'content calendar',
      'Sdreamclouds social media',
    ],
    features: [
      'Platform strategy for Instagram, LinkedIn, and Facebook',
      'Content calendars and consistent posting schedules',
      'Paid social campaigns tied to lead generation',
    ],
    ctaText: 'Get Social Media Plan',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Social media marketing creative on phone and laptop',
  },
  {
    slug: 'web-design-dev',
    title: 'Website Development',
    focusKeyword: 'website development company',
    seoTitle: 'Website development Company | WordPress & Web Development | Sdreamclouds',
    shortDescription:
      'Fast, mobile-first websites built for search visibility and conversions — including custom WordPress builds.',
    description:
      'We design and develop conversion-focused websites with clean architecture, Core Web Vitals performance, and SEO-ready structure from day one — including custom WordPress builds.',
    metaDescription:
      'Website development company services from Sdreamclouds. Custom web design, WordPress development, PageSpeed optimization, and SEO-ready site architecture.',
    keywords: [
      'website development company',
      'web design agency',
      'WordPress development',
      'PageSpeed optimization',
      'Core Web Vitals',
      'conversion-focused websites',
      'Sdreamclouds web design',
    ],
    features: [
      'Custom website development',
      'WordPress builds with secure, maintainable architecture',
      'Core Web Vitals and PageSpeed optimization',
      'SEO-ready structure from day one: schema, sitemaps, clean URLs',
    ],
    ctaText: 'Get Website Quote',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Web developer building responsive marketing website on laptop',
  },
  {
    slug: 'brand-strategy',
    title: 'Brand Strategy & Content Marketing',
    focusKeyword: 'brand strategy agency',
    seoTitle: 'Brand Strategy & Content Marketing Agency | Sdreamclouds',
    shortDescription:
      'Positioning, messaging, and content marketing tied to SEO and funnel stage — before you spend a rupee on ads.',
    description:
      'A brand strategy agency approach — positioning your business clearly before you spend a rupee on ads. We build messaging frameworks and content that supports SEO and every stage of the funnel.',
    metaDescription:
      'Brand strategy and content marketing from Sdreamclouds. Positioning, messaging frameworks, SEO blogs, landing pages, and case studies that convert.',
    keywords: [
      'brand strategy agency',
      'brand positioning',
      'content marketing',
      'messaging framework',
      'SEO content',
      'landing page copy',
      'Sdreamclouds brand strategy',
    ],
    features: [
      'Brand positioning and competitive differentiation',
      'Messaging frameworks and tone of voice',
      'Content marketing tied to SEO and funnel stage',
      'Blog posts, landing pages, and case studies',
    ],
    ctaText: 'Get Brand Strategy Call',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Brand strategy team collaborating on marketing positioning workshop',
  },
  {
    slug: 'analytics-cro',
    title: 'Analytics & CRO',
    focusKeyword: 'conversion rate optimization',
    seoTitle: 'Analytics & CRO | Conversion Rate Optimization | Sdreamclouds',
    shortDescription:
      'GA4 setup, funnel analysis, and A/B testing that convert more of your existing traffic into leads and revenue.',
    description:
      'Traffic without conversion is just noise. We track what matters and run structured tests to convert more of your existing traffic — with clear dashboards and actionable insights.',
    metaDescription:
      'Analytics and CRO from Sdreamclouds. GA4 setup, funnel analysis, and A/B testing on landing pages to improve conversions and lower CPA.',
    keywords: [
      'conversion rate optimization',
      'CRO agency',
      'GA4 setup',
      'A/B testing',
      'funnel analysis',
      'marketing analytics',
      'Sdreamclouds CRO',
    ],
    features: [
      'Analytics and dashboard setup (GA4, tag management)',
      'Funnel and drop-off analysis',
      'A/B testing on landing pages and key flows',
    ],
    ctaText: 'Get CRO Audit',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Analytics dashboard showing conversion rate optimization metrics',
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((s) => s.slug);
}

export function getServiceHref(slug: string): string {
  return `/services/${slug}`;
}

export function getContactHref(serviceSlug?: string): string {
  return serviceSlug ? `/contact?service=${encodeURIComponent(serviceSlug)}` : '/contact';
}
