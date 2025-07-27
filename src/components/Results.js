import React from 'react';
import './Results.css';

const Results = () => {
  return (
    <section className="results">
      <div className="container">
        <h2 className="section-title">Proven Results That Matter</h2>
        <p className="section-subtitle">
          Our revolutionary approach doesn't just promise better data—it delivers measurably superior results 
          that reveal hidden insights traditional polling misses.
        </p>

        <div className="results-grid">
          <div className="result-card highlight">
            <div className="result-number">57%</div>
            <h3>vs 43%</h3>
            <p>Trump approval in Midwest when accounting for non-response bias vs traditional weighting</p>
            <span className="result-label">Sampling Innovation</span>
          </div>

          <div className="result-card">
            <div className="result-number">33%</div>
            <h3>vs 17%</h3>
            <p>Democrats with conservative racial views revealed through advanced modeling</p>
            <span className="result-label">Hidden Insights</span>
          </div>

          <div className="result-card">
            <div className="result-number">55%</div>
            <h3>vs 77%</h3>
            <p>Actual voter turnout intention after correcting for response bias</p>
            <span className="result-label">Accuracy Improvement</span>
          </div>
        </div>



        <div className="proof-section">
          <h3>Research-Backed Innovation</h3>
          <p className="proof-text">
            Our methods are grounded in peer-reviewed research and real-world validation. 
            Led by Georgetown University's Michael Bailey, our approach combines decades of survey science 
            with cutting-edge AI to solve the fundamental challenges facing modern research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;