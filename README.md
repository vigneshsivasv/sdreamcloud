# Sdreamclouds – Next.js Digital Agency Site

A production-ready Next.js 14 site with full SEO, semantic HTML5, structured data, and Framer Motion animations.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Framer Motion** – scroll reveal and section animations
- **next/font** – Outfit (display) + Manrope (body)
- **CSS custom properties** (no Tailwind dependency)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx           # Root layout – global SEO metadata, fonts
  page.tsx             # Home page – sections + JSON-LD
  globals.css          # Design tokens + utility classes
  opengraph-image.tsx  # Dynamic OG image generation
  icon.tsx             # Dynamic favicon
  robots.ts            # robots.txt
  sitemap.ts           # sitemap.xml

components/
  Header.tsx           # Sticky nav with mobile hamburger
  HeroSection.tsx      # Hero + marquee ticker
  AboutSection.tsx
  ServicesSection.tsx
  StatsSection.tsx
  ProcessSection.tsx
  PortfolioSection.tsx
  TestimonialsSection.tsx  # Auto-rotating slider (client)
  FaqSection.tsx           # FAQ accordion with schema
  ContactSection.tsx       # Contact form (client)
  Footer.tsx
  JsonLd.tsx               # Structured data helper
  ui/FadeIn.tsx            # Reusable scroll animation
  ui/StaggerChildren.tsx   # Stagger animation wrapper

lib/
  data.ts              # All site content
  seo.ts               # Metadata + JSON-LD schema builders
  animations.ts        # Framer Motion variants
```

## SEO Features

- Next.js Metadata API with Open Graph, Twitter Cards, canonical URLs, hreflang
- JSON-LD: Organization, WebSite, MarketingAgency, BreadcrumbList, FAQPage
- Dynamic OG image and favicon via file-based metadata
- Semantic HTML5 with proper heading hierarchy (single H1)
- ARIA labels, skip link, keyboard navigation, focus states
- `next/image` with lazy loading and responsive `sizes`

## Customisation

All copy, links, and content live in `lib/data.ts`. SEO config lives in `lib/seo.ts`.

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables

No env vars required for the base site. If you add a form backend or CMS, create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://sdreamclouds.com
FORM_ENDPOINT=https://your-api.com/contact
```
