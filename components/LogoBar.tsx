import { siteData } from '@/lib/data';

const { logos } = siteData;

export default function LogoBar() {
  return (
    <section className="logo-bar" aria-label="Platforms we work with">
      <div className="container-lux">
        <p className="logo-bar-label">{logos.label}</p>
        <div className="logo-bar-row">
          {logos.items.map((item) => (
            <span key={item} className="logo-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
