'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

type StaggerChildrenProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'ul' | 'div' | 'ol';
};

const motionTags = {
  ul: motion.ul,
  div: motion.div,
  ol: motion.ol,
} as const;

export default function StaggerChildren({
  children,
  className,
  as = 'div',
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motionTags[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      {children}
    </Component>
  );
}
