import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Lightbox = ({ isOpen, onClose, images, currentIndex, onIndexChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying && images.length > 1) {
      interval = setInterval(() => {
        goToNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          onClose();
          break;
        case ' ':
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPlaying, currentIndex]);

  const goToPrevious = () => {
    setDirection(-1);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onIndexChange(newIndex);
  };

  const goToNext = () => {
    setDirection(1);
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onIndexChange(newIndex);
  };

  const handleSwipe = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) > Math.abs(offset.y);
    
    if (swipe) {
      if (offset.x > 100 || velocity.x > 500) {
        goToPrevious();
      } else if (offset.x < -100 || velocity.x < -500) {
        goToNext();
      }
    }
  };

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="h-6 w-6" />
        </motion.button>

        {/* Controls */}
        <div className="absolute top-6 left-6 z-50 flex items-center space-x-4">
          {/* Play/Pause Button */}
          {images.length > 1 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(!isPlaying);
              }}
              className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </motion.button>
          )}

          {/* Counter */}
          <div className="text-white text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </>
        )}

        {/* Image Container */}
        <div 
          className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleSwipe}
              className="absolute"
            >
              {currentImage.type === "video" ? (
                <video
                  src={currentImage.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-2xl shadow-2xl"
                  style={{ maxWidth: '90vw', maxHeight: '80vh' }}
                />
              ) : (
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                  style={{ maxWidth: '90vw', maxHeight: '80vh' }}
                  draggable={false}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Info */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto text-white"
          >
            <h3 className="text-lg font-bold mb-2">{currentImage.title}</h3>
            <p className="text-sm text-gray-200">{currentImage.description}</p>
            {currentImage.date && (
              <p className="text-xs text-gray-300 mt-2">{currentImage.date}</p>
            )}
          </motion.div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-50 max-w-[90vw] overflow-x-auto">
            <div className="flex space-x-2 px-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: index === currentIndex ? 1.1 : 1,
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onIndexChange(index);
                  }}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex 
                      ? 'border-white shadow-lg' 
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-white/20" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;