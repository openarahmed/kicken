"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTicketAlt, FaLocationArrow, FaCalendarAlt, FaClock } from "react-icons/fa";

const MatchesPage = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "results">("upcoming");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const upcomingMatches = [
    {
      id: 1,
      tournament: "Elite Academy Cup",
      team1: "Kicken Elite",
      team1Logo: "https://i.postimg.cc/6TsPBSD3/Wolf_Head_Mascot-2.png",
      team2: "Northside United",
      team2Logo: "https://i.postimg.cc/9XvX4f2c/Frame-55.png",
      date: "Dec 25, 2025",
      time: "04:00 PM",
      venue: "Grand Central Stadium",
    },
    {
      id: 2,
      tournament: "U-18 Regional League",
      team1: "Kicken Juniors",
      team1Logo: "https://i.postimg.cc/xTMfLSjM/Group-53.png",
      team2: "Red Hawks FC",
      team2Logo: "https://i.postimg.cc/wjz6Vb7q/1-7898108.png",
      date: "Dec 28, 2025",
      time: "10:30 AM",
      venue: "West Side Arena",
    }
  ];

  const recentResults = [
    {
      id: 1,
      tournament: "National Youth Derby",
      team1: "Kicken Elite",
      team1Score: 3,
      team2: "Titan FC",
      team2Score: 1,
      status: "Won",
    },
    {
      id: 2,
      tournament: "City Challenge",
      team1: "Kicken Stars",
      team1Score: 0,
      team2: "Blue Phoenix",
      team2Score: 0,
      status: "Draw",
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* --- Section 1: Hero Header --- */}
      <section className="bg-[#050511] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4" data-aos="fade-right">
            The Championship Trail
          </h3>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8" data-aos="fade-right" data-aos-delay="100">
            Fixtures & <span className="text-blue-600">Results</span>
          </h1>
          
          {/* Tab Switcher */}
          <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
            <button 
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${activeTab === "upcoming" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-white/10 text-gray-400 hover:bg-white/20"}`}
            >
              Upcoming
            </button>
            <button 
              onClick={() => setActiveTab("results")}
              className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${activeTab === "results" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-white/10 text-gray-400 hover:bg-white/20"}`}
            >
              Results
            </button>
          </div>
        </div>
        <div className="absolute -bottom-10 right-0 opacity-5 select-none pointer-events-none">
          <h1 className="text-[20vw] font-black leading-none uppercase">Matches</h1>
        </div>
      </section>

      {/* --- Section 2: Matches Content --- */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-24">
          {activeTab === "upcoming" ? (
            <div className="grid grid-cols-1 gap-8">
              {upcomingMatches.map((match) => (
                <div key={match.id} className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-12 hover:shadow-2xl transition-all duration-500" data-aos="fade-up">
                  {/* Match Info */}
                  <div className="text-center lg:text-left">
                    <span className="bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block">
                      {match.tournament}
                    </span>
                    <div className="flex items-center gap-4 text-gray-500 font-bold text-sm uppercase mt-2">
                       <FaCalendarAlt /> {match.date} <span className="text-gray-200">|</span> <FaClock /> {match.time}
                    </div>
                  </div>

                  {/* Versus Area */}
                  <div className="flex items-center gap-6 md:gap-12">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative w-20 h-20 md:w-32 md:h-32">
                        <Image src={match.team1Logo} alt={match.team1} fill className="object-contain" />
                      </div>
                      <span className="font-black uppercase text-sm md:text-xl text-gray-900 tracking-tighter">{match.team1}</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black italic text-gray-200 uppercase">VS</h2>
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative w-20 h-20 md:w-32 md:h-32">
                        <Image src={match.team2Logo} alt={match.team2} fill className="object-contain" />
                      </div>
                      <span className="font-black uppercase text-sm md:text-xl text-gray-900 tracking-tighter">{match.team2}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-4">
                    <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-black transition-all shadow-lg">
                      <FaTicketAlt /> Get Ticket
                    </button>
                    <button className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
                      <FaLocationArrow /> Venue Info
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Results Layout */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentResults.map((result) => (
                <div key={result.id} className="bg-white border border-gray-100 p-10 rounded-[40px] shadow-xl relative overflow-hidden group" data-aos="zoom-in">
                  <div className="absolute top-0 right-0 p-6">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full ${result.status === "Won" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"}`}>
                      {result.status}
                    </span>
                  </div>
                  <h4 className="text-blue-600 font-bold text-xs uppercase mb-6">{result.tournament}</h4>
                  <div className="flex justify-between items-center">
                    <div className="text-center flex-1">
                       <h3 className="font-black uppercase text-lg mb-2">{result.team1}</h3>
                       <div className="text-5xl font-black text-gray-900">{result.team1Score}</div>
                    </div>
                    <div className="text-2xl font-black text-gray-200 italic px-4">FINAL</div>
                    <div className="text-center flex-1">
                       <h3 className="font-black uppercase text-lg mb-2">{result.team2}</h3>
                       <div className="text-5xl font-black text-gray-900">{result.team2Score}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- Section 3: League Standings --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black uppercase text-gray-900">League <span className="text-blue-600">Standings</span></h2>
             <p className="text-gray-500 mt-4">Tracking our progress in the Kicken Regional Championship.</p>
          </div>
          
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 overflow-x-auto">
             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="bg-[#050511] text-white">
                      <th className="p-8 font-black uppercase text-xs tracking-widest">Rank</th>
                      <th className="p-8 font-black uppercase text-xs tracking-widest">Club</th>
                      <th className="p-8 font-black uppercase text-xs tracking-widest">Played</th>
                      <th className="p-8 font-black uppercase text-xs tracking-widest">W/D/L</th>
                      <th className="p-8 font-black uppercase text-xs tracking-widest">Points</th>
                   </tr>
                </thead>
                <tbody className="text-gray-700">
                   {[
                      { rank: 1, club: "Kicken Elite", p: 12, wdl: "10/1/1", pts: 31, active: true },
                      { rank: 2, club: "Northside United", p: 12, wdl: "9/2/1", pts: 29, active: false },
                      { rank: 3, club: "Titan FC", p: 12, wdl: "7/3/2", pts: 24, active: false },
                      { rank: 4, club: "Blue Phoenix", p: 12, wdl: "6/2/4", pts: 20, active: false },
                   ].map((row, i) => (
                      <tr key={i} className={`border-b border-gray-50 hover:bg-blue-50/50 transition-colors ${row.active ? "bg-blue-50/80" : ""}`}>
                         <td className="p-8 font-black text-xl">{row.rank}</td>
                         <td className="p-8 font-bold text-gray-900">{row.club} {row.active && <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded ml-2 uppercase">Our Academy</span>}</td>
                         <td className="p-8">{row.p}</td>
                         <td className="p-8">{row.wdl}</td>
                         <td className="p-8 font-black text-blue-600 text-xl">{row.pts}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MatchesPage;