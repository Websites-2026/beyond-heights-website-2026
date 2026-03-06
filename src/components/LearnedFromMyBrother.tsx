import React from "react";
import { IMAGES } from "../constants/images";

export default function LearnedFromMyBrother() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          What I’ve Learned From My Brother
        </h2>

        {/* Blue container */}
        <div className="bg-white rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="flex flex-col justify-start gap-6">
              {/* Text box */}
              <div className="bg-white rounded-xl p-6">
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  The Siblings Walking Side-By-Side, No Eye Contact, But In
                  Rhythm.
                </p>
              </div>

              {/* Image slightly taller and starts immediately after text */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img
                  src={IMAGES.learned1Image}
                  alt="Two brothers hiking together"
                  className="w-full h-[460px] object-cover" // increased height
                />
              </div>
            </div>

            {/* Middle Column */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
              <img
                src={IMAGES.learned2Image}
                alt="Brother at mountain summit holding flag"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-start gap-6">
              {/* Image slightly shorter (ends above text) */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img
                  src={IMAGES.learned3Image}
                  alt="Brother meditating"
                  className="w-full h-[410px] object-cover" // reduced height
                />
              </div>

              {/* Text box */}
              <div className="bg-white rounded-xl p-6">
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  Somewhere Inside His Quiet, I Found The Loudest Truth Of All:
                  Being Human Isn’t About Keeping Pace. It’s About Keeping
                  Rhythm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}