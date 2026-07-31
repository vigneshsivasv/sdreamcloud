import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/seo';

type LogoProps = {
  priority?: boolean;
};

export default function Logo({ priority = false }: LogoProps) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className="site-logo-link">
      <Image
        src="/logo-white.svg"
        alt={siteConfig.name}
        width={200}
        height={90}
        priority={priority}
        style={{ width: 'auto', height: '75px', objectFit: 'contain' }}
      />
    </Link>
  );
}
