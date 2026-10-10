import Link from 'next/link';
import { assetPath } from '@/utils/asset-path';

export default function ProjectCard({ project }) {
  const {
    title,
    category,
    badge,
    description,
    technologies,
    image,
    github,
    liveUrl,
  } = project;

  return (
    <article className="project-card">
      {/* Project Image Window */}
      <div className="image-wrapper">
        <img
          src={assetPath(image)}
          alt={`${title} project preview`}
          className="project-image"
          loading="lazy"
        />
        <div className="badge-row">
          <span className="category-pill">{category}</span>
          {badge && <span className="status-pill">{badge}</span>}
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        {/* Tech Stack Chips */}
        <div className="tech-tags">
          {technologies.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="project-actions">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub Repository</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              <span>Live Website</span>
            </a>
          )}

          <Link href="/contact" className="action-cta">
            <span>Inquire About Similar Project →</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
