// src/components/TopBar.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Globe, Flag, ChevronDown, X } from 'lucide-react';
import './TopBar.scss';

const TopBar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = ['Home', 'About Us', 'Our Products', 'Contact Us'];
  const socialIcons = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Twitter, label: 'Twitter' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__wrapper">
          {/* Left Navigation */}
          <nav className="topbar__nav-left">
            {navItems.map((item) => (
              <a key={item} href="#" className="topbar__nav-link">
                {item}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="topbar__right">
            {/* Language & Currency Dropdown */}
            <div className="topbar__dropdown-wrapper">
              <button 
                className="topbar__dropdown-trigger"
                onClick={() => toggleDropdown('currency')}
              >
                <Globe size={14} />
                <span>English-USD</span>
                <ChevronDown size={12} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'currency' && (
                  <DropdownPanel 
                    title="Set Language & Currency"
                    onClose={() => setActiveDropdown(null)}
                  >
                    <div className="dropdown__content">
                      <select className="dropdown__select">
                        <option>English</option>
                        <option>Arabic</option>
                      </select>
                      <select className="dropdown__select">
                        <option>USD - US Dollar</option>
                        <option>JOD - Jordan Dinar</option>
                      </select>
                      <button className="dropdown__btn-save">Save</button>
                    </div>
                  </DropdownPanel>
                )}
              </AnimatePresence>
            </div>

            {/* Country Dropdown */}
            <div className="topbar__dropdown-wrapper">
              <button 
                className="topbar__dropdown-trigger"
                onClick={() => toggleDropdown('country')}
              >
                <Flag size={14} />
                <span>Country</span>
                <ChevronDown size={12} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'country' && (
                  <DropdownPanel 
                    title="Select Country"
                    onClose={() => setActiveDropdown(null)}
                  >
                    <div className="dropdown__content">
                      <p className="dropdown__hint">
                        Select your delivery country to see local shipping options.
                      </p>
                      <input 
                        type="text" 
                        placeholder="Search country..." 
                        className="dropdown__input"
                      />
                      <button className="dropdown__btn-save">Save</button>
                    </div>
                  </DropdownPanel>
                )}
              </AnimatePresence>
            </div>

            {/* Social Icons */}
            <div className="topbar__socials">
              {socialIcons.map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  className="topbar__social-link"
                  whileHover={{ scale: 1.2 }}
                  aria-label={label}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define interface for DropdownPanel props
interface DropdownPanelProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

// Reusable Dropdown Panel Component
const DropdownPanel = ({ title, onClose, children }: DropdownPanelProps) => (
  <>
    <div className="dropdown__backdrop" onClick={onClose} />
    <motion.div
      className="dropdown__panel"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="dropdown__header">
        <h3>{title}</h3>
        <button className="dropdown__close" onClick={onClose}>
          <X size={14} />
        </button>
      </div>
      {children}
    </motion.div>
  </>
);

export default TopBar;
