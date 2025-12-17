import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["template-kit.evonicmedia.com", "i.postimg.cc"], // Tomar image source gulo ekhane add kore dilam
    unoptimized: true, // <--- Etai main fix static export er jonno
  },
  output: "export",
};

export default nextConfig;