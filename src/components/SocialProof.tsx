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
            Featured In Global Media
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dr. Michael Bailey's Expertise Featured In
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading publications worldwide recognize Dr. Bailey's groundbreaking research on modern polling methodology
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

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-50 border border-yellow-200 mb-4 transition-colors duration-200 group-hover:bg-yellow-100">
              <span className="text-3xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent">8+</span>
            </div>
            <div className="text-base font-semibold text-gray-700">Global Media Features</div>
            <div className="text-sm text-gray-500 mt-1">Worldwide Recognition</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 border border-blue-200 mb-4 transition-colors duration-200 group-hover:bg-blue-100">
              <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div className="text-base font-semibold text-gray-700">Georgetown University</div>
            <div className="text-sm text-gray-500 mt-1">Walsh Professor</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-50 border border-purple-200 mb-4 transition-colors duration-200 group-hover:bg-purple-100">
              <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="text-base font-semibold text-gray-700">2025 Research</div>
            <div className="text-sm text-gray-500 mt-1">Latest Published Studies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;