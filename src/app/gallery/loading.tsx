"use client";

import { Skeleton } from "@/components/Skeleton";
import Navbar from "@/components/Navbar";

export default function GalleryLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <main className="max-w-xl mx-auto px-3 sm:px-4 pt-20 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <Skeleton className="h-8 w-40 mb-3" />
          <Skeleton className="h-4 w-full" />
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 gap-3 space-y-3">
          {Array.from({ length: 12 }).map((_, i) => {
            // Vary heights for masonry effect
            const heights = [
              "h-48", "h-64", "h-56", "h-72", 
              "h-60", "h-52", "h-68", "h-56",
              "h-64", "h-48", "h-60", "h-72"
            ];
            return (
              <Skeleton 
                key={i} 
                className={`${heights[i]} w-full rounded-lg break-inside-avoid`} 
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
