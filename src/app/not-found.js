import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | NeoProcesses',
  description: 'The requested page could not be located on NeoProcesses.',
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container not-found-container">
        <div className="not-found-card card-base">
          <span className="error-code">404</span>
          <h1 className="error-title">Page Not Found</h1>
          <p className="error-desc">
            The page you are looking for does not exist, has been relocated,
            or the URL was entered incorrectly.
          </p>

          <div className="actions-row">
            <Link href="/" className="btn btn-primary">
              Return to Home
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
