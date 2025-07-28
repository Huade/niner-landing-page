import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Counter display component
const CounterDisplay: React.FC<{ end: number; duration?: number; trigger: HTMLElement | null }> = ({ 
  end, 
  duration = 2000, 
  trigger 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!trigger) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    const scrollTrigger = ScrollTrigger.create({
      trigger,
      start: "top 80%",
      onEnter: () => {
        animationFrame = requestAnimationFrame(animate);
      },
      once: true
    });
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      scrollTrigger.kill();
    };
  }, [end, duration, trigger]);
  
  return <span>{count}</span>;
};

const Solution: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const conversationRef = useRef<HTMLDivElement>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  useEffect(() => {
    const blocks = blocksRef.current;
    
    blocks.forEach((block, index) => {
      if (block) {
        // Main block animation
        gsap.fromTo(block,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.2
          }
        );
        
        // Arrow animation
        const arrow = block.querySelector('.transform-arrow');
        if (arrow) {
          gsap.to(arrow, {
            x: 10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              toggleActions: "play pause resume pause"
            }
          });
        }
        
        // Particle animation
        const particles = block.querySelectorAll('.particle');
        particles.forEach((particle, i) => {
          gsap.to(particle, {
            x: 40,
            opacity: 0,
            duration: 2,
            repeat: -1,
            delay: i * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              toggleActions: "play pause resume pause"
            }
          });
        });
      }
    });

    // Conversation animation
    if (conversationRef.current) {
      const messages = conversationRef.current.querySelectorAll('.message');
      const typingIndicator = conversationRef.current.parentElement?.querySelector('.typing-indicator');
      
      // Initially hide all messages and typing indicator
      gsap.set(messages, { opacity: 0, y: 20 });
      if (typingIndicator) {
        gsap.set(typingIndicator, { opacity: 0, y: 10 });
      }
      
      // Create scroll trigger for conversation
      ScrollTrigger.create({
        trigger: conversationRef.current,
        start: "top 80%",
        onEnter: () => {
          const tl = gsap.timeline();
          
          // Animate messages first
          tl.to(messages, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.8,
            ease: "power2.out"
          });
          
          // Then show typing indicator after all messages
          if (typingIndicator) {
            tl.to(typingIndicator, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out"
            }, "+=0.3");
          }
        },
        once: true
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            The Niner Breakthrough
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three innovations that fix polling forever
          </p>
        </div>
        
        <div className="space-y-20">
          {/* Feature 1: Natural Conversations */}
          <div 
            ref={(el) => { if (el) blocksRef.current[0] = el; }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Natural Conversations</h3>
                
                {/* Natural Conversations Content */}
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="inline-block p-6 bg-blue-50 rounded-2xl mb-4">
                      <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-blue-600">AI-Powered Conversations</p>
                      <p className="text-lg text-gray-600">Natural dialogue that adapts to each respondent</p>
                    </div>
                  </div>
                  
                  {/* Conversation Demo */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-inner max-w-lg mx-auto">
                    <div className="max-w-sm mx-auto space-y-3 conversation-container" ref={conversationRef}>
                      <div className="message bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tl-md text-sm shadow-md max-w-[85%]">
                        Hi! I'm Polly. I'm here to learn about your views on government spending. What's your take on the current budget?
                      </div>
                      <div className="message bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-tr-md text-sm shadow-md max-w-[85%] ml-auto">
                        honestly its crazy high. we're spending money we don't have
                      </div>
                      <div className="message bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tl-md text-sm shadow-md max-w-[85%]">
                        I hear you - spending beyond our means is concerning. What specific areas do you think are most wasteful?
                      </div>
                      <div className="message bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-tr-md text-sm shadow-md max-w-[85%] ml-auto">
                        foreign aid while we have homeless vets. infrastructure falling apart but we send billions overseas
                      </div>
                      <div className="message bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tl-md text-sm shadow-md max-w-[85%]">
                        That's a powerful point about priorities. If you could redirect that foreign aid money, where would you invest it first?
                      </div>
                      <div className="message bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-tr-md text-sm shadow-md max-w-[85%] ml-auto">
                        fix our roads and bridges first. take care of americans before everyone else
                      </div>
                    </div>
                    
                    {/* Typing indicator */}
                    <div className="typing-indicator flex items-center gap-2 mt-4 px-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                      <span className="text-xs text-gray-500">Polly is typing...</span>
                    </div>
                  </div>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-blue-900 mb-1">Deep Insights</h4>
                      <p className="text-sm text-gray-600">Uncover the "why" behind opinions with follow-up questions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-blue-900 mb-1">Natural Flow</h4>
                      <p className="text-sm text-gray-600">Conversations that feel human, not robotic surveys</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-blue-900 mb-1">Adaptive Intelligence</h4>
                      <p className="text-sm text-gray-600">AI adjusts questions based on responses in real-time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Revolutionary Sampling */}
          <div 
            ref={(el) => { if (el) blocksRef.current[1] = el; }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Revolutionary Sampling</h3>
                
                {/* Hero Section with Visual */}
                <div className="mb-12">
                  <div className="text-center mb-8">
                    <div className="inline-block p-6 bg-blue-50 rounded-2xl mb-4">
                      <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-blue-600">Modern Sampling + AI</p>
                      <p className="text-lg text-gray-600">We don't guess who's missing—we measure them scientifically</p>
                    </div>
                  </div>
                  
                </div>

                {/* Four Breakthroughs */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-blue-900 mb-6 text-center">Four Scientific Breakthroughs</h4>
                    
                  {/* Visual Cards for Breakthroughs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="group cursor-pointer" onClick={() => toggleExpand(10)}>
                      <div className={`bg-white border-2 ${expandedSection === 10 ? 'border-blue-400 shadow-lg' : 'border-gray-200'} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-300 h-full`}>
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                          <span className="text-xl font-bold text-blue-600">1</span>
                        </div>
                        <h5 className="text-lg font-semibold text-blue-900 mb-3 text-center">Understanding Polling Error</h5>
                        <p className="text-sm text-gray-600 text-center mb-4">
                          Harvard's breakthrough: Errors aren't random—they're systematic and measurable
                        </p>
                        <div className="text-center">
                          <span className="text-blue-600 text-sm font-medium flex items-center justify-center gap-1">
                            {expandedSection === 10 ? 'Close details' : 'Learn more'} 
                            <svg className={`w-4 h-4 transform transition-transform ${expandedSection === 10 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group cursor-pointer" onClick={() => toggleExpand(11)}>
                      <div className={`bg-white border-2 ${expandedSection === 11 ? 'border-blue-400 shadow-lg' : 'border-gray-200'} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-300 h-full`}>
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                          <span className="text-xl font-bold text-blue-600">2</span>
                        </div>
                        <h5 className="text-lg font-semibold text-blue-900 mb-3 text-center">Measuring the Invisible</h5>
                        <p className="text-sm text-gray-600 text-center mb-4">
                          Scientific method to measure the silent majority who avoid polls
                        </p>
                        <div className="text-center">
                          <span className="text-blue-600 text-sm font-medium flex items-center justify-center gap-1">
                            {expandedSection === 11 ? 'Close details' : 'Learn more'} 
                            <svg className={`w-4 h-4 transform transition-transform ${expandedSection === 11 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group cursor-pointer" onClick={() => toggleExpand(12)}>
                      <div className={`bg-white border-2 ${expandedSection === 12 ? 'border-blue-400 shadow-lg' : 'border-gray-200'} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-300 h-full`}>
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                          <span className="text-xl font-bold text-blue-600">3</span>
                        </div>
                        <h5 className="text-lg font-semibold text-blue-900 mb-3 text-center">Double Protection</h5>
                        <p className="text-sm text-gray-600 text-center mb-4">
                          Two independent methods ensure accuracy even when one fails
                        </p>
                        <div className="text-center">
                          <span className="text-blue-600 text-sm font-medium flex items-center justify-center gap-1">
                            {expandedSection === 12 ? 'Close details' : 'Learn more'} 
                            <svg className={`w-4 h-4 transform transition-transform ${expandedSection === 12 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group cursor-pointer" onClick={() => toggleExpand(13)}>
                      <div className={`bg-white border-2 ${expandedSection === 13 ? 'border-blue-400 shadow-lg' : 'border-gray-200'} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-300 h-full`}>
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                          <span className="text-xl font-bold text-blue-600">4</span>
                        </div>
                        <h5 className="text-lg font-semibold text-blue-900 mb-3 text-center">Actionable Insights</h5>
                        <p className="text-sm text-gray-600 text-center mb-4">
                          Transform complex data into clear, actionable intelligence
                        </p>
                        <div className="text-center">
                          <span className="text-blue-600 text-sm font-medium flex items-center justify-center gap-1">
                            {expandedSection === 13 ? 'Close details' : 'Learn more'} 
                            <svg className={`w-4 h-4 transform transition-transform ${expandedSection === 13 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedSection === 10 && (
                    <div className="mt-6 bg-blue-50 rounded-xl p-6 animate-fadeIn">
                      <h6 className="font-semibold text-blue-900 mb-3">The Harvard Discovery</h6>
                      <p className="text-gray-700 mb-4">
                        Harvard's Xiao-Li Meng proved that polling errors aren't random—they're systematic. When 99% of people ignore polls, 
                        even tiny differences between responders and non-responders explode into massive errors.
                      </p>
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Why polls failed in 2016 & 2020:</span> If Trump supporters were just 1% less likely to answer polls, 
                          that tiny bias gets multiplied by millions of voters. Traditional weighting can't fix this—it's a mathematical impossibility.
                        </p>
                      </div>
                    </div>
                  )}

                  {expandedSection === 11 && (
                    <div className="mt-6 bg-blue-50 rounded-xl p-6 animate-fadeIn">
                      <h6 className="font-semibold text-blue-900 mb-3">The Innovation</h6>
                      <p className="text-gray-700 mb-4">
                        We don't guess who's missing—we measure them scientifically. By randomly assigning different levels of survey effort, 
                        we can see exactly which groups systematically avoid polls.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Real-world proof:</span> Our method revealed Trump support was 10 points higher 
                            than polls showed in the Midwest.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Validation:</span> Published in Political Analysis (2025) by Georgetown's Michael Bailey.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {expandedSection === 12 && (
                    <div className="mt-6 bg-blue-50 rounded-xl p-6 animate-fadeIn">
                      <h6 className="font-semibold text-blue-900 mb-3">Double Protection System</h6>
                      <p className="text-gray-700 mb-4">
                        Traditional polls fail when their assumptions are wrong. We use two independent statistical methods that work together 
                        to ensure accuracy even when one component is imperfect.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h6 className="font-medium text-blue-900 mb-2">Method 1: Inverse Propensity</h6>
                          <p className="text-sm text-gray-700">Adjusts for response probabilities</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h6 className="font-medium text-blue-900 mb-2">Method 2: Outcome Imputation</h6>
                          <p className="text-sm text-gray-700">Estimates missing values scientifically</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4 italic">
                        It's the statistical equivalent of having a backup parachute—ensuring accuracy even when traditional methods fail.
                      </p>
                    </div>
                  )}

                  {expandedSection === 13 && (
                    <div className="mt-6 bg-blue-50 rounded-xl p-6 animate-fadeIn">
                      <h6 className="font-semibold text-blue-900 mb-3">From Raw Data to Strategic Intelligence</h6>
                      <p className="text-gray-700 mb-4">
                        We map high-dimensional conversation data into actionable insights that drive real decisions. 
                        Our AI doesn't just collect responses—it understands context, identifies patterns, and reveals hidden truths.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h6 className="font-medium text-blue-900 mb-2">Pattern Detection</h6>
                          <p className="text-sm text-gray-700">AI identifies emerging themes and correlations humans miss</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h6 className="font-medium text-blue-900 mb-2">Sentiment Analysis</h6>
                          <p className="text-sm text-gray-700">Understand not just what people say, but how they feel</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h6 className="font-medium text-blue-900 mb-2">Strategic Mapping</h6>
                          <p className="text-sm text-gray-700">Transform complex data into clear strategic recommendations</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4 italic">
                        Every conversation becomes a data point. Every data point becomes an insight. Every insight drives better decisions.
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Summary */}
                <div className="mt-12 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
                  <p className="text-xl font-semibold text-blue-900 mb-2">
                    The Bottom Line
                  </p>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Our revolutionary sampling catches what everyone else misses—delivering 
                    <span className="font-bold text-blue-600"> dramatically better accuracy</span> with 
                    <span className="font-bold text-blue-900"> deeper insights</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Economics Revolution */}
          <div 
            ref={(el) => { if (el) blocksRef.current[2] = el; }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Economic Revolution</h3>
                
                {/* Economic Revolution Content */}
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="inline-block p-6 bg-blue-50 rounded-2xl mb-4">
                      <svg className="w-16 h-16 mx-auto text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-blue-900">Revolutionary Economics</p>
                      <p className="text-lg text-gray-600">Better quality at a fraction of the cost</p>
                    </div>
                  </div>
                  
                  {/* Main Cost Comparison */}
                  <div className="text-center mb-10">
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Traditional polling requires massive call centers, thousands of employees, and weeks of work. 
                      Niner delivers superior results with AI-powered efficiency at a fraction of the cost.
                    </p>
                  </div>
                  
                  {/* Visual Comparison */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Traditional Polling */}
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                      <h4 className="text-2xl font-bold text-blue-900 mb-6">Traditional Polling</h4>
                      <div className="space-y-6">
                        <div className="pb-6 border-b border-gray-200">
                          <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">Cost per comprehensive study</p>
                          <p className="text-5xl font-bold text-red-600">Very High</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <div>
                              <p className="font-semibold text-blue-900 text-lg">Call center infrastructure</p>
                              <p className="text-gray-600">Physical facilities, equipment, management overhead</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <div>
                              <p className="font-semibold text-blue-900 text-lg">Human labor intensive</p>
                              <p className="text-gray-600">Hundreds of callers making thousands of attempts</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <div>
                              <p className="font-semibold text-blue-900 text-lg">Low success rate</p>
                              <p className="text-gray-600">Less than 1% response rate means wasted resources</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <div>
                              <p className="font-semibold text-blue-900 text-lg">Extended timelines</p>
                              <p className="text-gray-600">Weeks to gather and process responses</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Niner Approach */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-400">
                      <h4 className="text-2xl font-bold text-blue-900 mb-6">Niner Approach</h4>
                      <div className="space-y-6">
                        <div className="pb-6 border-b border-blue-200">
                          <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">Cost per comprehensive study</p>
                          <p className="text-5xl font-bold text-blue-600">Fraction of Cost</p>
                          <p className="text-lg text-gray-600 mt-2">With superior accuracy</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <span className="text-blue-600 mr-3 mt-1 text-xl font-bold">✓</span>
                            <div>
                              <p className="font-semibold text-blue-900 text-lg">AI-powered conversations</p>
                              <p className="text-gray-600">Automated yet personalized interactions at scale</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-blue-600 mr-3 mt-1 text-xl font-bold">✓</span>
                            <div>
                              <p className="font-semibold text-blue-900 text-lg">Smart targeting</p>
                              <p className="text-gray-600">Scientific sampling means fewer contacts needed</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-blue-600 mr-3 mt-1 text-xl font-bold">✓</span>
                            <div>
                              <p className="font-semibold text-blue-900 text-lg">Higher engagement</p>
                              <p className="text-gray-600">Natural conversations increase response rates</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-blue-600 mr-3 mt-1 text-xl font-bold">✓</span>
                            <div>
                              <p className="font-semibold text-blue-900 text-lg">Instant analysis</p>
                              <p className="text-gray-600">Real-time results without manual processing</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Value Proposition */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-10 mb-12 mt-16">
                  <h4 className="text-3xl font-bold text-blue-900 mb-10 text-center">The Niner Advantage</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="text-center">
                      <h5 className="text-2xl font-bold text-blue-600 mb-3">Lower Costs</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Eliminate call centers, reduce labor, and leverage AI efficiency to slash polling expenses
                      </p>
                    </div>
                    <div className="text-center">
                      <h5 className="text-2xl font-bold text-blue-600 mb-3">Better Data</h5>
                      <p className="text-gray-700 leading-relaxed">
                        More accurate results through scientific sampling and natural conversations
                      </p>
                    </div>
                    <div className="text-center">
                      <h5 className="text-2xl font-bold text-blue-600 mb-3">Faster Insights</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Get results in hours instead of weeks with automated analysis and reporting
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Line */}
                <div className="text-center max-w-3xl mx-auto">
                  <h4 className="text-3xl font-bold text-blue-900 mb-6">
                    Why pay more for worse results?
                  </h4>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Niner delivers superior polling accuracy at a fraction of traditional costs. 
                    It's not just an improvement—it's a complete transformation of polling economics.
                  </p>
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