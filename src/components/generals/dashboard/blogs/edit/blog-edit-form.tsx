'use client'
import React, { useState } from "react";
import { Blog } from "@/types";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // using Sonner toast
import GeneralEditor from "../general-editor";
import { generateSlug } from "@/utils/slugify";

interface Props {
  blog: Blog;
}

export default function SingleBlogEditForm({ blog }: Props) {
  const [title, setTitle] = useState(blog.title || "");
  const [slug, setSlug] = useState(blog.slug || "");
  const [shortDescription, setShortDescription] = useState(blog.shortDescerption || "");
  const [content, setContent] = useState(blog.content || { time: Date.now(), blocks: [] });
  const [imageUrl, setImageUrl] = useState(blog.imageUrl || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
        const newSlug=generateSlug(title)
      const res = await fetch(`/api/blogs/${blog.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug:newSlug,
          shortDescerption: shortDescription,
          content, // full EditorJS object
          imageUrl,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Blog updated successfully!");
      } else {
        toast.error(data.message || "Failed to update blog.");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Slug</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Short Description</label>
        <textarea
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
          rows={3}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Content</label>
        <GeneralEditor
          blog={{ content }} // full EditorJS object
          onChange={setContent}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
}
