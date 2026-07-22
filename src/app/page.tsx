import Link from 'next/link';
import styles from './page.module.css';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { 
  ArrowRight, 
  Code2, 
  BrainCircuit, 
  Workflow, 
  Globe, 
  Smartphone, 
  Layout, 
  Layers,
  CheckCircle2,
  Users,
  Target,
  MessageSquare,
  ShieldCheck,
  Building2,
  Factory,
  Package,
  Truck,
  ShoppingCart,
  Hotel,
  Rocket,
  ArrowDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eltech Solutions | Custom Software, AI & Digital Services',
  description: 'Pakistan-based custom software, AI, automation, web, mobile and digital design services for businesses in international markets.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Dark gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,20,42,0.88) 0%, rgba(10,20,42,0.65) 100%)', zIndex: 1 }} />
        <div className={`container ${styles.heroContent}`} style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className={styles.eyebrow} style={{ color: 'var(--accent)', letterSpacing: '2.5px', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, marginBottom: 24 }}>SOFTWARE, AI & DIGITAL SERVICES FROM PAKISTAN</div>
            <h1 className={styles.heroTitle} style={{ color: 'var(--white)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 28 }}>Technology Designed<br/>Around Your Business</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={styles.heroSub} style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.25rem', maxWidth: 680, lineHeight: 1.7, marginBottom: 40 }}>
              Eltech Solutions develops custom software, intelligent automation and digital experiences for businesses seeking practical, scalable and professionally managed technology solutions.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>Discuss Your Project</Link>
              <Link href="/services" className="btn btn-outline-white" style={{ padding: '16px 36px', fontSize: '1rem' }}>Explore Our Services</Link>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Pakistan-based · Internationally focused · Structured for remote delivery
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className={`grid-2 ${styles.introGrid}`}>
            <div>
              <Reveal>
                <div className="section-label">Our Purpose</div>
                <h2 className="section-title">Technology should solve a business problem</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p style={{ color: 'var(--text-muted)', marginBottom: 40, fontSize: '1.125rem', lineHeight: 1.7 }}>
                  We help companies convert ideas, operational requirements and manual processes into useful digital solutions. From a customer-facing website or mobile application to a customized workflow platform, our work begins with understanding what the business needs to achieve. We then define, design, develop and support an appropriate solution through a clear delivery process.
                </p>
                <Link href="/company/about" className="btn btn-secondary">Learn About Us</Link>
              </Reveal>
            </div>
            <div className={styles.introBadges}>
              <Reveal delay={0.2}>
                <div className={styles.statBox}>
                  <Layers className={styles.statIcon} size={32} />
                  <div className="stat-number">9+</div>
                  <div className="stat-label">Service Capabilities</div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className={styles.statBox}>
                  <Globe className={styles.statIcon} size={32} />
                  <div className="stat-number">8+</div>
                  <div className="stat-label">Target Markets</div>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className={styles.statBox}>
                  <CheckCircle2 className={styles.statIcon} size={32} />
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Custom Solutions</div>
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <div className={styles.statBox}>
                  <Building2 className={styles.statIcon} size={32} />
                  <div className="stat-number">2025</div>
                  <div className="stat-label">Established</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-bg-light">
        <div className="container">
          <Reveal>
            <div className="section-header centered">
              <div className="section-label">What We Do</div>
              <h2 className="section-title">Capabilities across the digital lifecycle</h2>
              <p className="section-subtitle">Full-service software and digital capabilities — from ideation and design to development, automation and long-term support.</p>
            </div>
          </Reveal>
          <div className="grid-3">
            {[
              { icon: <Code2 size={24} />, title: 'Custom Software Development', text: 'Purpose-built platforms, portals and operational systems aligned with your workflows.', href: '/services/custom-software' },
              { icon: <BrainCircuit size={24} />, title: 'AI & Data Solutions', text: 'Responsible AI-enabled tools, analytics and data workflows that support better decisions and productivity.', href: '/services/ai-data' },
              { icon: <Workflow size={24} />, title: 'Business Process Automation', text: 'Connected approvals, notifications, records and reporting that reduce repetitive work.', href: '/services/automation' },
              { icon: <Globe size={24} />, title: 'Web & E-commerce', text: 'Responsive websites, customer portals and commerce experiences designed for performance and usability.', href: '/services/web-development' },
              { icon: <Smartphone size={24} />, title: 'Mobile Applications', text: 'Android, iOS and cross-platform applications for customers, suppliers and internal teams.', href: '/services/mobile-apps' },
              { icon: <Layout size={24} />, title: 'UI/UX & Digital Design', text: 'User research, journeys, wireframes, prototypes and interfaces that make technology easier to use.', href: '/services/ui-ux' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={0.1 * i}>
                <Link href={s.href} className={styles.serviceCard}>
                  <div className={styles.cardIconBox}>{s.icon}</div>
                  <div className="card-title">{s.title}</div>
                  <p className="card-text">{s.text}</p>
                  <div className={styles.cardArrow}>Learn more <ArrowRight size={16} /></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SOFTWARE FEATURE */}
      <section className="section">
        <div className="container">
          <div className={`grid-2 ${styles.featureGrid}`}>
            <Reveal>
              <div className={styles.featureImage} style={{ background: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200) center/cover' }}>
              </div>
            </Reveal>
            <div className={styles.featureText}>
              <Reveal delay={0.2}>
                <div className="section-label">Custom Software</div>
                <h2 className="section-title">Software built around the way your business works</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: '1.125rem' }}>
                  Standard software can be useful, but it does not always reflect specialized workflows, approvals, reporting structures or industry requirements. Eltech Solutions develops custom applications that bring the required users, information and actions into a more controlled digital environment.
                </p>
                <ul className="check-list" style={{ marginBottom: 40 }}>
                  <li>Procurement and RFQ platforms</li>
                  <li>Order and inventory management systems</li>
                  <li>Customer and supplier portals</li>
                  <li>Workflow and approval applications</li>
                  <li>Operational dashboards and reports</li>
                  <li>Document and task management solutions</li>
                </ul>
                <Link href="/services/custom-software" className="btn btn-primary">Explore Custom Software</Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATION FEATURE */}
      <section className="section section-bg-light">
        <div className="container">
          <div className={`grid-2 ${styles.featureGrid}`}>
            <div className={styles.featureText}>
              <Reveal>
                <div className="section-label">Business Automation</div>
                <h2 className="section-title">Move from fragmented activity to connected workflows</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: '1.125rem' }}>
                  When information is spread across messages, spreadsheets and manual registers, work becomes slower and management visibility becomes limited. We help identify suitable processes for digitization and create structured workflows.
                </p>
                <div className={styles.outcomePills}>
                  <span className={styles.pill}>Less repetition</span>
                  <span className={styles.pill}>Better visibility</span>
                  <span className={styles.pill}>Clearer accountability</span>
                  <span className={styles.pill}>More time for high-value work</span>
                </div>
                <div style={{ marginTop: 40 }}>
                  <Link href="/services/automation" className="btn btn-primary">Explore Automation</Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className={styles.featureImage} style={{ background: 'transparent', border: 'none' }}>
                <div className={styles.automationVisual}>
                  <div className={styles.flowStep}>Intake &amp; Request</div>
                  <ArrowDown className={styles.flowArrow} size={32} />
                  <div className={styles.flowStep}>Approval Workflow</div>
                  <ArrowDown className={styles.flowArrow} size={32} />
                  <div className={styles.flowStep}>Reporting &amp; Visibility</div>
                  <ArrowDown className={styles.flowArrow} size={32} />
                  <div className={styles.flowStep}>Notifications &amp; Alerts</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY ELTECH */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header centered">
              <div className="section-label">Why Choose Us</div>
              <h2 className="section-title">A practical technology partner</h2>
              <p className="section-subtitle">Built around your business needs — not generic templates or fashionable tools.</p>
            </div>
          </Reveal>
          <div className="grid-3">
            {[
              { icon: <Target size={32} />, title: 'Business-oriented development', text: 'We focus first on the requirement, users and expected business outcome.' },
              { icon: <Layers size={32} />, title: 'Customized delivery', text: 'Features and workflows are planned according to the agreed scope—not forced into a generic template.' },
              { icon: <MessageSquare size={32} />, title: 'Clear communication', text: 'Defined contacts, documented decisions and regular progress reviews keep work understandable.' },
              { icon: <ShieldCheck size={32} />, title: 'Flexible engagement', text: 'Engage us for a complete project, selected phase, ongoing support or dedicated capability.' },
              { icon: <Globe size={32} />, title: 'International service model', text: 'Remote collaboration, milestone reviews and time-zone-aware communication support cross-border delivery.' },
              { icon: <Users size={32} />, title: 'Long-term approach', text: 'We remain available for maintenance, improvement and future development after launch.' },
            ].map((w, i) => (
              <Reveal key={w.title} delay={0.1 * i}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>{w.icon}</div>
                  <h3 className={styles.whyTitle}>{w.title}</h3>
                  <p className={styles.whyText}>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section section-bg-light">
        <div className="container">
          <Reveal>
            <div className="section-header centered">
              <div className="section-label">Industries</div>
              <h2 className="section-title">Technology adapted to operational realities</h2>
              <p className="section-subtitle">Our approach can be applied across industries where people, information, approvals, customers, suppliers and transactions need to work together more effectively.</p>
            </div>
          </Reveal>
          <div className="grid-4">
            {[
              { icon: <Building2 size={28} />, title: 'Construction and infrastructure', text: 'Project coordination, procurement and distributed teams.' },
              { icon: <Factory size={28} />, title: 'Industrial trading and distribution', text: 'Enquiries, quotations, inventory and customer communication.' },
              { icon: <Package size={28} />, title: 'Procurement and supply chain', text: 'RFQs, supplier onboarding and purchase decisions.' },
              { icon: <Factory size={28} />, title: 'Manufacturing and engineering', text: 'Workflows, materials and quality records.' },
              { icon: <Truck size={28} />, title: 'Logistics and transportation', text: 'Movement tracking, schedules and status communication.' },
              { icon: <ShoppingCart size={28} />, title: 'Retail and e-commerce', text: 'Catalogues, orders and digital engagement.' },
              { icon: <Hotel size={28} />, title: 'Hospitality and professional services', text: 'Bookings, service requests and reporting.' },
              { icon: <Rocket size={28} />, title: 'Startups and emerging businesses', text: 'Product discovery, prototypes and MVPs.' },
            ].map((ind, i) => (
              <Reveal key={ind.title} delay={0.05 * i}>
                <div className={styles.industryCard}>
                  <div className={styles.industryIcon}>{ind.icon}</div>
                  <h4 className={styles.industryTitle}>{ind.title}</h4>
                  <p className={styles.industryText}>{ind.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/industries" className="btn btn-secondary">View All Industries</Link>
          </div>
        </div>
      </section>

      {/* GLOBAL DELIVERY */}
      <section className="section">
        <div className="container">
          <div className={`grid-2 ${styles.featureGrid}`}>
            <div className={styles.featureText}>
              <Reveal>
                <div className="section-label">Global Delivery</div>
                <h2 className="section-title">Digital services without borders</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: '1.125rem' }}>
                  Based in Pakistan, Eltech Solutions is structured to collaborate remotely with clients in the United States, Canada, the United Kingdom, Europe, the Middle East, the Far East, Australia, Africa and other international markets.
                </p>
                <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: '1.125rem' }}>
                  Projects can be managed through online meetings, documented requirements, milestone approvals and secure digital collaboration.
                </p>
                <Link href="/how-we-work" className="btn btn-primary">Learn How We Work</Link>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className={styles.featureImage} style={{ background: 'url(https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200) center/cover' }}>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>Have a requirement, process or product idea to discuss?</h2>
              <p>Tell us what you want to improve or create. We will begin with a structured conversation to understand the requirement and recommend the appropriate next step.</p>
              <Link href="/contact" className="btn btn-white">Start a Conversation</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
