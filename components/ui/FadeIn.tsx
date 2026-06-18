'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'figure';
  id?: string;
};

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  figure: motion.figure,
} as const;

export default function FadeIn({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  as = 'div',
  id,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motionTags[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
