import Link from 'next/link';
import { siteConfig } from '@/lib/seo';

type LogoProps = {
  priority?: boolean;
};

export default function Logo({ priority: _priority = false }: LogoProps) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className="site-logo-link">
      <span className="site-logo-mark" aria-hidden="true">
       
      </span>
      <span className="site-logo-text">
        <span className="site-logo-brand">Sdream</span>
        <span className="site-logo-accent">clouds</span>
      </span>
    </Link>
  );
}
