'use client'
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative w-full py-20 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm font-semibold text-gray-400 uppercase tracking-wider"
          >
            The Origin
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            From Diagnosis to Design
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg leading-relaxed mb-8"
          >
            Our journey began with a personal diagnosis, sparking a mission to redesign how we approach human development. We've built this initiative on a foundation of lived experience and scientific rigor.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="px-6 py-3 bg-white border-black border text-black rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Read the Full Story
          </motion.button>
        </div>
        
        {/* Right Boxes */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-black border-opacity-20 hover:border-opacity-40 transition-all duration-300"
          >
            <div className="text-2xl mb-4">❤️</div>
            <h3 className="text-xl font-bold mb-3">Personal Motivation</h3>
            <p className="text-gray-500">Driven by a deep, personal understanding of the challenges and opportunities.</p>
          </motion.div>
          
          {/* Box 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-black border-opacity-20 hover:border-opacity-40 transition-all duration-300"
          >
            <div className="text-2xl mb-4">🧪</div>
            <h3 className="text-xl font-bold mb-3">Scientific Inquiry</h3>
            <p className="text-gray-500">Grounded in the latest research in neuroscience, psychology, and technology.</p>
          </motion.div>
          
          {/* Box 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-black border-opacity-20 hover:border-opacity-40 transition-all duration-300 md:col-span-2"
          >
            <div className="text-2xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-3">Human-Centered Design</h3>
            <p className="text-gray-500">Focused on creating practical, effective tools that honor the individual.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
