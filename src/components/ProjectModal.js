'use client';

import { useState, useEffect, useCallback } from 'react';
import { assetPath } from '@/utils/asset-path';

export default function ProjectModal({ project, initialImageIndex = 0, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(initialImageIndex);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Consolidate primary image and gallery into single unified list
  const allImages = project
    ? [
        {
          src: project.image,
          label: project.title ? `${project.title} — Main Preview` : 'Primary Overview',
        },
        ...(project.gallery || []),
      ]
    : [];

  // Reset or update active index when initialImageIndex changes
  useEffect(() => {
    if (initialImageIndex >= 0 && initialImageIndex < allImages.length) {
      setActiveImageIndex(initialImageIndex);
    }
  }, [initialImageIndex, allImages.length]);

  const handlePrevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  }, [allImages.length]);

  const handleNextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  }, [allImages.length]);

  // Keyboard navigation for Escape and Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, lightboxOpen, handlePrevImage, handleNextImage]);

  if (!project || allImages.length === 0) return null;

  const currentImage = allImages[activeImageIndex] || allImages[0];
  const isMobileApp = project.type === 'Mobile' || project.category?.toLowerCase().includes('mobile');

  return (
    <>
      <div
        className="project-modal-backdrop"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
          {/* Close Modal Button */}
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Modal Header */}
          <div className="modal-header-strip">
            <div className="modal-tag-row">
              <span className="badge-pill-cyan">{project.category}</span>
              <span className={`project-status-badge ${project.statusClass || 'badge-cyan'}`}>
                <span className="status-dot"></span>
                <span>{project.badge}</span>
              </span>
            </div>
            <h2 id="modal-title" className="modal-project-title">{project.title}</h2>
            <p className="modal-subtitle">{project.clientContext || project.tagline}</p>
          </div>

          {/* Interactive Media Showcase */}
          <div className="modal-media-showcase">
            <div className="modal-media-viewer-frame">
              {/* Prev Image Arrow */}
              {allImages.length > 1 && (
                <button
                  type="button"
                  className="modal-viewer-nav-btn prev"
                  onClick={handlePrevImage}
                  aria-label="Previous screenshot"
                  title="Previous screenshot (Left arrow)"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="18" height="18">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}

              {/* Main Image Display Box */}
              <div
                className={`modal-screen-stage ${isMobileApp ? 'stage-mobile' : 'stage-desktop'}`}
                onClick={() => setLightboxOpen(true)}
                title="Click to open full-screen zoom"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxOpen(true);
                  }
                }}
              >
                {/* Desktop browser header bar for desktop projects */}
                {!isMobileApp && (
                  <div className="browser-mockup-bar">
                    <div className="browser-mockup-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="browser-mockup-url">
                      https://{project.id ? `${project.id}.neoprocesses.com` : 'neoprocesses-production.app'}
                    </span>
                  </div>
                )}

                {/* Mobile phone notch for mobile projects */}
                {isMobileApp && (
                  <div className="mobile-phone-speaker-bar">
                    <span className="phone-camera-dot"></span>
                    <span className="phone-speaker-pill"></span>
                  </div>
                )}

                <div className="modal-screen-wrapper">
                  <img
                    src={assetPath(currentImage.src)}
                    alt={currentImage.label || `${project.title} screenshot ${activeImageIndex + 1}`}
                    className={`modal-hero-active-img ${isMobileApp ? 'img-mobile-fit' : 'img-desktop-fit'}`}
                  />
                  <div className="modal-zoom-hint-overlay">
                    <span className="zoom-hint-pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      <span>Click to view full image</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Next Image Arrow */}
              {allImages.length > 1 && (
                <button
                  type="button"
                  className="modal-viewer-nav-btn next"
                  onClick={handleNextImage}
                  aria-label="Next screenshot"
                  title="Next screenshot (Right arrow)"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="18" height="18">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              )}
            </div>

            {/* Status bar below main image: caption + counter */}
            <div className="modal-image-caption-bar">
              <span className="active-img-label">
                <span className="label-index-badge">{activeImageIndex + 1} / {allImages.length}</span>
                {currentImage.label}
              </span>
              <button
                type="button"
                className="btn-open-fullscreen-link"
                onClick={() => setLightboxOpen(true)}
              >
                <span>Open Fullscreen</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </button>
            </div>

            {/* Clickable Gallery Thumbnails */}
            {allImages.length > 1 && (
              <div className="modal-interactive-thumbnails">
                {allImages.map((img, idx) => {
                  const isActive = idx === activeImageIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`modal-thumb-btn ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Switch to screenshot ${idx + 1}: ${img.label}`}
                    >
                      <div className="thumb-crop-box">
                        <img
                          src={assetPath(img.src)}
                          alt={img.label}
                          className="thumb-crop-img"
                        />
                      </div>
                      <span className="thumb-item-title">{img.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Modal Body: Challenge & Solution */}
          <div className="modal-body-grid">
            <div className="modal-text-block">
              <h3 className="modal-section-heading">Business Challenge</h3>
              <p className="modal-body-p">{project.problem || project.challenge}</p>

              <h3 className="modal-section-heading" style={{ marginTop: '20px' }}>Engineered Solution</h3>
              <p className="modal-body-p">{project.solution}</p>

              {project.verifiedFeatures && project.verifiedFeatures.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                  <h3 className="modal-section-heading">Verified Capabilities &amp; Workflows</h3>
                  <ul className="modal-features-list">
                    {project.verifiedFeatures.map((feat, i) => (
                      <li key={i} className="modal-feature-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="modal-meta-sidebar">
              <div className="meta-card">
                <span className="meta-label">Current Development Status</span>
                <span className="meta-value-highlight">{project.statusDetails || project.badge}</span>
              </div>

              <div className="meta-card">
                <span className="meta-label">Target Markets &amp; Region</span>
                <span className="meta-value">{project.market || 'Pakistan & International'}</span>
              </div>

              <div className="meta-card">
                <span className="meta-label">Technology Architecture</span>
                <div className="modal-tech-pills">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-pill-modal">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-action-box">
                <a
                  href={`https://wa.me/923265635826?text=${encodeURIComponent(
                    `Hello NeoProcesses, I was looking at your ${project.title} project and would like to discuss building something similar for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                >
                  Discuss Similar Project
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-white btn-block"
                    style={{ marginTop: '10px' }}
                  >
                    View Code Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX VIEWER */}
      {lightboxOpen && (
        <div
          className="fullscreen-lightbox-backdrop"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image preview"
        >
          {/* Top Control Bar */}
          <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-title-info">
              <span className="lightbox-index-pill">
                Screen {activeImageIndex + 1} of {allImages.length}
              </span>
              <span className="lightbox-img-name">{currentImage.label}</span>
            </div>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close fullscreen view (Esc)"
              title="Close fullscreen view (Esc)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Main Fullscreen Stage */}
          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            {allImages.length > 1 && (
              <button
                type="button"
                className="lightbox-nav-arrow left"
                onClick={handlePrevImage}
                aria-label="Previous screenshot (Left arrow)"
                title="Previous screenshot (Left arrow)"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="24" height="24">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}

            <div className="lightbox-image-container">
              <img
                src={assetPath(currentImage.src)}
                alt={currentImage.label}
                className="lightbox-full-img"
              />
            </div>

            {allImages.length > 1 && (
              <button
                type="button"
                className="lightbox-nav-arrow right"
                onClick={handleNextImage}
                aria-label="Next screenshot (Right arrow)"
                title="Next screenshot (Right arrow)"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="24" height="24">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Strip in Lightbox */}
          {allImages.length > 1 && (
            <div className="lightbox-bottom-strip" onClick={(e) => e.stopPropagation()}>
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`lightbox-mini-thumb ${idx === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img src={assetPath(img.src)} alt={img.label} />
                  <span>{img.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
