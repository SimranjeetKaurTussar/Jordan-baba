import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronRight } from 'lucide-react';
import './CategoryBar.scss';
import { CATEGORIES } from './categories';
import type { Category } from './categories';

const CategoryBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeCatIdx, setActiveCatIdx] = useState(0);
  const [slide, setSlide] = useState(0);

  const activeCat: Category | undefined = CATEGORIES[activeCatIdx];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSlide(0);
  }, [activeCatIdx]);

  useEffect(() => {
    if (!open || !activeCat) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % (activeCat.showcases.length || 1));
    }, 4000);
    return () => clearInterval(id);
  }, [open, activeCat]);

  const visibleCards = useMemo(() => {
    if (!activeCat?.showcases?.length) return [];
    const a = activeCat.showcases[slide % activeCat.showcases.length];
    const b = activeCat.showcases[(slide + 1) % activeCat.showcases.length];
    return [a, b];
  }, [activeCat, slide]);

  return (
    <div
      className="category-bar"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="container">
        <div className="category-bar__wrapper">
          <div className="category-bar__list">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                className={'category-pill' + (idx === activeCatIdx ? ' is-active' : '')}
                onMouseEnter={() => setActiveCatIdx(idx)}
              >
                <cat.Icon size={18} className="category-pill__icon" />
                <span className="category-pill__label">{cat.name}</span>
              </button>
            ))}
          </div>

          <button className="category-bar__view-all">
            <Menu size={18} />
            <span>View All Categories</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && activeCat && (
          <motion.div
            className="category-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <div className="container">
              <div className="category-panel__inner">
                <div className="category-panel__left">
                  <div className="subcategory-list">
                    {activeCat.subcategories.map((s, i) => (
                      <a
                        key={s.id}
                        href="#"
                        className={'subcategory-item' + (i === 0 ? ' is-active' : '')}
                      >
                        <span className="subcategory-item__label">{s.name}</span>
                        <ChevronRight size={16} className="subcategory-item__chev" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="category-panel__right">
                  <div className="showcase-grid">
                    {visibleCards.map((card) => (
                      <a key={card.id} href="#" className="showcase-card">
                        <div className="showcase-card__image">
                          <img src={card.image} alt={card.title} />
                        </div>
                        <div className="showcase-card__meta">
                          <span className="showcase-card__cat">{activeCat.name}</span>
                          <span className="showcase-card__title">{card.title}</span>
                          <span className="showcase-card__sub">{card.subtitle}</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="showcase-dots">
                    {activeCat.showcases.map((_, i) => (
                      <button
                        key={i}
                        className={'dot' + (i === slide ? ' dot--active' : '')}
                        onMouseEnter={() => setSlide(i)}
                        onClick={() => setSlide(i)}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryBar;
