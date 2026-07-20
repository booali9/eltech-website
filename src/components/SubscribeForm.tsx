"use client";
import { useState } from 'react';
import Link from 'next/link';

import styles from './SubscribeForm.module.css';

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
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className={styles.form}>
      <input type="email" required placeholder="Email address" className={styles.input} />
      <button type="submit" className={`btn btn-primary ${styles.button}`}>Subscribe</button>
    </form>
  );
}
