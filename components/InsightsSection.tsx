const posts = [
  {
    title: 'Why Your SEO Strategy Is Failing (And How to Fix It)',
    excerpt: "Most brands focus on keywords. The ones that win focus on intent, authority, and technical foundations. Here's what actually moves rankings.",
    category: 'SEO',
    date: '2026-04-12',
    readTime: '6 min read',
    slug: '#',
  },
  {
    title: "The Paid Media Framework That 3× Our Clients' ROAS",
    excerpt: 'Throwing budget at ads is easy. Structuring campaigns that compound is a craft. We break down our exact methodology.',
    category: 'Paid Media',
    date: '2026-03-28',
    readTime: '8 min read',
    slug: '#',
  },
  {
    title: 'Brand Positioning in 2026: A Practical Playbook',
    excerpt: "Positioning is not your tagline. It's the specific place you own in your customer's mind. Here's how to find and defend it.",
    category: 'Brand',
    date: '2026-03-14',
    readTime: '5 min read',
    slug: '#',
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function InsightsSection() {
  return (
    <section id="insights" aria-labelledby="insights-heading" className="section-pad scroll-animation" style={{ background: '#09090b', borderTop: '1px solid var(--border)' }}>
      <div className="container-lux">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '4rem' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#52525b', marginRight: '0.75rem' }}>08</span>Insights
            </p>
            <h2
              id="insights-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: '#fff',
                margin: 0,
              }}
            >
              Notes from<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#71717a' }}>the studio.</em>
            </h2>
          </div>
          <a href="#insights" className="section-link">
            All articles
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '0', listStyle: 'none', margin: 0, padding: 0, border: '1px solid var(--border)' }}>
          <style>{`
            @media (min-width: 768px) { .insights-grid { grid-template-columns: repeat(3, 1fr) !important; } }
            .insights-grid > li { border-right: 1px solid var(--border); }
            .insights-grid > li:last-child { border-right: none; }
            @media (max-width: 767px) {
              .insights-grid > li { border-right: none; border-bottom: 1px solid var(--border); }
              .insights-grid > li:last-child { border-bottom: none; }
            }
          `}</style>

          {posts.map((post, i) => (
            <li key={i} className="insights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
              <article className="hover-surface" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent)', fontWeight: 600 }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#52525b' }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: '#fff', margin: '0 0 0.75rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  <a href={post.slug} className="link-accent">
                    {post.title}
                  </a>
                </h3>
                <p style={{ color: '#71717a', fontSize: '0.875rem', lineHeight: 1.7, margin: '0 0 1.5rem', flexGrow: 1 }}>
                  {post.excerpt}
                </p>
                <time dateTime={post.date} style={{ fontSize: '0.75rem', color: '#52525b' }}>
                  {formatDate(post.date)}
                </time>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
