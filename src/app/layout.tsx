import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  title: {
    default: 'Eltech Solutions | Custom Software, AI & Digital Services',
    template: '%s | Eltech Solutions',
  },
  description: 'Pakistan-based custom software, AI, automation, web, mobile and digital design services for businesses in international markets.',
  keywords: ['custom software development Pakistan', 'AI solutions', 'business automation', 'web development', 'mobile apps'],
  openGraph: {
    siteName: 'Eltech Solutions',
    url: 'https://www.eltech.com.pk',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Eltech-Solutions-Symbol-Transparent.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
