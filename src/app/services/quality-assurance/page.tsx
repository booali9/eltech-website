import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Assurance, Maintenance and Technical Support',
  description: 'Comprehensive testing, ongoing maintenance, technical support and continuous improvement after launch.',
};

export default function QualityAssurancePage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: '#3eb6e8' }}>Quality Assurance & Support</div>
          <h1>Support that continues beyond development</h1>
          <p>A digital product must remain reliable after launch. We provide testing, maintenance and support arrangements based on the application's importance and usage.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64 }}>
            <div>
              <div className="section-label">Quality Assurance</div>
              <h2 className="section-title">Testing before launch</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Functional testing against agreed requirements</li>
                <li>User-interface and usability review</li>
                <li>Browser and device compatibility testing</li>
                <li>Regression testing after changes</li>
                <li>Defect recording, prioritization and retesting</li>
                <li>User-acceptance testing support</li>
                <li>Pre-launch readiness review</li>
              </ul>
            </div>
            <div>
              <div className="section-label">Maintenance & Support</div>
              <h2 className="section-title">Ongoing reliability</h2>
              <ul className="check-list">
                <li>Technical troubleshooting and bug correction</li>
                <li>Software and dependency updates</li>
                <li>Performance monitoring and improvement</li>
                <li>Backup and recovery procedures</li>
                <li>Content and configuration updates</li>
                <li>Feature enhancements and change requests</li>
                <li>User guidance and periodic reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container">
          <div style={{ background: 'var(--white)', padding: 48, borderRadius: 16, border: '1px solid var(--border)', maxWidth: 840, margin: '0 auto' }}>
            <h3 style={{ marginBottom: 20, textAlign: 'center' }}>Support Arrangements</h3>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: 40, fontSize: '1.1rem' }}>
              Support scope, working hours, response targets and exclusions are documented in the applicable service agreement.
            </p>
            <div className="grid-3" style={{ gap: 24 }}>
              {['Defined Response Times', 'Clear Scope of Coverage', 'Regular Communication', 'Documented Resolutions', 'Proactive Monitoring', 'Continuous Improvement'].map(item => (
                <div key={item} style={{ textAlign: 'center', padding: '20px 16px', background: 'var(--off-white)', borderRadius: 10 }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary)' }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Need reliable testing or ongoing support?</h2>
            <p>Tell us about your application and support requirements. We will recommend the most appropriate arrangement.</p>
            <Link href="/contact" className="btn btn-white">Discuss Support Requirements</Link>
          </div>
        </div>
      </section>
    </>
  );
}
