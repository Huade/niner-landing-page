import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Problem: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
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
      id: 'paradox',
      title: 'Big Data Paradox',
      highlight: 'Data ≠ Truth',
      subtitle: 'Quality vs Quantity',
      description: 'Large sample sizes amplify bias when data quality is compromised. Without accounting for data defect correlation, increased data volume leads to increased confidence in incorrect conclusions.'
    },
    {
      id: 'cost',
      title: 'Economic Inefficiency',
      highlight: 'Unsustainable',
      subtitle: 'Cost Structure',
      description: "The industry faces an impossible trade-off: probability-based samples that cost hundreds of thousands per study, or non-probability samples with unquantifiable error margins."
    },
    {
      id: 'quality',
      title: 'Data Quality Crisis',
      highlight: 'Compromised',
      subtitle: 'Response Quality',
      description: 'Satisficing, straight-lining, and inattentive responding contaminate collected data. Current quality control methods fail to detect sophisticated forms of low-effort responding.'
    }
  ];

  const visualizations = [
    // Collapse of Response Rates
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg mx-auto">
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
            fill="none" stroke="#34699A" strokeWidth="3" strokeDasharray="6,6"/>
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
        <line x1="280" y1="80" x2="470" y2="80" stroke="#34699A" strokeWidth="4"/>
        <line x1="280" y1="74" x2="280" y2="86" stroke="#34699A" strokeWidth="4"/>
        <line x1="470" y1="74" x2="470" y2="86" stroke="#34699A" strokeWidth="4"/>
        <circle cx="375" cy="80" r="7" fill="#34699A"/>
        <text x="375" y="105" textAnchor="middle" fontSize="12" fill="#34699A">
          Everyone
        </text>
      </g>
    </svg>,
    
    // The Big Data Paradox
    <svg viewBox="-10 -10 410 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg mx-auto">
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
      <g className="chart-grid">
        {[0, 1, 2, 3, 4].map((y, i) => (
          <line key={i} x1="50" y1={140 - y * 30} x2="370" y2={140 - y * 30} 
                stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
        ))}
      </g>
      <g className="chart-labels">
        <text x="40" y="145" fontSize="11" fill="#999" textAnchor="end">Small</text>
        <text x="40" y="85" fontSize="11" fill="#999" textAnchor="end">Medium</text>
        <text x="40" y="25" fontSize="11" fill="#999" textAnchor="end">High</text>
      </g>
      <g className="chart-labels">
        <text x="70" y="165" fontSize="11" fill="#666" textAnchor="middle">Small</text>
        <text x="370" y="165" fontSize="11" fill="#666" textAnchor="middle">Large</text>
      </g>
      <text x="20" y="10" fontSize="12" fill="#666">
        Sampling error
      </text>
      <text x="220" y="185" fontSize="12" fill="#666" textAnchor="middle">
        Population Size
      </text>
      <path d="M 70 140 
               C 100 120, 130 105, 160 95
               C 190 87, 220 82, 250 78
               C 280 75, 310 73, 340 71
               C 355 70, 370 69, 370 68
               L 370 140 L 70 140 Z" 
            fill="url(#samplingGradient)"/>
      <path d="M 70 140 
               C 100 120, 130 105, 160 95
               C 190 87, 220 82, 250 78
               C 280 75, 310 73, 340 71
               C 355 70, 370 69, 370 68"
            stroke="url(#curveGradient)" strokeWidth="3" fill="none"/>
    </svg>,
    
    // The Cost Trap
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg mx-auto">
      <defs>
        <linearGradient id="costGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2"/>
        </linearGradient>
        <linearGradient id="costGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#34699A" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#34699A" stopOpacity="0.2"/>
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
        <text x="0" y="0" fontSize="14" fill="#34699A" textAnchor="middle" fontWeight="700">
          Non-probability
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
          <stop offset="0%" stopColor="#34699A" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#34699A" stopOpacity="0.05"/>
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
        <circle cx="100" cy="56" r="4" fill="#34699A"/>
        <circle cx="250" cy="88" r="4" fill="#34699A"/>
        <circle cx="175" cy="120" r="4" fill="#34699A"/>
        <circle cx="325" cy="152" r="4" fill="#34699A"/>
        <circle cx="250" cy="184" r="4" fill="#34699A"/>
      </g>
    </svg>
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % problems.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, problems.length]);

  // GSAP animations for card transitions
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5,
          ease: "power2.out"
        }
      );
    }
  }, [activeTab]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveTab((prev) => (prev - 1 + problems.length) % problems.length);
        setIsPaused(true);
      } else if (e.key === 'ArrowRight') {
        setActiveTab((prev) => (prev + 1) % problems.length);
        setIsPaused(true);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [problems.length]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsPaused(true);
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
    <section id="problem" className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-gray-50 overflow-hidden">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-3">Industry Analysis</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            The Statistical Crisis in Modern Polling
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empirical evidence of systemic methodology failure
          </p>
        </div>

        {/* Tab Navigation with Playback Control */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-blue-900 hover:border-blue-200"
            aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          >
            {isPaused ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
          <div className="inline-flex bg-white border border-gray-200 rounded-lg shadow-sm p-1">
            {problems.map((problem, index) => (
              <button
                key={problem.id}
                onClick={() => handleTabClick(index)}
                className={`
                  relative px-4 py-2.5 rounded-md transition-all duration-300 font-medium text-sm
                  ${activeTab === index 
                    ? 'bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }
                `}
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
          className="flex-1 bg-white rounded-xl border border-gray-100 shadow-lg p-6 lg:p-10 hover:shadow-xl transition-all duration-300 flex flex-col"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="order-2 lg:order-1 flex items-center justify-center p-4">
              {visualizations[activeTab]}
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center p-4">
              <div className="mb-4">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">{problems[activeTab].subtitle}</p>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {problems[activeTab].title}
                </h3>
              </div>
              <div className="mb-6">
                <p className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  {problems[activeTab].highlight}
                </p>
              </div>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                {problems[activeTab].description}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action - Arrow to Solutions */}
        <div className="mt-10 text-center">
          <button
            onClick={scrollToSolution}
            className="group inline-flex flex-col items-center gap-3 transition-all duration-300 hover:transform hover:translate-y-1"
            aria-label="Discover Niner's methodology"
          >
            <span className="text-sm uppercase tracking-wider text-gray-500 font-semibold">Our Solution</span>
            <span className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors">Discover Niner's Revolutionary Methodology</span>
            <div className="relative">
              <svg 
                className="w-10 h-10 text-blue-900 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
              <div className="absolute inset-0 w-10 h-10 bg-blue-900 opacity-20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;