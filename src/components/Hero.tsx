import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            India's First AI-Powered Ocean Farming Solution
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          The Future of
          <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            Seaweed Farming
          </span>
          <span className="block text-slate-300 text-3xl md:text-4xl lg:text-5xl font-normal mt-4">
            Is Autonomous
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          VYASN's AI-powered autonomous boats transform seaweed cultivation with real-time monitoring, 
          automated harvesting, and direct market connections. Increase yields by Xx while reducing labor costs by X%.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-500 text-white text-lg font-semibold rounded-xl hover:from-cyan-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25">
            Start Your Journey
            <ChevronDown className="inline-block w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
          
          <button className="group flex items-center px-8 py-4 border-2 border-slate-600 text-slate-300 text-lg font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mr-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
              <Play className="w-5 h-5 ml-1" />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">Xx</div>
            <div className="text-slate-400 font-medium">Yield Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">X%</div>
            <div className="text-slate-400 font-medium">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-slate-400 font-medium">AI Monitoring</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;