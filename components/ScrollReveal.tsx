'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer: IntersectionObserver | null = null;

    const scan = () => {
      const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)'));

      if (reduceMotion) {
        items.forEach((el) => el.classList.add('is-revealed'));
        return;
      }

      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-revealed');
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );

      items.forEach((el, index) => {
        el.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 55}ms`);
        observer?.observe(el);
      });
    };

    const frame = requestAnimationFrame(scan);
    const timer = window.setTimeout(scan, 120);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
