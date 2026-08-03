import { siteData } from '@/lib/data';

const { logos } = siteData;

export default function LogoBar() {
  return (
    <section id="about" className="logo-bar" aria-label="Platforms we work with">
      <div className="container-lux">
        <p className="logo-bar-label" data-reveal>
          {logos.label}
        </p>
        <div className="logo-bar-row">
          {logos.items.map((item) => (
            <span
              key={item}
              className="logo-chip"
              data-reveal
              data-magnetic="10"
              data-cursor="discover"
              data-cursor-label={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
