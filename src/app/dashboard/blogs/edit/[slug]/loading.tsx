"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SingleBlogLoading = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      {/* Banner Image Skeleton */}
      <Skeleton className="w-full h-64 sm:h-80 md:h-96 rounded-xl mb-6" />

      {/* Title Skeleton */}
      <Skeleton className="h-10 sm:h-12 w-3/4 rounded-md mb-4" />

      {/* Meta Info Skeleton */}
      <div className="flex items-center gap-4 mb-6">
        <Skeleton className="h-4 w-20 rounded-md" />
        <Skeleton className="h-4 w-24 rounded-md" />
      </div>

      {/* Blog Content Skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Skeleton key={idx} className="h-4 w-full rounded-md" />
        ))}
      </div>

      {/* Optional smaller image within content */}
      <Skeleton className="w-full h-48 rounded-lg my-6" />

      {/* More content skeleton */}
      <div className="space-y-4 mt-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Skeleton key={idx} className="h-4 w-full rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default SingleBlogLoading;
