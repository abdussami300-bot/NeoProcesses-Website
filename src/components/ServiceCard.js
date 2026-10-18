import Link from 'next/link';

export default function ServiceCard({ service }) {
  const { id, index, title, tagline, problemAddressed, deliverables, iconType } = service;

  const renderIcon = () => {
    switch (iconType) {
      case 'web':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
            <path d="M7 8h2m2 0h6"/>
          </svg>
        );
      case 'pos':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9"/>
            <circle cx="14" cy="14" r="1.5"/>
          </svg>
        );
      case 'custom':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
            <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z" />
            <line x1="20" y1="5" x2="20" y2="19" />
          </svg>
        );
      case 'mobile':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
            <path d="M9 6h6"/>
          </svg>
        );
    }
  };

  return (
    <div className="expertise-card" id={id}>
      <div>
        <div className="expertise-card-header">
          <div className="expertise-icon-box">
            {renderIcon()}
          </div>
          <span className="expertise-index">0{index}</span>
        </div>

        <h3 className="expertise-title">{title}</h3>
        <p className="expertise-tagline">{tagline}</p>

        {problemAddressed && (
          <div className="expertise-problem-statement">
            <p>{problemAddressed}</p>
          </div>
        )}

        {deliverables && (
          <ul className="expertise-capabilities-list">
            {deliverables.map((item, idx) => (
              <li key={idx} className="expertise-capability-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" className="check-icon">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="expertise-action-row">
        <Link
          href={`/contact?service=${encodeURIComponent(title)}`}
          className="expertise-learn-btn"
        >
          <span>Discuss This Solution</span>
          <span className="arrow-icon">→</span>
        </Link>
      </div>
    </div>
  );
}
