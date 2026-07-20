import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Code2, 
  BrainCircuit, 
  Workflow, 
  Globe, 
  Smartphone, 
  Layout, 
  Cloud,
  ShieldCheck,
  Wrench,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software, AI, Automation & Digital Services | Eltech',
  description: 'Explore custom software, AI, automation, web, mobile, UI/UX, cloud integration, quality assurance and support services.',
};

const services = [
  {
    icon: <Code2 size={28} />, title: 'Custom Software Development', text: 'Web-based platforms, business applications, portals and operational systems developed according to defined requirements.',
    href: '/services/custom-software',
    bullets: ['Business management systems', 'Procurement & RFQ platforms', 'Customer & supplier portals', 'Workflow & approval apps'],
  },
  {
    icon: <BrainCircuit size={28} />, title: 'AI & Data Solutions', text: 'AI-enabled tools, analytics and data workflows designed around clear use cases, available information and responsible human oversight.',
    href: '/services/ai-data',
    bullets: ['Document assistance & search', 'Data classification & extraction', 'Workflow recommendations', 'Analytics & insights'],
  },
  {
    icon: <Workflow size={28} />, title: 'Business Process Automation', text: 'Digital workflows that connect tasks, approvals, reminders, documents and management reporting.',
    href: '/services/automation',
    bullets: ['Approval & notification flows', 'Document routing & preparation', 'Task assignment & escalation', 'Status & progress reporting'],
  },
  {
    icon: <Globe size={28} />, title: 'Web Development', text: 'Corporate websites, landing pages, e-commerce experiences and customer or supplier portals.',
    href: '/services/web-development',
    bullets: ['Corporate & service websites', 'E-commerce platforms', 'Customer portals', 'Website redesign & modernization'],
  },
  {
    icon: <Smartphone size={28} />, title: 'Mobile Application Development', text: 'Android, iOS and cross-platform applications for external users and internal teams.',
    href: '/services/mobile-apps',
    bullets: ['Customer & membership apps', 'Field-force & inspection apps', 'Employee workflow apps', 'Mobile dashboards'],
  },
  {
    icon: <Layout size={28} />, title: 'UI/UX & Digital Design', text: 'Research, user journeys, wireframes, prototypes, interfaces and visual communication.',
    href: '/services/ui-ux',
    bullets: ['User journeys & wireframes', 'Clickable prototypes', 'Interface & dashboard design', 'Design systems & branding'],
  },
  {
    icon: <Cloud size={28} />, title: 'Cloud & Systems Integration', text: 'Deployment environments, APIs, databases and connections between appropriate business systems.',
    href: '/services',
    bullets: ['Cloud deployment', 'API development & integration', 'Database planning', 'Migration planning'],
  },
  {
    icon: <ShieldCheck size={28} />, title: 'Quality Assurance', text: 'Functional, usability, compatibility and regression testing throughout delivery.',
    href: '/services',
    bullets: ['Functional testing', 'Usability review', 'Browser & device testing', 'User acceptance support'],
  },
  {
    icon: <Wrench size={28} />, title: 'Maintenance & Support', text: 'Troubleshooting, updates, monitoring, improvements and agreed support after launch.',
    href: '/services',
    bullets: ['Technical troubleshooting', 'Software & dependency updates', 'Performance monitoring', 'Feature enhancements'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container">
          <div className="section-label">Services</div>
          <h1>Technology services for products, processes and growth</h1>
          <p>
            Eltech Solutions provides connected capabilities across strategy, design, development, automation, testing and support. Clients may engage us for a complete solution or for selected services that complement their internal team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map(s => (
              <div key={s.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="card-icon">{s.icon}</div>
                <div className="card-title">{s.title}</div>
                <p className="card-text" style={{ marginBottom: '24px' }}>{s.text}</p>
                <ul className="check-list" style={{ marginBottom: '32px' }}>
                  {s.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <div style={{ marginTop: 'auto' }}>
                  <Link href={s.href} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.95rem', fontWeight: 600, color: 'var(--secondary)' }}>
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--text)', maxWidth: 720, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Not sure which service applies? Describe the business requirement and we will help identify the most appropriate starting point.
          </p>
          <Link href="/contact" className="btn btn-primary">Discuss Your Requirement</Link>
        </div>
      </section>
    </>
  );
}
