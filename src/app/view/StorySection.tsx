'use client';
import React from 'react';
import {IMAGES} from "../../constants/images"

interface StoryCardProps {
  imageUrl?: string;
  title?: string;
  bullets?: string[];
  quote?: string;
  isVideo?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({
  imageUrl,
  title,
  bullets,
  quote,
  isVideo = false,
}) => {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-500 hover:scale-[1.02]">
      {/* Image / Placeholder */}
      <div className="h-full w-full bg-white">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title || quote || 'Placeholder image'}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-500 text-lg">
            Image Placeholder
          </div>
        )}
      </div>

      {/* Video Icon */}
      {isVideo && (
        <div className="absolute right-3 top-3 rounded-full bg-white p-2 text-black/70 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      {/* Text Overlay */}
      {(title || quote) && (
        <div className="absolute inset-x-0 bottom-0 bg-black/60 p-5 text-white transition-all duration-300 group-hover:opacity-0">
          {title && <h3 className="mb-2 text-xl font-semibold">{title}</h3>}

          {bullets && (
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}

          {quote && <p className="mt-2 italic text-sm leading-snug">“{quote}”</p>}
        </div>
      )}
    </div>
  );
};

const StorySection: React.FC = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-4 py-12 md:px-8">
      <div className="w-full max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          Inside Rithvik’s Algorithm: How Autism Rewrote Our Family’s Map of Understanding
        </h2>

        {/* Two Column Layout (70% / 30%) */}
        <div className="grid h-[80vh] grid-cols-1 gap-8 lg:grid-cols-[70%_30%]">
          {/* Left Card */}
          <StoryCard
            imageUrl={IMAGES.viewImageFamily1}
            title="The Father’s Notebook"
            bullets={[
              'Every meltdown hides a message.',
              'Curiosity beats control.',
              'We didn’t need new rules. We needed a new rhythm.',
            ]}
          />

          {/* Right Card */}
          <StoryCard
            imageUrl={IMAGES.viewImageFamily2}
            quote="He doesn’t process by repetition; he processes by resonance."
            isVideo={true}
          />
        </div>
      </div>
    </section>
  );
};

export default StorySection;