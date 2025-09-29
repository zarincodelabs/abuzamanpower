import React from "react";
import { Award, Users, Globe, Shield, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import UniversalBreadcrumb from "../components/common/UniversalBreadcrumb";

const AboutPage = () => {
  const milestones = [
    { year: "2016", title: "Company Founded", description: "ABZUA Manpower established with a vision to connect Pakistani talent globally" },
    { year: "2018", title: "First 100 Placements", description: "Successfully placed our first 100 workers in Gulf countries" },
    { year: "2020", title: "European Expansion", description: "Extended services to European markets including Germany and UK" },
    { year: "2022", title: "1000+ Workers Milestone", description: "Achieved milestone of placing over 1000 skilled workers" },
    { year: "2024", title: "15+ Countries Network", description: "Expanded to 15+ countries with 2500+ successful placements" }
  ];

  const team = [
    {
      name: "Muhammad Zubair Khan",
      position: "CEO", 
      image: "/assets/images/team/muhammad-zubair-khan-ceo.jpg",
      bio: "Visionary leader driving international recruitment excellence and business growth"
    },
    {
      name: "Muhammad Uzair Khan",
      position: "Business Development Manager",
      image: "/assets/images/team/muhammad-uzair-khan-business-dev.jpg", 
      bio: "Strategic business development expert expanding our global partnerships and market presence"
    },
    {
      name: "Abdul Wahab",
      position: "Manager Office Operations",
      image: "/assets/images/team/abdul-wahab-manager-ops.jpg",
      bio: "Operations management specialist ensuring smooth workflow and efficient service delivery"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our dealings"
    },
    {
      icon: Users,
      title: "Excellence", 
      description: "We strive for excellence in service delivery and candidate matching"
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "We think globally while understanding local needs and cultural nuances"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously innovate our processes to better serve our clients"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Universal Breadcrumb Hero Section */}
      <UniversalBreadcrumb 
        title="About ABZUA Manpower"
        subtitle="Your trusted partner in international recruitment, connecting Pakistani talent with global opportunities since 2016"
        backgroundImage="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Journey & Vision
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2016 with a simple yet powerful vision - to bridge the gap between skilled Pakistani professionals and international opportunities. What started as a small recruitment firm has grown into a trusted global network spanning 15+ countries.
                </p>
                <p>
                  Today, ABZUA Manpower stands as a testament to the power of connecting talent with opportunity. We have successfully placed over 2,500 skilled workers across the Gulf, Europe, and other international markets, transforming lives and building careers.
                </p>
                <p>
                  Our commitment goes beyond just job placement. We provide comprehensive support including training, documentation, visa processing, and ongoing career guidance to ensure our candidates not only find jobs but build successful careers abroad.
                </p>
              </div>
              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">8+</div>
                  <div className="text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2500+</div>
                  <div className="text-gray-500">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-500">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="ABZUA Manpower Office"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Growth Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that define our commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Calendar className="h-5 w-5 text-green-600" />
                          <span className="text-2xl font-bold text-green-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="text-center overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-green-600 font-semibold">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your International Career?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join thousands of successful professionals who have transformed their careers through ABZUA Manpower. Let us help you achieve your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open("https://wa.me/923323277946?text=I%20want%20to%20know%20more%20about%20ABZUA%20Manpower%20services.%20Please%20provide%20details.", "_blank")}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => window.open("/contact", "_self")}
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;