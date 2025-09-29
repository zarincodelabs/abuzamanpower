import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="/assets/images/logo/logo.png" 
              alt="ABZUA Manpower" 
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting skilled Pakistani talent with global employers. 
              Your trusted partner for international recruitment and placement services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Our Services", href: "/services" },
                { name: "Industries", href: "/industries" },
                { name: "Gallery", href: "/gallery" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms & Conditions", href: "/terms" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Gulf Recruitment",
                "European Placement",
                "Training & Certification",
                "Visa Support",
                "Documentation",
                "Pre-departure Briefing",
                "Post-placement Support",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">+92 332 3277946</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">info@abzuamanpower.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Office No 310, 3rd floor<br />
                    Rawal Mall and Residencia<br />
                    near Rahmanabad Metro Stop<br />
                    Rawalpindi
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h4 className="text-sm font-medium mb-3 text-gray-200">Follow Us</h4>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleSocialClick("https://www.linkedin.com/company/abzua-manpower-services/")}
                    className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleSocialClick("https://www.facebook.com/abzuamanpowerservices/")}
                    className="p-2 bg-gray-800 hover:bg-blue-700 rounded-full transition-colors duration-200"
                  >
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleSocialClick("https://www.youtube.com/channel/UCCf7eCwvC2mFmZf7BZa_P8g")}
                    className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-colors duration-200"
                  >
                    <Youtube className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-gray-400 text-sm">
              © 2024 ABZUA Manpower. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;