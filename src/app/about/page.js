import Link from 'next/link';
import { assetPath } from '@/utils/asset-path';

export const metadata = {
  title: 'About NeoProcesses | Software Development Studio in Islamabad',
  description:
    'NeoProcesses is a custom software development company based in Islamabad, Pakistan, building dependable websites, mobile apps, and business management systems for Pakistan, Saudi Arabia, and international clients.',
};

export default function AboutPage() {
  const engineeringValues = [
    {
      number: '01',
      title: 'Clarity Over Complexity',
      badge: 'Architecture',
      desc: 'We choose straightforward, dependable solutions tailored to operational needs rather than introducing unneeded technical bloat or fragile third-party dependencies.',
    },
    {
      number: '02',
      title: 'Rigorous Multi-Device Testing',
      badge: 'Validation',
      desc: 'Every user interface, touch checkout counter, and admin management tool is tested across physical smartphones, tablets, and desktop displays before release.',
    },
    {
      number: '03',
      title: 'Security by Architecture',
      badge: 'Data Protection',
      desc: 'Granular database security rules and role-based access control prevent unauthorized data changes and protect confidential commercial records.',
    },
    {
      number: '04',
      title: 'Direct Engineering Collaboration',
      badge: 'Zero Overhead',
      desc: 'Clients engage directly with the developers architecting and implementing the system, eliminating lost context and slow communication hierarchies.',
    },
    {
      number: '05',
      title: 'Commercial Code Handover',
      badge: 'Ownership',
      desc: 'Clients receive complete ownership of agreed milestone deliverables and source code, eliminating proprietary lock-in and monthly platform fees.',
    },
    {
      number: '06',
      title: 'Honest Feasibility & Scoping',
      badge: 'Integrity',
      desc: 'We conduct transparent feasibility evaluations upfront, providing realistic timelines and itemized deliverables before any development begins.',
    },
    {
      number: '07',
      title: 'Dedicated Handover & Support',
      badge: 'Lifecycle',
      desc: 'Every deployment concludes with operational documentation, staff workflow walkthroughs, and direct post-launch assistance to ensure smooth daily adoption.',
    },
  ];

  return (
    <div className="about-page-wrapper">
      {/* Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="page-header-pill">
            <span className="pulse-orb"></span>
            <span>Corporate Profile &amp; Engineering Philosophy</span>
          </div>
          <h1 className="page-title">
            Bridging Business Workflows &amp; <br />
            <span className="blue-gradient-text">Dependable Custom Software.</span>
          </h1>
          <p className="page-lead">
            NeoProcesses is a software development and digital solutions company based in Islamabad, Pakistan.
            We engineer practical digital systems for businesses in Pakistan, Saudi Arabia, and international markets.
          </p>
        </div>
      </section>

      {/* Main Narrative Block */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-copy">
              <span className="section-pretitle">Who We Are <span className="dot">•</span></span>
              <h2 className="section-main-heading" style={{ textAlign: 'left', marginBottom: '24px' }}>
                Practical Systems Built for Real Daily Operations.
              </h2>

              <p className="story-paragraph">
                Growing commercial enterprises frequently struggle with digital systems that are either overly rigid, needlessly complex, or poorly matched to everyday operations. Generic off-the-shelf packages often force staff into awkward workarounds while demanding perpetual monthly fees.
              </p>

              <p className="story-paragraph">
                <strong style={{ color: 'var(--cyan-primary)' }}>NeoProcesses</strong> was established with a singular focus: to bridge the gap between real business workflows and dependable custom software. Headquartered in Islamabad, Pakistan, we design and build modern corporate websites, Point-of-Sale billing systems, business management platforms, and cross-platform mobile applications.
              </p>

              <p className="story-paragraph">
                Whether deploying a peer-to-peer car rental marketplace, building an authoritative B2B procurement catalogue for a commercial supplier in Saudi Arabia, or structuring estimation software for a regional fabrication workshop, we engineer solutions that eliminate operational friction and deliver tangible business value.
              </p>

              <div className="markets-badge-strip">
                <div className="market-pill">
                  <span className="market-flag">🇵🇰</span>
                  <span className="market-text">Pakistan Local Market</span>
                </div>
                <div className="market-pill">
                  <span className="market-flag">🇸🇦</span>
                  <span className="market-text">Saudi Arabia &amp; GCC</span>
                </div>
                <div className="market-pill">
                  <span className="market-flag">🌐</span>
                  <span className="market-text">International Clients</span>
                </div>
              </div>
            </div>

            {/* Visual Identity Card */}
            <div className="about-brand-card card-dark-elevated">
              <div className="about-card-top">
                <img
                  src={assetPath('/images/neoprocesses_symbol.svg')}
                  alt="NeoProcesses Brand Symbol"
                  width="54"
                  height="54"
                  className="about-symbol-lg"
                />
                <div>
                  <h3 className="about-card-brand">Neo<span className="brand-highlight">Processes</span></h3>
                  <span className="about-card-tag">Software Development Studio</span>
                </div>
              </div>

              <div className="about-specs-list">
                <div className="about-spec-row">
                  <span className="spec-item-label">Primary Studio Location</span>
                  <span className="spec-item-value">Islamabad, Pakistan</span>
                </div>
                <div className="about-spec-row">
                  <span className="spec-item-label">Markets Served</span>
                  <span className="spec-item-value highlight-cyan">Pakistan, Saudi Arabia, Global</span>
                </div>
                <div className="about-spec-row">
                  <span className="spec-item-label">Primary Frameworks</span>
                  <span className="spec-item-value">Next.js, Flutter, Firebase, React</span>
                </div>
                <div className="about-spec-row">
                  <span className="spec-item-label">Delivery Scope</span>
                  <span className="spec-item-value">Web, Mobile, POS, Custom Systems</span>
                </div>
                <div className="about-spec-row">
                  <span className="spec-item-label">Communication Model</span>
                  <span className="spec-item-value">Direct Technical Pair Programming</span>
                </div>
              </div>

              <div className="about-qr-strip">
                <img
                  src={assetPath('/images/neoprocesses_qr.svg')}
                  alt="NeoProcesses QR"
                  width="44"
                  height="44"
                  className="qr-img-mini"
                />
                <div>
                  <span className="qr-title">Official Online Profile</span>
                  <span className="qr-url">neoprocesses-website.vercel.app</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seven Core Value Propositions */}
      <section className="section-padding bg-canvas" id="values">
        <div className="container">
          <div className="section-header-block text-center">
            <span className="section-pretitle">Guiding Principles <span className="dot">•</span></span>
            <h2 className="section-main-heading">
              THE SEVEN VALUE PROPOSITIONS<span className="blue-dot">.</span>
            </h2>
            <p className="section-lead-text mx-auto">
              Our engineering commitments to every commercial client — ensuring honesty, transparent milestones, and reliable software handover.
            </p>
          </div>

          <div className="values-grid-7">
            {engineeringValues.map((val) => (
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

      {/* Official Capabilities CTA */}
      <section className="section-padding bg-surface">
        <div className="container text-center">
          <span className="badge-pill-cyan">Ready to Collaborate?</span>
          <h2 className="section-main-heading" style={{ marginTop: '12px' }}>
            Start a Direct Engineering Consultation
          </h2>
          <p className="section-lead-text mx-auto" style={{ marginBottom: '32px' }}>
            Whether you need a new web application, a mobile platform, or a billing system for your counter operations, let&apos;s discuss your goals.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-glow">
              <span>Discuss Your Project</span>
              <span className="arrow-icon">→</span>
            </Link>
            <a
              href="https://wa.me/923265635826"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              WhatsApp (+92 326 5635826)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
