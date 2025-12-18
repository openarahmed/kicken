"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AmazingMomentsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // 5 Unique Images mapped to the grid
  const galleryImages = [
    {
      id: 1,
      src: "https://i.postimg.cc/52sZCPzN/Gallery_2_1.jpg",
      // Content Update: Specific Alt Text
      alt: "Kicken Academy Players Celebrating a Victory",
      className: "md:col-span-2",
      delay: "0",
      // Content Update: Hover Caption
      caption: "Championship Victory Celebration",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/wvmPngGZ/Gallery_1_1.jpg",
      // Content Update: Specific Alt Text
      alt: "Intense Training Session Drill",
      className: "md:col-span-2",
      delay: "100",
      // Content Update: Hover Caption
      caption: "High-Intensity Training Drill",
    },
    {
      id: 3,
      src: "https://i.postimg.cc/13MZKmkf/Our_Common_Goals.jpg",
      // Content Update: Specific Alt Text
      alt: "Coach Mentoring Young Players on the Pitch",
      className: "md:col-span-2",
      delay: "200",
      // Content Update: Hover Caption
      caption: "Mentorship & Tactical Guidance",
    },
    {
      id: 4,
      src: "https://i.postimg.cc/fLm2B5V9/Gallery_3.jpg",
      // Content Update: Specific Alt Text
      alt: "Team Huddle Before a Big Match",
      className: "md:col-span-3",
      delay: "300",
      // Content Update: Hover Caption
      caption: "Pre-Match Team Huddle",
    },
    {
      id: 5,
      src: "https://i.postimg.cc/y8pbdDqP/Gallery_4.jpg",
      // Content Update: Specific Alt Text
      alt: "Youth Player Scoring a Goal",
      className: "md:col-span-3",
      delay: "400",
      // Content Update: Hover Caption
      caption: "The Winning Goal Moment",
    },
  ];

  return (
    <section className="bg-white text-black py-[56px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px] text-center">
        
        {/* --- Section Header --- */}
        <div className="max-w-3xl mx-auto mb-[48px] md:mb-[64px]" data-aos="fade-up">
          {/* Content Update: Headline */}
          <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] mb-6 text-gray-900">
            Our Defining <span className="text-blue-600">Moments</span>
          </h2>
          {/* Content Update: Description */}
          <p className="text-gray-500 text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed">
            From the training ground to the final whistle, these are the snapshots of passion, 
            resilience, and triumph that define the Kicken Academy spirit.
          </p>
        </div>

        {/* --- Modern BENTO Grid Gallery --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[16px] md:gap-[24px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer ${image.className}`}
              data-aos="fade-up"
              data-aos-delay={image.delay}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                {/* Content Update: Displaying Specific Caption on Hover */}
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AmazingMomentsSection;