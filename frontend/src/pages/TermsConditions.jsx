import React from "react";
import { FileText, Shield, Users, AlertTriangle, CheckCircle, Scale } from "lucide-react";
import { motion } from "framer-motion";

const TermsConditions = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: [
        "By accessing our services, you agree to be bound by these terms",
        "These terms apply to all users including job seekers and employers",
        "We reserve the right to update these terms at any time",
        "Continued use constitutes acceptance of modified terms",
        "You must be at least 18 years old to use our services"
      ]
    },
    {
      icon: Users,
      title: "User Responsibilities",
      content: [
        "Provide accurate and truthful information at all times",
        "Keep your contact information and credentials up to date",
        "Not misrepresent your qualifications or experience", 
        "Comply with all applicable laws and regulations",
        "Respect the confidentiality of shared information"
      ]
    },
    {
      icon: Shield,
      title: "Service Scope",
      content: [
        "We provide recruitment and placement services internationally",
        "We facilitate connections between employers and job seekers",
        "We assist with visa processing and documentation",
        "We offer training and certification programs",
        "We do not guarantee job placement or visa approval"
      ]
    },
    {
      icon: Scale,
      title: "Fees and Payments",
      content: [
        "Service fees are clearly communicated before engagement",
        "No upfront payments required from job seekers",
        "Employer fees are based on successful placements",
        "Additional services may incur separate charges",
        "All fees are non-refundable unless specified otherwise"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations and Disclaimers",
      content: [
        "We are not liable for employment decisions made by employers",
        "Job placement success depends on multiple external factors",
        "Visa approval is subject to government immigration policies",
        "We cannot guarantee specific salary levels or benefits",
        "Market conditions may affect available opportunities"
      ]
    },
    {
      icon: CheckCircle,
      title: "Intellectual Property",
      content: [
        "All website content and materials are our intellectual property",
        "Users may not reproduce or distribute our content without permission",
        "Company logos and trademarks remain property of respective owners",
        "User-submitted content may be used for service improvement",
        "We respect third-party intellectual property rights"
      ]
    }
  ];

  const additionalTerms = [
    {
      title: "Termination",
      points: [
        "Either party may terminate services with written notice",
        "We reserve the right to suspend accounts for policy violations",
        "Data will be handled according to our retention policy",
        "Outstanding obligations remain valid after termination"
      ]
    },
    {
      title: "Governing Law",
      points: [
        "These terms are governed by Pakistani law",
        "Disputes will be resolved through arbitration in Rawalpindi",
        "Local courts have jurisdiction for legal proceedings",
        "International regulations apply for cross-border services"
      ]
    },
    {
      title: "Privacy and Data Protection",
      points: [
        "Personal data is handled according to our Privacy Policy",
        "We maintain strict confidentiality standards",
        "Data sharing occurs only with explicit consent",
        "Security measures protect against unauthorized access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <FileText className="h-4 w-4" />
              <span>Terms & Conditions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Terms of Service
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Please read these terms carefully before using our recruitment services
            </p>
            
            <div className="text-sm text-gray-400">
              Last updated: January 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              These Terms and Conditions ("Terms") govern your use of ABZUA Manpower's recruitment services. 
              By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-green-800 font-medium">
                These terms create a legally binding agreement between you and ABZUA Manpower. 
                Please contact us if you have any questions before proceeding.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Terms Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Terms</h2>
              <p className="text-xl text-gray-600">Important legal and operational considerations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalTerms.map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{term.title}</h3>
                  <ul className="space-y-2">
                    {term.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-bold">Questions About These Terms?</h2>
            
            <p className="text-xl text-green-100">
              Our legal team is available to clarify any aspects of these terms and conditions.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
              <div className="text-lg font-semibold">Legal Department - ABZUA Manpower</div>
              <div className="text-green-100">
                Email: legal@abzuamanpower.com<br />
                Phone: +92 332 3277946<br />
                Office: Rawalpindi, Pakistan
              </div>
            </div>
            
            <p className="text-sm text-green-200">
              We provide legal clarifications within 7 business days of inquiry.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;