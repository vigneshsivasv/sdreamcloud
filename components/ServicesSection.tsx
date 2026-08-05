'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import { getServiceHref } from '@/lib/services';

const { services } = siteData;

const WHEEL_A = ['SEO Services', 'Google Ads', 'Social Media', 'Content'];
const WHEEL_B = ['Web Design', 'Brand Strategy', 'Analytics', 'CRO'];

type DetailItem = {
  id: string;
  title: string;
  num: string;
  copy: string;
  links?: { label: string; href: string }[];
  points?: string[];
};

const DETAIL_ITEMS: DetailItem[] = [
  {
    id: 'focus',
    title: 'Focus',
    num: '/5+',
    copy: 'Years building SEO, paid media, and conversion systems for growth-focused brands.',
    points: [
      'Boutique attention on every account',
      'Clear channel priorities — not vanity metrics',
      'Strategist-led delivery from audit to scale',
    ],
  },
  {
    id: 'services',
    title: 'Services',
    num: `/${services.services.length}`,
    copy: services.description,
    links: services.services.map((s) => ({
      label: s.title,
      href: getServiceHref(s.slug),
    })),
  },
  {
    id: 'speed',
    title: 'Speed',
    num: '/48hr',
    copy: 'Audit to roadmap fast — clear priorities, channel plan, and next steps without fluff.',
    points: [
      'Growth audit within 48 hours',
      'Campaigns live in days, not months',
      'Weekly optimization loops after launch',
    ],
  },
];

function ServiceTile({
  words,
  variant,
}: {
  words: string[];
  variant: 'light' | 'dark';
}) {
  const [top, right, bottom, left] = words;

  return (
    <div
      className={`svc-tile ${variant === 'dark' ? 'svc-tile--dark' : ''}`}
      data-cursor="discover"
      data-cursor-label="Services"
    >
      <div className="svc-tile__frame" aria-hidden="true" />
      <span className="svc-tile__edge svc-tile__edge--top">{top}</span>
      <span className="svc-tile__edge svc-tile__edge--right">{right}</span>
      <span className="svc-tile__edge svc-tile__edge--bottom">{bottom}</span>
      <span className="svc-tile__edge svc-tile__edge--left">{left}</span>

      <div className="svc-tile__core" aria-hidden="true">
        {variant === 'light' ? (
          <svg className="svc-tile__icon" viewBox="0 0 64 64" fill="none">
            <path d="M10 46V34h8v12H10zm12 0V22h8v24h-8zm12 0V28h8v18h-8zm12 0V14h8v32h-8z" fill="currentColor" opacity="0.18" />
            <path d="M12 40l12-12 8 6 16-18" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="48" cy="16" r="3.5" fill="var(--accent)" />
          </svg>
        ) : (
          <svg className="svc-tile__icon" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="18" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
            <circle cx="32" cy="32" r="10" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
            <circle cx="32" cy="32" r="4" fill="var(--accent)" />
            <path d="M32 8v6M32 50v6M8 32h6M50 32h6" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sceneRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [openId, setOpenId] = useState<string>('services');

  useEffect(() => {
    const scene = sceneRef.current;
    const track = trackRef.current;
    const title = titleRef.current;
    if (!scene || !track) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let targetX = 0;
    let currentX = 0;
    let titleTargetX = 0;
    let titleCurrentX = 0;
    let raf = 0;

    const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

    const update = () => {
      const rect = scene.getBoundingClientRect();
      const scrollable = Math.max(scene.offsetHeight - window.innerHeight, 1);
      const scrolled = clamp(-rect.top, 0, scrollable);
      const progress = scrolled / scrollable;
      const travel = Math.max(track.scrollWidth - window.innerWidth * 0.92, 0);
      targetX = -travel * progress;
      titleTargetX = -Math.min(window.innerWidth * 0.38, 380) * progress;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    const animate = () => {
      const ease = reduceMotion ? 1 : 0.12;
      currentX += (targetX - currentX) * ease;
      titleCurrentX += (titleTargetX - titleCurrentX) * ease;
      if (Math.abs(targetX - currentX) < 0.05) currentX = targetX;
      if (Math.abs(titleTargetX - titleCurrentX) < 0.05) titleCurrentX = titleTargetX;
      track.style.setProperty('--track-x', `${currentX}px`);
      if (title) title.style.setProperty('--service-title-x', `${titleCurrentX}px`);
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

  const scrollToDetail = () => {
    document.getElementById('services-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? '' : id));
  };

  return (
    <>
      <section id="services" ref={sceneRef} className="svc-scene" aria-label="Services gallery">
        <div className="svc-stage">
          <p className="svc-brand">Sdreamclouds</p>
          <h2 ref={titleRef} id="services-heading" className="svc-title">
            Services
            <span className="svc-title-dot" aria-hidden="true" />
          </h2>

          <div ref={trackRef} className="svc-track">
            <ServiceTile words={WHEEL_A} variant="light" />
            <ServiceTile words={WHEEL_B} variant="dark" />
            <ServiceTile words={WHEEL_A} variant="light" />
            <ServiceTile words={WHEEL_B} variant="dark" />
          </div>

          <button
            type="button"
            className="svc-scroll-btn"
            aria-label="Scroll to service details"
            onClick={scrollToDetail}
            data-cursor="discover"
            data-cursor-label="Next"
          >
            <span className="svc-scroll-ring" aria-hidden="true">
              <svg viewBox="0 0 64 64">
                <defs>
                  <path id="svcScrollPath" d="M32,32 m-22,0 a22,22 0 1,1 44,0 a22,22 0 1,1 -44,0" />
                </defs>
                <text>
                  <textPath href="#svcScrollPath" startOffset="0%">
                    SCROLL · SCROLL ·{' '}
                  </textPath>
                </text>
              </svg>
            </span>
            <span className="svc-scroll-core" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section id="services-detail" className="svc-detail" aria-label="Services overview">
        <div className="svc-detail__left">
          {DETAIL_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `detail-panel-${item.id}`;

            return (
              <article
                key={item.id}
                className={`svc-detail__row svc-detail__row--accordion ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="svc-detail__accordion"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                  data-cursor="discover"
                  data-cursor-label={isOpen ? 'Close' : 'Open'}
                >
                  <div className="svc-detail__headline">
                    <span className="svc-detail__dot" aria-hidden="true" />
                    <h3 className="svc-detail__heading">{item.title}</h3>
                    <div className="svc-detail__num">
                      {item.num}
                      <span className="svc-detail__icon" aria-hidden="true">
                        +
                      </span>
                    </div>
                  </div>
                  <p className="svc-detail__copy">{item.copy}</p>
                </button>

                <div className="svc-detail__panel" id={panelId}>
                  <div className="svc-detail__panel-inner">
                    {item.links ? (
                      <ul className="svc-detail__list">
                        {item.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href} data-cursor="view" data-cursor-label="Learn">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {item.points ? (
                      <ul className="svc-detail__list">
                        {item.points.map((point) => (
                          <li key={point}>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="svc-detail__right">
          <div className="svc-detail__card" data-magnetic="12" data-cursor="cta" data-cursor-label="Contact">
            <p className="svc-detail__card-label">{services.sectionLabel}</p>
            <h3 className="svc-detail__card-title">
              {services.titleMain}
              <em> {services.titleSub}</em>
            </h3>
            <p className="svc-detail__card-copy">{services.description}</p>
            <Link href="/contact" className="btn-primary svc-detail__cta">
              {services.ctaText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
