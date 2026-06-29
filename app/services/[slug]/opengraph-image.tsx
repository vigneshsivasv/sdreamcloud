import { ImageResponse } from 'next/og';
import { getServiceBySlug } from '@/lib/services';
import { siteConfig } from '@/lib/seo';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  return {
    alt: service ? `${service.title} – ${siteConfig.name}` : siteConfig.name,
  };
}

export default function ServiceOgImage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  const heading = service?.title ?? siteConfig.name;
  const subline = service?.focusKeyword ?? 'Digital Marketing Services';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f2f5 50%, #ffffff 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
          <span style={{ color: '#505358', fontSize: '18px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {siteConfig.name}
          </span>
        </div>
        <div>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#1c1e21',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              maxWidth: '1000px',
              marginBottom: '20px',
            }}
          >
            {heading}
          </div>
          <div style={{ fontSize: '24px', color: '#3a3b3c', maxWidth: '900px', lineHeight: 1.4 }}>
            {subline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
