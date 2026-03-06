'use client';
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The New Blueprint</h1>
          <p className="text-xl text-gray-500">
            From one family's rhythm to a movement that redefines understanding.
          </p>
        </div>
        
        {/* Main content container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left image with text overlay */}
          <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px] bg-gray-300">
            <img 
              src={IMAGES.newBlueprintImage1} 
              alt="Three men at an event"
              className="w-full h-full object-cover"
            />
            
            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
              <p className="text-white text-sm md:text-base">
                Autism isn't a malfunction. It's a different form of intelligence on an unfamiliar interface.
              </p>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px] bg-gray-300">
            <img 
              src={IMAGES.newBlueprintImage2} 
              alt="Man running on a path"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
