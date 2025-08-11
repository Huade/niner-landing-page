import React from 'react';
import bbcLogo from '@/assets/logos/bbc.svg';
import globeAndMailLogo from '@/assets/logos/globe-and-mail.svg';
import japanTimesLogo from '@/assets/logos/japan-times.svg';
import theAtlanticLogo from '@/assets/logos/the-atlantic.svg';
import niskanenCenterLogo from '@/assets/logos/niskanen-center.svg';
import digitalJournalLogo from '@/assets/logos/digital-journal.webp';
import scmpLogo from '@/assets/logos/scmp.svg';
import poynterLogo from '@/assets/logos/poynter.svg';

const SocialProof: React.FC = () => {
  const mediaOutlets = [
    {
      name: 'BBC',
      url: 'https://www.bbc.com/news/articles/cj4ve004llxo',
      logo: bbcLogo,
      needsInvert: false
    },
    {
      name: 'The Globe and Mail',
      url: 'https://www.theglobeandmail.com/opinion/article-is-political-polling-in-the-us-broken/',
      logo: globeAndMailLogo,
      needsInvert: false
    },
    {
      name: 'The Japan Times',
      url: 'https://www.japantimes.co.jp/commentary/2024/10/31/world/political-polling-broken/',
      logo: japanTimesLogo,
      needsInvert: false
    },
    {
      name: 'The Atlantic',
      url: 'https://www.theatlantic.com/ideas/archive/2025/05/polling-2024-trump-bias/682834/',
      logo: theAtlanticLogo,
      needsInvert: false
    },
    {
      name: 'Niskanen Center',
      url: 'https://www.niskanencenter.org/can-we-believe-the-polls/',
      logo: niskanenCenterLogo,
      needsInvert: false  // Using SVG version
    },
    {
      name: 'Digital Journal',
      url: 'https://www.digitaljournal.com/world/us-pollsters-underestimate-trump-support-again/article',
      logo: digitalJournalLogo,
      needsInvert: false  // Logo updated, no longer needs inversion
    },
    {
      name: 'South China Morning Post',
      url: 'https://www.scmp.com/news/world/united-states-canada/article/3270463/trump-shooting-blame-game-lays-bare-americas-bitter-political-divide',
      logo: scmpLogo,
      needsInvert: false
    },
    {
      name: 'Poynter',
      url: 'https://www.poynter.org/commentary/2024/why-were-election-polls-wrong-again-trump-win/',
      logo: poynterLogo,
      needsInvert: false
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.15em] text-blue-600 font-semibold mb-3">
            Industry Recognition
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dr. Michael Bailey, CEO & Co-Founder
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Georgetown Walsh professor and polling methodology pioneer whose revolutionary approach to statistical sampling has garnered attention from the world's leading media outlets
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop grid layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 items-stretch">
            {mediaOutlets.map((outlet, index) => (
              <a
                key={index}
                href={outlet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-8 bg-white rounded-lg border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 min-h-[140px] overflow-hidden"
                aria-label={`Read article on ${outlet.name}`}
              >
                
                <div className="relative flex items-center justify-center">
                  <img 
                    src={outlet.logo} 
                    alt={outlet.name}
                    className={`h-10 md:h-12 w-auto object-contain transition-all duration-200 opacity-60 group-hover:opacity-100 ${
                      outlet.needsInvert 
                        ? 'invert grayscale group-hover:invert-0 group-hover:grayscale-0' 
                        : 'grayscale group-hover:grayscale-0'
                    }`}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Mobile carousel layout */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
              {mediaOutlets.map((outlet, index) => (
                <a
                  key={index}
                  href={outlet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 snap-center group"
                  aria-label={`Read article on ${outlet.name}`}
                >
                  <div className="flex items-center justify-center w-48 h-28 p-4 bg-white rounded-lg border border-gray-200 transition-colors duration-200">
                    <img 
                      src={outlet.logo} 
                      alt={outlet.name}
                      className={`h-8 w-auto object-contain opacity-60 ${
                        outlet.needsInvert 
                          ? 'invert grayscale' 
                          : 'grayscale'
                      }`}
                    />
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Swipe to see more
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-12 text-white">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Transforming Political Intelligence</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Backed by peer-reviewed research, Niner Research solves the 99% non-response crisis that renders traditional polling obsolete
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
              <div className="text-gray-400 text-sm">AI Services</div>
              <div className="text-gray-500 text-xs mt-1">Intelligent Processing</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">Real-time</div>
              <div className="text-gray-400 text-sm">Adaptive Learning</div>
              <div className="text-gray-500 text-xs mt-1">Dynamic Question Selection</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">3-Layer</div>
              <div className="text-gray-400 text-sm">Validation System</div>
              <div className="text-gray-500 text-xs mt-1">Exit & Engagement Detection</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">Dynamic</div>
              <div className="text-gray-400 text-sm">Follow-up Questions</div>
              <div className="text-gray-500 text-xs mt-1">Clarification Engine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;