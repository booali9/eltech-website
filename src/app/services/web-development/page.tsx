import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design and Development',
  description: 'Responsive corporate websites, e-commerce experiences and web portals designed for usability, performance and business results.',
};

export default function WebDevPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: '#3eb6e8' }}>Web Development</div>
          <h1>Web experiences that represent your business professionally</h1>
          <p>A website should explain the business clearly, guide visitors toward the right action and perform reliably across devices.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64 }}>
            <div>
              <div className="section-label">Website Services</div>
              <h2 className="section-title">What we build</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Corporate and service websites</li>
                <li>Product and campaign landing pages</li>
                <li>E-commerce websites</li>
                <li>Customer and supplier portals</li>
                <li>Content-management implementation</li>
                <li>Website redesign and modernization</li>
                <li>Performance and mobile-responsiveness improvement</li>
                <li>Ongoing content and technical maintenance</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Plan Your Website</Link>
            </div>
            <div>
              <div className="section-label">What We Consider</div>
              <h2 className="section-title">Our web design approach</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { t: 'Business Objective', d: 'We start with your goals and audience, not generic templates.' },
                  { t: 'Information Structure', d: 'Clear user journeys and information architecture guide visitors effectively.' },
                  { t: 'Brand Consistency', d: 'Visual hierarchy aligned with your brand identity and positioning.' },
                  { t: 'Performance', d: 'Fast load times, mobile responsiveness and browser compatibility across all devices.' },
                  { t: 'Analytics & Forms', d: 'Enquiry forms, analytics and integrations configured for your needs.' },
                ].map(c => (
                  <div key={c.t} style={{ padding: '16px 20px', borderLeft: '3px solid var(--accent)', background: 'var(--off-white)', borderRadius: '0 12px 12px 0' }}>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{c.t}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{c.d}</div>
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
            <h2>Ready to build or improve your website?</h2>
            <p>Tell us your objectives and we will suggest the most appropriate approach.</p>
            <Link href="/contact" className="btn btn-white">Plan Your Website</Link>
          </div>
        </div>
      </section>
    </>
  );
}
