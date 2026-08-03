'use client';

import { useEffect } from 'react';

export default function MagneticHover() {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return;

    let active: HTMLElement | null = null;

    const reset = (el: HTMLElement | null) => {
      if (!el) return;
      el.classList.remove('is-magnetic');
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
    };

    const onMove = (event: PointerEvent) => {
      const el = (event.target as Element | null)?.closest?.('[data-magnetic]') as HTMLElement | null;
      if (active && active !== el) reset(active);
      active = el;
      if (!el) return;

      const strength = Number(el.dataset.magnetic || 18);
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
      el.classList.add('is-magnetic');
    };

    const onLeave = () => {
      reset(active);
      active = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      reset(active);
    };
  }, []);

  return null;
}
