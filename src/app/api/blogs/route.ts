import { NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";
// import { revalidateTag } from "next/cache";

// ==================== GET: Fetch All Blogs ====================
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author:true,
        seo: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "✅ Blogs fetched successfully.",
      data: blogs,
    });
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs. Please try again later.",
        error: error instanceof Error ? error.message : "Unknown error occurred.",
        data: [],
      },
      { status: 500 }
    );
  } finally {
    // Optional for serverless environments like Vercel
    await prisma.$disconnect();
  }
}
