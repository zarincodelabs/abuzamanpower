import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import AboutPreview from "../components/homepage/AboutPreview";
import ServicesSection from "../components/homepage/ServicesSection";
import IndustriesSection from "../components/homepage/IndustriesSection";
import ProcessSection from "../components/homepage/ProcessSection";
import CountriesSection from "../components/homepage/CountriesSection";
import TestimonialsSection from "../components/homepage/TestimonialsSection";
import WhyChooseSection from "../components/homepage/WhyChooseSection";
import PartnersSection from "../components/common/PartnersSection";
import WhatsAppSection from "../components/homepage/WhatsAppSection";

const Homepage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <CountriesSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <PartnersSection />
      <WhatsAppSection />
    </div>
  );
};

export default Homepage;