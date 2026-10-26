'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import ContactForm from '@/components/ContactForm';
import { assetPath } from '@/utils/asset-path';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Six Core Services + Graphic Design & Branding (Phase 6, Section 2)
  const coreServices = [
    {
      id: 'web-dev',
      index: 1,
      title: 'Website Design & Development',
      badge: 'Web Systems',
      tagline: 'Corporate websites, responsive web applications, and business portals.',
      problemAddressed:
        'Generic templates fail to build corporate credibility, load slowly on mobile networks, and lack custom inquiry pipelines.',
      deliverables: [
        'Corporate websites & high-authority business portals',
        'Interactive product catalogues with direct WhatsApp RFQ links',
        'Responsive layouts optimized for smartphones, tablets & desktop',
        'Fast page load times with zero unnecessary dependency bloat',
      ],
      technologies: ['Next.js', 'React', 'Semantic CSS', 'Vercel'],
      iconType: 'web',
    },
    {
      id: 'mobile-dev',
      index: 2,
      title: 'Mobile Application Development',
      badge: 'Mobile Apps',
      tagline: 'Flutter-based cross-platform mobile apps for customers and field operations.',
      problemAddressed:
        'Businesses require dependable mobile applications on both Android and iOS without maintaining two separate codebases.',
      deliverables: [
        'Cross-platform Flutter mobile applications (Android & iOS)',
        'Multi-role access (Customer, Operator, Manager views)',
        'On-device camera integration for photo logging & inspection',
        'Real-time cloud database synchronization and offline caching',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore'],
      iconType: 'mobile',
    },
    {
      id: 'custom-software',
      index: 3,
      title: 'Custom Software Development',
      badge: 'Bespoke Logic',
      tagline: 'Tailored software engineered for unique operational rules and workflows.',
      problemAddressed:
        'Off-the-shelf software packages rarely match specialized business processes and charge expensive recurring per-seat fees.',
      deliverables: [
        'Bespoke administrative dashboards with granular permissions',
        'Secure relational & document databases tailored to business data',
        'Role-based access control (RBAC) preventing unauthorized changes',
        'Scalable API endpoints, business logic rules, and automations',
      ],
      technologies: ['Node.js', 'Next.js', 'Cloud DB', 'REST APIs'],
      iconType: 'custom',
    },
    {
      id: 'pos-billing',
      index: 4,
      title: 'POS & Billing Systems',
      badge: 'Counter Billing',
      tagline: 'Billing terminals, automated invoices, receipts, and order tracking.',
      problemAddressed:
        'Manual paper receipts and calculation slips cause register queue delays, lost records, and daily balance discrepancies.',
      deliverables: [
        'Rapid checkout Point-of-Sale (POS) counter billing terminals',
        'Instant printable thermal receipts and digital order slips',
        'Bilingual English / Urdu interface options for counter staff',
        'Daily sales registers, cash auditing, and itemized transaction logs',
      ],
      technologies: ['React', 'Next.js', 'POS Logic', 'Thermal Printing'],
      iconType: 'pos',
    },
    {
      id: 'management-systems',
      index: 5,
      title: 'Business Management Systems',
      badge: 'Operations Hub',
      tagline: 'Inventory, workflow management, order lifecycles, and administration.',
      problemAddressed:
        'Spreadsheet-based coordination across departments leads to missed deadlines, lost items, and zero operational visibility.',
      deliverables: [
        'Order lifecycle tracking (Intake → In-Progress → Delivered)',
        'Inventory tracking with automated low-stock warnings',
        'Workshop and job queue dispatch boards for technicians',
        'Centralized operational dashboards for owner and manager oversight',
      ],
      technologies: ['Cloud Firestore', 'Next.js', 'Workflow Pipelines'],
      iconType: 'management',
    },
    {
      id: 'ecommerce',
      index: 6,
      title: 'E-commerce Solutions',
      badge: 'Digital Commerce',
      tagline: 'Online stores, digital catalogues, product management, and ordering.',
      problemAddressed:
        'Traditional B2B and retail suppliers struggle to showcase dynamic catalogues and process bulk quotes efficiently.',
      deliverables: [
        'B2B & B2C digital storefronts with structured product categorisation',
        'Direct WhatsApp quotation dispatch and cart checkout',
        'Downloadable procurement lists and bulk quotation request flows',
        'Inventory synchronization and custom pricing tiers',
      ],
      technologies: ['E-commerce Portals', 'B2B Catalogues', 'WhatsApp Checkout'],
      iconType: 'ecommerce',
    },
  ];

  // Business Challenges We Solve (Phase 6, Section 3)
  const businessChallenges = [
    {
      challenge: 'Manual paper billing and calculation slips',
      solution: 'Digital POS Systems',
      impact: 'Fast counter checkouts, automated tax, and error-free printable receipts.',
      icon: 'receipt',
    },
    {
      challenge: 'Disorganized client orders and lost slips',
      solution: 'Order Management Software',
      impact: 'Clear stage-by-stage tracking from intake to completion and delivery.',
      icon: 'orders',
    },
    {
      challenge: 'No authoritative corporate presence',
      solution: 'Custom High-Speed Website',
      impact: 'Projects enterprise credibility to prospective clients in PK, KSA & globally.',
      icon: 'web',
    },
    {
      challenge: 'Manual phone scheduling & disputes',
      solution: 'Booking & Inspection System',
      impact: 'Digital reservation calendars with photographic vehicle condition logs.',
      icon: 'calendar',
    },
    {
      challenge: 'Untracked stock in messy spreadsheets',
      solution: 'Inventory Management Software',
      impact: 'Live stock balances, low-stock warnings, and barcode-ready intake.',
      icon: 'box',
    },
    {
      challenge: 'Limited to local walk-in customers',
      solution: 'B2B Digital Catalogue & E-commerce',
      impact: 'Reach international buyers with instant WhatsApp Request-for-Quote flows.',
      icon: 'globe',
    },
  ];

  // Featured 3 Verified Projects (Phase 6, Section 4)
  const featuredProjects = [
    {
      id: 'sayyarah',
      title: 'SAYYARAH — Car Rental Marketplace',
      category: 'Mobile Platform & Cloud Backend',
      badge: 'Android Closed Testing',
      statusClass: 'badge-cyan',
      statusDetails: 'Android Closed Testing (Google Play Console)',
      market: 'Pakistan & Gulf Rental Markets',
      tagline: 'Peer-to-peer car rental platform with photographic condition logging.',
      summary:
        'A comprehensive car rental platform engineered with Flutter, Firebase, and a Next.js web console. Features vehicle discovery, customer & host role workflows, and pre-trip condition inspections.',
      challenge:
        'Car rental businesses traditionally operated on unverified telephone bookings, informal paper agreements, and unrecorded vehicle handovers — leading to frequent damage disputes and untracked security deposits.',
      solution:
        'Engineered an end-to-end peer-to-peer vehicle rental architecture featuring cross-platform Flutter mobile applications for renters and vehicle hosts, integrated with Google Cloud Firestore real-time streams and an administrative Next.js web console.',
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'Next.js'],
      image: '/projects/sayyarah_mobile.jpg',
      github: 'https://github.com/abdussami300-bot/Car-Rental-app',
      verifiedFeatures: [
        'Multi-role authentication separating Customers, Vehicle Hosts, and Fleet Admins',
        'Mandatory pre-trip & return photographic vehicle inspection logged to cloud storage',
        'Real-time Firestore snapshot listeners for instant booking status updates',
        'Granular database security rules enforcing role-based data isolation',
      ],
      gallery: [
        { src: '/projects/sayyarah_browse.jpg', label: 'Vehicle Discovery Stream' },
        { src: '/projects/sayyarah_details.jpg', label: 'Inspection & Booking Interface' },
      ],
    },
    {
      id: 'rowan-al-hajri',
      title: 'Rowan Mohammed Al-Hajri Est.',
      category: 'Saudi Commercial Supplier Website',
      badge: 'Client Review Pending',
      statusClass: 'badge-emerald',
      statusDetails: 'Client Review Pending (Saudi Commercial B2B)',
      market: 'Eastern Province, Saudi Arabia',
      tagline: 'B2B commercial procurement website with multi-category product catalogue.',
      summary:
        'A high-performance corporate B2B website engineered for a commercial supplier in Saudi Arabia, presenting industrial disposables, sanitation chemicals, and food supply categories.',
      challenge:
        'A prominent commercial supply business in Saudi Arabia needed an authoritative online presence to represent company capabilities to institutional procurement managers and replace static PDF price sheets with a structured digital catalogue.',
      solution:
        'Engineered a fast, lightweight corporate B2B web application showcasing supply categories (cleaning chemicals, disposable packaging, fresh produce), company registration credentials, and direct WhatsApp procurement inquiry actions.',
      technologies: ['Vite', 'HTML5', 'Semantic CSS3', 'JavaScript', 'Responsive UI', 'Three.js'],
      image: '/projects/rowan_website_desktop.jpg',
      github: null,
      verifiedFeatures: [
        'Commercial procurement catalogue with industrial categorization',
        'Bilingual Saudi commercial presentation and company registration verification',
        'Direct WhatsApp Request-for-Quote (RFQ) triggers for institutional buyers',
        'Ultra-fast loading speed with zero unnecessary runtime framework overhead',
      ],
      gallery: [
        { src: '/projects/rowan_website_mobile.jpg', label: 'Mobile Responsive Viewport' },
        { src: '/projects/rowan_disposables.jpg', label: 'Industrial Disposables Category' },
        { src: '/projects/rowan_cleaners.jpg', label: 'Commercial Cleaning Chemicals' },
      ],
    },
    {
      id: 'jawad-aluminium',
      title: 'Jawad Aluminium & Glass Works',
      category: 'Custom Business Software & Website',
      badge: 'Development in Progress',
      statusClass: 'badge-amber',
      statusDetails: 'Development in Progress (Contract Agreed)',
      market: 'Pakistan Regional Commercial Sector',
      tagline: 'Custom workshop business management, estimates, and corporate web portal.',
      summary:
        'A tailored business management system and corporate showcase for an architectural aluminium and glass fabrication workshop, handling estimates, order stages, and billing.',
      challenge:
        'Aluminium and glass fabrication workshops face complex custom material dimension measurements, fluctuating raw metal prices, manual paper quotation calculations, and unorganized customer order queues.',
      solution:
        'Developing a dedicated business operations solution combining a corporate portfolio website with an internal order estimation calculator, customer billing registers, and stage-by-stage workshop fabrication tracking.',
      technologies: ['Next.js', 'React', 'Tailored Estimation Logic', 'POS / Billing', 'Cloud DB'],
      image: '/projects/jawad_website_desktop.png',
      github: null,
      verifiedFeatures: [
        'Fabrication portfolio presenting commercial aluminium windows, doors & curtain walls',
        'Custom dimensional estimation workflow for accurate client quotations',
        'Customer order register tracking fabrication from cutting to site installation',
        'Digital billing and receipt generation for workshop counter operations',
      ],
      gallery: [
        { src: '/projects/jawad_website_desktop.png', label: 'Corporate Showcase Portal' },
        { src: '/projects/jawad_logo.jpg', label: 'Verified Client Brand Identity' },
      ],
    },
  ];

  // Why Choose NeoProcesses — 7 Core Value Propositions (Phase 6, Section 5)
  const whyChooseUs = [
    {
      number: '01',
      title: 'Clarity Over Complexity',
      badge: 'Practicality',
      desc: 'We choose straightforward, dependable architectures tailored to your operational reality rather than introducing unneeded technical bloat.',
    },
    {
      number: '02',
      title: 'Rigorous Multi-Device Testing',
      badge: 'Validation',
      desc: 'Every user interface, touch checkout counter, and admin dashboard is validated across physical Android, iOS, tablet, and desktop viewports.',
    },
    {
      number: '03',
      title: 'Security by Architecture',
      badge: 'Data Safety',
      desc: 'Strict cloud security rules and role-based access control prevent unauthorized data tampering and safeguard commercial records.',
    },
    {
      number: '04',
      title: 'Direct Engineering Collaboration',
      badge: 'Zero Middlemen',
      desc: 'You collaborate directly with the software engineers building your solution — ensuring zero lost context and immediate turnaround.',
    },
    {
      number: '05',
      title: 'Commercial Code Handover',
      badge: 'No Lock-In',
      desc: 'You receive full ownership of agreed source code and milestone deliverables, preventing vendor lock-in and monthly platform capture.',
    },
    {
      number: '06',
      title: 'Honest Feasibility & Scoping',
      badge: 'Integrity',
      desc: 'We conduct transparent feasibility evaluations upfront, providing realistic timelines and itemized milestone deliverables before coding starts.',
    },
    {
      number: '07',
      title: 'Complete Handover, Docs & Support',
      badge: 'Lifecycle',
      desc: 'Every project concludes with operational documentation, staff workflow walkthroughs, and dependable post-deployment technical support.',
    },
  ];

  // Six Stages of How We Work (Phase 6, Section 6)
  const howWeWorkStages = [
    {
      step: '01',
      phase: 'Phase 1',
      title: 'Discovery',
      desc: 'We examine how your business actually runs. We map operational bottlenecks, user roles, daily data touchpoints, and clear commercial goals.',
      deliverable: 'Requirement Scope Document',
    },
    {
      step: '02',
      phase: 'Phase 2',
      title: 'Planning',
      desc: 'We structure the functional deliverables, database architecture, milestone roadmap, and technology stack without confusing jargon.',
      deliverable: 'Technical Roadmap & Timeline',
    },
    {
      step: '03',
      phase: 'Phase 3',
      title: 'UI/UX Design',
      desc: 'We craft clean, modern interfaces designed for rapid real-world use — whether touch checkout screens, mobile apps, or corporate portals.',
      deliverable: 'Interactive Interface Wireframes',
    },
    {
      step: '04',
      phase: 'Phase 4',
      title: 'Development',
      desc: 'We write clean, disciplined code with modern frameworks (Next.js, Flutter, Firebase). Staged milestones keep progress completely transparent.',
      deliverable: 'Functional Milestone Builds',
    },
    {
      step: '05',
      phase: 'Phase 5',
      title: 'Testing',
      desc: 'We stress-test workflows on physical smartphones, tablets, and laptops. We audit database security rules, input validation, and speed.',
      deliverable: 'Multi-Device QA Verification',
    },
    {
      step: '06',
      phase: 'Phase 6',
      title: 'Deployment & Support',
      desc: 'We launch your live website or configure production mobile builds, deliver complete operational documentation, and walk your team through daily use.',
      deliverable: 'Production Handover & Support',
    },
  ];

  return (
    <div className="homepage-wrapper">
      {/* ============================================================== */}
      {/* SECTION 1: PREMIUM HERO (Cloud Primero Inspired)                */}
      {/* ============================================================== */}
      <section className="hero-enterprise">
        <div className="hero-mesh-overlay" aria-hidden="true"></div>
        <div className="hero-radial-glow top-right" aria-hidden="true"></div>
        <div className="hero-radial-glow bottom-left" aria-hidden="true"></div>

        <div className="container hero-layout-grid">
          {/* Left Column: Headline, Supporting Copy, and CTAs */}
          <div className="hero-copy-column">
            <div className="hero-pill-badge">
              <span className="pulse-orb"></span>
              <span>Software Development &amp; Digital Solutions</span>
            </div>

            <h1 className="hero-headline">
              Custom Software. <br />
              <span className="blue-gradient-text">Built Around Your Business.</span>
            </h1>

            <p className="hero-description">
              NeoProcesses designs and develops websites, mobile applications, and custom software
              solutions that help businesses modernize operations and grow.
            </p>

            <div className="hero-cta-row">
              <Link href="#contact" className="btn btn-primary btn-glow">
                <span>Start Your Project</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>

              <Link href="#projects" className="btn btn-outline-white">
                <span>Explore Our Work</span>
                <span className="arrow-down-icon">↓</span>
              </Link>
            </div>

            {/* Quick Trust Strip */}
            <div className="hero-trust-metrics">
              <div className="trust-metric-item">
                <span className="metric-title">Bespoke Architecture</span>
                <span className="metric-caption">Zero rigid templates</span>
              </div>
              <div className="trust-metric-divider"></div>
              <div className="trust-metric-item">
                <span className="metric-title">Full-Stack Stacks</span>
                <span className="metric-caption">Next.js • Flutter • Firebase</span>
              </div>
              <div className="trust-metric-divider"></div>
              <div className="trust-metric-item">
                <span className="metric-title">Target Markets</span>
                <span className="metric-caption">Pakistan, Saudi Arabia &amp; Global</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Software Architecture Composition */}
          <div className="hero-mockup-wrapper">
            <div className="hero-terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot close"></span>
                  <span className="terminal-dot min"></span>
                  <span className="terminal-dot max"></span>
                </div>
                <span className="terminal-title">neoprocesses.engine // live-architecture</span>
                <div className="terminal-live-badge">
                  <span className="pulse-orb" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
                  <span>Active Engine</span>
                </div>
              </div>

              <div className="terminal-body">
                {/* Tech spec grid */}
                <div className="terminal-spec-grid">
                  <div className="spec-cell">
                    <span className="spec-label">Engine</span>
                    <span className="spec-val">Custom Logic</span>
                  </div>
                  <div className="spec-cell">
                    <span className="spec-label">Platform</span>
                    <span className="spec-val">Web &amp; Mobile</span>
                  </div>
                  <div className="spec-cell">
                    <span className="spec-label">Data Sync</span>
                    <span className="spec-val active-blue">Real-Time</span>
                  </div>
                </div>

                {/* Workflow pipeline visualization */}
                <div className="terminal-workflow-flow">
                  <div className="flow-title-row">
                    <span className="flow-title">Operational Workflow Pipeline</span>
                    <span className="flow-status">Verified Stream</span>
                  </div>
                  <div className="flow-steps">
                    <div className="flow-step-node done">
                      <span className="node-idx">01</span>
                      <span className="node-name">Intake</span>
                    </div>
                    <span className="flow-connector">→</span>
                    <div className="flow-step-node done">
                      <span className="node-idx">02</span>
                      <span className="node-name">Process</span>
                    </div>
                    <span className="flow-connector">→</span>
                    <div className="flow-step-node active">
                      <span className="node-idx">03</span>
                      <span className="node-name">POS / Billing</span>
                    </div>
                    <span className="flow-connector">→</span>
                    <div className="flow-step-node">
                      <span className="node-idx">04</span>
                      <span className="node-name">Handover</span>
                    </div>
                  </div>
                </div>

                {/* Live System Metrics Snapshot */}
                <div className="terminal-metrics-box">
                  <div className="metric-row">
                    <span className="metric-label">Flutter Mobile App:</span>
                    <span className="metric-status-ok">SAYYARAH (Android Closed Testing)</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Saudi B2B Web Portal:</span>
                    <span className="metric-status-ok">Rowan Al-Hajri (Client Review)</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Workshop Billing &amp; Web:</span>
                    <span className="metric-status-pending">Jawad Aluminium (In Progress)</span>
                  </div>
                </div>

                {/* Code execution snippet */}
                <div className="terminal-code-snippet">
                  <pre>
                    <code>
                      <span className="c-kw">const</span> solution = <span className="c-fn">engineerSystem</span>({'{'}{'\n'}
                      {'  '}approach: <span className="c-str">&quot;Clarity Over Complexity&quot;</span>,{'\n'}
                      {'  '}deviceTesting: <span className="c-str">&quot;Physical Android, iOS &amp; Web&quot;</span>,{'\n'}
                      {'  '}handover: <span className="c-bool">fullCodebaseOwnership</span>{'\n'}
                      {'}'});
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: WHAT WE BUILD (6 Core Services + Graphic Design)     */}
      {/* ============================================================== */}
      <section className="section-padding bg-surface" id="services">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              What We Build <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              CORE SOFTWARE CAPABILITIES<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              We design and engineer focused digital systems that automate manual tasks,
              modernize company presentation, and support day-to-day business operations.
            </p>
          </div>

          <div className="expertise-grid-3">
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Graphic Design & Branding (Complementary Creative Service) */}
          <div className="branding-banner-card card-dark-elevated">
            <div className="branding-banner-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="badge-pill-cyan" style={{ borderColor: 'rgba(236, 72, 153, 0.4)', color: '#F472B6', background: 'rgba(236, 72, 153, 0.12)' }}>Creative Service</span>
                <h3 className="branding-title">Graphic Design &amp; Branding</h3>
              </div>
              <Link href="/contact?service=Graphic%20Design%20%26%20Branding" className="btn btn-outline-white btn-sm">
                Discuss Branding
              </Link>
            </div>
            <p className="branding-desc">
              Complementary brand design services to ensure your software, social media presence, and physical collateral project cohesive corporate authority.
            </p>
            <div className="branding-features-grid">
              <div className="branding-feature-item">
                <span className="branding-feat-title">Brand Identity &amp; Logos</span>
                <span className="branding-feat-desc">Corporate emblems, logo suites, vector assets, and brand guidelines.</span>
              </div>
              <div className="branding-feature-item">
                <span className="branding-feat-title">Social Media Creatives</span>
                <span className="branding-feat-desc">High-impact feed posts, carousel graphics, and promotional story assets.</span>
              </div>
              <div className="branding-feature-item">
                <span className="branding-feat-title">Marketing Graphics</span>
                <span className="branding-feat-desc">Digital banner ads, presentation slide decks, and product infographics.</span>
              </div>
              <div className="branding-feature-item">
                <span className="branding-feat-title">Promotional Materials</span>
                <span className="branding-feat-desc">Print-ready company profile binders, commercial catalogues, and flyers.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: BUSINESS CHALLENGES WE SOLVE                         */}
      {/* ============================================================== */}
      <section className="section-padding bg-canvas" id="challenges">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              Operational Impact <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              BUSINESS CHALLENGES WE SOLVE<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              We connect real everyday business bottlenecks with practical, reliable software solutions.
            </p>
          </div>

          <div className="challenges-grid">
            {businessChallenges.map((item, idx) => (
              <div key={idx} className="challenge-card card-dark-elevated">
                <div className="challenge-top-row">
                  <span className="challenge-step-tag">Pain Point → Solution</span>
                  <span className="challenge-idx">0{idx + 1}</span>
                </div>

                <div className="challenge-problem-box">
                  <span className="problem-label-red">The Problem:</span>
                  <p className="problem-text">{item.challenge}</p>
                </div>

                <div className="challenge-arrow-divider">↓</div>

                <div className="challenge-solution-box">
                  <span className="solution-label-green">NeoProcesses Solution:</span>
                  <h4 className="solution-title">{item.solution}</h4>
                  <p className="solution-impact">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: FEATURED REAL PROJECTS                               */}
      {/* ============================================================== */}
      <section className="section-padding bg-surface" id="projects">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              Demonstrated Work <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              FEATURED PROJECTS<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              Real projects built with modern, maintainable code. Click any project to inspect genuine screenshots, architecture details, and verified development status.
            </p>
          </div>

          <div className="projects-grid-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/portfolio" className="btn btn-outline-white">
              <span>View Full Technical Portfolio &amp; Details</span>
              <span className="arrow-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: WHY CHOOSE NEOPROCESSES                              */}
      {/* ============================================================== */}
      <section className="section-padding bg-canvas" id="why-us">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              Our Commitments <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              WHY CHOOSE NEOPROCESSES<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              Our 7 core value propositions guide every engagement — keeping communication direct, software practical, and delivery transparent.
            </p>
          </div>

          <div className="values-grid-7">
            {whyChooseUs.map((val) => (
              <div key={val.number} className="value-proposition-card card-dark-elevated">
                <div className="value-header">
                  <span className="value-number">{val.number}</span>
                  <span className="value-badge">{val.badge}</span>
                </div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: HOW WE WORK (6 Stages)                              */}
      {/* ============================================================== */}
      <section className="section-padding bg-surface" id="how-we-work">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              Disciplined Process <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              HOW WE WORK<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              A transparent, 6-stage development timeline that ensures complete scope clarity,
              milestone testing on real devices, and dependable production delivery.
            </p>
          </div>

          <div className="stages-timeline-grid">
            {howWeWorkStages.map((stage) => (
              <div key={stage.step} className="stage-step-card card-dark-elevated">
                <div className="stage-step-top">
                  <span className="stage-num-badge">{stage.step}</span>
                  <span className="stage-phase-tag">{stage.phase}</span>
                </div>
                <h3 className="stage-step-title">{stage.title}</h3>
                <p className="stage-step-desc">{stage.desc}</p>
                <div className="stage-deliverable-strip">
                  <span className="deliverable-label">Key Output:</span>
                  <span className="deliverable-val">{stage.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: STRONG FINAL CTA                                     */}
      {/* ============================================================== */}
      <section className="section-padding final-cta-section" id="cta-banner">
        <div className="container">
          <div className="final-cta-card">
            <div className="cta-glow-circle" aria-hidden="true"></div>
            <span className="badge-pill-cyan">Let&apos;s Build Together</span>
            <h2 className="cta-headline">
              Have a Business Challenge <br className="desktop-break" />
              You Want to Digitize?
            </h2>
            <p className="cta-subtext">
              Let&apos;s discuss your requirements and explore a software solution built around your business.
            </p>
            <div className="cta-button-group">
              <a
                href="https://wa.me/923265635826"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-cta-large"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.87 13.22 14.89 12.97 14.77C12.72 14.64 11.92 14.38 10.97 13.54C10.23 12.88 9.73 12.07 9.59 11.82C9.44 11.57 9.57 11.44 9.7 11.31C9.81 11.2 9.95 11.02 10.07 10.88C10.2 10.74 10.36 10.16 10.3 10.04C10.24 9.91 9.75 8.71 9.54 8.21C9.34 7.73 9.14 7.79 8.98 7.78C8.83 7.78 8.66 7.77 8.5 7.77C8.33 7.77 8.06 7.83 7.83 8.08C7.6 8.33 6.96 8.93 6.96 10.15C6.96 11.37 7.85 12.54 7.97 12.71C8.1 12.87 9.72 15.38 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.2 17.15 14.74 17.13 15.17 17.06C15.65 16.99 16.65 16.45 16.86 15.86C17.07 15.28 17.07 14.78 17.01 14.68C16.94 14.58 16.81 14.51 16.56 14.39Z"/>
                </svg>
                <span>Discuss on WhatsApp</span>
              </a>

              <Link href="#contact" className="btn btn-primary btn-glow btn-cta-large">
                <span>Request a Quote</span>
                <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: CONTACT & LEAD GENERATION FORM                       */}
      {/* ============================================================== */}
      <section className="section-padding bg-surface" id="contact">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              Direct Engineering Consultation <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              LET&apos;S DISCUSS YOUR PROJECT<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              Send us your project outline or connect with our lead developer directly on WhatsApp or Email.
            </p>
          </div>

          <div className="contact-section-grid">
            {/* Left: Validated Inquiry Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Direct Channels */}
            <div className="contact-options-col">
              {/* WhatsApp Direct Card */}
              <div className="direct-channel-card card-dark-elevated">
                <div className="channel-icon-header wa-bg">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.87 13.22 14.89 12.97 14.77C12.72 14.64 11.92 14.38 10.97 13.54C10.23 12.88 9.73 12.07 9.59 11.82C9.44 11.57 9.57 11.44 9.7 11.31C9.81 11.2 9.95 11.02 10.07 10.88C10.2 10.74 10.36 10.16 10.3 10.04C10.24 9.91 9.75 8.71 9.54 8.21C9.34 7.73 9.14 7.79 8.98 7.78C8.83 7.78 8.66 7.77 8.5 7.77C8.33 7.77 8.06 7.83 7.83 8.08C7.6 8.33 6.96 8.93 6.96 10.15C6.96 11.37 7.85 12.54 7.97 12.71C8.1 12.87 9.72 15.38 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.2 17.15 14.74 17.13 15.17 17.06C15.65 16.99 16.65 16.45 16.86 15.86C17.07 15.28 17.07 14.78 17.01 14.68C16.94 14.58 16.81 14.51 16.56 14.39Z"/>
                  </svg>
                </div>
                <h3 className="channel-title">Direct WhatsApp</h3>
                <p className="channel-desc">
                  Fastest response channel. Share your project requirements or voice note briefs directly.
                </p>
                <div className="channel-val">+92 326 5635826</div>
                <a
                  href="https://wa.me/923265635826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                >
                  Message on WhatsApp
                </a>
              </div>

              {/* Direct Email Card */}
              <div className="direct-channel-card card-dark-elevated">
                <div className="channel-icon-header mail-bg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3 className="channel-title">Engineering Email</h3>
                <p className="channel-desc">
                  Have an RFP, scope document, or formal technical inquiry? Email our lead developer directly.
                </p>
                <div className="channel-val">abdusami300@gmail.com</div>
                <a
                  href="mailto:abdusami300@gmail.com"
                  className="btn btn-outline-white btn-block"
                >
                  Send an Email
                </a>
              </div>

              {/* Location & Markets Strip */}
              <div className="location-info-card card-dark-elevated">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="location-icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-white)', fontWeight: '700' }}>Islamabad, Pakistan</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--cyan-primary)', margin: 0, fontWeight: '600' }}>
                      Serving Pakistan, Saudi Arabia &amp; International Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
