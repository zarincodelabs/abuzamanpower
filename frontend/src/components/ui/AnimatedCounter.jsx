import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "",
  className = "",
  startDelay = 0
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      const timer = setTimeout(() => {
        let current = 0;
        const increment = end / (duration / 50); // 50ms intervals
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(counter);
          }
          setCount(Math.floor(current));
        }, 50);
        
        return () => clearInterval(counter);
      }, startDelay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, end, duration, hasAnimated, startDelay]);

  return (
    <motion.span 
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: startDelay / 1000 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;