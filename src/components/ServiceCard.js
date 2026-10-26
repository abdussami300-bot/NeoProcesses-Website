import Link from 'next/link';

export default function ServiceCard({ service }) {
  const { id, index, title, tagline, problemAddressed, deliverables, technologies, iconType, badge } = service;

  const renderIcon = () => {
    switch (iconType) {
      case 'web':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
            <path d="M7 8h2m2 0h6"/>
          </svg>
        );
      case 'mobile':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
            <path d="M9 6h6"/>
          </svg>
        );
      case 'custom':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
            <line x1="14" y1="4" x2="10" y2="20"/>
          </svg>
        );
      case 'pos':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9"/>
            <circle cx="14" cy="14" r="1.5"/>
          </svg>
        );
      case 'management':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        );
      case 'ecommerce':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        );
      case 'branding':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
            <circle cx="12" cy="12" r="10"/>
            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/>
          </svg>
        );
    }
  };

  return (
    <div className="expertise-card" id={id}>
      <div className="expertise-card-top-content">
        <div className="expertise-card-header">
          <div className="expertise-icon-box">
            {renderIcon()}
          </div>
          <div className="expertise-header-meta">
            {badge && <span className="expertise-badge-pill">{badge}</span>}
            <span className="expertise-index">0{index}</span>
          </div>
        </div>

        <h3 className="expertise-title">{title}</h3>
        <p className="expertise-tagline">{tagline}</p>

        {problemAddressed && (
          <div className="expertise-problem-statement">
            <span className="problem-label">Operational Bottleneck:</span>
            <p>{problemAddressed}</p>
          </div>
        )}

        {deliverables && (
          <ul className="expertise-capabilities-list">
            {deliverables.map((item, idx) => (
              <li key={idx} className="expertise-capability-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15" className="check-icon">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies && technologies.length > 0 && (
          <div className="expertise-tech-row">
            {technologies.map((t) => (
              <span key={t} className="tech-tag-sm">{t}</span>
            ))}
          </div>
        )}
      </div>

      <div className="expertise-action-row">
        <Link
          href={`/contact?service=${encodeURIComponent(title)}`}
          className="expertise-learn-btn"
        >
          <span>Request Quote &amp; Discuss</span>
          <span className="arrow-icon">→</span>
        </Link>
      </div>
    </div>
  );
}
