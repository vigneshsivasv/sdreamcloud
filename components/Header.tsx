'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Insights', href: '#insights' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(9,9,11,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      <div className="container-lux" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Logo */}
        <Link href="/" aria-label="Sdreamclouds home" style={{ textDecoration: 'none', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em' }}>
          SDream<span style={{ color: 'var(--accent)' }}>clouds</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" style={{ display: 'none' }}>
              {link.label}
            </a>
          ))}
          {/* show on md+ */}
          <style>{`
            @media (min-width: 768px) {
              .desktop-nav-link { display: block !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <a key={link.href + '-d'} href={link.href} className="nav-link desktop-nav-link" style={{ display: 'none' }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ display: 'none', fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}>
            Get in touch
          </a>
          <style>{`
            @media (min-width: 768px) {
              .desktop-cta { display: inline-flex !important; }
            }
          `}</style>
          <a href="#contact" className="btn-primary desktop-cta" style={{ display: 'none', fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}>
            Get in touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'transform 0.2s ease', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s ease' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'transform 0.2s ease', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          style={{
            background: 'rgba(9,9,11,0.98)',
            borderTop: '1px solid var(--border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href + '-m'}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#fff', textDecoration: 'none', fontSize: '1.125rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
