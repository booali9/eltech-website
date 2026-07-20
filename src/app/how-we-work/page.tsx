import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Search, 
  FileText, 
  PenTool, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  Wrench 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How We Work | A Clear Path from Requirement to Launch',
  description: 'Learn about our structured delivery process — from discovery and definition to development, validation and long-term support.',
};

const stages = [
  { n: '01', title: 'Discover', desc: 'We discuss the business objective, users, current process, constraints, priorities and desired timeline.', icon: <Search size={24} /> },
  { n: '02', title: 'Define', desc: 'We document the proposed scope, deliverables, responsibilities, assumptions, milestones and acceptance criteria.', icon: <FileText size={24} /> },
  { n: '03', title: 'Design', desc: 'We prepare workflows, wireframes, prototypes or visual designs as required and obtain approval before major development.', icon: <PenTool size={24} /> },
  { n: '04', title: 'Develop', desc: 'The solution is developed in planned stages with progress demonstrations and documented feedback.', icon: <Code2 size={24} /> },
  { n: '05', title: 'Validate', desc: 'We test the solution, support user acceptance and resolve agreed defects before final approval.', icon: <CheckCircle2 size={24} /> },
  { n: '06', title: 'Deploy', desc: 'The approved solution is released to the agreed environment, with relevant configuration and handover.', icon: <Rocket size={24} /> },
  { n: '07', title: 'Support', desc: 'Post-launch support, maintenance and future enhancements are provided under the agreed arrangement.', icon: <Wrench size={24} /> },
];

const models = [
  { title: 'Fixed Scope', best: 'Clearly defined projects', how: 'Deliverables, milestones, timeline and commercial value are agreed before development.' },
  { title: 'Milestone Based', best: 'Projects requiring staged acceptance', how: 'Work and payments are divided into defined review and acceptance points.' },
  { title: 'Time & Material', best: 'Evolving or exploratory requirements', how: 'The client pays for agreed resources and time used, with regular reporting.' },
  { title: 'Monthly Retainer', best: 'Ongoing support or improvement', how: 'A defined monthly capacity or service scope is reserved for the client.' },
  { title: 'Dedicated Resources', best: 'Additional team capability', how: 'Selected resources work under agreed hours, responsibilities and supervision.' },
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container">
          <div className="section-label">How We Work</div>
          <h1>A clear path from requirement to launch</h1>
          <p>A structured process protects both the client and the delivery team. It helps convert ideas into defined responsibilities, review points and measurable deliverables.</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Delivery Process</div>
            <h2 className="section-title">Seven stages of structured delivery</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 840, margin: '0 auto' }}>
            {stages.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, alignSelf: 'stretch' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', border: '1px solid var(--border)', flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  {i < stages.length - 1 && <div style={{ width: 2, flexGrow: 1, background: 'var(--gray-200)', margin: '16px 0' }} />}
                </div>
                <div style={{ paddingBottom: i < stages.length - 1 ? 48 : 0, paddingTop: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gray-400)' }}>{s.n}</span>
                    <h3 style={{ fontSize: '1.4rem' }}>{s.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Engagement Models</div>
            <h2 className="section-title">Flexible commercial models for different requirements</h2>
          </div>
          <div className="grid-3">
            {models.map(m => (
              <div key={m.title} className="card">
                <div className="card-title">{m.title}</div>
                <div style={{ fontSize: '0.85rem', background: 'var(--off-white)', color: 'var(--secondary)', padding: '6px 16px', borderRadius: 100, fontWeight: 600, display: 'inline-block', marginBottom: 20, border: '1px solid var(--border)' }}>Best for: {m.best}</div>
                <p className="card-text">{m.how}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 56, color: 'var(--text-muted)', maxWidth: 720, margin: '56px auto 0', fontSize: '1.1rem' }}>
            The final engagement model is selected after considering scope clarity, project risk, required flexibility and the client&apos;s preferred working arrangement.
          </p>
        </div>
      </section>

      {/* Change Management */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label">Change Management</div>
            <h2 className="section-title">How we handle changing requirements</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: '1.15rem', lineHeight: 1.7 }}>
              Technology requirements may evolve during a project. When a requested change affects scope, cost or timeline, we document the change and obtain agreement before incorporating it into the delivery plan.
            </p>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to begin a structured project engagement?</h2>
            <p>Tell us your requirement and we will start with a discovery conversation to align on scope and approach.</p>
            <Link href="/contact" className="btn btn-white">Start the Conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
