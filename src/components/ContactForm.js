'use client';

import { useState } from 'react';

export default function ContactForm({ preselectedService = '', id = 'inquiry-form' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    businessName: '',
    location: '',
    projectType: preselectedService || 'Website Design & Development',
    estimatedBudget: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    'Website Design & Development',
    'Mobile Application Development (Flutter)',
    'Custom Software Development',
    'POS & Billing Systems',
    'Business Management Systems',
    'E-commerce Solutions',
    'Graphic Design & Branding',
    'Other / Custom Enterprise Architecture',
  ];

  const budgetOptions = [
    'Flexible / Discuss Options',
    'Under $500 / ~100k - 200k PKR',
    '$500 - $1,500 / ~200k - 450k PKR',
    '$1,500 - $3,000 / ~450k - 900k PKR',
    '$3,000+ / 900k+ PKR',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.whatsappNumber.trim()) {
      errs.whatsappNumber = 'Please provide your WhatsApp or phone number.';
    }
    if (!formData.projectType) {
      errs.projectType = 'Please select a required service.';
    }
    if (!formData.description.trim() || formData.description.trim().length < 15) {
      errs.description = 'Please describe your project requirements (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Package inquiry cleanly for direct client dispatch
    await new Promise((res) => setTimeout(res, 450));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Structured summary text formatted for WhatsApp and Email
  const structuredText = `*NeoProcesses Project Inquiry*
---------------------------------------
• *Client Name:* ${formData.fullName}
• *Email:* ${formData.email}
• *WhatsApp / Phone:* ${formData.whatsappNumber}
• *Business / Org:* ${formData.businessName || 'Individual / Not specified'}
• *Location:* ${formData.location || 'Not specified'}
• *Required Service:* ${formData.projectType}
• *Budget Range:* ${formData.estimatedBudget || 'To be discussed'}

*Project Scope & Requirements:*
${formData.description}`;

  const whatsappUrl = `https://wa.me/923265635826?text=${encodeURIComponent(structuredText)}`;
  const mailtoUrl = `mailto:abdusami300@gmail.com?subject=${encodeURIComponent(`[Project Inquiry] ${formData.projectType} - ${formData.fullName}`)}&body=${encodeURIComponent(structuredText)}`;

  const copyInquiry = async () => {
    try {
      await navigator.clipboard.writeText(structuredText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  if (isSuccess) {
    return (
      <div className="inquiry-ready-card card-dark-elevated">
        <div className="ready-badge">
          <span className="pulse-orb" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span>
          <span>Inquiry Formatted &amp; Ready to Send</span>
        </div>

        <h3 className="ready-title">Thank you, {formData.fullName}!</h3>
        <p className="ready-desc">
          Your project inquiry has been formatted. Because we offer direct technical communication with zero lost context, send it directly to our engineering lead using either button below:
        </p>

        <div className="ready-action-grid">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-ready"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.87 13.22 14.89 12.97 14.77C12.72 14.64 11.92 14.38 10.97 13.54C10.23 12.88 9.73 12.07 9.59 11.82C9.44 11.57 9.57 11.44 9.7 11.31C9.81 11.2 9.95 11.02 10.07 10.88C10.2 10.74 10.36 10.16 10.3 10.04C10.24 9.91 9.75 8.71 9.54 8.21C9.34 7.73 9.14 7.79 8.98 7.78C8.83 7.78 8.66 7.77 8.5 7.77C8.33 7.77 8.06 7.83 7.83 8.08C7.6 8.33 6.96 8.93 6.96 10.15C6.96 11.37 7.85 12.54 7.97 12.71C8.1 12.87 9.72 15.38 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.2 17.15 14.74 17.13 15.17 17.06C15.65 16.99 16.65 16.45 16.86 15.86C17.07 15.28 17.07 14.78 17.01 14.68C16.94 14.58 16.81 14.51 16.56 14.39Z"/>
            </svg>
            <span>Send Directly on WhatsApp</span>
          </a>

          <a
            href={mailtoUrl}
            className="btn btn-secondary-dark btn-ready"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Send via Email (abdusami300@gmail.com)</span>
          </a>
        </div>

        <div className="ready-clipboard-box">
          <div className="clipboard-header">
            <span>Formatted Inquiry Text:</span>
            <button
              type="button"
              onClick={copyInquiry}
              className="copy-btn"
            >
              {copied ? '✓ Copied to Clipboard' : 'Copy Text'}
            </button>
          </div>
          <pre className="clipboard-snippet">{structuredText}</pre>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: '',
              email: '',
              whatsappNumber: '',
              businessName: '',
              location: '',
              projectType: 'Website Design & Development',
              estimatedBudget: '',
              description: '',
            });
          }}
          className="reset-inquiry-btn"
        >
          ← Edit or Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="inquiry-form card-dark-elevated" id={id} onSubmit={handleSubmit} noValidate>
      <div className="form-header-bar">
        <div>
          <h3 className="form-headline">Request a Free Project Quote</h3>
          <p className="form-subheadline">Tell us about your operational challenge or project idea.</p>
        </div>
        <span className="badge-pill-cyan" style={{ fontSize: '0.7rem' }}>24h Direct Reply</span>
      </div>

      <div className="form-grid-2">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Tariq Mehmood"
            className={`form-input-dark ${errors.fullName ? 'is-error' : ''}`}
            aria-invalid={errors.fullName ? 'true' : 'false'}
          />
          {errors.fullName && <p className="error-msg-dark">{errors.fullName}</p>}
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="req">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. client@company.com"
            className={`form-input-dark ${errors.email ? 'is-error' : ''}`}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <p className="error-msg-dark">{errors.email}</p>}
        </div>
      </div>

      <div className="form-grid-2">
        {/* WhatsApp Number (Required per Phase 9) */}
        <div className="form-group">
          <label htmlFor="whatsappNumber" className="form-label">
            WhatsApp / Phone Number <span className="req">*</span>
          </label>
          <input
            type="tel"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="e.g. +92 300 1234567 or +966 50 123 4567"
            className={`form-input-dark ${errors.whatsappNumber ? 'is-error' : ''}`}
            aria-invalid={errors.whatsappNumber ? 'true' : 'false'}
          />
          {errors.whatsappNumber && <p className="error-msg-dark">{errors.whatsappNumber}</p>}
        </div>

        {/* Business / Company Name */}
        <div className="form-group">
          <label htmlFor="businessName" className="form-label">
            Business / Organization <span className="opt">(Optional)</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="e.g. Al-Noor Logistics or Startup Team"
            className="form-input-dark"
          />
        </div>
      </div>

      <div className="form-grid-2">
        {/* Required Service */}
        <div className="form-group">
          <label htmlFor="projectType" className="form-label">
            Required Service <span className="req">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`form-select-dark ${errors.projectType ? 'is-error' : ''}`}
            aria-invalid={errors.projectType ? 'true' : 'false'}
          >
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.projectType && <p className="error-msg-dark">{errors.projectType}</p>}
        </div>

        {/* Estimated Budget */}
        <div className="form-group">
          <label htmlFor="estimatedBudget" className="form-label">
            Estimated Budget Range <span className="opt">(Optional)</span>
          </label>
          <select
            id="estimatedBudget"
            name="estimatedBudget"
            value={formData.estimatedBudget}
            onChange={handleChange}
            className="form-select-dark"
          >
            <option value="">Select approximate budget range...</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Project Description &amp; Requirements <span className="req">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe what your business needs, current manual pain points, key user roles, or target timeline..."
          className={`form-textarea-dark ${errors.description ? 'is-error' : ''}`}
          aria-invalid={errors.description ? 'true' : 'false'}
        ></textarea>
        {errors.description && <p className="error-msg-dark">{errors.description}</p>}
      </div>

      <div className="form-submit-row">
        <button
          type="submit"
          className="btn btn-primary btn-submit-hero"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner-cyan"></span>
              <span>Formatting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Format &amp; Send Inquiry</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </>
          )}
        </button>

        <div className="form-guarantee-note">
          <span className="dot-green"></span>
          <span>Zero spam. Direct consultation from engineering lead within 24 hours.</span>
        </div>
      </div>
    </form>
  );
}
