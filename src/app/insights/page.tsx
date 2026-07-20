import Link from 'next/link';
import type { Metadata } from 'next';
import SubscribeForm from '@/components/SubscribeForm';

export const metadata: Metadata = {
  title: 'Insights | Practical Ideas for Better Digital Operations',
  description: 'Articles and guides on custom software, automation, AI, product design and remote project management.',
};

const articles = [
  {
    title: 'When Does a Business Need Custom Software?',
    category: 'Custom Software',
    date: 'July 12, 2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Seven Signs a Manual Process Is Ready for Automation',
    category: 'Business Automation',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'How to Prepare Requirements Before Hiring a Software Company',
    category: 'Project Management',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Custom Software vs. Off-the-Shelf Software: A Practical Comparison',
    category: 'Custom Software',
    date: 'May 30, 2026',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'What Makes an AI Use Case Commercially Useful?',
    category: 'AI & Data',
    date: 'May 14, 2026',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'How to Manage an International Software Project Remotely',
    category: 'Global Delivery',
    date: 'April 22, 2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  }
];

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container">
          <div className="section-label">Insights</div>
          <h1>Practical ideas for better digital operations</h1>
          <p>Our insights explore how organizations can use software, automation, AI and digital design more effectively — without unnecessary complexity.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {articles.map(article => (
              <div key={article.title} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 200, background: `url(${article.image}) center/cover` }}></div>
                <div style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--secondary)' }}>{article.category}</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{article.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 24, lineHeight: 1.4 }}>{article.title}</h3>
                  <Link href="#" style={{ fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    Read Article <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 style={{ marginBottom: 16, color: 'var(--primary)', fontSize: '2rem', fontWeight: 700 }}>Useful technology insights — without the noise</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: '1.125rem' }}>Receive practical articles on custom software, automation, AI, product design and digital operations.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: 'var(--primary)', padding: 32, borderRadius: 12, width: '100%' }}>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
