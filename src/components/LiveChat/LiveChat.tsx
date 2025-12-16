import React from 'react';
import { motion } from 'framer-motion';
import './LiveChat.scss';

type Feature = {
  id: string;
  title: string;
  desc: string;
};

const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Instant Response Time',
    desc: 'Address customer concerns in real time, reducing wait times and improving overall user satisfaction and retention.',
  },
  {
    id: 'f2',
    title: 'Personalized Support',
    desc: 'Provide tailored solutions by connecting users directly with experts, ensuring each query is handled with care and precision.',
  },
  {
    id: 'f3',
    title: 'Seamless Integration',
    desc: "Our live chat integrates with Jordan Baba's CRM, ensuring all interactions are logged and easily accessible for future follow-up.",
  },
];

const LiveChat: React.FC<{ mockupSrc?: string; alt?: string }> = ({
  mockupSrc = 'https://jordanbaba.com/assets/images/landing-page/live-chat-image.webp',
  alt = 'Live chat dashboard',
}) => {
  return (
    <section className="livechat-section">
      <div className="container">
        <div className="livechat-grid">
          {/* Left */}
          <motion.div
            className="livechat-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Jordan Baba</span>
            <h2 className="title">Live Chat: Resolve up to 80% of cases</h2>
            <p className="subtitle">
              Live Chat enables real-time support, allowing businesses to resolve most customer inquiries instantly and efficiently.
            </p>

            <div className="features">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.id}
                  className="feature-item"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                >
                  <div className="feature-icon" aria-hidden>
                    {/* simple check icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="livechat-right"
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="mockup-wrap">
              <div className="mockup-shadow" />
              <div className="mockup-frame">
                <img src={mockupSrc} alt={alt} loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveChat;
