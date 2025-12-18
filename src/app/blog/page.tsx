"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
// All imports are now strictly used
import { FaCalendarAlt, FaUser, FaArrowRight, FaSearch } from "react-icons/fa";

const allPosts = [
  {
    id: 1,
    category: "Tactical",
    title: "The 12-Yard Psychology: Mastering Elite Penalty Techniques",
    excerpt: "Learn how top-tier professionals manage cognitive load and utilize advanced biomechanics.",
    date: "Dec 15, 2025",
    author: "Marcus Sterling",
    image: "https://i.postimg.cc/13MZKmkf/Our_Common_Goals.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "Nutrition",
    title: "90-Minute Stamina: Fueling for High-Intensity Matchdays",
    excerpt: "A deep dive into glycogen loading and hydration strategies used by academy prospects.",
    date: "Dec 12, 2025",
    author: "Dr. Sarah Chen",
    image: "https://i.postimg.cc/zvMyvwk9/foooooooooot_bal_1.png",
    featured: false,
  },
  {
    id: 3,
    category: "Recovery",
    title: "The Recovery Revolution: Pro-Level Injury Prevention",
    excerpt: "Explore the active mobility protocols and sports science behind muscle tissue repair.",
    date: "Dec 10, 2025",
    author: "David Vance",
    image: "https://i.postimg.cc/XJBS3wpc/about_us_6.jpg",
    featured: false,
  },
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const featuredPost = allPosts.find((post) => post.featured);
  
  const filteredPosts = allPosts
    .filter((post) => !post.featured)
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <main className="bg-white min-h-screen">
      {/* --- Header Section --- */}
      <section className="bg-[#050511] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
              The Kicken Journal
            </h3>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
              The Pitch <span className="text-blue-600">Insight</span>
            </h1>
            
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 backdrop-blur-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Featured Section --- */}
      {!searchQuery && featuredPost && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-24">
            <Link href={`/blog/${featuredPost.id}`} className="group">
              <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
                <div className="w-full lg:w-3/5 relative h-[300px] lg:h-[500px]">
                  <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                  {/* FIXED: Rendering FaCalendarAlt and FaUser here */}
                  <div className="flex items-center gap-4 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                    <FaCalendarAlt /> <span>{featuredPost.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <FaUser /> <span>{featuredPost.author}</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-8 line-clamp-3">{featuredPost.excerpt}</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* --- Grid Posts Section --- */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative h-[280px] rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-blue-600">
                    {post.category}
                  </div>
                </div>

                {/* FIXED: Rendering FaCalendarAlt and FaUser here */}
                <div className="flex items-center gap-3 text-gray-400 text-[10px] font-bold mb-4 uppercase tracking-widest">
                  <FaCalendarAlt className="text-blue-500" />
                  <span>{post.date}</span>
                  <span className="text-gray-200">|</span>
                  <FaUser className="text-blue-500" />
                  <span>{post.author}</span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 font-black text-xs uppercase text-gray-900 group-hover:text-blue-600 transition-all">
                  Read Full Report <FaArrowRight className="text-[10px]" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;