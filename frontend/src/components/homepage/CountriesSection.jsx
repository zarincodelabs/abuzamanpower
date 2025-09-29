import React, { useState } from "react";
import { MapPin, Users, Briefcase } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const CountriesSection = () => {
  const [activeCategory, setActiveCategory] = useState("gulf");

  const countryCategories = {
    gulf: {
      title: "Gulf Countries",
      countries: [
        {
          name: "United Arab Emirates",
          flag: "🇦🇪",
          opportunities: "2500+",
          sectors: ["Construction", "Healthcare", "Hospitality", "Oil & Gas"],
          popular: true,
          flagEmoji: "🇦🇪"
        },
        {
          name: "Saudi Arabia", 
          flag: "🇸🇦",
          opportunities: "1800+",
          sectors: ["Construction", "Oil & Gas", "Healthcare", "Engineering"],
          popular: true,
          flagEmoji: "🇸🇦"
        },
        {
          name: "Qatar",
          flag: "🇶🇦", 
          opportunities: "900+",
          sectors: ["Construction", "Aviation", "Hospitality", "Healthcare"],
          popular: false,
          flagEmoji: "🇶🇦"
        },
        {
          name: "Kuwait",
          flag: "🇰🇼",
          opportunities: "600+",
          sectors: ["Oil & Gas", "Construction", "Healthcare", "Engineering"],
          popular: false,
          flagEmoji: "🇰🇼"
        },
        {
          name: "Oman",
          flag: "🇴🇲",
          opportunities: "400+",
          sectors: ["Construction", "Oil & Gas", "Tourism", "Healthcare"],
          popular: false,
          flagEmoji: "🇴🇲"
        },
        {
          name: "Bahrain",
          flag: "🇧🇭",
          opportunities: "300+",
          sectors: ["Banking", "Construction", "Healthcare", "IT"],
          popular: false,
          flagEmoji: "🇧🇭"
        }
      ]
    },
    europe: {
      title: "European Countries",
      countries: [
        {
          name: "Germany",
          flag: "🇩🇪",
          opportunities: "800+",
          sectors: ["Engineering", "IT", "Healthcare", "Manufacturing"],
          popular: true,
          flagEmoji: "🇩🇪"
        },
        {
          name: "United Kingdom",
          flag: "🇬🇧",
          opportunities: "600+", 
          sectors: ["Healthcare", "IT", "Engineering", "Hospitality"],
          popular: false,
          flagEmoji: "🇬🇧"
        },
        {
          name: "Poland",
          flag: "🇵🇱",
          opportunities: "500+",
          sectors: ["Manufacturing", "Construction", "IT", "Agriculture"],
          popular: false,
          flagEmoji: "🇵🇱"
        },
        {
          name: "Romania",
          flag: "🇷🇴",
          opportunities: "400+",
          sectors: ["Construction", "Manufacturing", "Agriculture", "IT"],
          popular: false,
          flagEmoji: "🇷🇴"
        }
      ]
    }
  };

  const handleCountryClick = (country) => {
    const message = `I'm interested in job opportunities in ${country}. Please provide information about available positions and visa requirements.`;
    window.open(`https://wa.me/923323277946?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-40 h-40 border-4 border-blue-300 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-32 h-32 border-4 border-green-300 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              <MapPin className="h-4 w-4" />
              <span>Global Destinations</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Countries We
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Connect You With
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore opportunities across our network of partner countries, 
              each offering unique career prospects and growth potential.
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100"
          >
            {Object.entries(countryCategories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? "text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Countries Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {countryCategories[activeCategory].countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card 
                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={() => handleCountryClick(country.name)}
              >
                <CardContent className="p-0">
                  {/* Country Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 relative overflow-hidden">
                    {country.popular && (
                      <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        ⭐ Popular
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div 
                        className="text-5xl"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {country.flagEmoji}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-xl mb-1">{country.name}</h3>
                        <div className="flex items-center space-x-2 text-blue-100">
                          <Users className="h-4 w-4" />
                          <span className="text-sm font-medium">{country.opportunities} Opportunities</span>
                        </div>
                      </div>
                    </div>

                    {/* Animated Background Pattern */}
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-500"></div>
                  </div>

                  {/* Country Details */}
                  <div className="p-6 bg-white">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                        Popular Sectors
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {country.sectors.map((sector, idx) => (
                          <motion.span 
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-xs bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-2 rounded-full font-medium border border-blue-100 hover:border-blue-300 transition-colors"
                          >
                            {sector}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300 flex items-center">
                        <span>Click to explore opportunities</span>
                        <motion.span 
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CountriesSection;