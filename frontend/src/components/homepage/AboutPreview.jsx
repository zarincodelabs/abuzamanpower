import React, { useState } from "react";
import { ArrowRight, Shield, Award, Users, Globe, Play, X } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import AnimatedCounter from "../ui/AnimatedCounter";

const AboutPreview = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  const handlePlayVideo = () => {
    setShowVideo(true);
  };
  
  const handleCloseVideo = () => {
    setShowVideo(false);
  };
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="h-4 w-4" />
                <span>About ABZUA Manpower</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner in
                <span className="block text-green-600">Global Recruitment</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  For over 8 years, ABZUA Manpower has been at the forefront of connecting 
                  skilled Pakistani talent with prestigious employers across the globe. We 
                  specialize in recruitment for Gulf countries and European markets.
                </p>
                
                <p>
                  Our commitment to excellence, legal compliance, and personalized service 
                  has made us the preferred choice for both job seekers and employers. 
                  We don't just find jobs – we build careers and create success stories.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To bridge the gap between skilled Pakistani professionals and global opportunities, 
                ensuring mutual success through ethical practices and comprehensive support.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Legal Compliance", desc: "Fully licensed and regulated" },
                { icon: Users, title: "Expert Team", desc: "Experienced recruitment specialists" },
                { icon: Globe, title: "Global Network", desc: "Partnerships worldwide" },
                { icon: Award, title: "Proven Success", desc: "95% placement success rate" }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            {/* Main Image with Play Button Overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer" onClick={handlePlayVideo}>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional team meeting"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group">
                  <Play className="h-8 w-8 text-green-600 ml-1 group-hover:text-green-700" />
                </div>
              </div>
              
              {/* Ripple Effect on Hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl border-4 border-white/50 animate-pulse"></div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    <AnimatedCounter end={2500} suffix="+" className="font-inter-bold" />
                  </div>
                  <div className="text-sm text-gray-600">Successful Placements</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              <AnimatedCounter end={8} suffix="+ Years Experience" className="font-inter-semibold" />
            </div>
          </div>
        </div>
      </div>
      
      {/* YouTube Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={handleCloseVideo}>
          <div className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            {/* YouTube Embed with Autoplay */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/s2jQvE2KCbw?autoplay=1&mute=1"
              title="ABZUA Manpower Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutPreview;