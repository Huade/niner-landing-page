import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-1/2 -right-1/5 w-2/5 h-[150%] bg-gradient-radial from-blue-500/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">The Niner Breakthrough</h2>
        
        <div className="flex flex-col gap-0 mt-8 w-full">
          {/* Revolutionary Sampling Feature */}
          <div className="pb-8 mb-8 relative last:pb-0 last:mb-0">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0 transition-all hover:scale-110 hover:shadow-lg">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold">Revolutionary Sampling</h4>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Traditional polling is broken. With response rates below 5%, the people who answer surveys are fundamentally different from those who don't—and demographic weighting can't fix this. Our breakthrough applies the Meng equation to reveal and correct these hidden biases.
              </p>
              
              <div className="my-12 p-8 bg-gradient-to-br from-blue-600/5 to-blue-600/5 rounded-2xl border border-blue-600/15 shadow-sm hover:shadow-md transition-all">
                <svg viewBox="0 0 900 220" className="w-full h-auto max-w-4xl mx-auto block" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="equationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#34699A', stopOpacity: 0.1}}/>
                      <stop offset="50%" style={{stopColor: '#34699A', stopOpacity: 0.05}}/>
                      <stop offset="100%" style={{stopColor: '#34699A', stopOpacity: 0.1}}/>
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
                    <path d="M -20 110 Q 25 130 70 110" stroke="#34699A" strokeWidth="2" fill="none" opacity="0.6"/>
                    <text x="25" y="150" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#34699A" textAnchor="middle" fontWeight="500">
                      data defect
                    </text>
                    <text x="25" y="166" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#34699A" textAnchor="middle" fontWeight="500">
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
                    <path d="M -10 65 Q 65 85 140 65" stroke="#34699A" strokeWidth="2" fill="none" opacity="0.6" transform="translate(0, 40)"/>
                    <text x="65" y="145" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#34699A" textAnchor="middle" fontWeight="500">
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
                    <path d="M -15 110 Q 20 130 55 110" stroke="#34699A" strokeWidth="2" fill="none" opacity="0.6"/>
                    <text x="20" y="150" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#34699A" textAnchor="middle" fontWeight="500">
                      data
                    </text>
                    <text x="20" y="166" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fill="#34699A" textAnchor="middle" fontWeight="500">
                      difficulty
                    </text>
                  </g>
                  
                  {/* Decorative elements */}
                  <circle cx="850" cy="90" r="3" fill="#34699A" opacity="0.3"/>
                  <circle cx="860" cy="95" r="2" fill="#34699A" opacity="0.2"/>
                  <circle cx="855" cy="85" r="2" fill="#34699A" opacity="0.2"/>
                </svg>
                
                <div className="mt-8 text-center">
                  <p className="text-lg font-semibold text-blue-600 mb-2 tracking-tight">The Meng Equation for Non-Response Bias</p>
                  <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    This fundamental equation reveals how survey bias emerges from three critical factors: the correlation between response tendency and the outcome of interest, the proportion of missing responses, and the inherent variability in the population.
                  </p>
                </div>
                
                <div className="mt-12">
                  <h5 className="text-xl font-semibold text-blue-600 mb-6 text-center">How Niner Solves This</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 transition-all hover:scale-110 hover:shadow-lg">
                        <i className="fas fa-random"></i>
                      </div>
                      <div>
                        <h6 className="text-base font-semibold text-gray-900 mb-1">Randomized Response Instruments</h6>
                        <p className="text-sm text-gray-600 leading-relaxed">We randomly vary survey protocols to detect when respondents differ from non-respondents—even after demographic weighting.</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 transition-all hover:scale-110 hover:shadow-lg">
                        <i className="fas fa-search"></i>
                      </div>
                      <div>
                        <h6 className="text-base font-semibold text-gray-900 mb-1">Measure Hidden Correlations</h6>
                        <p className="text-sm text-gray-600 leading-relaxed">By comparing responses across different protocols, we quantify the ρ<sub>R,Y</sub> correlation that traditional polls ignore.</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 transition-all hover:scale-110 hover:shadow-lg">
                        <i className="fas fa-calculator"></i>
                      </div>
                      <div>
                        <h6 className="text-base font-semibold text-gray-900 mb-1">Correct for True Bias</h6>
                        <p className="text-sm text-gray-600 leading-relaxed">Our models adjust estimates based on measured non-response patterns, not just demographic weights.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Divider line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gray-200 last:hidden"></div>
          </div>

          {/* AI-Powered Conversations Feature */}
          <div className="pb-8 mb-8 relative last:pb-0 last:mb-0">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0 transition-all hover:scale-110 hover:shadow-lg">
                  <i className="fas fa-comments"></i>
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold">AI-Powered Conversations</h4>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Custom-trained chatbots that adapt questions based on responses, creating natural conversations that reveal deeper insights than fixed surveys.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
                {/* Traditional Survey */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-300 flex flex-col h-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <div className="font-semibold text-lg text-gray-900">Traditional Survey</div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-gray-200 text-gray-600">Limited</div>
                  </div>
                  <div className="flex-1 p-4 text-sm min-h-[180px] overflow-y-auto bg-white">
                    <div className="mb-4 font-medium text-gray-900">
                      Q: What is your view about the U.S. federal budget deficit?
                    </div>
                    <div className="ml-8 text-gray-600 leading-8">
                      ○ Too high<br/>
                      ○ Too low<br/>
                      ○ Neither<br/>
                      ○ Don't know
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-100 bg-gray-50 flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-times-circle text-gray-500 text-base"></i>
                      <span className="text-gray-600">Limited context</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-times-circle text-gray-500 text-base"></i>
                      <span className="text-gray-600">Surface insights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-times-circle text-gray-500 text-base"></i>
                      <span className="text-gray-600">No follow-up</span>
                    </div>
                  </div>
                </div>

                {/* Niner Research AI */}
                <div className="bg-white rounded-xl overflow-hidden border border-blue-600 flex flex-col h-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 relative">
                  <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <div className="font-semibold text-lg text-blue-600">Niner Research AI</div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-blue-600 text-white">Advanced</div>
                  </div>
                  <div className="flex-1 p-4 text-sm min-h-[180px] overflow-y-auto bg-white">
                    <div className="flex flex-col gap-2">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-[18px] mb-2 max-w-[85%] text-sm leading-normal">
                        Hey! Quick question - what do you think about all this government spending lately?
                      </div>
                      <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-[18px] mb-2 max-w-[85%] ml-auto text-left text-sm leading-relaxed">
                        honestly its crazy high
                      </div>
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-[18px] mb-2 max-w-[85%] text-sm leading-normal">
                        Yeah I hear that a lot. What bugs you most about it?
                      </div>
                      <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-[18px] mb-2 max-w-[85%] ml-auto text-left text-sm leading-relaxed">
                        idk just feels like they spend on everything except what actually helps ppl
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-100 bg-blue-600/5 flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-check-circle text-blue-600 text-base"></i>
                      <span className="text-gray-700 font-medium">Natural flow</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-check-circle text-blue-600 text-base"></i>
                      <span className="text-gray-700 font-medium">Deep insights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-check-circle text-blue-600 text-base"></i>
                      <span className="text-gray-700 font-medium">Adaptive questioning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Divider line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gray-200 last:hidden"></div>
          </div>

          {/* Dramatically Lower Costs Feature */}
          <div className="pb-4">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0 transition-all hover:scale-110 hover:shadow-lg">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold">Dramatically Lower Costs, Superior Results</h4>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Major pollsters burn through millions calling people who won't answer. We reach them where they actually want to engage—achieving better data at a fraction of the cost.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
                {/* Traditional Phone Polling */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-300 flex flex-col h-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <div className="font-semibold text-lg text-gray-900">Traditional Phone Polling</div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-gray-200 text-gray-600">Expensive</div>
                  </div>
                  <div className="flex-1 p-4 text-sm min-h-[180px] overflow-y-auto bg-white">
                    <div className="mb-4 font-medium text-gray-900">
                      Why costs keep climbing:
                    </div>
                    <div className="ml-8 text-gray-600 leading-8">
                      • 500,000+ calls for 4,000 responses<br/>
                      • 24/7 call center operations<br/>
                      • &lt;1% response rates<br/>
                      • Nobody answers unknown numbers
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-100 bg-gray-50 flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-times-circle text-gray-500 text-base"></i>
                      <span className="text-gray-600">Massive waste</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-times-circle text-gray-500 text-base"></i>
                      <span className="text-gray-600">Fixed overhead</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-times-circle text-gray-500 text-base"></i>
                      <span className="text-gray-600">Can't scale</span>
                    </div>
                  </div>
                </div>
                
                {/* Niner AI System */}
                <div className="bg-white rounded-xl overflow-hidden border border-blue-600 flex flex-col h-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 relative">
                  <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <div className="font-semibold text-lg text-blue-600">Niner AI System</div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-blue-600 text-white">Efficient</div>
                  </div>
                  <div className="flex-1 p-4 text-sm min-h-[180px] overflow-y-auto bg-white">
                    <div className="mb-4 font-medium text-gray-900">
                      How we slash costs:
                    </div>
                    <div className="ml-8 text-gray-600 leading-8">
                      • Automated conversations people enjoy<br/>
                      • Web interface meets users where they are<br/>
                      • One-time build scales infinitely<br/>
                      • 5-10% response rates expected
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-100 bg-blue-600/5 flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-check-circle text-blue-600 text-base"></i>
                      <span className="text-gray-700 font-medium">90% lower costs</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-check-circle text-blue-600 text-base"></i>
                      <span className="text-gray-700 font-medium">Better engagement</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <i className="fas fa-check-circle text-blue-600 text-base"></i>
                      <span className="text-gray-700 font-medium">Instant scale</span>
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