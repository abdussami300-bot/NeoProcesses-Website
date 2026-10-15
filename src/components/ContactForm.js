'use client';

import { useState } from 'react';

export default function ContactForm({ preselectedService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    service: preselectedService || 'Website Development',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    'Website Development',
    'Mobile Application Development',
    'Business Management Systems',
    'Custom Software Solutions',
    'Digital Business Solutions',
    'Other / Consultation',
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
    if (!formData.service) {
      errs.service = 'Please select a service.';
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
    // Real dispatch preparation
    await new Promise((res) => setTimeout(res, 600));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Structured inquiry message for WhatsApp and Mail
  const formattedInquiry = `Hello NeoProcesses,%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Business:* ${encodeURIComponent(formData.businessName || 'N/A')}%0A*Service:* ${encodeURIComponent(formData.service)}%0A%0A*Project Description:*%0A${encodeURIComponent(formData.description)}`;

  const whatsappUrl = `https://wa.me/923265635826?text=${formattedInquiry}`;
  const mailtoUrl = `mailto:abdussami039@gmail.com?subject=${encodeURIComponent(`Project Inquiry - ${formData.service} (${formData.fullName})`)}&body=${encodeURIComponent(`Name: ${formData.fullName}\nEmail: ${formData.email}\nBusiness: ${formData.businessName || 'N/A'}\nService: ${formData.service}\n\nProject Description:\n${formData.description}`)}`;

  if (isSuccess) {
    return (
      <div className="success-card">
        <div className="success-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="success-icon">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="success-title">Project Inquiry Prepared!</h3>
        <p className="success-desc">
          Thank you, <strong>{formData.fullName}</strong>. Your project details have been organized.
          To ensure an immediate response from our engineering lead, choose your preferred direct communication channel below:
        </p>

        <div className="dispatch-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.87 13.22 14.89 12.97 14.77C12.72 14.64 11.92 14.38 10.97 13.54C10.23 12.88 9.73 12.07 9.59 11.82C9.44 11.57 9.57 11.44 9.7 11.31C9.81 11.2 9.95 11.02 10.07 10.88C10.2 10.74 10.36 10.16 10.3 10.04C10.24 9.91 9.75 8.71 9.54 8.21C9.34 7.73 9.14 7.79 8.98 7.78C8.83 7.78 8.66 7.77 8.5 7.77C8.33 7.77 8.06 7.83 7.83 8.08C7.6 8.33 6.96 8.93 6.96 10.15C6.96 11.37 7.85 12.54 7.97 12.71C8.1 12.87 9.72 15.38 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.2 17.15 14.74 17.13 15.17 17.06C15.65 16.99 16.65 16.45 16.86 15.86C17.07 15.28 17.07 14.78 17.01 14.68C16.94 14.58 16.81 14.51 16.56 14.39Z"/>
            </svg>
            <span>Send directly via WhatsApp</span>
          </a>

          <a href={mailtoUrl} className="btn btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Send via Email Client</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: '',
              email: '',
              businessName: '',
              service: 'Website Development',
              description: '',
            });
          }}
          className="reset-btn"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form card-base" onSubmit={handleSubmit} noValidate>
      <div className="grid-2-form">
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
            className={`form-input ${errors.fullName ? 'is-error' : ''}`}
            aria-invalid={errors.fullName ? 'true' : 'false'}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="error-msg">{errors.fullName}</p>
          )}
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
            placeholder="e.g. contact@business.com"
            className={`form-input ${errors.email ? 'is-error' : ''}`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="error-msg">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid-2-form">
        {/* Business Name */}
        <div className="form-group">
          <label htmlFor="businessName" className="form-label">
            Business / Organization Name <span className="opt">(Optional)</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="e.g. Al-Madina Trading Co."
            className="form-input"
          />
        </div>

        {/* Service Required */}
        <div className="form-group">
          <label htmlFor="service" className="form-label">
            Service Required <span className="req">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`form-select ${errors.service ? 'is-error' : ''}`}
            aria-invalid={errors.service ? 'true' : 'false'}
          >
            {services.map((svc) => (
              <option key={svc} value={svc}>{svc}</option>
            ))}
          </select>
          {errors.service && (
            <p className="error-msg">{errors.service}</p>
          )}
        </div>
      </div>

      {/* Project Description */}
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Project Requirements & Goals <span className="req">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe what you want to build or improve, key features, and your timeline..."
          className={`form-textarea ${errors.description ? 'is-error' : ''}`}
          aria-invalid={errors.description ? 'true' : 'false'}
          aria-describedby={errors.description ? 'description-error' : undefined}
        ></textarea>
        {errors.description && (
          <p id="description-error" className="error-msg">{errors.description}</p>
        )}
      </div>

      <div className="form-footer">
        <button
          type="submit"
          className="btn btn-primary btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </>
          )}
        </button>
        <p className="form-privacy-note">
          We respect your privacy. No spam. You will receive a direct reply from our engineering lead.
        </p>
      </div>
    </form>
  );
}
