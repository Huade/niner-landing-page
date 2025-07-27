import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Problem: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        const isEven = index % 2 === 0;
        gsap.fromTo(card,
          {
            x: isEven ? -100 : 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="problem" className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Hidden Crisis in Opinion Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four fundamental flaws that make traditional polling obsolete
          </p>
        </div>
        
        <div className="flex flex-col space-y-16">
          {/* Crisis 1: Response Rate Collapse */}
          <div 
            ref={(el) => { if (el) cardsRef.current[0] = el; }}
            className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 hover:shadow-2xl transition-all duration-300 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">
                <div className="order-2 lg:order-1">
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
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Collapse of Response Rates</h3>
                  <p className="text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4">&lt;1%</p>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Traditional polling is broken. Major pollsters struggle with sub-1% response rates—burning through 500,000+ calls just to reach 4,000 people.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Crisis 2: Systematic Bias */}
          <div 
            ref={(el) => { if (el) cardsRef.current[1] = el; }}
            className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 hover:shadow-2xl transition-all duration-300 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Non-Ignorable Non-Response</h3>
                  <p className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4">Systematic Bias</p>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    The 99% who don't answer aren't just missing data points. They're systematically different from those who do, creating a built-in bias that no amount of weighting can fix.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg mx-auto">
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
              </div>
            </div>
          </div>


          {/* Crisis 3: Confidently Wrong */}
          <div 
            ref={(el) => { if (el) cardsRef.current[2] = el; }}
            className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 hover:shadow-2xl transition-all duration-300 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">
                <div className="order-2 lg:order-1">
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
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">The Big Data Paradox</h3>
                  <p className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4">More Data, More Wrong</p>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Without taking data quality into account, population inferences 
                    with Big Data are subject to a Big Data Paradox: the more the data, the surer we fool ourselves.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Crisis 4: The Cost Trap */}
          <div 
            ref={(el) => { if (el) cardsRef.current[3] = el; }}
            className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 hover:shadow-2xl transition-all duration-300 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">The Cost Trap</h3>
                  <p className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4">Accurate or Affordable</p>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Choose your poison: Spend hundreds of thousands on probability polls, or save money with non-probability samples that can't be trusted.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
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
                
                {/* Y-axis (Cost) */}
                <line x1="50" y1="200" x2="50" y2="40" stroke="#666" strokeWidth="2"/>
                <text x="25" y="120" fontSize="12" fill="#666" textAnchor="middle" transform="rotate(-90 25 120)">
                  Cost
                </text>
                <text x="45" y="45" fontSize="10" fill="#666" textAnchor="end">High</text>
                <text x="45" y="195" fontSize="10" fill="#666" textAnchor="end">Low</text>
                
                {/* X-axis (Accuracy) */}
                <line x1="50" y1="200" x2="350" y2="200" stroke="#666" strokeWidth="2"/>
                <text x="200" y="230" fontSize="12" fill="#666" textAnchor="middle">
                  Accuracy
                </text>
                <text x="60" y="215" fontSize="10" fill="#666">Low</text>
                <text x="340" y="215" fontSize="10" fill="#666" textAnchor="end">High</text>
                
                {/* Probability polls (top right) */}
                <g transform="translate(280, 70)">
                  <text x="0" y="0" fontSize="14" fill="#113F67" textAnchor="middle" fontWeight="700">
                    Probability polls
                  </text>
                </g>
                
                {/* Non-probability polls (bottom left) */}
                <g transform="translate(120, 170)">
                  <text x="0" y="0" fontSize="14" fill="#34699A" textAnchor="middle" fontWeight="700">
                    Non-probability
                  </text>
                </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;