import { siteData } from '@/lib/data';

const { testimonials } = siteData;

export default function TestimonialsSection() {
  return (
    <section className="section-pad section-border-top" aria-labelledby="testimonials-heading">
      <div className="container-lux">
        <div className="section-header-block">
          <p className="eyebrow">Social proof</p>
          <h2 id="testimonials-heading" className="section-title">
            A partner to
            <br />
            <em className="section-title-em">your growth.</em>
          </h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="testimonial-card">
              <p>“{item.quote}”</p>
              <footer className="testimonial-meta">
                <span className="testimonial-avatar" aria-hidden="true">
                  {item.author.charAt(0)}
                </span>
                <div>
                  <span className="testimonial-name">{item.author}</span>
                  <span className="testimonial-role">{item.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
