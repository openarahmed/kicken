"use client";
import Link from "next/link";
import Image from "next/image"; // IMPORTED IMAGE
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Matches", href: "/matches" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 !border-none !outline-none !shadow-none ${
        scrolled
          ? "bg-[#D1EDFF]/90 backdrop-blur-md py-3" 
          : "bg-[#D1EDFF] py-4" 
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* FIXED: Replaced <img> with Next.js <Image /> */}
          <div className="relative h-10 w-32"> {/* Added a wrapper for sizing */}
            <Image
              src="https://i.postimg.cc/KcNDDNCP/Group-1000004290.png"
              alt="Brand Logo"
              fill
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-pink-600 font-semibold"
                  : "text-gray-700 hover:text-pink-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/join"
            className="bg-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-pink-500/30 hover:bg-pink-700 hover:shadow-pink-500/50 transition-all transform hover:-translate-y-0.5"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-pink-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()} 
          className={`absolute right-0 top-0 h-full w-3/4 max-w-xs bg-[#D1EDFF] shadow-none border-none transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-gray-800">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium ${
                    pathname === link.href ? "text-pink-600" : "text-gray-800 hover:text-pink-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <Link
                href="/join"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;