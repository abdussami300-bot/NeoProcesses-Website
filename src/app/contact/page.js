import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | NeoProcesses',
  description:
    'Start a conversation with NeoProcesses about your website, mobile application, or custom business software requirements.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="container">
          <span className="section-tag">Start a Conversation</span>
          <h1 className="page-title">Let’s Discuss Your Project Requirements</h1>
          <p className="page-lead">
            Whether you have an established specification or an initial concept,
            we are ready to discuss practical ways to build and deliver your solution.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section-py">
        <div className="container contact-main-container">
          <div className="contact-grid">
            {/* Form Column */}
            <div className="form-col">
              <div className="form-wrapper">
                <div className="form-heading-block">
                  <h2 className="form-title">Send a Project Inquiry</h2>
                  <p className="form-subtitle">
                    Fill out the form below. Once submitted, your inquiry is neatly structured
                    and ready for direct dispatch via WhatsApp or Email.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Direct Channels Column */}
            <div className="info-col">
              <div className="info-card card-base">
                <span className="section-tag">Direct Channels</span>
                <h3 className="info-card-title">Direct Engineering Contact</h3>
                <p className="info-card-desc">
                  Prefer instant messaging? Reach out directly to our engineering lead:
                </p>

                <div className="direct-channel-list">
                  {/* WhatsApp Channel */}
                  <a
                    href="https://wa.me/923410118690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-item whatsapp-channel"
                  >
                    <div className="channel-icon-box wa-icon-box">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.87 13.22 14.89 12.97 14.77C12.72 14.64 11.92 14.38 10.97 13.54C10.23 12.88 9.73 12.07 9.59 11.82C9.44 11.57 9.57 11.44 9.7 11.31C9.81 11.2 9.95 11.02 10.07 10.88C10.2 10.74 10.36 10.16 10.3 10.04C10.24 9.91 9.75 8.71 9.54 8.21C9.34 7.73 9.14 7.79 8.98 7.78C8.83 7.78 8.66 7.77 8.5 7.77C8.33 7.77 8.06 7.83 7.83 8.08C7.6 8.33 6.96 8.93 6.96 10.15C6.96 11.37 7.85 12.54 7.97 12.71C8.1 12.87 9.72 15.38 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.2 17.15 14.74 17.13 15.17 17.06C15.65 16.99 16.65 16.45 16.86 15.86C17.07 15.28 17.07 14.78 17.01 14.68C16.94 14.58 16.81 14.51 16.56 14.39Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="channel-title">WhatsApp Direct Chat</div>
                      <div className="channel-value">+92 341 0118690</div>
                      <span className="channel-hint">Instant messaging & voice notes</span>
                    </div>
                  </a>

                  {/* Email Channel */}
                  <a
                    href="mailto:abdussami039@gmail.com"
                    className="channel-item email-channel"
                  >
                    <div className="channel-icon-box mail-icon-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <div className="channel-title">Official Engineering Email</div>
                      <div className="channel-value">abdussami039@gmail.com</div>
                      <span className="channel-hint">For RFPs, detailed briefs & files</span>
                    </div>
                  </a>
                </div>

                <div className="location-box">
                  <div className="location-title">Base & Availability</div>
                  <p className="location-text">
                    Located in Islamabad / Rawalpindi, Pakistan.<br />
                    Available for remote projects, digital contracts, and commercial engagements worldwide.
                  </p>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="expect-card card-base">
                <h4 className="expect-title">What Happens Next?</h4>
                <ol className="expect-list">
                  <li>
                    <strong>Initial Review:</strong> We review your project description within 24 hours.
                  </li>
                  <li>
                    <strong>Requirement Clarification:</strong> We ask targeted questions regarding scope, edge cases, and timelines.
                  </li>
                  <li>
                    <strong>Practical Proposal:</strong> We provide a realistic milestones breakdown and technology recommendation.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
