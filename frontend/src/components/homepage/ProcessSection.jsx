import React from "react";
import { FileSearch, UserCheck, Video, Plane } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileSearch,
      number: "01",
      title: "Submit Inquiry",
      description: "Share your requirements or job preferences through our WhatsApp or contact form. Our team responds within 5 minutes.",
      shortDescription: "Share requirements via WhatsApp - 5min response",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: UserCheck,
      number: "02", 
      title: "Candidate Matching",
      description: "We carefully screen and match qualified candidates based on skills, experience, and employer requirements.",
      shortDescription: "Screen & match qualified candidates by skills",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Video,
      number: "03",
      title: "Interview & Selection",
      description: "Coordinate interviews between employers and candidates, ensuring the perfect fit for both parties.",
      shortDescription: "Coordinate interviews for perfect employer-candidate fit",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Plane,
      number: "04",
      title: "Visa & Deployment",
      description: "Complete visa processing, documentation, and ensure smooth deployment to the destination country.",
      shortDescription: "Complete visa processing & smooth deployment",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 h-full w-full" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="large-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#large-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>How It Works</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple 4-Step Process
            <span className="block text-green-600">to Your Dream Job</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures quick, efficient, and successful placements 
            with minimal hassle and maximum support throughout your journey.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 app-card">
                    
                    {/* Step Number & Icon */}
                    <div className="text-center mb-4 lg:mb-6">
                      <div className={`relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 ${step.bgColor} rounded-full mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-6 w-6 lg:h-8 lg:w-8 text-gray-700`} />
                        
                        {/* Step Number Badge */}
                        <div className={`absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm font-spacemono`}>
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3 lg:space-y-4">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 font-spacemono">
                        {step.title}
                      </h3>
                      
                      {/* Responsive Description */}
                      <p className="text-gray-600 leading-relaxed font-spacemono">
                        <span className="hidden md:inline text-sm lg:text-base">{step.description}</span>
                        <span className="md:hidden text-sm">{step.shortDescription}</span>
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="flex justify-center">
                        <div className={`w-12 h-1 lg:w-16 lg:h-1 bg-gradient-to-r ${step.color} rounded-full`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 lg:top-24 -right-3 lg:-right-4 transform translate-y-1">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Start with a simple WhatsApp message and let us guide you through 
              every step to international career success.
            </p>
            <button 
              onClick={() => window.open("https://wa.me/923340004481?text=I%20want%20to%20start%20the%20process%20for%20international%20job%20placement.%20Please%20guide%20me.", "_blank")}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Process Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;