import React from 'react';
import './Results.css';

const Results = () => {
  return (
    <section className="results">
      <div className="container">
        <h2 className="section-title">Real Impact</h2>
        <p className="section-subtitle">
          Our randomized response instruments reveal biases that traditional polling misses, 
          delivering measurably superior accuracy in real-world studies.
        </p>

        <div className="example-grid">
          <div className="example-item">
            <div className="example-header">
              <span className="example-label">2020 Midwest Polling</span>
              <span className="example-badge">Case Study</span>
            </div>
            <div className="example-content">
              <div className="comparison-values">
                <div className="value-item">
                  <span className="value-label">Traditional Poll</span>
                  <span className="value-number">43%</span>
                </div>
                <div className="value-item">
                  <span className="value-label">With Our Method</span>
                  <span className="value-number">51%</span>
                </div>
                <div className="value-item">
                  <span className="value-label">Actual Result</span>
                  <span className="value-number">52%</span>
                </div>
              </div>
              <p className="example-insight">Traditional polls missed Trump supporters who were less likely to respond. Our randomized instruments detected and corrected this bias.</p>
            </div>
          </div>

        </div>



      </div>
    </section>
  );
};

export default Results;