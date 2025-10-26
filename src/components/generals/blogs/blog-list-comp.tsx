import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Blog } from "@/types";
import { getAllBlogsServerAction } from "@/actions/blog";

const BlogsListComp = async () => {
  let blogs: Blog[] = [];

  try {
    const response = await getAllBlogsServerAction();
    if (!response.success) {
      throw new Error(response.error || "Failed to load blogs.");
    }
    blogs = response.data;
  } catch (error: any) {
    console.error("❌ Error in BlogsListComp:", error);
    return (
      <div className="w-full flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-3">
          Failed to load blogs
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {error.message || "Something went wrong. Please try again later."}
        </p>
      </div>
    );
  }

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      {blogs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600 dark:text-gray-400">
          <FileText className="w-12 h-12 mb-4 text-gray-400 dark:text-gray-500 mx-auto" />
          <p className="text-lg font-medium">No blogs available yet.</p>
          <p className="text-sm mt-1">Please check back later.</p>
        </div>
      )}

      {blogs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden"
            >
              {blog.imageUrl ? (
                <div className="relative w-full h-48">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-t-2xl" />
              )}

              <div className="p-5">
                <h4 className="font-semibold mb-2 line-clamp-2 text-gray-900 dark:text-gray-100">
                  {blog.title}
                </h4>
                <p className="text-gray-600 text-sm dark:text-gray-400 mb-3 line-clamp-2">
                  {blog.shortDescerption || "No description provided."}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md overflow-hidden animate-pulse"
            >
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />
              <div className="p-5">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 mb-2 rounded w-3/4" />
                <div className="h-4 bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full" />
                <div className="flex justify-between items-center mt-4">
                  <span className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded" />
                  <span className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded" />
                </div>
              </div>
            </div>
          ))} */}
        </div>
      )}
    </section>
  );
};

export default BlogsListComp;
