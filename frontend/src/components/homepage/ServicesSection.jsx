import React from "react";
import { ArrowRight, MapPin, GraduationCap, FileText, HeadphonesIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Gulf Recruitment",
      description: "Specialized placement services for Gulf countries across construction, oil & gas, and healthcare sectors.",
      shortDescription: "Gulf countries placement - Construction, Oil & Gas, Healthcare",
      features: ["Construction Workers", "Oil & Gas Professionals", "Healthcare Staff", "Engineering Roles"],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: GraduationCap,
      title: "European Placement",
      description: "Connect with European employers in Germany, UK, Poland for engineering, IT, and skilled trades.",
      shortDescription: "European placement - Engineering, IT, Skilled Trades",
      features: ["Engineering Jobs", "IT Positions", "Skilled Trades", "Professional Services"],
      color: "from-green-600 to-yellow-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: FileText,
      title: "Training & Certification",
      description: "Skills development programs and internationally recognized certifications to enhance employability.",
      shortDescription: "Skills training & International certifications",
      features: ["Skill Development", "Language Training", "Technical Certifications", "Safety Courses"],
      color: "from-yellow-500 to-green-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: HeadphonesIcon,
      title: "Visa & Documentation",
      description: "Complete visa support and documentation assistance ensuring smooth processing for destinations.",
      shortDescription: "Complete visa support & Documentation assistance",
      features: ["Visa Processing", "Document Verification", "Legal Compliance", "Embassy Support"],
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    }
  ];

  const handleServiceClick = (service) => {
    const message = `I'm interested in your ${service} services. Please provide more details about the process and requirements.`;
    window.open(`https://wa.me/923323277946?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-green-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Our Core Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Recruitment
            <span className="block text-green-600">Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to successful placement, we provide end-to-end 
            recruitment services tailored to your specific needs and career goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className={`${service.bgColor} pb-4 lg:pb-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <Icon className={`h-5 w-5 lg:h-6 lg:w-6 ${service.iconColor}`} />
                      </div>
                      <CardTitle className="text-lg lg:text-xl font-bold text-gray-900 font-spacemono">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 lg:p-6 bg-white">
                  {/* Responsive Description */}
                  <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed font-spacemono">
                    <span className="hidden md:inline">{service.description}</span>
                    <span className="md:hidden text-sm">{service.shortDescription}</span>
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4 lg:mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 text-sm lg:text-base font-spacemono">Key Specializations:</h4>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs lg:text-sm text-gray-600 font-spacemono">
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    onClick={() => handleServiceClick(service.title)}
                    className={`w-full bg-gradient-to-r ${service.color} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl font-spacemono text-sm lg:text-base py-2 lg:py-3`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your International Career?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get personalized consultation and find the perfect opportunity for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleServiceClick("consultation")}
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
            >
              Free Consultation
            </Button>
            <Button 
              onClick={() => window.open("/services", "_self")}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
            >
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;