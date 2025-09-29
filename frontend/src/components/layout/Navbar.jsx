import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, User, Settings, Building, Image, Star, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "./PageLoader";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Services", href: "/services", icon: Settings },
    { name: "Industries", href: "/industries", icon: Building },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Testimonials", href: "/testimonials", icon: Star },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Add/remove body class for navbar awareness
    if (isOpen) {
      document.body.classList.add('mobile-sidebar-open');
    } else {
      document.body.classList.remove('mobile-sidebar-open');
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove('mobile-sidebar-open');
    };
  }, [isOpen]);

  const handleNavClick = (href, e) => {
    if (href !== location.pathname) {
      e.preventDefault();
      setIsLoading(true);
      setIsOpen(false);
      
      setTimeout(() => {
        navigate(href);
        window.scrollTo(0, 0);
        setIsLoading(false);
      }, 300);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/923323277946", "_blank");
  };

  return (
    <>
      {isLoading && <PageLoader />}
      
      <nav className={`fixed w-full z-40 navbar-curve-transition navbar-with-topbar ${
        isScrolled 
          ? 'curved-navbar bg-white/95 backdrop-blur-lg shadow-2xl border border-gray-200' 
          : 'bg-white shadow-lg border-b border-gray-100'
      }`}>
        <div className="w-full px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0" onClick={(e) => handleNavClick("/", e)}>
              <div className="relative">
                <div className="absolute inset-0 blur-xl opacity-30 bg-green-400 rounded-full"></div>
                <img 
                  src="/assets/images/logo/logo.png" 
                  alt="ABZUA Manpower" 
                  className="relative h-12 w-auto filter brightness-110"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group flex items-center space-x-2 ${
                        location.pathname === item.href
                          ? "text-green-600 bg-green-50"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{item.name}</span>
                      {location.pathname === item.href && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ENHANCED MOBILE HORIZONTAL NAVIGATION - APP-LIKE */}
            <div className="hidden md:flex lg:hidden overflow-x-auto scrollbar-hide bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg">
              <div className="flex items-center space-x-1">
                {navigation.slice(0, 5).map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.href}
                        onClick={(e) => handleNavClick(item.href, e)}
                        className={`relative whitespace-nowrap px-3 py-2 text-xs font-semibold transition-all duration-300 rounded-full mobile-button flex items-center space-x-1 ${
                          location.pathname === item.href
                            ? "text-white bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg"
                            : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                        }`}
                        style={location.pathname === item.href ? {
                          boxShadow: "0 4px 15px rgba(34, 197, 94, 0.3)"
                        } : {}}
                      >
                        <IconComponent className="h-3 w-3" />
                        <span>{item.name}</span>
                        {location.pathname === item.href && (
                          <motion.div
                            className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <WhatsAppIcon className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-colors duration-300 text-gray-700 hover:bg-gray-100 relative z-50"
                style={{ zIndex: 9998 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation - Sleek Side Menu - MOVED OUTSIDE NAV */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 lg:hidden mobile-menu-backdrop"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(4px)',
                zIndex: 9999
              }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Premium Slide Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                bounce: 0, 
                duration: 0.6,
                ease: "easeInOut"
              }}
              className="mobile-menu-container border-l-4 border-brand-500 font-inter responsive-sidebar"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                height: '100vh',
                backgroundColor: '#ffffff',
                opacity: 1,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                width: 'min(320px, 85vw)',
                maxWidth: '85vw',
                zIndex: 10000,
                overflow: 'hidden'
              }}
            >
              {/* Sleek Header with Logo Only */}
              <div className="bg-white p-6 border-b border-gray-100 relative">
                <div className="flex items-center justify-between">
                  {/* Logo Only - No Title */}
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-400 rounded-xl blur-lg opacity-30"></div>
                      <img 
                        src="/assets/images/logo/logo.png" 
                        alt="ABZUA Manpower" 
                        className="relative h-10 w-auto filter brightness-110"
                      />
                    </div>
                  </div>
                  
                  {/* Sleek Close Button */}
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 hover:bg-gray-50 rounded-2xl transition-all duration-300 group touch-target"
                  >
                    <X className="h-5 w-5 text-gray-600 group-hover:text-brand-600" />
                  </motion.button>
                </div>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-500 to-transparent opacity-50"></div>
              </div>

              {/* Premium Menu Items */}
              <div className="py-2 flex-1 overflow-y-auto responsive-menu-container" style={{ backgroundColor: '#ffffff' }}>
                {navigation.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      className="responsive-menu-item"
                    >
                      <Link
                        to={item.href}
                        onClick={(e) => handleNavClick(item.href, e)}
                        className={`group block mx-2 mb-2 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] mobile-button responsive-link ${
                          location.pathname === item.href
                            ? "text-white bg-gradient-to-r from-brand-500 to-brand-600 shadow-luxury-green"
                            : "text-gray-700 hover:text-brand-600 hover:bg-brand-50 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          {/* Icon */}
                          <IconComponent className={`w-5 h-5 ${
                            location.pathname === item.href ? 'text-white' : 'text-gray-500 group-hover:text-brand-500'
                          }`} />
                          
                          {/* Menu Item Name */}
                          <span className="font-semibold">{item.name}</span>
                          
                          {/* Arrow Icon for Active */}
                          {location.pathname === item.href && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="ml-auto"
                            >
                              <div className="w-2 h-2 border-r-2 border-t-2 border-white transform rotate-45"></div>
                            </motion.div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Premium WhatsApp Section */}
              <div className="p-3 border-t border-gray-100 bg-gradient-to-t from-brand-50 to-white responsive-whatsapp-section">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="space-y-3"
                >
                  {/* Quick Contact Info */}
                  <div className="text-center text-xs text-gray-600 mb-3">
                    <p className="font-semibold text-gray-800 text-sm">Need Immediate Assistance?</p>
                    <p className="text-xs text-gray-500">Response within 5 minutes</p>
                  </div>
                  
                  {/* Enhanced WhatsApp Button */}
                  <motion.button
                    onClick={handleWhatsApp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white py-3 rounded-2xl shadow-luxury-green hover:shadow-luxury-lg transform transition-all duration-300 relative overflow-hidden group mobile-button responsive-whatsapp-btn"
                  >
                    {/* Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center justify-center space-x-3">
                      <WhatsAppIcon className="h-5 w-5" />
                      <span className="font-semibold">Connect on WhatsApp</span>
                    </div>
                  </motion.button>
                  
                  {/* Contact Number */}
                  <div className="text-center text-xs text-gray-500 font-medium">
                    +92 332 3277946
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;