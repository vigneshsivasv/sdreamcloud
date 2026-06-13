# Sdreamclouds – Next.js Digital Agency Site

A production-ready Next.js 14 site converted from the WordPress theme, with full SEO, semantic HTML5, and structured data.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS custom properties** (no Tailwind dependency)
- **Google Fonts** – Outfit (display) + Manrope (body)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx        # Root layout – global SEO metadata, fonts
  page.tsx          # Home page – imports all sections + JSON-LD
  globals.css       # Design tokens + utility classes

components/
  Header.tsx        # Sticky nav with mobile hamburger
  HeroSection.tsx   # Hero + marquee ticker
  AboutSection.tsx  # About + stats grid
  ServicesSection.tsx
  StatsSection.tsx
  ProcessSection.tsx
  PortfolioSection.tsx
  TestimonialsSection.tsx  # Auto-rotating slider (client)
  InsightsSection.tsx      # Blog posts grid
  ContactSection.tsx       # Contact form (client)
  Footer.tsx
  ScrollObserver.tsx       # IntersectionObserver for fade-in animations

lib/
  data.ts           # All site content – edit this to customise copy
```

## SEO Features

- `<title>` + `<meta description>` via Next.js `Metadata` API
- Open Graph & Twitter Card tags
- `application/ld+json` structured data (`MarketingAgency` schema)
- `<link rel="canonical">` 
- Semantic HTML5 elements: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<address>`, `<figure>`, `<blockquote>`, `<time>`, `<dl>/<dt>/<dd>`, `<ol>/<ul>/<li>`
- `aria-label`, `aria-labelledby`, `aria-expanded`, `role` attributes
- `alt` text on all images
- `<time datetime>` on blog dates
- Next.js `Image` with `lazy` loading + `sizes`

## Customisation

All copy, links, and content live in `lib/data.ts`. Edit that file to update the site without touching component code.

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
