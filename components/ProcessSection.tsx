'use client';

import { useEffect, useRef } from 'react';
import { siteData } from '@/lib/data';

const { process } = siteData;

export default function ProcessSection() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>('.process-timeline__item'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      items.forEach((item) => item.classList.add('is-active'));
      return;
    }

    const onScroll = () => {
      const mid = window.innerHeight * 0.55;
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const active = rect.top < mid && rect.bottom > mid * 0.35;
        item.classList.toggle('is-active', active);
        const distance = Math.abs(rect.top + rect.height / 2 - mid);
        const intensity = Math.max(0, 1 - distance / (window.innerHeight * 0.7));
        item.style.setProperty('--step-glow', String(intensity));
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="process" className="section-pad process-timeline" aria-labelledby="process-heading">
      <div className="container-lux process-timeline__layout">
        <div className="process-timeline__intro" data-reveal>
          <p className="eyebrow">{process.sectionLabel}</p>
          <h2 id="process-heading" className="section-title process-timeline__title">
            {process.titleMain}
            <br />
            <em className="section-title-em">{process.titleSub}</em>
          </h2>
          <p className="process-timeline__note">
            Three clear stages. One accountable growth partner.
          </p>
        </div>

        <ol ref={listRef} className="process-timeline__list">
          {process.steps.map((step, index) => (
            <li
              key={step.title}
              className="process-timeline__item"
              data-magnetic="8"
              data-cursor="discover"
              data-cursor-label={step.title}
            >
              <div className="process-timeline__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="process-timeline__body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
