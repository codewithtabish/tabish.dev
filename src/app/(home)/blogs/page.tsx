import BlogsSkeleton from '@/components/fallbacks/blog-list-fallback';
import BackBreadcrumb from '@/components/generals/back-breadcrumb';
import BlogsListComp from '@/components/generals/blogs/blog-list-comp';
import React, { Suspense } from 'react';

export default async function BlogsPage() {

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
              <BackBreadcrumb/>
      <div className='flex justify-center items-center flex-col gap-5'>


      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Latest Blogs
      </h1>

      {/* Introductory Text */}
      <p className="text-base sm:text-lg text-gray-700 md:max-w-4xl mx-auto dark:text-gray-300 mb-8 leading-relaxed">
        Welcome to our blog section! Here you'll find the latest articles, tutorials, and insights on 
        web development, AI, programming tips, and much more. Explore our posts and stay up-to-date 
        with the newest trends and technologies.
      </p>
      </div>

      {/* Blog List */}
      <Suspense fallback={<BlogsSkeleton/>}>

      <BlogsListComp/>
      </Suspense>
    </div>
  );
}
