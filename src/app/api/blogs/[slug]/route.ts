import { NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";
import { revalidatePath, revalidateTag } from "next/cache";
export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> } // 👈 params is a Promise
) {
  const { slug } = await context.params; // ✅ must await

  try {
    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid blog slug provided.", data: null },
        { status: 400 }
      );
    }

    const blog = await prisma.blog.findUnique({
      where: { slug },
      include: {
        author: true,
        seo: true,
      },
    });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: `No blog found for slug: ${slug}`, data: null },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "✅ Blog fetched successfully.",
      data: blog,
    });
  } catch (error: any) {
    console.error("❌ Error fetching blog by slug (API):", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog. Please try again later.",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}





// ✅ DELETE — Remove a blog by slug
export async function DELETE(
  req: Request,
  context: { params: Promise<{ slug: string }> } // 👈 same here
) {
  const { slug } = await context.params; // ✅ must await

  try {
    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid blog slug provided." },
        { status: 400 }
      );
    }

    const existingBlog = await prisma.blog.findUnique({
      where: { slug },
    });

    if (!existingBlog) {
      return NextResponse.json(
        { success: false, message: `No blog found with slug: ${slug}` },
        { status: 404 }
      );
    }

    await prisma.blog.delete({
      where: { slug },
    });

    // ✅ Revalidate cache for both the list and this blog
    revalidateTag("all-blogs");
    revalidateTag(`blog-${slug}`);
    revalidatePath("/dashboard/blogs", "page");

    return NextResponse.json({
      success: true,
      message: `🗑️ Blog "${slug}" deleted successfully.`,
    });
  } catch (error: any) {
    console.error("❌ Error deleting blog:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete blog. Please try again later.",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}



export async function PUT(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  try {
    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid blog slug provided.", data: null },
        { status: 400 }
      );
    }

    const body = await req.json();
    const {
      title,
      slug: newSlug,
      shortDescerption,
      content,
      imageUrl,
    } = body;

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: "Title and content are required." },
        { status: 400 }
      );
    }

    const existingBlog = await prisma.blog.findUnique({
      where: { slug },
    });

    if (!existingBlog) {
      return NextResponse.json(
        { success: false, message: `No blog found with slug: ${slug}` },
        { status: 404 }
      );
    }

    const updatedBlog = await prisma.blog.update({
      where: { slug },
      data: {
        title,
        slug: newSlug || slug,
        shortDescerption,
        content, // ✅ Save EditorJS content directly
        imageUrl,
        
      },
    });

    // Revalidate cache for the updated blog and the list
    revalidateTag("all-blogs");
    revalidateTag(`blog-${updatedBlog.slug}`);
    // revalidatePath("/dashboard/blogs");

    return NextResponse.json({
      success: true,
      message: `Blog "${updatedBlog.slug}" updated successfully.`,
      data: updatedBlog,
    });
  } catch (error: any) {
    console.error("❌ Error updating blog:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog. Please try again later.",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
