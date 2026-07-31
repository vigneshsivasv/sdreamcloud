import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const runtime = 'edge';
export const alt = `${siteConfig.name} – Performance Marketing Agency`;
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
          <span style={{ color: '#a3a3a3', fontSize: '20px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Business Growth Agency
          </span>
        </div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            maxWidth: '900px',
          }}
        >
          1 growth plan. 10x more leads.
        </div>
        <div
          style={{
            fontSize: '26px',
            color: '#a3a3a3',
            marginTop: '24px',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Performance marketing, SEO & paid ads for brands that want to grow
        </div>
      </div>
    ),
    { ...size }
  );
}
