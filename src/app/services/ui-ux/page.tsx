import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI/UX and Digital Design',
  description: 'User journeys, wireframes, prototypes and interface design that make web and mobile products easier to understand and use.',
};

export default function UIUXPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: '#3eb6e8' }}>UI/UX & Digital Design</div>
          <h1>Design that makes technology easier to understand</h1>
          <p>Good design reduces confusion, guides users toward the correct action and supports trust in the product.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64 }}>
            <div>
              <div className="section-label">UI/UX Services</div>
              <h2 className="section-title">User-centred design</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>User and stakeholder discussions</li>
                <li>User journeys and information architecture</li>
                <li>Process and screen flows</li>
                <li>Wireframes and clickable prototypes</li>
                <li>Web and mobile interface design</li>
                <li>Dashboard and data-display design</li>
                <li>Design systems and reusable components</li>
                <li>Usability review and interface improvement</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Design a Better Experience</Link>
            </div>
            <div>
              <div className="section-label">Digital Design Services</div>
              <h2 className="section-title">Visual communication</h2>
              <ul className="check-list">
                <li>Brand-supporting digital graphics</li>
                <li>Company profiles and presentations</li>
                <li>Brochures, catalogues and marketing materials</li>
                <li>Social-media and campaign artwork</li>
                <li>Product illustrations and digital assets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to improve your product&apos;s design?</h2>
            <p>Tell us about your current product or idea and we will recommend the most appropriate design starting point.</p>
            <Link href="/contact" className="btn btn-white">Design a Better Experience</Link>
          </div>
        </div>
      </section>
    </>
  );
}
