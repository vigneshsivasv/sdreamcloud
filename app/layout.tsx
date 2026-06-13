import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sdreamclouds.com'),
  title: {
    default: 'Sdreamclouds – Digital Marketing Agency',
    template: '%s | Sdreamclouds',
  },
  description:
    'Sdreamclouds is a premium digital marketing agency specialising in SEO, paid media, content strategy, and brand growth. We transform ambitious brands into market leaders.',
  keywords: [
    'digital marketing agency',
    'SEO services',
    'paid media',
    'content strategy',
    'brand growth',
    'sdreamclouds',
  ],
  authors: [{ name: 'Sdreamclouds', url: 'https://sdreamclouds.com' }],
  creator: 'Sdreamclouds',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sdreamclouds.com',
    siteName: 'Sdreamclouds',
    title: 'Sdreamclouds – Digital Marketing Agency',
    description:
      'Transforming ambitious brands into market leaders through data-driven strategies and creative excellence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sdreamclouds Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sdreamclouds – Digital Marketing Agency',
    description:
      'Transforming ambitious brands into market leaders through data-driven strategies and creative excellence.',
    images: ['/og-image.jpg'],
    creator: '@sdreamclouds',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://sdreamclouds.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
