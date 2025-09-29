import React from "react";
import { Clock, CheckCircle, Users } from "lucide-react";
import { Button } from "../ui/button";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const WhatsAppSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923323277946?text=Hello!%20I%27m%20interested%20in%20your%20manpower%20services.%20Please%20provide%20more%20information.", "_blank");
  };

  const stats = [
    { icon: Users, value: "1000+", label: "People Hired via WhatsApp" },
    { icon: Clock, value: "5 min", label: "Average Response Time" },
    { icon: CheckCircle, value: "24/7", label: "Available Support" },
    { icon: WhatsAppIcon, value: "95%", label: "Query Resolution Rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-300 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp Connect</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Get Instant Response
                <span className="block text-yellow-300">on WhatsApp</span>
              </h2>
              
              <p className="text-xl text-green-100 leading-relaxed">
                Skip the lengthy forms and phone calls. Connect directly with our 
                recruitment experts on WhatsApp for immediate assistance and faster processing.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Instant consultation and guidance",
                "Real-time updates on your application",
                "Direct communication with recruitment team",
                "Quick document sharing and verification"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                  <span className="text-green-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-2 mx-auto">
                      <Icon className="h-6 w-6 text-yellow-300" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-green-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - WhatsApp Chat Preview */}
          <div className="relative">
            
            {/* Phone Mockup */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
              
              {/* WhatsApp Header */}
              <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center space-x-3 -m-6 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">AM</span>
                </div>
                <div>
                  <div className="font-semibold">ABZUA Manpower</div>
                  <div className="text-xs text-green-100">Online</div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3">
                
                {/* Incoming Message */}
                <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-800">
                    👋 Welcome to ABZUA Manpower! How can we help you today?
                  </p>
                  <div className="text-xs text-gray-500 mt-1">10:30 AM</div>
                </div>

                {/* Outgoing Message */}
                <div className="bg-green-500 text-white p-3 rounded-lg max-w-xs ml-auto">
                  <p className="text-sm">
                    I'm interested in job opportunities in UAE
                  </p>
                  <div className="text-xs text-green-100 mt-1">10:31 AM</div>
                </div>

                {/* Incoming Message */}
                <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-800">
                    Great! We have multiple openings in UAE. What's your field of expertise? 🏗️⚕️🏨
                  </p>
                  <div className="text-xs text-gray-500 mt-1">10:32 AM</div>
                </div>

                {/* Quick Replies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Construction</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Healthcare</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Engineering</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg animate-bounce">
              <WhatsAppIcon className="h-6 w-6" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white text-green-600 p-3 rounded-full shadow-lg">
              <Clock className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mt-16">
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <WhatsAppIcon className="mr-3 h-6 w-6" />
            Start WhatsApp Chat Now
          </Button>
          
          <p className="text-green-100 mt-4 text-lg">
            Join 1000+ successful candidates who found their dream jobs through WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;