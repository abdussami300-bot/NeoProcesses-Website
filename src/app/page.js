import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { assetPath } from '@/utils/asset-path';

export const metadata = {
  title: 'NeoProcesses | Your Business. Our Solution.',
  description:
    'Practical digital solutions for businesses that want to work smarter, serve customers better, and grow with confidence.',
};

export default function HomePage() {
  const services = [
    {
      id: 'websites',
      title: 'Website Development',
      summary:
        'Professional, responsive websites for businesses that need a credible online presence and modern user experience.',
      iconType: 'web',
      deliverables: [
        'Corporate profile & business showcase sites',
        'Responsive mobile, tablet & desktop layouts',
        'Product/service catalogues & inquiry forms',
        'Search engine optimized & fast page speeds',
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile Application Development',
      summary:
        'Cross-platform mobile applications built around practical requirements, usability, and maintainable architectures.',
      iconType: 'mobile',
      deliverables: [
        'Native-feel Flutter apps for Android & iOS',
        'Firebase authentication, real-time sync & storage',
        'Interactive booking, listings & user profiles',
        'Clean state management & offline support',
      ],
    },
    {
      id: 'systems',
      title: 'Business Management Systems',
      summary:
        'Software for managing billing, inventory, orders, records, and daily business workflows with clarity.',
      iconType: 'systems',
      deliverables: [
        'Order tracking & service status workflows',
        'Point-of-Sale (POS) & billing interfaces',
        'Operational dashboards for daily visibility',
        'Inventory intake & record management',
      ],
    },
    {
      id: 'custom',
      title: 'Custom Software Solutions',
      summary:
        'Custom web applications, administrative dashboards, client portals, and tailored business tools.',
      iconType: 'custom',
      deliverables: [
        'Secure admin portals & role-based controls',
        'Database-driven internal business tools',
        'Automated workflows & report generation',
        'Maintenance, refactoring & bug fixing',
      ],
    },
    {
      id: 'digital',
      title: 'Digital Business Solutions',
      summary:
        'Practical integrations and digital workflows that help businesses modernize the way they operate.',
      iconType: 'digital',
      deliverables: [
        'Direct WhatsApp customer inquiry dispatch',
        'Paperless forms & digital document verification',
        'API integrations & cloud backups',
        'Pragmatic technical consultation & support',
      ],
    },
  ];

  const featuredProjects = [
    {
      id: 'sayyarah',
      title: 'SAYYARAH — Car Rental Marketplace',
      category: 'Mobile Platform & Web Admin',
      badge: 'Production-Tested Marketplace',
      description:
        'A comprehensive peer-to-peer vehicle rental marketplace platform connecting customers with car hosts. Features vehicle listings, real-time booking lifecycle, digital vehicle handover & return inspections, role separation, and a dedicated Next.js administrative console.',
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'Next.js'],
      image: '/projects/sayyarah-browse.jpg',
      github: 'https://github.com/abdussami300-bot/Car-Rental-app',
      liveUrl: null,
    },
    {
      id: 'laundry',
      title: 'Laundry Management System',
      category: 'Operations App',
      badge: 'Academic Project',
      description:
        'A mobile workflow application designed for service intake, order lifecycle tracking, and pickup/delivery handling. Enables staff and clients to track wash, dry, and iron cycles with transparent progress.',
      technologies: ['Flutter', 'Dart', 'State Management', 'Responsive Mobile UI'],
      image: '/projects/laundry-dashboard.jpg',
      github: null,
      liveUrl: null,
    },
    {
      id: 'rowan',
      title: 'Rowan Mohammed Al-Hajri Est.',
      category: 'Corporate Web',
      badge: 'Saudi Commercial Supplier',
      description:
        'A commercial B2B website built for a Saudi supply business operating across the Eastern Province. Showcases industrial disposables, fresh produce, commercial cleaning supplies, and corporate client profiles.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
      image: '/projects/rowan-preview.jpg',
      github: null,
      liveUrl: null,
    },
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We discuss your actual business model, daily bottlenecks, target users, and key requirements without unnecessary technical jargon.',
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'We define the functional scope, priorities, timeline, and exact technical stack best suited to your operational goals.',
    },
    {
      num: '03',
      title: 'Build',
      desc: 'We write clean, testable code, configure secure backends, and perform rigorous quality checks on real devices and screen sizes.',
    },
    {
      num: '04',
      title: 'Deliver',
      desc: 'We deploy the completed website or app, explain every function clearly, and provide guidance to help you manage it smoothly.',
    },
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="section-tag">Software & Digital Solutions</span>
            <h1 className="hero-headline">
              Your Business. <br />
              <span className="highlight-text">Our Solution.</span>
            </h1>
            <p className="hero-subtitle">
              Practical digital solutions for businesses that want to work smarter,
              serve customers better, and grow with confidence.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-hero">
                Discuss a Project
              </Link>
              <Link href="/portfolio" className="btn btn-secondary btn-hero">
                Explore Our Work
              </Link>
            </div>

            {/* Credibility indicators */}
            <div className="hero-badges">
              <div className="hero-badge-item">
                <span className="badge-bullet"></span>
                <span>Custom Architecture</span>
              </div>
              <div className="hero-badge-item">
                <span className="badge-bullet"></span>
                <span>Mobile & Web Platforms</span>
              </div>
              <div className="hero-badge-item">
                <span className="badge-bullet"></span>
                <span>Direct Engineering Communication</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-preview">
              <div className="preview-top-bar">
                <div className="bar-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="bar-title">neoprocesses.engineering</div>
              </div>
              
              <div className="preview-body">
                <div className="preview-brand-header">
                  <div className="preview-icon-box">
                    <img
                      src={assetPath('/images/neoprocesses_symbol.svg')}
                      alt="NeoProcesses Symbol"
                      width="38"
                      height="38"
                    />
                  </div>
                  <div>
                    <div className="preview-brand-name">NeoProcesses Studio</div>
                    <div className="preview-brand-sub">Tailored Engineering & Workflows</div>
                  </div>
                </div>

                <div className="preview-stats-grid">
                  <div className="stat-box">
                    <div className="stat-label">Core Specialization</div>
                    <div className="stat-value">Flutter & Web</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Approach</div>
                    <div className="stat-value">Pragmatic & Clean</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Target Clients</div>
                    <div className="stat-value">SMBs & Startups</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Security Focus</div>
                    <div className="stat-value">Hardened Rules</div>
                  </div>
                </div>

                <div className="preview-code-snippet">
                  <code>
                    <span className="code-kw">const</span> solution = <span className="code-fn">buildPracticalSystem</span>&#40;&#123;<br />
                    &nbsp;&nbsp;focus: <span className="code-str">&quot;Business Efficiency&quot;</span>,<br />
                    &nbsp;&nbsp;codeQuality: <span className="code-str">&quot;Clean &amp; Maintainable&quot;</span>,<br />
                    &nbsp;&nbsp;support: <span className="code-kw">true</span><br />
                    &#125;&#41;;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Overview */}
      <section className="section-py bg-subtle-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Core Capabilities</span>
            <h2 className="section-title">What We Can Build For Your Business</h2>
            <p className="section-desc">
              From customer-facing mobile applications to internal workflow management systems,
              we develop software tailored to real operational needs.
            </p>
          </div>

          <div className="grid-3 services-grid">
            {services.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </div>

          <div className="services-footer-cta">
            <Link href="/services" className="btn btn-secondary">
              View Detailed Service Specifications →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Selected Projects */}
      <section className="section-py">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Genuine Portfolio</span>
            <h2 className="section-title">Selected Projects & Systems</h2>
            <p className="section-desc">
              Real applications and websites built with modern technologies,
              demonstrating end-to-end delivery from concept to deployment.
            </p>
          </div>

          <div className="grid-3 projects-grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div className="projects-footer-cta">
            <Link href="/portfolio" className="btn btn-primary">
              Explore All Projects & Architecture Details
            </Link>
          </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section className="section-py bg-subtle-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">The Process</span>
            <h2 className="section-title">How We Work With You</h2>
            <p className="section-desc">
              A transparent, structured four-step methodology to take your idea
              from requirement gathering to a dependable live solution.
            </p>
          </div>

          <div className="grid-4 workflow-grid">
            {workflowSteps.map((step) => (
              <div key={step.num} className="workflow-card card-base">
                <span className="step-number">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="section-py navy-section">
        <div className="container cta-container">
          <div className="cta-content">
            <span className="section-tag section-tag-dark">Direct Consultation</span>
            <h2 className="cta-heading">Have a project in mind?</h2>
            <p className="cta-subtext">
              Tell us what your business needs, and let&apos;s discuss a practical way to make it happen.
            </p>
            <div className="cta-button-row">
              <Link href="/contact" className="btn btn-primary btn-cta">
                Get in Touch
              </Link>
              <a
                href="https://wa.me/923265635826"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-cta"
              >
                Chat on WhatsApp (+92 326 5635826)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
