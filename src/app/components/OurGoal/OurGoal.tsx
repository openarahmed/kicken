"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const OurGoal: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    // FIX 1: Reduced Section Padding (py-128 -> py-80)
    <section className="bg-white text-black py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Main Content Wrapper --- */}
        <div className="bg-blue-50/80 rounded-[20px] overflow-hidden shadow-lg flex flex-col lg:flex-row">
          
          {/* --- Left: Image Section --- */}
          {/* Added 'min-h' to ensure image area is substantial but not huge */}
          <div 
            className="w-full lg:w-1/2 relative h-[250px] md:h-[350px] lg:h-auto lg:min-h-[450px]"
            data-aos="fade-right"
          >
            <Image
              src="https://static.wixstatic.com/media/ab1956_890e7cc09b914b59891e9d2aceac644a~mv2.jpg/v1/fill/w_640,h_676,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ab1956_890e7cc09b914b59891e9d2aceac644a~mv2.jpg"
              alt="Football Training Goal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
          </div>

          {/* --- Right: Content Section --- */}
          {/* FIX 2: Reduced Internal Padding (p-64 -> p-48) */}
          <div 
            className="w-full lg:w-1/2 p-[24px] md:p-[32px] lg:p-[48px] flex flex-col justify-center"
            data-aos="fade-left"
          >
            
            {/* Title & Description */}
            {/* FIX 3: Reduced Margins (mb-48 -> mb-32) */}
            <div className="mb-[24px] lg:mb-[32px]">
               <h3 className="font-extrabold uppercase leading-[1.1] mb-[16px] text-[28px] md:text-[40px] lg:text-[56px]">
                Our <span className="text-blue-600">Common</span> Goals
              </h3>
              <p className="text-gray-600 leading-relaxed text-[14px] md:text-[15px] lg:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            {/* Compact Grid Gap */}
            <div className="flex flex-col sm:flex-row gap-[16px] mb-[32px]">
              
              {/* Card 1 */}
              <div className="flex-1 bg-white p-[20px] rounded-lg shadow-sm border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎯</span>
                  <h4 className="font-bold text-base">Our Vision</h4>
                </div>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  To become the world's leading football academy producing top-tier talent.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex-1 bg-white p-[20px] rounded-lg shadow-sm border border-blue-100">
                 <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🚀</span>
                  <h4 className="font-bold text-base">Our Mission</h4>
                </div>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  Providing professional training, mentorship, and opportunities for all.
                </p>
              </div>

            </div>

            {/* CTA Button */}
            <div>
              <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-black transition-all duration-300 shadow-lg text-[14px] md:text-[15px]">
                Read More About Us
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;