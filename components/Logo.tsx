import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  priority?: boolean;
};

export default function Logo({ priority = false }: LogoProps) {
  return (
    <Link href="/" aria-label="Dream clouds home" className="site-logo-link">
      <Image
        src="/logo.png"
        alt="Dream clouds"
        width={300}
        height={72}
        priority={priority}
        className="site-logo-img"
      />
    </Link>
  );
}
