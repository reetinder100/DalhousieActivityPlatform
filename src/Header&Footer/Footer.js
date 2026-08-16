import { FooterContainer } from "../styling/FooterStyle";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-title">Experience Dalhousie</h3>
          <p className="footer-text">
            Discover the beauty and charm of Dalhousie. Your gateway to
            unforgettable experiences in the heart of nature.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <span>📘</span>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <span>📸</span>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <span>🐦</span>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <span>▶️</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <Link to="/things-to-do" className="footer-link">
            Things to Do
          </Link>
          <Link to="/popular-locations" className="footer-link">
            Popular Locations
          </Link>
          <Link to="/about" className="footer-link">
            About Us
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="footer-link">
            Terms & Conditions
          </Link>
          <Link to="/help" className="footer-link">
            Help Center
          </Link>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Get in Touch</h3>
          <p className="footer-text">📍 Dalhousie, India</p>
          <p className="footer-text">📧 info@dalhousie.com</p>
          <p className="footer-text">📞 +91 123 456 7890</p>
          <p className="footer-text">🕐 24/7 Customer Support</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © 2024 Experience Dalhousie. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <Link to="/privacy" className="footer-bottom-link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="footer-bottom-link">
            Terms of Service
          </Link>
          <Link to="/cookies" className="footer-bottom-link">
            Cookie Policy
          </Link>
        </div>
      </div>
    </FooterContainer>
  );
};
