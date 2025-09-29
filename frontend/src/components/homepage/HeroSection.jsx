import React, { useState, useEffect } from "react";
import { ArrowRight, Users, Award } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleEmployerClick = () => {
    window.open("https://wa.me/923323277946?text=I%20need%20skilled%20workers%20for%20my%20business.%20Please%20provide%20details%20about%20your%20services.", "_blank");
  };

  const handleJobSeekerClick = () => {
    window.open("https://wa.me/923323277946?text=I%20am%20looking%20for%20international%20job%20opportunities.%20Please%20guide%20me%20about%20available%20positions.", "_blank");
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 hero-mobile-margin lg:pt-20"> 
      {/* Video Background with Preloader */}
      <div className="absolute inset-0 z-0">
        {/* Video Preloader */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center z-10">
            <div className="text-center space-y-4">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-green-300/30 border-t-green-400 rounded-full mx-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-white/80 font-medium">Loading Video...</p>
            </div>
          </div>
        )}

        {/* Fallback Background */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
            <div className="absolute inset-0 opacity-20">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
                }}
              />
            </div>
          </div>
        )}

        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/assets/videos/hero-background-video.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Enhanced Animated Background Elements with 3D Effects */}
      <div className="absolute inset-0 z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotateZ: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
            rotateZ: [360, 180, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotateZ: [0, 90, 180]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl"
        />
        
        {/* New floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-green-300 to-yellow-300 rounded-full"
            animate={{
              y: [0, -100, -200, -100, 0],
              x: [0, Math.sin(i * 0.5) * 50, Math.cos(i * 0.3) * 30, 0],
              opacity: [0, 0.8, 1, 0.8, 0],
              scale: [0.5, 1, 1.2, 1, 0.5]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${60 + (i % 3) * 10}%`
            }}
          />
        ))}
      </div>

      {/* Content - Enhanced Mobile Centering */}
      <div className="relative z-20 w-full flex items-center justify-center min-h-screen px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center lg:text-left space-y-6 lg:space-y-8 w-full max-w-4xl mx-auto lg:mx-0"
        >
          
          {/* Trust Indicators - Enhanced Mobile Display */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center lg:justify-start items-center space-x-6 lg:space-x-8 text-white/90 mb-6 lg:mb-8"
          >
            <motion.div 
              className="flex flex-col items-center lg:flex-row lg:space-x-2 group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="h-5 w-5 lg:h-6 lg:w-6 text-green-400 group-hover:scale-110 transition-transform mb-1 lg:mb-0 drop-shadow-lg" />
              <span className="text-sm lg:text-base font-medium text-center">
                <AnimatedCounter end={2500} suffix="+ Workers" className="font-inter-bold text-green-300" />
              </span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center lg:flex-row lg:space-x-2 group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-400 group-hover:scale-110 transition-transform mb-1 lg:mb-0 drop-shadow-lg" />
              <span className="text-sm lg:text-base font-medium text-center">
                <AnimatedCounter end={95} suffix="% Success" className="font-inter-bold text-yellow-300" />
              </span>
            </motion.div>
          </motion.div>

          {/* ENHANCED MAIN HEADLINE - Mobile First */}
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
            <motion.div className="relative">
              {/* Enhanced Background morphing shape */}
              <motion.div 
                className="absolute -top-10 lg:-top-20 -left-5 lg:-left-10 w-32 h-32 lg:w-80 lg:h-80 opacity-20 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%", 
                    "50% 60% 30% 60% / 30% 60% 70% 40%",
                    "60% 40% 60% 30% / 40% 50% 60% 30%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                  ],
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 0.9, 1.2, 1]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-inter-black"
                style={{ 
                  textShadow: "0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(34, 197, 94, 0.2)",
                  filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))"
                }}
              >
                {/* Enhanced Animated word by word reveal */}
                <motion.span 
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1.2, delay: 1 }}
                  className="block"
                  style={{ transformOrigin: "bottom" }}
                >
                  Connecting Skilled
                </motion.span>
                
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 1.3,
                    type: "spring",
                    bounce: 0.4
                  }}
                  className="block bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent font-black relative"
                  style={{ 
                    backgroundSize: "300% 300%",
                    animation: "gradientShift 4s ease infinite",
                    textShadow: "0 0 60px rgba(34, 197, 94, 0.6)",
                    filter: "drop-shadow(0 0 30px rgba(245, 158, 11, 0.6))"
                  }}
                >
                  Pakistani Talent
                </motion.span>
                
                <motion.span 
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1.2, delay: 1.6 }}
                  className="block text-white"
                  style={{ transformOrigin: "bottom" }}
                >
                  with Global Employers
                </motion.span>
              </motion.h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed font-inter-medium max-w-3xl mx-auto lg:mx-0"
              style={{ 
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)"
              }}
            >
              Your trusted partner in international recruitment. We bridge the gap between 
              skilled Pakistani professionals and prestigious employers worldwide.
            </motion.p>
          </div>

          {/* ENHANCED CTA BUTTONS - Mobile Optimized */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center pt-6 lg:pt-12"
          >
            {/* Enhanced Primary Button with 3D effects */}
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotateY: 5,
                rotateX: 5,
                z: 50 
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3.3, type: "spring" }}
              className="perspective-1000"
            >
              <Button 
                onClick={handleEmployerClick}
                size="lg"
                className="relative border-2 border-green-400 text-green-400 hover:text-white hover:bg-green-400 px-6 lg:px-10 py-4 lg:py-5 text-base lg:text-lg font-bold rounded-2xl min-w-[200px] lg:min-w-[240px] bg-transparent backdrop-blur-md overflow-hidden group font-inter-bold transition-all duration-500 transform-gpu"
                style={{
                  boxShadow: "0 0 40px rgba(34, 197, 94, 0.4), 0 15px 35px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Enhanced Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-green-300 to-yellow-300 rounded-full"
                      animate={{
                        y: [0, -40, 0],
                        x: [0, Math.sin(i) * 20, 0],
                        opacity: [0.7, 1, 0.7],
                        scale: [0.5, 1.2, 0.5]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${10 + i * 10}%`,
                        top: "70%"
                      }}
                    />
                  ))}
                </div>
                
                <span className="relative flex items-center justify-center space-x-3 z-10">
                  <motion.span
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotateZ: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                  <span>I Need Workers</span>
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </span>
              </Button>
            </motion.div>
            
            {/* Enhanced Secondary Button with 3D effects */}
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotateY: -5,
                rotateX: 5,
                z: 50 
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3.6, type: "spring" }}
              className="perspective-1000"
            >
              <Button 
                onClick={handleJobSeekerClick}
                size="lg"
                className="relative border-2 border-yellow-400 text-yellow-400 hover:text-black hover:bg-yellow-400 px-6 lg:px-10 py-4 lg:py-5 text-base lg:text-lg font-bold rounded-2xl min-w-[200px] lg:min-w-[240px] bg-transparent backdrop-blur-md overflow-hidden group font-inter-bold transition-all duration-500 transform-gpu"
                style={{
                  boxShadow: "0 0 40px rgba(245, 158, 11, 0.4), 0 15px 35px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Enhanced Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full"
                      animate={{
                        y: [0, -35, 0],
                        x: [0, Math.cos(i) * 15, 0],
                        opacity: [0.7, 1, 0.7],
                        scale: [0.5, 1.1, 0.5]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${15 + i * 12}%`,
                        top: "70%"
                      }}
                    />
                  ))}
                </div>
                
                <span className="relative flex items-center justify-center space-x-3 z-10">
                  <motion.span
                    animate={{ 
                      rotate: [0, 25, -25, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ⭐
                  </motion.span>
                  <span>I Want Job</span>
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;