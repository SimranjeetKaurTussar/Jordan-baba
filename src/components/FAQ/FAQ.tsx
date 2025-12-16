import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.scss';

type QA = {
  id: string;
  q: string;
  a: React.ReactNode;
};

const DEFAULT_QA: QA[] = [
  {
    id: 'q1',
    q: 'What tools are available for sellers on Jordan Baba?',
    a: 'Tools include inventory management, sales analytics, pricing tools, and marketing options.',
  },
  {
    id: 'q2',
    q: 'How do I access sales analytics?',
    a: 'Go to Dashboard → Analytics. You can filter by date range, product, and category.',
  },
  {
    id: 'q3',
    q: 'Can I set up promotions for my products?',
    a: 'Yes — campaigns and discount rules are available in the Promotions section of your seller console.',
  },
  {
    id: 'q4',
    q: 'How do I manage multiple orders efficiently?',
    a: 'Use the Orders queue, bulk actions (print, mark shipped) and automated fulfillment rules to speed processing.',
  },
  {
    id: 'q5',
    q: 'Is there a way to automate responses to RFQs?',
    a: 'Yes — configure Auto-Replies and canned responses in the Messaging settings to respond automatically to common RFQs.',
  },
];

export default function FAQ({ items = DEFAULT_QA }: { items?: QA[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const headersRef = useRef<Array<HTMLButtonElement | null>>([]);

  // Toggle single-open behavior. If you want multi-open, adjust logic.
  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  // Keyboard navigation handlers for headers
  const onHeaderKeyDown = useCallback(
    (e: React.KeyboardEvent, idx: number, id: string) => {
      const count = items.length;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = (idx + 1) % count;
        headersRef.current[next]?.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = (idx - 1 + count) % count;
        headersRef.current[prev]?.focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        headersRef.current[0]?.focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        headersRef.current[count - 1]?.focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(id);
      } else if (e.key === 'Escape') {
        setOpenId(null);
      }
    },
    [items.length, toggle]
  );

  // Ensure header refs length matches items
  useEffect(() => {
    headersRef.current = headersRef.current.slice(0, items.length);
  }, [items.length]);

  return (
    <section className="faq-section" aria-label="Common Questions">
      <div className="faq-inner">
        <h2 className="faq-title">
          Common <span className="faq-title--accent">Questions</span>
        </h2>

        <div className="faq-list" role="list">
          {items.map((it, i) => {
            const isOpen = openId === it.id;
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={it.id} role="listitem">
                <div className="faq-row">
                  <button
                    ref={(el) => {
                      headersRef.current[i] = el;
                    }}
                    id={`faq-header-${it.id}`}
                    aria-controls={`faq-panel-${it.id}`}
                    aria-expanded={isOpen}
                    className="faq-button"
                    onClick={() => toggle(it.id)}
                    onKeyDown={(e) => onHeaderKeyDown(e, i, it.id)}
                  >
                    <span className="faq-badge" aria-hidden />
                    <span className="faq-q">Q: {it.q}</span>

                    <span className="faq-chevron" aria-hidden>
                      {/* simple chevron */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${it.id}`}
                      role="region"
                      aria-labelledby={`faq-header-${it.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
                      className="faq-panel-wrap"
                    >
                      <div className="faq-panel">
                        <div className="faq-a">A: {it.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
