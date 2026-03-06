'use client';
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative w-full py-20 px-6 bg-white text-black">
      {/* Content */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          The Why: A Crisis of Understanding
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
        >
          Society is facing a profound challenge in understanding diverse neurological landscapes. This section explores the depth of this crisis and the urgent need for a new approach to empathy and connection.
        </motion.p>
      </div>
    </div>
  );
}
