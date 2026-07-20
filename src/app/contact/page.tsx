"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './contact.module.css';
import type { Metadata } from 'next';

const services = [
  'Custom Software Development',
  'AI & Data Solutions',
  'Business Process Automation',
  'Web Development',
  'Mobile Application Development',
  'UI/UX & Digital Design',
  'Cloud & Systems Integration',
  'Quality Assurance & Support',
  'Dedicated Technical Resources',
  'Not sure – need guidance',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container">
          <div className="section-label">Contact</div>
          <h1>Let&apos;s discuss what you want to build or improve</h1>
          <p>Share the business requirement, current challenge or product idea. Our initial discussion will help us understand the objective and determine whether Eltech Solutions is the right partner for the next step.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                  <h2>Enquiry Received</h2>
                  <p>Thank you for contacting Eltech Solutions. Your enquiry has been received. A representative will review the information and respond through your preferred contact method.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h2 className={styles.formTitle}>Send Your Enquiry</h2>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Full Name *</label>
                      <input type="text" required placeholder="Your full name" />
                    </div>
                    <div className={styles.field}>
                      <label>Company & Designation</label>
                      <input type="text" placeholder="Company name and your role" />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Business Email *</label>
                      <input type="email" required placeholder="you@company.com" />
                    </div>
                    <div className={styles.field}>
                      <label>Country *</label>
                      <input type="text" required placeholder="Your country" />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Telephone / WhatsApp</label>
                      <input type="tel" placeholder="+1 234 567 8900" />
                    </div>
                    <div className={styles.field}>
                      <label>Service Required</label>
                      <select>
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label>Brief Description of Requirement *</label>
                    <textarea required rows={5} placeholder="Describe what you need — the business problem, users, current process, or product idea..." />
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Expected Timeline</label>
                      <input type="text" placeholder="e.g. Within 3 months, ASAP, flexible" />
                    </div>
                    <div className={styles.field}>
                      <label>Budget Range (Optional)</label>
                      <select>
                        <option value="">Select range...</option>
                        <option>Under $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000 – $50,000</option>
                        <option>$50,000+</option>
                        <option>Prefer to discuss</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label>Preferred Contact Method</label>
                    <div className={styles.radioGroup}>
                      {['Email', 'WhatsApp', 'Video Call', 'No preference'].map(m => (
                        <label key={m} className={styles.radio}>
                          <input type="radio" name="contactMethod" value={m} /> {m}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.checkLabel}>
                      <input type="checkbox" required />
                      I agree that my submitted information will be used to review and respond to this enquiry in accordance with the Privacy Policy.
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                    Send Your Enquiry →
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <div style={{ position: 'relative', height: 220, borderRadius: 16, overflow: 'hidden', marginBottom: 28, background: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800) center/cover' }}>
                </div>
                <h3 style={{ marginBottom: 20 }}>Eltech Solutions</h3>
                <div className={styles.contactItems}>
                  <div className={styles.contactItem}>
                    <span>📍</span>
                    <div><strong>Location</strong><br />Pakistan</div>
                  </div>
                  <div className={styles.contactItem}>
                    <span>✉️</span>
                    <div><strong>Email</strong><br /><a href="mailto:info@eltechsolutions.io">info@eltechsolutions.io</a></div>
                  </div>
                  <div className={styles.contactItem}>
                    <span>💼</span>
                    <div><strong>LinkedIn</strong><br /><a href="https://linkedin.com" target="_blank" rel="noreferrer">Connect on LinkedIn</a></div>
                  </div>
                </div>
              </div>

              <div className={styles.infoNote}>
                <p>We review all enquiries and respond within 1–2 business days. Initial discussions are complimentary and without obligation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
