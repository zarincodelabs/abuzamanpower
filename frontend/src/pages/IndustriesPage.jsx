import React from "react";
import { Building, Wrench, Stethoscope, Plane, Code, Factory, Truck, HardHat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import UniversalBreadcrumb from "../components/common/UniversalBreadcrumb";

const IndustriesPage = () => {
  const industries = [
    {
      icon: HardHat,
      title: "Construction & Infrastructure",
      description: "Building the future with skilled construction professionals across major infrastructure projects worldwide.",
      sectors: [
        "Residential & Commercial Construction",
        "Road & Highway Infrastructure", 
        "Bridges & Tunnels",
        "Airport & Port Development",
        "Urban Development Projects"
      ],
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
      demand: "High",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      stats: { workers: "1200+", projects: "150+" }
    },
    {
      icon: Wrench,
      title: "Oil & Gas",
      description: "Powering global energy needs with experienced professionals in exploration, extraction, and refining operations.",
      sectors: [
        "Offshore Drilling Operations",
        "Refinery Operations",
        "Pipeline Construction & Maintenance",
        "Petrochemical Processing",
        "Quality Control & Safety"
      ],
      countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"],
      demand: "Very High",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      stats: { workers: "800+", projects: "85+" }
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Medical",
      description: "Caring for communities worldwide with qualified medical professionals and healthcare support staff.",
      sectors: [
        "Nursing & Patient Care",
        "Medical Technology",
        "Laboratory Services",
        "Pharmacy Operations",
        "Healthcare Administration"
      ],
      countries: ["Germany", "UK", "UAE", "Saudi Arabia"],
      demand: "Very High",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      stats: { workers: "350+", projects: "45+" }
    },
    {
      icon: Building,
      title: "Hospitality & Tourism",
      description: "Creating memorable experiences with service-oriented professionals in the global hospitality industry.",
      sectors: [
        "Hotel Operations & Management",
        "Restaurant & Food Service",
        "Event Management",
        "Travel & Tourism Services",
        "Guest Relations & Concierge"
      ],
      countries: ["UAE", "Qatar", "Oman", "Bahrain"],
      demand: "High",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      stats: { workers: "200+", projects: "65+" }
    },
    {
      icon: Plane,
      title: "Aviation & Airlines",
      description: "Connecting the world through aviation with skilled professionals in airline and airport operations.",
      sectors: [
        "Ground Handling Services",
        "Aircraft Maintenance",
        "Airport Operations",
        "Cargo & Logistics",
        "Customer Service"
      ],
      countries: ["UAE", "Qatar", "Kuwait", "Germany"],
      demand: "Medium",
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-50",
      stats: { workers: "180+", projects: "25+" }
    },
    {
      icon: Code,
      title: "Engineering & Technical",
      description: "Innovating tomorrow with engineering expertise across mechanical, electrical, and civil disciplines.",
      sectors: [
        "Mechanical Engineering",
        "Electrical & Electronics",
        "Civil Engineering",
        "Software Development",
        "Quality Assurance"
      ],
      countries: ["Germany", "UK", "UAE", "Poland"],
      demand: "High",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      stats: { workers: "320+", projects: "75+" }
    },
    {
      icon: Factory,
      title: "IT & Technology",
      description: "Driving digital transformation with technology professionals specializing in modern IT solutions.",
      sectors: [
        "Software Development",
        "Network Administration",
        "Cybersecurity",
        "Database Management",
        "Technical Support"
      ],
      countries: ["Germany", "UK", "Romania", "Poland"],
      demand: "Very High",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      stats: { workers: "150+", projects: "40+" }
    },
    {
      icon: Truck,
      title: "Manufacturing",
      description: "Producing excellence with skilled manufacturing professionals in automotive, textiles, and industrial sectors.",
      sectors: [
        "Automotive Manufacturing",
        "Textile Production",
        "Food Processing",
        "Electronics Assembly",
        "Quality Control"
      ],
      countries: ["Germany", "Poland", "Romania", "UK"],
      demand: "High",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      stats: { workers: "280+", projects: "50+" }
    }
  ];

  const demandColors = {
    "Low": "text-gray-600 bg-gray-100",
    "Medium": "text-blue-600 bg-blue-100", 
    "High": "text-green-600 bg-green-100",
    "Very High": "text-red-600 bg-red-100"
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Universal Breadcrumb Hero Section */}
      <UniversalBreadcrumb 
        title="Industries We Serve"
        subtitle="Specialized recruitment solutions across diverse industries, connecting Pakistani talent with global opportunities in high-demand sectors"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Diverse Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              With 8+ years of experience, we have developed deep expertise across multiple industries, 
              understanding the unique requirements and challenges of each sector to provide tailored recruitment solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
              <div className="text-gray-600">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2500+</div>
              <div className="text-gray-600">Workers Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={industry.title} className={`${industry.bgColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center shadow-lg`}>
                        <industry.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{industry.title}</CardTitle>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${demandColors[industry.demand]}`}>
                      {industry.demand} Demand
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-gray-900">{industry.stats.workers}</div>
                      <div className="text-sm text-gray-600">Workers Placed</div>
                    </div>
                    <div className="bg-white/60 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-gray-900">{industry.stats.projects}</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Sectors:</h4>
                    <ul className="space-y-2">
                      {industry.sectors.slice(0, 3).map((sector, sectorIndex) => (
                        <li key={sectorIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                          <span className="text-sm text-gray-700">{sector}</span>
                        </li>
                      ))}
                      {industry.sectors.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          +{industry.sectors.length - 3} more sectors
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Active Markets:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.countries.map((country, countryIndex) => (
                        <span key={countryIndex} className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${industry.color} text-white font-medium`}>
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => window.open("https://wa.me/923323277946?text=I%20want%20to%20know%20more%20about%20opportunities%20in%20" + industry.title.replace(/ /g, '%20') + "%20industry.%20Please%20provide%20details.", "_blank")}
                    className={`w-full bg-gradient-to-r ${industry.color} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                  >
                    Explore Opportunities
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Demand Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Current Market Trends
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed about industry demands and emerging opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
              <div className="text-3xl font-bold text-red-600 mb-2">2</div>
              <div className="text-sm font-medium text-gray-700">Very High Demand</div>
              <div className="text-xs text-gray-500 mt-1">Industries</div>
            </Card>
            
            <Card className="text-center p-6 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-sm font-medium text-gray-700">High Demand</div>
              <div className="text-xs text-gray-500 mt-1">Industries</div>
            </Card>
            
            <Card className="text-center p-6 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-sm font-medium text-gray-700">Medium Demand</div>
              <div className="text-xs text-gray-500 mt-1">Industries</div>
            </Card>
            
            <Card className="text-center p-6 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm font-medium text-gray-700">Active Countries</div>
              <div className="text-xs text-gray-500 mt-1">Worldwide</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Find Your Industry Match?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Whether you're a skilled professional looking for international opportunities or an employer seeking qualified candidates, 
              we have the industry expertise to make the perfect match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("https://wa.me/923340004481?text=I%20want%20to%20explore%20international%20opportunities%20in%20my%20industry.%20Please%20guide%20me%20about%20available%20positions.", "_blank")}
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              >
                Find My Industry
              </Button>
              <Button 
                onClick={() => window.open("/contact", "_self")}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
              >
                Contact Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;