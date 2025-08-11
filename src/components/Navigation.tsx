import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled(isScrolled);
          
          // Calculate scroll progress
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          setScrollProgress(scrolled);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for fixed navigation
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center group">
              <div className={`text-xl lg:text-2xl font-bold tracking-wider transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                NINER
                <span className="ml-1 font-light">RESEARCH</span>
              </div>
            </a>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
            <a 
              href="#problem" 
              onClick={(e) => scrollToSection(e, 'problem')}
              className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Problem
            </a>
            <a 
              href="#solution" 
              onClick={(e) => scrollToSection(e, 'solution')}
              className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Solution
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, 'faq')}
              className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="ml-4 px-6 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Request a Demo
            </a>
            </div>
          </div>
          
          <button 
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-full h-0.5 transition-all duration-300 ease-in-out ${
                scrolled ? 'bg-gray-900' : 'bg-white'
              } ${mobileMenuOpen ? 'top-2.5 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-2.5 w-full h-0.5 transition-all duration-300 ease-in-out ${
                scrolled ? 'bg-gray-900' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 transition-all duration-300 ease-in-out ${
                scrolled ? 'bg-gray-900' : 'bg-white'
              } ${mobileMenuOpen ? 'bottom-2.5 -rotate-45' : 'bottom-0'}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-6 space-y-2 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100">
          <a 
            href="#problem" 
            onClick={(e) => scrollToSection(e, 'problem')}
            className="block px-4 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
          >
            Problem
          </a>
          <a 
            href="#solution" 
            onClick={(e) => scrollToSection(e, 'solution')}
            className="block px-4 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
          >
            Solution
          </a>
          <a 
            href="#faq" 
            onClick={(e) => scrollToSection(e, 'faq')}
            className="block px-4 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
          >
            FAQ
          </a>
          <a 
            href="#contact" 
            className="block w-full px-6 py-2.5 mt-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Request a Demo
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;