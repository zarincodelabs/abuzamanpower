import React, { useState } from "react";
import { Play, Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Lightbox from "../components/common/Lightbox";
import UniversalBreadcrumb from "../components/common/UniversalBreadcrumb";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("training");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryCategories = {
    training: {
      title: "Training Programs",
      description: "Skill development and certification programs",
      items: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Construction Skills Training",
          date: "March 2024",
          description: "Advanced construction techniques and safety training for Gulf deployment"
        },
        {
          type: "image", 
          src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Healthcare Training Program",
          date: "February 2024",
          description: "Medical professionals receiving specialized training for European hospitals"
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Technical Skills Workshop",
          date: "January 2024", 
          description: "Engineering and technical skills enhancement program"
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Language Training Session",
          date: "December 2023",
          description: "English and German language training for international candidates"
        }
      ]
    },
    departures: {
      title: "Departures & Success Stories",
      description: "Celebrating successful placements and departures",
      items: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "UAE Departure Ceremony",
          date: "March 2024",
          description: "50 construction workers departing for Dubai construction projects"
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
          title: "Germany Healthcare Team",
          date: "February 2024",
          description: "Medical professionals heading to German hospitals"
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Qatar Engineering Team",
          date: "January 2024",
          description: "Engineers departing for Qatar infrastructure projects"
        }
      ]
    },
    office: {
      title: "Office & Facilities",
      description: "Modern office environment and facilities",
      items: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Main Office Reception",
          date: "2024",
          description: "Modern reception area in Rawalpindi office"
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Consultation Rooms", 
          date: "2024",
          description: "Private consultation rooms for candidate interviews"
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Training Facility",
          date: "2024",
          description: "State-of-the-art training rooms and equipment"
        }
      ]
    },
    videos: {
      title: "Video Gallery",
      description: "Company introduction and success story videos",
      items: [
        {
          type: "video",
          src: "/assets/videos/hero-background-video.mp4",
          title: "Company Introduction Video",
          date: "2024",
          description: "Complete overview of ABZUA Manpower services and success stories"
        }
      ]
    }
  };

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Universal Breadcrumb Hero Section */}
      <UniversalBreadcrumb 
        title="Gallery"
        subtitle="Explore our journey through images and videos - from training programs to successful departures"
      />

      {/* Gallery Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-16">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              {Object.entries(galleryCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Content */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {galleryCategories[activeTab].title}
              </h2>
              <p className="text-xl text-gray-600">
                {galleryCategories[activeTab].description}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryCategories[activeTab].items.map((item, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(galleryCategories[activeTab].items, index)}>
                  <CardContent className="p-0">
                    
                    {/* Media Container */}
                    <div className="relative aspect-video overflow-hidden">
                      {item.type === "video" ? (
                        <div className="relative w-full h-full bg-black flex items-center justify-center">
                          <video 
                            src={item.src}
                            className="w-full h-full object-cover"
                            poster="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="h-8 w-8 text-purple-600 ml-1" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-200">{item.description}</p>
                        </div>
                      </div>
                      
                      {/* Click Indicator */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Visual Journey
            </h2>
            <p className="text-xl text-gray-600">
              Documenting success stories and milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Training Photos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Departure Ceremonies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Success Videos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Live Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Success Story
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Ready to create your own success story? Join thousands of professionals who have transformed their careers through ABZUA Manpower.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open("https://wa.me/923340004481?text=I%20want%20to%20be%20part%20of%20your%20success%20story.%20Please%20guide%20me%20about%20available%20opportunities.", "_blank")}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              Start Your Journey
            </Button>
            <Button 
              onClick={() => window.open("/contact", "_self")}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />
    </div>
  );
};

export default GalleryPage;