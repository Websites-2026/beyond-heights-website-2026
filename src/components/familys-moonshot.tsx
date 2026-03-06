"use client";

import React, { useState, useEffect } from "react";
import { Gallery, ImageModal } from "@/components/ui/react-tailwind-image-gallery";
import { IMAGES } from "@/constants/images";

const galleryData = [
  {
    id: 1,
    src: IMAGES.familyMoonshot1Image,
    alt: "Cityscape at dusk",
    title: "Cityscape at dusk",
    span: "col-span-1 h-[260px] sm:h-[280px]",
  },
  {
    id: 2,
    src: IMAGES.familyMoonshot2Image,
    alt: "Portrait of a woman",
    title: "Portrait",
    span: "sm:col-span-2 h-[260px] sm:h-[280px]",
  },
  {
    id: 3,
    src: IMAGES.familyMoonshot3Image,
    alt: "Forest path",
    title: "Forest Path",
    span: "col-span-1 h-[260px] sm:h-[280px]",
  },
  {
    id: 4,
    src: IMAGES.familyMoonshot4Image,
    alt: "Portrait of a man",
    title: "Portrait",
    span: "col-span-1 h-[320px]",
  },
  {
    id: 5,
    src: IMAGES.familyMoonshot5Image,
    alt: "Wildlife photography",
    title: "Wildlife",
    span: "sm:col-span-2 h-[320px]",
  },
  {
    id: 6,
    src: IMAGES.familyMoonshot6Image,
    alt: "Modern architecture",
    title: "Architecture",
    span: "col-span-1 h-[320px]",
  },
  {
    id: 7,
    src: IMAGES.familyMoonshot7Image,
    alt: "Starry night sky",
    title: "Night Sky",
    span: "col-span-1 h-[320px]",
  },
  {
    id: 8,
    src: IMAGES.familyMoonshot8Image,
    alt: "Street art",
    title: "Street Art",
    span: "col-span-1 h-[320px]",
  },
  {
    id: 9,
    src: IMAGES.familyMoonshot9Image,
    alt: "Mountain Range",
    title: "Mountain Range",
    span: "sm:col-span-2 h-[320px]",
  },
];

export default function FamilysMoonshot() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Gallery data={galleryData} onImageClick={openModal} />
      <ImageModal src={modalImage} onClose={closeModal} />
    </>
  );
}