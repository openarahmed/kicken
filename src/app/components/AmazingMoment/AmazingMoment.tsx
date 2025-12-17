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
      src: "https://i.postimg.cc/52sZCPzN/Gallery_2_1.jpg", // Old 1
      alt: "Amazing Moment Highlight 1",
      className: "md:col-span-2", // Row 1: 1/3 width
      delay: "0",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/wvmPngGZ/Gallery_1_1.jpg", // Old 2
      alt: "Amazing Moment Highlight 2",
      className: "md:col-span-2", // Row 1: 1/3 width
      delay: "100",
    },
    {
      id: 3,
      src: "https://i.postimg.cc/13MZKmkf/Our_Common_Goals.jpg", // NEW 1
      alt: "Amazing Moment Highlight 3",
      className: "md:col-span-2", // Row 1: 1/3 width
      delay: "200",
    },
    {
      id: 4,
      src: "https://i.postimg.cc/fLm2B5V9/Gallery_3.jpg", // NEW 2
      alt: "Amazing Moment Highlight 4",
      className: "md:col-span-3", // Row 2: 1/2 width (Wide)
      delay: "300",
    },
    {
      id: 5,
      src: "https://i.postimg.cc/y8pbdDqP/Gallery_4.jpg", // NEW 3
      alt: "Amazing Moment Highlight 5",
      className: "md:col-span-3", // Row 2: 1/2 width (Wide)
      delay: "400",
    },
  ];

  return (
    <section className="bg-white text-black py-[56px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px] text-center">
        
        {/* --- Section Header --- */}
        <div className="max-w-3xl mx-auto mb-[48px] md:mb-[64px]" data-aos="fade-up">
          <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] mb-6 text-gray-900">
            Amazing <span className="text-blue-600">Moments</span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed">
            Relive the passion, the victories, and the unforgettable memories created on the field. 
            Every snapshot tells a story of dedication and teamwork.
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Moment
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