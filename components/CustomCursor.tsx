'use client';

import { useEffect, useRef } from 'react';

type CursorMode = 'default' | 'view' | 'cta' | 'discover' | 'drag';

const MODE_LABELS: Record<Exclude<CursorMode, 'default'>, string> = {
  view: 'View',
  cta: 'Sign up',
  discover: 'Explore',
  drag: 'Drag',
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef(0);
  const target = useRef({ x: -40, y: -40 });
  const current = useRef({ x: -40, y: -40 });
  const modeRef = useRef<CursorMode>('default');

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion || !window.PointerEvent) return;

    const body = document.body;
    const dot = dotRef.current;
    if (!dot) return;

    body.classList.add('has-custom-cursor');

    const clearModes = () => {
      body.classList.remove(
        'is-cursor-view',
        'is-cursor-cta',
        'is-cursor-discover',
        'is-cursor-drag'
      );
      modeRef.current = 'default';
      if (labelRef.current) labelRef.current.textContent = '';
    };

    const setMode = (mode: CursorMode, label?: string) => {
      clearModes();
      modeRef.current = mode;
      if (mode === 'default') return;
      body.classList.add(`is-cursor-${mode}`);
      if (labelRef.current) {
        labelRef.current.textContent = label || MODE_LABELS[mode];
      }
    };

    const getLerp = () => {
      if (modeRef.current !== 'default') return 0.12;
      return 0.22;
    };

    const animate = () => {
      const lerp = getLerp();
      current.current.x += (target.current.x - current.current.x) * lerp;
      current.current.y += (target.current.y - current.current.y) * lerp;
      dot.style.setProperty('--cursor-x', `${current.current.x}px`);
      dot.style.setProperty('--cursor-y', `${current.current.y}px`);
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMove = (event: PointerEvent) => {
      body.classList.add('has-cursor');
      target.current.x = event.clientX;
      target.current.y = event.clientY;
    };

    const onDown = () => body.classList.add('is-cursor-down');
    const onUp = () => body.classList.remove('is-cursor-down');
    const onLeave = () => {
      body.classList.remove('has-cursor', 'is-cursor-down');
      clearModes();
    };

    const resolveTarget = (node: EventTarget | null) => {
      if (!(node instanceof Element)) return null;
      return node.closest<HTMLElement>('[data-cursor]');
    };

    const onOver = (event: PointerEvent) => {
      const el = resolveTarget(event.target);
      if (!el) return;
      const mode = (el.dataset.cursor || 'view') as CursorMode;
      const label = el.dataset.cursorLabel;
      if (mode === 'view' || mode === 'cta' || mode === 'discover' || mode === 'drag') {
        setMode(mode, label);
      }
    };

    const onOut = (event: PointerEvent) => {
      const el = resolveTarget(event.target);
      if (!el) return;
      const related = event.relatedTarget;
      if (related instanceof Element && related.closest('[data-cursor]') === el) return;
      clearModes();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      body.classList.remove(
        'has-custom-cursor',
        'has-cursor',
        'is-cursor-down',
        'is-cursor-view',
        'is-cursor-cta',
        'is-cursor-discover',
        'is-cursor-drag'
      );
    };
  }, []);

  return (
    <div className="cursor-dot" ref={dotRef} aria-hidden="true">
      <span className="cursor-dot-label" ref={labelRef} />
    </div>
  );
}
