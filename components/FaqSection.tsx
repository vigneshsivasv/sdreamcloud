'use client';

import { useState } from 'react';
import { siteData } from '@/lib/data';

const { faq } = siteData;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad section-border-top" aria-labelledby="faq-heading">
      <div className="container-lux" style={{ maxWidth: '820px' }}>
        <div className="section-header-block" data-reveal>
          <p className="eyebrow">{faq.sectionLabel}</p>
          <h2 id="faq-heading" className="section-title">
            {faq.titleMain}
          </h2>
        </div>

        <dl className="faq-list">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className="faq-item"
                data-reveal
              >
                <dt>
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
                  <p className="text-secondary" style={{ lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                    {item.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
