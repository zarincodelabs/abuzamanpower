import React from "react";
import { Hammer, Zap, Heart, Utensils, Plane, Wrench, Monitor, Cog } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Hammer,
      title: "Construction & Infrastructure",
      description: "Engineers, supervisors, skilled workers for major projects",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Zap,
      title: "Oil & Gas",
      description: "Technical roles in exploration, drilling, and refining",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-700"
    },
    {
      icon: Heart,
      title: "Healthcare & Medical",
      description: "Doctors, nurses, technicians for hospitals worldwide",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Utensils,
      title: "Hospitality & Tourism",
      description: "Hotel staff, chefs, service professionals",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Plane,
      title: "Aviation & Airlines",
      description: "Ground crew, maintenance, cabin crew positions",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Wrench,
      title: "Engineering & Technical",
      description: "Mechanical, electrical, civil engineering roles",
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Monitor,
      title: "IT & Technology",
      description: "Software developers, system administrators, IT support",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: Cog,
      title: "Manufacturing",
      description: "Production workers, quality control, supervisory roles",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    }
  ];

  const handleIndustryClick = (industry) => {
    const message = `I'm interested in opportunities in ${industry}. Please provide information about available positions and requirements.`;
    window.open(`https://wa.me/923323277946?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Industries We Serve</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialized Recruitment
            <span className="block text-blue-600">Across Multiple Sectors</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our deep industry knowledge and extensive network enable us to match 
            the right talent with the right opportunities across diverse sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border-0 shadow-md overflow-hidden"
                onClick={() => handleIndustryClick(industry.title)}
              >
                <CardContent className="p-0">
                  {/* Icon Header */}
                  <div className={`${industry.bgColor} p-6 text-center`}>
                    <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${industry.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {industry.title}
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-white">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="mt-4 flex items-center justify-center">
                      <div className={`w-12 h-1 bg-gradient-to-r ${industry.color} rounded-full group-hover:w-20 transition-all duration-300`}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default IndustriesSection;