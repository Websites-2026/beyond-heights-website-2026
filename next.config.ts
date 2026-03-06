import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.pinimg.com" },        // Pinterest (your URL)
      { protocol: "https", hostname: "images.unsplash.com" }, // optional, for future
      { protocol: "https", hostname: "ryzfriykqluohxvulezu.supabase.co" },
    ],
  },
};

export default nextConfig;