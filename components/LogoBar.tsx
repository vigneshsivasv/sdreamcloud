'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { siteData } from '@/lib/data';

const BRANDS = [
  { name: 'Google', src: '/brands/google.svg' },
  { name: 'Meta', src: '/brands/meta.svg' },
  { name: 'YouTube', src: '/brands/youtube.svg' },
  { name: 'LinkedIn', src: '/brands/linkedin.svg' },
  { name: 'Instagram', src: '/brands/instagram.svg' },
  { name: 'TikTok', src: '/brands/tiktok.svg' },
  { name: 'WordPress', src: '/brands/wordpress.svg' },
  { name: 'Shopify', src: '/brands/shopify.svg' },
  { name: 'WooCommerce', src: '/brands/woocommerce.svg' },
  { name: 'React', src: '/brands/react.svg' },
  { name: 'Next.js', src: '/brands/nextjs.svg' },
  { name: 'HubSpot', src: '/brands/hubspot.svg' },
  { name: 'Figma', src: '/brands/figma.svg' },
  { name: 'Vercel', src: '/brands/vercel.svg' },
] as const;

export default function LogoBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let target = 0;
    let current = 0;
    let raf = 0;

    const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

    const update = () => {
      const rect = section.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const p = clamp((view - rect.top) / (view + rect.height), 0, 1);
      const travel = Math.min(window.innerWidth * 0.18, 160);
      target = reduceMotion ? 0 : (0.5 - p) * travel * 2;
      section.style.setProperty('--logo-p', String(p));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    const animate = () => {
      const ease = reduceMotion ? 1 : 0.08;
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.05) current = target;
      track.style.setProperty('--logo-x', `${current}px`);
      raf = requestAnimationFrame(animate);
    };

    update();
    animate();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const loop = [...BRANDS, ...BRANDS];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="logo-bar"
      aria-label="Trusted channels we grow brands on"
    >
      <div className="container-lux">
        <p className="logo-bar-label" data-reveal>
          {siteData.logos.label}
        </p>
      </div>

      <div className="logo-bar__viewport">
        <div ref={trackRef} className="logo-bar__track">
          {loop.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="logo-bar__item"
              data-magnetic="8"
              data-cursor="discover"
              data-cursor-label={brand.name}
              style={{ ['--i' as string]: index % BRANDS.length }}
              title={brand.name}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={56}
                height={56}
                className="logo-bar__img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
