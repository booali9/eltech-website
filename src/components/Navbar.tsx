"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const services = [
  { label: 'Custom Software Development', href: '/services/custom-software' },
  { label: 'AI & Data Solutions', href: '/services/ai-data' },
  { label: 'Business Process Automation', href: '/services/automation' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile Applications', href: '/services/mobile-apps' },
  { label: 'UI/UX & Digital Design', href: '/services/ui-ux' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo - Made significantly more prominent */}
        <Link href="/" className={styles.logo} style={{ fontSize: '1.75rem', gap: '12px' }}>
          <Image src="/Eltech-Solutions-Symbol-Transparent.png" alt="Eltech Solutions Logo" width={65} height={65} style={{ objectFit: 'contain' }} priority />
          <span style={{ fontWeight: 700 }}>Eltech Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/company/about" className={styles.navLink}>Company</Link>

          <div className={styles.dropdown}>
            <Link href="/services" className={styles.navLink}>
              Services <ChevronDown className={styles.arrow} size={16} />
            </Link>
            <div className={styles.dropMenu}>
              {services.map(s => (
                <Link key={s.href} href={s.href} className={styles.dropItem}>{s.label}</Link>
              ))}
            </div>
          </div>

          <Link href="/industries" className={styles.navLink}>Industries</Link>
          <Link href="/how-we-work" className={styles.navLink}>How We Work</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
        </nav>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaBtn}>Let&apos;s Talk</Link>
        </div>

        {/* Hamburger */}
        <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen
            ? <X size={28} color={scrolled ? 'var(--primary)' : '#fff'} />
            : <Menu size={28} color={scrolled ? 'var(--primary)' : '#fff'} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/company/about" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Company</Link>
          <Link href="/services" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/industries" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Industries</Link>
          <Link href="/how-we-work" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>How We Work</Link>
          <Link href="/faq" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>FAQ</Link>
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: '16px', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>Let&apos;s Talk</Link>
        </div>
      )}
    </header>
  );
}
