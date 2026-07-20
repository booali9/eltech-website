import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Eltech Solutions',
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container">
          <div className="section-label">Legal</div>
          <h1>Terms of Use</h1>
          <p>Rules and guidelines for using the Eltech Solutions website and services.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ background: 'var(--white)', padding: 40, borderRadius: 12, border: '1px solid var(--border)', lineHeight: 1.8 }}>
            <h2 style={{ marginBottom: 16 }}>1. General Use</h2>
            <p style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
              By accessing this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not use our website or services.
            </p>

            <h2 style={{ marginBottom: 16 }}>2. Services</h2>
            <p style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
              Eltech Solutions provides software development and digital services. All service engagements are governed by separate, specific commercial agreements signed between the client and Eltech Solutions. The information on this website does not constitute a binding commercial offer.
            </p>

            <h2 style={{ marginBottom: 16 }}>3. Intellectual Property</h2>
            <p style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
              The content, design, and branding of this website are the property of Eltech Solutions. You may not reproduce, distribute, or create derivative works without explicit written permission.
            </p>

            <h2 style={{ marginBottom: 16 }}>4. Liability</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              While we strive for accuracy, the content on this website is provided "as is". We are not liable for any damages arising from your use of this website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
