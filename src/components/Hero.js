import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-eyebrow">
          <svg className="problem-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          The Future of Survey Intelligence
        </div>
        <h1 className="hero-title">Conversations that reveal
        what people really think</h1>
        <p className="hero-subtitle">
        Traditional surveys are broken. 1% response rates. Fixed questions. 
        Biased results. Niner Research uses AI-powered conversations 
        to understand populations like never before.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary">Request a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;