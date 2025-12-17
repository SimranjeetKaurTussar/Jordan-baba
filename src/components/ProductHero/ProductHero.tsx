import React from 'react';
import { motion } from 'framer-motion';
import './ProductHero.scss';

const ProductHero: React.FC = () => {
  return (
    <section className="product-hero">
      <div className="container">
        <div className="product-hero__header">
          <div className="eyebrow">Jordan Baba | You Can create products</div>
          <h2 className="product-hero__title">
            Add your product details and advertise within minutes !!!
          </h2>
          <p className="product-hero__subtitle">
            Got multiple variants of A product? Don't worry, we got you covered with our integrated product addition tool
          </p>
        </div>

        <div className="product-hero__visual-wrap">
          <motion.div
            className="device"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
          >
            <div className="device__screen">
              <img
                src="https://jordanbaba.com/assets/images/landing-page/live-chat-image.webp"
                alt="product add mockup"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;