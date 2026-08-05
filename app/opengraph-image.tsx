import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const runtime = 'edge';
export const alt = `${siteConfig.name} – Digital Marketing Agency`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #050505 0%, #121212 50%, #050505 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#E82A51',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '24px',
              fontWeight: 800,
            }}
          >
            S
          </div>
          <span style={{ color: '#a3a3a3', fontSize: '20px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Digital Marketing Agency
          </span>
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            maxWidth: '960px',
          }}
        >
          A Digital Marketing Agency Built to Grow Your Business
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#a3a3a3',
            marginTop: '24px',
            maxWidth: '820px',
            lineHeight: 1.4,
          }}
        >
          SEO, Google Ads, social media marketing, and conversion-focused websites
        </div>
      </div>
    ),
    { ...size }
  );
}
