import { NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";
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