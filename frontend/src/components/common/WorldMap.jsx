import React from "react";
import { motion } from "framer-motion";

const WorldMap = () => {
  const countries = [
    { name: "UAE", flag: "🇦🇪", lat: 23.4241, lng: 53.8478, placements: "800+" },
    { name: "Saudi Arabia", flag: "🇸🇦", lat: 23.8859, lng: 45.0792, placements: "600+" },
    { name: "Qatar", flag: "🇶🇦", lat: 25.3548, lng: 51.1839, placements: "400+" },
    { name: "Kuwait", flag: "🇰🇼", lat: 29.3117, lng: 47.4818, placements: "300+" },
    { name: "Oman", flag: "🇴🇲", lat: 21.4735, lng: 55.9754, placements: "200+" },
    { name: "Bahrain", flag: "🇧🇭", lat: 25.9304, lng: 50.6378, placements: "150+" },
    { name: "Germany", flag: "🇩🇪", lat: 51.1657, lng: 10.4515, placements: "250+" },
    { name: "UK", flag: "🇬🇧", lat: 55.3781, lng: -3.4360, placements: "180+" },
    { name: "Poland", flag: "🇵🇱", lat: 51.9194, lng: 19.1451, placements: "120+" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{
              textShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
              background: "linear-gradient(135deg, #1f2937 0%, #3b82f6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Global Presence & Network
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Connecting talent across continents
          </motion.p>
        </div>

        {/* World Map Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 overflow-hidden">
          
          {/* Enhanced Google Maps Embed with ABZUA Locations */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26575.20672056555!2d73.074375!3d33.633813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951e0a33f0cb%3A0xf9a0e3e1203a453f!2sAbzua%20Manpower!5e0!3m2!1sen!2s!4v1755812761611!5m2!1sen!2s"
              width="100%" 
              height="500" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-0 contrast-110 brightness-105"
            />
            
            {/* Overlay with ABZUA Branding */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/images/logo/logo.png" 
                  alt="ABZUA Manpower" 
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="font-bold text-gray-900">ABZUA Manpower</h3>
                  <p className="text-sm text-gray-600">Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Global Stats Overlay */}
            <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-green-100">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Country Markers */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {country.flag}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{country.name}</h3>
                <p className="text-xs text-blue-600 font-medium">{country.placements}</p>
                <div className="w-full h-1 bg-blue-100 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { value: "15+", label: "Countries", icon: "🌍", color: "blue" },
            { value: "500+", label: "Partner Companies", icon: "🏢", color: "green" },
            { value: "50+", label: "Cities", icon: "🏙️", color: "purple" },
            { value: "24/7", label: "Global Support", icon: "🕐", color: "orange" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold mb-2 text-${stat.color}-600`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
              <div className={`w-12 h-1 bg-${stat.color}-500 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorldMap;