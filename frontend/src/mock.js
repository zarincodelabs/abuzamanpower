// ABZUA Manpower - Mock Data & Implementation Status
// This file documents the current frontend implementation with mock data

export const IMPLEMENTATION_STATUS = {
  status: "FRONTEND_COMPLETE",
  description: "Complete frontend implementation with mock data and WhatsApp integration",
  
  // All pages are implemented and functional
  pages: {
    homepage: "✅ Complete with all sections",
    about: "✅ Complete with company story and team",
    services: "✅ Complete with detailed service descriptions", 
    industries: "✅ Complete with industry specializations",
    gallery: "✅ Complete with categorized media",
    testimonials: "✅ Complete with success stories",
    contact: "✅ Complete with forms and WhatsApp integration"
  },

  // WhatsApp integration is fully functional
  whatsappIntegration: {
    floatingButton: "✅ Working - appears after 3 seconds with pulse animation",
    navigationButton: "✅ Working - in header for quick access", 
    contactForms: "✅ Working - employer and job seeker forms redirect to WhatsApp",
    chatPreview: "✅ Working - shows mock conversation preview",
    allCTAs: "✅ Working - all call-to-action buttons connect to WhatsApp"
  },

  // All interactive elements are working
  interactions: {
    navigation: "✅ Working - smooth navigation between all pages",
    mobileMenu: "✅ Working - responsive hamburger menu",
    animations: "✅ Working - hover effects, transitions, counter animations", 
    forms: "✅ Working - complete form validation and WhatsApp integration",
    responsiveDesign: "✅ Working - mobile-first responsive design"
  }
};

// Company Information (Used throughout the site)
export const COMPANY_INFO = {
  name: "ABZUA Manpower",
  tagline: "Connecting Skilled Pakistani Talent with Global Employers",
  
  contact: {
    whatsapp: "+92 332 3277946",
    phone: "+92 332 3277946", 
    email: "info@abzuamanpower.com",
    whatsappUrl: "https://wa.me/923323277946"
  },

  address: {
    office: "Office No 310, 3rd floor",
    building: "Rawal Mall and Residencia",
    location: "near Rahmanabad Metro Stop",
    city: "Rawalpindi",
    mapUrl: "https://maps.app.goo.gl/1iEYVhjHXAkLp2bp6"
  },

  social: {
    linkedin: "https://www.linkedin.com/company/abzua-manpower-services/",
    facebook: "https://www.facebook.com/abzuamanpowerservices/", 
    youtube: "https://www.youtube.com/channel/UCCf7eCwvC2mFmZf7BZa_P8g"
  },

  assets: {
    logo: "/assets/images/logo/logo.png",
    heroVideo: "/assets/videos/hero-background-video.mp4"
  }
};

// Statistics used across the site
export const COMPANY_STATS = {
  workersDeployed: 2500,
  countriesServed: 15, 
  yearsExperience: 8,
  successRate: 95,
  averageRating: 4.9,
  retentionRate: 98
};

// Services offered (used in services and homepage)
export const SERVICES = [
  {
    title: "Gulf Recruitment",
    description: "Specialized placement services for UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain",
    sectors: ["Construction", "Oil & Gas", "Healthcare", "Engineering"]
  },
  {
    title: "European Placement", 
    description: "Connect with European employers in Germany, UK, Poland, and Romania",
    sectors: ["Engineering", "IT", "Healthcare", "Manufacturing"]
  },
  {
    title: "Training & Certification",
    description: "Comprehensive skills development and internationally recognized certifications", 
    sectors: ["Technical Skills", "Language Training", "Safety Certifications"]
  },
  {
    title: "Visa & Documentation",
    description: "Complete visa support and documentation assistance for all destinations",
    sectors: ["Visa Processing", "Legal Compliance", "Embassy Support"]
  }
];

// Industries covered
export const INDUSTRIES = [
  "Construction & Infrastructure",
  "Oil & Gas", 
  "Healthcare & Medical",
  "Hospitality & Tourism",
  "Aviation & Airlines", 
  "Engineering & Technical",
  "IT & Technology",
  "Manufacturing"
];

// Countries where placements are made
export const PLACEMENT_COUNTRIES = {
  gulf: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"],
  europe: ["Germany", "UK", "Poland", "Romania"]
};

// Mock testimonials data
export const TESTIMONIALS = {
  jobSeekers: [
    {
      name: "Ahmed Hassan",
      role: "Construction Supervisor", 
      country: "UAE",
      beforeSalary: "25,000 PKR",
      afterSalary: "150,000 PKR",
      rating: 5
    },
    {
      name: "Dr. Sarah Khan",
      role: "Medical Professional",
      country: "Germany", 
      beforeSalary: "80,000 PKR",
      afterSalary: "400,000 PKR",
      rating: 5
    }
    // More testimonials available in components
  ],
  employers: [
    {
      company: "Al-Rashid Construction LLC",
      country: "UAE",
      rating: 5,
      workersHired: "120+"
    },
    {
      company: "Europa Engineering GmbH", 
      country: "Germany",
      rating: 5,
      workersHired: "45+"
    }
    // More employer testimonials in components
  ]
};

// WhatsApp message templates
export const WHATSAPP_MESSAGES = {
  general: "Hello! I'm interested in your manpower services. Can you please provide more information?",
  
  employer: (data) => `🏢 EMPLOYER INQUIRY

Company: ${data.companyName}
Contact: ${data.contactName}  
Requirements: ${data.requirements}

Please provide detailed information about available candidates and your services.`,

  jobSeeker: (data) => `👨‍💼 JOB SEEKER APPLICATION

Name: ${data.fullName}
Skills: ${data.skills}
Experience: ${data.experience}
Destination: ${data.destination}

I'm interested in international job opportunities. Please guide me about available positions.`
};

// Design system colors (based on company logo)
export const DESIGN_COLORS = {
  primary: {
    green: "#10B981", // Emerald-600
    lightGreen: "#34D399", // Emerald-400  
    darkGreen: "#047857" // Emerald-800
  },
  secondary: {
    gold: "#F59E0B", // Amber-500
    lightGold: "#FCD34D", // Amber-300
    darkGold: "#D97706" // Amber-600
  },
  neutral: {
    white: "#FFFFFF",
    lightGray: "#F9FAFB", // Gray-50
    gray: "#6B7280", // Gray-500
    darkGray: "#1F2937" // Gray-800
  }
};

// Current implementation uses all mock data
// Ready for backend integration when needed
export const BACKEND_INTEGRATION_NOTES = {
  note: "All frontend functionality is complete with mock data",
  nextSteps: [
    "Backend API endpoints can be created to replace mock data",
    "Form submissions currently redirect to WhatsApp (as per requirements)", 
    "All components are designed to easily integrate with real API data",
    "Database schemas can be designed based on the mock data structures"
  ],
  whatsappWorking: "✅ WhatsApp integration is fully functional as per client requirements"
};