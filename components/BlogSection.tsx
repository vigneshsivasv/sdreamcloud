'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/lib/data';

const { blog } = siteData;

export default function BlogSection() {
  const [filter, setFilter] = useState('All');

  const posts = useMemo(() => {
    if (filter === 'All') return blog.posts;
    return blog.posts.filter((post) => post.category === filter);
  }, [filter]);

  return (
    <section id="blog" className="journal-section" aria-label="Sdreamclouds blog">
      <div className="journal-inner">
        <header className="journal-header">
          <div data-reveal>
            <p className="journal-eyebrow">• {blog.sectionLabel}</p>
            <h2 className="journal-title">
              {blog.titleMain}
              <br />
              {blog.titleSub}
            </h2>
          </div>
          <div className="journal-copy" data-reveal>
            <p className="journal-intro">{blog.intro}</p>
            <nav className="journal-filters" aria-label="Blog filters">
              {blog.filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`journal-filter ${filter === item ? 'is-active' : ''}`}
                  onClick={() => setFilter(item)}
                  data-cursor="discover"
                  data-cursor-label={item}
                  data-magnetic="8"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <div className="journal-card-grid">
          {posts.map((post) => (
            <article
              key={post.title}
              className="journal-card"
              data-reveal
              data-magnetic="10"
              data-cursor="view"
              data-cursor-label="Read"
            >
              <Link href={post.href} className="journal-card-link">
                <div className="journal-image-wrap">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={800}
                    height={900}
                    loading="lazy"
                    sizes="(max-width: 900px) 80vw, 25vw"
                  />
                </div>
                <div className="journal-card-body">
                  <p className="journal-category">{post.category}</p>
                  <h3>{post.title}</h3>
                  <span className="journal-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
