"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  const openCookieManage = () => {
    (window as any).__openCookieManage?.();
  };

  return (
    <footer className={styles.footer}>
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <Image src="/E-logo.png" alt="Eltech Solutions Logo" width={80} height={80} className={styles.footerLogoImg} style={{ objectFit: 'contain' }} />
            <div className={styles.logoText} style={{ margin: 0 }}>Eltech <span>Solutions</span></div>
          </div>
          <p>Pakistan-based software and digital services company — delivering custom software, AI solutions, automation, web and mobile development for international clients.</p>
          <div style={{ marginTop: 24 }}>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: 12 }}>Subscribe to Insights</h4>
            <SubscribeForm />
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Company</div>
          <div className={styles.links}>
            <Link href="/company/about" className={styles.footLink}>About Us</Link>
            <Link href="/how-we-work" className={styles.footLink}>How We Work</Link>
            <Link href="/industries" className={styles.footLink}>Industries</Link>
            <Link href="/insights" className={styles.footLink}>Insights</Link>
            <Link href="/faq" className={styles.footLink}>FAQ</Link>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Services</div>
          <div className={styles.links}>
            <Link href="/services/custom-software" className={styles.footLink}>Custom Software</Link>
            <Link href="/services/ai-data" className={styles.footLink}>AI &amp; Data</Link>
            <Link href="/services/automation" className={styles.footLink}>Automation</Link>
            <Link href="/services/web-development" className={styles.footLink}>Web Development</Link>
            <Link href="/services/mobile-apps" className={styles.footLink}>Mobile Apps</Link>
            <Link href="/services/ui-ux" className={styles.footLink}>UI/UX Design</Link>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Contact</div>
          <div className={styles.links}>
            <Link href="/contact" className={styles.footLink}>Get in Touch</Link>
          </div>
          <div className={styles.contactInfo} style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ display: 'flex', gap: 8, alignItems: 'center' }}><span>📍</span> Pakistan</p>
            <a href="mailto:mustafa@eltech.com.pk" style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--text-muted)', textDecoration: 'none' }}>
              <span>✉️</span> mustafa@eltech.com.pk
            </a>
            <a href="https://www.eltech.com.pk" style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--text-muted)', textDecoration: 'none' }} target="_blank" rel="noreferrer">
              <span>🌐</span> www.eltech.com.pk
            </a>
            <a href="tel:+12345678900" style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--text-muted)', textDecoration: 'none' }}>
              <span>📞</span> +1 (234) 567 8900
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Eltech Solutions. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.legalLink}>Terms of Use</Link>
          <Link href="/cookie-notice" className={styles.legalLink}>Cookie Notice</Link>
          <button onClick={openCookieManage} className={styles.legalLink} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}>Manage Cookies</button>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
