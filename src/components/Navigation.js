import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <svg width="220" height="40" viewBox="0 0 220 40" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(110, 25)">
              <text x="0" y="0" fontFamily="Helvetica Neue, sans-serif" fontSize="18" fontWeight="200" fill="currentColor" textAnchor="middle" letterSpacing="3">NINER RESEARCH</text>
            </g>
          </svg>
        </div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#problem" onClick={() => setMobileMenuOpen(false)}>Problem</a>
          <a href="#solution" onClick={() => setMobileMenuOpen(false)}>Solution</a>
          <a href="#industries" onClick={() => setMobileMenuOpen(false)}>Industries</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)}>Team</a>
          <a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;