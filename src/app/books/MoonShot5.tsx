"use client";
import { motion } from "framer-motion";

export default function MoonShot2() {
  return (
    <section className="relative w-full min-h-screen bg-white text-black flex flex-col items-center justify-center py-24 px-6">
      <div className="max-w-6xl w-full text-center mx-auto">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4"
        >
          The Framework
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
        >
          The 360° Human Development Framework
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16"
        >
          Our proprietary framework integrates three critical layers to foster holistic
          development and deeper human understanding.
        </motion.p>

        {/* Three Layers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Shared Style */}
          {[
            {
              title: "Tech Layer",
              desc: "Wearable sensors and AI-powered platforms to gather objective data and provide real-time feedback.",
              icon: (
                <path d="M18 4H6v2h12V4zm-2 6H8v6h8v-6z" />
              ),
            },
            {
              title: "Coaching Layer",
              desc: "Personalized guidance from trained experts to translate data into actionable strategies for growth.",
              icon: (
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 
                4v2h16v-2c0-2.66-5.33-4-8-4z" />
              ),
            },
            {
              title: "Environment Layer",
              desc: "Tools and training for families, educators, and employers to create supportive, empathetic ecosystems.",
              icon: (
                <path d="M19 5H5c-1.1 0-2 .9-2 
                2v10c0 1.1.9 2 2 2h14c1.1 
                0 2-.9 2-2V7c0-1.1-.9-2-2-2zM9 
                17H7v-7h2v7zm6 0h-2v-4h2v4zm6 
                0h-2v-5h2v5z" />
              ),
            },
          ].map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white text-black rounded-2xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-black bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="text-black"
                  viewBox="0 0 24 24"
                >
                  {box.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{box.title}</h3>
              <p className="text-gray-400 leading-relaxed">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
