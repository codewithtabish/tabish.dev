"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import GeneralEditor from "./general-editor";
import { ContentPreviewer } from "./content-previewer";
import BlogInputFields from "./blog-input-fields";
import BlogSeoComp from "./blog-seo-comp";
import { toast } from "sonner";
import { generateSlug } from "@/utils/slugify";

const BlogCreationSection = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    shortDescription: "",
    imageUrl: "",
    ogImageUrl: "",
    category: "",
    content: {},
  });

  const [seoData, setSeoData] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showSEO, setShowSEO] = useState(false);
  const [loadingSEO, setLoadingSEO] = useState(false);
  const [creatingBlog, setCreatingBlog] = useState(false);

  const toggleContentPreview = () => setShowPreview(!showPreview);
  const toggleSEO = () => setShowSEO(!showSEO);

  const handleChange = (field: string, value: any) => {
    setBlogData((prev) => ({ ...prev, [field]: value }));
  };

  // -----------------------------
  // ✅ Generate SEO via AI
  // -----------------------------
  const handleGenerateSEO = async () => {
    if (!blogData.title || !blogData.shortDescription || !blogData.content) {
      toast.error("Please fill out blog title, description, and content first.");
      return;
    }

    setLoadingSEO(true);
    const slug = generateSlug(blogData.title);
    const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`;

    // const canonicalUrl = `https://codewithtabish.com/blogs/${slug}`;

    try {
      const response = await fetch("/api/create-seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blogTitle: blogData.title,
          shortDescription: blogData.shortDescription,
          category: blogData.category,
          content: blogData.content,
          imageUrl: blogData.imageUrl,
          slug,
          canonicalUrl,
          ogImageUrl: blogData.ogImageUrl,
        }),
      });

      if (!response.ok) {
        toast.error("Failed to generate SEO data. Please try again.");
        return;
      }

      const result = await response.json();
      setSeoData(result.seo);
      setShowSEO(true);
      toast.success("SEO data generated successfully!");
    } catch (error) {
      console.error("Error generating SEO:", error);
      toast.error("Error generating SEO data.");
    } finally {
      setLoadingSEO(false);
    }
  };

  // -----------------------------
  // ✅ Create Blog API Call
  // -----------------------------
const handleCreateBlog = async () => {
  if (!blogData.title || !blogData.shortDescription || !blogData.content) {
    toast.error("Please fill out all required fields before creating the blog.");
    return;
  }

  setCreatingBlog(true);

  try {
    const response = await fetch("/api/create-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: blogData.title,
        shortDescription: blogData.shortDescription,
        content: blogData.content,
        imageUrl: blogData.imageUrl || "",
        category: blogData.category || "",
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      toast.error(err.message || "Failed to create blog.");
      return;
    }

    const result = await response.json();
    toast.success("🎉 Blog created successfully!");
    console.log("Created Blog:", result.blog);

    // Reset form
    setBlogData({
      title: "",
      shortDescription: "",
      imageUrl: "",
      ogImageUrl: "",
      category: "",
      content: {},
    });
    setSeoData(null);
    setShowSEO(false);
  } catch (error) {
    console.error("Error creating blog:", error);
    toast.error("Something went wrong while creating the blog.");
  } finally {
    setCreatingBlog(false);
  }
};


  return (
    <div className="space-y-6 md:max-w-5xl mx-auto p-4">
      {/* Blog Inputs */}
      <BlogInputFields blogData={blogData} onChange={handleChange} />

      {/* SEO Section */}
      {showSEO && seoData && <BlogSeoComp seoData={seoData} />}

      {/* Content Editor */}
      <div className="mt-8">
        <GeneralEditor
          blog={blogData.content}
          onChange={(value) => handleChange("content", value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <Button onClick={toggleContentPreview} variant="secondary">
          {showPreview ? "Hide Preview" : "Show Preview"}
        </Button>

        <Button onClick={handleGenerateSEO} disabled={loadingSEO}>
          {loadingSEO ? "Generating SEO..." : "Generate SEO via AI"}
        </Button>

        {seoData && (
          <Button variant="outline" onClick={toggleSEO}>
            {showSEO ? "Hide SEO Data" : "Show SEO Data"}
          </Button>
        )}

        <Button
          onClick={handleCreateBlog}
          disabled={!seoData || creatingBlog}
          className="bg-green-600 text-white hover:bg-green-700"
        >
          {creatingBlog ? "Creating Blog..." : "Create Blog"}
        </Button>
      </div>

      {/* Preview */}
      {showPreview && (
        <div className="mt-6 border-t pt-4">
          <ContentPreviewer content={blogData.content} />
        </div>
      )}
    </div>
  );
};

export default BlogCreationSection;
