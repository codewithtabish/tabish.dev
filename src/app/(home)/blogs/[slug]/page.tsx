import React from "react";
// import { BlogWithSideBarPreviewer } from "@/components/generals/blogs/blog-with-sidebar-previwer";
import Image from "next/image";
import { ContentPreviewer } from "@/components/generals/dashboard/blogs/content-previewer";
import { getSingleBlogBySlugServerAction } from "@/actions/blog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await route params
  const { slug } = await params;

  // ✅ Fetch single blog
  const response = await getSingleBlogBySlugServerAction(slug);

  // ✅ Handle not found or failed fetch
  if (!response.success || !response.data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-500">Blog not found or failed to load.</p>
      </div>
    );
  }

  const blog = response.data;

  // You can fetch related blogs here if needed

  const relatedBlogs:any = []; // 🔹 Placeholder for related blogs logic

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
                         {/* <BackButton /> */}

             <div className="flex-1 min-w-0">
          {blog.imageUrl && (
          <div className="mb-6 w-full max-h-[300px] bg-red-900 overflow-hidden rounded-lg">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={1200}
                height={300}
                className="w-full  max-h-[300px] object-cover"
                priority
              />
            </div>
          )}

         {/* <div className="md:max-w-[85%]">
           <h1 className="text-3xl font-bold mb-4 ">{blog.title}</h1>

          <p className="text-gray-700 mb-6 text-sm leading-relaxed ">
            {blog.shortDesc}
          </p>
         </div> */}
         <ContentPreviewer
         content={blog.content}
         />


          {/* ✅ Sidebar + Ads + Related Blogs handled inside */}
          {/* <BlogWithSideBarPreviewer
            content={blog.content}
            sidebarLinks={blog.sidebarLinks}
            relatedBlogs={relatedBlogs}
          /> */}
        </div>
        {/* <BlogPreviewer
        content={blog.content}
        /> */}
      {/* <BlogWithSideBarPreviewer
        content={blog.content}
        sidebarLinks={blog.sidebarLinks}
        relatedBlogs={relatedBlogs}
      /> */}
    </div>
  );
}
