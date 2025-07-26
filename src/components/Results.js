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

        <div className="hidden-crisis-section">
          <h3 className="hidden-crisis-title">The Hidden Crisis in Polling</h3>
          <p className="hidden-crisis-subtitle">
            Traditional surveys don't just struggle with low response rates—they systematically miss entire perspectives, 
            creating blind spots that distort our understanding of public opinion.
          </p>
          
          <div className="crisis-examples">
            <div className="crisis-example">
              <div className="crisis-stat">500,000</div>
              <h4>Calls for 4,000 Responses</h4>
              <p>NY Times/Siena polls make half a million calls to get 4,000 responses. When 99% don't respond, how representative can the 1% who do really be?</p>
            </div>

            <div className="crisis-example">
              <div className="crisis-stat">14%</div>
              <h4>Systematic Bias Gap</h4>
              <p>Our research revealed Trump support among Midwesterners was 14 percentage points higher (57% vs 43%) when accounting for non-response bias.</p>
            </div>

            <div className="crisis-example">
              <div className="crisis-stat">16%</div>
              <h4>Hidden Attitudes</h4>
              <p>Among Democrats, 16% more held conservative racial views than traditional surveys detected, showing how response bias masks true opinions.</p>
            </div>
          </div>
        </div>

        <div className="breakthrough-section">
          <h3 className="breakthrough-title">The Niner Breakthrough</h3>
          <div className="breakthrough-features">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <div className="feature-content">
                <h4>Revolutionary Sampling</h4>
                <p>Randomized response instruments that measure and correct for non-ignorable non-response, delivering accuracy even with low response rates.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">02</div>
              <div className="feature-content">
                <h4>AI-Powered Conversations</h4>
                <p>Custom-trained chatbots that adapt questions based on responses, creating natural conversations that reveal deeper insights than fixed surveys.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">03</div>
              <div className="feature-content">
                <h4>High-Dimensional Analysis</h4>
                <p>Advanced algorithms that map complex response patterns to actionable insights, uncovering hidden attitudes and motivations.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">04</div>
              <div className="feature-content">
                <h4>Cost-Effective Scale</h4>
                <p>Automated systems that deliver premium insights at a fraction of traditional polling costs, making advanced research accessible.</p>
              </div>
            </div>
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