import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './CrmSection.scss';

// Mock Data for Carousel Images
const CAROUSEL_IMAGES = [
  {
    id: 1,
    src: "	https://jordanbaba.com/assets/jordanbaba/crm-1.png", // Replace with your CRM dashboard screenshot
    alt: "Meeting Management"
  },
  {
    id: 2,
    src: "	https://jordanbaba.com/assets/jordanbaba/crm-2.png",
    alt: "Analytics Dashboard"
  },
  {
    id: 3,
    src: "https://jordanbaba.com/assets/jordanbaba/crm-3.png",
    alt: "Lead Tracking"
  }
];

const FEATURES = [
  {
    title: "Customer Satisfaction & Retention",
    desc: "Organize, track, and nurture leads effortlessly to boost conversions and drive growth."
  },
  {
    title: "Lead Management",
    desc: "Save time with smart automation that streamlines sales and customer engagement."
  },
  {
    title: "Automated Workflows",
    desc: "Empower decisions with instant access to customer interactions and performance analytics."
  },
  {
    title: "Real-Time Insights",
    desc: "Strengthen loyalty by delivering outstanding experiences that keep customers coming back."
  }
];

const CrmSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play Carousel Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 4500); // Change image every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="crm-section">
      <div className="container">
        <div className="crm-grid">
          {/* LEFT: Auto Carousel */}
          <div className="crm-visual">

              <div className="carousel-content">
                <AnimatePresence mode='wait'>
                  <motion.img 
                    key={currentIndex}
                    src={CAROUSEL_IMAGES[currentIndex].src}
                    alt={CAROUSEL_IMAGES[currentIndex].alt}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="carousel-img"
                  />
                </AnimatePresence>
              </div>

            {/* Carousel Pagination Dots */}
            <div className="carousel-pagination">
              {CAROUSEL_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Text Content (Animates from Downside) */}
          <motion.div 
            className="crm-content"
            initial={{ opacity: 0, y: 60 }} // Starts lower
            whileInView={{ opacity: 1, y: 0 }} // Moves up to position
            viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="crm-title">What is Jordan Baba CRM?</h2>
            
            <p className="crm-desc">
              JordanBaba's CRM is a custom-built solution designed to simplify and enhance business interactions. 
              Tailored for B2B companies, it empowers you to efficiently manage leads, track customer engagement, 
              and build stronger relationships.
            </p>

            <div className="crm-features">
              {FEATURES.map((feat, i) => (
                <div key={i} className="feature-row">
                  <div className="icon-wrap">
                    <CheckCircle2 size={24} className="check-icon" />
                  </div>
                  <div className="text-wrap">
                    <h4 className="feat-title">{feat.title}</h4>
                    <p className="feat-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CrmSection;
