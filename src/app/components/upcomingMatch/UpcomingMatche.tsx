"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Match Data Interface
interface Match {
  id: number;
  team1: string;
  team1Logo: string;
  team2: string;
  team2Logo: string;
  date: string;
  aosDelay: string;
}

// Data Array
const matches: Match[] = [
  {
    id: 1,
    team1: "Sumper",
    team1Logo: "https://i.postimg.cc/6TsPBSD3/Wolf_Head_Mascot-2.png",
    team2: "Tigerhown",
    team2Logo: "https://i.postimg.cc/9XvX4f2c/Frame-55.png",
    date: "September 20, 2025, 1:00 PM",
    aosDelay: "0",
  },
  {
    id: 2,
    team1: "Hustlin Owls",
    team1Logo: "https://i.postimg.cc/xTMfLSjM/Group-53.png",
    team2: "Zumper",
    team2Logo: "https://i.postimg.cc/9XvX4f2c/Frame-55.png",
    date: "September 23, 2025, 1:00 PM",
    aosDelay: "100",
  },
  {
    id: 3,
    team1: "Zumper",
    team1Logo: "https://i.postimg.cc/wjz6Vb7q/1-7898108.png",
    team2: "Cobraxx",
    team2Logo: "https://i.postimg.cc/xTMfLSjM/Group-53.png",
    date: "September 25, 2025, 1:00 PM",
    aosDelay: "200",
  },
];

const UpcomingMatches: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section 
      // Rule #5: Section Vertical Spacing (Mobile: 56px, Tablet: 80px, Desktop: 128px)
      className="bg-gray-50 text-black overflow-hidden py-[56px] md:py-[80px] lg:py-[128px]"
    >
      {/* Rule #6: Horizontal Container Padding (Mobile: 20px, Tablet: 32px, Desktop: 64px) */}
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Section Title --- */}
        {/* Rule #4: Internal Spacing (Title -> Content) */}
        <div className="text-center mb-[32px] md:mb-[48px] lg:mb-[64px]" data-aos="fade-up">
          {/* Rule #3: Typography Scale (Mobile: 36px, Tablet: 48px, Desktop: 72px) */}
          <h2 className="font-extrabold uppercase tracking-tight leading-[1.1] mb-4 text-[36px] md:text-[48px] lg:text-[72px]">
            Upcoming Big <span className="text-blue-600">Matches</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* --- Featured Big Match (Black Box) --- */}
        <div
          data-aos="zoom-in"
          className="relative bg-[#111] text-white rounded-2xl shadow-2xl overflow-hidden border border-gray-800
                     mb-[32px] md:mb-[48px] lg:mb-[64px]
                     p-[24px] md:p-[40px] lg:p-[56px]"
        >
          {/* Background Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 z-0 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-center gap-8 md:gap-0">
            
            {/* Team 1 */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] relative hover:scale-110 transition-transform duration-300">
                <Image
                  src="https://i.postimg.cc/3RRV12g9/wolves-socer-esport-logo-transparant-1.png"
                  alt="Wolves Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Subtitle Scale: Desktop 24px */}
              <span className="font-bold tracking-widest uppercase text-[18px] md:text-[20px] lg:text-[24px]">
                WOLVES
              </span>
            </div>

            {/* VS Badge */}
            <div className="flex flex-col items-center justify-center px-8">
              <h1 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic text-[48px] md:text-[64px] lg:text-[80px] leading-none">
                VS
              </h1>
              <p className="text-gray-400 mt-2 font-medium text-[15px] md:text-[16px] lg:text-[18px]">
                September 15, 2025
              </p>
              <p className="text-gray-500 text-sm">1:00 PM</p>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] relative hover:scale-110 transition-transform duration-300">
                <Image
                  src="https://i.postimg.cc/Y9sVsjR1/Group-52.png"
                  alt="Kyuryu Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold tracking-widest uppercase text-[18px] md:text-[20px] lg:text-[24px]">
                KYURYU
              </span>
            </div>
          </div>
        </div>

        {/* --- Action Buttons --- */}
        {/* Spacing Description -> CTA */}
        <div data-aos="fade-up" className="text-center mb-[48px] md:mb-[64px] lg:mb-[96px]">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="px-8 py-3 border-2 border-black rounded-lg text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide text-[15px] md:text-[16px]">
              More Info
            </button>
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-blue-500/30 text-[15px] md:text-[16px]">
              Location Map
            </button>
            <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-red-500/30 text-[15px] md:text-[16px]">
              Buy Ticket
            </button>
          </div>
        </div>

        {/* --- Other Upcoming Matches Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[32px]">
          {matches.map((match) => (
            <div
              key={match.id}
              data-aos="fade-up"
              data-aos-delay={match.aosDelay}
              className="bg-white p-[24px] md:p-[32px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              {/* Decorative Background Blob */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex justify-center items-center gap-6 mb-6">
                  {/* Team 1 Small */}
                  <div className="w-16 h-16 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={match.team1Logo}
                      alt={match.team1}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <span className="text-2xl font-black text-blue-600 italic">VS</span>
                  
                  {/* Team 2 Small */}
                  <div className="w-16 h-16 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={match.team2Logo}
                      alt={match.team2}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-[18px] md:text-[20px]">
                    {match.team1} <span className="text-gray-400 font-light">vs</span> {match.team2}
                  </h4>
                  <p className="text-gray-500 text-sm mb-6">{match.date}</p>
                  
                  <button className="w-full py-3 rounded bg-blue-50 text-blue-600 font-bold hover:bg-red-600 hover:text-white transition-all duration-300 text-[15px]">
                    Get Ticket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpcomingMatches;