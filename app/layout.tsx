import { Outfit, Manrope } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import { createMetadata, siteConfig } from '@/lib/seo';
import ClarityAnalytics from '@/components/ClarityAnalytics';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['700', '800'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['500', '600'],
});

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable}`}>
      <GoogleTagManager gtmId={siteConfig.gtmId} />
      <body>
        <ClarityAnalytics />
        {children}
      </body>
    </html>
  );
}
