import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Process Automation',
  description: 'Digitize approvals, tasks, notifications, documents and reporting to improve visibility, consistency and operational control.',
};

export default function AutomationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: '#3eb6e8' }}>Business Process Automation</div>
          <h1>Turn repetitive work into connected digital workflows</h1>
          <p>Manual processes often depend on repeated data entry, individual follow-up and information scattered across emails, messages and spreadsheets.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 64 }}>
            <div>
              <div className="section-label">What We Automate</div>
              <h2 className="section-title">Processes that may be automated</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Customer and supplier onboarding</li>
                <li>Procurement requests and approvals</li>
                <li>Quotation and order workflows</li>
                <li>Task assignment and escalation</li>
                <li>Document preparation and routing</li>
                <li>Notifications and deadline reminders</li>
                <li>Internal service requests</li>
                <li>Performance and status reporting</li>
                <li>Data transfer between suitable systems</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Identify an Automation Opportunity</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '⏱️', title: 'Reduced Repetition', desc: 'Less time spent re-entering, copying and manually consolidating information.' },
                { icon: '👁️', title: 'Improved Visibility', desc: 'Clearer status, responsibility and pending actions across your operations.' },
                { icon: '🔒', title: 'Stronger Control', desc: 'Defined roles, approvals and traceable activity throughout your processes.' },
                { icon: '📈', title: 'Scalable Operations', desc: 'Higher activity volumes can be managed with greater structure and consistency.' },
              ].map(o => (
                <div key={o.title} style={{ display: 'flex', gap: 20, padding: '20px', background: 'var(--off-white)', borderRadius: 12, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.8rem' }}>{o.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{o.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to reduce repetition and improve visibility?</h2>
            <p>Let us identify the most impactful automation opportunities in your business processes.</p>
            <Link href="/contact" className="btn btn-white">Identify an Automation Opportunity</Link>
          </div>
        </div>
      </section>
    </>
  );
}
