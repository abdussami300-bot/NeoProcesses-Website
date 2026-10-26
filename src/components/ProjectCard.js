'use client';

import { assetPath } from '@/utils/asset-path';

export default function ProjectCard({ project, onSelect }) {
  const {
    id,
    title,
    category,
    badge,
    summary,
    technologies,
    image,
    statusClass,
  } = project;

  return (
    <article
      className="project-showcase-card"
      id={`project-${id}`}
      onClick={() => onSelect && onSelect(project)}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(e) => {
        if (onSelect && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* Visual Window */}
      <div className="project-media-frame">
        <img
          src={assetPath(image)}
          alt={`${title} project preview`}
          className="project-img-preview"
          loading="lazy"
        />
        <div className="project-pill-overlay">
          <span className="project-category-badge">{category}</span>
          {badge && (
            <span className={`project-status-badge ${statusClass || 'badge-cyan'}`}>
              <span className="status-dot"></span>
              <span>{badge}</span>
            </span>
          )}
        </div>
        <div className="project-hover-overlay">
          <span className="project-view-btn">
            <span>View Architecture &amp; Screens</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>

      {/* Content Block */}
      <div className="project-content-block">
        <div className="project-title-row">
          <h3 className="project-title">{title}</h3>
          <span className="project-card-arrow">↗</span>
        </div>
        <p className="project-summary-text">{summary}</p>

        {/* Tech Stack Tags */}
        <div className="project-tech-tags">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
