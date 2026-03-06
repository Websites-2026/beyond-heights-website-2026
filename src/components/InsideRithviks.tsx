import React from 'react';
import { IMAGES } from "../constants/images";

export default function InsideRithviks() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Inside Rithvik's Algorithm
        </h2>
        <p className="text-center text-gray-600 mb-12">
          A Family's Blueprint for Understanding.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="flex flex-col">
            <div className="border-t border-gray-300 pt-6 mb-6">
              <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2">RANJANI</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Understanding is empathy with structure.
              </h4>
              <p className="text-gray-600 text-sm">
                This is the story of how better data helped us cut child mortality in half.
              </p>
            </div>
            <div className="border-2 border-opacity-75 mt-7 border-black rounded overflow-hidden">
              <img 
                src= {IMAGES.awards1Image} 
                alt="Ranjani family gathering" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Second Card */}
          <div className="flex flex-col">
            <div className="border-t border-gray-300 pt-6 mb-6">
              <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2">RANGHAN</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Love, when studied deeply enough, starts to look like science.
              </h4>
              <p className="text-gray-600 text-sm">
                New tools can help millions more newborns—and their mothers—survive.
              </p>
            </div>
            <div className="border-2 border-opacity-75 border-black rounded overflow-hidden">
              <img 
                src={IMAGES.awards2Image} 
                alt="Ranghan family event" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Third Card */}
          <div className="flex flex-col">
            <div className="border-t border-gray-300 pt-6 mb-6">
              <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2">RITHANYAA</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Listening is our family's language.
              </h4>
              <p className="text-gray-600 text-sm">
                During the first 25 years of the Gates Foundation, we gave away more than $100...
              </p>
            </div>
            <div className="border-2 border-opacity-75 mt-7 border-black rounded overflow-hidden">
              <img 
                src={IMAGES.awards3Image} 
                alt="Rithanyaa family celebration" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
