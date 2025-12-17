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

  // Updated Content to match Football Academy Theme
  const faqs = [
    {
      question: "How do I join the Kicken Football Academy?",
      answer:
        "Joining is simple! You can register online through our 'Join Now' page or visit our academy for a trial session. We assess players based on their skill level and assign them to the appropriate age group and training module.",
    },
    {
      question: "What age groups do you provide training for?",
      answer:
        "We offer training programs for various age groups, starting from U-10 (Under 10) up to U-21. We also have specialized senior leagues and professional development programs for advanced players looking to go pro.",
    },
    {
      question: "Do you offer professional scouting opportunities?",
      answer:
        "Yes! We have partnerships with several national and international clubs. Our top-performing players are regularly scouted for trials and professional contracts. We also host annual showcase tournaments attended by club scouts.",
    },
    {
      question: "What kind of facilities does the academy have?",
      answer:
        "We pride ourselves on world-class facilities, including FIFA-standard turf grounds, a fully equipped gym, physiotherapy center, and video analysis rooms to help players understand the tactical side of the game.",
    },
    {
      question: "Are there scholarship programs available?",
      answer:
        "Absolutely. We believe talent shouldn't be limited by finances. We offer merit-based scholarships for exceptionally talented players who demonstrate dedication and potential but need financial assistance.",
    },
  ];

  return (
    // Spacing: Mobile 56px, Tablet 80px, Desktop 100px
    <section className="bg-white text-black py-[56px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px]">
        
        {/* --- Header --- */}
        <div className="max-w-4xl mx-auto text-center mb-[48px] md:mb-[64px]" data-aos="fade-up">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-[14px] md:text-[16px] mb-2">
            Common Questions
          </h3>
          <h2 className="font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our training, leagues, and how we help you become a champion.
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
                
                {/* Rotating Icon */}
                <span className={`transform transition-transform duration-300 ${openFAQ === index ? "rotate-180" : "rotate-0"}`}>
                  <FaChevronDown className="text-sm" />
                </span>
              </button>

              {/* Answer Body */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? "max-h-[200px] opacity-100 pb-[24px]" : "max-h-0 opacity-0"
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