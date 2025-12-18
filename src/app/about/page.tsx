"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFutbol, FaUsers, FaMedal, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const coreValues = [
    {
      icon: <FaFutbol />,
      title: "Technical Precision",
      desc: "We focus on the fine details of ball mastery and mechanical excellence.",
    },
    {
      icon: <FaUsers />,
      title: "Collective Unity",
      desc: "Football is a team sport; we forge bonds that translate into on-field chemistry.",
    },
    {
      icon: <FaMedal />,
      title: "Elite Discipline",
      desc: "Success is a habit. We instill the work ethic required for professional ranks.",
    },
    {
      icon: <FaChartLine />,
      title: "Tactical Growth",
      desc: "We develop the player&apos;s mind to read the game three steps ahead.",
    },
  ];

  return (
    <main className="bg-white">
      {/* --- Section 1: About Hero --- */}
      <section className="relative bg-[#050511] py-[80px] md:py-[120px] lg:py-[160px] text-white">
        <div className="container mx-auto px-6 lg:px-24 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-6" data-aos="zoom-in">
            Defining The <span className="text-blue-500">Next Era</span> Of Football
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
            Kicken Academy is more than a training ground. It&apos;s a high-performance ecosystem designed to forge elite athletes.
          </p>
        </div>
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
           <h1 className="text-[20vw] font-black text-white/5 absolute -bottom-10 left-0 leading-none">IDENTITY</h1>
        </div>
      </section>

      {/* --- Section 2: The Philosophy (Bento Style) --- */}
      <section className="py-[56px] md:py-[80px] lg:py-[128px]">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Methodology</h3>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Where Science Meets <br /> The Beautiful Game
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Founded by a collective of professional scouts and UEFA-licensed coaches, Kicken Academy fills the gap between local talent and global professional standards. We utilize data-driven performance tracking combined with traditional grit to develop players who are ready for the world stage.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <h4 className="font-bold text-gray-900 text-xl">100% Pro Focus</h4>
                    <p className="text-gray-500 text-sm">Every drill is designed for match-day impact.</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-900 text-xl">Global Network</h4>
                    <p className="text-gray-500 text-sm">Strategic links to clubs across Europe and Asia.</p>
                 </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl" data-aos="fade-left">
              <Image 
                src="https://i.postimg.cc/13MZKmkf/Our_Common_Goals.jpg" 
                alt="Academy training session" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Core Values Grid --- */}
      <section className="bg-gray-50 py-[56px] md:py-[80px] lg:py-[100px]">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase">The Kicken <span className="text-blue-600">DNA</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="text-4xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Meet the Strategists (Coaching Staff) --- */}
      <section className="py-[56px] md:py-[80px] lg:py-[128px]">
        <div className="container mx-auto px-6 lg:px-24">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-xl">
                 <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Expert Leadership</h3>
                 <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase">The Minds Behind <br /> The Players</h2>
              </div>
              <p className="text-gray-500 max-w-sm">Our coaching staff consists of former professionals and specialists dedicated to your development.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Marcus Sterling", role: "Head of Youth Development", img: "https://i.postimg.cc/6qv5TDS6/1.jpg" },
                { name: "Elena Rodriguez", role: "Technical Director", img: "https://i.postimg.cc/0ydjY1Nb/5.jpg" },
                { name: "David Vance", role: "Strength & Conditioning", img: "https://i.postimg.cc/YSr98D48/7.jpg" }
              ].map((staff, idx) => (
                <div key={idx} className="group cursor-pointer" data-aos="fade-up" data-aos-delay={idx * 150}>
                   <div className="relative h-[450px] w-full rounded-2xl overflow-hidden mb-6">
                      <Image src={staff.img} alt={staff.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   </div>
                   <h4 className="text-2xl font-bold text-gray-900 mb-1">{staff.name}</h4>
                   <p className="text-blue-600 font-semibold uppercase text-xs tracking-widest">{staff.role}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;