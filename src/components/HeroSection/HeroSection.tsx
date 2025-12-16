// src/components/HeroSection/HeroSection.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Truck, Layers, Globe } from 'lucide-react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Main Banner Area */}
      <div className="hero-banner">
        <div className="hero-banner__bg">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop" 
            alt="Business Meeting" 
          />
          <div className="hero-banner__overlay" />
        </div>

        <div className="container">
          <div className="hero-content">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-subtitle"
            >
              SELL ON JORDAN BABA
            </motion.h3>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-title"
            >
              Sell online to <br />
              worldwide customers
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-desc"
            >
              With enhanced tools and features, post your products at Jordan Baba <br />
              and grow your business across the world.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.5 }}
              className="hero-btn"
            >
              Start Selling
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <StatItem icon={Package} number={2000} label="Products" delay={0.1} />
            <StatItem icon={Truck} number={1000} label="Suppliers" delay={0.2} />
            <StatItem icon={Layers} number={12000} label="Product Categories" delay={0.3} />
            <StatItem icon={Globe} number={4000} label="Countries and Regions" delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Animated Stats
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatItem = ({ icon: Icon, number, label, delay }: any) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="stat-icon">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <div className="stat-number">
        {isInView ? <Counter from={0} to={number} /> : 0}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

// Simple Number Counter Animation
const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = {
      value: from,
      stop: false
    };

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      if (controls.stop) return;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4);
      
      const currentVal = Math.floor(from + (to - from) * ease);
      node.textContent = currentVal.toLocaleString(); // Add commas

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
    return () => { controls.stop = true; };
  }, [from, to]);

  return <span ref={nodeRef} />;
};

export default HeroSection;
