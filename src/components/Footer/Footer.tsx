import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-col brand">
          <h2 className="logo">
            <img
              src="	https://jordanbaba.com/assets/jordanbaba/jordanbaba-logo-footer.svg"
              alt="footer"
              width={243}
              height={48}
            />
          </h2>

          <p className="desc">
            Our company's founders & CEO are electrical and mechanical engineers
            and businessman
          </p>

          <p className="email">info@jordanbaba.com</p>

          <div className="socials">
            <span>f</span>
            <span>x</span>
            <span>in</span>
            <span>ig</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Link</h3>
          <ul>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>FAQ's</li>
            <li>Privacy Policy</li>
            <li>User data deletion instructions</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h3>Main Products</h3>
          <ul>
            <li>Engineering And Electrical Industries</li>
            <li>Chemicals</li>
            <li>Agri Food</li>
            <li>Pharma & Medical</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div className="footer-col subscribe">
          <h3>Subscribe</h3>
          <input type="email" placeholder="Enter Email" />
          <button>Submit</button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2025 Jordan Baba - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
