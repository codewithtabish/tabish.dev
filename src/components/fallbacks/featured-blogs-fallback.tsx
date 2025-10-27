"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface FeaturedBlogSkeletonProps {
  count?: number; // Number of skeleton cards to show
}

const FeaturedBlogSkeleton: React.FC<FeaturedBlogSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 shadow-md overflow-hidden"
          >
            {/* Image Skeleton */}
            <Skeleton className="w-full h-48 rounded-t-2xl" />

            {/* Content Skeleton */}
            <div className="p-5 flex flex-col gap-3">
              <Skeleton className="h-5 w-3/4 rounded" /> {/* Title */}
              <Skeleton className="h-4 w-full rounded" />   {/* Short description */}
              <Skeleton className="h-4 w-5/6 rounded" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-4 w-1/4 rounded" /> {/* Date */}
                <Skeleton className="h-4 w-1/4 rounded" /> {/* Read more link */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogSkeleton;
