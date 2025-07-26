import React from 'react';
import './Problem.css';

const Problem = () => {
  return (
    <section id="problem" className="problem">
      <div className="container">
        <h2 className="section-title">The Hidden Crisis in Opinion Research</h2>
        
        <div className="crisis-list">
          {/* Crisis 1: Response Rate Collapse */}
          <div className="crisis-item">
            <div className="crisis-visual">
              <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="#667eea" stopOpacity="0.02"/>
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                </defs>
                
                {/* Grid lines */}
                <g className="chart-grid">
                  {[0, 10, 20, 30, 40].map((y, i) => (
                    <line key={i} x1="50" y1={200 - y * 4} x2="370" y2={200 - y * 4} 
                          stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
                  ))}
                </g>
                
                {/* Y-axis labels */}
                <g className="chart-labels">
                  {[0, 10, 20, 30, 40].map((y, i) => (
                    <text key={i} x="40" y={205 - y * 4} 
                          fontSize="11" fill="#999" textAnchor="end">{y}%</text>
                  ))}
                </g>
                
                {/* X-axis labels */}
                <g className="chart-labels">
                  <text x="70" y="230" fontSize="11" fill="#666" textAnchor="middle">1997</text>
                  <text x="130" y="230" fontSize="11" fill="#666" textAnchor="middle">2005</text>
                  <text x="190" y="230" fontSize="11" fill="#666" textAnchor="middle">2010</text>
                  <text x="250" y="230" fontSize="11" fill="#666" textAnchor="middle">2015</text>
                  <text x="310" y="230" fontSize="11" fill="#666" textAnchor="middle">2018</text>
                  <text x="370" y="230" fontSize="11" fill="#666" textAnchor="middle">2025</text>
                </g>
                
                {/* Area under curve */}
                <path d="M 70,56 L 130,100 L 190,130 L 250,160 L 310,176 L 370,190 L 370,200 L 70,200 Z" 
                      fill="url(#chartGradient)"/>
                
                {/* Response rate line - solid portion (1997-2018) */}
                <path d="M 70,56 L 130,100 L 190,130 L 250,160 L 310,176" 
                      fill="none" stroke="url(#lineGradient)" strokeWidth="3"/>
                
                {/* Response rate line - dashed portion (2018-2025) */}
                <path d="M 310,176 L 370,190" 
                      fill="none" stroke="#764ba2" strokeWidth="3" strokeDasharray="6,6"/>
                
                {/* Y-axis label */}
                <text x="20" y="25" fontSize="12" fill="#666" textAnchor="start">
                  Response rate
                </text>
              </svg>
            </div>
            <div className="crisis-content">
              <h3>Collapse of Response Rates</h3>
              <p className="crisis-stat">&lt;1%</p>
              <p className="crisis-desc">
                Traditional polling is broken. Major pollsters struggle with sub-1% response rates—burning through 500,000+ calls just to reach 4,000 people.
              </p>
            </div>
          </div>

          {/* Crisis 2: Systematic Bias */}
          <div className="crisis-item">
            <div className="crisis-visual">
              <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
                {/* X-axis */}
                <line x1="50" y1="120" x2="480" y2="120" stroke="#333" strokeWidth="2"/>
                <text x="265" y="145" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#666">
                  Outcome to be measured by survey
                </text>
                
                {/* Gap indicator (behind error bars) */}
                <g id="gap">
                  <path d="M 180 80 Q 230 60 280 80" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="4,4"/>
                  <text x="230" y="55" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#999">
                    The Gap
                  </text>
                </g>
                
                {/* What polls show (left) */}
                <g id="polls">
                  <text x="125" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#6b7280">
                    What polls show
                  </text>
                  
                  {/* Error bar */}
                  <line x1="70" y1="80" x2="180" y2="80" stroke="#ef4444" strokeWidth="4"/>
                  <line x1="70" y1="74" x2="70" y2="86" stroke="#ef4444" strokeWidth="4"/>
                  <line x1="180" y1="74" x2="180" y2="86" stroke="#ef4444" strokeWidth="4"/>
                  
                  {/* Point */}
                  <circle cx="125" cy="80" r="7" fill="#ef4444"/>
                  
                  {/* Label */}
                  <text x="125" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#ef4444">
                    The 1% who answer
                  </text>
                </g>
                
                {/* Reality (right) */}
                <g id="reality">
                  <text x="375" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#6b7280">
                    Reality
                  </text>
                  
                  {/* Error bar */}
                  <line x1="280" y1="80" x2="470" y2="80" stroke="#667eea" strokeWidth="4"/>
                  <line x1="280" y1="74" x2="280" y2="86" stroke="#667eea" strokeWidth="4"/>
                  <line x1="470" y1="74" x2="470" y2="86" stroke="#667eea" strokeWidth="4"/>
                  
                  {/* Point */}
                  <circle cx="375" cy="80" r="7" fill="#667eea"/>
                  
                  {/* Label */}
                  <text x="375" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#667eea">
                    Everyone
                  </text>
                </g>
              </svg>
            </div>
            <div className="crisis-content">
              <h3>Non-Ignorable Non-Response</h3>
              <p className="crisis-stat">Systematic Bias</p>
              <p className="crisis-desc">
                The 99% who don't answer aren't just missing data points. They're systematically different from those who do, creating a built-in bias that no amount of weighting can fix.
              </p>
            </div>
          </div>

          {/* Crisis 3: Confidently Wrong */}
          <div className="crisis-item">
            <div className="crisis-visual">
              <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="samplingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="#667eea" stopOpacity="0.02"/>
                  </linearGradient>
                  <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                </defs>
                
                {/* Grid lines */}
                <g className="chart-grid">
                  {[0, 1, 2, 3, 4].map((y, i) => (
                    <line key={i} x1="50" y1={200 - y * 35} x2="350" y2={200 - y * 35} 
                          stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
                  ))}
                  {[0, 1, 2, 3, 4, 5].map((x, i) => (
                    <line key={i} x1={50 + x * 50} y1="60" x2={50 + x * 50} y2="200" 
                          stroke="#e0e0e0" strokeWidth="0.5"/>
                  ))}
                </g>
                
                {/* Axes */}
                <g stroke="#333" strokeWidth="2" fill="none">
                  <line x1="50" y1="200" x2="350" y2="200"/>
                  <line x1="50" y1="60" x2="50" y2="200"/>
                </g>
                
                {/* Y-axis label */}
                <text x="20" y="25" fontSize="12" fill="#666" textAnchor="start">
                  Sampling error
                </text>
                
                {/* X-axis label */}
                <text x="200" y="230" fontSize="12" fill="#666" textAnchor="middle">
                  Data Quantity
                </text>
                
                {/* Area under curve */}
                <path d="M 50 200 
                         C 70 170, 90 150, 120 135
                         C 150 125, 180 118, 210 113
                         C 240 109, 270 106, 300 104
                         C 330 102, 350 101, 350 100
                         L 350 200 L 50 200 Z" 
                      fill="url(#samplingGradient)"/>
                
                {/* The curve: sampling error decreases with sqrt(data quantity) */}
                <path d="M 50 200 
                         C 70 170, 90 150, 120 135
                         C 150 125, 180 118, 210 113
                         C 240 109, 270 106, 300 104
                         C 330 102, 350 101, 350 100"
                      stroke="url(#curveGradient)" strokeWidth="3" fill="none"/>
                
                
              </svg>
            </div>
            <div className="crisis-content">
              <h3>The Big Data Paradox</h3>
              <p className="crisis-stat">More Data, More Wrong</p>
              <p className="crisis-desc">
                Without taking data quality into account, population inferences 
                with Big Data are subject to a Big Data Paradox: the more the data, the surer we fool ourselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;