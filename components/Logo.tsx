import Link from 'next/link';
import { siteConfig } from '@/lib/seo';
import Image from 'next/image';

type LogoProps = {
  priority?: boolean;
};

export default function Logo({ priority: _priority = false }: LogoProps) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className="site-logo-link">
      <Image src="/logo-black.svg" alt={siteConfig.name} width={200} height={80} style={{
        width: '100%',
        objectFit: 'contain',
        objectPosition: 'left',
      }} />
    </Link>
  );
}
