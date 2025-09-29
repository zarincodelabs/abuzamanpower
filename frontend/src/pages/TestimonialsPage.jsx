import React, { useState } from "react";
import { Star, MapPin, Calendar, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import UniversalBreadcrumb from "../components/common/UniversalBreadcrumb";

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState("jobSeekers");
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = {
    jobSeekers: [
      {
        id: 1,
        name: "Ahmed Hassan",
        role: "Construction Supervisor",
        company: "Al-Rashid Construction LLC",
        country: "UAE", 
        flag: "🇦🇪",
        image: "/assets/images/testimonials/ahmed-hassan.jpg",
        beforeSalary: "25,000 PKR",
        afterSalary: "150,000 PKR",
        rating: 5,
        quote: "ABZUA Manpower completely transformed my career. From a local construction worker earning 25K to a supervisor in Dubai earning 150K - the journey has been incredible. Their support throughout the visa process and job placement was exceptional.",
        experience: "2 years with company",
        skills: ["Construction Management", "Safety Protocols", "Team Leadership"]
      },
      {
        id: 2,
        name: "Dr. Sarah Khan", 
        role: "Medical Professional",
        company: "Europa Medical Center",
        country: "Germany",
        flag: "🇩🇪",
        image: "/assets/images/testimonials/dr-sarah-khan.jpg",
        beforeSalary: "80,000 PKR",
        afterSalary: "400,000 PKR",
        rating: 5,
        quote: "Working in Germany as a medical professional was my dream. ABZUA made it reality with their comprehensive support - from qualification verification to language training. The salary increase speaks for itself!",
        experience: "1.5 years with company",
        skills: ["Patient Care", "Medical Technology", "German Language"]
      },
      {
        id: 3,
        name: "Muhammad Ali",
        role: "Electrical Engineer", 
        company: "Gulf Power Solutions",
        country: "Qatar",
        flag: "🇶🇦",
        image: "/assets/images/testimonials/muhammad-ali.jpg",
        beforeSalary: "45,000 PKR",
        afterSalary: "180,000 PKR",
        rating: 5,
        quote: "The technical training program helped me upskill before my Qatar placement. Now I'm working on major infrastructure projects with a 4x salary increase. ABZUA's commitment to candidate success is unmatched.",
        experience: "3 years with company",
        skills: ["Power Systems", "Project Management", "Quality Control"]
      },
      {
        id: 4,
        name: "Fatima Sheikh",
        role: "Software Developer",
        company: "TechBerlin GmbH", 
        country: "Germany",
        flag: "🇩🇪",
        image: "/assets/images/testimonials/fatima-sheikh.jpg",
        beforeSalary: "60,000 PKR",
        afterSalary: "320,000 PKR",
        rating: 5,
        quote: "Moving from Pakistan to Germany for a tech job seemed impossible until I found ABZUA. They handled everything - visa processing, job matching, even helped with accommodation. Living my dream now!",
        experience: "2.5 years with company",
        skills: ["Full Stack Development", "React", "Node.js"]
      },
      {
        id: 5,
        name: "Hassan Malik",
        role: "Hospitality Manager",
        company: "Luxury Hotel Group",
        country: "UAE",
        flag: "🇦🇪",
        image: "/assets/images/testimonials/hassan-malik.jpg",
        beforeSalary: "35,000 PKR", 
        afterSalary: "140,000 PKR",
        rating: 5,
        quote: "From managing a small hotel in Lahore to overseeing luxury operations in Dubai - ABZUA made this transition seamless. Their industry connections and professional guidance were invaluable.",
        experience: "4 years with company",
        skills: ["Operations Management", "Customer Service", "Team Building"]
      },
      {
        id: 6,
        name: "Zainab Riaz",
        role: "Registered Nurse",
        company: "Royal Medical Complex",
        country: "Saudi Arabia", 
        flag: "🇸🇦",
        image: "/assets/images/testimonials/zainab-riaz.jpg",
        beforeSalary: "40,000 PKR",
        afterSalary: "160,000 PKR",
        rating: 5,
        quote: "As a female professional, I was concerned about working abroad. ABZUA provided complete support and ensured my safety and comfort. The career growth has been phenomenal!",
        experience: "2 years with company",
        skills: ["Critical Care", "Patient Management", "Arabic Language"]
      }
    ],
    employers: [
      {
        id: 1,
        company: "Al-Rashid Construction LLC",
        industry: "Construction",
        country: "UAE",
        flag: "🇦🇪",
        contactPerson: "Omar Al-Rashid",
        position: "HR Director",
        image: "/assets/images/testimonials/omar-al-rashid.jpg",
        workersHired: "120+",
        rating: 5,
        quote: "ABZUA consistently delivers high-quality candidates. Their Pakistani workers are skilled, dedicated, and integrate well with our teams. We've been partnering with them for 4 years now.",
        partnership: "4 years",
        projects: ["Dubai Marina Tower", "Business Bay Complex", "Al Maktoum Airport"]
      },
      {
        id: 2,
        company: "Europa Engineering GmbH",
        industry: "Engineering",
        country: "Germany", 
        flag: "🇩🇪",
        contactPerson: "Klaus Weber",
        position: "Technical Director",
        image: "/assets/images/testimonials/klaus-weber.jpg",
        workersHired: "45+",
        rating: 5,
        quote: "The engineering professionals from ABZUA have exceptional technical skills and strong work ethics. They adapt quickly to German work culture and contribute significantly to our projects.",
        partnership: "3 years",
        projects: ["Munich Metro Extension", "Hamburg Port Automation", "Berlin Smart Grid"]
      },
      {
        id: 3,
        company: "Gulf Medical Centers",
        industry: "Healthcare",
        country: "Qatar",
        flag: "🇶🇦",
        contactPerson: "Dr. Amira Hassan",
        position: "Chief Medical Officer",
        image: "/assets/images/testimonials/dr-amira-hassan.jpg",
        workersHired: "80+",
        rating: 5,
        quote: "Our healthcare standards are extremely high, and ABZUA understands this. They provide thoroughly vetted medical professionals who meet our quality requirements consistently.",
        partnership: "5 years",
        projects: ["Doha Medical Complex", "Qatar Sports Medicine Center", "Pediatric Specialty Unit"]
      }
    ]
  };

  const currentTestimonials = testimonials[activeCategory];
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(currentTestimonials.length / testimonialsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideTestimonials = () => {
    const startIndex = currentSlide * testimonialsPerSlide;
    return currentTestimonials.slice(startIndex, startIndex + testimonialsPerSlide);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Universal Breadcrumb Hero Section */}
      <UniversalBreadcrumb 
        title="Success Stories & Testimonials"
        subtitle="Real testimonials from professionals who transformed their careers and employers who found their perfect candidates through ABZUA Manpower"
        backgroundImage="https://images.pexels.com/photos/9260295/pexels-photo-9260295.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />

      {/* Category Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-2xl p-2">
              <button
                onClick={() => {
                  setActiveCategory("jobSeekers");
                  setCurrentSlide(0);
                }}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === "jobSeekers"
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                Job Seekers ({testimonials.jobSeekers.length})
              </button>
              <button
                onClick={() => {
                  setActiveCategory("employers");
                  setCurrentSlide(0);
                }}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === "employers"
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                Employers ({testimonials.employers.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Slider Controls */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeCategory === "jobSeekers" ? "Career Transformation Stories" : "Employer Testimonials"}
            </h2>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {currentSlide + 1} of {totalSlides}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 disabled:opacity-50"
                  disabled={totalSlides <= 1}
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 disabled:opacity-50"
                  disabled={totalSlides <= 1}
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getCurrentSlideTestimonials().map((testimonial) => (
                <Card key={testimonial.id} className="bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    
                    {/* Header with Image and Basic Info */}
                    <div className="relative p-6 bg-gradient-to-br from-green-50 to-emerald-50">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.name || testimonial.company}
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                          />
                          <div className="absolute -bottom-1 -right-1 text-2xl">
                            {testimonial.flag}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900">
                            {testimonial.name || testimonial.company}
                          </h3>
                          <p className="text-green-600 font-semibold">
                            {testimonial.role || testimonial.industry}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{testimonial.country}</span>
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="flex space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          ({testimonial.rating}.0)
                        </span>
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <Quote className="h-8 w-8 text-green-200 absolute -top-2 -left-2" />
                        <p className="text-gray-700 leading-relaxed italic pl-6">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="p-6 space-y-4">
                      {activeCategory === "jobSeekers" ? (
                        <>
                          {/* Salary Improvement */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-red-50 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">Before</div>
                              <div className="font-bold text-red-600">{testimonial.beforeSalary}</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">After</div>
                              <div className="font-bold text-green-600">{testimonial.afterSalary}</div>
                            </div>
                          </div>

                          {/* Company & Experience */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Current Company:</span>
                              <span className="font-medium">{testimonial.company}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Experience:</span>
                              <span className="font-medium">{testimonial.experience}</span>
                            </div>
                          </div>

                          {/* Skills */}
                          <div>
                            <div className="text-sm text-gray-600 mb-2">Key Skills:</div>
                            <div className="flex flex-wrap gap-2">
                              {testimonial.skills.map((skill, index) => (
                                <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Employer Details */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Contact Person:</span>
                              <span className="font-medium">{testimonial.contactPerson}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Position:</span>
                              <span className="font-medium">{testimonial.position}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Workers Hired:</span>
                              <span className="font-medium text-green-600">{testimonial.workersHired}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Partnership:</span>
                              <span className="font-medium">{testimonial.partnership}</span>
                            </div>
                          </div>

                          {/* Projects */}
                          <div>
                            <div className="text-sm text-gray-600 mb-2">Major Projects:</div>
                            <div className="space-y-1">
                              {testimonial.projects.slice(0, 2).map((project, index) => (
                                <div key={index} className="text-xs text-gray-700 flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                  <span>{project}</span>
                                </div>
                              ))}
                              {testimonial.projects.length > 2 && (
                                <div className="text-xs text-gray-500 italic">
                                  +{testimonial.projects.length - 2} more projects
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Our testimonials reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-600">Avg Salary Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto">
              Join thousands of professionals who have transformed their careers through ABZUA Manpower. 
              Whether you're seeking international opportunities or looking for skilled candidates, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("https://wa.me/923340004481?text=I%20want%20to%20create%20my%20own%20success%20story%20with%20ABZUA%20Manpower.%20Please%20guide%20me%20about%20available%20opportunities.", "_blank")}
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              >
                Start Your Journey
              </Button>
              <Button 
                onClick={() => window.open("/contact", "_self")}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;