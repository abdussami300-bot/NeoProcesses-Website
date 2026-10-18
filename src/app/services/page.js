import Link from 'next/link';

export const metadata = {
  title: 'Services & What We Build | NeoProcesses',
  description:
    'Custom software engineering services from NeoProcesses: Websites & Web Applications, POS & Business Management Systems, and Tailored Software & Mobile Applications.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'websites',
      title: 'Websites & Web Applications',
      tagline: 'High-Performance Web Presences Engineered for Credibility, Speed, and Conversions',
      problemAddressed:
        'Generic website templates frequently fail to project authority, suffer from sluggish performance, and lack custom inquiry pipelines necessary to convert visitors into paying clients.',
      description:
        'A website is frequently the very first touchpoint for your clients, commercial partners, or investors. We build responsive, performant, and search-optimized websites and web applications that represent your business with authority.',
      capabilities: [
        'Corporate Profile & Commercial Company Websites',
        'Product & Service Catalogues with Direct WhatsApp Inquiries',
        'Customer Portals & Authenticated Web Applications',
        'Fully Responsive Mobile, Tablet & Desktop Layouts',
        'Search Engine Optimization (SEO) & Fast Load Speeds',
        'Domain Configuration & Vercel / Cloud Deployment Support',
      ],
      technologies: ['Next.js', 'React', 'HTML5 / Semantic CSS', 'Responsive UI', 'Vercel Deployment'],
      useCase: 'Best for: Commercial suppliers, professional service firms, consultancies, and retailers wanting an authoritative digital presence.',
    },
    {
      id: 'systems',
      title: 'POS & Business Management Systems',
      tagline: 'Streamlined Systems for Billing, Orders, Inventory, and Operations',
      problemAddressed:
        'Managing business operations on paper registers, lost order slips, and untracked inventory creates costly daily bottlenecks, delayed customer handovers, and calculation errors.',
      description:
        'Eliminate chaotic spreadsheets, missed orders, and manual record-keeping errors. We develop business management software that brings structure, operational transparency, and accountability to your daily workflows.',
      capabilities: [
        'Point-of-Sale (POS) & Streamlined Billing Interfaces',
        'Order & Booking Lifecycle Management (Intake, In-Progress, Ready, Delivered)',
        'Inventory Tracking, Stock Intake & Balance Auditing',
        'Operational Dashboards for Daily Revenue & Activity Visibility',
        'Staff Permission Controls & Role-Based Access',
        'Receipt Generation & Printable Invoices',
      ],
      technologies: ['React', 'Next.js', 'Firestore / Cloud Databases', 'Role-Based Access Control'],
      useCase: 'Best for: Laundromats, repair shops, wholesale distributors, service centers, and boutique retailers.',
    },
    {
      id: 'custom',
      title: 'Custom Software & Mobile Applications',
      tagline: 'Tailored Mobile Apps and Bespoke Internal Systems Built for Unique Workflows',
      problemAddressed:
        'Off-the-shelf software packages rarely match unique operational workflows and impose expensive recurring monthly subscriptions per user seat.',
      description:
        'When standard software cannot accommodate your company’s unique workflow, we engineer custom software and cross-platform mobile apps specifically adapted to your processes, database relationships, and business rules.',
      capabilities: [
        'Cross-Platform Flutter Mobile Applications for Android & iOS',
        'Secure Administrative Portals with Multi-Level Permissions',
        'Cloud Database Synchronization & Offline Storage Support',
        'Custom Workflow Automations & Business Logic Rules',
        'Secure Multi-Role Authentication (Customer, Host, Operations Staff, Admin)',
        'Continuous Maintenance, Refactoring & Security Hardening',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Node.js'],
      useCase: 'Best for: Booking marketplaces, field operations, rental services, and businesses with specialized operational rules.',
    },
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="badge-pill-cyan">Service Capabilities</span>
          <h1 className="page-title">Custom Software Built Around Your Business</h1>
          <p className="page-lead">
            We deliver clear, production-tested solutions designed around your
            actual requirements — without bloated scopes or hidden fees.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-section-darker">
        <div className="container services-container">
          <div className="services-stack" style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {serviceCategories.map((svc, index) => (
              <div key={svc.id} id={svc.id} className="service-detail-card card-dark-elevated">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span className="badge-num">0{index + 1}</span>
                  <span className="badge-pill-cyan" style={{ marginBottom: 0 }}>{svc.title}</span>
                </div>

                <div className="service-main-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px' }}>
                  <div className="service-info-col">
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '10px', color: 'var(--text-white)' }}>{svc.title}</h2>
                    <p style={{ fontSize: '1rem', color: 'var(--cyan-primary)', fontWeight: '600', marginBottom: '16px' }}>{svc.tagline}</p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>{svc.description}</p>
                    
                    <div style={{ background: 'rgba(244, 63, 94, 0.08)', borderLeft: '3px solid var(--rose-accent)', padding: '12px 16px', borderRadius: '0 8px 8px 0', marginBottom: '18px' }}>
                      <strong style={{ color: 'var(--rose-accent)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '4px' }}>Business Challenge Addressed:</strong>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>{svc.problemAddressed}</p>
                    </div>

                    <div style={{ background: 'var(--bg-surface)', padding: '14px 18px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                      <strong style={{ color: 'var(--text-dim)', fontSize: '0.75rem', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Target Fit:</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{svc.useCase}</span>
                    </div>
                  </div>

                  <div className="service-deliverables-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', marginBottom: '14px', color: 'var(--text-white)' }}>What We Deliver</h3>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                        {svc.capabilities.map((cap, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '16px', height: '16px', color: 'var(--cyan-primary)', flexShrink: 0, marginTop: '3px' }}>
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>

                      <div style={{ marginBottom: '24px' }}>
                        <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--cyan-primary)', fontWeight: '700', marginBottom: '8px' }}>Technology Stack:</span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {svc.technologies.map((t) => (
                            <span key={t} className="tech-pill-dark">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        href={`/contact?service=${encodeURIComponent(svc.title)}`}
                        className="btn btn-primary btn-block"
                      >
                        Discuss This Solution
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feasibility advisory */}
          <div className="feasibility-advisory-box" style={{ marginTop: '40px' }}>
            <div className="advisory-icon">ℹ️</div>
            <p className="advisory-text">
              <strong>Transparent Consultation:</strong> We do not promise every feature for every project. Scope, timeline, and architectural feasibility are evaluated during initial requirement discussions to guarantee reliable delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="section-padding bg-section-void">
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="badge-pill-cyan">Need Advice?</span>
          <h2 className="section-headline">Uncertain which solution fits your business?</h2>
          <p className="section-subheadline" style={{ marginBottom: '32px' }}>
            We offer direct, no-pressure requirement discussions to evaluate your current setup and recommend a practical, cost-effective path forward.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Schedule a Requirement Review
          </Link>
        </div>
      </section>
    </div>
  );
}
