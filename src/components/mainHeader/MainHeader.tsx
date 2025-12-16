// src/components/MainHeader.tsx
import React, { useState } from 'react';
import { Search, Camera, User, FileText, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';
import './MainHeader.scss';

const MainHeader = () => {
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <header className="main-header">
      <div className="container">
        <div className="main-header__wrapper">
          
          {/* Logo Section */}
          <div className="main-header__logo">
            <h1 className="main-header__brand-name">
              <span className="main-header__brand-red">JORDAN</span>
              <span className="main-header__brand-green">BABA</span>
            </h1>
            <p className="main-header__tagline">ECOMMERCE SOLUTION AT YOUR FINGERTIPS</p>
          </div>

          {/* Search Bar */}
          <div className={`main-header__search ${searchFocus ? 'active' : ''}`}>
            <input
              type="text"
              placeholder="Enter a keyword to search products..."
              className="main-header__search-input"
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            <button className="main-header__search-camera" aria-label="Image Search">
              <Camera size={18} />
            </button>
            <button className="main-header__search-btn">
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>

          {/* Action Items */}
          <div className="main-header__actions">
            <ActionItem 
              icon={User} 
              title="Become a" 
              subtitle="Supplier" 
            />
            <ActionItem 
              icon={FileText} 
              title="Request for" 
              subtitle="Quotations" 
            />
            <ActionItem 
              icon={LogIn} 
              title="Welcome" 
              subtitle="Sign In / Register" 
              highlight 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

interface ActionItemProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  highlight?: boolean;
}

const ActionItem: React.FC<ActionItemProps> = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  highlight 
}) => (
  <motion.button 
    className={`action-item ${highlight ? 'action-item--highlight' : ''}`}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    <div className="action-item__icon">
      <Icon size={20} />
    </div>
    <div className="action-item__text">
      <span className="action-item__title">{title}</span>
      <span className="action-item__subtitle">{subtitle}</span>
    </div>
  </motion.button>
);

export default MainHeader;
