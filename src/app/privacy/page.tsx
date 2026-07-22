import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Eltech Solutions',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container">
          <div className="section-label">Legal</div>
          <h1>Privacy Policy</h1>
          <p>How we collect, use and protect your personal information.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ background: 'var(--white)', padding: 40, borderRadius: 12, border: '1px solid var(--border)', lineHeight: 1.8 }}>
            <h2 style={{ marginBottom: 16 }}>1. Information We Collect</h2>
            <p style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
              Information submitted through this website will be used to review and respond to your enquiry. We may collect your name, email address, phone number, and any project details you voluntarily share.
            </p>

            <h2 style={{ marginBottom: 16 }}>2. How We Use Information</h2>
            <p style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
              We use this information exclusively for business communication, project estimation, and providing the requested software and digital services. We do not sell or rent your personal information to third parties.
            </p>

            <h2 style={{ marginBottom: 16 }}>3. Data Security</h2>
            <p style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
              We implement appropriate professional safeguards to protect your information and intellectual property. However, no data transmission over the internet is completely secure, so we advise against sending highly sensitive technical secrets through standard contact forms.
            </p>

            <h2 style={{ marginBottom: 16 }}>4. Contact Us</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              If you have any questions regarding this Privacy Policy, please contact us at mustafa@eltech.com.pk.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
