import React from 'react';
import './Solution.css';

const Solution = () => {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <h2 className="section-title">A Scientific Breakthrough in Survey Research</h2>
        <p className="section-subtitle">
          NINER combines randomized response instruments with AI chatbots to measure 
          and correct non-ignorable non-response
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎲</div>
            <h3>Randomized Response Instruments</h3>
            <p>
              We randomly assign different effort levels to measure who's missing. 
              This reveals the hidden differences between responders and non-responders 
              that traditional weighting can't detect.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Meet Polly: Your AI Survey Interviewer</h3>
            <p>
              Our custom-trained chatbot conducts natural conversations, probing deeply 
              into attitudes while maintaining engagement. No more fixed-format limitations.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Meng Equation Implementation</h3>
            <p>
              We're the first to operationalize modern statistical theory that properly 
              accounts for data defect correlation in large populations. We measure exactly 
              how non-responders differ from responders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;