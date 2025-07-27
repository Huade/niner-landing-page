import React from 'react';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
          <path d="M9 16V8"/>
          <path d="M12 16V10"/>
          <path d="M15 16V6"/>
        </svg>
      ),
      title: 'Market Research',
      description: 'Uncover authentic consumer sentiment from the silent majority who never respond to traditional surveys. Our advanced statistical methods account for systematic biases in market research data.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
          <path d="M12 2v8"/>
        </svg>
      ),
      title: 'Political Polling',
      description: 'Discover the hidden voter preferences that traditional polls miss. Our innovative methods correct for the systematic biases that led to major polling failures in recent elections.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          <path d="M12 6v12"/>
          <path d="M8 12h8"/>
        </svg>
      ),
      title: 'Government & Census Data',
      description: 'Generate accurate population statistics even when most people don\'t respond. Our methods work especially well for large-scale government surveys where traditional approaches fail.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="7"/>
          <circle cx="15" cy="15" r="7"/>
          <path d="M5.5 14.5L14.5 5.5"/>
        </svg>
      ),
      title: 'Academic Research',
      description: 'Transform your research with methods that account for who participates and who doesn\'t. Get accurate results even when your hardest-to-reach subjects remain silent.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Healthcare Surveys',
      description: 'Reveal true health outcomes by accounting for the fact that healthier patients are more likely to respond to surveys. Our methods uncover the experiences of those too ill to participate.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
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
          Traditional polling is broken. With response rates plummeting from 40% to less than 5%, the voices you hear are no longer representative. Our breakthrough statistical frameworks reveal what the silent majority truly thinks by correcting for who responds and who doesn't.
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