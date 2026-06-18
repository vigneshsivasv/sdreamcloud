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
      'Technical SEO, content architecture, and authority building that compound over time.',
    description:
      'We engineer sustainable rankings through technical foundations, content architecture, and authority building — not quick wins. Our SEO approach aligns search intent with your business goals, creating compounding organic traffic that drives revenue.',
    metaDescription:
      'Expert SEO and organic growth services from Sdreamclouds. Technical SEO, content strategy, and authority building for sustainable rankings.',
    features: [
      'Technical SEO audits and site architecture',
      'Keyword research and content mapping',
      'On-page and schema optimization',
      'Link building and digital PR',
      'Monthly performance reporting',
    ],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=600&fit=crop&q=80',
    imageAlt: 'SEO analytics dashboard showing organic traffic growth',
  },
  {
    slug: 'paid-media',
    title: 'Paid Media',
    shortDescription:
      'Google, Meta, LinkedIn — full-funnel campaigns that convert at scale without burning budget.',
    description:
      'We build and optimize full-funnel paid media campaigns across Google, Meta, and LinkedIn. Every dollar is tracked, tested, and optimized toward ROAS — with transparent reporting and creative that converts.',
    metaDescription:
      'Paid media management for Google, Meta, and LinkedIn. Full-funnel campaigns optimized for ROAS by Sdreamclouds.',
    features: [
      'Campaign strategy and account structure',
      'Audience targeting and segmentation',
      'Creative testing and ad copy',
      'Conversion tracking and attribution',
      'Budget optimization and scaling',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Paid media campaign performance metrics on screen',
  },
  {
    slug: 'brand-strategy',
    title: 'Brand Strategy',
    shortDescription:
      'Positioning, messaging, and identity systems that give your brand a clear place in the market.',
    description:
      'Positioning is not your tagline — it is the specific place you own in your customer\'s mind. We help ambitious brands define their voice, visual identity, and market position with clarity and conviction.',
    metaDescription:
      'Brand strategy services including positioning, messaging, and visual identity from Sdreamclouds digital agency.',
    features: [
      'Market and competitor analysis',
      'Brand positioning framework',
      'Messaging architecture',
      'Visual identity direction',
      'Brand guidelines documentation',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Brand strategy workshop with team reviewing creative concepts',
  },
  {
    slug: 'content-creation',
    title: 'Content Creation',
    shortDescription:
      'Editorial, video scripts, and social content engineered to educate, engage, and convert.',
    description:
      'We create long-form editorial, video scripts, and social content engineered to educate, engage, and convert your ideal audience. Every piece is built around search intent, brand voice, and measurable outcomes.',
    metaDescription:
      'Content creation services — editorial, video, and social content that drives engagement and conversions.',
    features: [
      'Content strategy and editorial calendars',
      'Blog posts and long-form articles',
      'Video scripts and storyboards',
      'Social media content systems',
      'SEO-optimized copywriting',
    ],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Content creator writing marketing copy in a modern workspace',
  },
  {
    slug: 'web-design-dev',
    title: 'Web Design & Dev',
    shortDescription:
      'Performance-first websites and landing pages designed to convert. Every pixel earns its place.',
    description:
      'We design and build performance-first websites and landing pages that convert. Fast load times, accessible markup, and conversion-focused layouts — built on modern stacks with SEO baked in from day one.',
    metaDescription:
      'Web design and development services. Performance-first, conversion-optimized websites by Sdreamclouds.',
    features: [
      'UX/UI design and prototyping',
      'Responsive Next.js development',
      'Landing page optimization',
      'Core Web Vitals optimization',
      'CMS integration and handoff',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Web developer coding a responsive marketing website',
  },
  {
    slug: 'analytics-cro',
    title: 'Analytics & CRO',
    shortDescription:
      'GA4 setups, custom dashboards, heatmap analysis, and A/B testing that turn data into revenue.',
    description:
      'We set up GA4, build custom dashboards, run heatmap analysis, and execute A/B tests that turn data into revenue. No vanity metrics — just clear insights and continuous optimization loops.',
    metaDescription:
      'Analytics and conversion rate optimization services. GA4, dashboards, A/B testing, and CRO by Sdreamclouds.',
    features: [
      'GA4 setup and event tracking',
      'Custom Looker Studio dashboards',
      'Heatmap and session recording analysis',
      'A/B and multivariate testing',
      'Conversion funnel optimization',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Analytics dashboard displaying conversion rate optimization data',
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
