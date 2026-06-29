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
  image: string;
  imageAlt: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'seo-organic-growth',
    title: 'SEO & Organic Growth',
    focusKeyword: 'SEO services in india',
    seoTitle: 'SEO Services In India | Organic Growth Agency | Sdreamclouds',
    shortDescription:
      'Technical SEO, keyword strategy, and content marketing that help you rank higher on Google and attract qualified organic traffic.',
    description:
      'Sdreamclouds delivers end-to-end search engine optimization — from site audits and schema markup to content clusters and digital PR. We focus on keywords with commercial intent so every ranking drives real revenue, not empty traffic.',
    metaDescription:
      'Professional SEO services in India from Sdreamclouds. Technical audits, keyword research, content strategy, and link building for sustainable Google rankings.',
    keywords: [
      'SEO services in india',
      'search engine optimization india',
      'organic growth agency',
      'technical SEO audit',
      'keyword research services',
      'content marketing SEO',
      'local SEO services india',
      'Sdreamclouds SEO',
    ],
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
    focusKeyword: 'facebook ads agency in india',
    seoTitle: 'Facebook Ads Agency In India | Meta Ads Lead Generation | Sdreamclouds',
    shortDescription:
      'Google Ads, Facebook advertising, and LinkedIn campaigns optimized for conversions, ROAS, and scalable lead generation.',
    description:
      'Our paid media team builds full-funnel campaigns across Google Search, Display, Facebook, Instagram, and LinkedIn. Every ad dollar is tracked, tested, and optimized toward your cost-per-acquisition and return on ad spend targets.',
    metaDescription:
      'Sdreamclouds is the Best ROI-based Facebook Ads Agency In India. Boost your Meta Ads lead flow within just 30 days with proven Google Ads lead generation strategies.',
    keywords: [
      'facebook ads agency in india',
      'meta ads lead generation',
      'google ads lead generation services in india',
      'Google Ads agency india',
      'PPC management india',
      'paid media agency',
      'Facebook advertising services',
      'lead generation ads india',
      'Sdreamclouds paid media',
    ],
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
    focusKeyword: 'brand strategy agency india',
    seoTitle: 'Brand Strategy Agency In India | Positioning & Messaging | Sdreamclouds',
    shortDescription:
      'Market positioning, brand messaging, and identity systems that differentiate your business and build lasting customer trust.',
    description:
      'We help you define where your brand sits in the market, what it stands for, and how it speaks to customers. From competitive analysis to messaging frameworks and visual direction, every element reinforces a clear, memorable identity.',
    metaDescription:
      'Brand strategy and positioning services in India from Sdreamclouds. Messaging frameworks, visual identity direction, and market differentiation for growing brands.',
    keywords: [
      'brand strategy agency india',
      'brand positioning services',
      'brand messaging framework',
      'visual identity agency',
      'go to market strategy',
      'Sdreamclouds brand strategy',
    ],
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
    focusKeyword: 'content marketing agency india',
    seoTitle: 'Content Marketing Agency In India | SEO Content | Sdreamclouds',
    shortDescription:
      'SEO-driven blogs, landing page copy, and social content that educates your audience and accelerates the buying journey.',
    description:
      'Content is the engine behind organic search and social engagement. We produce keyword-targeted articles, conversion-focused landing pages, email sequences, and social posts aligned with your brand voice and sales funnel.',
    metaDescription:
      'Content marketing services in India by Sdreamclouds. SEO blog writing, landing page copy, social media content, and editorial strategy that drives leads.',
    keywords: [
      'content marketing agency india',
      'SEO content writing',
      'blog writing services',
      'landing page copywriting',
      'social media content agency',
      'Sdreamclouds content marketing',
    ],
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
    focusKeyword: 'website development agency india',
    seoTitle: 'Website Development Agency In India | Web Design | Sdreamclouds',
    shortDescription:
      'Fast, mobile-first websites and landing pages built for search visibility, user experience, and high conversion rates.',
    description:
      'We design and develop performance-first websites on modern stacks like Next.js. Every page is optimized for Core Web Vitals, mobile responsiveness, accessibility, and clear conversion paths that turn visitors into customers.',
    metaDescription:
      'Web design and development agency in India by Sdreamclouds. Mobile-responsive, SEO-friendly websites optimized for PageSpeed, Core Web Vitals, and conversions.',
    keywords: [
      'website development agency india',
      'web design agency india',
      'landing page design',
      'PageSpeed optimization',
      'Core Web Vitals optimization',
      'Next.js development india',
      'Sdreamclouds web design',
    ],
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
    focusKeyword: 'conversion rate optimization india',
    seoTitle: 'Conversion Rate Optimization In India | Analytics & CRO | Sdreamclouds',
    shortDescription:
      'GA4 setup, conversion tracking, heatmaps, and A/B testing that reveal exactly where your funnel leaks revenue.',
    description:
      'Data without action is wasted. We configure Google Analytics 4, build custom Looker Studio dashboards, analyze user behavior with heatmaps, and run structured A/B tests to improve form completions, checkout rates, and lead quality.',
    metaDescription:
      'Analytics and conversion rate optimization in India from Sdreamclouds. GA4 setup, dashboards, heatmaps, and A/B testing for higher conversions and lower CPA.',
    keywords: [
      'conversion rate optimization india',
      'CRO agency india',
      'Google Analytics 4 setup',
      'A/B testing services',
      'marketing analytics dashboard',
      'Sdreamclouds CRO',
    ],
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
