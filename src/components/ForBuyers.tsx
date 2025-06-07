import React from 'react';
import { Search, Truck, CheckCircle, Globe } from 'lucide-react';

const ForBuyers = () => {
  const benefits = [
    {
      icon: Search,
      title: "Quality Assured Supply",
      description: "Access premium seaweed with real-time quality metrics and traceability from farm to market."
    },
    {
      icon: Truck,
      title: "Streamlined Logistics",
      description: "Efficient supply chain management with predictable delivery schedules and optimized routes."
    },
    {
      icon: CheckCircle,
      title: "Verified Farmers",
      description: "Work with pre-verified, professional farmers who maintain consistent quality standards."
    },
    {
      icon: Globe,
      title: "Nationwide Network",
      description: "Access seaweed suppliers across India's entire coastline through our integrated platform."
    }
  ];

  return (
    <section id="buyers" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Marketplace Dashboard</h3>
                <div className="bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-blue-400 text-sm mb-1">Available Supply</div>
                      <div className="text-white text-2xl font-bold">X tons</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-cyan-400 text-sm mb-1">Active Farmers</div>
                      <div className="text-white text-2xl font-bold">X+</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate-800/30 rounded-lg p-3">
                      <span className="text-slate-300">Premium Grade A</span>
                      <span className="text-emerald-400 font-semibold">₹X/kg</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/30 rounded-lg p-3">
                      <span className="text-slate-300">Standard Grade B</span>
                      <span className="text-blue-400 font-semibold">₹X/kg</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/30 rounded-lg p-3">
                      <span className="text-slate-300">Bulk Orders</span>
                      <span className="text-cyan-400 font-semibold">₹X/kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-8">
              For Buyers & Processors
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Source Premium
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Seaweed Direct
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Skip the middlemen and connect directly with verified seaweed farmers. Get consistent supply, quality assurance, and competitive pricing through our integrated marketplace.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
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
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Browse Suppliers
              </button>
              <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBuyers;