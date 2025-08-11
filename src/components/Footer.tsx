import React, { memo } from 'react';

const Footer: React.FC = memo(() => {
  return (
    <footer className="py-16 pb-4 mt-24" style={{backgroundColor: 'var(--niner-secondary-900)', color: 'white'}}>
      <div className="niner-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl mb-4 font-bold niner-text-gradient">Niner Research</h3>
            <p className="text-lg" style={{color: '#94a3b8', fontSize: 'var(--niner-text-lg)'}}>Turning Silent Voices Into Powerful Insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xl mb-4 font-semibold" style={{fontSize: 'var(--niner-text-xl)'}}>Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-blue-400 transition-colors duration-200" style={{color: '#94a3b8'}}>Features</a></li>
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors duration-200" style={{color: '#94a3b8'}}>Pricing</a></li>
                <li><a href="#demo" className="hover:text-blue-400 transition-colors duration-200" style={{color: '#94a3b8'}}>Request Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl mb-4 font-semibold" style={{fontSize: 'var(--niner-text-xl)'}}>Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-blue-400 transition-colors duration-200" style={{color: '#94a3b8'}}>About Us</a></li>
                <li><a href="#team" className="hover:text-blue-400 transition-colors duration-200" style={{color: '#94a3b8'}}>Team</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-200" style={{color: '#94a3b8'}}>Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl mb-4 font-semibold" style={{fontSize: 'var(--niner-text-xl)'}}>Resources</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="hover:text-blue-400 transition-colors duration-200" style={{color: '#94a3b8'}}>Blog</a></li>
                <li><a href="#research" className="hover:text-blue-400 transition-colors duration-200" style={{color: '#94a3b8'}}>Research Papers</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors duration-200" style={{color: '#94a3b8'}}>FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t text-center" style={{borderColor: '#475569'}}>
          <p className="text-sm" style={{color: '#64748b', fontSize: 'var(--niner-text-sm)'}}>&copy; 2025 Niner Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;