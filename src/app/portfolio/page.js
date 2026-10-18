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
      badge: 'Production-Tested Platform',
      type: 'Mobile',
      isAcademic: false,
      problem:
        'Fragmented, paper-based car rental coordination in Pakistan lacking verified customer/host roles, real-time booking lifecycle, and tamper-proof vehicle condition records.',
      solution:
        'Architected a peer-to-peer car rental platform featuring comprehensive vehicle listings, role separation (Customer, Host, Admin), photographic pre-trip/return inspection logging, immutable Firestore security rules, and a dedicated Next.js operational web admin console.',
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
      isAcademic: true,
      problem:
        'Manual garment intake slips lead to lost customer items, confusion between wash/dry/iron stages, and untracked pickup/delivery schedules in daily laundry businesses.',
      solution:
        'Developed a streamlined mobile workflow application for laundry business intake, service tracking (Wash, Dry, Steam Iron), order progress stages, itemized order cost calculation, and customer handover records.',
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
      isAcademic: false,
      problem:
        'A commercial B2B procurement and supply business operating in Saudi Arabia required an authoritative corporate web presence to showcase industrial disposables and food supplies to institutional buyers.',
      solution:
        'Engineered a fast, lightweight corporate website presenting company credentials, product categories (sanitation, industrial consumables, food items), and direct procurement inquiry channels with zero template bloat.',
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
          <span className="badge-pill-cyan">Demonstrated Technical Capability</span>
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
      <section className="section-padding bg-section-darker">
        <div className="container">
          <div className="projects-grid-3">
            {filteredProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="section-padding bg-section-void">
        <div className="container">
          <div className="section-title-wrapper text-center">
            <span className="badge-pill-cyan">Engineering Quality</span>
            <h2 className="section-headline">How We Build Every Project</h2>
            <p className="section-subheadline">
              Whether building an enterprise admin tool or a business website,
              we enforce consistent quality standards across the stack.
            </p>
          </div>

          <div className="process-timeline-grid">
            <div className="process-card card-dark-elevated">
              <div className="badge-num">01</div>
              <h3 className="stage-title">Real Device Validation</h3>
              <p className="stage-desc">
                We test responsive layouts and touch interactions directly on physical Android and iOS devices, ensuring smooth scrolling and zero visual overflow.
              </p>
            </div>

            <div className="process-card card-dark-elevated">
              <div className="badge-num">02</div>
              <h3 className="stage-title">Security by Architecture</h3>
              <p className="stage-desc">
                We configure strict database security rules and access control policies so client data cannot be modified or inspected by unauthorized parties.
              </p>
            </div>

            <div className="process-card card-dark-elevated">
              <div className="badge-num">03</div>
              <h3 className="stage-title">Zero Dependency Bloat</h3>
              <p className="stage-desc">
                We avoid installing third-party libraries for trivial UI effects. Clean, standard code ensures your project stays fast, stable, and easily maintainable.
              </p>
            </div>

            <div className="process-card card-dark-elevated">
              <div className="badge-num">04</div>
              <h3 className="stage-title">Direct Handover &amp; Support</h3>
              <p className="stage-desc">
                Every project concludes with clear operational documentation, deployment handover, and direct assistance to ensure smooth daily adoption.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
