"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// FIXED: Unused imports (FaUserAlt, FaFutbol, FaEnvelope, FaPhoneAlt) removed
import { FaArrowRight } from "react-icons/fa";

const JoinAcademy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-[#050511] pt-32 pb-20 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4" data-aos="fade-up">
            Elite Recruitment 2025
          </h3>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6" data-aos="fade-up" data-aos-delay="100">
            Apply For <span className="text-blue-600">Trials</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg" data-aos="fade-up" data-aos-delay="200">
            Step onto the path of professional football. Submit your application for our next elite scouting session.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-2xl" data-aos="zoom-in">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="md:col-span-2 border-b border-gray-200 pb-4 mb-4">
                 <h2 className="text-2xl font-black uppercase text-gray-900">Player <span className="text-blue-600">Details</span></h2>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Full Name *</label>
                <input type="text" placeholder="Enter player name" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-600 outline-none" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Date of Birth *</label>
                <input type="date" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-600 outline-none" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Preferred Position *</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-600 outline-none">
                  <option>Striker / Forward</option>
                  <option>Midfielder</option>
                  <option>Defender</option>
                  <option>Goalkeeper</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Previous Club/Academy (If any)</label>
                <input type="text" placeholder="e.g. Local Club" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>

              <div className="md:col-span-2 border-b border-gray-200 pb-4 mt-8 mb-4">
                 <h2 className="text-2xl font-black uppercase text-gray-900">Guardian <span className="text-blue-600">Contact</span></h2>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Parent/Guardian Name *</label>
                <input type="text" placeholder="Enter guardian name" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-600 outline-none" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-600 outline-none" required />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Email Address *</label>
                <input type="email" placeholder="example@mail.com" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-600 outline-none" required />
              </div>

              <div className="md:col-span-2 mt-8">
                <button type="submit" className="w-full bg-blue-600 text-white font-black uppercase tracking-widest py-6 rounded-full hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 group">
                  Submit Trial Application <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinAcademy;