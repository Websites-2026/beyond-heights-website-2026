"use client";

import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-12 flex flex-col bg-white text-black overflow-hidden">
      <FloatingHeader theme="light" />
      
      <div className="flex-1 mx-auto max-w-7xl px-6 w-full mt-12 lg:mt-20 mb-32 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex px-4 py-2 rounded-full bg-black/5 text-sm font-semibold tracking-wide text-black/80 mb-6">
            Get In Touch
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Let's <span className="text-black/30">Connect</span>
          </h1>
          <p className="text-lg text-black/60 leading-relaxed font-medium">
            Have questions or want to learn more about Beyond Heights? We'd love to hear from you. Reach out to us using the details below or send us a message directly.
          </p>
        </div>

        {/* Content Section: Grid Layout */}
        <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Information */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
            {/* Info Card 1: Address */}
            <div className="group flex items-start p-6 rounded-2xl bg-black/5 hover:bg-black/10 transition-colors duration-300">
              <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-bold mb-2">Office Location</h3>
                <p className="text-base text-black/70 leading-relaxed">
                  F2, ATTI VILLAS, KS GARDEN, <br />
                  VADAVALLI, EDAYARPALAYAM ROAD, <br />
                  COIMBATORE, Tamil Nadu - 641041
                </p>
              </div>
            </div>

            {/* Info Card 2: Email */}
            <div className="group flex items-start p-6 rounded-2xl bg-black/5 hover:bg-black/10 transition-colors duration-300">
              <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <a href="mailto:finance@kyureeus.com" className="text-base text-black/70 hover:text-black transition-colors">
                  info@beyondheights.com
                </a>
              </div>
            </div>

            {/* Info Card 3: Phone */}
            <div className="group flex items-start p-6 rounded-2xl bg-black/5 hover:bg-black/10 transition-colors duration-300">
              <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <div className="flex flex-col space-y-2">
                  <a href="tel:+918825979730" className="text-base text-black/70 hover:text-black transition-colors">
                    +91 95971 95741
                  </a>
                  <a href="tel:+919751507693" className="text-base text-black/70 hover:text-black transition-colors">
                    +91 97515 07693
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-[2.5rem] transform rotate-2"></div>
            <div className="relative bg-white shadow-2xl border border-black/5 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-black/60 uppercase tracking-wider">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full bg-black/5 border-none rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-black/30" />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-black/60 uppercase tracking-wider">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" className="w-full bg-black/5 border-none rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-black/30" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-black/60 uppercase tracking-wider">Your Message</label>
                  <textarea id="message" rows={4} placeholder="How can we help you?" className="w-full bg-black/5 border-none rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-black/30 min-h-[120px] resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-black text-white hover:bg-black/80 rounded-xl px-6 py-4 text-base font-bold transition-colors duration-300 mt-2 flex justify-center items-center group">
                  Send Message
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
            
            {/* Decorative blurs */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-60 h-60 bg-black/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
