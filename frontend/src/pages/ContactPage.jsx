import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, User, Briefcase } from "lucide-react";
import { Button } from "../components/ui/button";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import UniversalBreadcrumb from "../components/common/UniversalBreadcrumb";

const ContactPage = () => {
  const [employerForm, setEmployerForm] = useState({
    companyName: "",
    country: "",
    industry: "",
    workersNeeded: "",
    jobCategory: "",
    timeline: "",
    contactName: "",
    phone: "",
    email: ""
  });

  const [jobSeekerForm, setJobSeekerForm] = useState({
    fullName: "",
    age: "",
    education: "",
    skills: "",
    experience: "",
    destination: "",
    phone: "",
    email: ""
  });

  const handleEmployerSubmit = (e) => {
    e.preventDefault();
    const message = `🏢 EMPLOYER INQUIRY

Company: ${employerForm.companyName}
Contact: ${employerForm.contactName}
Phone: ${employerForm.phone}
Email: ${employerForm.email}

REQUIREMENTS:
• Country/Location: ${employerForm.country}
• Industry: ${employerForm.industry}
• Workers Needed: ${employerForm.workersNeeded}
• Job Category: ${employerForm.jobCategory}
• Timeline: ${employerForm.timeline}

Please provide detailed information about available candidates and your services.`;

    window.open(`https://wa.me/923323277946?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleJobSeekerSubmit = (e) => {
    e.preventDefault();
    const message = `👨‍💼 JOB SEEKER APPLICATION

Personal Details:
• Name: ${jobSeekerForm.fullName}
• Age: ${jobSeekerForm.age}
• Phone: ${jobSeekerForm.phone}
• Email: ${jobSeekerForm.email}

Professional Profile:
• Education: ${jobSeekerForm.education}
• Skills/Profession: ${jobSeekerForm.skills}
• Experience: ${jobSeekerForm.experience}
• Preferred Destination: ${jobSeekerForm.destination}

I'm interested in international job opportunities. Please guide me about available positions and requirements.`;

    window.open(`https://wa.me/923340004481?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Universal Breadcrumb Hero Section */}
      <UniversalBreadcrumb 
        title="Contact Us"
        subtitle="Start your international career journey today - We respond within 5 minutes on WhatsApp"
      />

      {/* Quick Contact Info */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <WhatsAppIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">WhatsApp</div>
                <div className="text-green-600">+92 332 3277946</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Phone</div>
                <div className="text-blue-600">+92 332 3277946</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-purple-600">info@abzuamanpower.com</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Response Time</div>
                <div className="text-orange-600">Within 5 Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600">
              Select the form that matches your needs - all inquiries are sent directly to WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Employer Form */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                  <span>For Employers</span>
                </CardTitle>
                <p className="text-gray-600">Looking for skilled workers for your business?</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleEmployerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Company Name *"
                      value={employerForm.companyName}
                      onChange={(e) => setEmployerForm({...employerForm, companyName: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Contact Person *"
                      value={employerForm.contactName}
                      onChange={(e) => setEmployerForm({...employerForm, contactName: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Phone Number *"
                      value={employerForm.phone}
                      onChange={(e) => setEmployerForm({...employerForm, phone: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Email Address"
                      type="email"
                      value={employerForm.email}
                      onChange={(e) => setEmployerForm({...employerForm, email: e.target.value})}
                    />
                  </div>

                  <Select onValueChange={(value) => setEmployerForm({...employerForm, country: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Country/Location *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uae">United Arab Emirates</SelectItem>
                      <SelectItem value="saudi">Saudi Arabia</SelectItem>
                      <SelectItem value="qatar">Qatar</SelectItem>
                      <SelectItem value="kuwait">Kuwait</SelectItem>
                      <SelectItem value="oman">Oman</SelectItem>
                      <SelectItem value="bahrain">Bahrain</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="poland">Poland</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={(value) => setEmployerForm({...employerForm, industry: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Industry Type *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="oilgas">Oil & Gas</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Number of Workers Needed *"
                      value={employerForm.workersNeeded}
                      onChange={(e) => setEmployerForm({...employerForm, workersNeeded: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Job Category *"
                      value={employerForm.jobCategory}
                      onChange={(e) => setEmployerForm({...employerForm, jobCategory: e.target.value})}
                      required
                    />
                  </div>

                  <Select onValueChange={(value) => setEmployerForm({...employerForm, timeline: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Required Timeline *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                      <SelectItem value="2months">Within 2 months</SelectItem>
                      <SelectItem value="3months">Within 3 months</SelectItem>
                      <SelectItem value="6months">Within 6 months</SelectItem>
                      <SelectItem value="flexible">Flexible timeline</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Inquiry via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Job Seeker Form */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <User className="h-6 w-6 text-green-600" />
                  <span>For Job Seekers</span>
                </CardTitle>
                <p className="text-gray-600">Looking for international job opportunities?</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleJobSeekerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name *"
                      value={jobSeekerForm.fullName}
                      onChange={(e) => setJobSeekerForm({...jobSeekerForm, fullName: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Age *"
                      value={jobSeekerForm.age}
                      onChange={(e) => setJobSeekerForm({...jobSeekerForm, age: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Phone Number *"
                      value={jobSeekerForm.phone}
                      onChange={(e) => setJobSeekerForm({...jobSeekerForm, phone: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Email Address"
                      type="email"
                      value={jobSeekerForm.email}
                      onChange={(e) => setJobSeekerForm({...jobSeekerForm, email: e.target.value})}
                    />
                  </div>

                  <Select onValueChange={(value) => setJobSeekerForm({...jobSeekerForm, education: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Education Level *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matric">Matric/O-Levels</SelectItem>
                      <SelectItem value="intermediate">Intermediate/A-Levels</SelectItem>
                      <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="technical">Technical/Vocational</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder="Skills/Profession *"
                    value={jobSeekerForm.skills}
                    onChange={(e) => setJobSeekerForm({...jobSeekerForm, skills: e.target.value})}
                    required
                  />

                  <Select onValueChange={(value) => setJobSeekerForm({...jobSeekerForm, experience: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Experience (Years) *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 Years</SelectItem>
                      <SelectItem value="2-5">2-5 Years</SelectItem>
                      <SelectItem value="6-10">6-10 Years</SelectItem>
                      <SelectItem value="10+">10+ Years</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={(value) => setJobSeekerForm({...jobSeekerForm, destination: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred Destination *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gulf">Gulf Countries (UAE, Saudi, Qatar, etc.)</SelectItem>
                      <SelectItem value="europe">European Countries</SelectItem>
                      <SelectItem value="uae">UAE Specifically</SelectItem>
                      <SelectItem value="saudi">Saudi Arabia Specifically</SelectItem>
                      <SelectItem value="germany">Germany Specifically</SelectItem>
                      <SelectItem value="any">Open to Any Country</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    <Send className="mr-2 h-4 w-4" />
                    Apply via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Located in the heart of Rawalpindi, our office is easily accessible 
                  and equipped with modern facilities for consultations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                    <p className="text-gray-600">
                      Office No 310, 3rd floor<br />
                      Rawal Mall and Residencia<br />
                      near Rahmanabad Metro Stop<br />
                      Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM<br />
                      <span className="text-green-600 font-medium">WhatsApp Available 24/7</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <WhatsAppIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Contact</h3>
                    <p className="text-gray-600 mb-2">
                      For immediate assistance, contact us on WhatsApp
                    </p>
                    <Button 
                      onClick={() => window.open("https://wa.me/923323277946", "_blank")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <WhatsAppIcon className="mr-2 h-4 w-4" />
                      WhatsApp: +92 332 3277946
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 lg:h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26575.20672056555!2d73.074375!3d33.633813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951e0a33f0cb%3A0xf9a0e3e1203a453f!2sAbzua%20Manpower!5e0!3m2!1sen!2s!4v1755812761611!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;