import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dedicated Technical Resources and Team Augmentation',
  description: 'Flexible technical capacity for projects, ongoing development, specialist support and team augmentation.',
};

export default function DedicatedResourcesPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: '#3eb6e8' }}>Dedicated Technical Resources</div>
          <h1>Extend your technology capacity with flexible resources</h1>
          <p>Companies may require additional capability for a defined project, development phase or ongoing workload. Eltech Solutions can provide selected technical resources under a structured remote engagement.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64 }}>
            <div>
              <div className="section-label">Available Roles</div>
              <h2 className="section-title">Technical capacity options</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Software and web developers</li>
                <li>Mobile application developers</li>
                <li>UI/UX and graphic designers</li>
                <li>Quality-assurance professionals</li>
                <li>Business analysts and project coordinators</li>
                <li>Technical support resources</li>
              </ul>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Resource qualifications, availability, working hours, supervision arrangements and replacement terms are confirmed before engagement.
              </p>
            </div>
            <div>
              <div className="section-label">Engagement Options</div>
              <h2 className="section-title">How resources can be engaged</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { title: 'Full Project Team', desc: 'Complete team for a defined project scope and timeline.' },
                  { title: 'Individual Dedicated Resource', desc: 'Single specialist working exclusively on your requirements.' },
                  { title: 'Part-Time Specialist Support', desc: 'Defined hours per week for ongoing or periodic needs.' },
                  { title: 'Short-Term Project Capacity', desc: 'Additional capacity for a specific phase or deadline.' },
                  { title: 'Ongoing Monthly Arrangement', desc: 'Reserved capacity for continuous development or support.' },
                ].map(opt => (
                  <div key={opt.title} style={{ padding: '20px 24px', background: 'var(--off-white)', borderRadius: 12, border: '1px solid var(--border)' }}>
                    <h4 style={{ marginBottom: 8, fontSize: '1.1rem' }}>{opt.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
          <div className="section-label">Important Statement</div>
          <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Resource availability and terms</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Resource qualifications, availability, working hours, supervision arrangements and replacement terms are confirmed before engagement, subject to availability and the required skills.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Need to expand your technical capacity?</h2>
            <p>Tell us about your project requirements, timeline and the type of resources you need. We will confirm availability and propose an appropriate arrangement.</p>
            <Link href="/contact" className="btn btn-white">Request Technical Capacity</Link>
          </div>
        </div>
      </section>
    </>
  );
}
