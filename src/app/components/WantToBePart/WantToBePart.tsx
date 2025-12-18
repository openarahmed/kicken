"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const JoinSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-[#0f53d6] text-white overflow-hidden pt-[56px] md:pt-[80px] lg:pt-[100px] pb-[56px] md:pb-0">
      
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-800/20 rounded-full blur-[80px] -z-0"></div>

      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px] relative z-10">
        
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-[40px] lg:gap-[64px]">
          
          {/* --- Left Side: Image (Action Shot) --- */}
          <div 
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            data-aos="fade-right"
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-3xl scale-90 origin-bottom"></div>
              
              <Image
                src="https://i.postimg.cc/zvMyvwk9/foooooooooot_bal_1.png"
                alt="Professional Football Training at Kicken Academy"
                fill
                className="object-contain object-bottom drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* --- Right Side: Content --- */}
          <div 
            className="w-full md:w-1/2 text-center md:text-left md:pb-[80px] lg:pb-[100px] md:self-center"
            data-aos="fade-left"
          >
            {/* Tagline Update */}
            <h3 className="text-blue-300 font-bold uppercase tracking-widest text-[14px] md:text-[16px] mb-3">
              Begin Your Professional Legacy
            </h3>
            
            {/* Headline Update */}
            <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[60px] leading-[1.1] mb-6">
              Ready to Step Into the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Professional Spotlight?
              </span>
            </h2>
            
            {/* Description Update */}
            <p className="text-blue-100 text-[16px] lg:text-[18px] mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Your journey from the grassroots to the grand stadium starts here. Experience 
              pro-level intensity, expert tactical scouting, and join a community dedicated 
              to footballing excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="group bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
              >
                Apply for Trials
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#"
                className="group border-2 border-white/30 hover:border-white text-white font-bold py-4 px-10 rounded-full transition-all duration-300 flex items-center justify-center uppercase tracking-wider text-sm"
              >
                Inquire via WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;