import React from "react";

const PartnersSection = () => {
  // New partner logos from uploaded assets
  const partners = [
    {
      name: "Saudi Aramco",
      logo: "/images/partners/Saudi Aramco.svg",
      country: "Saudi Arabia"
    },
    {
      name: "Emirates",
      logo: "/images/partners/Emirates_logo.svg", 
      country: "UAE"
    },
    {
      name: "Kuwait Petroleum",
      logo: "/images/partners/Kuwait_Petroleum_Corporation_Logo.svg",
      country: "Kuwait"
    },
    {
      name: "Al-Hokair Group",
      logo: "/images/partners/Al-Hokair-Group-01.svg",
      country: "Saudi Arabia"
    },
    {
      name: "Emaar",
      logo: "/images/partners/Emaar_logo.svg",
      country: "UAE"
    },
    {
      name: "STC",
      logo: "/images/partners/STC-01.svg",
      country: "Saudi Arabia"
    },
    {
      name: "Saudi Binladin Group",
      logo: "/images/partners/Saudi Binladin Group.svg",
      country: "Saudi Arabia"
    },
    {
      name: "Zamil Industrial",
      logo: "/images/partners/Zamil_Industrial_Logo.svg",
      country: "Saudi Arabia"
    },
    {
      name: "Bitdefender",
      logo: "/images/partners/Bitdefender_logo.svg",
      country: "Romania"
    },
    {
      name: "Dino Polska",
      logo: "/images/partners/dino-polska-logo.svg",
      country: "Poland"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              <span>🤝 Our Global Partners</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted by Leading 
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Global Companies
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partnerships span across Gulf and European markets, connecting talent with world-class organizations
            </p>
          </div>
        </div>

        {/* Static Partners Logos with Smooth Infinite Loop */}
        <div className="mb-16">
          <div className="overflow-hidden">
            <div className="flex space-x-12 animate-infinite-scroll">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`set1-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-green-200 w-32 h-32 flex flex-col items-center justify-center">
                    <div className="h-16 w-20 mx-auto mb-2 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium text-gray-700 truncate w-20">{partner.name}</p>
                      <p className="text-xs text-gray-500">{partner.country}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`set2-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-green-200 w-32 h-32 flex flex-col items-center justify-center">
                    <div className="h-16 w-20 mx-auto mb-2 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium text-gray-700 truncate w-20">{partner.name}</p>
                      <p className="text-xs text-gray-500">{partner.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;