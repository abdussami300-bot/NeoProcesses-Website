'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'sayyarah',
      title: 'SAYYARAH — Car Rental Marketplace',
      category: 'Mobile Platform & Web Admin',
      badge: 'Production-Tested Marketplace',
      type: 'Mobile',
      description:
        'A full-featured peer-to-peer car rental platform built for Islamabad/Rawalpindi. Features comprehensive vehicle listings, real-time booking requests, digital vehicle handover & return inspection documentation with photo verification, immutable CNIC security rules, and a dedicated Next.js operational admin console.',
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'Next.js', 'React'],
      image: '/projects/sayyarah-browse.jpg',
      github: 'https://github.com/abdussami300-bot/Car-Rental-app',
      liveUrl: null,
      scope: 'End-to-End System (Mobile Client + Cloud Backend + Web Admin)',
      keyHighlights: [
        'Multi-role authentication: Customer, Vehicle Owner, and Admin',
        'Pre-trip & return vehicle inspection with photographic condition logging',
        'Real-time Firestore listeners for instant booking status updates',
        'Granular security rules preventing privilege escalation and data tampering',
      ],
    },
    {
      id: 'laundry-management',
      title: 'Laundry Management System',
      category: 'Operations Management App',
      badge: 'Academic Project',
      type: 'Mobile',
      description:
        'A practical mobile application developed for laundry business intake, order progress monitoring, and customer service tracking. Designed to replace paper receipts with a clear digital order lifecycle.',
      technologies: ['Flutter', 'Dart', 'State Management', 'Clean Architecture', 'Mobile UI'],
      image: '/projects/laundry-dashboard.jpg',
      github: null,
      liveUrl: null,
      scope: 'Operational Mobile Workflow System',
      keyHighlights: [
        'Itemized service selection (Wash, Dry, Steam Iron, Express)',
        'Live status tracker: Received, Processing, Ready, Delivered',
        'Customer order history and order cost calculation',
        'Optimized for rapid intake on mobile devices',
      ],
    },
    {
      id: 'rowan-al-hajri',
      title: 'Rowan Mohammed Al-Hajri Est.',
      category: 'Corporate B2B Website',
      badge: 'Saudi Commercial Supplier',
      type: 'Web',
      description:
        'A clean corporate B2B website engineered for a commercial supply partner operating in the Eastern Province of Saudi Arabia. Presents product ranges, commercial sanitation supplies, and corporate supplier information.',
      technologies: ['HTML5', 'Semantic CSS3', 'JavaScript', 'Responsive Typography', 'SEO Optimization'],
      image: '/projects/rowan-preview.jpg',
      github: null,
      liveUrl: null,
      scope: 'Corporate Commercial Web Presence',
      keyHighlights: [
        'Commercial product catalogue (Fresh Produce, Disposables, PPE, Chemicals)',
        'Professional layout aligned with Saudi commercial B2B expectations',
        'Fast page load times with zero dependency bloat',
        'Direct inquiry and corporate profile download integration',
      ],
    },
  ];

  const filters = ['All', 'Mobile', 'Web'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="section-tag">Case Studies & Code</span>
          <h1 className="page-title">Genuine Projects Built with Real Code</h1>
          <p className="page-lead">
            Every project listed here is an authentic application or website built by
            our lead engineer. We demonstrate actual implementation architecture,
            not generic UI templates or fabricated case studies.
          </p>

          {/* Filter Pills */}
          <div className="filter-row">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'All' ? 'All Projects' : `${f} Projects`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-py">
        <div className="container">
          <div className="grid-3 portfolio-grid">
            {filteredProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="section-py bg-subtle-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Engineering Quality</span>
            <h2 className="section-title">How We Build Every Project</h2>
            <p className="section-desc">
              Whether building an enterprise admin tool or a business website,
              we enforce consistent quality standards across the stack.
            </p>
          </div>

          <div className="grid-3 standards-grid">
            <div className="standard-card card-base">
              <div className="standard-icon">01</div>
              <h3 className="standard-title">Real Device Validation</h3>
              <p className="standard-desc">
                We test responsive layouts and touch interactions directly on physical Android and iOS devices, ensuring smooth scrolling and zero visual overflow.
              </p>
            </div>

            <div className="standard-card card-base">
              <div className="standard-icon">02</div>
              <h3 className="standard-title">Security by Architecture</h3>
              <p className="standard-desc">
                We configure strict database security rules and access control policies so client data cannot be modified or inspected by unauthorized parties.
              </p>
            </div>

            <div className="standard-card card-base">
              <div className="standard-icon">03</div>
              <h3 className="standard-title">Zero Dependency Bloat</h3>
              <p className="standard-desc">
                We avoid installing third-party libraries for trivial UI effects. Clean, standard code ensures your project stays fast, stable, and easily maintainable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
