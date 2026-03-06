import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images"

export default function StorySectionV3() {
  return (
    <section className="h-screen bg-white flex items-center px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <header className="mb-10 md:mb-14 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            When the World Speeds Up
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
            In a world chasing efficiency, our son became our teacher in intimacy.
          </p>
        </header>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[60vh] md:h-[65vh]">
          
          {/* Left Image */}
          <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src={IMAGES.worldSpeedsUpImage1}
              alt="Mountain landscape with clouds"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-md shadow-sm backdrop-blur-sm">
              <p className="text-sm font-medium leading-snug">
                "Autism doesn't move faster. It moves deeper."
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
              <h3 className="font-semibold mb-2 text-lg">Lessons in Stillness</h3>
              <ul className="text-sm space-y-1">
                <li>• Time isn't managed. It's earned.</li>
                <li>• Progress isn't movement. It's alignment.</li>
                <li>• Patience is the only metric that matters.</li>
              </ul>
            </div>
          </div>

          {/* Middle Image */}
          <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src={IMAGES.worldSpeedsUpImage2}
              alt="Man standing on balcony with mountain view"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-md shadow-sm backdrop-blur-sm">
              <p className="text-sm font-medium leading-snug">
                "The world wants efficiency. But he's teaching us intimacy."
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src={IMAGES.worldSpeedsUpImage3}
              alt="Sunset over mountains with people watching"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-md shadow-sm backdrop-blur-sm">
              <p className="text-sm font-medium leading-snug">
                "He made the world slow down."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
