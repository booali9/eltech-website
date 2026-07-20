import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Application Development',
  description: 'Android, iOS and cross-platform mobile applications for customers, suppliers, employees and field teams.',
};

export default function MobileAppsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: '#3eb6e8' }}>Mobile Application Development</div>
          <h1>Mobile applications built for practical use</h1>
          <p>We develop mobile applications for customers, suppliers, employees and field teams. Each project begins by defining what users need to accomplish on mobile.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64 }}>
            <div>
              <div className="section-label">Application Types</div>
              <h2 className="section-title">What we build</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Customer and membership applications</li>
                <li>Supplier and vendor applications</li>
                <li>Ordering and service applications</li>
                <li>Field-force and inspection applications</li>
                <li>Employee workflow applications</li>
                <li>Mobile dashboards and reporting tools</li>
                <li>Extensions of existing web platforms</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Discuss a Mobile Application</Link>
            </div>
            <div>
              <div className="section-label">Delivery Considerations</div>
              <h2 className="section-title">How we plan your app</h2>
              <div className="grid-2" style={{ gap: 16 }}>
                {['Android, iOS or Cross-platform', 'User authentication & permissions', 'Offline or low-connectivity', 'Device features & notifications', 'Backend & API integration', 'Security & data handling', 'Store submission', 'Post-launch updates'].map(c => (
                  <div key={c} style={{ padding: '16px', background: 'var(--off-white)', borderRadius: 10, fontSize: '0.9rem', fontWeight: 500, textAlign: 'center' }}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Have a mobile app idea or need to extend your platform?</h2>
            <p>Tell us your user needs and we will help define the right mobile solution.</p>
            <Link href="/contact" className="btn btn-white">Discuss a Mobile Application</Link>
          </div>
        </div>
      </section>
    </>
  );
}
