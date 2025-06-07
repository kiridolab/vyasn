import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Maximize2 } from 'lucide-react';

const DemoPrototype = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-8">
            Live Demo Prototype
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See Our
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Autonomous Boat
            </span>
            <span className="block text-slate-300 text-2xl md:text-3xl font-normal mt-4">
              In Action
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Experience our AI-powered autonomous boat through our interactive demo. Watch how it navigates, monitors, and harvests seaweed with precision.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Demo Container */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 border border-slate-600 overflow-hidden">
            {/* Demo Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                </button>
                <button className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-600 transition-all duration-300">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-600 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-sm font-medium">Live Demo</span>
              </div>
            </div>

            {/* Boat Image Container */}
            <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-12 mb-8">
              <div className="relative max-w-2xl mx-auto">
                <img 
                  src="/public/untitled.png1 bn.png" 
                  alt="VYASN Autonomous Boat Prototype" 
                  className="w-full h-auto object-contain filter drop-shadow-2xl"
                />
                
                {/* Animated Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400/30 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-teal-400/30 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400/30 rounded-full animate-ping delay-500"></div>
                
                {/* Status Indicators */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
                  <div className="text-cyan-400 text-xs font-medium mb-1">AI Status</div>
                  <div className="text-white text-sm">Active Monitoring</div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
                  <div className="text-emerald-400 text-xs font-medium mb-1">Navigation</div>
                  <div className="text-white text-sm">Autonomous</div>
                </div>
              </div>
            </div>

            {/* Demo Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-white font-semibold mb-2">AI Navigation</h3>
                <p className="text-slate-400 text-sm">GPS-guided autonomous movement with obstacle detection and avoidance.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-white font-semibold mb-2">Real-time Monitoring</h3>
                <p className="text-slate-400 text-sm">Continuous health analytics and environmental data collection.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-white font-semibold mb-2">Automated Harvesting</h3>
                <p className="text-slate-400 text-sm">Precision harvesting with minimal environmental impact.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Schedule Live Demo
              </button>
              <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                Download Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPrototype;