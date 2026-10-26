'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { assetPath } from '@/utils/asset-path';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects = [
    {
      id: 'sayyarah',
      title: 'SAYYARAH — Car Rental Marketplace',
      category: 'Mobile Platform & Cloud Backend',
      badge: 'Android Closed Testing',
      statusClass: 'badge-cyan',
      type: 'Mobile',
      statusDetails: 'Android Closed Testing (Google Play Console)',
      market: 'Pakistan & Gulf Rental Markets',
      tagline: 'Peer-to-peer car rental platform featuring vehicle listings, multi-role access, and photographic vehicle inspection workflows.',
      summary:
        'A comprehensive car rental platform engineered with Flutter, Firebase, and a Next.js web console. Features vehicle discovery, customer & host role workflows, and pre-trip condition inspections.',
      challenge:
        'Car rental businesses in Pakistan and regional markets have long relied on informal verbal bookings, unverified paper slips, and unrecorded vehicle handovers. This created constant vehicle condition disputes, unmonitored security deposits, and no role accountability between car hosts, customers, and operations managers.',
      solution:
        'Architected an end-to-end peer-to-peer car rental ecosystem. Built cross-platform Flutter applications for customers and vehicle owners, connected to Google Cloud Firestore real-time streams and an administrative Next.js web management console. The system is currently in controlled closed testing on Android.',
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'Next.js', 'React'],
      image: '/projects/sayyarah_mobile.jpg',
      github: 'https://github.com/abdussami300-bot/Car-Rental-app',
      verifiedFeatures: [
        'Multi-Role Authentication: Structured permissions separating Customers, Vehicle Hosts, and Fleet Operations Admins.',
        'Photographic Condition Inspection: Mandatory pre-trip and return vehicle photo logging with cloud storage timestamps to eliminate damage disputes.',
        'Real-Time Booking Streams: Instant Firestore snapshot listeners keeping booking stages synchronized across devices.',
        'Security-Hardened Rules: Granular database security rules enforcing role-based data isolation and booking validation.',
        'Administrative Web Console: Next.js operations portal for fleet oversight, account verifications, and dispute mediation.',
      ],
      gallery: [
        { src: '/projects/sayyarah_browse.jpg', label: 'Vehicle Discovery Stream' },
        { src: '/projects/sayyarah_details.jpg', label: 'Vehicle Inspection & Booking' },
      ],
    },
    {
      id: 'rowan-al-hajri',
      title: 'Rowan Mohammed Al-Hajri Est.',
      category: 'Saudi Commercial Supplier B2B Website',
      badge: 'Client Review Pending',
      statusClass: 'badge-emerald',
      type: 'Web',
      statusDetails: 'Client Review Pending (Saudi Commercial Partner)',
      market: 'Eastern Province, Saudi Arabia',
      tagline: 'Commercial procurement website and digital product catalogue for a prominent Saudi institutional supplier.',
      summary:
        'A fast, lightweight corporate B2B website engineered for a commercial supplier in Saudi Arabia, presenting sanitation chemicals, disposable packaging, and food supply categories.',
      challenge:
        'A commercial B2B procurement and supply business operating in Saudi Arabia needed an authoritative online presence to present company credentials to institutional corporate buyers and replace cumbersome static PDF price sheets with an organized digital catalogue.',
      solution:
        'Engineered an ultra-fast, lightweight corporate B2B web application showcasing supply categories (industrial cleaning chemicals, disposable packaging, fresh produce), company registration credentials, and direct WhatsApp procurement inquiry actions with zero template bloat.',
      technologies: ['Vite', 'HTML5', 'Semantic CSS3', 'JavaScript', 'Responsive UI', 'Three.js'],
      image: '/projects/rowan_website_desktop.jpg',
      github: null,
      verifiedFeatures: [
        'B2B Commercial Product Catalogue: Structured listings for Disposables, Cleaning Chemicals, and Fresh Produce.',
        'Bilingual Commercial Presentation: Aligned with Saudi commercial expectations and verified CR credentials.',
        'Instant WhatsApp RFQ Integration: Direct procurement inquiry buttons linking institutional buyers with sales reps.',
        'Ultra-Fast Loading Performance: Built with clean semantic code and optimized assets with zero bloated dependencies.',
        'Fluid Responsive Viewports: Tested across modern iPhone, Android, and widescreen corporate desktop displays.',
      ],
      gallery: [
        { src: '/projects/rowan_website_mobile.jpg', label: 'Mobile Viewport (390px)' },
        { src: '/projects/rowan_disposables.jpg', label: 'Commercial Disposables' },
        { src: '/projects/rowan_cleaners.jpg', label: 'Industrial Cleaning Chemicals' },
        { src: '/projects/rowan_fresh_produce.jpg', label: 'Fresh Produce Supply' },
      ],
    },
    {
      id: 'jawad-aluminium',
      title: 'Jawad Aluminium & Glass Works',
      category: 'Custom Business Software & Corporate Portal',
      badge: 'Development in Progress',
      statusClass: 'badge-amber',
      type: 'Custom Systems',
      statusDetails: 'Development in Progress (Contract Agreed)',
      market: 'Pakistan Regional Commercial Sector',
      tagline: 'Tailored workshop operations software, quotation estimation engine, and corporate web portal.',
      summary:
        'A tailored business operations system and corporate showcase for an architectural aluminium and glass fabrication workshop, handling estimates, order stages, and billing.',
      challenge:
        'Fabrication workshops face complex custom material dimension measurements, fluctuating raw metal prices, manual paper quotation calculations, and unorganized customer order queues.',
      solution:
        'Developing a dedicated business operations solution combining a corporate portfolio website with an internal order estimation calculator, customer billing registers, and stage-by-stage workshop fabrication tracking.',
      technologies: ['Next.js', 'React', 'Tailored Estimation Logic', 'POS / Billing', 'Cloud DB'],
      image: '/projects/jawad_website_desktop.png',
      github: null,
      verifiedFeatures: [
        'Architectural Fabrication Portfolio: Showcase commercial aluminium windows, doors, shopfronts & curtain walls.',
        'Custom Dimensional Estimation Logic: Accurate automated price calculation for custom glass and aluminium profiles.',
        'Customer Order Register: Stage-by-stage order tracker from material cutting and assembly to site installation.',
        'Counter Billing & Receipts: Fast checkout terminal generating printable customer invoices and balance receipts.',
      ],
      gallery: [
        { src: '/projects/jawad_website_desktop.png', label: 'Corporate Showcase Portal' },
        { src: '/projects/jawad_logo.jpg', label: 'Client Brand Identity' },
      ],
    },
  ];

  const filters = ['All', 'Mobile', 'Web', 'Custom Systems'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="portfolio-page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="page-header-pill">
            <span className="pulse-orb"></span>
            <span>Authentic Work &amp; Verified Systems</span>
          </div>
          <h1 className="page-title">
            Genuine Projects Built With <br />
            <span className="blue-gradient-text">Real Production Code.</span>
          </h1>
          <p className="page-lead">
            Every project listed here is an authentic application or website built by NeoProcesses.
            We showcase real software architecture, genuine screenshots, and verified development statuses — never fabricated case studies.
          </p>

          {/* Filter Pills */}
          <div className="filter-pill-row">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter-tab-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'All' ? 'All Projects (3)' : `${f}`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="projects-grid-3">
            {filteredProjects.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onSelect={(p) => {
                  setSelectedProject(p);
                  setSelectedImageIndex(0);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Walkthrough of Flagship Projects */}
      <section className="section-padding bg-canvas" id="deep-dive">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">Architectural Deep-Dive <span className="dot">•</span></span>
            <h2 className="section-main-heading">
              VERIFIED PROJECT ARCHITECTURES<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              Examine the actual problem, solution, and technical features engineered for each project.
            </p>
          </div>

          <div className="portfolio-deep-stack">
            {projects.map((proj, idx) => (
              <article key={proj.id} className="portfolio-deep-card card-dark-elevated">
                <div className="deep-card-top-bar">
                  <div>
                    <span className="badge-pill-cyan" style={{ marginBottom: '6px' }}>Project 0{idx + 1} // {proj.category}</span>
                    <h3 className="deep-card-title">{proj.title}</h3>
                  </div>
                  <span className={`project-status-badge ${proj.statusClass}`}>
                    <span className="status-dot"></span>
                    <span>{proj.badge}</span>
                  </span>
                </div>

                <div className="deep-card-grid">
                  {/* Left Column: Problem, Solution & Capabilities */}
                  <div className="deep-card-text">
                    <div className="deep-box problem">
                      <span className="deep-label red">Business Need &amp; Problem:</span>
                      <p>{proj.challenge}</p>
                    </div>

                    <div className="deep-box solution">
                      <span className="deep-label cyan">Engineered Solution:</span>
                      <p>{proj.solution}</p>
                    </div>

                    <div className="deep-features-block">
                      <h4 className="deep-features-title">Verified Capabilities &amp; Workflows</h4>
                      <ul className="deep-check-list">
                        {proj.verifiedFeatures.map((feat, i) => (
                          <li key={i}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="deep-tech-strip">
                      <span className="tech-strip-label">Verified Tech Stack:</span>
                      <div className="tech-pills-row">
                        {proj.technologies.map((t) => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: High-Res Screenshots & Previews */}
                  <div className="deep-card-media">
                    <div
                      className={`deep-hero-frame ${proj.type === 'Mobile' ? 'is-mobile-frame' : 'is-desktop-frame'}`}
                      onClick={() => {
                        setSelectedProject(proj);
                        setSelectedImageIndex(0);
                      }}
                      role="button"
                      tabIndex={0}
                      title="Click to inspect full screenshot"
                    >
                      <img
                        src={assetPath(proj.image)}
                        alt={`${proj.title} primary screenshot`}
                        className={`deep-hero-img ${proj.type === 'Mobile' ? 'img-contain' : ''}`}
                      />
                      <div className="deep-frame-badge">
                        <span>🔍 Click to View Full Image</span>
                      </div>
                    </div>

                    {proj.gallery && (
                      <div className="deep-gallery-grid">
                        {proj.gallery.map((g, gi) => (
                          <button
                            key={gi}
                            type="button"
                            className="deep-gallery-item-btn"
                            onClick={() => {
                              setSelectedProject(proj);
                              setSelectedImageIndex(gi + 1);
                            }}
                            title={`Click to open ${g.label}`}
                          >
                            <div className="deep-thumb-wrap">
                              <img
                                src={assetPath(g.src)}
                                alt={g.label}
                                className="deep-thumb-img"
                              />
                            </div>
                            <span className="deep-thumb-label">{g.label}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProject(proj);
                          setSelectedImageIndex(0);
                        }}
                        className="btn btn-primary btn-sm btn-block"
                      >
                        🔍 Open Interactive Viewer &amp; Screens
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Quality Standards */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">Delivery Standards <span className="dot">•</span></span>
            <h2 className="section-main-heading">HOW WE DELIVER EVERY PROJECT<span className="blue-dot">.</span></h2>
            <p className="section-lead-text mx-auto">
              Disciplined engineering practices applied to every website, app, and billing terminal.
            </p>
          </div>

          <div className="standards-grid-4">
            <div className="standard-card card-dark-elevated">
              <span className="standard-number">01</span>
              <h4 className="standard-title">Multi-Device Validation</h4>
              <p className="standard-desc">
                Layouts and interactions tested across physical Android phones, modern iPhones, iPads, and desktop displays.
              </p>
            </div>

            <div className="standard-card card-dark-elevated">
              <span className="standard-number">02</span>
              <h4 className="standard-title">Security by Architecture</h4>
              <p className="standard-desc">
                Strict database rules and role-based permissions ensure client data cannot be altered or inspected by unauthorized parties.
              </p>
            </div>

            <div className="standard-card card-dark-elevated">
              <span className="standard-number">03</span>
              <h4 className="standard-title">Zero Dependency Bloat</h4>
              <p className="standard-desc">
                Clean, modern code with standard libraries. No slow, unmaintainable third-party plugins that break upon updates.
              </p>
            </div>

            <div className="standard-card card-dark-elevated">
              <span className="standard-number">04</span>
              <h4 className="standard-title">Source Code Handover</h4>
              <p className="standard-desc">
                Complete commercial ownership of code and assets per contract terms, with full walkthroughs and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project CTA */}
      <section className="section-padding bg-canvas text-center">
        <div className="container">
          <span className="badge-pill-cyan">Have a Similar Project?</span>
          <h2 className="section-main-heading" style={{ marginTop: '12px' }}>
            Ready to Build Your Custom Software?
          </h2>
          <p className="section-lead-text mx-auto" style={{ marginBottom: '32px' }}>
            We work with clients in Pakistan, Saudi Arabia, and internationally. Connect with our engineering lead today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-glow">
              <span>Start Your Project</span>
              <span className="arrow-icon">→</span>
            </Link>
            <a
              href="https://wa.me/923265635826"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          initialImageIndex={selectedImageIndex}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
