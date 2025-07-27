import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 pb-4 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl mb-4 text-blue-500 font-bold">Niner Research</h3>
            <p className="text-gray-400 text-lg">Turning Silent Voices Into Powerful Insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xl mb-4 text-white font-semibold">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-blue-500 transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-blue-500 transition-colors">Pricing</a></li>
                <li><a href="#demo" className="text-gray-400 hover:text-blue-500 transition-colors">Request Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl mb-4 text-white font-semibold">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-blue-500 transition-colors">Team</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl mb-4 text-white font-semibold">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-400 hover:text-blue-500 transition-colors">Blog</a></li>
                <li><a href="#research" className="text-gray-400 hover:text-blue-500 transition-colors">Research Papers</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-blue-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-600 text-center">
          <p className="text-gray-500 text-sm">&copy; 2025 Niner Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;