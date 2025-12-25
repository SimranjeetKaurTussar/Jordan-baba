import React, { useState, useEffect, useRef, type JSX } from "react";
import "./Footer.scss";

const QuickLinks = [
  { label: "About Us", href: "#" },
  { label: "Our Products", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQ's", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "User data deletion instructions", href: "#" },
];

const MainProducts = [
  { label: "Engineering And Electrical Industries", href: "#" },
  { label: "Chemicals", href: "#" },
  { label: "Agri Food", href: "#" },
  { label: "Pharma & Medical", href: "#" },
];

export default function Footer(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Close modal if clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  const openMessengerModal = () => {
    setIsModalOpen(true);
  };

  const closeMessengerModal = () => {
    setIsModalOpen(false);
  };

  const onSubmitSubscribe = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email) return;
    setSubmitting(true);

    // Replace with your subscribe API
    setTimeout(() => {
      console.log("subscribe:", email);
      setSubmitting(false);
      setEmail("");
      alert("Thanks for subscribing!");
    }, 900);
  };

  const onSubmitLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email || !password) return;
    console.log("Login attempt:", { email, password, rememberMe });
    // Replace with your login API call
    alert("Login attempt processed!");
    closeMessengerModal(); // Close modal after login attempt
  };

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer__inner container">
          <div className="footer-col brand-col">
            <div className="brand">
              <img
                src="https://jordanbaba.com/assets/jordanbaba/jordanbaba-logo-footer.svg"
                alt="JORDANBABA"
              />
            </div>

            <p className="brand-desc">
              Our company's founders &amp; CEO are electrical and mechanical
              engineers and businessman
            </p>

            <a className="brand-email" href="mailto:info@jordanbaba.com">
              info@jordanbaba.com
            </a>

            <div className="socials" aria-label="Social links">
              <a className="social" href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="social" href="#" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M23 3v1l-3 1a6 6 0 01-2 0 4 4 0 00-7 3v1A11 11 0 013 4s-4 9 5 13a11 11 0 01-7 2c9 5 20 0 20-11v-1"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="social" href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-14h4v2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="social" href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h3 className="col-title">Quick Link</h3>
            <ul className="link-list">
              {QuickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col links-col">
            <h3 className="col-title">Main Products</h3>
            <ul className="link-list">
              {MainProducts.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="footer-col subscribe-col"
            aria-labelledby="subscribe-heading"
          >
            <h3 id="subscribe-heading" className="col-title">
              Subscribe
            </h3>

            <form className="subscribe-form" onSubmit={onSubmitSubscribe}>
              <input
                id="footer-email"
                type="email"
                className="input-email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="btn-submit"
                type="submit"
                aria-disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="container small">
            <div className="bottom-row">
              <div>
                © {new Date().getFullYear()} Jordan Baba - All rights reserved.
              </div>
              <div className="bottom-right">
                <a href="#" className="privacy">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating messenger stub */}
        <button
          className="messenger-stub"
          onClick={openMessengerModal}
          aria-label="Open chat support"
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12a9 9 0 10-3.26 6.39L21 21l-1.61-2.67A8.96 8.96 0 0021 12z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Messenger</span>
        </button>
      </footer>

      {/* Login Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-content" ref={modalRef}>
            <button
              className="modal-close"
              onClick={closeMessengerModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-header">
              <svg
                className="lock-icon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  d="M12 15a3 3 0 100-6 3 3 0 000 6zM10 4a6 6 0 0112 0v3a1 1 0 001 1h1a3 3 0 013 3v7a3 3 0 01-3 3h-1a6 6 0 01-12 0h-1a3 3 0 01-3-3v-7a3 3 0 013-3h1V4z"
                  fill="currentColor"
                />
              </svg>
              <h2 id="modal-title" className="modal-title">
                Have account, Sign in
              </h2>
            </div>
            <form onSubmit={onSubmitLogin}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="modal-email">Email</label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-password">Password</label>
                  <input
                    id="modal-password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group checkbox-group">
                  <input
                    id="modal-remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="modal-remember-me">Remember me</label>
                </div>
              </div>
              <div className="modal-footer">
                <div className="signup-link">
                  New User?{" "}
                  <button type="button" className="signup-btn">
                    Signup
                  </button>
                </div>
                <button type="submit" className="btn-login">
                  Login & Start Chat
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
