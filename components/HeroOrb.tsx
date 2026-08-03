'use client';

import { useEffect, useRef } from 'react';

export default function HeroOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    const hero = orb?.closest('.hero-section');
    if (!orb || !(hero instanceof HTMLElement)) return;

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return;

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 40;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 28;
      orb.style.setProperty('--orb-x', `${x}px`);
      orb.style.setProperty('--orb-y', `${y}px`);
      orb.classList.add('is-magnetic');
    };

    const onLeave = () => {
      orb.classList.remove('is-magnetic');
      orb.style.setProperty('--orb-x', '0px');
      orb.style.setProperty('--orb-y', '0px');
    };

    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <div ref={orbRef} className="hero-orb" aria-hidden="true" />;
}
