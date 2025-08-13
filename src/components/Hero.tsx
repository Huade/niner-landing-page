import React, { useEffect, useRef, useCallback, memo, useState } from 'react';
import gsap from 'gsap';
import { useRotatingBadges } from '@/hooks/useRotatingBadges';

const Hero: React.FC = memo(() => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const { currentIndex: currentBadgeIndex, badges } = useRotatingBadges({
    badges: [
      "Co-founded by Dr. Michael Bailey, CEO • Walsh Professor at Georgetown",
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

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      console.log('Email submitted:', email);
      // Handle email submission here
    }
  }, [email]);

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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gray-900"></div>
      
      
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
        
        <div ref={ctaRef} className="flex justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              required
              aria-label="Business email"
            />
            <button 
              type="submit"
              className="niner-button-flat niner-button-primary-flat whitespace-nowrap"
              aria-label="See AI Polling in Action">
              See AI Polling in Action
            </button>
          </form>
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