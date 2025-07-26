import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">The Future of Surveys is Here</h1>
        <p className="hero-subtitle">
          While traditional polling struggles with 1% response rates and fixed questions, 
          Niner Research combines revolutionary sampling methods with AI-powered chatbots 
          to deliver unprecedented accuracy and deep insights.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;