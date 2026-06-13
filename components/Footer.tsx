import { siteData } from '@/lib/data';

const { footer } = siteData;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', paddingTop: '5rem' }}>
      <div className="container-lux">
        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', paddingBottom: '4rem' }}>
          {/* Tagline */}
          <div style={{ flex: '1 1 260px' }}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Join the dispatch</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>
              One sharp email each month.{' '}
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#71717a' }}>No fluff.</em>
            </h3>
          </div>

          {/* Nav cols */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', flex: '1 1 400px' }}>
            <nav aria-label="Services navigation" style={{ flex: '1 1 120px' }}>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#52525b', marginBottom: '1.25rem' }}>Services</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footer.links.services.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-footer">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Studio navigation" style={{ flex: '1 1 120px' }}>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#52525b', marginBottom: '1.25rem' }}>Studio</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footer.links.studio.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-footer">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Social links" style={{ flex: '1 1 120px' }}>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#52525b', marginBottom: '1.25rem' }}>Social</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footer.links.social.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} rel="noopener noreferrer" target="_blank" className="link-footer">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Wordmark */}
        <div style={{ borderTop: '1px solid var(--border)', overflow: 'hidden', paddingTop: '2rem' }}>
          <p
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(4rem, 10vw, 10rem)',
              letterSpacing: '-0.05em',
              lineHeight: 0.85,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.07)',
              userSelect: 'none',
              margin: 0,
            }}
          >
            SDreamclouds.
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#52525b', margin: 0 }}>
            © {year} {footer.copyright}
          </p>
          <nav aria-label="Legal navigation" style={{ display: 'flex', gap: '1.5rem' }}>
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
