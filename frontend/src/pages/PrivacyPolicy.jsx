import React from "react";
import { Shield, Eye, Lock, Users, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal identification information (name, email, phone number, address)",
        "Professional information (education, skills, work experience, certifications)",
        "Identity documents (passport, national ID, educational certificates)",
        "Employment preferences (desired countries, salary expectations, job categories)",
        "Communication records (emails, WhatsApp messages, phone calls)"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Matching candidates with suitable job opportunities",
        "Processing visa applications and documentation",
        "Communicating with employers and recruitment partners",
        "Providing updates on application status and opportunities",
        "Improving our recruitment services and processes"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "All data is encrypted and stored on secure servers",
        "Access is limited to authorized personnel only",
        "Regular security audits and updates are conducted",
        "We comply with international data protection standards",
        "Data backups are maintained with the same security level"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We share candidate information only with verified employers",
        "Sharing occurs only with explicit consent for specific opportunities",
        "We never sell or rent personal information to third parties",
        "Embassy and government agencies (for visa processing only)",
        "Legal authorities when required by law"
      ]
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: [
        "Active candidate data is retained for 5 years",
        "Successfully placed candidates' data is kept for record purposes",
        "Unsuccessful applications are archived after 2 years",
        "You can request data deletion at any time",
        "Legal documents are retained as per regulatory requirements"
      ]
    },
    {
      icon: CheckCircle,
      title: "Your Rights",
      content: [
        "Access your personal data and request copies",
        "Correct any inaccurate or incomplete information",
        "Delete your data from our systems",
        "Restrict processing for specific purposes",
        "Port your data to another service provider"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <Shield className="h-4 w-4" />
              <span>Privacy Policy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Your Privacy Matters
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              We are committed to protecting your personal information and being transparent about how we use it
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
              ABZUA Manpower ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our recruitment services.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                By using our services, you consent to the collection and use of your information as described in this policy. 
                If you do not agree with this policy, please do not use our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
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
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
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

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">Contact Us About Privacy</h2>
            
            <p className="text-xl text-gray-600">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
              <div className="text-lg font-semibold text-gray-900">ABZUA Manpower</div>
              <div className="text-gray-600">
                Office No 310, 3rd floor, Rawal Mall and Residencia<br />
                Near Rahmanabad Metro Stop, Rawalpindi<br />
                Email: privacy@abzuamanpower.com<br />
                Phone: +92 332 3277946
              </div>
            </div>
            
            <p className="text-sm text-gray-500">
              We will respond to your privacy-related inquiries within 30 business days.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;