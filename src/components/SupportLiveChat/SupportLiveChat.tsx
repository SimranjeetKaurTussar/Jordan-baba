import React from 'react';
import { motion } from 'framer-motion';
import './SupportLiveChat.scss';

const FEATURES_LEFT = [
  'No downtime — get help whenever you’re working',
  'Fast issue resolution',
  'Personalized support for sellers of all sizes',
  'Dedicated account managers for verified sellers',
];

const FEATURES_RIGHT = [
  'Real-time messaging between buyer and seller',
  'Share documents, images, and product files instantly',
  'Faster lead conversion and stronger buyer trust',
  'Full chat history for follow-up and clarity',
];

const SupportLiveChat: React.FC<{ bgSrc?: string; chatIconSrc?: string }> = ({
  bgSrc = '', // optional faint background watermark
  chatIconSrc = '', // optional icon image (can keep blank to use inline SVG)
}) => {
  return (
    <section className="support-livechat" aria-labelledby="support-heading">
      <div className="support-inner">
        {/* left column */}
        <motion.div
          className="support-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="support-heading" className="support-title">
            <span className="support-title--big">24/7</span> real-time <span className="support-accent">support.</span>
          </h2>

          <p className="support-lead">
            We're here for you — anytime, every day.
          </p>

          <p className="support-paragraph">
            At Jordan Baba, support doesn’t sleep. Whether you need help setting up your store, resolving a buyer query, or understanding analytics — our team is available 24/7 to assist you. You can reach us via live chat, email, or direct support requests — and get fast, reliable help whenever you need it.
          </p>

          <h4 className="support-subhead">Why it matters:</h4>

          <ul className="support-list">
            {FEATURES_LEFT.map((f) => (
              <li key={f} className="support-list__item">
                <span className="dot" aria-hidden>–</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* right column */}
        <motion.aside
          className="support-right"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          aria-labelledby="chat-heading"
        >
          <div className="chat-card">
            <div className="chat-card__head">
              <div className="chat-icon" aria-hidden>
                {chatIconSrc ? (
                  <img src={chatIconSrc} alt="" loading="lazy" />
                ) : (
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="2" y="3" width="20" height="14" rx="3" stroke="#d32f2f" strokeWidth="1.4" fill="#fff" />
                    <path d="M7 8h10M7 12h6" stroke="#d32f2f" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                )}
              </div>

              <div className="chat-titlewrap">
                <div className="chat-small">Online Chat</div>
                <h3 id="chat-heading" className="chat-title">Live Chat Now</h3>
              </div>
            </div>

            <div className="chat-body">
              <p className="chat-highlight">Connect instantly with buyers — no delays, no barriers.</p>
              <p className="chat-desc">
                Jordan Baba’s built-in Live Chat lets you communicate directly with potential buyers in real time. Whether it’s answering product questions, negotiating terms, or sharing important files — you’re always just a message away.
              </p>

              <h5 className="chat-key">Key features:</h5>

              <ul className="chat-features">
                {FEATURES_RIGHT.map((f) => (
                  <li key={f} className="chat-features__item">
                    <span className="chat-dot" aria-hidden>–</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>

      {/* optional faint background watermark */}
      {bgSrc ? <img src={bgSrc} alt="" className="support-bg" aria-hidden /> : null}
    </section>
  );
};

export default SupportLiveChat;