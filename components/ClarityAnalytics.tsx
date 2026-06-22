'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';
import { siteConfig } from '@/lib/seo';

export default function ClarityAnalytics() {
  useEffect(() => {
    Clarity.init(siteConfig.clarityId);
  }, []);

  return null;
}
