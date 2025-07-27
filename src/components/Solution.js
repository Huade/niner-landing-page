import React from 'react';
import './Solution.css';

const Solution = () => {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <h2 className="section-title">The Niner Breakthrough</h2>
        <div className="breakthrough-features">
          <div className="feature-item feature-item-expanded">
            <div className="feature-content">
              <h4>Revolutionary Sampling</h4>
              <p>Our randomized response instruments detect when poll respondents systematically differ from non-respondents—revealing biases that traditional weighting can't fix.</p>
              
              <div className="comparison-wrapper">
                <div className="survey-comparison control-group">
                  <div className="survey-header">
                    <div className="survey-label">Low-Response Protocol</div>
                  </div>
                  <div className="survey-content">
                    <div className="group-description">
                      <p className="protocol-desc">Topic selection filter</p>
                      <div className="question-example">
                        <p>"What topics interest you most?"</p>
                        <p className="sub-text">→ Only "Current Events" respondents see deficit questions</p>
                      </div>
                      <div className="example-result">
                        <span>78% "very concerned" about budget deficit</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="survey-comparison treatment-group">
                  <div className="survey-header">
                    <div className="survey-label">High-Response Protocol</div>
                  </div>
                  <div className="survey-content">
                    <div className="group-description">
                      <p className="protocol-desc">Direct questions</p>
                      <div className="question-example">
                        <p>"How concerned are you about the federal budget deficit?"</p>
                        <p className="sub-text">→ All respondents answer immediately</p>
                      </div>
                      <div className="example-result">
                        <span>55% "very concerned" about budget deficit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bias-reveal">
                <span>23-point gap reveals how politically engaged respondents skew traditional polls</span>
              </div>
            </div>
          </div>

          <div className="feature-item feature-item-expanded">
            <div className="feature-content">
              <h4>AI-Powered Conversations</h4>
              <p>Custom-trained chatbots that adapt questions based on responses, creating natural conversations that reveal deeper insights than fixed surveys.</p>
              
              <div className="comparison-wrapper">
                <div className="survey-comparison old-survey">
                  <div className="survey-header">
                    <div className="survey-label">Traditional Survey</div>
                    <div className="survey-badge old-badge">Limited</div>
                  </div>
                  <div className="survey-content">
                    <div className="fixed-question">
                      Q: What is your view about the U.S. federal budget deficit?
                    </div>
                    <div className="survey-options">
                      ○ Too high<br/>
                      ○ Too low<br/>
                      ○ Neither<br/>
                      ○ Don't know
                    </div>
                  </div>
                  <div className="survey-disadvantages">
                    <div className="disadvantage-item">
                      <i className="fas fa-times-circle"></i>
                      <span>Limited context</span>
                    </div>
                    <div className="disadvantage-item">
                      <i className="fas fa-times-circle"></i>
                      <span>Surface insights</span>
                    </div>
                    <div className="disadvantage-item">
                      <i className="fas fa-times-circle"></i>
                      <span>No follow-up</span>
                    </div>
                  </div>
                </div>

                <div className="survey-comparison new-survey">
                  <div className="survey-header">
                    <div className="survey-label">Niner Research AI</div>
                    <div className="survey-badge new-badge">Advanced</div>
                  </div>
                  <div className="survey-content">
                    <div className="chat-conversation">
                      <div className="chat-bubble">
                        Hey! Quick question - what do you think about all this government spending lately?
                      </div>
                      <div className="response-bubble">
                      honestly its crazy high
                      </div>
                      <div className="chat-bubble">
                      Yeah I hear that a lot. What bugs you most about it?
                      </div>
                      <div className="response-bubble">
                      idk just feels like they spend on everything except what actually helps ppl
                      </div>
                    </div>
                  </div>
                  <div className="survey-advantages">
                    <div className="advantage-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Natural flow</span>
                    </div>
                    <div className="advantage-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Deep insights</span>
                    </div>
                    <div className="advantage-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Adaptive questioning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h4>High-Dimensional Analysis</h4>
              <p>Advanced algorithms that map complex response patterns to actionable insights, uncovering hidden attitudes and motivations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;