import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Blog } from "@/types";
import { getAllBlogsServerAction } from "@/actions/blog";

const FeaturedBlogs = async () => {
  let blogs: Blog[] = [];

  try {
    const response = await getAllBlogsServerAction();
    if (!response.success) {
      throw new Error(response.error || "Failed to load blogs.");
    }
    blogs = response.data.slice(0, 3); // Only first 3 blogs
  } catch (error: any) {
    console.error("❌ Error in FeaturedBlogs:", error);
    return (
      <div className="w-full flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-3">
          Failed to load blogs
        </h2>
        <p className="text-gray-600">{error.message || "Something went wrong. Please try again later."}</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
        <FileText className="w-12 h-12 mb-4 text-gray-400 mx-auto" />
        <p className="text-lg font-medium">No blogs available yet.</p>
        <p className="text-sm mt-1">Please check back later.</p>
      </div>
    );
  }

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 overflow-hidden"
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
              <div className="w-full h-48 bg-gray-200 animate-pulse rounded-t-2xl" />
            )}

            <div className="p-5">
              <h4 className="font-semibold mb-2 line-clamp-2 text-gray-900">
                {blog.title}
              </h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {blog.shortDescerption || "No description provided."}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View More Link */}
      <div className="mt-8 text-center">
        <Link
          href="/blogs"
          className="text-blue-600 font-semibold hover:underline"
        >
          View More Blogs →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
