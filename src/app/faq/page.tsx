"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import styles from './faq.module.css';

const categories = [
  {
    label: 'Company & Location',
    faqs: [
      {
        q: 'Where is Eltech Solutions based?',
        a: 'Eltech Solutions is registered and based in Pakistan and is structured to provide software and digital services to domestic and international clients.'
      },
      {
        q: 'When was the company established?',
        a: 'Eltech Solutions was established in 2025.'
      },
      {
        q: 'Do you work with international clients?',
        a: 'Yes. We welcome enquiries from North America, the United Kingdom, Europe, the Middle East, the Far East, Australia, Africa and other international markets.'
      },
    ]
  },
  {
    label: 'Services & Capabilities',
    faqs: [
      {
        q: 'What services do you provide?',
        a: 'Our services include custom software, AI-enabled and data solutions, business automation, web and mobile development, UI/UX and digital design, systems integration, quality assurance, maintenance and dedicated technical resources.'
      },
      {
        q: 'Can you develop software around our existing process?',
        a: 'Yes. We begin by studying the users, workflow, information and intended outcome before proposing a customized solution.'
      },
      {
        q: 'Do you offer artificial-intelligence services?',
        a: 'We assess focused AI use cases such as document assistance, information extraction, analytics and AI-enabled product features. Feasibility depends on the data, required accuracy, risk and intended human oversight.'
      },
      {
        q: 'Can you improve an existing application?',
        a: 'Yes, subject to a technical assessment of the current system, source code, documentation, architecture, hosting and access rights.'
      },
      {
        q: 'Can you work with our internal technology team?',
        a: 'Yes. We can provide a defined project team, selected specialist support or dedicated resources under an agreed working model.'
      },
    ]
  },
  {
    label: 'Contracts & Pricing',
    faqs: [
      {
        q: 'Do you sign an NDA?',
        a: 'Yes. A mutual or client-provided NDA can be reviewed before confidential information is shared.'
      },
      {
        q: 'Who owns the completed software?',
        a: 'Ownership, licensing and intellectual-property transfer are defined in the applicable agreement. Where full ownership is required, agreed deliverables can be transferred after completion of the relevant commercial obligations.'
      },
      {
        q: 'How do you price projects?',
        a: 'Pricing depends on scope, complexity, timeline, integrations, resource requirements and support expectations. We provide a structured proposal after understanding the requirement.'
      },
      {
        q: 'Do you offer fixed-price projects?',
        a: 'Yes, when the scope and acceptance criteria can be defined with sufficient clarity. Evolving projects may be better suited to milestone, time-and-material or dedicated-resource arrangements.'
      },
    ]
  },
  {
    label: 'Project Delivery',
    faqs: [
      {
        q: 'How do you manage projects remotely?',
        a: 'We use online meetings, written requirements, defined responsibilities, progress demonstrations, documented feedback and milestone approvals.'
      },
      {
        q: 'How long does development take?',
        a: 'The timeline depends on scope and complexity. A preliminary estimate is provided after discovery, and the agreed timeline is included in the project plan.'
      },
      {
        q: 'Will we see progress during development?',
        a: 'Yes. Appropriate projects are divided into stages with demonstrations, reviews and documented feedback.'
      },
      {
        q: 'How are changes handled?',
        a: 'Changes that affect scope, cost or timeline are documented and agreed before implementation.'
      },
      {
        q: 'Do you test the software?',
        a: 'Yes. Testing requirements are defined according to the project and may include functional, interface, compatibility, regression and user-acceptance support.'
      },
    ]
  },
  {
    label: 'After Launch',
    faqs: [
      {
        q: 'Do you provide support after launch?',
        a: 'Yes. Support, maintenance and future enhancements can be provided under the original scope or a separate support arrangement.'
      },
      {
        q: 'Can you host the application?',
        a: 'Cloud deployment and hosting support can be included according to the selected platform, security requirements and commercial arrangement.'
      },
      {
        q: 'How do we begin?',
        a: 'Contact us with a short description of your requirement. We will arrange an initial discussion and recommend the appropriate next step.'
      },
    ]
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: 'var(--white)',
        border: `1px solid ${open ? 'var(--secondary)' : 'var(--border)'}`,
        borderRadius: 10,
        marginBottom: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: open ? '0 4px 16px rgba(37,99,235,0.10)' : 'var(--shadow-sm)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 28px', gap: 16 }}>
        <span style={{ fontSize: '1.05rem', fontWeight: 600, color: open ? 'var(--secondary)' : 'var(--primary)', letterSpacing: '-0.01em' }}>{q}</span>
        <ChevronDown
          size={20}
          style={{
            color: open ? 'var(--secondary)' : 'var(--gray-400)',
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease'
          }}
        />
      </div>
      {open && (
        <div style={{ padding: '0 28px 24px', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.75 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2400)' }}
      >
        <div className="container">
          <div className="section-label">FAQ</div>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about working with Eltech Solutions — from first enquiry to project launch and beyond.</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>

            {/* Sidebar Category Nav */}
            <div className={styles.sidebar}>
              <div className={styles.navBox}>
                {categories.map((cat, i) => (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(i)}
                    className={`${styles.navBtn} ${activeCategory === i ? styles.active : ''}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div>
              <div style={{ marginBottom: 32 }}>
                <div className="section-label">{categories[activeCategory].label}</div>
                <h2 style={{ fontSize: '2.25rem', marginBottom: 0 }}>Common Questions</h2>
              </div>
              {categories[activeCategory].faqs.map(faq => (
                <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="cta-banner">
            <h2>Still have questions?</h2>
            <p>Tell us what you want to improve or create. We will begin with a structured conversation to understand the requirement and recommend the appropriate next step.</p>
            <Link href="/contact" className="btn btn-white">Contact Eltech Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
