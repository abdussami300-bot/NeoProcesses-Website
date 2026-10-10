import Link from 'next/link';
import { assetPath } from '@/utils/asset-path';

export const metadata = {
  title: 'About Us | NeoProcesses',
  description:
    'Learn about NeoProcesses, our approach to building practical digital systems, and our commitment to clean engineering and usability.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Clarity Over Complexity',
      desc: 'We do not build complicated architectures just for the sake of it. We choose the simplest, most dependable solution that solves your exact problem.',
    },
    {
      title: 'Real Usability',
      desc: 'Software must serve the people using it every day — whether an admin managing orders, a host approving bookings, or a customer browsing on a mobile screen.',
    },
    {
      title: 'Maintainable Code',
      desc: 'We write well-structured, readable code with standard technologies so your business is never trapped in unmaintainable legacy technical debt.',
    },
    {
      title: 'Pragmatic Delivery',
      desc: 'We focus on functional delivery, milestone transparency, and rigorous testing on actual physical devices before anything is marked as complete.',
    },
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="section-tag">About NeoProcesses</span>
          <h1 className="page-title">Engineering Software Built for Actual Business Operations</h1>
          <p className="page-lead">
            We are a software development and digital solutions studio focused on
            turning operational challenges into clean, dependable web and mobile applications.
          </p>
        </div>
      </section>

      {/* Main Story & Purpose */}
      <section className="section-py">
        <div className="container story-container">
          <div className="story-grid">
            <div className="story-text">
              <span className="section-tag">Our Purpose</span>
              <h2 className="story-heading">Practical Systems, Not Over-Engineered Promises</h2>
              
              <p>
                Many small and medium-sized businesses struggle with software that is either
                overly rigid, needlessly complex, or disconnected from how the business actually
                operates. Off-the-shelf tools often force teams into awkward workarounds, while
                traditional agency engagements frequently drown in buzzwords and bloated budgets.
              </p>

              <p>
                <strong>NeoProcesses</strong> was established with a straightforward mission:
                to bridge the gap between real business workflows and modern digital technology.
                We specialize in creating practical mobile applications, business management systems,
                corporate websites, and custom tools that work reliably day in and day out.
              </p>

              <p>
                Whether it is building an end-to-end marketplace platform with Flutter and Firebase,
                organizing manual orders into a streamlined tracking dashboard, or building a high-speed
                B2B corporate web presence, we focus on what creates genuine value for your business.
              </p>
            </div>

            <div className="story-card-wrapper">
              <div className="about-brand-card card-base">
                <div className="brand-card-header">
                  <img
                    src={assetPath('/images/neoprocesses_symbol.svg')}
                    alt="NeoProcesses Symbol"
                    width="48"
                    height="48"
                    className="about-symbol"
                  />
                  <div>
                    <h3 className="brand-card-title">NeoProcesses</h3>
                    <p className="brand-card-tagline">Your Business. Our Solution.</p>
                  </div>
                </div>

                <div className="focus-list">
                  <div className="focus-item">
                    <span className="focus-label">Core Philosophy</span>
                    <span className="focus-value">Pragmatic Software Engineering</span>
                  </div>
                  <div className="focus-item">
                    <span className="focus-label">Primary Stack</span>
                    <span className="focus-value">Flutter, Dart, Next.js, Firebase, React</span>
                  </div>
                  <div className="focus-item">
                    <span className="focus-label">Operating Model</span>
                    <span className="focus-value">Direct Collaboration & Remote Delivery</span>
                  </div>
                  <div className="focus-item">
                    <span className="focus-label">Primary Focus</span>
                    <span className="focus-value">SMBs, Startups & Commercial Services</span>
                  </div>
                </div>

                <div className="lead-signature">
                  <div className="lead-avatar">AS</div>
                  <div>
                    <div className="lead-name">Abdus Sami</div>
                    <div className="lead-role">Founder & Software Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-py bg-subtle-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">How We Think</span>
            <h2 className="section-title">The Principles Behind Every Solution</h2>
            <p className="section-desc">
              Every system we architect is evaluated against these four core engineering criteria.
            </p>
          </div>

          <div className="grid-2 values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card card-base">
                <div className="value-index">0{i + 1}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach to Client Engagements */}
      <section className="section-py">
        <div className="container approach-container">
          <div className="approach-box card-base">
            <span className="section-tag">Our Commitment</span>
            <h2 className="approach-title">Direct Engineering Communication</h2>
            <p className="approach-text">
              When you work with NeoProcesses, you do not talk through layers of non-technical
              account managers or generic customer service reps. You speak directly with the
              engineer designing your database schema, writing your app logic, and deploying
              your servers.
            </p>
            <p className="approach-text">
              This guarantees zero loss of detail, rapid feedback loops, and solutions
              that precisely align with what your operations require.
            </p>
            <div className="approach-cta">
              <Link href="/contact" className="btn btn-primary">
                Discuss Your Requirements With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
