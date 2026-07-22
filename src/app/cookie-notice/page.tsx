import type { Metadata } from 'next';
import ManageCookieButton from './ManageCookieButton';

export const metadata: Metadata = {
  title: 'Cookie Notice | Eltech Solutions',
};

export default function CookieNoticePage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2400)' }}>
        <div className="container">
          <div className="section-label">Legal</div>
          <h1>Cookie Notice</h1>
          <p>Information about how and why we use cookies on this website.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ background: 'var(--white)', padding: 40, borderRadius: 12, border: '1px solid var(--border)', lineHeight: 1.8 }}>
            <h2 style={{ marginBottom: 16 }}>1. What Are Cookies?</h2>
            <p style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us ensure the website functions correctly and provide us with aggregated data about how the site is used.
            </p>

            <h2 style={{ marginBottom: 16 }}>2. Types of Cookies We Use</h2>
            <p style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
              <strong>Essential Cookies:</strong> These are required for the operation of our website. They cannot be disabled.<br /><br />
              <strong>Analytics Cookies:</strong> With your permission, we use Google Analytics to understand how visitors interact with the website, allowing us to improve the design and user experience. These cookies are only loaded if you accept optional cookies.
            </p>

            <h2 style={{ marginBottom: 16 }}>3. Managing Cookies</h2>
            <p style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
              You can manage your cookie preferences at any time by clicking the button below, or by adjusting the settings in your web browser. Please note that disabling essential cookies may affect the functionality of the website.
            </p>
            <ManageCookieButton />
          </div>
        </div>
      </section>
    </>
  );
}
