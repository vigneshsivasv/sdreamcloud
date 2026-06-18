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
          background: 'linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#f43f5e',
            }}
          />
          <span style={{ color: '#eeeeee', fontSize: '20px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Digital Marketing Agency
          </span>
        </div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#fafafa',
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
            color: '#a1a1aa',
            marginTop: '24px',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Transforming ambitious brands into market leaders
        </div>
      </div>
    ),
    { ...size }
  );
}
