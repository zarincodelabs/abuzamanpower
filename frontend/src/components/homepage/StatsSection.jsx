import React, { useState, useEffect } from "react";
import { Users, Globe, Calendar, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    workers: 0,
    countries: 0,
    years: 0,
    success: 0
  });

  const stats = [
    {
      icon: Users,
      value: 2500,
      suffix: "+",
      label: "Workers Deployed",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Globe,
      value: 15,
      suffix: "+",
      label: "Countries Served",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Calendar,
      value: 8,
      suffix: "+",
      label: "Years of Experience",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: "%",
      label: "Success Rate",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      return setTimeout(() => {
        let current = 0;
        const increment = stat.value / steps;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(counter);
          }
          
          setCounters(prev => ({
            ...prev,
            [index === 0 ? 'workers' : index === 1 ? 'countries' : index === 2 ? 'years' : 'success']: Math.floor(current)
          }));
        }, interval);
      }, index * 200); // Stagger the animations
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const getCounterValue = (index) => {
    switch(index) {
      case 0: return counters.workers;
      case 1: return counters.countries;
      case 2: return counters.years;
      case 3: return counters.success;
      default: return 0;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40V0H20L0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global Network Statistics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>

                  {/* Counter */}
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                      {getCounterValue(index)}
                    </span>
                    <span className="text-3xl font-bold text-gray-600">
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-700">
                    {stat.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold">
            <span>Join thousands of successful placements</span>
            <TrendingUp className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;