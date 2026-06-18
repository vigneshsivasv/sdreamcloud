export type ServicePage = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  metaDescription: string;
  features: string[];
  image: string;
  imageAlt: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'seo-organic-growth',
    title: 'SEO & Organic Growth',
    shortDescription:
      'Technical SEO, keyword strategy, and content marketing that help you rank higher on Google and attract qualified organic traffic.',
    description:
      'Sdreamclouds delivers end-to-end search engine optimization — from site audits and schema markup to content clusters and digital PR. We focus on keywords with commercial intent so every ranking drives real revenue, not empty traffic.',
    metaDescription:
      'Professional SEO services from Sdreamclouds. Technical audits, keyword research, content strategy, and link building for sustainable Google rankings.',
    features: [
      'Comprehensive technical SEO audit and fixes',
      'Keyword research with search intent mapping',
      'On-page optimization and structured data markup',
      'Content marketing and topic cluster strategy',
      'Authority link building and digital PR outreach',
    ],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=600&fit=crop&q=80',
    imageAlt: 'SEO specialist reviewing organic search performance dashboard',
  },
  {
    slug: 'paid-media',
    title: 'Paid Media & PPC',
    shortDescription:
      'Google Ads, Facebook advertising, and LinkedIn campaigns optimized for conversions, ROAS, and scalable lead generation.',
    description:
      'Our paid media team builds full-funnel campaigns across Google Search, Display, Facebook, Instagram, and LinkedIn. Every ad dollar is tracked, tested, and optimized toward your cost-per-acquisition and return on ad spend targets.',
    metaDescription:
      'Google Ads and Facebook advertising management by Sdreamclouds. Full-funnel PPC campaigns optimized for ROAS and lead generation.',
    features: [
      'Google Ads search, display, and shopping campaigns',
      'Facebook and Instagram ad creative testing',
      'Audience segmentation and retargeting funnels',
      'Conversion tracking and attribution setup',
      'Weekly budget optimization and scaling',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Paid media analyst reviewing PPC campaign performance metrics',
  },
  {
    slug: 'brand-strategy',
    title: 'Brand Strategy',
    shortDescription:
      'Market positioning, brand messaging, and identity systems that differentiate your business and build lasting customer trust.',
    description:
      'We help you define where your brand sits in the market, what it stands for, and how it speaks to customers. From competitive analysis to messaging frameworks and visual direction, every element reinforces a clear, memorable identity.',
    metaDescription:
      'Brand strategy and positioning services from Sdreamclouds. Messaging frameworks, visual identity direction, and market differentiation.',
    features: [
      'Competitive landscape and audience analysis',
      'Brand positioning and value proposition',
      'Messaging architecture and tone of voice',
      'Visual identity direction and guidelines',
      'Go-to-market messaging for launches',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Brand strategy team collaborating on marketing positioning workshop',
  },
  {
    slug: 'content-creation',
    title: 'Content Marketing',
    shortDescription:
      'SEO-driven blogs, landing page copy, and social content that educates your audience and accelerates the buying journey.',
    description:
      'Content is the engine behind organic search and social engagement. We produce keyword-targeted articles, conversion-focused landing pages, email sequences, and social posts aligned with your brand voice and sales funnel.',
    metaDescription:
      'Content marketing services by Sdreamclouds. SEO blog writing, landing page copy, social media content, and editorial strategy.',
    features: [
      'SEO blog posts and long-form articles',
      'Landing page and website copywriting',
      'Social media content calendars',
      'Email marketing and nurture sequences',
      'Content performance tracking and optimization',
    ],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Content marketer writing SEO-optimized blog article',
  },
  {
    slug: 'web-design-dev',
    title: 'Web Design & Development',
    shortDescription:
      'Fast, mobile-first websites and landing pages built for search visibility, user experience, and high conversion rates.',
    description:
      'We design and develop performance-first websites on modern stacks like Next.js. Every page is optimized for Core Web Vitals, mobile responsiveness, accessibility, and clear conversion paths that turn visitors into customers.',
    metaDescription:
      'Web design and development by Sdreamclouds. Mobile-responsive, SEO-friendly websites optimized for speed and conversions.',
    features: [
      'UX/UI design and interactive prototyping',
      'Next.js and React development',
      'Landing page design for ad campaigns',
      'Core Web Vitals and speed optimization',
      'SEO-friendly architecture and schema markup',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Web developer building responsive marketing website on laptop',
  },
  {
    slug: 'analytics-cro',
    title: 'Analytics & CRO',
    shortDescription:
      'GA4 setup, conversion tracking, heatmaps, and A/B testing that reveal exactly where your funnel leaks revenue.',
    description:
      'Data without action is wasted. We configure Google Analytics 4, build custom Looker Studio dashboards, analyze user behavior with heatmaps, and run structured A/B tests to improve form completions, checkout rates, and lead quality.',
    metaDescription:
      'Analytics and conversion rate optimization from Sdreamclouds. GA4 setup, dashboards, heatmaps, and A/B testing for higher conversions.',
    features: [
      'Google Analytics 4 setup and event tracking',
      'Custom Looker Studio reporting dashboards',
      'Heatmap and session recording analysis',
      'A/B and multivariate landing page tests',
      'Funnel analysis and conversion optimization',
    ],
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
