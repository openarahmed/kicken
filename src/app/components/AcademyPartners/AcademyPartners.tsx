"use client";
import React from "react";
import Image from "next/image";

const PartnersSection: React.FC = () => {
  
  // Logos List - Content Update: Professional Sports & Health Brands
  const partners = [
    { name: "Nike Football", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
    { name: "Adidas Performance", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
    { name: "Gatorade Sports", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Gatorade_logo.svg/1200px-Gatorade_logo.svg.png" },
    { name: "Puma Sports", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Puma_AG_Logo.svg/1200px-Puma_AG_Logo.svg.png" },
    { name: "Red Bull", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Red_Bull_Logo.svg/1200px-Red_Bull_Logo.svg.png" },
    { name: "Under Armour", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_Armour_logo.svg/1200px-Under_Armour_logo.svg.png" },
    { name: "Castrol Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Castrol_logo.svg/2560px-Castrol_logo.svg.png" },
    { name: "EA Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic_Arts_logo.svg/1200px-Electronic_Arts_logo.svg.png" },
  ];

  return (
    <section className="bg-white text-black py-[56px] md:py-[80px] lg:py-[100px] border-t border-gray-100">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px] text-center">
        
        {/* --- Header Update --- */}
        <h2 className="font-extrabold text-[24px] md:text-[32px] lg:text-[40px] leading-[1.2] text-gray-900 mb-[16px]">
          Strategic Partners in <span className="text-blue-600">Athlete Excellence.</span>
        </h2>
        <p className="text-gray-500 mb-[48px] md:mb-[64px] max-w-2xl mx-auto text-sm md:text-base">
          We collaborate with the world&apos;s leading sports brands and healthcare organizations to provide 
          our players with elite equipment and professional support.
        </p>

        {/* --- Infinite Marquee Slider --- */}
        <div className="relative w-full overflow-hidden group">
          
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Sliding Container */}
          <div className="flex w-max animate-scroll gap-[40px] md:gap-[80px] hover:[animation-play-state:paused]">
            
            {/* List 1 */}
            {partners.map((partner, index) => (
              <div key={`p1-${index}`} className="relative w-[100px] h-[60px] md:w-[150px] md:h-[80px] cursor-pointer hover:scale-110 transition-transform duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  unoptimized 
                />
              </div>
            ))}

            {/* List 2 (Loop) */}
            {partners.map((partner, index) => (
              <div key={`p2-${index}`} className="relative w-[100px] h-[60px] md:w-[150px] md:h-[80px] cursor-pointer hover:scale-110 transition-transform duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
            
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;