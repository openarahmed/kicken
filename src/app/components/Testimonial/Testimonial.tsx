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
    name: "Andrew Garfield",
    designation: "Senior Striker",
    rating: 5,
    text: "The training regime at Kicken is unlike anything I've experienced. The coaches don't just teach you how to play; they teach you how to think like a champion. It transformed my game completely.",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/0ydjY1Nb/5.jpg",
    name: "John Doe",
    designation: "Midfielder",
    rating: 5,
    text: "Joining this academy was the best decision for my career. The facilities are world-class, and the community is incredibly supportive. I've learned discipline, teamwork, and strategy here.",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/YSr98D48/7.jpg",
    name: "Malaika Arora",
    designation: "Goalkeeper",
    rating: 4,
    text: "As a goalkeeper, I needed specialized training, and Kicken delivered. The mentors are patient and highly skilled. They helped me improve my reflexes and confidence on the field.",
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
    }, 300); // Wait for exit animation
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
    // Same Light Blue Background as Hero Top to maintain consistency
    <section className="bg-[#D1EDFF] text-black py-[56px] md:py-[80px] lg:py-[100px] overflow-hidden">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Header --- */}
        <div className="mb-[48px] lg:mb-[64px]" data-aos="fade-up">
           <h3 className="text-blue-600 font-bold uppercase tracking-widest text-[14px] md:text-[16px] mb-2">
            Testimonials
          </h3>
          <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] text-gray-900">
            Hear From Our Stars At <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Kicken Academy
            </span>
          </h2>
        </div>

        {/* --- Slider Content Area --- */}
        <div className="relative bg-white rounded-3xl p-[24px] md:p-[48px] lg:p-[64px] shadow-xl border border-blue-100">
          
          {/* Decorative Giant Quote Icon (Watermark) */}
          <div className="absolute top-10 right-10 text-gray-100 text-[100px] md:text-[200px] leading-none -z-0 pointer-events-none">
            <FaQuoteLeft />
          </div>

          {/* Grid Layout */}
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
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Badge on Image */}
                <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-light opacity-90">Training since 2023</p>
                </div>
              </div>
              
              {/* Decorative blob behind image */}
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
            </div>

            {/* Right: Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Animation Wrapper for Text */}
              <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-[20px]' : 'opacity-100 translate-y-0'}`}>
                
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 text-xl mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[18px] md:text-[24px] lg:text-[28px] leading-relaxed text-gray-700 italic font-medium mb-8">
                  "{text}"
                </p>

                {/* Author Info */}
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