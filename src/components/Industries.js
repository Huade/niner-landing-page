import React from 'react';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 9v6"/>
          <path d="M12 7v8"/>
          <path d="M15 11v4"/>
        </svg>
      ),
      title: 'Market Research',
      description: 'Uncover authentic consumer sentiment from the silent majority who never respond to traditional surveys. Our advanced statistical methods account for systematic biases in market research data.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="1"/>
          <rect x="8" y="6" width="8" height="4"/>
          <rect x="8" y="14" width="8" height="4"/>
        </svg>
      ),
      title: 'Political Polling',
      description: 'Discover the hidden voter preferences that traditional polls miss. Our innovative methods correct for the systematic biases that led to major polling failures in recent elections.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18"/>
          <path d="M5 21V7l7-4l7 4v14"/>
          <path d="M12 3v8"/>
          <path d="M5 11h14"/>
          <rect x="9" y="14" width="6" height="7"/>
        </svg>
      ),
      title: 'Government & Census Data',
      description: 'Generate accurate population statistics even when most people don\'t respond. Our methods work especially well for large-scale government surveys where traditional approaches fail.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
          <path d="M11 8v6"/>
          <path d="M8 11h6"/>
        </svg>
      ),
      title: 'Academic Research',
      description: 'Transform your research with methods that account for who participates and who doesn\'t. Get accurate results even when your hardest-to-reach subjects remain silent.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: 'Healthcare Surveys',
      description: 'Reveal true health outcomes by accounting for the fact that healthier patients are more likely to respond to surveys. Our methods uncover the experiences of those too ill to participate.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22"/>
          <polyline points="17 7 12 2 7 7"/>
          <polyline points="7 17 12 22 17 17"/>
          <path d="M4.50 11.5h5"/>
          <path d="M14.5 11.5h5"/>
        </svg>
      ),
      title: 'Financial Services',
      description: 'Understand the financial behaviors of all income levels, not just the wealthy who typically respond to surveys. Our methods reveal the true distribution of financial habits across society.'
    }
  ];

  return (
    <section id="industries" className="industries">
      <div className="container">
        <h2 className="section-title">Transforming Research Across Industries</h2>
        <p className="section-subtitle">
          Traditional polling is broken. With response rates plummeting from 40% to less than 1%, the voices you hear are no longer representative. Our breakthrough statistical frameworks reveal what the silent majority truly thinks by correcting for who responds and who doesn't.
        </p>
        
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;