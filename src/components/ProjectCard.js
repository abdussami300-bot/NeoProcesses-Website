import { assetPath } from '@/utils/asset-path';

export default function ProjectCard({ project }) {
  const {
    id,
    title,
    category,
    badge,
    summary,
    technologies,
    image,
    isAcademic,
  } = project;

  return (
    <article className="project-showcase-card" id={`project-${id}`}>
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
            <span className={`project-type-badge ${isAcademic ? 'academic' : ''}`}>
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Content Block */}
      <div className="project-content-block">
        <h3 className="project-title">{title}</h3>
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
