'use client';

import { useState } from 'react';
import { siteData } from '@/lib/data';
import FadeIn from '@/components/ui/FadeIn';
import { fadeInUp } from '@/lib/animations';

const { faq } = siteData;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-pad"
      style={{ background: '#09090b', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-lux">
        <FadeIn className="section-header-block">
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>
            <span style={{ color: '#52525b', marginRight: '0.75rem' }}>{faq.sectionNumber}</span>
            {faq.sectionLabel}
          </p>
          <h2
            id="faq-heading"
            className="section-title"
          >
            {faq.titleMain}
            <br />
            <em className="section-title-em">{faq.titleSub}</em>
          </h2>
        </FadeIn>

        <dl className="faq-list" style={{ margin: '3rem 0 0', padding: 0 }}>
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <FadeIn key={item.question} as="div" variants={fadeInUp} delay={index * 0.05}>
                <div
                  className="faq-item"
                  style={{
                    borderTop: index === 0 ? '1px solid var(--border)' : 'none',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <dt style={{ margin: 0 }}>
                    <button
                      id={buttonId}
                      type="button"
                      className="faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span>{item.question}</span>
                      <span aria-hidden="true" className={`faq-icon ${isOpen ? 'faq-icon-open' : ''}`}>
                        +
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`}
                    style={{ margin: 0 }}
                  >
                    <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                      {item.answer}
                    </p>
                  </dd>
                </div>
              </FadeIn>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
