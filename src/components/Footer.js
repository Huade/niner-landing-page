import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Niner Research</h3>
            <p>Turning Silent Voices Into Powerful Insights</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#demo">Request Demo</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#research">Research Papers</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Niner Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;