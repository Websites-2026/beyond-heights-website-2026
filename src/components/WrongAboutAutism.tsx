"use client";
import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "../constants/images";

export function WrongAboutAutism() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full bg-white py-16 flex justify-center items-center">
      <div className="max-w-7xl w-full px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight mb-10 text-center font-[SF Pro Display, sans-serif]">
          What the World Gets Wrong About Autism
        </h2>

        {/* Image Container */}
        <div
          className="relative mx-auto w-full md:w-[90%] h-[65vh] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Default Image */}
          <Image
            src={IMAGES.wrong1Image}
            alt="What the World Gets Wrong About Autism"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
            className={`object-cover object-center rounded-3xl transition-opacity duration-500 ease-in-out ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Hover Image */}
          <Image
            src={IMAGES.wrong2Image} // your second image for hover
            alt="Alternate Autism Perspective"
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className={`object-cover object-center rounded-3xl transition-opacity duration-500 ease-in-out ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Caption Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-6 md:p-8 font-[SF Pro Text, sans-serif]">
            <p className="text-sm md:text-lg font-light leading-relaxed">
              “Autism isn’t a communication disorder — it’s a translation challenge.” <br />
              “He lives in the same world — he just experiences it in 4K.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
