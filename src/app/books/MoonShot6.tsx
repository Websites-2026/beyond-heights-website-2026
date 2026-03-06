"use client";
import { motion } from "framer-motion";
import {IMAGES} from "../../constants/images"

export default function LeadershipSection() {
  return (
    <section className="relative w-full min-h-screen bg-white text-black flex flex-col items-center justify-center py-24 px-6">
      <div className="max-w-6xl w-full text-center mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4"
        >
          The Team
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 leading-tight"
        >
          The Leadership
        </motion.h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          {[
            {
              name: "Ranjani Venkatraman",
              title: "Co-Founder & Co-CEO",
              img:IMAGES.person1Image,
              delay: 0.3,
            },
            {
              name: "Ranghan Venkatraman",
              title: "Co-Founder & Co-CEO",
              img:IMAGES.person2Image,
              delay: 0.4,
            },
            {
              name: "Dhanish Valliyannan",
              title: "Neuroscientists, ethicists, and educators",
              img:IMAGES.person3Image,
              delay: 0.5,
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: member.delay }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border border-black border-opacity-10 shadow-[0_10px_20px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-300 ease-out">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
