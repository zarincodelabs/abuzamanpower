import React from "react";
import { MapPin, GraduationCap, FileText, HeadphonesIcon, Users, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import UniversalBreadcrumb from "../components/common/UniversalBreadcrumb";

const ServicesPage = () => {
  const services = [
    {
      icon: MapPin,
      title: "Gulf Recruitment Services",
      description: "Comprehensive recruitment solutions for Gulf countries including UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain.",
      features: [
        "Construction & Infrastructure Projects",
        "Oil & Gas Industry Positions", 
        "Healthcare & Medical Staff",
        "Hospitality & Tourism Jobs",
        "Engineering & Technical Roles"
      ],
      process: [
        "Initial consultation and requirement analysis",
        "Candidate sourcing and screening",
        "Skills assessment and interviews",
        "Medical examinations and clearances",
        "Visa processing and documentation"
      ],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      icon: GraduationCap,
      title: "European Placement Program",
      description: "Specialized placement services for European markets with focus on skilled professionals and technical expertise.",
      features: [
        "Engineering & Manufacturing",
        "Information Technology",
        "Healthcare Professionals",
        "Skilled Trades & Crafts",
        "Research & Development"
      ],
      process: [
        "Qualification verification and assessment",
        "Language proficiency evaluation", 
        "Cultural orientation programs",
        "Interview preparation and coaching",
        "Work permit and visa assistance"
      ],
      color: "from-green-600 to-yellow-500",
      bgColor: "bg-green-50"
    },
    {
      icon: FileText,
      title: "Training & Certification",
      description: "Comprehensive training programs to enhance skills and increase employability for international markets.",
      features: [
        "Technical Skills Development",
        "Language Training Programs",
        "Safety Certifications",
        "Industry-Specific Training",
        "Professional Development"
      ],
      process: [
        "Skills gap analysis",
        "Customized training program design",
        "Hands-on practical training",
        "Assessment and certification",
        "Job placement assistance"
      ],
      color: "from-yellow-500 to-green-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: HeadphonesIcon,
      title: "Complete Documentation Support",
      description: "End-to-end documentation and visa processing services ensuring legal compliance and smooth processing.",
      features: [
        "Visa Application Processing",
        "Document Verification & Attestation",
        "Medical Examination Coordination",
        "Embassy Appointment Scheduling",
        "Travel Arrangements"
      ],
      process: [
        "Document collection and review",
        "Authentication and attestation",
        "Visa application submission",
        "Follow-up and status tracking",
        "Pre-departure briefing"
      ],
      color: "from-emerald-500 to-green-600", 
      bgColor: "bg-emerald-50"
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Pre-departure Briefing",
      description: "Comprehensive orientation about destination country, work culture, and legal requirements."
    },
    {
      icon: Award,
      title: "Post-arrival Support",
      description: "Ongoing assistance with accommodation, banking, and workplace integration."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Regular follow-ups to ensure satisfaction and address any concerns promptly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Universal Breadcrumb Hero Section */}
      <UniversalBreadcrumb 
        title="Our Services"
        subtitle="Comprehensive recruitment and placement solutions designed to connect Pakistani talent with international opportunities"
      />

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Recruitment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to successful placement, we provide end-to-end services to ensure your international career success
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={service.title} className={`overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${service.bgColor}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <CardContent className="p-8 lg:p-12 space-y-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900">Key Features:</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      onClick={() => window.open("https://wa.me/923323277946?text=I%20want%20to%20know%20more%20about%20" + service.title.replace(/ /g, '%20') + ".%20Please%20provide%20details.", "_blank")}
                      className={`w-full lg:w-auto bg-gradient-to-r ${service.color} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                      size="lg"
                    >
                      Learn More About This Service
                    </Button>
                  </CardContent>

                  {/* Process Side */}
                  <div className="bg-white/50 p-8 lg:p-12 space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Our Process:</h4>
                    <div className="space-y-4">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-4">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                            {stepIndex + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Support Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support throughout your international journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={service.title} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-green-100">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2500+</div>
              <div className="text-green-200">Workers Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-green-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-green-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <div className="text-green-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Begin Your International Career?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today to discuss your requirements and let us help you find the perfect international opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("https://wa.me/923340004481?text=I%20want%20to%20discuss%20my%20international%20career%20opportunities.%20Please%20guide%20me%20about%20your%20services.", "_blank")}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Journey
              </Button>
              <Button 
                onClick={() => window.open("/contact", "_self")}
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;