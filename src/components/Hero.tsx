import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0);

  const badges = [
    "Co-founded by Dr. Michael Bailey • Walsh Professor at Georgetown",
    "Georgetown University • McCourt School of Public Policy",
    "Published in Political Analysis 2025 • Cambridge University Press",
    "AI-Powered • Scientifically Validated",
    "Real-Time Results • Deeper Insights"
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, badgesRef.current], {
      opacity: 0,
      y: 30
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.6")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.4")
    .to(badgesRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6
    }, "-=0.2");

    const buttons = ctaRef.current?.querySelectorAll('button');
    buttons?.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });


    // Badge rotation with fade effect for consistent direction
    const badgeInterval = setInterval(() => {
      setCurrentBadgeIndex((prev) => (prev + 1) % badges.length);
    }, 5000);

    return () => {
      tl.kill();
      clearInterval(badgeInterval);
    };
  }, [badges.length]);


  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          When 99% Won't Answer,<br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            How Can Polls Be Right?
          </span>
        </h1>
        
        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Co-founded by Dr. Michael Bailey, Georgetown's Walsh Professor of Government and Public Policy, 
          Niner Research revolutionizes polling with AI-powered conversations that reach the silent majority 
          traditional polls miss—at a fraction of the cost.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
            <span>See AI Polling in Action</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="group px-8 py-4 bg-transparent border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
            <span>Read the Research</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div ref={badgesRef} className="mt-8 h-6 relative">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 text-sm text-gray-400 h-6 flex items-center justify-center transition-opacity duration-700 ${
                currentBadgeIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {badge}
            </div>
          ))}
        </div>
        
      </div>
      
    </section>
  );
};

export default Hero;