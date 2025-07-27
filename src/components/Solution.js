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
              <div className="feature-header">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Revolutionary Sampling</h4>
              </div>
              <p>Traditional polling is broken. With response rates below 5%, the people who answer surveys are fundamentally different from those who don't—and demographic weighting can't fix this. Our breakthrough applies the Meng equation to reveal and correct these hidden biases.</p>
              
              <div className="meng-solution-container">
                <svg viewBox="0 0 900 220" className="meng-equation" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="equationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 0.1}}/>
                      <stop offset="50%" style={{stopColor: '#667eea', stopOpacity: 0.05}}/>
                      <stop offset="100%" style={{stopColor: '#667eea', stopOpacity: 0.1}}/>
                    </linearGradient>
                    <filter id="textShadow">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
                      <feOffset dx="0" dy="1" result="offsetblur"/>
                      <feFlood floodColor="#000000" floodOpacity="0.1"/>
                      <feComposite in2="offsetblur" operator="in"/>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Background */}
                  <rect x="0" y="0" width="900" height="220" fill="url(#equationGradient)" rx="8" opacity="0.3"/>
                  
                  {/* Main equation - left side */}
                  <g filter="url(#textShadow)">
                    <text x="50" y="90" fontFamily="Georgia, serif" fontSize="36" fill="#2d3748" fontWeight="500">
                      <tspan fontStyle="italic">Ȳ</tspan>
                      <tspan dx="2" fontSize="26" dy="6" fill="#4a5568">n</tspan>
                      <tspan dx="20" dy="-6" fontSize="36" fill="#2d3748">−</tspan>
                      <tspan dx="20" fontStyle="italic" fill="#2d3748">Ȳ</tspan>
                      <tspan dx="2" fontSize="26" dy="6" fill="#4a5568">N</tspan>
                      <tspan dx="35" dy="-6" fontSize="40" fill="#000000" fontWeight="500">=</tspan>
                    </text>
                  </g>
                  
                  {/* Three components with elegant underbraces */}
                  
                  {/* Component 1: rho_R,Y */}
                  <g transform="translate(270, 0)">
                    <text x="0" y="90" fontFamily="Georgia, serif" fontSize="32" fill="#2d3748" filter="url(#textShadow)">
                      <tspan fontStyle="italic" fontWeight="500">ρ</tspan>
                      <tspan fontSize="22" dy="6" fill="#4a5568">R,Y</tspan>
                    </text>
                    <path d="M -20 110 Q 25 130 70 110" stroke="#667eea" strokeWidth="2" fill="none" opacity="0.6"/>
                    <text x="25" y="150" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#667eea" textAnchor="middle" fontWeight="500">
                      data defect
                    </text>
                    <text x="25" y="166" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#667eea" textAnchor="middle" fontWeight="500">
                      correlation
                    </text>
                  </g>
                  
                  {/* Times symbol */}
                  <text x="370" y="90" fontFamily="Georgia, serif" fontSize="32" fill="#4a5568" opacity="0.7">×</text>
                  
                  {/* Component 2: Square root fraction */}
                  <g transform="translate(420, 45)">
                    {/* Square root symbol with smoother curve */}
                    <path d="M 0 35 L 8 55 L 15 15 Q 17 10 22 10 L 130 10" stroke="#2d3748" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    
                    {/* Fraction */}
                    <g transform="translate(25, 0)">
                      {/* Numerator */}
                      <text x="50" y="35" fontFamily="Georgia, serif" fontSize="26" fill="#2d3748" textAnchor="middle">
                        <tspan fontStyle="italic">N</tspan>
                        <tspan dx="8" fill="#4a5568">−</tspan>
                        <tspan dx="8" fontStyle="italic">n</tspan>
                      </text>
                      {/* Fraction bar */}
                      <line x1="10" y1="48" x2="90" y2="48" stroke="#2d3748" strokeWidth="1.8"/>
                      {/* Denominator */}
                      <text x="50" y="75" fontFamily="Georgia, serif" fontSize="26" fontStyle="italic" fill="#2d3748" textAnchor="middle">n</text>
                    </g>
                    
                    {/* Underbrace */}
                    <path d="M -10 65 Q 65 85 140 65" stroke="#667eea" strokeWidth="2" fill="none" opacity="0.6" transform="translate(0, 40)"/>
                    <text x="65" y="145" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#667eea" textAnchor="middle" fontWeight="500">
                      data quantity
                    </text>
                  </g>
                  
                  {/* Times symbol */}
                  <text x="590" y="90" fontFamily="Georgia, serif" fontSize="32" fill="#4a5568" opacity="0.7">×</text>
                  
                  {/* Component 3: sigma_Y */}
                  <g transform="translate(640, 0)">
                    <text x="0" y="90" fontFamily="Georgia, serif" fontSize="32" fill="#2d3748" filter="url(#textShadow)">
                      <tspan fontStyle="italic" fontWeight="500">σ</tspan>
                      <tspan fontSize="22" dy="6" fill="#4a5568">Y</tspan>
                    </text>
                    <path d="M -15 110 Q 20 130 55 110" stroke="#667eea" strokeWidth="2" fill="none" opacity="0.6"/>
                    <text x="20" y="150" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#667eea" textAnchor="middle" fontWeight="500">
                      data
                    </text>
                    <text x="20" y="166" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#667eea" textAnchor="middle" fontWeight="500">
                      difficulty
                    </text>
                  </g>
                  
                  {/* Decorative elements */}
                  <circle cx="850" cy="90" r="3" fill="#667eea" opacity="0.3"/>
                  <circle cx="860" cy="95" r="2" fill="#667eea" opacity="0.2"/>
                  <circle cx="855" cy="85" r="2" fill="#667eea" opacity="0.2"/>
                </svg>
                
                <div className="equation-explanation">
                  <p className="equation-title">The Meng Equation for Non-Response Bias</p>
                  <p>This fundamental equation reveals how survey bias emerges from three critical factors: the correlation between response tendency and the outcome of interest, the proportion of missing responses, and the inherent variability in the population.</p>
                </div>
                
                <div className="solution-approach">
                  <h5>How Niner Solves This</h5>
                  <div className="solution-steps">
                    <div className="solution-step">
                      <div className="step-icon">
                        <i className="fas fa-random"></i>
                      </div>
                      <div className="step-content">
                        <h6>Randomized Response Instruments</h6>
                        <p>We randomly vary survey protocols to detect when respondents differ from non-respondents—even after demographic weighting.</p>
                      </div>
                    </div>
                    <div className="solution-step">
                      <div className="step-icon">
                        <i className="fas fa-search"></i>
                      </div>
                      <div className="step-content">
                        <h6>Measure Hidden Correlations</h6>
                        <p>By comparing responses across different protocols, we quantify the ρ<sub>R,Y</sub> correlation that traditional polls ignore.</p>
                      </div>
                    </div>
                    <div className="solution-step">
                      <div className="step-icon">
                        <i className="fas fa-calculator"></i>
                      </div>
                      <div className="step-content">
                        <h6>Correct for True Bias</h6>
                        <p>Our models adjust estimates based on measured non-response patterns, not just demographic weights.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="feature-item feature-item-expanded">
            <div className="feature-content">
              <div className="feature-header">
                <div className="feature-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h4>AI-Powered Conversations</h4>
              </div>
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

          <div className="feature-item feature-item-expanded">
            <div className="feature-content">
              <div className="feature-header">
                <div className="feature-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h4>Dramatically Lower Costs, Superior Results</h4>
              </div>
              <p>Major pollsters burn through millions calling people who won't answer. We reach them where they actually want to engage—achieving better data at a fraction of the cost.</p>
              
              <div className="comparison-wrapper">
                <div className="survey-comparison old-survey">
                  <div className="survey-header">
                    <div className="survey-label">Traditional Phone Polling</div>
                    <div className="survey-badge old-badge">Expensive</div>
                  </div>
                  <div className="survey-content">
                    <div className="fixed-question">
                      Why costs keep climbing:
                    </div>
                    <div className="survey-options">
                      • 500,000+ calls for 4,000 responses<br/>
                      • 24/7 call center operations<br/>
                      • &lt;1% response rates<br/>
                      • Nobody answers unknown numbers
                    </div>
                  </div>
                  <div className="survey-disadvantages">
                    <div className="disadvantage-item">
                      <i className="fas fa-times-circle"></i>
                      <span>Massive waste</span>
                    </div>
                    <div className="disadvantage-item">
                      <i className="fas fa-times-circle"></i>
                      <span>Fixed overhead</span>
                    </div>
                    <div className="disadvantage-item">
                      <i className="fas fa-times-circle"></i>
                      <span>Can't scale</span>
                    </div>
                  </div>
                </div>
                
                <div className="survey-comparison new-survey">
                  <div className="survey-header">
                    <div className="survey-label">Niner AI System</div>
                    <div className="survey-badge new-badge">Efficient</div>
                  </div>
                  <div className="survey-content">
                    <div className="fixed-question">
                      How we slash costs:
                    </div>
                    <div className="survey-options">
                      • Automated conversations people enjoy<br/>
                      • Web interface meets users where they are<br/>
                      • One-time build scales infinitely<br/>
                      • 5-10% response rates expected
                    </div>
                  </div>
                  <div className="survey-advantages">
                    <div className="advantage-item">
                      <i className="fas fa-check-circle"></i>
                      <span>90% lower costs</span>
                    </div>
                    <div className="advantage-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Better engagement</span>
                    </div>
                    <div className="advantage-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Instant scale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;