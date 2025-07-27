import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <svg 
              width="220" 
              height="40" 
              viewBox="0 0 220 40" 
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <g transform="translate(110, 25)">
                <text 
                  x="0" 
                  y="0" 
                  fontFamily="Helvetica Neue, sans-serif" 
                  fontSize="18" 
                  fontWeight="500" 
                  fill="currentColor" 
                  textAnchor="middle" 
                  letterSpacing="3"
                >
                  NINER RESEARCH
                </text>
              </g>
            </svg>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <a 
                href="#problem" 
                className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Problem
              </a>
              <a 
                href="#solution" 
                className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Solution
              </a>
              <a 
                href="#industries" 
                className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Industries
              </a>
              <a 
                href="#faq" 
                className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="ml-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                Request a Demo
              </a>
              <a 
                href="#survey" 
                className="px-6 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors duration-200"
              >
                Take survey with NINER AI
              </a>
            </div>
          </div>
          
          <button 
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 top-0 w-full h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-gray-900' : 'bg-white'
              } ${mobileMenuOpen ? 'top-2.5 rotate-45' : ''}`}></span>
              <span className={`absolute left-0 top-2.5 w-full h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-gray-900' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute left-0 bottom-0 w-full h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-gray-900' : 'bg-white'
              } ${mobileMenuOpen ? 'bottom-2.5 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <a 
            href="#problem" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Problem
          </a>
          <a 
            href="#solution" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Solution
          </a>
          <a 
            href="#industries" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Industries
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            FAQ
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 mt-4 bg-blue-600 text-white font-medium rounded-full text-center hover:bg-blue-700 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request a Demo
          </a>
          <a 
            href="#survey" 
            className="block px-3 py-2 bg-green-600 text-white font-medium rounded-full text-center hover:bg-green-700 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Take survey with NINER AI
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;