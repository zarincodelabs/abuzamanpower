import React from "react";
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Topbar = () => {
  const contactInfo = [
    {
      icon: Phone,
      text: "+92 332 3277946",
      href: "tel:+923323277946",
      type: "phone"
    },
    {
      icon: Mail,
      text: "info@abzuamanpower.com",
      href: "mailto:info@abzuamanpower.com",
      type: "email"
    },
    {
      icon: MapPin,
      text: "Office No 310, 3rd floor, Rawal Mall and Residencia, near Rahmanabad Metro Stop, Rawalpindi",
      href: "#",
      type: "address"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/abzua-manpower-services/",
      name: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/abzuamanpowerservices/",
      name: "Facebook",
      color: "hover:text-blue-700"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCCf7eCwvC2mFmZf7BZa_P8g",
      name: "YouTube",
      color: "hover:text-red-600"
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="hidden lg:block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Contact Information */}
          <div className="flex items-center space-x-6">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="h-3.5 w-3.5 group-hover:text-green-400 transition-colors duration-300" />
                  <span className="font-medium truncate max-w-xs">{item.text}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-1">
            <span className="text-gray-400 text-xs mr-3 font-medium">Follow Us:</span>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.button
                  key={index}
                  onClick={() => handleSocialClick(social.href)}
                  className={`p-2 text-gray-400 transition-all duration-300 rounded-lg ${social.color} hover:bg-white/10`}
                  title={social.name}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent className="h-3.5 w-3.5" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;