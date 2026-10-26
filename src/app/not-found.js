import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | NeoProcesses',
  description: 'The requested page could not be located on NeoProcesses.',
};

export default function NotFound() {
  return (
    <div className="section-padding bg-surface" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
        <div className="card-dark-elevated" style={{ padding: '48px 32px' }}>
          <span className="blue-gradient-text" style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1', display: 'block', marginBottom: '16px' }}>404</span>
          <h1 style={{ fontSize: '2.2rem', color: 'var(--text-white)', marginBottom: '12px', fontWeight: '800' }}>Page Not Located</h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '32px' }}>
            The page you are looking for does not exist, has been relocated, or the URL was entered incorrectly.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary btn-glow">
              <span>Return to Homepage</span>
              <span className="arrow-icon">→</span>
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              <span>Contact Engineering Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
