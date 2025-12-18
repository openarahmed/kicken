"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    image: "https://i.postimg.cc/6qv5TDS6/1.jpg",
    name: "Carlos Rodriguez",
    designation: "Elite Forward U-19",
    rating: 5,
    text: "The technical drills at Kicken are unparalleled. The coaches don&apos;t just teach you how to play; they instill a champion mindset. My clinical finishing and tactical positioning have reached a whole new level since I joined the academy.",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/0ydjY1Nb/5.jpg",
    name: "Liam Henderson",
    designation: "Midfield Captain",
    rating: 5,
    text: "As a playmaker, vision and quick decision-making are everything. The tactical sessions here taught me how to dictate the tempo of a match. The professional environment at Kicken has truly transformed me into a leader on the pitch.",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/YSr98D48/7.jpg",
    name: "Sarah Jenkins",
    designation: "Varsity Goalkeeper",
    rating: 5,
    text: "Finding specialized goalkeeper coaching is rare, but Kicken delivers world-class mentorship. From reflex sharpening to mastering 1v1 situations, I&apos;ve gained the confidence needed to command my penalty area with authority.",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
        setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
        setIsAnimating(false);
    }, 300);
  };

  const { image, name, designation, text, rating } = testimonials[currentIndex];

  return (
    <section className="bg-[#D1EDFF] text-black py-[56px] md:py-[80px] lg:py-[100px] overflow-hidden">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Header --- */}
        <div className="mb-[48px] lg:mb-[64px]" data-aos="fade-up">
           <h3 className="text-blue-600 font-bold uppercase tracking-widest text-[14px] md:text-[16px] mb-2">
            Success Stories
          </h3>
          <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] text-gray-900">
            Hear From Our Future <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Football Icons
            </span>
          </h2>
        </div>

        {/* --- Slider Content Area --- */}
        <div className="relative bg-white rounded-3xl p-[24px] md:p-[48px] lg:p-[64px] shadow-xl border border-blue-100">
          
          <div className="absolute top-10 right-10 text-gray-100 text-[100px] md:text-[200px] leading-none -z-0 pointer-events-none">
            <FaQuoteLeft />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-[32px] lg:gap-[64px] items-center">
            
            {/* Left: Image Card */}
            <div className="lg:col-span-5 relative" data-aos="zoom-in">
              <div 
                className={`relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform ${isAnimating ? 'opacity-0 scale-95 translate-x-[-20px]' : 'opacity-100 scale-100 translate-x-0'}`}
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-light opacity-90">Kicken Elite Member</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
            </div>

            {/* Right: Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-[20px]' : 'opacity-100 translate-y-0'}`}>
                
                <div className="flex gap-1 text-yellow-400 text-xl mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>

                {/* Content in English with escaped quotes */}
                <p className="text-[18px] md:text-[22px] lg:text-[26px] leading-relaxed text-gray-700 italic font-medium mb-8">
                  &quot;{text}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{name}</h4>
                    <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">{designation}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-10">
                <button
                  onClick={handlePrev}
                  className="w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
                >
                  <FaChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-[50px] h-[50px] rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaChevronRight size={18} />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;