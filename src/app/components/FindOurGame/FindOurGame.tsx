"use client";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AcademyProgramSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const programs = [
    {
      id: 1,
      title: "Know And Understand Player Identity",
      description:
        "We focus on understanding each player's unique strengths and style to build a strong foundation.",
    },
    {
      id: 2,
      title: "Identify Player Role Models",
      description:
        "Analyzing top-tier professionals helps young players visualize their path and refine their techniques.",
    },
    {
      id: 3,
      title: "Develop 360-Degree Player Plan",
      description:
        "A comprehensive approach covering physical, mental, and tactical aspects of the game.",
    },
    {
      id: 4,
      title: "Establish Daily Habits On And Off The Field",
      description:
        "Discipline is key. We cultivate professional habits that last a lifetime beyond the pitch.",
    },
  ];

  return (
    <section className="bg-white text-black py-[56px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Section Header --- */}
        <div className="max-w-4xl mb-[48px] md:mb-[64px]" data-aos="fade-up">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-[14px] md:text-[16px] mb-2">
            Academy Program
          </h3>
          <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] text-gray-900">
            Find Your Game With The <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Halland Football Academy
            </span>
          </h2>
        </div>

        {/* --- Program List --- */}
        <div className="flex flex-col gap-[20px] md:gap-[24px]">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="group relative bg-white border border-gray-200 rounded-2xl p-[24px] md:p-[40px] transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-[20px] md:gap-[40px]">
                
                {/* 1. Big Number Styling (UPDATED OPACITY) */}
                <div className="hidden md:block">
                  {/* Changed text-gray-100 -> text-gray-300 (Visible) */}
                  {/* Changed hover color to blue-200 for better contrast */}
                  <span className="text-[60px] font-black text-gray-300 leading-none group-hover:text-blue-200 transition-colors duration-300 select-none">
                    0{program.id}
                  </span>
                </div>

                {/* Mobile Number (Small) */}
                <div className="md:hidden text-blue-600 font-bold text-xl mb-[-10px]">
                   0{program.id}
                </div>

                {/* 2. Content */}
                <div className="flex-1">
                  <h4 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h4>
                  <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-2xl">
                    {program.description}
                  </p>
                </div>

                {/* 3. Action Arrow */}
                <div className="flex justify-end md:justify-center">
                  <div className="w-[50px] h-[50px] rounded-full bg-gray-50 flex items-center justify-center text-red-500 text-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                    <FaArrowRight className="transform group-hover:rotate-[-45deg] transition-transform duration-300" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyProgramSection;