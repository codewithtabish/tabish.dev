import { GetAllBlogsResponse, GetSingleBlogResponse } from "@/types";

export async function getAllBlogsServerAction(): Promise<GetAllBlogsResponse> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
      method: "GET",
    //   cache:'force-cache',
    //   next: { tags: ['all-blogs'] }, // ✅ tag caching for individual blog

      // next: { revalidate: 10 }, // Optional caching
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("❌ Error calling API:", error);

    return {
      success: false,
      message: "Failed to fetch blogs via API.",
      error: error instanceof Error ? error.message : "Unknown error occurred.",
      data: [],
    };
  }
}






export const getSingleBlogBySlugServerAction = async (
  slug: string
): Promise<GetSingleBlogResponse> => {
  try {
    if (!slug || typeof slug !== "string") {
      return {
        success: false,
        message: "Invalid blog slug provided.",
        data: null,
      };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${slug}`, {
      cache: "force-cache",
     next: { tags: [`blog-${slug}`] }, // ✅ tag caching for individual blog

    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("❌ Error in getSingleBlogBySlugServerAction:", error);
    return {
      success: false,
      message: "Failed to fetch blog via server action.",
      error: error?.message || "Unknown error",
      data: null,
    };
  }
};
