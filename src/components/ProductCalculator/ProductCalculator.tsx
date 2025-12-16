import React from 'react';
import { motion } from 'framer-motion';
import './ProductCalculator.scss';

type Feature = {
  id: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Automated Calculations',
    desc: 'Handle complex pricing equations with ease.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#d32f2f" strokeWidth="1.6"/>
        <path d="M8 7h8M8 11h8M8 15h5" stroke="#d32f2f" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'f2',
    title: 'Dynamic Inputs',
    desc: 'Adjust parameters like material costs or logistics to see real-time price updates.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="#d32f2f" strokeWidth="1.6"/>
        <path d="M12 8v8M8 12h8" stroke="#d32f2f" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'f3',
    title: 'Time-Saving Efficiency',
    desc: 'No more manual errors—get accurate results instantly.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 6v6l4 2" stroke="#d32f2f" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="9" stroke="#d32f2f" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    id: 'f4',
    title: 'Tailored for Energy & Power',
    desc: 'Designed to meet the needs of sellers in the power and energy sectors.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M6 14l4-10 4 10 4-6" stroke="#d32f2f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#d32f2f" strokeWidth="1.6"/>
      </svg>
    ),
  },
];

const ProductCalculator: React.FC<{ illustrationSrc?: string }> = ({
  illustrationSrc = 'https://jordanbaba.com/assets/images/landing-page/complex-price-img.png',
}) => {
  return (
    <section className="product-calc">
      <div className="product-calc__bg-grid" aria-hidden />
      <div className="container">
        <div className="product-calc__inner">
          <div className="left-col">
            <motion.h2
              className="heading"
              initial={{ opacity: 0, y: -18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Simplify Complex Pricing with Our Built-in Product Calculator..
            </motion.h2>

            <motion.div
              className="illustration"
              initial={{ opacity: 0, scale: 0.98, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={illustrationSrc} alt="Product calculator illustration" loading="lazy" />
            </motion.div>
          </div>

          <div className="right-col">
            {FEATURES.map((f, idx) => (
              <motion.article
                className="feature"
                key={f.id}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
              >
                <div className="feature__icon">{f.icon}</div>
                <div className="feature__body">
                  <h3 className="feature__title">{f.title}</h3>
                  <p className="feature__desc">{f.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCalculator;
