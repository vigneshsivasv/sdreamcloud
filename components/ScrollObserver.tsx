'use client';
import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.scroll-animation');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
