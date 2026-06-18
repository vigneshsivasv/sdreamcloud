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
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f2f5 50%, #ffffff 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#1877F2',
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
          <span style={{ color: '#505358', fontSize: '20px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Digital Marketing Agency
          </span>
        </div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#1c1e21',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            maxWidth: '900px',
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#3a3b3c',
            marginTop: '24px',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          SEO, Google Ads & Facebook advertising for growing brands
        </div>
      </div>
    ),
    { ...size }
  );
}
