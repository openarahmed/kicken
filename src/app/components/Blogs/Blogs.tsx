"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Content Update: Professional Football & Sports Science Topics
  const blogPosts = [
    {
      id: 1,
      title: "The 12-Yard Psychology: Mastering Elite Penalty Techniques",
      date: "December 15, 2025",
      image: "https://i.postimg.cc/13MZKmkf/Our_Common_Goals.jpg",
      description:
        "Learn how top-tier professionals manage cognitive load and utilize advanced biomechanics to convert high-pressure penalties into match-winning goals.",
      featured: true,
    },
    {
      id: 2,
      title: "90-Minute Stamina: Fueling for High-Intensity Matchdays",
      date: "December 12, 2025",
      image: "https://i.postimg.cc/3RRV12g9/wolves_socer_esport_logo_transparant_1.png",
      description:
        "A deep dive into glycogen loading and hydration strategies used by academy prospects to maintain peak performance until the final whistle.",
      featured: false,
    },
    {
      id: 3,
      title: "The Recovery Revolution: Pro-Level Injury Prevention",
      date: "December 10, 2025",
      image: "https://i.postimg.cc/Y9sVsjR1/Group-52.png",
      description:
        "Explore the active mobility protocols and sports science behind muscle tissue repair to stay match-fit throughout the grueling season.",
      featured: false,
    },
  ];

  return (
    <section className="bg-white text-black py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Header Update --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-[32px] md:mb-[40px]" data-aos="fade-up">
          <div className="max-w-2xl">
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-[14px] md:text-[16px] mb-2">
              The Kicken Journal
            </h3>
            <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[50px] leading-[1.1] text-gray-900">
              Technical Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Academy Excellence
              </span>
            </h2>
          </div>
          
          <button className="hidden md:flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors mt-4 md:mt-0 group border-b-2 border-gray-900 hover:border-blue-600 pb-1 uppercase text-sm tracking-wider">
            View All Articles
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
          
          {/* Featured Post */}
          <div className="lg:col-span-7" data-aos="fade-right">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div 
                key={post.id} 
                className="bg-[#F0F9FF] rounded-3xl overflow-hidden group cursor-pointer h-full flex flex-col shadow-sm border border-blue-50"
              >
                <div className="relative h-[200px] md:h-[300px] overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    Technical Guide
                  </div>
                </div>
                
                <div className="p-[24px] md:p-[32px] flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-blue-500 font-semibold mb-3 text-sm">
                    <FaCalendarAlt /> {post.date}
                  </div>
                  <h3 className="text-[20px] md:text-[28px] font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase">
                    Read Full Article <FaArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Side Posts */}
          <div className="lg:col-span-5 flex flex-col gap-[20px]" data-aos="fade-left">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <div 
                key={post.id} 
                className="bg-white border border-gray-100 rounded-3xl p-[16px] md:p-[20px] flex gap-[20px] items-center group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div>
                   <div className="flex items-center gap-2 text-blue-500 font-semibold mb-1 text-xs">
                    <FaCalendarAlt /> {post.date}
                  </div>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                   <span className="text-gray-400 text-xs flex items-center gap-1 group-hover:text-blue-600 transition-colors font-bold uppercase">
                    Analyze <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </div>
            ))}

            {/* Newsletter Box Update */}
            <div className="bg-[#111] text-white rounded-3xl p-[24px] flex-1 flex flex-col justify-center items-center text-center border border-gray-800">
                <h4 className="text-xl font-bold mb-2">Scout Your Potential</h4>
                <p className="text-gray-400 text-xs mb-4">Receive exclusive technical drills and scouting news straight to your inbox.</p>
                <div className="w-full relative">
                    <input type="email" placeholder="Professional Email Address" className="w-full bg-gray-800 text-white px-4 py-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-700" />
                    <button className="absolute right-1.5 top-1.5 bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all shadow-lg">
                        <FaArrowRight className="text-xs" />
                    </button>
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;