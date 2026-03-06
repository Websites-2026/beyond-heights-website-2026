'use client';
import { useState, useEffect } from 'react';
import {IMAGES} from "../../constants/images"

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main content container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column - Motorcycle image with text overlays */}
          <div className="relative rounded-xl overflow-hidden h-[500px] md:h-[600px] bg-gray-300">
            <img 
              src={IMAGES.viewBikeImage} 
              alt="Motorcyclist in mountainous terrain"
              className="w-full h-full object-cover"
            />
            
            {/* Top left text overlay */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-80 rounded-lg px-4 py-2">
              <p className="text-gray-800 font-medium">Love, in our world, is diagnostic.</p>
            </div>
            
            {/* Bottom left text overlay */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 rounded-lg px-4 py-2 max-w-xs">
              <p className="text-gray-800 font-medium">Empathy isn't seeing through his eyes — it's seeing through his processing system.</p>
            </div>
          </div>
          
          {/* Right column - Dark background with text and timeline */}
          <div className="flex flex-col space-y-6">
            {/* Top dark section */}
            <div className="bg-white rounded-xl p-6 h-[200px] md:h-[250px] flex flex-col justify-between">
              <div className="bg-black bg-opacity-70 w-[250px] rounded-lg px-4 py-2">
                <p className="text-white">Understanding isn't observation. It's immersion.</p>
              </div>
              
              <div className="bg-black bg-opacity-70 rounded-lg px-4 w-[250px] py-2 self-end">
                <p className="text-white text-right">Love, when studied deeply enough, starts to look like science.</p>
              </div>
            </div>
            
            {/* Bottom white section with timeline */}
            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <p className="font-medium">you are here</p>
                <div className="mx-auto w-4 h-4 border-l-2 border-r-2 border-t-2 border-black transform rotate-45 mt-1"></div>
              </div>
              
              {/* Film strip timeline */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center">
                  {/* Film strip container */}
                  <div className="flex items-center space-x-1">
                    {/* Film strip left end */}
                    <div className="w-8 h-16 bg-black rounded-l-md flex items-center justify-center">
                      <div className="w-4 h-8 bg-white rounded"></div>
                    </div>
                    
                    {/* Film frames */}
                    <div className="flex items-center space-x-1">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                        <div 
                          key={index} 
                          className={`w-8 h-12 flex items-center justify-center ${
                            index <= 8 ? 'bg-indigo-600' : 'bg-white'
                          } border border-black rounded-sm`}
                        >
                          <span className={`text-xs font-bold ${index <= 8 ? 'text-white' : 'text-black'}`}>{month}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Film strip right end */}
                    <div className="w-8 h-16 bg-black rounded-r-md flex items-center justify-center">
                      <div className="w-4 h-8 bg-white rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-indigo-600 border border-black"></div>
                  <span className="text-sm">Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-white border border-black"></div>
                  <span className="text-sm">Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
