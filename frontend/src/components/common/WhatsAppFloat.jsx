import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in your manpower services. Can you please provide more information?";
    window.open(`https://wa.me/923323277946?text=${encodeURIComponent(message)}`, "_blank");
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Chat Preview */}
      {showChat && (
        <div className="fixed bottom-24 right-4 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-32px)]">
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">ABZUA Manpower</h3>
                <p className="text-sm opacity-90">Typically replies in 5 minutes</p>
              </div>
              <button onClick={toggleChat} className="text-white hover:bg-green-700 p-1 rounded">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="bg-gray-100 p-3 rounded-lg text-sm">
              <p className="font-medium text-gray-800">👋 Welcome to ABZUA Manpower!</p>
              <p className="text-gray-600 mt-1">
                How can we help you today? We specialize in:
              </p>
              <ul className="text-gray-600 mt-2 text-xs space-y-1">
                <li>• Gulf & European Job Placement</li>
                <li>• Visa Processing & Documentation</li>
                <li>• Training & Certification</li>
                <li>• 24/7 Support Services</li>
              </ul>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleWhatsApp}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm"
              >
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* HYPNOTIZING FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-40 navbar-aware-button">
        <div className="relative">
          {/* Multi-layer Pulse Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-ping opacity-30" style={{ animationDelay: "0.5s" }}></div>
          
          {/* Rotating Glow Ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 rounded-full opacity-60 blur-sm animate-spin" style={{ animationDuration: "8s" }}></div>
          
          {/* Main Button with Gradient */}
          <Button 
            onClick={showChat ? handleWhatsApp : toggleChat}
            className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:via-emerald-400 hover:to-green-500 text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 mobile-button glow-effect"
            size="lg"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.6), 0 10px 25px rgba(0, 0, 0, 0.3)"
            }}
          >
            <WhatsAppIcon className="h-7 w-7 animate-bounce" />
          </Button>
          
          {/* Animated Badge with Pulse */}
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
            1
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-80 animate-bounce"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + i * 15}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: "2s"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;