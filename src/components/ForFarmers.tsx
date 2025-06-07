import React from 'react';
import { Users, BarChart3, Shield, Clock } from 'lucide-react';

const ForFarmers = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Increase Yields by Xx",
      description: "AI-powered optimization identifies the best growing conditions and harvest timing for maximum productivity."
    },
    {
      icon: Clock,
      title: "Reduce Labor by X%",
      description: "Autonomous harvesting and monitoring eliminate manual labor, saving time and reducing operational costs."
    },
    {
      icon: Shield,
      title: "Risk-Free Operations",
      description: "Real-time monitoring and predictive analytics help prevent crop loss due to environmental changes."
    },
    {
      icon: Users,
      title: "Direct Market Access",
      description: "Connect directly with verified buyers and exporters, ensuring fair prices and reliable income."
    }
  ];

  return (
    <section id="farmers" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium mb-8">
              For Seaweed Farmers
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Farming Operations
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop struggling with manual harvesting and unpredictable yields. Our AI-powered autonomous boats handle the heavy lifting while you focus on growing your business.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                Join as Farmer
              </button>
              <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
              <div className="bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Success Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Average Yield Increase</span>
                    <span className="text-emerald-400 font-bold">X%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Labor Cost Reduction</span>
                    <span className="text-emerald-400 font-bold">X%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Revenue Growth</span>
                    <span className="text-emerald-400 font-bold">X%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Time Saved</span>
                    <span className="text-emerald-400 font-bold">X hrs/day</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">X+</div>
                <div className="text-slate-400">Farmers Already Benefiting</div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForFarmers;