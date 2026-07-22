"use client";
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { getCookieConsent } from '@/lib/cookieConsent';

export default function Analytics() {
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null);

  useEffect(() => {
    setConsent(getCookieConsent());

    const interval = setInterval(() => {
      const c = getCookieConsent();
      setConsent(c);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (consent !== 'accepted') return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  );
}
