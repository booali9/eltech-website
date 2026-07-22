import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud, Integration and Cybersecurity Services',
  description: 'Cloud deployment, API development, systems integration, security assessment and technical infrastructure support.',
};

export default function CloudIntegrationPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: '#3eb6e8' }}>Cloud, Integration & Cybersecurity</div>
          <h1>Connect systems and strengthen the technology foundation</h1>
          <p>Modern digital products depend on reliable hosting, secure access, well-structured data and appropriate connections between systems.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 64 }}>
            <div>
              <div className="section-label">Cloud & Integration</div>
              <h2 className="section-title">Infrastructure and connectivity</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Cloud-ready application deployment</li>
                <li>Database planning and implementation</li>
                <li>API development and integration</li>
                <li>Connection with selected third-party services</li>
                <li>Authentication and role-based access</li>
                <li>Backup, monitoring and environment configuration</li>
                <li>Migration planning for suitable applications</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Discuss Your Technical Environment</Link>
            </div>
            <div>
              <div className="section-label">Security Approach</div>
              <h2 className="section-title">Built-in security practices</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { t: 'Requirements Identified Early', d: 'Security requirements defined during scope definition.' },
                  { t: 'Role-Based Access', d: 'Access provided according to user roles and responsibilities.' },
                  { t: 'Credential Protection', d: 'Sensitive credentials kept out of public code and documentation.' },
                  { t: 'Encryption & Backups', d: 'Appropriate use of encryption, backups and activity logging.' },
                  { t: 'Testing & Reviews', d: 'Security testing requirements defined according to project risk.' },
                ].map(s => (
                  <div key={s.t} style={{ padding: '16px 20px', borderLeft: '3px solid var(--accent)', background: 'var(--off-white)', borderRadius: '0 12px 12px 0' }}>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{s.t}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{s.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
          <div className="section-label">Important Note</div>
          <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Platform-specific capabilities</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>
            Specific cloud platforms, compliance requirements and cybersecurity services are confirmed based on qualified resources and delivery partners in place for each engagement.
          </p>
          <Link href="/contact" className="btn btn-primary">Discuss Your Infrastructure Needs</Link>
        </div>
      </section>
    </>
  );
}
