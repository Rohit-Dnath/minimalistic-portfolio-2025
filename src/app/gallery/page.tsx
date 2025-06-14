"use client";

import { AnimateIn } from "@/components/animations/AnimateIn";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryImages = [
  { src: "/gallery/image.png", alt: "Memory 9" },
  { src: "/gallery/img1.png", alt: "Memory 1" },
  { src: "/gallery/img2.png", alt: "Memory 2" },
  { src: "/gallery/img3.png", alt: "Memory 3" },
  { src: "/gallery/img4.png", alt: "Memory 4" },
  { src: "/gallery/img5.png", alt: "Memory 5" },
  { src: "/gallery/img6.jpg", alt: "Memory 6" },
  { src: "/gallery/img7.jpg", alt: "Memory 7" },
  { src: "/gallery/img8.jpg", alt: "Memory 8" },
  { src: "/gallery/img9.png", alt: "Memory 9" },
  { src: "/gallery/img10.png", alt: "Memory 10" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 mt-16">
      <AnimateIn variant="fadeUp">
        <section className="mb-12">
          <AnimateIn variant="fadeUp" delay={0.2}>
            <div className="flex items-center justify-between mb-8">
              <Link 
                href="/"
                className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Link>
              <ThemeToggle />
            </div>
          </AnimateIn>          <AnimateIn variant="fadeUp" delay={0.4}>
            <div className="text-left mb-12">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold tracking-tight">Random Awesomeness</h1>
              </div>
              {/* <h2 className="text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
                Random Awesomeness
              </h2> */}
              <p className="text-lg text-zinc-500 dark:text-zinc-500 mt-4 max-w-xl">
                A collection of moments, memories, and random captures from my journey
              </p>
            </div>
          </AnimateIn>          <AnimateIn variant="fadeUp" delay={0.6}>
            <div className="columns-1 sm:columns-2 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <AnimateIn 
                  key={image.src} 
                  variant="fadeUp" 
                  delay={0.8 + index * 0.1}
                  className="break-inside-avoid mb-4"
                >
                  <div 
                    className="group cursor-pointer relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Selected memory"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}