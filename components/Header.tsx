'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      role="banner"
      className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}
    >
      <div className="container-lux site-header-inner">
        <Logo priority />

        <nav aria-label="Primary navigation" className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary btn-nav-cta">
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`hamburger-line ${menuOpen ? 'hamburger-line-top-open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'hamburger-line-mid-open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'hamburger-line-bot-open' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="mobile-nav-link"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu} className="btn-primary mobile-nav-cta">
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
