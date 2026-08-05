'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { siteData } from '@/lib/data';

const { hero } = siteData;

export default function HeroSection() {
  const stageRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const orb = orbRef.current;
    const content = contentRef.current;
    if (!stage || !orb || !content) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    requestAnimationFrame(() => {
      stage.classList.add('is-ready');
    });

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollP = 0;
    let raf = 0;

    const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

    const onScroll = () => {
      const rect = stage.getBoundingClientRect();
      scrollP = clamp(-rect.top / Math.max(rect.height * 0.6, 1), 0, 1);
    };

    const onMove = (event: PointerEvent) => {
      if (!finePointer || reduceMotion) return;
      const rect = stage.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 40;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 26;
      orb.classList.add('is-magnetic');
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      orb.classList.remove('is-magnetic');
    };

    const tick = () => {
      const ease = reduceMotion ? 1 : 0.1;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      orb.style.setProperty('--orb-x', `${currentX}px`);
      orb.style.setProperty('--orb-y', `${currentY + scrollP * 30}px`);
      orb.style.setProperty('--orb-scale', `${1 - scrollP * 0.22}`);
      orb.style.opacity = String(Math.max(0.2, 1 - scrollP * 0.6));

      content.style.setProperty('--hero-rise', `${scrollP * 56}px`);
      content.style.setProperty('--hero-fade', String(Math.max(0.15, 1 - scrollP * 0.8)));

      raf = requestAnimationFrame(tick);
    };

    onScroll();
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const scrollNext = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={stageRef} className="hero-lux" aria-label="Hero">
      <div className="hero-lux__wash" aria-hidden="true" />
      <div ref={orbRef} className="hero-lux__orb" aria-hidden="true" />
      <div className="hero-lux__ring" aria-hidden="true" />

      <div ref={contentRef} className="hero-lux__content">
        <p className="hero-lux__kicker hero-lux__anim" style={{ ['--d' as string]: '0ms' }}>
          {hero.sectionLabel}
        </p>

        <h1 className="hero-lux__title">
          <span className="hero-lux__line hero-lux__anim" style={{ ['--d' as string]: '80ms' }}>
            {hero.titleMain}
          </span>
          <span
            className="hero-lux__line hero-lux__line--sub hero-lux__anim"
            style={{ ['--d' as string]: '160ms' }}
          >
            {hero.titleSub}
            <span className="landing-red-dot" aria-hidden="true" />
          </span>
        </h1>

        {hero.tagline ? (
          <p className="hero-lux__tagline hero-lux__anim" style={{ ['--d' as string]: '200ms' }}>
            {hero.tagline}
          </p>
        ) : null}

        <p className="hero-lux__desc hero-lux__anim" style={{ ['--d' as string]: '240ms' }}>
          {hero.description}
        </p>

        <div className="hero-lux__actions hero-lux__anim" style={{ ['--d' as string]: '320ms' }}>
          <Link
            href="/contact"
            className="btn-primary"
            data-magnetic="10"
            data-cursor="cta"
            data-cursor-label="Contact"
          >
            {hero.btnText}
          </Link>
        </div>
        <p className="hero-lux__proof hero-lux__anim" style={{ ['--d' as string]: '400ms' }}>
          {hero.proof}
        </p>
      </div>

      <button
        type="button"
        className="landing-scroll hero-lux__anim"
        style={{ ['--d' as string]: '480ms' }}
        aria-label="Scroll to explore"
        onClick={scrollNext}
        data-cursor="discover"
        data-cursor-label="Scroll"
      >
        <span className="landing-scroll__ring" aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <defs>
              <path id="heroScrollPath" d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0" />
            </defs>
            <text>
              <textPath href="#heroScrollPath" startOffset="0%">
                SCROLL TO EXPLORE • SCROLL TO EXPLORE •{' '}
              </textPath>
            </text>
          </svg>
        </span>
        <span className="landing-scroll__core" aria-hidden="true">
          ↓
        </span>
      </button>

      <p className="hero-lux__corner hero-lux__anim" style={{ ['--d' as string]: '520ms' }} aria-hidden="true">
        Digital Marketing
      </p>
    </section>
  );
}
