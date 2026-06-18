'use client';

import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
};

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) {
    return { target: null as number | null, suffix: '', display: value };
  }
  return {
    target: parseInt(match[1], 10),
    suffix: match[2],
    display: value,
  };
}

export default function CountUp({ value, className, style, duration = 2000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const { target, suffix, display: staticDisplay } = parseStatValue(value);

  useEffect(() => {
    if (target === null || Number.isNaN(target)) {
      setDisplay(staticDisplay);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplay(`${target}${suffix}`);
      return;
    }

    let frameId = 0;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started) return;
        started = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          setDisplay(`${current}${suffix}`);
          if (progress < 1) frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [target, suffix, staticDisplay, duration]);

  return (
    <span ref={ref} className={`counter ${className ?? ''}`} style={style}>
      {display}
    </span>
  );
}
