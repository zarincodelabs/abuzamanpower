import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Construction Supervisor",
      country: "UAE",
      flag: "🇦🇪",
      image: "/assets/images/testimonials/ahmed-hassan.jpg",
      rating: 5,
      text: "ABZUA Manpower transformed my career completely. From a local construction worker to a supervisor in Dubai - the journey was smooth and professional. Their support throughout the visa process was exceptional.",
      beforeSalary: "25,000 PKR",
      afterSalary: "150,000 PKR",
      placement: "Dubai, UAE"
    },
    {
      name: "Dr. Sarah Khan", 
      role: "Medical Professional",
      country: "Germany",
      flag: "🇩🇪",
      image: "/assets/images/testimonials/dr-sarah-khan.jpg",
      rating: 5,
      text: "The team at ABZUA helped me navigate the complex German medical licensing process. Their expertise in healthcare placements is unmatched. Now I'm working in one of Germany's top hospitals.",
      beforeSalary: "80,000 PKR",
      afterSalary: "400,000 PKR", 
      placement: "Munich, Germany"
    },
    {
      name: "Muhammad Ali",
      role: "Oil & Gas Technician", 
      country: "Qatar",
      flag: "🇶🇦",
      image: "/assets/images/testimonials/muhammad-ali.jpg",
      rating: 5,
      text: "I was skeptical about overseas opportunities, but ABZUA proved me wrong. Their transparent process and constant communication made me feel secure throughout. Qatar has changed my family's future.",
      beforeSalary: "35,000 PKR",
      afterSalary: "180,000 PKR",
      placement: "Doha, Qatar"
    },
    {
      name: "Fatima Sheikh",
      role: "IT Specialist",
      country: "UK",
      flag: "🇬🇧", 
      image: "/assets/images/testimonials/fatima-sheikh.jpg",
      rating: 5,
      text: "As a female IT professional, I had concerns about international placement. ABZUA's team was incredibly supportive and found me the perfect role in London's tech sector. Highly recommended!",
      beforeSalary: "60,000 PKR",
      afterSalary: "350,000 PKR",
      placement: "London, UK"
    }
  ];

  const companyTestimonials = [
    {
      company: "Al-Rashid Construction LLC",
      logo: "🏗️",
      country: "UAE",
      rating: 5,
      text: "ABZUA Manpower has been our trusted partner for 3 years. They consistently deliver skilled, reliable workers who meet our high standards. Their screening process is thorough and professional."
    },
    {
      company: "Europa Engineering GmbH", 
      logo: "⚙️",
      country: "Germany",
      rating: 5,
      text: "The quality of Pakistani engineers through ABZUA is exceptional. They understand our technical requirements and cultural fit perfectly. Highly professional service."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="h-4 w-4" />
            <span>Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Stories, Real
            <span className="block text-yellow-600">Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our successful candidates and satisfied employers who have 
            experienced the ABZUA difference in international recruitment.
          </p>
        </div>

        {/* Job Seeker Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Career Transformation Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-2xl">{testimonial.flag}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-300" />
                    <p className="text-gray-700 leading-relaxed pl-6 italic">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Before/After */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Previous Salary</p>
                        <p className="font-semibold text-gray-900">{testimonial.beforeSalary}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Current Salary</p>
                        <p className="font-semibold text-green-600">{testimonial.afterSalary}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">
                        Placed in {testimonial.placement}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Employers Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  
                  {/* Company Logo */}
                  <div className="text-4xl mb-4">{testimonial.logo}</div>
                  
                  {/* Company Name */}
                  <h4 className="font-bold text-xl text-gray-900 mb-2">
                    {testimonial.company}
                  </h4>
                  <p className="text-blue-600 font-medium mb-4">{testimonial.country}</p>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">
            Success by the Numbers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-green-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2500+</div>
              <div className="text-green-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-100">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;