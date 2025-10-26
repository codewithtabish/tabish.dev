"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const BlogsSkeleton = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          key={idx}
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md overflow-hidden animate-pulse"
        >
          {/* Banner Image Skeleton */}
          <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />

          <div className="p-5 space-y-3">
            {/* Title Skeleton */}
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
            {/* Short Description Skeleton */}
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />

            {/* Footer Skeleton */}
            <div className="flex justify-between items-center mt-4">
              <span className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded" />
              <span className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogsSkeleton;
