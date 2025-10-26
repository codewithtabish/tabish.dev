import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const {
      blogTitle,
      shortDescription,
      category,
      content,
      slug,
      canonicalUrl,
      ogImageUrl,
    } = await req.json();

    if (!blogTitle || !content) {
      return NextResponse.json(
        { error: "Blog title and content are required" },
        { status: 400 }
      );
    }

    const prompt = `
You are an advanced SEO assistant. Using the blog details below, generate professional SEO metadata in JSON format.

Return **strictly valid JSON** with this structure:
{
  "metaTitle": string (≈ 60 characters, include the blog title and main keyword),
  "metaDescription": string (≈ 160 characters, engaging and keyword-optimized),
  "metaKeywords": string (comma-separated keywords),
  "tags": string (comma-separated relevant tags),
  "ogTitle": string,
  "ogDescription": string,
  "ogImageUrl": string,
  "twitterTitle": string,
  "twitterDescription": string,
  "twitterImage": string,
  "canonicalUrl": string
}

Blog Title: "${blogTitle}"
Short Description: "${shortDescription}"
Category: "${category}"
Content: """${content}"""
Canonical URL: "${canonicalUrl}"
OG Image URL: "${ogImageUrl}"
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [{ role: "user", content: prompt }],
    });

    const rawText = completion.choices[0].message.content?.trim() || "{}";

    let seoData;
    try {
      seoData = JSON.parse(rawText);
    } catch {
      // Fallback: create SEO metadata manually if parsing fails
      const baseKeywords = [
        blogTitle,
        category,
        "guide",
        "tips",
        "tutorial",
      ]
        .filter(Boolean)
        .join(", ");

      const baseTags = [
        ...(category ? [category] : []),
        ...blogTitle.split(" ").slice(0, 5),
      ].join(", ");

      seoData = {
        metaTitle: blogTitle,
        metaDescription:
          shortDescription || `Learn more about ${blogTitle} in this article.`,
        metaKeywords: baseKeywords,
        tags: baseTags,
        ogTitle: blogTitle,
        ogDescription:
          shortDescription || `Explore insights and details about ${blogTitle}.`,
        ogImageUrl: ogImageUrl || "",
        twitterTitle: blogTitle,
        twitterDescription:
          shortDescription || `Read this post about ${blogTitle}.`,
        twitterImage: ogImageUrl || "",
        canonicalUrl: canonicalUrl || "",
      };
    }

    // Ensure URLs and images are consistent
    seoData.canonicalUrl = seoData.canonicalUrl || canonicalUrl;
    seoData.ogImageUrl = seoData.ogImageUrl || ogImageUrl;
    seoData.twitterImage = seoData.twitterImage || ogImageUrl;

    return NextResponse.json({
      success: true,
      seo: seoData,
    });
  } catch (error) {
    console.error("SEO generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate SEO metadata" },
      { status: 500 }
    );
  }
}
