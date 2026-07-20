"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);
  
  if (submitted) {
    return (
      <div style={{ padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#fff', fontSize: '0.95rem', textAlign: 'center' }}>
        ✓ Subscribed successfully. Thank you!
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', gap: 8, maxWidth: 400 }}>
      <input type="email" required placeholder="Email address" style={{ flex: 1, padding: '12px 16px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.95rem', outline: 'none' }} />
      <button type="submit" className="btn btn-primary" style={{ padding: '12px 20px', borderRadius: 6 }}>Subscribe</button>
    </form>
  );
}
