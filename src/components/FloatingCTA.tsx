import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded CTA */}
      {isExpanded && (
        <div className="mb-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 max-w-sm shadow-2xl animate-fadeIn">
          <button 
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
          
          <h3 className="text-white font-bold text-lg mb-3">Ready to Transform Your Farm?</h3>
          <p className="text-slate-300 text-sm mb-4">Join 500+ farmers already using VYASN's AI-powered solution.</p>
          
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-teal-600 transition-all duration-200 text-sm">
              Join as Farmer
            </button>
            <button className="w-full px-4 py-2 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 text-sm">
              Book Demo
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:from-cyan-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 ${
          isExpanded ? 'rotate-180' : ''
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingCTA;