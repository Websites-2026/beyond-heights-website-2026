'use client';
import { motion } from "framer-motion";
import {IMAGES} from "../../constants/images"

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6) contrast(1.2)' }}
        >
          <source src={IMAGES.hero2video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex mt-[300px] flex-col items-center justify-center h-full px-6 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4"
        >
          The Science
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          Engineering Empathy
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
        >
          We employ a multi-disciplinary approach, blending cutting-edge neuroscience, data analytics, and machine learning to create a new paradigm for understanding the mind.
        </motion.p>
      </div>
    </div>
  );
}
