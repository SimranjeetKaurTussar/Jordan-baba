import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronRight } from "lucide-react";
import "./CategoryBar.scss";
import { CATEGORIES, MEGA_MENU_DATA } from "./categories";

const CategoryBar: React.FC = () => {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]?.name || '');


  return (
    <nav className="category-bar">
      <div className="container">
        <div className="category-barwrapper">
          <div
            className="category-bar__mega-menu-trigger"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className="category-bar__all-categories-btn">
              <Menu size={18} />
              <span>All Categories</span>
            </button>

            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div
                  className="mega-menu"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="mega-menu__sidebar">
                    {CATEGORIES.map((cat) => (
                      <div
                        key={cat.id}
                        className={`mega-menu__category-item ${
                          activeCategory === cat.name ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveCategory(cat.name)}
                      >
                        <div className="mega-menu__category-left">
                          <span className="mega-menu__category-icon">
                            {cat.icon}
                          </span>
                          <span className="mega-menu__category-name">
                            {cat.name}
                          </span>
                        </div>
                        <ChevronRight
                          size={14}
                          className="mega-menu__category-arrow"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mega-menu__content">
                    {MEGA_MENU_DATA.map((section, idx) => (
                      <div key={idx} className="mega-menu__section">
                        <h4 className="mega-menu__section-title">
                          {section.category}
                        </h4>
                        <div className="mega-menu__items-grid">
                          {section.items.map((item, i) => (
                            <a key={i} href="#" className="mega-menu__item">
                              <h5 className="mega-menu__item-title">
                                {item.title}
                              </h5>
                              <p className="mega-menu__item-desc">
                                {item.desc}
                              </p>
                              <span className="mega-menu__item-link">
                                Learn more →
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="category-bar__quick-links">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <motion.a
                key={cat.id}
                href="#"
                className="category-bar__quick-link"
                whileHover={{ y: -3 }}
              >
                <span className="category-bar__link-icon">{cat.icon}</span>
                <span className="category-bar__link-text">{cat.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="category-bar__view-all">
            <button className="category-bar__view-all-btn">
              <Menu size={16} />
              <span>View All</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryBar;
