import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ResearchItem {
  id: number;
  title: string;
  authors: string;
  publication: string;
  year: string;
  summary: string;
  keyInsights: string[];
  citation: string;
  doi?: string;
}

const researchData: ResearchItem[] = [
  {
    id: 1,
    title: "Countering Non-Ignorable Nonresponse in Survey Models with Randomized Response Instruments and Doubly Robust Estimation",
    authors: "Michael A. Bailey",
    publication: "Political Analysis",
    year: "2025",
    summary: "This cutting-edge research presents the exact methodology Niner uses to overcome the fundamental challenge of modern polling: people who don't respond are systematically different from those who do. Bailey's randomized response instruments provide a scientific way to measure and correct for these invisible biases.",
    keyInsights: [
      "Introduces randomized response instruments that reveal hidden non-response patterns",
      "Demonstrates doubly robust estimation methods that ensure accuracy even when assumptions fail",
      "Provides empirical evidence of systematic polling errors in real-world applications"
    ],
    citation: "Bailey, M. A. (2025). Countering non-ignorable nonresponse in survey models with randomized response instruments and doubly robust estimation. Political Analysis, 33(2), 140-155. https://doi.org/10.1017/pan.2024.13",
    doi: "10.1017/pan.2024.13"
  },
  {
    id: 2,
    title: "Polling at a Crossroads: Rethinking Modern Survey Research",
    authors: "Michael A. Bailey",
    publication: "Cambridge University Press",
    year: "2024",
    summary: "The definitive book on modern polling methodology. Bailey expands on his paradigm-shifting work to provide a complete framework for accurate polling in the age of non-response. Niner implements many of the cutting-edge techniques detailed in this comprehensive guide.",
    keyInsights: [
      "Details randomized response instruments that Niner uses to measure hidden populations",
      "Provides empirical evidence that Trump support was 10 points higher than polls showed in the Midwest",
      "Outlines the double-robustness methods that ensure accuracy even when assumptions fail"
    ],
    citation: "Bailey, M. A. (2024). Polling at a crossroads: Rethinking modern survey research. Cambridge University Press."
  },
  {
    id: 3,
    title: "A New Paradigm for Polling",
    authors: "Michael A. Bailey",
    publication: "Harvard Data Science Review",
    year: "2023",
    summary: "Traditional random sampling is dead due to 95%+ non-response rates. This groundbreaking research introduces a new paradigm based on the Meng equation that directly measures and corrects for the correlation between who responds and how they respond—the exact foundation of Niner's approach.",
    keyInsights: [
      "Proves that even 1% response bias gets magnified by millions in large populations",
      "Shows why polls failed in 2016 & 2020: Trump supporters were systematically less likely to respond",
      "Introduces methods to measure the 'invisible' non-responders—exactly what Niner implements"
    ],
    citation: "Bailey, M. A. (2023). A new paradigm for polling. Harvard Data Science Review, 5(3). https://doi.org/10.1162/99608f92.9898eede",
    doi: "10.1162/99608f92.9898eede"
  },
  {
    id: 4,
    title: "Statistical Paradises and Paradoxes in Big Data",
    authors: "Xiao-Li Meng",
    publication: "The Annals of Applied Statistics",
    year: "2018",
    summary: "The foundational paper that revolutionized survey statistics. Meng proved that data quality beats data quantity—showing that a carefully designed sample of 400 can outperform a biased sample of 2.3 million. This is the mathematical foundation behind Niner's quality-over-quantity approach.",
    keyInsights: [
      "Introduces the data defect correlation (ρ) that Niner's algorithms minimize",
      "Proves that survey error increases with population size when sampling is biased",
      "Demonstrates why traditional weighting methods fail with systematic non-response"
    ],
    citation: "Meng, X.-L. (2018). Statistical paradises and paradoxes in big data (I): Law of large populations, big data paradox, and the 2016 presidential election. The Annals of Applied Statistics, 12(2), 685-726.",
    doi: "10.1214/18-AOAS1161SF"
  }
];

const Results: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const yearBadgesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate timeline
    if (timelineRef.current) {
      gsap.fromTo(timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate year badges
    yearBadgesRef.current.forEach((badge) => {
      if (badge) {
        gsap.fromTo(badge,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: badge,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Animate research cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { 
            opacity: 0,
            x: -50,
            y: 30
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Animate key insights within cards
        const insights = card.querySelectorAll('.key-insight');
        insights.forEach((insight, i) => {
          gsap.fromTo(insight,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              delay: 0.6 + (i * 0.1),
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="research" className="niner-section bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="niner-container">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{color: 'var(--niner-secondary-900)'}}>
            The Science Behind Niner
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--niner-secondary-500)', fontSize: 'var(--niner-text-lg)'}}>
            Our revolutionary approach is backed by breakthrough research from Harvard, Georgetown, and leading institutions worldwide
          </p>
        </div>

        {/* Timeline Container - Compact Grid Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Left Timeline for Desktop */}
          <div 
            ref={timelineRef}
            className="hidden lg:block absolute left-20 top-0 w-0.5 h-full origin-top"
            style={{background: 'linear-gradient(to bottom, var(--niner-primary-600), var(--niner-primary-500))'}}
          ></div>

          {/* Research Timeline Grid */}
          <div className="relative space-y-8 lg:space-y-12">
            {researchData.map((research, index) => (
              <div key={research.id} className="relative lg:pl-32">
                {/* Year Badge - Left aligned on desktop */}
                <div 
                  ref={el => { if (el) yearBadgesRef.current[index] = el; }}
                  className="lg:absolute lg:left-12 lg:top-6 mb-4 lg:mb-0"
                >
                  <div className="inline-flex items-center justify-center text-white rounded-full w-14 h-14 font-bold text-base" style={{background: 'linear-gradient(135deg, var(--niner-primary-600), var(--niner-primary-500))', boxShadow: 'var(--niner-shadow-lg)'}}>
                    {research.year}
                  </div>
                </div>
                  
                {/* Card Content - Full width on desktop */}
                <div 
                  ref={el => { if (el) cardsRef.current[index] = el; }}
                  className="w-full"
                >
                    <div className="niner-card bg-white overflow-hidden border border-gray-100" style={{borderRadius: 'var(--niner-radius-xl)'}}>
                      {/* Compact Header */}
                      <div className={`p-4 lg:p-6 ${
                        index === 0 ? 'bg-gradient-to-r from-purple-50 to-pink-50' :
                        index === 1 ? 'bg-gradient-to-r from-blue-50 to-indigo-50' :
                        index === 2 ? 'bg-gradient-to-r from-teal-50 to-blue-50' :
                        'bg-gradient-to-r from-green-50 to-teal-50'
                      }`}>
                        <h3 className="text-lg lg:text-xl font-bold mb-2" style={{color: 'var(--niner-secondary-900)'}}>
                          {research.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm" style={{color: 'var(--niner-secondary-600)'}}>
                          <span className="font-semibold">{research.authors}</span>
                          <span style={{color: 'var(--niner-secondary-500)'}}>•</span>
                          <span>{research.publication}</span>
                        </div>
                      </div>

                      {/* Compact Content */}
                      <div className="p-4 lg:p-6">
                        {/* Two Column Layout on Desktop */}
                        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                          {/* Left Column - Summary */}
                          <div>
                            <p className="text-sm lg:text-base leading-relaxed mb-4 lg:mb-0" style={{color: 'var(--niner-secondary-700)'}}>
                              {research.summary}
                            </p>
                          </div>

                          {/* Right Column - Key Findings */}
                          <div>
                            <h4 className="text-sm lg:text-base font-bold mb-3 flex items-center" style={{color: 'var(--niner-secondary-900)'}}>
                              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--niner-primary-600)'}}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Key Findings
                            </h4>
                            <ul className="space-y-1.5">
                              {research.keyInsights.map((insight, idx) => (
                                <li key={idx} className="key-insight flex items-start">
                                  <svg className="w-3.5 h-3.5 text-green-600 mr-1.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <p className="text-sm leading-snug" style={{color: 'var(--niner-secondary-700)'}}>{insight}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Compact Citation Footer */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                            <div className="bg-gray-50 rounded-lg px-3 py-2 flex-1">
                              <p className="text-xs line-clamp-2" style={{color: 'var(--niner-secondary-600)'}}>
                                <span className="font-semibold" style={{color: 'var(--niner-secondary-900)'}}>Citation:</span> {research.citation}
                              </p>
                            </div>
                            {research.doi && (
                              <a 
                                href={`https://doi.org/${research.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="niner-button niner-button-primary text-xs whitespace-nowrap"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Read Paper
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact CTA */}
        <div className="mt-16">
          <div className="relative overflow-hidden p-8 lg:p-12 text-center" style={{borderRadius: 'var(--niner-radius-2xl)', background: 'linear-gradient(135deg, var(--niner-primary-600), var(--niner-primary-500))', boxShadow: 'var(--niner-shadow-xl)'}}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to leverage cutting-edge science for your polling needs?
              </h3>
              <p className="text-lg text-blue-50 mb-6 max-w-2xl mx-auto" style={{fontSize: 'var(--niner-text-lg)'}}>
                Niner combines these breakthrough insights with AI technology to deliver 
                the most accurate polling results available today.
              </p>
              <button className="niner-button px-8 py-4 bg-white hover:bg-gray-50 font-bold text-base transform hover:-translate-y-0.5" style={{color: 'var(--niner-primary-600)', boxShadow: 'var(--niner-shadow-lg)'}}>
                See Niner in Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;