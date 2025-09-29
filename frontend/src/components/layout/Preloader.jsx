import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative z-10 text-center space-y-4 px-4">
            {/* Logo - Mobile Optimized (removed glow) */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <img 
                src="/assets/images/logo/logo.png" 
                alt="ABZUA Manpower" 
                className="relative h-12 lg:h-16 w-auto mx-auto filter brightness-110"
              />
            </motion.div>

            {/* Company Name - Mobile Sized */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg lg:text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text font-inter-bold"
              style={{
                textShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
                filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))"
              }}
            >
              ABZUA MANPOWER
            </motion.h1>

            {/* Loading Text - Mobile Optimized */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-green-200 text-sm lg:text-base font-medium font-inter-regular"
            >
              Connecting Talent Worldwide
            </motion.p>

            {/* Progress Bar - Mobile Responsive */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full max-w-xs lg:max-w-sm mx-auto space-y-2"
            >
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full opacity-20"></div>
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-yellow-400 rounded-full relative"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-300 rounded-full animate-pulse"></div>
                </motion.div>
              </div>
              
              {/* Progress Percentage */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-green-300">Loading...</span>
                <span className="text-yellow-300 font-bold">{Math.round(progress)}%</span>
              </div>
            </motion.div>

            {/* Loading Dots */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;