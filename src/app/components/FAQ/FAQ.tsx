"use client";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Content Update: Professional and Build-Safe (escaped entities)
  const faqs = [
    {
      question: "What is the enrollment process for Kicken Academy?",
      answer:
        "Enrollment begins with an online registration followed by a mandatory trial session. Our scouting team evaluates the player&apos;s current technical level and physical attributes to place them in a development squad that best suits their growth potential.",
    },
    {
      question: "Which age categories do you cater to?",
      answer:
        "Our pro-pathway programs start from U-8 (Foundation) and extend up to U-21 (Elite Development). We also host specialized training for senior players looking to refine their tactical awareness before professional club trials.",
    },
    {
      question: "Does the academy provide pathways to professional clubs?",
      answer:
        "Absolutely. Kicken Academy maintains strategic partnerships with top-tier domestic and international clubs. High-performing athletes are regularly invited to private showcases and may be recommended for direct trials with professional scouts.",
    },
    {
      question: "What makes Kicken&apos;s training facilities world-class?",
      answer:
        "We offer a high-performance environment featuring FIFA-accredited turf pitches, an advanced sports science lab, a specialized strength and conditioning center, and digital video analysis suites for in-depth tactical reviews.",
    },
    {
      question: "Are there financial aid or scholarship opportunities?",
      answer:
        "We believe that financial constraints shouldn&apos;t hinder world-class talent. Kicken Academy offers a limited number of merit-based scholarships annually for exceptionally gifted players who demonstrate elite potential and a professional work ethic.",
    },
  ];

  return (
    <section className="bg-white text-black py-[56px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Header --- */}
        <div className="max-w-4xl mx-auto text-center mb-[48px] md:mb-[64px]" data-aos="fade-up">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-[14px] md:text-[16px] mb-2">
            Academy Intelligence
          </h3>
          <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Find answers to common inquiries regarding our pro-pathway enrollment, elite facilities, and scouting opportunities.
          </p>
        </div>

        {/* --- FAQ Accordion --- */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 last:border-none"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                className={`w-full flex justify-between items-center py-[24px] text-left transition-colors duration-300 group ${
                  openFAQ === index ? "text-blue-600" : "text-gray-900 hover:text-blue-500"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[18px] md:text-[20px] font-bold pr-8">
                  {faq.question}
                </span>
                
                <span className={`transform transition-transform duration-300 ${openFAQ === index ? "rotate-180" : "rotate-0"}`}>
                  <FaChevronDown className="text-sm" />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? "max-h-[300px] opacity-100 pb-[24px]" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;