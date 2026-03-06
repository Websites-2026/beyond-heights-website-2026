"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/constants/images";

type CardProps = {
  title: string;
  src: string;
  description: string;
  width: "large" | "small";
};

export function BrothersRhythm() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards: CardProps[] = [
    {
      title:
        "He doesn’t talk much, but when he does, it lands. “Patience isn’t waiting — it’s tuning in.”",
      src: IMAGES.rythm2Image,
      description:
        "Inside My Brother’s Rhythm: What Autism Taught Me About Love That Listens",
      width: "large",
    },
    {
      title:
        "Growing up with Rithvik didn’t feel like living with someone ‘different.’ It felt like living beside a mystery that doesn’t want solving, only understanding.",
      src: IMAGES.rythm1Image,
      description: "",
      width: "small",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-neutral-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Updated heading */}
        <h2
          className="text-3xl md:text-4xl font-medium mb-12 text-left
                     text-neutral-900 dark:text-neutral-50 tracking-tight 
                     font-sans"
        >
          Inside My Brother’s Rhythm: What Autism Taught Me About Love That Listens
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "relative overflow-hidden rounded-2xl transition-all duration-300 ease-out group",
                card.width === "large" ? "md:w-[70%]" : "md:w-[30%]",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
              )}
            >
              <Image
                src={card.src}
                alt={card.title}
                width={1000}
                height={700}
                className="object-cover rounded-2xl w-full h-[400px] md:h-[500px]"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <p className="text-white text-sm md:text-base font-light leading-relaxed">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
