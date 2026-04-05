// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, DM_Mono } from 'next/font/google';
import '@/styles/global.css';
import '@/styles/animations.css';

/* ── Primary font: Inter (Greenly-style clean sans-serif) ── */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

/* ── Mono font: kept for data labels, code snippets, emission factors ── */
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  title: 'Praxya — BRSR Compliance for Chemical Manufacturers',
  description:
    'Automate SEBI BRSR Core + CBAM reporting for Indian specialty chemical manufacturers. Chemical-grade emission factors, XBRL export, CA audit trail. 75% cheaper than Big 4.',
  keywords: [
    'BRSR compliance',
    'BRSR Core',
    'SEBI BRSR',
    'CBAM India',
    'chemical manufacturer ESG',
    'BRSR XBRL',
    'carbon accounting India',
    'emission factors chemicals',
    'BRSR automation',
    'sustainability reporting India',
    'SEBI compliance',
    'chemical industry ESG',
  ],
  openGraph: {
    title: 'Praxya — BRSR Compliance. Chemical-Grade Precision.',
    description:
      'Automate SEBI BRSR Core + CBAM reporting for Indian chemical manufacturers. Upload plant data, get auditor-ready reports in days, not months. 75% cheaper than Big 4.',
    url: 'https://praxya.in',
    siteName: 'Praxya',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Praxya — BRSR Compliance Platform for Chemical Manufacturers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praxya — BRSR Compliance. Chemical-Grade Precision.',
    description:
      'Automate SEBI BRSR Core + CBAM reporting for Indian chemical manufacturers.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://praxya.in'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <head>
        {/* Theme color for browser chrome — white for light theme */}
        <meta name="theme-color" content="#ffffff" />
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        style={{
          fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          margin: 0,
          padding: 0,
          background: '#ffffff',
          color: '#111827',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {children}
      </body>
    </html>
  );
}