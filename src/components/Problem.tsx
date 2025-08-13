import React, { useRef, useState } from 'react';

const Problem: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const problems = [
    {
      id: 'collapse',
      title: 'Response Rate Collapse',
      highlight: 'Critical Failure',
      subtitle: 'Response Rate',
      description: 'Traditional polling methodology has failed. Major polling organizations now struggle with sub-1% response rates, requiring hundreds of thousands of call attempts to achieve minimal sample sizes.'
    },
    {
      id: 'bias',
      title: 'Non-Response Bias',
      highlight: 'Systematic Error',
      subtitle: 'Statistical Validity',
      description: "Non-respondents represent a non-random subset of the population. This creates systematic measurement error that cannot be corrected through statistical weighting or post-stratification."
    },
    {
      id: 'quality',
      title: 'Data Quality Crisis',
      highlight: 'Compromised',
      subtitle: 'Response Quality',
      description: 'Satisficing, straight-lining, and inattentive responding contaminate collected data. Current quality control methods fail to detect sophisticated forms of low-effort responding.'
    },
    {
      id: 'cost',
      title: 'Economic Inefficiency',
      highlight: 'Unsustainable',
      subtitle: 'Cost Structure',
      description: "The industry faces an impossible trade-off: probability-based samples that cost hundreds of thousands per study, or non-probability samples with unquantifiable error margins."
    }
  ];

  const visualizations = [
    // Collapse of Response Rates
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg mx-auto">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02"/>
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e3a8a"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
      </defs>
      <g className="chart-grid">
        {[0, 10, 20, 30, 40].map((y, i) => (
          <line key={i} x1="50" y1={200 - y * 4} x2="370" y2={200 - y * 4} 
                stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
        ))}
      </g>
      <g className="chart-labels">
        {[0, 10, 20, 30, 40].map((y, i) => (
          <text key={i} x="40" y={205 - y * 4} 
                fontSize="11" fill="#999" textAnchor="end">{y}%</text>
        ))}
      </g>
      <g className="chart-labels">
        <text x="70" y="230" fontSize="11" fill="#666" textAnchor="middle">1997</text>
        <text x="130" y="230" fontSize="11" fill="#666" textAnchor="middle">2005</text>
        <text x="190" y="230" fontSize="11" fill="#666" textAnchor="middle">2010</text>
        <text x="250" y="230" fontSize="11" fill="#666" textAnchor="middle">2015</text>
        <text x="310" y="230" fontSize="11" fill="#666" textAnchor="middle">2018</text>
        <text x="370" y="230" fontSize="11" fill="#666" textAnchor="middle">2025</text>
      </g>
      <path d="M 70,56 L 130,100 L 190,130 L 250,160 L 310,176 L 370,190 L 370,200 L 70,200 Z" 
            fill="url(#chartGradient)"/>
      <path d="M 70,56 L 130,100 L 190,130 L 250,160 L 310,176" 
            fill="none" stroke="url(#lineGradient)" strokeWidth="3"/>
      <path d="M 310,176 L 370,190" 
            fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6,6"/>
      <text x="20" y="25" fontSize="12" fill="#666">
        Response rate
      </text>
    </svg>,
    
    // Non-Ignorable Non-Response
    <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg mx-auto">
      <line x1="50" y1="120" x2="480" y2="120" stroke="#333" strokeWidth="2"/>
      <text x="265" y="145" textAnchor="middle" fontSize="12" fill="#666">
        Outcome to be measured by survey
      </text>
      <g id="gap">
        <path d="M 180 80 Q 230 60 280 80" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="4,4"/>
        <text x="230" y="55" textAnchor="middle" fontSize="11" fill="#999">
          The Gap
        </text>
      </g>
      <g id="polls">
        <text x="125" y="30" textAnchor="middle" fontSize="16" fontWeight="600" fill="#6b7280">
          What polls show
        </text>
        <line x1="70" y1="80" x2="180" y2="80" stroke="#ef4444" strokeWidth="4"/>
        <line x1="70" y1="74" x2="70" y2="86" stroke="#ef4444" strokeWidth="4"/>
        <line x1="180" y1="74" x2="180" y2="86" stroke="#ef4444" strokeWidth="4"/>
        <circle cx="125" cy="80" r="7" fill="#ef4444"/>
        <text x="125" y="105" textAnchor="middle" fontSize="12" fill="#ef4444">
          The 1% who answer
        </text>
      </g>
      <g id="reality">
        <text x="375" y="30" textAnchor="middle" fontSize="16" fontWeight="600" fill="#6b7280">
          Reality
        </text>
        <line x1="280" y1="80" x2="470" y2="80" stroke="#3b82f6" strokeWidth="4"/>
        <line x1="280" y1="74" x2="280" y2="86" stroke="#3b82f6" strokeWidth="4"/>
        <line x1="470" y1="74" x2="470" y2="86" stroke="#3b82f6" strokeWidth="4"/>
        <circle cx="375" cy="80" r="7" fill="#3b82f6"/>
        <text x="375" y="105" textAnchor="middle" fontSize="12" fill="#3b82f6">
          Everyone
        </text>
      </g>
    </svg>,
    
    // Response Quality Crisis
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg mx-auto">
      <defs>
        <linearGradient id="qualityGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05"/>
        </linearGradient>
        <linearGradient id="qualityGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      <g className="chart-grid">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`h-${i}`} x1="50" y1={40 + i * 32} x2="350" y2={40 + i * 32} 
                stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
        ))}
      </g>
      <g className="question-labels">
        <text x="40" y="56" fontSize="11" fill="#666" textAnchor="end">Q1</text>
        <text x="40" y="88" fontSize="11" fill="#666" textAnchor="end">Q2</text>
        <text x="40" y="120" fontSize="11" fill="#666" textAnchor="end">Q3</text>
        <text x="40" y="152" fontSize="11" fill="#666" textAnchor="end">Q4</text>
        <text x="40" y="184" fontSize="11" fill="#666" textAnchor="end">Q5</text>
      </g>
      <g className="option-labels">
        <text x="100" y="30" fontSize="10" fill="#999" textAnchor="middle">Strongly Disagree</text>
        <text x="175" y="30" fontSize="10" fill="#999" textAnchor="middle">Disagree</text>
        <text x="250" y="30" fontSize="10" fill="#999" textAnchor="middle">Neutral</text>
        <text x="325" y="30" fontSize="10" fill="#999" textAnchor="middle">Agree</text>
      </g>
      <g id="careless-pattern">
        <text x="200" y="215" fontSize="12" fill="#ef4444" textAnchor="middle" fontWeight="600">
          Straight-lining Pattern
        </text>
        <rect x="240" y="46" width="20" height="138" fill="url(#qualityGradient1)" rx="10"/>
        <circle cx="250" cy="56" r="6" fill="#ef4444"/>
        <circle cx="250" cy="88" r="6" fill="#ef4444"/>
        <circle cx="250" cy="120" r="6" fill="#ef4444"/>
        <circle cx="250" cy="152" r="6" fill="#ef4444"/>
        <circle cx="250" cy="184" r="6" fill="#ef4444"/>
        <path d="M 250 56 L 250 88 L 250 120 L 250 152 L 250 184" 
              stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" fill="none"/>
      </g>
      <g id="thoughtful-pattern" opacity="0.4">
        <circle cx="100" cy="56" r="4" fill="#3b82f6"/>
        <circle cx="250" cy="88" r="4" fill="#3b82f6"/>
        <circle cx="175" cy="120" r="4" fill="#3b82f6"/>
        <circle cx="325" cy="152" r="4" fill="#3b82f6"/>
        <circle cx="250" cy="184" r="4" fill="#3b82f6"/>
      </g>
    </svg>,
    
    // The Cost Trap
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg mx-auto">
      <defs>
        <linearGradient id="costGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2"/>
        </linearGradient>
        <linearGradient id="costGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
      <line x1="50" y1="200" x2="50" y2="40" stroke="#666" strokeWidth="2"/>
      <text x="25" y="120" fontSize="12" fill="#666" textAnchor="middle" transform="rotate(-90 25 120)">
        Cost
      </text>
      <text x="45" y="45" fontSize="10" fill="#666" textAnchor="end">High</text>
      <text x="45" y="195" fontSize="10" fill="#666" textAnchor="end">Low</text>
      <line x1="50" y1="200" x2="350" y2="200" stroke="#666" strokeWidth="2"/>
      <text x="200" y="230" fontSize="12" fill="#666" textAnchor="middle">
        Accuracy
      </text>
      <text x="60" y="215" fontSize="10" fill="#666">Low</text>
      <text x="340" y="215" fontSize="10" fill="#666" textAnchor="end">High</text>
      <g transform="translate(280, 70)">
        <text x="0" y="0" fontSize="14" fill="#113F67" textAnchor="middle" fontWeight="700">
          Probability polls
        </text>
      </g>
      <g transform="translate(120, 170)">
        <text x="0" y="0" fontSize="14" fill="#3b82f6" textAnchor="middle" fontWeight="700">
          Non-probability
        </text>
      </g>
    </svg>
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const scrollToSolution = () => {
    const element = document.getElementById('solution');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="problem" className="niner-section bg-white">
      <div className="niner-container">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.15em] font-semibold mb-4" style={{color: 'var(--niner-primary-600)'}}>Problem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{color: 'var(--niner-secondary-900)'}}>
            The Statistical Crisis in Modern Polling
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{color: 'var(--niner-secondary-500)'}}>
            Empirical evidence of systemic methodology failure
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center gap-4 mb-10 overflow-x-auto scrollbar-hide">
          <div className="inline-flex bg-gray-50 border border-gray-200 rounded-xl p-1 min-w-fit">
            {problems.map((problem, index) => (
              <button
                key={problem.id}
                onClick={() => handleTabClick(index)}
                className={`
                  relative px-4 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm min-h-[44px] flex items-center
                  ${activeTab === index 
                    ? 'bg-white border border-gray-300' 
                    : 'hover:bg-white/50'
                  }
                `}
                style={{
                  color: activeTab === index ? 'var(--niner-primary-600)' : 'var(--niner-secondary-500)',
                  transitionTimingFunction: 'var(--niner-easing-ease)'
                }}
                aria-label={`View ${problem.title}`}
              >
                <span className="hidden lg:inline">{problem.title}</span>
                <span className="lg:hidden font-bold">{index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Card Content */}
        <div 
          ref={containerRef}
          className="bg-white rounded-lg border border-gray-200 p-8 lg:p-12 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300"
        >
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="order-2 lg:order-1 flex items-center justify-center p-4">
              {visualizations[activeTab]}
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center p-4">
              <div className="mb-4">
                <p className="text-sm uppercase tracking-[0.1em] font-semibold mb-3" style={{color: 'var(--niner-primary-600)', fontSize: 'var(--niner-text-sm)'}}>{problems[activeTab].subtitle}</p>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{color: 'var(--niner-secondary-900)'}}>
                  {problems[activeTab].title}
                </h3>
              </div>
              <div className="mb-6">
                <p className="text-4xl lg:text-5xl font-bold niner-text-gradient">
                  {problems[activeTab].highlight}
                </p>
              </div>
              <p className="text-base lg:text-lg leading-relaxed" style={{color: 'var(--niner-secondary-500)', fontSize: 'var(--niner-text-lg)'}}>
                {problems[activeTab].description}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToSolution}
            className="niner-button-flat niner-button-primary-flat inline-flex items-center gap-2"
            aria-label="Discover Niner's methodology"
          >
            <span>Discover Our Solution</span>
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;