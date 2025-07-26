import React from 'react';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      icon: '📊',
      title: 'Market Research',
      description: 'Understand true customer sentiment and reach the silent majority who never respond to traditional surveys.'
    },
    {
      icon: '🗳️',
      title: 'Political Polling',
      description: 'Uncover hidden voter preferences and correct systematic polling errors that have plagued elections since 2016.'
    },
    {
      icon: '🏛️',
      title: 'Government Data',
      description: 'Generate representative population statistics for policy decisions that affect millions.'
    }
  ];

  return (
    <section id="industries" className="industries">
      <div className="container">
        <h2 className="section-title">Transforming Research Across Industries</h2>
        
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