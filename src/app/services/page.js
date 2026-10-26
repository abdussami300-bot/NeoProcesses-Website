import Link from 'next/link';

export const metadata = {
  title: 'Services & Capabilities | NeoProcesses Software Development',
  description:
    'Comprehensive software development services from NeoProcesses: Websites, Mobile Applications, Custom Software, POS & Billing Systems, Business Management Systems, and E-commerce Solutions.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'web-development',
      index: '01',
      title: 'Website Design & Development',
      badge: 'Web Platforms',
      tagline: 'High-performance corporate websites, responsive portals, and conversion-focused web presences.',
      problemAddressed:
        'Generic website templates frequently project a cheap, amateur appearance, suffer from sluggish loading speeds on mobile data networks, and lack the custom business pipelines needed to convert prospective clients into inquiries.',
      overview:
        'A website is often the very first touchpoint for your prospective clients, commercial partners, or institutional procurement teams. We build clean, high-speed corporate websites and business web applications using modern web standards that communicate authority and reliability.',
      whatIncludes: [
        'Custom Next.js & React corporate websites tailored to your brand identity',
        'Interactive digital product and service catalogues with direct WhatsApp RFQ links',
        'Customer self-service portals and authenticated client areas',
        'Mobile-first responsive design ensuring zero visual overflow on smartphones',
        'Search Engine Optimization (SEO) metadata, OpenGraph tags, and sitemaps',
        'Domain configuration, SSL certificates, and cloud deployment on Vercel',
      ],
      typicalApplications:
        'Commercial suppliers, architectural and engineering firms, manufacturing workshops, professional service consultancies, and digital brands wanting an authoritative online presence.',
      exampleFeatures: [
        'Dynamic procurement catalogue with categorised search',
        'Instant Request-for-Quote (RFQ) triggers linking to WhatsApp or email',
        'Multi-language presentation (e.g. English & Arabic for Saudi commercial clients)',
        'Instant mobile navigation drawer and interactive consultation modals',
      ],
      technologies: ['Next.js', 'React', 'HTML5', 'Semantic CSS3', 'JavaScript', 'Vercel'],
    },
    {
      id: 'mobile-development',
      index: '02',
      title: 'Mobile Application Development',
      badge: 'Cross-Platform Mobile',
      tagline: 'Flutter-powered iOS and Android applications engineered for fluid performance and daily field use.',
      problemAddressed:
        'Maintaining separate native codebases for iOS and Android doubles development costs and creates feature divergence. Slow, buggy mobile interfaces frustrate users and lead to lost transactions.',
      overview:
        'We engineer cross-platform mobile applications using Google Flutter and Dart, allowing you to deploy native-speed apps to both Google Play and the Apple App Store from a single, disciplined codebase. Our apps feature offline resilience, device camera integration, and real-time database synchronization.',
      whatIncludes: [
        'Cross-platform Flutter mobile applications for Android and iOS',
        'Multi-role interface architectures (e.g. Customer, Host, Field Operator, Admin)',
        'On-device hardware integration (camera photo logging, GPS coordinates, local storage)',
        'Real-time cloud database snapshot streams with automatic offline caching',
        'Push notifications, user authentication, and secure profile management',
        'Google Play Console closed testing, app signing, and release preparation',
      ],
      typicalApplications:
        'Car rental and vehicle booking marketplaces, delivery and field inspection workflows, customer loyalty apps, service technician logs, and internal staff tools.',
      exampleFeatures: [
        'Photographic condition inspection before and after service handover',
        'Live booking status timeline (Pending → Confirmed → Active → Completed)',
        'Secure SMS / Phone and email authentication with biometric unlock support',
        'Real-time Firestore listeners updating screens without pull-to-refresh',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'REST APIs'],
    },
    {
      id: 'custom-software',
      index: '03',
      title: 'Custom Software Development',
      badge: 'Bespoke Engineering',
      tagline: 'Tailored backend systems, proprietary dashboards, and bespoke logic built around your exact workflows.',
      problemAddressed:
        'Off-the-shelf software packages force your team into rigid, awkward workarounds and charge expensive recurring per-seat monthly subscriptions while holding your data captive.',
      overview:
        'When standard commercial packages cannot accommodate your unique business logic, NeoProcesses designs and implements bespoke software solutions. We model your real data relationships, enforce granular security permissions, and build management tools that mirror your operational requirements exactly.',
      whatIncludes: [
        'Bespoke administrative consoles with role-based access control (RBAC)',
        'Custom cloud database schema design (relational and document structures)',
        'Granular security rules preventing unauthorized data inspection or tampering',
        'Automated business logic rules, calculations, and stage progression pipelines',
        'RESTful API architecture connecting web, mobile, and third-party systems',
        'Commercial source code handover with complete documentation and zero vendor lock-in',
      ],
      typicalApplications:
        'Multi-branch enterprises, specialized workshop operations, peer-to-peer marketplaces, bespoke estimation and pricing tools, and internal resource management.',
      exampleFeatures: [
        'Custom formula calculator for dimensional material fabrication pricing',
        'Role-separated viewports (cashier cannot inspect manager revenue analytics)',
        'Automated activity audit logs tracking which user made specific record changes',
        'Secure data export pipelines in Excel and PDF formats',
      ],
      technologies: ['Node.js', 'Next.js', 'Cloud Firestore', 'PostgreSQL / SQL', 'REST APIs', 'RBAC'],
    },
    {
      id: 'pos-billing',
      index: '04',
      title: 'POS & Billing Systems',
      badge: 'Operational Point of Sale',
      tagline: 'Rapid checkout billing terminals, automated receipts, tax calculations, and daily cash registers.',
      problemAddressed:
        'Handwritten paper slips and basic calculator registers cause slow checkout lines, frequent arithmetic errors, untracked cash balances, and unsearchable customer transaction histories.',
      overview:
        'We develop custom Point-of-Sale (POS) and counter billing systems designed for rapid daily operation. Built with touch-friendly controls and instant receipt generation, our billing terminals empower counter staff to process orders accurately while giving business owners real-time revenue visibility.',
      whatIncludes: [
        'Rapid counter checkout interfaces optimized for keyboard and touch screens',
        'Instant printable thermal receipt generation (58mm / 80mm) and PDF invoices',
        'Automated discount calculations, tax adjustments, and payment method logging',
        'Daily cash drawer register reconciliation and shift balance reports',
        'Customer transaction history and quick re-billing by phone number',
        'Bilingual English / Urdu interface options for workshop and counter staff',
      ],
      typicalApplications:
        'Aluminium and glass workshops, retail counters, repair service centers, wholesale distributors, laundromats, and commercial trade counters.',
      exampleFeatures: [
        'Fast product barcode and category quick-tap grid for high-speed checkout',
        'Custom receipt header and footer with business logo, QR code, and terms',
        'Partial payment and customer credit ledger tracking for ongoing orders',
        'End-of-day register closing summary with cash, card, and digital breakdown',
      ],
      technologies: ['React', 'Next.js', 'POS Architecture', 'Thermal ESC/POS', 'Cloud DB'],
    },
    {
      id: 'management-systems',
      index: '05',
      title: 'Business Management Systems',
      badge: 'Operations & Workflow',
      tagline: 'End-to-end order tracking, inventory management, workshop queues, and administrative oversight.',
      problemAddressed:
        'Using disconnected spreadsheets across sales, workshop staff, and delivery creates costly communication breakdowns, lost order slips, delayed customer deliveries, and stock shortages.',
      overview:
        'Bring centralized order and accountability to your entire operating workflow. Our business management software tracks orders through every phase of their lifecycle, monitors stock movements in real time, and provides owners with clear operational oversight from any browser or device.',
      whatIncludes: [
        'Order lifecycle tracking from intake through processing, QA, and customer delivery',
        'Inventory tracking with raw material stock balances and low-stock alerts',
        'Workshop job card dispatch boards keeping technicians focused on prioritized tasks',
        'Customer record management with contact logs and service history',
        'Centralized operational dashboards tracking active orders and revenue metrics',
        'Multi-user permission levels separating front counter, technicians, and management',
      ],
      typicalApplications:
        'Fabrication workshops, equipment repair operations, garment care facilities, distribution warehouses, and multi-step commercial service providers.',
      exampleFeatures: [
        'Visual Kanban and table views for orders by stage (Intake → In Progress → Ready → Delivered)',
        'Material consumption logging deducting stock automatically when jobs are created',
        'Automated SMS / WhatsApp notification triggers when orders reach "Ready" status',
        'Manager performance analytics tracking average turnaround time per service stage',
      ],
      technologies: ['Next.js', 'React', 'Cloud Firestore', 'Workflow State Machines', 'Role RBAC'],
    },
    {
      id: 'ecommerce',
      index: '06',
      title: 'E-commerce Solutions',
      badge: 'Digital Commerce',
      tagline: 'B2B digital catalogues, direct WhatsApp ordering, online storefronts, and procurement pipelines.',
      problemAddressed:
        'Traditional distributors lose potential clients who want to browse products online, check specifications, and place bulk procurement inquiries without playing phone tag.',
      overview:
        'We build modern digital commerce platforms that enable businesses to showcase products cleanly, receive structured wholesale orders, and connect directly with institutional and retail buyers. From B2B quotation portals to streamlined consumer stores, we optimize the entire purchasing journey.',
      whatIncludes: [
        'B2B and B2C digital storefronts with structured category hierarchies',
        'Direct WhatsApp quotation and order dispatch with auto-formatted item lists',
        'Downloadable procurement catalogues, product data sheets, and price books',
        'Cart management, request-for-quote (RFQ) workflows, and custom bulk tiers',
        'Fast mobile-first browsing optimized for slow network environments',
        'Content management setup allowing your team to update inventory and pricing',
      ],
      typicalApplications:
        'Industrial and commercial suppliers, wholesale distributors, hardware and electrical dealers, specialty retail brands, and food procurement vendors.',
      exampleFeatures: [
        'Instant "Request Quote on WhatsApp" button packaging selected items automatically',
        'Bulk SKU inquiry form enabling corporate buyers to paste procurement lists',
        'Search with real-time filtering by category, brand, and specification attributes',
        'High-resolution multi-angle product photography galleries and specification tables',
      ],
      technologies: ['Next.js', 'React', 'E-commerce Pipelines', 'WhatsApp Business Links', 'Cloud Storage'],
    },
  ];

  return (
    <div className="services-page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="page-header-pill">
            <span className="pulse-orb"></span>
            <span>Comprehensive Technical Capabilities</span>
          </div>
          <h1 className="page-title">
            Custom Software Built Around <br />
            <span className="blue-gradient-text">Your Exact Operations.</span>
          </h1>
          <p className="page-lead">
            NeoProcesses provides a broad range of software engineering and digital solutions.
            We design practical systems that remove everyday operational bottlenecks, improve staff efficiency,
            and establish corporate credibility.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="services-deep-stack">
            {serviceCategories.map((svc) => (
              <article key={svc.id} id={svc.id} className="service-deep-card card-dark-elevated">
                {/* Card Header Strip */}
                <div className="service-deep-header">
                  <div className="service-deep-meta">
                    <span className="service-deep-idx">{svc.index}</span>
                    <span className="badge-pill-cyan">{svc.badge}</span>
                  </div>
                  <h2 className="service-deep-title">{svc.title}</h2>
                  <p className="service-deep-tagline">{svc.tagline}</p>
                </div>

                {/* Problem vs Solution Split */}
                <div className="service-comparison-split">
                  <div className="split-box problem-box">
                    <span className="split-label red">The Operational Bottleneck</span>
                    <p className="split-text">{svc.problemAddressed}</p>
                  </div>
                  <div className="split-box solution-box">
                    <span className="split-label cyan">The NeoProcesses Solution</span>
                    <p className="split-text">{svc.overview}</p>
                  </div>
                </div>

                {/* Grid of What It Includes & Example Features */}
                <div className="service-details-grid">
                  <div className="details-col">
                    <h3 className="details-col-heading">What the Service Includes</h3>
                    <ul className="details-bullet-list">
                      {svc.whatIncludes.map((inc, i) => (
                        <li key={i} className="details-bullet-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="details-col">
                    <h3 className="details-col-heading">Example Features &amp; Applications</h3>
                    <ul className="details-bullet-list">
                      {svc.exampleFeatures.map((feat, i) => (
                        <li key={i} className="details-bullet-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="typical-use-box">
                      <span className="use-label">Typical Business Applications:</span>
                      <p className="use-text">{svc.typicalApplications}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Tech & CTA Strip */}
                <div className="service-deep-footer">
                  <div className="service-tech-pills">
                    <span className="tech-pills-label">Core Technologies:</span>
                    {svc.technologies.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="service-action-buttons">
                    <Link
                      href={`/contact?service=${encodeURIComponent(svc.title)}`}
                      className="btn btn-primary btn-sm"
                    >
                      <span>Request a Quote</span>
                      <span className="arrow-icon">→</span>
                    </Link>
                    <a
                      href={`https://wa.me/923265635826?text=${encodeURIComponent(`Hello NeoProcesses, I would like to inquire about your ${svc.title} service.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                    >
                      Discuss on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}

            {/* Additional Capability: Graphic Design & Branding */}
            <article id="branding" className="service-deep-card card-dark-elevated branding-special-card">
              <div className="service-deep-header">
                <div className="service-deep-meta">
                  <span className="service-deep-idx" style={{ color: '#F472B6' }}>07</span>
                  <span className="badge-pill-cyan" style={{ borderColor: 'rgba(236, 72, 153, 0.4)', color: '#F472B6', background: 'rgba(236, 72, 153, 0.12)' }}>Creative Services</span>
                </div>
                <h2 className="service-deep-title">Graphic Design &amp; Corporate Branding</h2>
                <p className="service-deep-tagline">Brand identities, logos, marketing presentation assets, and promotional design collateral.</p>
              </div>

              <div className="service-comparison-split">
                <div className="split-box problem-box">
                  <span className="split-label red">The Brand Problem</span>
                  <p className="split-text">Companies with powerful products frequently suffer from inconsistent, amateur branding across digital and print touchpoints, diminishing client confidence.</p>
                </div>
                <div className="split-box solution-box">
                  <span className="split-label cyan" style={{ color: '#F472B6' }}>Creative Direction</span>
                  <p className="split-text">We create cohesive corporate brand identities that seamlessly unite your software interfaces, social media campaigns, sales pitch decks, and physical company profiles.</p>
                </div>
              </div>

              <div className="service-details-grid">
                <div className="details-col">
                  <h3 className="details-col-heading">Creative Capabilities</h3>
                  <ul className="details-bullet-list">
                    <li className="details-bullet-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span><strong>Brand Identity &amp; Logos:</strong> Corporate emblems, logo marks, typography standards, and brand design guidelines.</span>
                    </li>
                    <li className="details-bullet-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span><strong>Social Media Creatives:</strong> High-impact promotional posts, carousel graphics, and engagement visuals.</span>
                    </li>
                    <li className="details-bullet-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span><strong>Marketing Graphics:</strong> Digital banner ads, presentation visuals, product infographics, and digital flyers.</span>
                    </li>
                  </ul>
                </div>

                <div className="details-col">
                  <h3 className="details-col-heading">Print &amp; Collateral Deliverables</h3>
                  <ul className="details-bullet-list">
                    <li className="details-bullet-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span><strong>Print-Ready Company Profiles:</strong> High-resolution multi-page corporate PDF binders formatted for executive presentation.</span>
                    </li>
                    <li className="details-bullet-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span><strong>Commercial Catalogues:</strong> Structured industrial catalogues with clean product photography and table specs.</span>
                    </li>
                  </ul>

                  <div className="typical-use-box">
                    <span className="use-label">Typical Application:</span>
                    <p className="use-text">Companies launching a new software platform, commercial suppliers seeking institutional procurement contracts, and expanding businesses.</p>
                  </div>
                </div>
              </div>

              <div className="service-deep-footer">
                <div className="service-tech-pills">
                  <span className="tech-pills-label">Design Tooling:</span>
                  <span className="tech-tag">Vector SVG</span>
                  <span className="tech-tag">Brand Standards</span>
                  <span className="tech-tag">Print CMYK</span>
                  <span className="tech-tag">Figma</span>
                </div>

                <div className="service-action-buttons">
                  <Link
                    href="/contact?service=Graphic%20Design%20%26%20Branding"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Request Branding Quote</span>
                    <span className="arrow-icon">→</span>
                  </Link>
                  <a
                    href="https://wa.me/923265635826?text=Hello%20NeoProcesses%2C%20I%20would%20like%20to%20inquire%20about%20your%20Graphic%20Design%20%26%20Branding%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding bg-canvas">
        <div className="container text-center">
          <span className="badge-pill-cyan">Need Guidance?</span>
          <h2 className="section-main-heading" style={{ marginTop: '12px' }}>
            Not Sure Which Solution Fits Your Needs?
          </h2>
          <p className="section-lead-text mx-auto" style={{ marginBottom: '32px' }}>
            Every business has unique requirements. Connect directly with our lead developer for an honest,
            no-obligation technical evaluation of your workflow bottlenecks.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-glow">
              <span>Request a Custom Quote</span>
              <span className="arrow-icon">→</span>
            </Link>
            <a
              href="https://wa.me/923265635826"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Consult Directly on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
