import React from 'react';
import { Cpu, Waves, Smartphone, Database, Zap, Shield } from 'lucide-react';

const Technology = () => {
  const features = [
    {
      icon: Cpu,
      title: "Advanced AI Algorithms",
      description: "Machine learning models trained on ocean data to optimize farming conditions and predict optimal harvest times.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Waves,
      title: "Real-Time Ocean Monitoring",
      description: "Continuous monitoring of salinity, temperature, pH levels, and current patterns for optimal growing conditions.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "Historical data analysis and weather forecasting to predict yield outcomes and prevent crop loss.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "Intuitive mobile and web dashboard for remote monitoring, control, and marketplace access.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Zap,
      title: "Autonomous Navigation",
      description: "GPS-guided autonomous boats with obstacle avoidance and precise positioning for efficient operations.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Blockchain Traceability",
      description: "Complete supply chain transparency with blockchain-based tracking from farm to consumer.",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section id="technology" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-8">
            Cutting-Edge Technology
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powered by
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced AI
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our autonomous boats combine computer vision, IoT sensors, and machine learning to revolutionize ocean farming with unprecedented precision and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h3>
            <p className="text-slate-400 text-lg">Built with enterprise-grade technologies for reliability and scalability</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <div className="text-white font-semibold">Computer Vision</div>
              <div className="text-slate-400 text-sm">OpenCV, TensorFlow</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-10 h-10 text-white" />
              </div>
              <div className="text-white font-semibold">IoT Sensors</div>
              <div className="text-slate-400 text-sm">Arduino, Raspberry Pi</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <div className="text-white font-semibold">Mobile Platform</div>
              <div className="text-slate-400 text-sm">React Native, Flutter</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-white font-semibold">Blockchain</div>
              <div className="text-slate-400 text-sm">Ethereum, IPFS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;