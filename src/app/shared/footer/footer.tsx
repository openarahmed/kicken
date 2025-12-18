"use client";
import Link from "next/link";
import Image from "next/image"; // IMPORTED
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f0f9ff] text-gray-700 border-t border-blue-100">
      
      {/* --- Main Footer Content --- */}
      <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px] py-[56px] md:py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          
          {/* 1. Brand & About */}
          <div>
            <Link href="/" className="inline-block mb-6">
              {/* FIXED: Replaced <img> with Next.js <Image /> */}
              <Image
                src="https://i.postimg.cc/KcNDDNCP/Group-1000004290.png"
                alt="Kicken Logo"
                width={128} // Corresponds to w-32 (32 * 4px)
                height={40}  // Adjusted height for aspect ratio
                className="object-contain"
                priority={false}
              />
            </Link>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
              We are dedicated to nurturing the next generation of football stars through world-class training and mentorship.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Matches", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-blue-600 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-500 text-[15px]">
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600">Address:</span>
                123 Football Avenue, Sports City, NY 10012
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600">Email:</span>
                info@kicken.com
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600">Phone:</span>
                +1 (555) 123-4567
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-500 text-[15px] mb-4">
              Subscribe to get the latest updates and training tips.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-blue-200 text-gray-700 py-3 px-4 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-red-600 text-white w-10 rounded-md flex items-center justify-center hover:bg-red-700 transition-colors shadow-md"
              >
                <FaPaperPlane size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-blue-100 bg-[#e6f4ff]">
        <div className="container mx-auto px-[20px] md:px-[32px] lg:px-[64px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Kicken by Shakil. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-blue-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;