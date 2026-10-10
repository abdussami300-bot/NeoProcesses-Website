import Link from 'next/link';

export const metadata = {
  title: 'Services | NeoProcesses',
  description:
    'Detailed software engineering and digital solution services from NeoProcesses: Websites, Mobile Apps, Business Systems, and Custom Software.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'websites',
      title: 'Website Development',
      tagline: 'Professional Web Presences Designed for Credibility and Speed',
      description:
        'A website is frequently the very first touchpoint for your clients, commercial partners, or investors. We build responsive, performant, and search-optimized websites that represent your business with authority.',
      capabilities: [
        'Corporate Profile & Commercial Company Websites',
        'Business and Service Landing Experiences',
        'Fully Responsive Mobile, Tablet & Desktop Layouts',
        'Product & Service Catalogues with Direct Inquiries',
        'Interactive Contact Forms & Direct WhatsApp Actions',
        'Domain Configuration & Vercel / Cloud Deployment Support',
      ],
      technologies: ['Next.js', 'React', 'HTML5 / Semantic CSS', 'Responsive UI', 'Vercel Deployment'],
      useCase: 'Best for: Commercial suppliers, professional service firms, consultancies, and retailers wanting a credible web presence.',
    },
    {
      id: 'mobile',
      title: 'Mobile Application Development',
      tagline: 'Cross-Platform Android & iOS Applications Powered by Flutter',
      description:
        'We build mobile applications with clean architecture, fast UI responsiveness, and rock-solid backend synchronization. Whether customer-facing marketplaces or internal operational apps, we focus on smooth usability.',
      capabilities: [
        'Single-Codebase Flutter Applications for Android & iOS',
        'Firebase Authentication (Email/Password, Google Sign-In, Role Verification)',
        'Cloud Firestore Real-Time Database & Offline Caching',
        'Secure Cloud Storage for Documents & Photos (CNIC, Receipts, Vehicle Inspections)',
        'Role Separation (e.g., Customer, Host, Operations Staff, Admin)',
        'Push Notifications, Deep Linking & State Management',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'REST APIs'],
      useCase: 'Best for: Booking services, rental marketplaces, field operations, and customer membership apps.',
    },
    {
      id: 'systems',
      title: 'Business Management Systems',
      tagline: 'Streamlined Systems for Billing, Orders, Inventory & Operations',
      description:
        'Eliminate chaotic spreadsheets, missed orders, and manual record-keeping errors. We develop business management tools that bring structure, visibility, and accountability to your daily operations.',
      capabilities: [
        'Point-of-Sale (POS) & Streamlined Billing Interfaces',
        'Inventory Tracking, Stock Intake & Balance Auditing',
        'Order Lifecycle Management (Intake, In-Progress, Ready, Delivered)',
        'Administrative Summary Dashboards for Daily Revenue & Metrics',
        'Staff Permission Controls & Audit Logging',
        'Receipt Generation & Printable Invoices',
      ],
      technologies: ['React', 'Next.js', 'Firestore / SQL Databases', 'Role-Based Access Control'],
      useCase: 'Best for: Laundromats, repair shops, wholesale distributors, service centers, and boutique retailers.',
    },
    {
      id: 'custom',
      title: 'Custom Software Solutions',
      tagline: 'Tailored Web Applications & Client Portals for Unique Needs',
      description:
        'When standard software cannot accommodate your company’s unique workflow, we engineer custom software specifically adapted to your processes, database relationships, and business rules.',
      capabilities: [
        'Bespoke Web Applications & Client Self-Service Portals',
        'Internal Team Dashboards with Multi-Level Access',
        'Custom Workflow Automations & Business Logic Rules',
        'Refactoring, Modernization & Performance Tuning for Existing Systems',
        'Bug Fixing, Vulnerability Auditing & Security Hardening',
      ],
      technologies: ['Full-Stack JavaScript', 'Node.js', 'Next.js', 'Firebase Cloud Functions', 'RESTful APIs'],
      useCase: 'Best for: Businesses with specialized operational logic that packaged SaaS tools cannot address.',
    },
    {
      id: 'digital',
      title: 'Digital Business Solutions',
      tagline: 'Pragmatic Modernization of Manual and Paper-Based Processes',
      description:
        'Digitization should never feel like a high-risk disruption. We identify the highest-friction manual steps in your workflow and introduce simple, reliable digital tools that immediately save staff hours.',
      capabilities: [
        'Direct WhatsApp Order & Customer Inquiry Routing',
        'Digital Document Verification & Paperless Form Submissions',
        'Automated Customer Status Notifications & Alerts',
        'Cloud Backups & Centralized Data Storage',
        'Pragmatic Technical Consultation on Feasibility and Architecture',
      ],
      technologies: ['WhatsApp Business API / wa.me Integrations', 'Cloud Backups', 'Form Automations', 'Cloud APIs'],
      useCase: 'Best for: Traditional businesses transitioning from paper records to structured digital tools.',
    },
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="section-tag">Service Capabilities</span>
          <h1 className="page-title">Practical Software Services for Growing Businesses</h1>
          <p className="page-lead">
            We deliver clear, production-tested solutions designed around your
            actual requirements — without bloated scopes or hidden fees.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-py">
        <div className="container services-container">
          <div className="services-stack">
            {serviceCategories.map((svc, index) => (
              <div key={svc.id} id={svc.id} className="service-detail-card card-base">
                <div className="card-top-row">
                  <span className="service-index">0{index + 1}</span>
                  <span className="service-pill">{svc.title}</span>
                </div>

                <div className="service-main-grid">
                  <div className="service-info-col">
                    <h2 className="service-heading">{svc.title}</h2>
                    <p className="service-tagline">{svc.tagline}</p>
                    <p className="service-description">{svc.description}</p>
                    <div className="use-case-box">
                      <strong>Target Fit:</strong> {svc.useCase}
                    </div>
                  </div>

                  <div className="service-deliverables-col">
                    <h3 className="deliverables-heading">What We Deliver</h3>
                    <ul className="caps-list">
                      {svc.capabilities.map((cap, i) => (
                        <li key={i} className="cap-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="cap-check">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="service-tech-row">
                      <span className="tech-label">Technology Stack:</span>
                      <div className="tech-chips">
                        {svc.technologies.map((t) => (
                          <span key={t} className="tech-pill">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="service-cta-wrapper">
                      <Link
                        href={`/contact?service=${encodeURIComponent(svc.title)}`}
                        className="btn btn-primary"
                      >
                        Request a Quote for {svc.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="section-py-sm navy-section">
        <div className="container consultation-container">
          <div className="consultation-content">
            <h2 className="consultation-title">Uncertain which solution fits your business?</h2>
            <p className="consultation-desc">
              We offer direct, no-pressure requirement discussions to evaluate your current setup and recommend a practical, cost-effective path forward.
            </p>
          </div>
          <div className="consultation-action">
            <Link href="/contact" className="btn btn-primary">
              Schedule a Requirement Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
