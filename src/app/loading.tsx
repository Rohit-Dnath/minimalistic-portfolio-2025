"use client";

import { SkeletonBanner, SkeletonProject, SkeletonExperience, SkeletonTool } from "@/components/Skeleton";

export default function HomeLoading() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-3 sm:px-4 py-2 sm:py-4 mt-20">
      {/* Banner Skeleton */}
      <section className="mb-8">
        <SkeletonBanner />
      </section>

      {/* Intro Section */}
      <section className="mb-8 sm:mb-10 space-y-3">
        <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
      </section>

      {/* Projects Skeleton */}
      <section className="mb-8 sm:mb-10">
        <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-4" />
        <div className="space-y-6">
          <SkeletonProject />
          <SkeletonProject />
          <SkeletonProject />
        </div>
      </section>

      {/* Experience Skeleton */}
      <section className="mb-8 sm:mb-10">
        <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-4" />
        <div className="space-y-6">
          <SkeletonExperience />
          <SkeletonExperience />
        </div>
      </section>

      {/* Tools Skeleton */}
      <section className="mb-8 sm:mb-10">
        <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-4">
          {Array.from({ length: 14 }).map((_, i) => (
            <SkeletonTool key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
