import React from 'react';
import { Brain, Waves, Smartphone, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Our autonomous boat scans coastal zones using advanced AI algorithms to identify optimal farming areas based on salinity, temperature, and ocean currents.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Waves,
      title: "Real-Time Monitoring",
      description: "Continuous health analytics of seaweed farms with automated data collection, providing farmers with actionable insights for better yield management.",
      color: "from-teal-400 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Remote Control",
      description: "Monitor and operate the autonomous boat remotely via our intuitive mobile and web dashboard, giving farmers complete control from anywhere.",
      color: "from-blue-400 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Market Connection",
      description: "Seamlessly connect with verified buyers, processors, and exporters through our integrated marketplace, ensuring fair prices and reliable sales.",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our AI-powered autonomous system revolutionizes seaweed farming through intelligent automation and data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-500 transform -translate-y-1/2 hidden lg:block"></div>
            <div className="flex justify-between items-center relative z-10">
              {steps.map((_, index) => (
                <div key={index} className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full hidden lg:block"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;