import Link from 'next/link';
import { assetPath } from '@/utils/asset-path';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand-link" aria-label="NeoProcesses Home">
              <div className="brand-lockup">
                <img
                  src={assetPath('/images/neoprocesses_symbol.svg')}
                  alt="NeoProcesses Logo"
                  width="36"
                  height="36"
                  className="footer-logo-img"
                />
                <div className="brand-text-wrapper">
                  <span className="brand-name">Neo<span className="brand-highlight">Processes</span></span>
                  <span className="brand-tagline">Software &amp; Digital Solutions</span>
                </div>
              </div>
            </Link>
            <p className="footer-bio">
              Custom software engineered around your business. We build responsive corporate websites,
              POS billing systems, business management software, and cross-platform mobile apps that eliminate operational bottlenecks.
            </p>
            <div className="footer-status-tag">
              <span className="pulse-orb" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--emerald-accent)', display: 'inline-block' }}></span>
              <span>Headquartered in Islamabad, Pakistan • Serving PK, KSA &amp; Global Markets</span>
            </div>

            {/* Social Icons */}
            <div className="footer-social-row">
              <a
                href="https://wa.me/923265635826"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NeoProcesses WhatsApp (+92 326 5635826)"
                title="Chat with NeoProcesses on WhatsApp"
                className="social-circle-link social-link-wa"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.87 13.22 14.89 12.97 14.77C12.72 14.64 11.92 14.38 10.97 13.54C10.23 12.88 9.73 12.07 9.59 11.82C9.44 11.57 9.57 11.44 9.7 11.31C9.81 11.2 9.95 11.02 10.07 10.88C10.2 10.74 10.36 10.16 10.3 10.04C10.24 9.91 9.75 8.71 9.54 8.21C9.34 7.73 9.14 7.79 8.98 7.78C8.83 7.78 8.66 7.77 8.5 7.77C8.33 7.77 8.06 7.83 7.83 8.08C7.6 8.33 6.96 8.93 6.96 10.15C6.96 11.37 7.85 12.54 7.97 12.71C8.1 12.87 9.72 15.38 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.2 17.15 14.74 17.13 15.17 17.06C15.65 16.99 16.65 16.45 16.86 15.86C17.07 15.28 17.07 14.78 17.01 14.68C16.94 14.58 16.81 14.51 16.56 14.39Z"/>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61595881740682"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NeoProcesses Official Facebook Page"
                title="Follow NeoProcesses on Facebook"
                className="social-circle-link social-link-fb"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/neoprocesses/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NeoProcesses Official Instagram Profile"
                title="Follow @neoprocesses on Instagram"
                className="social-circle-link social-link-ig"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://github.com/abdussami300-bot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NeoProcesses GitHub Repositories"
                title="View NeoProcesses on GitHub"
                className="social-circle-link social-link-gh"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services &amp; Capabilities</Link></li>
              <li><Link href="/portfolio">Our Work / Portfolio</Link></li>
              <li><Link href="/contact">Get a Quote</Link></li>
              <li><a href={assetPath('/NeoProcesses_Company_Profile_FINAL.pdf')} target="_blank" rel="noopener noreferrer">Download Profile (PDF)</a></li>
            </ul>
          </div>

          {/* 6 Core Services */}
          <div>
            <h4 className="footer-heading">Core Capabilities</h4>
            <ul className="footer-links-list">
              <li><Link href="/services#web-development">Website Design &amp; Development</Link></li>
              <li><Link href="/services#mobile-development">Mobile Application Development</Link></li>
              <li><Link href="/services#custom-software">Custom Software Development</Link></li>
              <li><Link href="/services#pos-billing">POS &amp; Billing Systems</Link></li>
              <li><Link href="/services#management-systems">Business Management Systems</Link></li>
              <li><Link href="/services#ecommerce">E-commerce Solutions</Link></li>
              <li><Link href="/services#branding">Graphic Design &amp; Branding</Link></li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div>
            <h4 className="footer-heading">Official Contact</h4>
            <ul className="footer-contact-items">
              <li>
                <a
                  href="https://wa.me/923265635826"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" style={{ color: '#25D366' }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.87 13.22 14.89 12.97 14.77C12.72 14.64 11.92 14.38 10.97 13.54C10.23 12.88 9.73 12.07 9.59 11.82C9.44 11.57 9.57 11.44 9.7 11.31C9.81 11.2 9.95 11.02 10.07 10.88C10.2 10.74 10.36 10.16 10.3 10.04C10.24 9.91 9.75 8.71 9.54 8.21C9.34 7.73 9.14 7.79 8.98 7.78C8.83 7.78 8.66 7.77 8.5 7.77C8.33 7.77 8.06 7.83 7.83 8.08C7.6 8.33 6.96 8.93 6.96 10.15C6.96 11.37 7.85 12.54 7.97 12.71C8.1 12.87 9.72 15.38 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.2 17.15 14.74 17.13 15.17 17.06C15.65 16.99 16.65 16.45 16.86 15.86C17.07 15.28 17.07 14.78 17.01 14.68C16.94 14.58 16.81 14.51 16.56 14.39Z"/>
                  </svg>
                  <span>WhatsApp: +92 326 5635826</span>
                </a>
              </li>
              <li>
                <a href="mailto:abdusami300@gmail.com">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17" style={{ color: 'var(--cyan-primary)' }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>abdusami300@gmail.com</span>
                </a>
              </li>
              <li>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17" style={{ color: 'var(--blue-vibrant)', flexShrink: 0 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Islamabad, Pakistan</span>
                </div>
              </li>
              <li>
                <a href="https://neoprocesses-website.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>neoprocesses-website.vercel.app</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61595881740682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-text-link"
                  aria-label="NeoProcesses Official Facebook Page"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" style={{ color: '#1877F2', flexShrink: 0 }}>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span>Facebook: NeoProcesses</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/neoprocesses/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-text-link"
                  aria-label="NeoProcesses Official Instagram Profile"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" style={{ color: '#E1306C', flexShrink: 0 }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram: @neoprocesses</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {currentYear} NeoProcesses. All rights reserved.
          </div>
          <div className="footer-tagline-text">
            Custom Software. Built Around Your Business.
          </div>
        </div>
      </div>
    </footer>
  );
}
