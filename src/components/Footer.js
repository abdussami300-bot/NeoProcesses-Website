import Link from 'next/link';
import { assetPath } from '@/utils/asset-path';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <Link href="/" className="footer-logo" aria-label="NeoProcesses Home">
            <img
              src={assetPath('/images/logo-dark.svg')}
              alt="NeoProcesses"
              width="220"
              height="44"
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-bio">
            Practical digital solutions for businesses that want to work smarter,
            serve customers better, and grow with confidence.
          </p>
          <div className="footer-status-pill">
            <span className="pulse-dot"></span>
            <span>Available for remote projects & collaborations</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><Link href="/services#websites">Website Development</Link></li>
            <li><Link href="/services#mobile">Mobile Applications</Link></li>
            <li><Link href="/services#systems">Business Systems (POS/ERP)</Link></li>
            <li><Link href="/services#custom">Custom Software</Link></li>
            <li><Link href="/services#digital">Digital Business Workflows</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Get in Touch</h4>
          <p className="contact-text">
            Ready to discuss your project requirements? Reach out directly:
          </p>
          <ul className="contact-list">
            <li>
              <a
                href="https://wa.me/923410118690"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.87 13.22 14.89 12.97 14.77C12.72 14.64 11.92 14.38 10.97 13.54C10.23 12.88 9.73 12.07 9.59 11.82C9.44 11.57 9.57 11.44 9.7 11.31C9.81 11.2 9.95 11.02 10.07 10.88C10.2 10.74 10.36 10.16 10.3 10.04C10.24 9.91 9.75 8.71 9.54 8.21C9.34 7.73 9.14 7.79 8.98 7.78C8.83 7.78 8.66 7.77 8.5 7.77C8.33 7.77 8.06 7.83 7.83 8.08C7.6 8.33 6.96 8.93 6.96 10.15C6.96 11.37 7.85 12.54 7.97 12.71C8.1 12.87 9.72 15.38 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.2 17.15 14.74 17.13 15.17 17.06C15.65 16.99 16.65 16.45 16.86 15.86C17.07 15.28 17.07 14.78 17.01 14.68C16.94 14.58 16.81 14.51 16.56 14.39Z"/>
                </svg>
                <span>WhatsApp: +92 341 0118690</span>
              </a>
            </li>
            <li>
              <a href="mailto:abdussami039@gmail.com" className="contact-link">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>abdussami039@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© {currentYear} NeoProcesses. All rights reserved.</p>
          <p className="bottom-tagline">Your Business. Our Solution.</p>
        </div>
      </div>
    </footer>
  );
}
