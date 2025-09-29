import React from "react";
import { Home, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const UniversalBreadcrumb = ({ title, subtitle, customBreadcrumbs = null }) => {
  const location = useLocation();

  // Default breadcrumb generation based on path
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs = [{ name: 'Home', href: '/', current: false }];
    
    let currentPath = '';
    pathnames.forEach((pathname, index) => {
      currentPath += `/${pathname}`;
      const isLast = index === pathnames.length - 1;
      
      // Convert pathname to readable name
      let readableName = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      if (pathname === 'about') readableName = 'About Us';
      if (pathname === 'services') readableName = 'Services';
      if (pathname === 'industries') readableName = 'Industries';
      if (pathname === 'gallery') readableName = 'Gallery';
      if (pathname === 'testimonials') readableName = 'Testimonials';
      if (pathname === 'contact') readableName = 'Contact';
      
      breadcrumbs.push({
        name: readableName,
        href: currentPath,
        current: isLast
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = customBreadcrumbs || generateBreadcrumbs();

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Enhanced Background with Better Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image - Construction/Workforce Theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        
        {/* Strong Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/90 to-black/85"></div>
        
        {/* Additional Green Tinted Overlay for Brand Colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-emerald-800/30 to-green-900/40"></div>
        
        {/* Subtle Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Construction Elements */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-12 h-12 opacity-15"
          >
            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg transform rotate-45"></div>
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-8 right-16 w-8 h-8 opacity-12"
          >
            <div className="w-full h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-8 left-20 w-10 h-10 opacity-10"
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg transform rotate-12"></div>
          </motion.div>
          
          {/* Small Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-green-300 to-yellow-300 rounded-full"
              animate={{
                y: [0, -60, 0],
                x: [0, Math.sin(i * 0.5) * 30, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
              style={{
                left: `${15 + i * 12}%`,
                top: `${60 + (i % 3) * 8}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center min-h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 w-full flex flex-col items-center justify-center"
        >
          
          {/* Enhanced Breadcrumb Navigation with Better Contrast */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center mb-6 w-full"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center justify-center space-x-2 bg-black/60 backdrop-blur-md rounded-full px-6 py-3 border border-green-400/30 shadow-2xl mx-auto">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.name} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-green-300/80 mx-2" />
                  )}
                  
                  {breadcrumb.current ? (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="text-sm font-bold"
                      style={{
                        color: "#ffffff",
                        textShadow: "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(245, 158, 11, 0.4)",
                        filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.8))"
                      }}
                    >
                      <motion.span
                        animate={{
                          textShadow: [
                            "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6)",
                            "0 0 15px rgba(34, 197, 94, 1), 0 0 30px rgba(34, 197, 94, 0.8)",
                            "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {breadcrumb.name}
                      </motion.span>
                    </motion.span>
                  ) : (
                    <Link 
                      to={breadcrumb.href}
                      className="text-sm font-medium transition-all duration-300 group"
                      style={{
                        color: "#d1fae5",
                        textShadow: "0 0 8px rgba(34, 197, 94, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)"
                      }}
                    >
                      {index === 0 ? (
                        <div className="flex items-center space-x-1">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Home className="h-4 w-4 group-hover:text-green-300 transition-colors" style={{
                              filter: "drop-shadow(0 0 5px rgba(34, 197, 94, 0.6))"
                            }} />
                          </motion.div>
                          <motion.span 
                            className="group-hover:text-green-300"
                            whileHover={{
                              textShadow: "0 0 12px rgba(34, 197, 94, 0.8), 0 0 24px rgba(34, 197, 94, 0.6)"
                            }}
                          >
                            Home
                          </motion.span>
                        </div>
                      ) : (
                        <motion.span 
                          className="group-hover:text-green-300"
                          whileHover={{
                            textShadow: "0 0 12px rgba(34, 197, 94, 0.8), 0 0 24px rgba(34, 197, 94, 0.6)"
                          }}
                        >
                          {breadcrumb.name}
                        </motion.span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          {/* Enhanced Animated Page Title with Neon Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-center flex flex-col items-center justify-center w-full"
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{
                textShadow: "0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.4), 0 0 80px rgba(245, 158, 11, 0.3)",
                filter: "drop-shadow(0 0 25px rgba(34, 197, 94, 0.9))"
              }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6), 0 0 60px rgba(245, 158, 11, 0.4)",
                  "0 0 30px rgba(34, 197, 94, 1), 0 0 60px rgba(34, 197, 94, 0.8), 0 0 90px rgba(245, 158, 11, 0.6)",
                  "0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6), 0 0 60px rgba(245, 158, 11, 0.4)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{
                  background: "linear-gradient(45deg, #ffffff, #10b981, #f59e0b, #ffffff)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  backgroundPosition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                {title}
              </motion.span>
            </motion.h1>
            
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed px-4"
                style={{ 
                  color: "#d1fae5",
                  textShadow: "0 0 15px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4), 0 2px 8px rgba(0, 0, 0, 0.8)",
                  filter: "drop-shadow(0 0 10px rgba(34, 197, 94, 0.7))"
                }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 15px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)",
                      "0 0 25px rgba(34, 197, 94, 0.8), 0 0 50px rgba(34, 197, 94, 0.6)",
                      "0 0 15px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {subtitle}
                </motion.span>
              </motion.p>
            )}
          </motion.div>

          {/* Enhanced Decorative Elements with Neon Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center items-center space-x-4 pt-6 w-full"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  background: i % 2 === 0 
                    ? "radial-gradient(circle, #10b981, #059669)" 
                    : "radial-gradient(circle, #f59e0b, #d97706)",
                  boxShadow: i % 2 === 0 
                    ? "0 0 15px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.4)" 
                    : "0 0 15px rgba(245, 158, 11, 0.8), 0 0 30px rgba(245, 158, 11, 0.4)"
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: i % 2 === 0 
                    ? [
                        "0 0 15px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.4)",
                        "0 0 25px rgba(34, 197, 94, 1), 0 0 50px rgba(34, 197, 94, 0.6)",
                        "0 0 15px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.4)"
                      ]
                    : [
                        "0 0 15px rgba(245, 158, 11, 0.8), 0 0 30px rgba(245, 158, 11, 0.4)",
                        "0 0 25px rgba(245, 158, 11, 1), 0 0 50px rgba(245, 158, 11, 0.6)",
                        "0 0 15px rgba(245, 158, 11, 0.8), 0 0 30px rgba(245, 158, 11, 0.4)"
                      ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversalBreadcrumb;