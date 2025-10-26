// src/app/api/create-blog/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";
import { auth, currentUser } from "@clerk/nextjs/server";
import { generateSlug } from "@/utils/slugify";

export async function POST(req: Request) {
  try {
    const { title, shortDescription, content, imageUrl, category  } = await req.json();

    // --- Validate required fields ---
    if (!title || !shortDescription || !content) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // --- Get authenticated user from Clerk ---
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User not authenticated." },
        { status: 401 }
      );
    }

    const user = await currentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unable to fetch current user." },
        { status: 500 }
      );
    }

    // --- Ensure user exists in DB ---
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    if (!dbUser) {
      return NextResponse.json(
        { success: false, message: "User not found in database." },
        { status: 404 }
      );
    }

    const slug = generateSlug(title);

    // --- Generate SEO data ---
    const seoData = {
      metaTitle: title,
      metaDescription: shortDescription,
      metaKeywords: `${category || ""}, ${title}`,
      canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://codewithtabish.com"}/blog/${slug}`,
      ogTitle: title,
      ogDescription: shortDescription,
      ogImageUrl: imageUrl || "",
      twitterTitle: title,
      twitterDescription: shortDescription,
      twitterImage: imageUrl || "",
      schemaMarkup: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: shortDescription,
        image: imageUrl,
        author: { "@type": "Person", name: user.firstName || "Tabish" },
        publisher: {
          "@type": "Organization",
          name: "CodeWithTabish",
          logo: { "@type": "ImageObject", url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png` },
        },
        datePublished: new Date().toISOString(),
      }),
    };

    const tags =
      seoData.metaKeywords
        ?.split(",")
        .map((t) => t.trim())
        .filter(Boolean) || [];

    // --- Create blog with nested SEO ---
    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        shortDescerption:shortDescription|| "this is short desc ",
        content,
        imageUrl,
        category,
        tags,
        author: { connect: { id: dbUser.id } },
        seo: { create: seoData },
        published: true,
        publishedAt: new Date(),
      },
      include: { seo: true, author: true },
    });

    return NextResponse.json(
      { success: true, message: "Blog created successfully!", blog },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Failed to create blog:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog. Please check your inputs.",
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
