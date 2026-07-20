import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development',
  description: 'Purpose-built business applications, platforms, portals and workflows designed around your operations and users.',
};

export default function CustomSoftwarePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: '#3eb6e8' }}>Custom Software Development</div>
          <h1>Custom software designed around your operations</h1>
          <p>When standard software cannot adequately support a specialized workflow, reporting need or customer experience, a custom solution can provide greater alignment and control.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '80px' }}>
            <div>
              <div className="section-label">Solutions We Build</div>
              <h2 className="section-title">What we can develop for you</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Business management systems</li>
                <li>Procurement and quotation platforms</li>
                <li>Customer and supplier portals</li>
                <li>Order, inventory and service-management systems</li>
                <li>Approval and document workflows</li>
                <li>Dashboards and management reporting</li>
                <li>Employee and field-force applications</li>
                <li>Industry-specific operational platforms</li>
                <li>Existing system improvement and modernization</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Discuss a Custom Solution</Link>
            </div>
            <div style={{ position: 'relative', height: '460px', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <Image src="/services_software.png" alt="Custom software" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Our Approach</div>
            <h2 className="section-title">A clear path from requirement to launch</h2>
          </div>
          <div className="grid-3">
            {[
              { n: '01', t: 'Discover', d: 'Understand the business process and identify the core problem.' },
              { n: '02', t: 'Define', d: 'Define user roles, workflows, information requirements and boundaries.' },
              { n: '03', t: 'Design', d: 'Prepare the proposed scope, milestones and acceptance criteria.' },
              { n: '04', t: 'Develop', d: 'Develop and review the solution in planned stages.' },
              { n: '05', t: 'Test', d: 'Test the solution, support user acceptance and resolve agreed defects.' },
              { n: '06', t: 'Deploy & Support', d: 'Deploy, provide handover, ongoing support and improvements.' },
            ].map(s => (
              <div key={s.n} className="card">
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--gray-100)', fontFamily: 'var(--font-heading)', marginBottom: 8 }}>{s.n}</div>
                <h3 style={{ marginBottom: 10 }}>{s.t}</h3>
                <p className="card-text">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Commercial Value</div>
            <h2 className="section-title">Why custom software matters</h2>
          </div>
          <div className="grid-2">
            {[
              'A better fit with actual business processes',
              'Reduced dependence on disconnected files and messages',
              'Improved activity tracking and management visibility',
              'More consistent execution of approvals and controls',
              'A foundation that can be extended as requirements grow',
              'Ownership and control over your core business logic',
            ].map(v => (
              <div key={v} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px', background: 'var(--off-white)', borderRadius: '12px' }}>
                <span style={{ fontSize: '1.3rem', color: 'var(--accent)' }}>✓</span>
                <p style={{ fontWeight: 500 }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Your process is specific. Your software can be too.</h2>
            <p>Tell us what you need to build. We begin with a structured discovery to understand the requirement.</p>
            <Link href="/contact" className="btn btn-white">Discuss a Custom Solution</Link>
          </div>
        </div>
      </section>
    </>
  );
}
