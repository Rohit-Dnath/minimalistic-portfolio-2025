"use client";

import { Skeleton } from "@/components/Skeleton";
import Navbar from "@/components/Navbar";

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <main className="max-w-xl mx-auto px-3 sm:px-4 pt-20 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        {/* Header */}
        <div className="mb-6 sm:mb-8 flex items-center gap-3">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-10 rounded-lg" />
        </div>

        {/* Banner Image */}
        <Skeleton className="h-48 sm:h-64 w-full rounded-xl mb-2" />
        <Skeleton className="h-4 w-48 ml-auto" />

        {/* About Section */}
        <section className="my-8 space-y-4">
          <Skeleton className="h-7 w-24" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </section>

        {/* Skills Section */}
        <section className="my-8 space-y-4">
          <Skeleton className="h-7 w-24" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-16 w-full" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-16 w-full" />
          </div>
        </section>

        {/* Gears Section */}
        <section className="my-8 space-y-4">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-4 w-64" />
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-full" />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
