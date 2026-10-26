'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { assetPath } from '@/utils/asset-path';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <Link href="/" className="header-logo" aria-label="NeoProcesses Home">
          <div className="brand-lockup">
            <img
              src={assetPath('/images/neoprocesses_symbol.svg')}
              alt="NeoProcesses Symbol"
              width="36"
              height="36"
              className="logo-symbol-img"
            />
            <div className="brand-text-wrapper">
              <span className="brand-name">Neo<span className="brand-highlight">Processes</span></span>
              <span className="brand-tagline">Custom Software</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="active-dot"></span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Action: Get a Quote */}
        <div className="header-actions">
          <Link
            href="/contact"
            className="btn btn-primary btn-header"
          >
            <span>Get a Quote</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Navigation</span>
            <span className="badge-pill-cyan" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>NeoProcesses</span>
          </div>
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="active-dot"></span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mobile-drawer-cta">
            <Link
              href="/contact"
              className="btn btn-primary btn-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote &amp; Discuss
            </Link>
            <a
              href="https://wa.me/923265635826"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-block"
            >
              Chat on WhatsApp (+92 326 5635826)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
