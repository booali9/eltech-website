import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI and Data Solutions for Business',
  description: 'Explore responsible AI-enabled tools, document assistance, analytics and intelligent product features designed around defined business use cases.',
};

export default function AIDataPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: '#3eb6e8' }}>AI & Data Solutions</div>
          <h1>Apply AI where it can create measurable value</h1>
          <p>Artificial intelligence is most useful when it addresses a defined business need, works with suitable data and remains subject to appropriate human review.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 64 }}>
            <div>
              <div className="section-label">Potential Applications</div>
              <h2 className="section-title">What AI can do for your business</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Internal knowledge search and document assistance</li>
                <li>Document classification and information extraction</li>
                <li>Customer-service assistance and response drafting</li>
                <li>Workflow recommendations and task prioritization</li>
                <li>Data summaries, reporting and management insights</li>
                <li>Forecasting and pattern identification</li>
                <li>AI-enabled features within web and mobile apps</li>
                <li>Process-support tools with human approval controls</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Explore an AI Use Case</Link>
            </div>
            <div style={{ background: 'var(--off-white)', borderRadius: 20, padding: 40 }}>
              <h3 style={{ marginBottom: 20, color: 'var(--primary)' }}>Responsible Implementation</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { n: '1', t: 'Define the use case', d: 'Begin with a defined use case and expected outcome.' },
                  { n: '2', t: 'Assess your data', d: 'Evaluate data availability, quality, sensitivity and permissions.' },
                  { n: '3', t: 'Set human controls', d: 'Clarify what the system may recommend vs. what requires human approval.' },
                  { n: '4', t: 'Test thoroughly', d: 'Test for accuracy, consistency, security and unintended behavior.' },
                  { n: '5', t: 'Monitor & improve', d: 'Monitor actual use and improve the system over time.' },
                ].map(r => (
                  <div key={r.n} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 32, height: 32, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>{r.n}</div>
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: 4 }}>{r.t}</div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{r.d}</div>
                    </div>
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
          <h2 className="section-title" style={{ fontSize: '1.6rem' }}>AI capabilities depend on context</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>
            AI capabilities depend on the intended use case, available data, selected technology and required level of accuracy. Feasibility is assessed before scope and commitments are finalized.
          </p>
          <Link href="/contact" className="btn btn-primary">Discuss an AI Use Case</Link>
        </div>
      </section>
    </>
  );
}
