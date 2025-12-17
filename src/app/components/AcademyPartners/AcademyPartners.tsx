"use client";
import React from "react";
import Image from "next/image";

const PartnersSection: React.FC = () => {
  
  // Logos List
  const partners = [
    "https://w7.pngwing.com/pngs/140/543/png-transparent-logo-company-business-business-blue-angle-company.png",
    "https://w7.pngwing.com/pngs/847/621/png-transparent-magento-web-development-e-commerce-business-logo-magneto-angle-web-design-text.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePOX8IVfVFn8NqjpgUCMcTkNb51yEMdtVqxBFM4jJmvMlJjc4dMni8C_ypqBeAHSQmWo&usqp=CAU",
    "https://png.pngtree.com/png-vector/20231210/ourmid/pngtree-hexa-property-logo-vector-png-image_11196249.png",
    "https://seeklogo.com/images/B/business-company-logo-4A111D4E18-seeklogo.com.png",
    "https://icon2.cleanpng.com/20180405/cuq/avbe26qxd.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmrv5g8wIp0RatyCX62z5gSLIm3JbsWW0Vg&s",
    "https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg",
  ];

  return (
    <section className="bg-white text-black py-[56px] md:py-[80px] lg:py-[100px] border-t border-gray-100">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px] text-center">
        
        {/* --- Header --- */}
        <h2 className="font-extrabold text-[24px] md:text-[32px] lg:text-[40px] leading-[1.2] text-gray-900 mb-[48px] md:mb-[64px]">
          Academy Partners Who <br className="hidden md:block" />
          <span className="text-blue-600">Help Make It Possible.</span>
        </h2>

        {/* --- Infinite Marquee Slider --- */}
        <div className="relative w-full overflow-hidden group">
          
          {/* Left Gradient Mask (Modified to be subtle) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Gradient Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Sliding Container */}
          <div className="flex w-max animate-scroll gap-[40px] md:gap-[80px] hover:[animation-play-state:paused]">
            
            {/* List 1 */}
            {partners.map((src, index) => (
              // FIX: Removed 'grayscale' and 'opacity'. Added 'hover:scale-110' for slight pop.
              <div key={`p1-${index}`} className="relative w-[100px] h-[60px] md:w-[150px] md:h-[80px] cursor-pointer hover:scale-110 transition-transform duration-300">
                <Image
                  src={src}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                  unoptimized 
                />
              </div>
            ))}

            {/* List 2 (Duplicate for Seamless Loop) */}
            {partners.map((src, index) => (
              <div key={`p2-${index}`} className="relative w-[100px] h-[60px] md:w-[150px] md:h-[80px] cursor-pointer hover:scale-110 transition-transform duration-300">
                <Image
                  src={src}
                  alt={`Partner ${index + 1}`}
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
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;