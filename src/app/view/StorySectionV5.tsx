'use client';
import { HeartIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { IMAGES } from '../../constants/images'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Quiet Moonshot</h1>
          <p className="text-xl text-gray-500">
            What if the real breakthrough isn't curing difference — but comprehending it
          </p>
        </div>
        
        {/* Three image cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Left image card */}
          <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px] bg-gray-300">
            <img 
              src={IMAGES.quietMoonshotImage1} 
              alt="Man sitting by window"
              className="w-full h-full object-cover"
            />
            
            {/* Top left text overlay */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg px-3 py-2">
              <p className="text-gray-800 text-sm md:text-base">Autism isn't a wall — it's a window.</p>
            </div>
          </div>
          
          {/* Middle image card */}
          <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px] bg-gray-300">
            <img 
              src={IMAGES.quietMoonshotImage2} 
              alt="People at climbing wall"
              className="w-full h-full object-cover"
            />
            
            {/* Bottom center text overlay */}
            <div className="absolute w-[350px] bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-gray-800 text-sm md:text-base text-center">
                Progress doesn't always look like movement; sometimes it looks like alignment.
              </p>
            </div>
          </div>
          
          {/* Right image card */}
          <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px] bg-gray-300">
            <img 
              src={IMAGES.quietMoonshotImage3} 
              alt="Family group photo"
              className="w-full h-full object-cover"
            />
            
            {/* Top right text overlay */}
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-lg px-3 py-2 flex items-center">
              <p className="text-gray-800 text-sm md:text-base">Love is the only system that scales</p>
              <span className="ml-2 text-red-500"><img src="https://img.icons8.com/?size=100&id=upd5xh7hPe0R&format=png&color=000000" alt="Heart Icon" className="w-6" /></span>
            </div>
          </div>
        </div>
        
        {/* Text content below images */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl font-medium mb-4">
            This is what our life has become: a long apprenticeship in patience.
          </p>
          <p className="text-xl mb-4">
            Autism taught us that the world doesn't need more answers — it needs better questions.
          </p>
          <p className="text-xl mb-4">
            That data without empathy is noise, and empathy without observation is guesswork.
          </p>
          <p className="text-xl">
            And that progress doesn't always look like movement; sometimes it looks like alignment.
          </p>
        </div>
      </div>
    </div>
  );
}
