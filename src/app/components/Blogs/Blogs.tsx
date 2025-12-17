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

  const blogPosts = [
    {
      id: 1,
      title: "Mastering the Art of Penalty Kicks: A Complete Guide",
      date: "September 23, 2024",
      image: "https://i.postimg.cc/13MZKmkf/Our_Common_Goals.jpg", // Correct URL
      description:
        "Penalty kicks can decide matches. Learn the psychological and technical aspects of taking the perfect penalty under pressure.",
      featured: true,
    },
    {
      id: 2,
      title: "Nutrition Tips for Young Athletes",
      date: "September 22, 2024",
      image: "https://i.postimg.cc/3RRV12g9/wolves_socer_esport_logo_transparant_1.png", // Correct URL
      description:
        "Proper nutrition is the fuel for champions. Discover what to eat before and after training.",
      featured: false,
    },
    {
      id: 3,
      title: "The Importance of Rest and Recovery",
      date: "September 20, 2024",
      image: "https://i.postimg.cc/Y9sVsjR1/Group_52.png", // Correct URL
      description:
        "Training hard is important, but recovering smart is essential. Learn how to prevent injuries.",
      featured: false,
    },
  ];

  return (
    // FIX 1: Reduced Section Padding (py-[100px] -> py-[80px])
    <section className="bg-white text-black py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Header --- */}
        {/* Reduced Margin Bottom (mb-[64px] -> mb-[40px]) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-[32px] md:mb-[40px]" data-aos="fade-up">
          <div className="max-w-2xl">
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-[14px] md:text-[16px] mb-2">
              Our Latest News
            </h3>
            <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] text-gray-900">
              Training Tips, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Success Stories
              </span>
            </h2>
          </div>
          
          <button className="hidden md:flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors mt-4 md:mt-0 group border-b-2 border-gray-900 hover:border-blue-600 pb-1">
            View All Articles
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]"> {/* Reduced gap */}
          
          {/* Featured Post (Takes 7 Columns) */}
          <div className="lg:col-span-7" data-aos="fade-right">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div 
                key={post.id} 
                className="bg-[#F0F9FF] rounded-3xl overflow-hidden group cursor-pointer h-full flex flex-col shadow-sm border border-blue-50"
              >
                {/* FIX 2: Reduced Image Height (h-[400px] -> h-[300px]) */}
                <div className="relative h-[200px] md:h-[300px] overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                </div>
                
                {/* FIX 3: Reduced Padding (p-[48px] -> p-[32px]) */}
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
                  <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                    Read More <FaArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Side Posts (Takes 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-[20px]" data-aos="fade-left"> {/* Reduced gap */}
            {blogPosts.filter(post => !post.featured).map((post) => (
              <div 
                key={post.id} 
                className="bg-white border border-gray-100 rounded-3xl p-[16px] md:p-[20px] flex gap-[20px] items-center group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                {/* Reduced Side Image Size */}
                <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50">
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
                   <span className="text-gray-400 text-xs flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                    Read Article <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </div>
            ))}

            {/* Newsletter Box (Compact) */}
            <div className="bg-[#111] text-white rounded-3xl p-[24px] flex-1 flex flex-col justify-center items-center text-center">
                <h4 className="text-xl font-bold mb-2">Join Our Newsletter</h4>
                <p className="text-gray-400 text-xs mb-4">Get training tips directly to your inbox.</p>
                <div className="w-full relative">
                    <input type="email" placeholder="Email Address" className="w-full bg-gray-800 text-white px-4 py-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    <button className="absolute right-1 top-1 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all">
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