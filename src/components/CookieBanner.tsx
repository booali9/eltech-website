"use client";
import { useState, useEffect } from 'react';
import { getCookieConsent, setCookieConsent } from '@/lib/cookieConsent';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [managing, setManaging] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent('accepted');
    setShow(false);
    setManaging(false);
    window.location.reload();
  };

  const handleReject = () => {
    setCookieConsent('rejected');
    setShow(false);
    setManaging(false);
    window.location.reload();
  };

  const handleManage = () => {
    setManaging(true);
    setShow(true);
  };

  // Expose manage function globally for footer/cookie-notice page
  useEffect(() => {
    (window as any).__openCookieManage = handleManage;
    return () => {
      delete (window as any).__openCookieManage;
    };
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 24, left: 24, right: 24,
      background: 'var(--white)', padding: 24, borderRadius: 12,
      boxShadow: 'var(--shadow-lg)', zIndex: 9999,
      border: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600
    }}>
      <div>
        <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: 8 }}>
          {managing ? 'Manage Cookie Preferences' : 'Cookie Notice'}
        </h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          {managing
            ? 'Choose which optional cookies you allow. Essential cookies are always required for the website to function.'
            : 'We use essential cookies to operate this website and, with your permission, analytics cookies to understand how it is used.'}
        </p>
      </div>

      {/* Cookie categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <input type="checkbox" checked disabled style={{ accentColor: 'var(--primary)' }} />
          <span><strong>Essential</strong> — Required for the website to function (always on)</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <input type="checkbox" checked disabled style={{ accentColor: 'var(--primary)' }} />
          <span><strong>Analytics</strong> — Helps us understand how visitors use the site</span>
        </label>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {managing ? (
          <>
            <button onClick={handleAccept} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Accept All</button>
            <button onClick={handleReject} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Reject All</button>
            <button onClick={() => { setShow(false); setManaging(false); }} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleAccept} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Accept All</button>
            <button onClick={handleReject} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Reject All</button>
          </>
        )}
      </div>
    </div>
  );
}
