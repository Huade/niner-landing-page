import React, { useEffect, useRef, useCallback, memo } from 'react';
import gsap from 'gsap';
import { useRotatingBadges } from '@/hooks/useRotatingBadges';

const Hero: React.FC = memo(() => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const { currentIndex: currentBadgeIndex, badges } = useRotatingBadges({
    badges: [
      "Founded by Dr. Michael Bailey • Walsh Professor at Georgetown",
      "Georgetown University • McCourt School of Public Policy",
      "Published in Political Analysis 2025 • Cambridge University Press",
      "AI-Powered • Scientifically Validated",
      "Real-Time Results • Deeper Insights"
    ],
    intervalMs: 5000
  });
  
  const handleButtonHover = useCallback((button: Element, scale: number) => {
    gsap.to(button, {
      scale,
      duration: 0.3,
      ease: "power2.out"
    });
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for fixed navigation
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

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

    const buttons = ctaRef.current?.querySelectorAll('button, a');
    buttons?.forEach(button => {
      const handleEnter = () => handleButtonHover(button, 1.05);
      const handleLeave = () => handleButtonHover(button, 1);
      
      button.addEventListener('mouseenter', handleEnter);
      button.addEventListener('mouseleave', handleLeave);
      
      return () => {
        button.removeEventListener('mouseenter', handleEnter);
        button.removeEventListener('mouseleave', handleLeave);
      };
    });

    return () => {
      tl.kill();
    };
  }, [handleButtonHover]);


  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      
      
      <div className="relative z-10 niner-container text-center">
        <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          When 99% Won't Answer,<br />
          <span className="niner-text-gradient-accent inline-block">
            How Can Polls Be Right?
          </span>
        </h1>
        
        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed" style={{fontSize: 'var(--niner-text-lg)', lineHeight: '1.75'}}>
          They can't—until now. NINER Research pioneers the modern polling paradigm with AI-powered 
          conversations that capture non-ignorable non-respondents (NINRs)—delivering accurate insights 
          from the silent majority at a fraction of the cost.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="niner-button niner-button-accent group shadow-lg"
            aria-label="See AI Polling in Action">
            <span>See AI Polling in Action</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <a 
            href="#solution"
            onClick={(e) => scrollToSection(e, 'solution')}
            className="niner-button niner-button-outline group border-gray-400 hover:border-white text-gray-300 hover:text-white"
            aria-label="Learn How It Works">
            <span>Learn How It Works</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div ref={badgesRef} className="mt-12 h-8 relative">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 text-sm text-gray-400 h-8 flex items-center justify-center transition-all duration-700 ${
                currentBadgeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{
                fontSize: 'var(--niner-text-sm)',
                letterSpacing: '0.025em'
              }}
            >
              {badge}
            </div>
          ))}
        </div>
        
      </div>
      
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;