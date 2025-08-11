import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LottieAnimation from './LottieAnimation';
import conversationAnimationData from '@/assets/animations/conversation.json';
import samplingAnimationData from '@/assets/animations/sampling.json';

gsap.registerPlugin(ScrollTrigger);

interface TabContent {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactElement;
  overview: string;
  keyPoints: string[];
  details?: {
    title: string;
    description: string;
  }[];
}


const Solution: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sampling');
  const sectionRef = useRef<HTMLElement>(null);

  const tabs: TabContent[] = [
    {
      id: 'sampling',
      title: 'Revolutionary Sampling',
      subtitle: 'Scientific methodology that captures the silent majority',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      overview: "Harvard's breakthrough research proved polling errors aren't random—they're systematic and measurable. Our methodology doesn't guess who's missing; we measure them scientifically.",
      keyPoints: [
        "Validated by Harvard's Xiao-Li Meng: Polling errors are systematic, not random",
        "Dual statistical methods ensure accuracy even when assumptions fail",
        "Measures non-response bias scientifically, not through guesswork",
        "Published in Political Analysis (2025) by Georgetown's Michael Bailey"
      ],
      details: [
        {
          title: "The Harvard Discovery",
          description: "When 99% of people ignore polls, even tiny differences between responders and non-responders create massive errors. Traditional weighting can't fix this mathematical impossibility."
        },
        {
          title: "Double Protection System",
          description: "We use inverse propensity scoring paired with outcome imputation—like having a backup parachute for statistical accuracy."
        }
      ]
    },
    {
      id: 'conversations',
      title: 'Natural Conversations',
      subtitle: 'AI-powered dialogue that feels human',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      overview: "Natural conversations unlock honest opinions. People share their real thoughts when genuinely engaged, not when filling out robotic forms.",
      keyPoints: [
        "Conversational AI that adapts to each respondent's communication style",
        "Follow-up questions that uncover the 'why' behind opinions",
        "Natural flow that feels like talking to a person, not a survey",
        "Higher engagement rates through authentic interaction"
      ],
      details: [
        {
          title: "Deep Insights",
          description: "AI asks intelligent follow-up questions to understand not just what people think, but why they think it."
        },
        {
          title: "Adaptive Intelligence",
          description: "The conversation evolves based on responses, exploring topics that matter most to each respondent."
        }
      ]
    },
    {
      id: 'objective',
      title: 'Insight Without Boundaries',
      subtitle: 'AI that finds truth in messy, real-world conversations',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      overview: "Forget about perfect survey design. Our AI understands what people really mean, regardless of how questions are asked or how messy the responses are. It discovers patterns and insights that matter for decisions, not just data points that need cleaning.",
      keyPoints: [
        "No perfect questions needed—AI understands intent and context",
        "Handles real-world messiness—typos, slang, incomplete thoughts all welcome",
        "Discovers hidden patterns across millions of unstructured conversations",
        "Delivers decision-ready insights, not raw data requiring analysis"
      ],
      details: [
        {
          title: "Beyond Traditional Analysis",
          description: "Our AI doesn't just collect responses—it understands context, emotion, and meaning. It finds the signal in the noise without requiring structured data or perfect survey design."
        },
        {
          title: "Autonomous Pattern Discovery",
          description: "Like having thousands of expert analysts working 24/7, our AI discovers connections and trends humans would never find, turning chaotic conversations into strategic intelligence."
        }
      ]
    },
    {
      id: 'economics',
      title: 'Economic Revolution',
      subtitle: 'Better results at a fraction of the cost',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      overview: "Traditional polling requires massive infrastructure and thousands of employees. Niner delivers superior results with AI-powered efficiency at a fraction of the cost.",
      keyPoints: [
        "Eliminate call center infrastructure and overhead",
        "AI automation replaces hundreds of human callers",
        "Higher response rates mean fewer contacts needed",
        "Real-time analysis without manual processing"
      ],
      details: [
        {
          title: "Cost Reduction",
          description: "Cut polling expenses by 70-90% while improving accuracy through AI efficiency and smart targeting."
        },
        {
          title: "Faster Insights",
          description: "Get results in hours instead of weeks with automated analysis and instant reporting."
        }
      ]
    }
  ];

  useEffect(() => {
    // Simple fade-in animation after component mounts
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el, index) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            delay: index * 0.1,
            ease: 'power2.out'
          }
        );
      });
    }
  }, []);

  const activeTabContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section ref={sectionRef} id="solution" className="niner-section bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="niner-container">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: 'var(--niner-secondary-900)'}}>
            The Niner Breakthrough
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--niner-secondary-500)', fontSize: 'var(--niner-text-xl)'}}>
            Four scientific innovations that deliver accurate polling at scale
          </p>
        </div>

        {/* Tabbed Interface */}
        <div className="niner-card bg-white overflow-hidden animate-on-scroll" style={{borderRadius: 'var(--niner-radius-2xl)', boxShadow: 'var(--niner-shadow-xl)'}}>
          {/* Tab Navigation */}
          <div className="border-b border-gray-200" style={{backgroundColor: 'var(--niner-secondary-50)'}}>
            <nav className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex-1 py-4 px-3 text-center font-medium text-sm transition-all duration-300 min-h-[44px]
                    ${activeTab === tab.id
                      ? 'border-b-2 bg-white'
                      : 'hover:bg-white/50'
                    }
                  `}
                  style={{
                    borderBottomColor: activeTab === tab.id ? 'var(--niner-primary-500)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--niner-primary-600)' : 'var(--niner-secondary-500)',
                    transitionTimingFunction: 'var(--niner-easing-ease)'
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.title}</span>
                    <span className="sm:hidden text-xs">{tab.title.split(' ')[0]}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          {activeTabContent && (
            <div className="p-6 lg:p-10">
              <div className="max-w-4xl mx-auto">
                {/* Tab Header */}
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--niner-secondary-900)', fontSize: 'var(--niner-text-2xl)'}}>
                    {activeTabContent.title}
                  </h3>
                  <p style={{color: 'var(--niner-secondary-500)'}}>
                    {activeTabContent.subtitle}
                  </p>
                </div>

                {/* Special Layouts for Sampling and Conversations */}
                {activeTab === 'conversations' ? (
                  <>
                    {/* Centered Animation at Top */}
                    <div className="flex justify-center mb-6">
                      <LottieAnimation
                        animationData={conversationAnimationData}
                        className="w-32 h-32"
                      />
                    </div>
                    
                    {/* Overview Text */}
                    <div className="mb-8">
                      <p className="leading-relaxed text-center max-w-3xl mx-auto" style={{color: 'var(--niner-secondary-700)', fontSize: 'var(--niner-text-base)', lineHeight: '1.75'}}>
                        {activeTabContent.overview}
                      </p>
                    </div>
                    
                    {/* Two Column Layout - Image and Key Points */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      {/* Left Column - Placeholder Image */}
                      <div className="flex justify-center">
                        <div className="w-full max-w-md bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center" style={{borderRadius: 'var(--niner-radius-xl)'}}>
                          <svg className="w-full h-48 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Right Column - Key Points */}
                      <div className="space-y-4">
                        {activeTabContent.keyPoints.map((point, index) => (
                          <div key={index} className="flex items-start">
                            <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{color: 'var(--niner-primary-500)'}}>
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm leading-relaxed" style={{color: 'var(--niner-secondary-600)'}}>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : activeTab === 'sampling' ? (
                  <>
                    {/* Centered Animation at Top */}
                    <div className="flex justify-center mb-6">
                      <LottieAnimation
                        animationData={samplingAnimationData}
                        className="w-32 h-32"
                      />
                    </div>
                    
                    {/* Overview Text */}
                    <div className="mb-8">
                      <p className="leading-relaxed text-center max-w-3xl mx-auto" style={{color: 'var(--niner-secondary-700)', fontSize: 'var(--niner-text-base)', lineHeight: '1.75'}}>
                        {activeTabContent.overview}
                      </p>
                    </div>
                    
                    {/* Two Column Layout - Image and Key Points */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      {/* Left Column - Placeholder Image */}
                      <div className="flex justify-center">
                        <div className="w-full max-w-md bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center" style={{borderRadius: 'var(--niner-radius-xl)'}}>
                          <svg className="w-full h-48 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Right Column - Key Points */}
                      <div className="space-y-4">
                        {activeTabContent.keyPoints.map((point, index) => (
                          <div key={index} className="flex items-start">
                            <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{color: 'var(--niner-primary-500)'}}>
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm leading-relaxed" style={{color: 'var(--niner-secondary-600)'}}>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Other tabs - keep original layout */}
                    <div className="p-6 mb-6" style={{backgroundColor: 'var(--niner-primary-50)', borderRadius: 'var(--niner-radius-xl)'}}>
                      <p className="leading-relaxed" style={{color: 'var(--niner-secondary-700)', fontSize: 'var(--niner-text-base)'}}>
                        {activeTabContent.overview}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {activeTabContent.keyPoints.map((point, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm" style={{color: 'var(--niner-secondary-700)'}}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <div className="inline-flex flex-col items-center">
            <p className="text-lg font-semibold mb-2" style={{color: 'var(--niner-secondary-900)', fontSize: 'var(--niner-text-lg)'}}>
              Ready to Transform Your Research?
            </p>
            <p className="max-w-2xl mx-auto mb-6" style={{color: 'var(--niner-secondary-500)'}}>
              See how Niner's breakthrough technology delivers accurate insights at scale.
            </p>
            <a
              href="#contact"
              className="niner-button niner-button-primary"
            >
              Request a Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;