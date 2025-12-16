import React from 'react';
import { motion, type Variants } from 'framer-motion';
import './HowItWorks.scss';

const STEPS = [
  {
    id: '1',
    title: 'Global market',
    desc: 'Share your product details and publish them for global buyers and resellers.',
    position: 'top',
  },
  {
    id: '2',
    title: 'Lead & opportunities',
    desc: 'Get multiple leads and opportunities from our extensive database floated directly to your dashboard.',
    position: 'bottom',
  },
  {
    id: '3',
    title: 'Close Deals',
    desc: 'With our one-stop portal, quote, negotiate, close deals in clicks away.',
    position: 'top',
  },
  {
    id: '4',
    title: 'Manage Order',
    desc: 'Multiple buyer leads and orders are categorized in our CRM portal for a hassle-free experience.',
    position: 'bottom',
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9,
      ease: "easeOut" as const
    } 
  },
};
const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9, 
      ease: "easeOut" as const
    } 
  },
};

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        {/* Header */}
        <div className="how-header">
          <span className="how-header__eyebrow">Jordan Baba</span>
          <h2 className="how-header__title">
            How It <span className="highlight">Works</span>
          </h2>
          <p className="how-header__subtitle">
            Choosing the best product type ensures that you see the most appropriate data fields.
            Browse over 150,000 manufacturers and find anything you're looking for.
          </p>
        </div>

        {/* Snake / Wave Container */}
        <div className="process-wrapper">
          
          {/* Background Wave Line (SVG) */}
          <div className="wave-bg">
            <svg viewBox="0 0 1200 340" preserveAspectRatio="none">
              {/* The gray path */}
              <path
                d="M 20,200 
                   C 20,200 60,20 280,20 
                   C 500,20 500,320 720,320 
                   C 940,320 940,20 1160,20 
                   L 1180,20"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="20"
                strokeLinecap="round"
              />
              {/* Start Dot */}
              <circle cx="22" cy="200" r="20" fill="#ddd" />
              {/* End Dot */}
              <circle cx="1170" cy="20" r="20" fill="#ddd" />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="steps-grid">
            {STEPS.map((step) => {
              const isTop = step.position === 'top';
              
              return (
                <div key={step.id} className={`step-item ${isTop ? 'pos-top' : 'pos-bottom'}`}>
                  
                  {/* If position is Top: Number first, then Content */}
                  {isTop ? (
                    <>
                      <motion.div 
                        className="step-number"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInDown} // Number comes from top
                      >
                        {step.id}
                      </motion.div>
                      <div className="spacer" />
                      <motion.div 
                        className="step-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} // Content comes from bottom
                      >
                        <h4 className="step-title" dangerouslySetInnerHTML={{ 
                          __html: step.title.replace(' ', ' <span class="highlight">') + '</span>' 
                        }} />
                        <p className="step-desc">{step.desc}</p>
                      </motion.div>
                    </>
                  ) : (
                    // If position is Bottom: Content first, then Number
                    <>
                      <motion.div 
                        className="step-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInDown} // Content comes from top
                      >
                        <h4 className="step-title" dangerouslySetInnerHTML={{ 
                          __html: step.title.replace(' ', ' <span class="highlight">') + '</span>' 
                        }} />
                        <p className="step-desc">{step.desc}</p>
                      </motion.div>
                      <div className="spacer" />
                      <motion.div 
                        className="step-number"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} // Number comes from bottom
                      >
                        {step.id}
                      </motion.div>
                    </>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;