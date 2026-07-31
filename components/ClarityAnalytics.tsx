'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/seo';

export default function ClarityAnalytics() {
  useEffect(() => {
    let cancelled = false;

    async function loadClarity() {
      try {
        const Clarity = (await import('@microsoft/clarity')).default;
        if (!cancelled) {
          Clarity.init(siteConfig.clarityId);
        }
      } catch (error) {
        console.warn('[clarity] failed to load', error);
      }
    }

    loadClarity();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
