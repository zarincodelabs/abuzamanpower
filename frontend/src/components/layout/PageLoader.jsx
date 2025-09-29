import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="text-center space-y-4">
        {/* Spinning Logo */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </motion.div>
  );
};

export default PageLoader;