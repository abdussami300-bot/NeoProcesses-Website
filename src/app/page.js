import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import { assetPath } from '@/utils/asset-path';

export const metadata = {
  title: 'NeoProcesses | Software Built Around Your Business',
  description:
    'NeoProcesses develops custom software tailored to business needs — from high-performance websites and POS systems to custom management software and cross-platform mobile apps.',
};

export default function HomePage() {
  // 4 Services as specifically requested by user
  const services = [
    {
      id: 'web-apps',
      index: 1,
      title: 'Website & Web Application Development',
      tagline: 'High-performance web platforms engineered for business authority, responsiveness, and conversions.',
      problemAddressed:
        'Generic website templates fail to project corporate authority, suffer from sluggish loading speeds, and lack custom business pipelines needed to convert visitors into clients.',
      deliverables: [
        'Corporate & commercial company websites',
        'Customer self-service portals & authenticated web applications',
        'Product showcase catalogues with direct WhatsApp inquiry actions',
        'Fully responsive mobile, tablet & desktop interfaces',
        'High-speed architecture with zero template bloat',
      ],
      iconType: 'web',
    },
    {
      id: 'pos-systems',
      index: 2,
      title: 'POS & Business Management Systems',
      tagline: 'Centralized operational software that replaces manual paperwork, order errors, and spreadsheet chaos.',
      problemAddressed:
        'Managing daily operations on paper slips and disconnected spreadsheets creates costly inventory errors, slow register checkout lines, and unsearchable customer records.',
      deliverables: [
        'Point-of-Sale (POS) & rapid checkout billing terminals',
        'Stage-by-stage order and booking lifecycle management',
        'Real-time operational dashboards for daily revenue visibility',
        'Customer recordkeeping and itemized transaction logs',
        'Printable receipt generation and automatic tax calculation',
      ],
      iconType: 'pos',
    },
    {
      id: 'custom-software',
      index: 3,
      title: 'Custom Software Solutions',
      tagline: 'Tailored backend architectures, operational workflows, and software engineered for unique business rules.',
      problemAddressed:
        'Off-the-shelf software packages rarely match unique operational workflows and impose expensive recurring monthly subscriptions per user seat.',
      deliverables: [
        'Bespoke administrative dashboards with role-based access control',
        'Cloud database synchronization and offline-first data support',
        'Third-party API connections, automated alerts, and webhook links',
        'Granular security rules preventing unauthorized data tampering',
        'Clean, maintainable codebase without vendor lock-in',
      ],
      iconType: 'custom',
    },
    {
      id: 'mobile-apps',
      index: 4,
      title: 'Mobile Application Development',
      tagline: 'Cross-platform mobile applications for iOS and Android built with Flutter and modern cloud databases.',
      problemAddressed:
        'Modern customers and field staff expect fluid, responsive mobile interfaces with offline resilience and instant real-time synchronization.',
      deliverables: [
        'Cross-platform Flutter mobile applications (Android & iOS)',
        'Multi-role mobile interfaces (Client, Operator, Admin)',
        'Camera & hardware integration for verification and inspections',
        'Push notifications, real-time status listeners, and secure storage',
        'App store build preparation and deployment support',
      ],
      iconType: 'mobile',
    },
  ];

  // Selected Projects using genuine assets & screenshots
  const selectedProjects = [
    {
      id: 'sayyarah',
      title: 'SAYYARAH — Car Rental Marketplace',
      category: 'Mobile Platform & Web Admin',
      badge: 'Production-Tested Platform',
      isAcademic: false,
      summary:
        'A comprehensive peer-to-peer car rental platform featuring vehicle listings, role separation (Customer, Host, Admin), photographic pre-trip/return inspection logging, immutable Firestore security rules, and an operational Next.js web console.',
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'Next.js'],
      image: '/projects/sayyarah-browse.jpg',
      github: 'https://github.com/abdussami300-bot/Car-Rental-app',
      liveUrl: null,
    },
    {
      id: 'laundry-management',
      title: 'Laundry Management System',
      category: 'Operations Management App',
      badge: 'Academic Project',
      isAcademic: true,
      summary:
        'A streamlined mobile operations workflow application for garment intake, multi-stage service tracking (Wash, Dry, Steam Iron), order progress indicators, and itemized customer checkout records.',
      technologies: ['Flutter', 'Dart', 'State Management', 'Mobile UI Architecture'],
      image: '/projects/laundry-dashboard.jpg',
      github: null,
      liveUrl: null,
    },
    {
      id: 'rowan-al-hajri',
      title: 'Rowan Mohammed Al-Hajri Est.',
      category: 'Corporate B2B Website',
      badge: 'Saudi Commercial Supplier',
      isAcademic: false,
      summary:
        'A fast, lightweight corporate website engineered for a Saudi commercial supplier, presenting company credentials, product categories (sanitation, industrial consumables, food items), and direct procurement inquiry channels.',
      technologies: ['HTML5', 'Semantic CSS3', 'JavaScript', 'Responsive UI'],
      image: '/projects/rowan-preview.jpg',
      github: null,
      liveUrl: null,
    },
  ];

  // Our Approach / Process (Simple 4-Step Visual Flow)
  const approachSteps = [
    {
      number: '01',
      title: 'Understand Requirements',
      badge: 'Discovery',
      description:
        'We examine how your business actually runs. We identify operational bottlenecks, user roles, and core objectives without technical jargon.',
    },
    {
      number: '02',
      title: 'Plan & Design',
      badge: 'Architecture',
      description:
        'We define a clear functional scope, milestone deliverables, user interface workflows, and transparent technical architecture before coding begins.',
    },
    {
      number: '03',
      title: 'Develop',
      badge: 'Engineering',
      description:
        'We write clean, scalable code using proven modern stacks (Next.js, Flutter, Firebase). Every workflow is tested on real devices for speed and security.',
    },
    {
      number: '04',
      title: 'Launch & Support',
      badge: 'Deployment',
      description:
        'We deploy your live website or hand over the application with clear operational walkthroughs, documentation, and ongoing dependable support.',
    },
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-enterprise">
        <div className="hero-mesh-overlay" aria-hidden="true"></div>

        <div className="container hero-layout-grid">
          {/* Left Column: Heading & CTAs */}
          <div>
            <div className="hero-pill-badge">
              <span className="pulse-orb"></span>
              <span>Software Engineering Studio</span>
            </div>

            <h1 className="hero-headline">
              Software Built <br />
              <span className="blue-gradient-text">Around Your Business.</span>
            </h1>

            <p className="hero-description">
              NeoProcesses turns operational bottlenecks into practical, dependable digital solutions.
              From professional web platforms and POS systems to custom business management software and mobile apps.
            </p>

            <div className="hero-cta-row">
              <Link href="#contact" className="btn btn-primary">
                <span>Discuss Your Project</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>

              <Link href="#services" className="btn btn-outline-white">
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Credibility highlights */}
            <div className="hero-trust-metrics">
              <div className="trust-metric-item">
                <span className="metric-title">Tailored Systems</span>
                <span className="metric-caption">Zero rigid templates</span>
              </div>
              <div className="trust-metric-item">
                <span className="metric-title">Full-Stack Stacks</span>
                <span className="metric-caption">Next.js &amp; Flutter</span>
              </div>
              <div className="trust-metric-item">
                <span className="metric-title">Direct Engineering</span>
                <span className="metric-caption">Collaborate directly</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Software Visualization */}
          <div className="hero-mockup-wrapper">
            <div className="hero-terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot close"></span>
                  <span className="terminal-dot min"></span>
                  <span className="terminal-dot max"></span>
                </div>
                <span className="terminal-title">neoprocesses.runtime // live-architecture</span>
                <div className="terminal-live-badge">
                  <span className="pulse-orb" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
                  <span>Engine Active</span>
                </div>
              </div>

              <div className="terminal-body">
                {/* Tech spec strip */}
                <div className="terminal-spec-grid">
                  <div className="spec-cell">
                    <span className="spec-label">Methodology</span>
                    <span className="spec-val">Tailored Logic</span>
                  </div>
                  <div className="spec-cell">
                    <span className="spec-label">Platform</span>
                    <span className="spec-val">Web &amp; Mobile</span>
                  </div>
                  <div className="spec-cell">
                    <span className="spec-label">Sync</span>
                    <span className="spec-val active-blue">Real-Time</span>
                  </div>
                </div>

                {/* Workflow pipeline */}
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

                {/* Code execution snippet */}
                <div className="terminal-code-snippet">
                  <pre>
                    <code>
                      <span className="c-kw">const</span> solution = <span className="c-fn">engineerSystem</span>({'{'}{'\n'}
                      {'  '}businessModel: <span className="c-str">&quot;Tailored Operations&quot;</span>,{'\n'}
                      {'  '}architecture: <span className="c-str">&quot;Modern Web &amp; Mobile&quot;</span>,{'\n'}
                      {'  '}directSupport: <span className="c-bool">true</span>{'\n'}
                      {'}'});
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT NEOPROCESSES SECTION (Who We Are) */}
      <section className="section-padding bg-canvas" id="about">
        <div className="container">
          <div className="about-neo-grid">
            <div className="about-neo-copy">
              <span className="section-pretitle">
                About NeoProcesses <span className="dot">•</span>
              </span>
              <h2>
                We Develop Software Tailored to Business Needs<span className="blue-dot" style={{ color: 'var(--blue-primary)' }}>.</span>
              </h2>
              <p>
                NeoProcesses is a specialized software development studio. We build digital systems
                that align with the way businesses actually run — eliminating manual bottlenecks,
                paper registers, and messy spreadsheets.
              </p>
              <p>
                Whether you need an authoritative corporate web application, a streamlined POS billing terminal,
                or a custom cross-platform mobile app, we engineer robust, maintainable solutions built for long-term reliability.
              </p>
              <div style={{ marginTop: '28px' }}>
                <Link href="#contact" className="btn btn-outline-blue">
                  <span>Schedule a Consultation</span>
                  <span style={{ fontSize: '1.1rem' }}>→</span>
                </Link>
              </div>
            </div>

            {/* 3 Value Pillars */}
            <div className="about-features-grid" style={{ gridColumn: 'span 2' }}>
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24m-14.14 0 4.24-4.24m5.66-5.66 4.24-4.24"/>
                  </svg>
                </div>
                <h3 className="about-feature-title">Domain Understanding</h3>
                <p className="about-feature-desc">
                  We take the time to understand your industry, daily operational workflows, and real user requirements before writing a single line of code.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h3 className="about-feature-title">Agile-Driven Engineering</h3>
                <p className="about-feature-desc">
                  Structured milestone deliveries and testable releases so you can evaluate progress, test features on real devices, and provide feedback as we build.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3 className="about-feature-title">Tailored Architecture</h3>
                <p className="about-feature-desc">
                  No rigid off-the-shelf templates. Every system is engineered specifically for your data relationships, user roles, and growth objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE SECTION */}
      <section className="section-padding bg-deep" id="services">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              Our Capabilities <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              OUR EXPERTISE<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              Focused technology services designed to provide sustainable operational advantage,
              fluid user experiences, and measurable business efficiency.
            </p>
          </div>

          <div className="expertise-grid-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SELECTED PROJECTS SECTION */}
      <section className="section-padding bg-canvas" id="projects">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              Demonstrated Work <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              SELECTED PROJECTS<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              Real projects built with modern, maintainable code. Here is a selection of systems showcasing our web, mobile, and operations engineering capabilities.
            </p>
          </div>

          <div className="projects-grid-3">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/portfolio" className="btn btn-outline-white">
              <span>View All Projects &amp; Technical Details</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH SECTION */}
      <section className="section-padding bg-deep" id="approach">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              How We Work <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              OUR APPROACH<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              A transparent, structured 4-stage development process that ensures complete clarity,
              milestone accountability, and dependable delivery from day one.
            </p>
          </div>

          <div className="approach-pipeline-grid">
            {approachSteps.map((step) => (
              <div key={step.number} className="approach-step-card">
                <div className="approach-step-header">
                  <span className="approach-step-number">{step.number}</span>
                  <span className="approach-step-badge">{step.badge}</span>
                </div>
                <h3 className="approach-step-title">{step.title}</h3>
                <p className="approach-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT & INQUIRY SECTION (How Can We Help You?) */}
      <section className="section-padding bg-canvas" id="contact">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">
              Let&apos;s Connect <span className="dot">•</span>
            </span>
            <h2 className="section-main-heading">
              HOW CAN WE HELP YOU?<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              We believe in intelligent conversations that lead to practical solutions.
              Send us your project details or contact us directly to explore how we can support your business.
            </p>
          </div>

          <div className="contact-section-grid">
            {/* Left: Clean Inquiry Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Direct Channels */}
            <div className="contact-options-col">
              {/* WhatsApp Card */}
              <div className="direct-channel-card">
                <div className="channel-icon-header wa-bg">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.87 13.22 14.89 12.97 14.77C12.72 14.64 11.92 14.38 10.97 13.54C10.23 12.88 9.73 12.07 9.59 11.82C9.44 11.57 9.57 11.44 9.7 11.31C9.81 11.2 9.95 11.02 10.07 10.88C10.2 10.74 10.36 10.16 10.3 10.04C10.24 9.91 9.75 8.71 9.54 8.21C9.34 7.73 9.14 7.79 8.98 7.78C8.83 7.78 8.66 7.77 8.5 7.77C8.33 7.77 8.06 7.83 7.83 8.08C7.6 8.33 6.96 8.93 6.96 10.15C6.96 11.37 7.85 12.54 7.97 12.71C8.1 12.87 9.72 15.38 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.2 17.15 14.74 17.13 15.17 17.06C15.65 16.99 16.65 16.45 16.86 15.86C17.07 15.28 17.07 14.78 17.01 14.68C16.94 14.58 16.81 14.51 16.56 14.39Z"/>
                  </svg>
                </div>
                <h3 className="channel-title">Direct WhatsApp</h3>
                <p className="channel-desc">
                  Prefer instant communication? Message us directly to outline your requirements or share voice briefs.
                </p>
                <div className="channel-val">+92 326 5635826</div>
                <a
                  href="https://wa.me/923265635826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email Card */}
              <div className="direct-channel-card">
                <div className="channel-icon-header mail-bg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3 className="channel-title">Engineering Email</h3>
                <p className="channel-desc">
                  Have an RFP, scope document, or formal technical inquiry? Email our engineering lead directly.
                </p>
                <div className="channel-val">abdussami039@gmail.com</div>
                <a
                  href="mailto:abdussami039@gmail.com"
                  className="btn btn-outline-white btn-block"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
