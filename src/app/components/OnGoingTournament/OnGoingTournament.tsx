"use client";
import React, { useEffect } from "react";
import { FaTrophy, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const OnGoingTournamentsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const tournaments = [
    {
      id: 1,
      title: "Kicken Elite Cup",
      desc: "Our flagship championship where the most promising academy stars face off against top regional talent under the eyes of professional scouts.",
      icon: <FaTrophy />,
    },
    {
      id: 2,
      title: "Rising Stars League",
      desc: "A dedicated division for our U-16 and U-18 prospects, focusing on tactical discipline and high-speed match experience.",
      icon: <FaTrophy />,
    },
    {
      id: 3,
      title: "Academy Invitational",
      desc: "An exclusive tournament bringing together the best private academies to foster sportsmanship and elite-level competition.",
      icon: <FaTrophy />,
    },
  ];

  return (
    <section className="bg-white text-black py-[56px] md:py-[80px] lg:py-[100px] lg:pb-[140px]">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Header --- */}
        <div className="max-w-4xl mb-[48px] md:mb-[64px]" data-aos="fade-up">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-[14px] md:text-[16px] mb-2">
            Competition & Leagues
          </h3>
          <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] text-gray-900 mb-6">
            Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Championships</span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed max-w-2xl">
            Training is the foundation, but competition is the test. At Kicken, we organize professional-grade 
            tournaments to push our athletes to their limits and showcase their progress.
          </p>
        </div>

        {/* --- Tournaments Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] lg:gap-[40px]">
          {tournaments.map((item, index) => (
            <div
              key={item.id}
              className="relative bg-white border border-gray-100 text-left p-[32px] pt-[48px] pb-[64px] rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)]"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Icon Circle */}
              <div className="w-[80px] h-[80px] rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-3xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-[24px] font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Floating Button */}
              <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 w-full flex justify-center">
                <button className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 hover:shadow-red-500/30 transition-all duration-300 flex items-center gap-2 group-btn">
                  Tournament Stats
                  <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OnGoingTournamentsSection;