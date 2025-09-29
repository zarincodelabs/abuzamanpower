import React from "react";
import { Clock, Shield, Users, Globe, Award, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const WhyChooseSection = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround times with efficient visa processing and documentation. Most placements completed within 45-60 days.",
      shortDescription: "Quick processing - Placements in 45-60 days",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "100% legal and transparent processes. Fully licensed recruitment agency with government approvals and certifications.",
      shortDescription: "100% legal processes - Licensed & certified agency", 
      color: "from-green-500 to-emerald-600", 
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Users,
      title: "Verified Workers",
      description: "Rigorous screening and verification process. All candidates undergo skill tests, background checks, and interviews.",
      shortDescription: "Rigorous screening - Skills tests & background checks",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50", 
      iconColor: "text-purple-600"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support", 
      description: "Round-the-clock assistance before, during, and after placement. Dedicated support team for immediate help.",
      shortDescription: "24/7 assistance - Dedicated support team",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive network of partner employers across 15+ countries. Direct connections with top companies worldwide.",
      shortDescription: "15+ countries - Direct employer connections",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      icon: Award,
      title: "Success Guarantee",
      description: "95% success rate with money-back guarantee. We're committed to your success and stand behind our promises.",
      shortDescription: "95% success rate - Money-back guarantee", 
      color: "from-yellow-500 to-orange-600", 
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="h-4 w-4" />
            <span>Why Choose ABZUA</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us
            <span className="block text-green-600">Different</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence, transparency, and personalized service 
            sets us apart in the competitive recruitment industry.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-6 lg:p-8 text-center">
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 ${advantage.bgColor} rounded-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 lg:h-8 lg:w-8 ${advantage.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 font-spacemono">
                    {advantage.title}
                  </h3>

                  {/* Responsive Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 font-spacemono">
                    <span className="hidden md:inline text-sm lg:text-base">{advantage.description}</span>
                    <span className="md:hidden text-sm">{advantage.shortDescription}</span>
                  </p>

                  {/* Accent Line */}
                  <div className={`w-8 h-1 lg:w-12 lg:h-1 bg-gradient-to-r ${advantage.color} rounded-full mx-auto group-hover:w-16 lg:group-hover:w-20 transition-all duration-300`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;