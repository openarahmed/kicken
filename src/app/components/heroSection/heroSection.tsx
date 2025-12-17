"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Images & Icons Data
const images = [
  "https://i.postimg.cc/TYw1bsLp/football_Recoveredf_2_1.png",
  "https://i.postimg.cc/7hBLc3cG/fooooot_bal_1.png",
  "https://i.postimg.cc/wjRBfskR/fooooot_1.png",
];

const features = [
  { 
    icon: "https://cdn-icons-png.flaticon.com/512/2454/2454282.png", 
    title: "Flexible Pricing" 
  },
  { 
    icon: "https://cdn-icons-png.flaticon.com/512/3522/3522034.png", 
    title: "Fun And Enjoyment" 
  },
  { 
    icon: "https://cdn-icons-png.flaticon.com/512/1995/1995539.png", 
    title: "Professional Trainer" 
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full font-sans bg-white overflow-x-hidden">
      
      {/* ================= UPPER SECTION (Light Blue) ================= */}
      <div className="bg-[#D1EDFF] pt-20 pb-32 lg:pb-48 relative z-20">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            {/* --- Left Side Content --- */}
            <div className="w-full lg:w-1/2 z-30 text-center lg:text-left mb-16 lg:mb-0">
              <h1 className="text-5xl md:text-7xl lg:text-[85px] font-black text-[#1A1A1A] leading-[0.9] mb-8 tracking-tight">
                Tradition Pride <br /> & Future
              </h1>
              <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto lg:mx-0 mb-6 font-medium leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing tempor labore dolore
                lorem ipsum dolor mediocritatem tempor.
              </p>
              <h4 className="text-xl md:text-2xl text-[#1A1A1A] font-semibold mb-8">
                Football Team & Academy
              </h4>
              <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-sm text-sm font-bold hover:bg-red-600 transition-colors duration-300 shadow-lg">
                Read More
              </button>
            </div>

            {/* --- Right Side Image Slider Section --- */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative">
              
              {/* The Glowing & Gradient Circle */}
              <div className="relative w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full flex items-center justify-center
                bg-gradient-to-b from-white/40 to-blue-200/30
                shadow-[0_0_100px_rgba(59,130,246,0.6)]
                backdrop-blur-sm border border-white/30">
                
                {/* Player Image - ⚠️ FIX: Position Adjusted Upwards */}
                <div className="absolute -bottom-16 md:-bottom-28 w-[115%] h-[115%] transition-all duration-500 ease-in-out select-none pointer-events-none">
                  <Image
                    src={images[currentIndex]}
                    alt="Football Player"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Slider Controls - ⚠️ FIX: Buttons placed on the circle border */}
              <button onClick={handlePrev} className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-40 bg-white p-3 rounded-full shadow-md text-gray-400 hover:text-blue-600 transition-all hover:scale-110">
                <FiChevronLeft size={28} />
              </button>
              <button onClick={handleNext} className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-40 bg-white p-3 rounded-full shadow-md text-gray-400 hover:text-blue-600 transition-all hover:scale-110">
                <FiChevronRight size={28} />
              </button>

              {/* Social Icons */}
              <div className="absolute right-[-40px] md:right-[-60px] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                  <a key={idx} href="#" className="bg-white w-10 h-10 rounded-full shadow-sm flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= LOWER SECTION (Deep Blue) ================= */}
      <div className="bg-[#0D53FC] relative pt-20 pb-32">
        <div className="container mx-auto px-6 lg:px-24 relative z-20">
          <div className="flex flex-col lg:flex-row gap-10 items-end justify-between">
            
            {/* --- White Feature Cards (Overlapping) --- */}
            <div className="w-full lg:w-auto grid grid-cols-1 md:grid-cols-3 gap-6 -mt-40 lg:-mt-52 relative z-50">
              {features.map((item, idx) => (
                <div key={idx} className="bg-white w-full md:w-[200px] h-[200px] p-6 flex flex-col items-center justify-center text-center shadow-2xl rounded-sm hover:-translate-y-2 transition-transform duration-300 group">
                  <div className="w-14 h-14 mb-4">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain filter drop-shadow-sm" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* --- Bottom Right Description Text --- */}
            <div className="w-full lg:w-1/3 text-right">
              <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xs ml-auto font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>

        {/* --- BIG BACKGROUND OUTLINE TEXT "KICKEN" --- */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
          <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-black tracking-tighter leading-none opacity-15"
              style={{ 
                color: 'transparent',
                WebkitTextStroke: '2px #ffffff'
              }}>
            KICKEN
          </h1>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;