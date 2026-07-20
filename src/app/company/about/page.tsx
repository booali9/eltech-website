import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { 
  Target, 
  Rocket, 
  Shield, 
  Eye, 
  Lock, 
  ThumbsUp, 
  CheckCircle, 
  HeartHandshake 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Eltech Solutions | Technology Partner from Pakistan',
  description: 'Learn about Eltech Solutions, our practical approach to software development, business automation and international digital service delivery.',
};

const values = [
  { name: 'Integrity', desc: 'We communicate honestly about scope, capability, progress and limitations.', icon: <Shield size={28} /> },
  { name: 'Clarity', desc: 'We make requirements, responsibilities and decisions easier to understand.', icon: <Eye size={28} /> },
  { name: 'Confidentiality', desc: 'We treat client information, processes and intellectual property with professional care.', icon: <Lock size={28} /> },
  { name: 'Practicality', desc: 'We recommend solutions that suit the business rather than adding unnecessary complexity.', icon: <ThumbsUp size={28} /> },
  { name: 'Quality', desc: 'We review functionality, usability and reliability before asking clients to accept deliverables.', icon: <CheckCircle size={28} /> },
  { name: 'Partnership', desc: 'We aim to build productive long-term relationships rather than complete isolated transactions.', icon: <HeartHandshake size={28} /> },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container">
          <div className="section-label">About Us</div>
          <h1>A practical technology partner from Pakistan</h1>
          <p>
            Eltech Solutions is a software and digital services company established in Pakistan in 2025. We help businesses design, develop and improve digital products, operational systems and automated workflows for local and international use.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '80px', alignItems: 'center' }}>
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Built on a straightforward belief</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: '1.125rem' }}>
                Eltech Solutions was established with a straightforward belief: technology should be designed around the business it is intended to serve. Many organizations have valuable ideas and experienced teams, but their work is slowed by disconnected information, repetitive processes, unsuitable software or limited technical capacity.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: '1.125rem' }}>
                We aim to close that gap through clear analysis, purposeful design and professionally managed development.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
                As a newly established company, we are building our organization around long-term relationships, responsible growth and internationally acceptable delivery practices. Our focus is not to appear larger than we are; it is to be responsive, organized and dependable in every engagement we accept.
              </p>
            </div>
            <div style={{ position: 'relative', height: '540px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', background: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200) center/cover' }}>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="grid-2" style={{ gap: '40px' }}>
            <div className="card" style={{ borderTop: '4px solid var(--primary)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'var(--off-white)', width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: 32 }}>
                <Target size={32} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '20px' }}>Vision</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                To become a trusted international provider and exporter of software, artificial intelligence, digital design and technology services from Pakistan.
              </p>
            </div>
            <div className="card" style={{ borderTop: '4px solid var(--secondary)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'var(--off-white)', width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', marginBottom: 32 }}>
                <Rocket size={32} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '20px' }}>Mission</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                To develop practical and commercially valuable digital solutions that help our clients improve efficiency, strengthen customer engagement and grow with greater control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Our Values</div>
            <h2 className="section-title">What guides every engagement</h2>
          </div>
          <div className="grid-3">
            {values.map(v => (
              <div key={v.name} className="card">
                <div style={{ color: 'var(--secondary)', marginBottom: 24 }}>{v.icon}</div>
                <h3 style={{ marginBottom: '16px', color: 'var(--primary)', fontSize: '1.25rem' }}>{v.name}</h3>
                <p className="card-text">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="section section-bg-dark">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label" style={{ color: 'var(--accent)' }}>Company Facts</div>
            <h2 className="section-title">About Eltech Solutions</h2>
          </div>
          <div className="grid-4" style={{ gap: '32px', textAlign: 'center' }}>
            {[
              { label: 'Established', value: '2025' },
              { label: 'Legal Structure', value: 'AOP' },
              { label: 'Registered In', value: 'Pakistan' },
              { label: 'Delivery Model', value: 'Remote International' },
            ].map(f => (
              <div key={f.label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '40px 24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>{f.value}</div>
                <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Looking for a technology partner who understands the business requirement?</h2>
            <p>We are building our reputation one well-managed engagement at a time. Let us begin with a conversation.</p>
            <Link href="/contact" className="btn btn-white">Speak with Eltech</Link>
          </div>
        </div>
      </section>
    </>
  );
}
