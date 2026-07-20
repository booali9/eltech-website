import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Building2, 
  Factory, 
  Package, 
  Settings, 
  Truck, 
  ShoppingCart, 
  Hotel, 
  Rocket 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Technology adapted to the way industries operate — construction, logistics, retail, manufacturing, procurement and more.',
};

const industries = [
  { icon: <Building2 size={32} />, name: 'Construction & Infrastructure', desc: 'Project information, procurement, site coordination, documentation, reporting and distributed teams.' },
  { icon: <Factory size={32} />, name: 'Industrial Trading & Distribution', desc: 'Enquiries, quotations, suppliers, inventory, orders, deliveries and customer communication.' },
  { icon: <Package size={32} />, name: 'Procurement & Supply Chain', desc: 'RFQs, supplier onboarding, comparisons, approvals, purchase decisions and performance visibility.' },
  { icon: <Settings size={32} />, name: 'Manufacturing & Engineering', desc: 'Workflows, materials, quality records, maintenance, production-support information and approvals.' },
  { icon: <Truck size={32} />, name: 'Logistics & Transportation', desc: 'Requests, movement tracking, documents, schedules, capacity and status communication.' },
  { icon: <ShoppingCart size={32} />, name: 'Retail & E-commerce', desc: 'Catalogues, orders, customers, promotions, fulfilment and digital engagement.' },
  { icon: <Hotel size={32} />, name: 'Hospitality & Professional Services', desc: 'Bookings, service requests, customer communication, internal tasks and reporting.' },
  { icon: <Rocket size={32} />, name: 'Startups & Emerging Businesses', desc: 'Product discovery, prototypes, minimum viable products and scalable technology foundations.' },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container">
          <div className="section-label">Industries</div>
          <h1>Technology adapted to the way industries operate</h1>
          <p>Different industries have different users, terminology, approvals, documents and operational risks. We study these realities before recommending a solution.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Our Approach</div>
            <h2 className="section-title">Relevant to organizations managing complex coordination</h2>
            <p className="section-subtitle">Our approach is especially relevant to organizations managing complex coordination between customers, suppliers, employees, projects and transactions.</p>
          </div>
          <div className="grid-2">
            {industries.map(ind => (
              <div key={ind.name} className="card" style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--secondary)', flexShrink: 0, background: 'var(--off-white)', padding: 16, borderRadius: 12 }}>
                  {ind.icon}
                </div>
                <div>
                  <h3 style={{ marginBottom: 12, fontSize: '1.25rem', color: 'var(--primary)' }}>{ind.name}</h3>
                  <p className="card-text">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Have an industry-specific requirement?</h2>
            <p>Tell us about your business and we will identify the most appropriate technology solution for your sector.</p>
            <Link href="/contact" className="btn btn-white">Discuss Your Requirement</Link>
          </div>
        </div>
      </section>
    </>
  );
}
