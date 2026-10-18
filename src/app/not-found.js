import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | NeoProcesses',
  description: 'The requested page could not be located on NeoProcesses.',
};

export default function NotFound() {
  return (
    <div className="section-padding bg-section-void" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <div className="card-dark-elevated">
          <span className="badge-num" style={{ fontSize: '3.5rem', display: 'block', marginBottom: '8px' }}>404</span>
          <h1 style={{ fontSize: '2rem', color: 'var(--text-white)', marginBottom: '12px', fontWeight: '800' }}>Page Not Found</h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '28px' }}>
            The page you are looking for does not exist, has been relocated, or the URL was entered incorrectly.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary">
              Return to Home
            </Link>
            <Link href="/contact" className="btn btn-secondary-dark">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
