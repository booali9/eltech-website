"use client";
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('eltech_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (action: 'accept' | 'reject') => {
    localStorage.setItem('eltech_cookie_consent', action);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 24, right: 24, background: 'var(--white)', padding: 24, borderRadius: 12, boxShadow: 'var(--shadow-lg)', zIndex: 9999, border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
      <div>
        <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: 8 }}>Cookie Notice</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          We use essential cookies to operate this website and, with your permission, analytics cookies to understand how it is used. You can accept, reject or manage optional cookies.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={() => handleConsent('accept')} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Accept Optional Cookies</button>
        <button onClick={() => handleConsent('reject')} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Reject Optional Cookies</button>
      </div>
    </div>
  );
}
