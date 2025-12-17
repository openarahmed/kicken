"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const StayConnectedSection: React.FC = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
          }
        });
      },
      { threshold: 0.3 } // Start counting when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Stats Data
  const stats = [
    { id: 1, value: 25, label: "Years of Experience", suffix: "+" },
    { id: 2, value: 480, label: "Members Joined", suffix: "k" },
    { id: 3, value: 98, label: "Professional Trainers", suffix: "" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#D1EDFF] text-black py-[56px] md:py-[80px] lg:py-[100px]"
    >
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[64px] items-center">
          
          {/* --- Left Column: Text & Stats --- */}
          <div data-aos="fade-right">
            
            {/* Header */}
            <h2 className="font-extrabold leading-[1.1] mb-[24px] text-[32px] md:text-[48px] lg:text-[64px] text-gray-900">
              Stay Connected. <br />
              Stay Active. <span className="text-blue-600">Play Hard.</span>
            </h2>
            
            <p className="text-gray-700 mb-[40px] text-[15px] md:text-[16px] leading-relaxed max-w-xl">
              We provide world-class facilities and expert guidance to help you reach 
              your peak performance. Join a community that pushes boundaries.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] mb-[40px]">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-[#222121] p-[24px] md:p-[32px] rounded-xl text-white text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl"
                >
                  <h3 className="font-black text-[32px] md:text-[40px] lg:text-[48px] mb-1 text-blue-400">
                    {startCount && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator=","
                      />
                    )}
                    {stat.suffix}
                  </h3>
                  <p className="text-gray-400 text-[12px] md:text-[14px] uppercase tracking-wider font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-[14px] md:text-[15px] italic border-l-4 border-blue-600 pl-4">
              "Consistency is what transforms average into excellence."
            </p>
          </div>

          {/* --- Right Column: Image --- */}
          <div 
            className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            data-aos="fade-left"
          >
            <Image
              src="https://i.postimg.cc/XJBS3wpc/about_us_6.jpg" // NEW URL
              alt="Stay Active Training"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-lg shadow-lg hidden md:block">
               <p className="font-bold text-gray-900">Join the Club</p>
               <p className="text-blue-600 text-sm">Start Today</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StayConnectedSection;