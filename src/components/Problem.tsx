import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          The Hidden Crisis in Opinion Research
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Crisis 1: Response Rate Collapse */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#34699A" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="#34699A" stopOpacity="0.02"/>
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#113F67"/>
                    <stop offset="100%" stopColor="#34699A"/>
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
                      fill="none" stroke="#34699A" strokeWidth="3" strokeDasharray="6,6"/>
                {/* Y-axis label */}
                <text x="20" y="25" fontSize="12" fill="#666">
                  Response rate
                </text>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collapse of Response Rates</h3>
              <p className="text-5xl font-extrabold text-blue-900 mb-4">&lt;1%</p>
              <p className="text-gray-600 leading-relaxed">
                Traditional polling is broken. Major pollsters struggle with sub-1% response rates—burning through 500,000+ calls just to reach 4,000 people.
              </p>
            </div>
          </div>

          {/* Crisis 2: Systematic Bias */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* X-axis */}
                <line x1="50" y1="120" x2="480" y2="120" stroke="#333" strokeWidth="2"/>
                <text x="265" y="145" textAnchor="middle" fontSize="12" fill="#666">
                  Outcome to be measured by survey
                </text>
                {/* Gap indicator (behind error bars) */}
                <g id="gap">
                  <path d="M 180 80 Q 230 60 280 80" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="4,4"/>
                  <text x="230" y="55" textAnchor="middle" fontSize="11" fill="#999">
                    The Gap
                  </text>
                </g>
                {/* What polls show (left) */}
                <g id="polls">
                  <text x="125" y="30" textAnchor="middle" fontSize="16" fontWeight="600" fill="#6b7280">
                    What polls show
                  </text>
                  {/* Error bar */}
                  <line x1="70" y1="80" x2="180" y2="80" stroke="#ef4444" strokeWidth="4"/>
                  <line x1="70" y1="74" x2="70" y2="86" stroke="#ef4444" strokeWidth="4"/>
                  <line x1="180" y1="74" x2="180" y2="86" stroke="#ef4444" strokeWidth="4"/>
                  {/* Point */}
                  <circle cx="125" cy="80" r="7" fill="#ef4444"/>
                  {/* Label */}
                  <text x="125" y="105" textAnchor="middle" fontSize="12" fill="#ef4444">
                    The 1% who answer
                  </text>
                </g>
                {/* Reality (right) */}
                <g id="reality">
                  <text x="375" y="30" textAnchor="middle" fontSize="16" fontWeight="600" fill="#6b7280">
                    Reality
                  </text>
                  {/* Error bar */}
                  <line x1="280" y1="80" x2="470" y2="80" stroke="#34699A" strokeWidth="4"/>
                  <line x1="280" y1="74" x2="280" y2="86" stroke="#34699A" strokeWidth="4"/>
                  <line x1="470" y1="74" x2="470" y2="86" stroke="#34699A" strokeWidth="4"/>
                  {/* Point */}
                  <circle cx="375" cy="80" r="7" fill="#34699A"/>
                  {/* Label */}
                  <text x="375" y="105" textAnchor="middle" fontSize="12" fill="#34699A">
                    Everyone
                  </text>
                </g>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Ignorable Non-Response</h3>
              <p className="text-3xl font-extrabold text-blue-900 mb-4">Systematic Bias</p>
              <p className="text-gray-600 leading-relaxed">
                The 99% who don't answer aren't just missing data points. They're systematically different from those who do, creating a built-in bias that no amount of weighting can fix.
              </p>
            </div>
          </div>

          {/* Crisis 3: Confidently Wrong */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <svg viewBox="-10 -10 410 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <defs>
                  <linearGradient id="samplingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#34699A" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="#34699A" stopOpacity="0.02"/>
                  </linearGradient>
                  <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#113F67"/>
                    <stop offset="100%" stopColor="#34699A"/>
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <g className="chart-grid">
                  {[0, 1, 2, 3, 4].map((y, i) => (
                    <line key={i} x1="50" y1={140 - y * 30} x2="370" y2={140 - y * 30} 
                          stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
                  ))}
                </g>
                {/* Y-axis labels */}
                <g className="chart-labels">
                  <text x="40" y="145" fontSize="11" fill="#999" textAnchor="end">Small</text>
                  <text x="40" y="85" fontSize="11" fill="#999" textAnchor="end">Medium</text>
                  <text x="40" y="25" fontSize="11" fill="#999" textAnchor="end">High</text>
                </g>
                
                {/* X-axis labels */}
                <g className="chart-labels">
                  <text x="70" y="165" fontSize="11" fill="#666" textAnchor="middle">Small</text>
                  <text x="370" y="165" fontSize="11" fill="#666" textAnchor="middle">Large</text>
                </g>
                {/* Y-axis label */}
                <text x="20" y="10" fontSize="12" fill="#666">
                  Sampling error
                </text>
                {/* X-axis label */}
                <text x="220" y="185" fontSize="12" fill="#666" textAnchor="middle">
                  Population Size
                </text>
                {/* Area under curve */}
                <path d="M 70 140 
                         C 100 120, 130 105, 160 95
                         C 190 87, 220 82, 250 78
                         C 280 75, 310 73, 340 71
                         C 355 70, 370 69, 370 68
                         L 370 140 L 70 140 Z" 
                      fill="url(#samplingGradient)"/>
                {/* The curve: sampling error decreases with sqrt(data quantity) */}
                <path d="M 70 140 
                         C 100 120, 130 105, 160 95
                         C 190 87, 220 82, 250 78
                         C 280 75, 310 73, 340 71
                         C 355 70, 370 69, 370 68"
                      stroke="url(#curveGradient)" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Big Data Paradox</h3>
              <p className="text-3xl font-extrabold text-blue-900 mb-4">More Data, More Wrong</p>
              <p className="text-gray-600 leading-relaxed">
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