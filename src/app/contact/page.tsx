"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPaperPlane 
} from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* --- Section 1: Hero Header --- */}
      <section className="bg-[#050511] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4" data-aos="fade-right">
              Get Scouted
            </h3>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6" data-aos="fade-right" data-aos-delay="100">
              Connect With <span className="text-blue-600">The Elite</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Have questions about our trials, residency programs, or scouting events? 
              Our recruitment team is ready to help you take the next step.
            </p>
          </div>
        </div>
        {/* Decorative Background Text */}
        <div className="absolute -bottom-10 right-0 opacity-5 select-none pointer-events-none">
          <h1 className="text-[20vw] font-black leading-none uppercase">Contact</h1>
        </div>
      </section>

      {/* --- Section 2: Contact Info & Form Grid --- */}
      <section className="py-[56px] md:py-[80px] lg:py-[128px]">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left side: Contact Info */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase mb-8">
                Academy <span className="text-blue-600">Headquarters</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                {/* Address */}
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">Our Location</h4>
                    <p className="text-gray-500">123 Elite Performance Way, Sports City, <br /> New York, NY 10012</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">Email Us</h4>
                    <p className="text-gray-500">recruit@kickenacademy.com</p>
                    <p className="text-gray-500">info@kickenacademy.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">Call Support</h4>
                    <p className="text-gray-500">+1 (555) 012-3456</p>
                    <p className="text-gray-500">Mon - Fri, 9am - 6pm EST</p>
                  </div>
                </div>
              </div>

              {/* Social Connectivity */}
              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-6">Follow Our Progress</h4>
                <div className="flex gap-4">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="lg:col-span-7 bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-xl" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
              <p className="text-gray-500 mb-8">Fields marked with an asterisk (*) are required.</p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address *</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" required />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all appearance-none">
                    <option>Trial Inquiry</option>
                    <option>Residency Program</option>
                    <option>Partnership</option>
                    <option>General Feedback</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Message *</label>
                  <textarea rows={5} placeholder="Tell us about your football journey..." className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none" required></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full md:w-max bg-blue-600 text-white font-black uppercase tracking-widest px-12 py-5 rounded-full hover:bg-black transition-all shadow-lg flex items-center justify-center gap-3 group">
                    Send Application <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 3: Google Maps Placeholder --- */}
      <section className="h-[400px] md:h-[600px] w-full bg-gray-200 relative">
        {/* Real Map Iframe can be injected here */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#f0f9ff]">
           <div className="text-center">
              <FaMapMarkerAlt className="text-blue-600 text-6xl mx-auto mb-4 animate-bounce" />
              <h4 className="text-2xl font-black text-gray-900 uppercase">Interactive Map Loading...</h4>
              <p className="text-gray-500">Visit us at the heart of Sports City.</p>
           </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;