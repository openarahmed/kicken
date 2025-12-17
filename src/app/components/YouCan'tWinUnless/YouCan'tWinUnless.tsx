"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const QuoteSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* --- Parallax Background Image --- */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtnJ5bKQvR3lUK05UDM7J9S37a6yuHPn2GA&s')",
        }}
      ></div>

      {/* --- Dark Overlay --- */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* --- Content Container --- */}
      {/* FIX: Removed 'pb' (padding-bottom) so image sits on edge. Added 'items-end' for alignment. */}
      <div className="relative z-10 container mx-auto px-[20px] md:px-[32px] lg:px-[64px] pt-[56px] md:pt-[80px] lg:pt-[128px] flex flex-col lg:flex-row items-center lg:items-end justify-between gap-[40px]">
        
        {/* --- Left Content (Quote) --- */}
        {/* Added 'self-center' and 'pb' to keep text vertically centered and safe from bottom edge */}
        <div 
          className="w-full lg:w-1/2 text-white self-center pb-[56px] md:pb-[80px] lg:pb-[128px]"
          data-aos="fade-right"
        >
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6 text-blue-400">
            <span className="w-12 h-[2px] bg-blue-400"></span>
            <span className="uppercase tracking-widest font-bold text-sm">Hello Fellow People</span>
          </div>

          <FaQuoteLeft className="text-4xl text-gray-600 mb-6 opacity-50" />

          <h1 className="font-extrabold leading-[1.1] mb-[32px] text-[32px] md:text-[48px] lg:text-[64px]">
            You Can't Win Unless <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              You Learn How To Lose
            </span>
          </h1>

          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="text-xl font-bold text-white">Benjamin Foster</h4>
            <p className="text-gray-400 text-sm uppercase tracking-wide">Professional Soccer Player</p>
          </div>
        </div>

        {/* --- Right Image (Player Cutout) --- */}
        {/* Sits at the very bottom (no padding below) */}
        <div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
           {/* Glow Effect */}
           <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-blue-600/30 rounded-full blur-[80px] -z-10"></div>

          {/* Image Container */}
          <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px]">
            <Image
              src="https://i.postimg.cc/rF8nN1q6/FVR_1_1.png"
              alt="Benjamin Foster Soccer Player"
              fill
              className="object-contain object-bottom drop-shadow-2xl" // object-bottom aligns image content to bottom
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default QuoteSection;