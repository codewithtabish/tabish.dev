import { getSingleBlogBySlugServerAction } from "@/actions/blog";
import SingleBlogEditForm from "@/components/generals/dashboard/blogs/edit/blog-edit-form";
import React from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";

export default async function SingleBlogEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await getSingleBlogBySlugServerAction(slug);

  if (!response.success || !response.data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-500">
          Blog not found or failed to load.
        </p>
      </div>
    );
  }

  const blog = response.data;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* ShadCN Breadcrumb */}
      <Breadcrumb className="mb-6 text-sm">
  <BreadcrumbItem>
    <BreadcrumbLink asChild>
      <Link
        href="/dashboard/blogs"
        className="text-blue-600 hover:underline"
      >
        Blogs
      </Link>
    </BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink className="font-semibold text-gray-700 underline decoration-blue-400 decoration-2 underline-offset-2">
      {blog.title.length > 40
        ? blog.title.substring(0, 37) + "..."
        : blog.title}
    </BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>


      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
      {/* Pass the blog as prop to client component */}
      <SingleBlogEditForm blog={blog} />
    </div>
  );
}
