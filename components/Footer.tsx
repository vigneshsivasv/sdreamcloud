import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/lib/data';

const { footer } = siteData;

function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" className="link-footer">
        {label}
      </a>
    );
  }

  if (href.startsWith('/')) {
    return (
      <Link href={href} className="link-footer">
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className="link-footer">
      {label}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
      <div className="container-lux">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', paddingBottom: '4rem' }}>
          <div style={{ flex: '1 1 260px' }}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Join the dispatch</p>
            <h3 style={{ fontFamily: 'var(--font-display), system-ui, sans-serif', fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>
              One sharp email each month.{' '}
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#eeeeee' }}>No fluff.</em>
            </h3>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', flex: '1 1 400px' }}>
            <nav aria-label="Services navigation" style={{ flex: '1 1 120px' }}>
              <p className="footer-nav-label">Services</p>
              <ul className="footer-nav-list">
                {footer.links.services.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} label={l.label} />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Studio navigation" style={{ flex: '1 1 120px' }}>
              <p className="footer-nav-label">Studio</p>
              <ul className="footer-nav-list">
                {footer.links.studio.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} label={l.label} />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Social links" style={{ flex: '1 1 120px' }}>
              <p className="footer-nav-label">Social</p>
              <ul className="footer-nav-list">
                {footer.links.social.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} label={l.label} external />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer-wordmark">
          <Link href="/" aria-label="Dream clouds home">
            <Image
              src="/logo.png"
              alt=""
              width={300}
              height={72}
              className="footer-logo-img"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#52525b', margin: 0 }}>
            © {year} {footer.copyright}
          </p>
          <nav aria-label="Legal navigation" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {[
              { label: 'Privacy', href: footer.legal.privacy },
              { label: 'Terms', href: footer.legal.terms },
              { label: 'Cookies', href: footer.legal.cookies },
            ].map((l) => (
              <a key={l.label} href={l.href} className="link-legal">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
