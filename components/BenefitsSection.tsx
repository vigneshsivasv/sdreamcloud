'use client';

import { useEffect, useRef } from 'react';
import { siteData } from '@/lib/data';

const { benefits } = siteData;

export default function BenefitsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
      if (window.innerWidth < 900 || reduceMotion) {
        track.style.setProperty('--benefits-x', '0px');
        return;
      }
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = clamp(-rect.top / scrollable, 0, 1);
      const travel = Math.max(track.scrollWidth - window.innerWidth + 80, 0);
      target = -travel * progress;
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
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.05) current = target;
      track.style.setProperty('--benefits-x', `${current}px`);
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

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="benefits-pin"
      aria-labelledby="benefits-heading"
    >
      <div className="benefits-pin__stage">
        <div className="container-lux benefits-pin__header">
          <p className="eyebrow">{benefits.sectionLabel}</p>
          <h2 id="benefits-heading" className="section-title">
            {benefits.titleMain}
            <br />
            <em className="section-title-em">{benefits.titleSub}</em>
          </h2>
        </div>

        <div ref={trackRef} className="benefits-pin__track">
          {benefits.cards.map((card) => (
            <article
              key={card.title}
              className="benefits-pin__card"
              data-magnetic="10"
              data-cursor="discover"
              data-cursor-label={card.metric}
            >
              <p className="benefits-pin__metric">
                {card.metric}
                <span>{card.metricLabel}</span>
              </p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
