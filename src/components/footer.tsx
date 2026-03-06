import React from "react";
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Navigation Links */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12">
          <a href="#books" className="hover:text-gray-300 transition-colors">
            Books
          </a>
          <a href="#heroes" className="hover:text-gray-300 transition-colors">
            Heroes
          </a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">
            Contact
          </a>
          <a href="#email" className="hover:text-gray-300 transition-colors">
            Email
          </a>
        </div>
      </div>

      {/* Video Background */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* ✅ Use /video/... because public folder assets are served from root */}
          <source src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/beyond-heights/index%20page/video/RIthivik-Stock.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (optional for visibility) */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Social Media Icons */}
        <div className="absolute bottom-6 right-6 flex space-x-4 z-10">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}