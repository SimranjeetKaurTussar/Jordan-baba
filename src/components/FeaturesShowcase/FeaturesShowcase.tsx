import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FeaturesShowcase.scss";
import { FEATURES } from "./data";

const FeaturesShowcase: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="features-showcase" aria-labelledby="features-heading">
      <div className="container">
        <div className="features-showcase__header">
          <div className="eyebrow">
            Jordan Baba{" "}
            <span className="features-showcase__header__span">
              {" "}
              | SELLER PORTAL
            </span>
          </div>
          <h2 className="features-showcase__header__title">
            Grow your business with the best suite tools
          </h2>
          <p className="features-showcase__header__subtitle">
            Now, giving your product the global market has become very simple.
            Follow below for professional and dynamic tools.
          </p>
        </div>

        <div className="features-showcase__inner">
          <div
            className="features-list"
            role="tablist"
            aria-orientation="vertical"
          >
            {FEATURES.map((f, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  className={`feature-item ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onFocus={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="feature-item__index">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="feature-item__content">
                    <div className="feature-item__title">{f.title}</div>
                    {isActive && (
                      <div className="feature-item__desc">{f.desc}</div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="showcase-card-wrap" aria-hidden>
            <motion.div
              className="showcase-card"
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="https://jordanbaba.com/assets/jordanbaba/grow.png" /* replace with your actual screenshot */
                alt="Seller portal preview"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
