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
      desc: 'We do not build complicated architectures just for the sake of it. We choose the simplest, most dependable solution that solves your exact operational bottleneck.',
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
          <span className="badge-pill-cyan">About NeoProcesses</span>
          <h1 className="page-title">Custom Software. Built Around Your Business.</h1>
          <p className="page-lead">
            We are a custom software development studio turning everyday operational challenges
            into practical digital solutions — from professional websites to custom POS and management systems.
          </p>
        </div>
      </section>

      {/* Main Story & Purpose */}
      <section className="section-padding bg-section-darker">
        <div className="container story-container">
          <div className="story-grid">
            <div className="story-text">
              <span className="badge-pill-cyan">Our Purpose</span>
              <h2 className="section-headline" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Practical Systems, Not Over-Engineered Promises
              </h2>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
                Many small and medium-sized businesses struggle with software that is either
                overly rigid, needlessly complex, or disconnected from how the business actually
                operates. Off-the-shelf tools often force teams into awkward workarounds, while
                traditional agency engagements frequently drown in buzzwords and bloated budgets.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
                <strong style={{ color: 'var(--cyan-primary)' }}>NeoProcesses</strong> was established with a straightforward mission:
                to bridge the gap between real business workflows and modern digital technology.
                We specialize in creating practical mobile applications, business management systems,
                corporate websites, and custom tools that work reliably day in and day out.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '0' }}>
                Whether it is building an end-to-end car rental marketplace with Flutter and Firebase,
                organizing manual orders into a streamlined tracking dashboard, or building a high-speed
                B2B corporate web presence, we focus on what creates genuine, durable value for your business.
              </p>
            </div>

            <div className="story-card-wrapper">
              <div className="about-brand-card card-dark-elevated">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <img
                    src={assetPath('/images/neoprocesses_symbol.svg')}
                    alt="NeoProcesses Symbol"
                    width="48"
                    height="48"
                    className="about-symbol"
                  />
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)', fontWeight: '800' }}>NeoProcesses</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--cyan-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Custom Software Development</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>Core Philosophy</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-white)', fontWeight: '600' }}>Pragmatic Software Engineering</span>
                  </div>
                  <div style={{ background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>Primary Technologies</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--cyan-primary)', fontWeight: '600' }}>Flutter, Dart, Next.js, Firebase, React</span>
                  </div>
                  <div style={{ background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>Client Focus</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-white)', fontWeight: '600' }}>Pakistani SMBs &amp; International Startups</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--cyan-primary)', color: '#050811', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem' }}>AS</div>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-white)', fontSize: '0.92rem' }}>Abdus Sami</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Lead Software Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding bg-section-void">
        <div className="container">
          <div className="section-title-wrapper text-center">
            <span className="badge-pill-cyan">How We Think</span>
            <h2 className="section-headline">The Principles Behind Every Solution</h2>
            <p className="section-subheadline">
              Every system we architect is evaluated against these four core engineering criteria.
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card card-dark-elevated">
                <div className="badge-num" style={{ marginBottom: '12px' }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-white)', marginBottom: '8px', fontWeight: '700' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.55', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach to Client Engagements */}
      <section className="section-padding bg-section-darker">
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <div className="card-dark-elevated">
            <span className="badge-pill-cyan">Direct Collaboration</span>
            <h2 className="section-headline" style={{ marginBottom: '16px' }}>Direct Engineering Communication</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '14px' }}>
              When you work with NeoProcesses, you do not talk through layers of non-technical
              account managers or generic customer service reps. You speak directly with the
              engineer designing your database schema, writing your app logic, and deploying
              your servers.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '28px' }}>
              This guarantees zero loss of detail, rapid feedback loops, and solutions
              that precisely align with what your operations require.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Discuss Your Requirements With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
