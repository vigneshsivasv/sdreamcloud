'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { siteData } from '@/lib/data';
import FadeIn from '@/components/ui/FadeIn';

const { testimonials } = siteData;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const goTo = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (testimonials.length < 2 || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const current = testimonials[index];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-pad section-bg-alt section-border-top"
    >
      <div className="container-lux">
        <FadeIn>
          <h2 id="testimonials-heading" className="section-title" style={{ marginBottom: '3rem', maxWidth: '48rem' }}>
            Words from the{' '}
            <em className="section-title-em">people we built for.</em>
          </h2>
        </FadeIn>

        <div
          role="region"
          aria-label="Testimonials slider"
          aria-live="polite"
          style={{ border: '1px solid var(--border)', padding: 'clamp(1.5rem, 5vw, 4rem)', background: 'var(--bg)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
        >
          <figure style={{ margin: 0, position: 'relative', minHeight: '200px' }}>
            <span aria-hidden="true" className="quote-decoration">&ldquo;</span>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                cite={current.role}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ margin: 0, position: 'relative', zIndex: 1 }}
              >
                <p className="testimonial-quote">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="testimonial-author">
                  <span aria-hidden="true" className="testimonial-avatar">
                    {current.author.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <cite className="testimonial-name">{current.author}</cite>
                    <span className="testimonial-role">{current.role}</span>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </figure>

          <div className="testimonial-controls testimonial-controls-end">
            <div className="testimonial-buttons">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous testimonial"
                className="testimonial-btn"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next testimonial"
                className="testimonial-btn"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
