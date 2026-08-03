'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  if (!hash || hash === '#') return false;
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: 'start' });
  return true;
}

export default function SmoothHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth';

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a[href*="#"]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;
      if (!url.hash) return;

      event.preventDefault();
      history.pushState(null, '', `${url.pathname}${url.hash}`);
      scrollToHash(url.hash, behavior);
    };

    document.addEventListener('click', onClick);

    const runInitial = () => {
      if (window.location.hash) {
        requestAnimationFrame(() => scrollToHash(window.location.hash, behavior));
      }
    };
    const timer = window.setTimeout(runInitial, 60);

    return () => {
      document.removeEventListener('click', onClick);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
