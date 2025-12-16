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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const renderTitle = (title: string) => {
  const [first, ...rest] = title.split(' ');
  return (
    <>
      <span className="text-red">{first}</span>{' '}
      <span className="text-black">{rest.join(' ')}</span>
    </>
  );
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

        {/* Process Wrapper with SVG Connectors + Cards */}
        <div className="process-wrapper">
          {/* SVG Background with connection lines */}
          <svg className="svg-connector" viewBox="0 0 1200 500" preserveAspectRatio="none">
            {/* Left vertical line connecting steps 1 and 2 */}
            <line x1="150" y1="0" x2="150" y2="500" stroke="#e5e5e5" strokeWidth="16" strokeLinecap="round" />
            {/* Middle vertical line connecting steps 2 and 3 */}
            <line x1="600" y1="0" x2="600" y2="500" stroke="#e5e5e5" strokeWidth="16" strokeLinecap="round" />
            {/* Right vertical line connecting steps 3 and 4 */}
            <line x1="1050" y1="0" x2="1050" y2="500" stroke="#e5e5e5" strokeWidth="16" strokeLinecap="round" />
            
            {/* Connecting curves between columns */}
            {/* Arch from step 1 to step 2 (top) */}
            <path d="M 150,80 Q 150,40 300,40 Q 450,40 600,80" fill="none" stroke="#e5e5e5" strokeWidth="16" strokeLinecap="round" />
            
            {/* Curve from step 2 to step 3 (bottom) */}
            <path d="M 600,420 Q 600,460 750,460 Q 900,460 1050,420" fill="none" stroke="#e5e5e5" strokeWidth="16" strokeLinecap="round" />
            
            {/* Start dot */}
            <circle cx="150" cy="500" r="14" fill="#e0e0e0" />
          </svg>

          {/* Steps Grid with Cards */}
          <div className="steps-grid">
            {STEPS.map((step) => {
              const isTop = step.position === 'top';
              const numColorClass = isTop ? 'num-red' : 'num-black';

              return (
                <div
                  key={step.id}
                  className={`step-item ${isTop ? 'pos-top' : 'pos-bottom'}`}
                >
                  <motion.div
                    className={`step-card ${numColorClass}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={cardVariants}
                  >
                    {isTop ? (
                      <>
                        <div className="step-number">{step.id}</div>
                        <div className="step-content">
                          <h4 className="step-title">{renderTitle(step.title)}</h4>
                          <p className="step-desc">{step.desc}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="step-content">
                          <h4 className="step-title">{renderTitle(step.title)}</h4>
                          <p className="step-desc">{step.desc}</p>
                        </div>
                        <div className="step-number">{step.id}</div>
                      </>
                    )}
                  </motion.div>
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
