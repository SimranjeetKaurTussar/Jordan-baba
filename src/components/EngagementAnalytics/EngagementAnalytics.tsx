import React from 'react';
import { motion } from 'framer-motion';
import './EngagementAnalytics.scss';

type SeriesPoint = { month: string; a: number; b: number };

type Props = {
  data?: SeriesPoint[];
  title?: string;
  subtitle?: string;
  description?: string;
};

const EngagementAnalytics: React.FC<Props> = ({
 
  title = 'Engagement Analytics',
  subtitle = 'See how your products perform — and how you stack up against others.',
  description = `With Jordan Baba's Engagement Analytics, you get deep insights into how buyers are interacting with your listings. Track key engagement metrics like product views, inquiries, clicks, and response rates — all broken down by category. What sets us apart? We don’t just show your numbers — we show how you compare. Understand where you lead and where there's room to grow by benchmarking your performance against other sellers in the same category.`,
}) => {
  return (
    <section className="engagement-analytics">
      <div className="container">
        <motion.h2
          className="ea-heading"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title.split(' ')[0]} <span className="highlight">{title.split(' ')[1]}</span>
        </motion.h2>

        <div className="ea-grid">
          <motion.div
            className="ea-chart-card"
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <img src="https://jordanbaba.com/assets/images/landing-page/Revenue.jpg" alt="chart" />
          </motion.div>

          <motion.div
            className="ea-copy"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="ea-title">{subtitle}</h3>
            <p className="ea-desc">{description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngagementAnalytics;
