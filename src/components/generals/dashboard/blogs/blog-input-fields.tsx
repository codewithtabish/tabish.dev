"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface BlogInputFieldsProps {
  blogData: {
    title: string;
    shortDescription: string;
    imageUrl: string;
    ogImageUrl: string;
    category: string;
  };
  onChange: (field: string, value: any) => void;
}

const BlogInputFields = ({ blogData, onChange }: BlogInputFieldsProps) => {
  const handleRemoveImage = (type: "imageUrl" | "ogImageUrl") => {
    onChange(type, "");
  };

  return (
    <div className="space-y-6 md:max-w-4xl mx-auto bg-white/80 dark:bg-background/40 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-200">
      {/* Title */}
      <div>
        <Label className="mb-2 block text-gray-800">Blog Title</Label>
        <Input
          placeholder="Enter your blog title"
          value={blogData.title}
          onChange={(e) => onChange("title", e.target.value)}
        />
      </div>

      {/* Short Description */}
      <div>
        <Label className="mb-2 block text-gray-800">Short Description</Label>
        <Textarea
          placeholder="Write a short summary..."
          value={blogData.shortDescription}
          onChange={(e) => onChange("shortDescription", e.target.value)}
        />
      </div>

      {/* Category */}
      <div>
        <Label className="mb-2 block text-gray-800">Category</Label>
        <Select
          value={blogData.category}
          onValueChange={(value) => onChange("category", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="development">Development</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="lifestyle">Lifestyle</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Featured Image URL */}
      <div>
        <Label className="mb-2 block text-gray-800">Featured Image URL</Label>
        <Input
          placeholder="Paste the image URL..."
          value={blogData.imageUrl}
          onChange={(e) => onChange("imageUrl", e.target.value)}
        />

        {/* Preview */}
        {blogData.imageUrl && (
          <div className="mt-3 relative w-full max-w-sm h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
            <Image
              src={blogData.imageUrl}
              alt="Featured Image"
              fill
              className="object-cover"
            />
            <Button
              size="icon"
              variant="destructive"
              onClick={() => handleRemoveImage("imageUrl")}
              className="absolute top-2 right-2 rounded-full"
            >
              <X className="h-4 w-4 text-white" />
            </Button>
          </div>
        )}
      </div>

      {/* OG Image URL */}
      <div>
        <Label className="mb-2 block text-gray-800">OG Image URL (for SEO)</Label>
        <Input
          placeholder="Paste the OG image URL..."
          value={blogData.ogImageUrl}
          onChange={(e) => onChange("ogImageUrl", e.target.value)}
        />

        {/* Preview */}
        {blogData.ogImageUrl && (
          <div className="mt-3 relative w-full max-w-sm h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
            <Image
              src={blogData.ogImageUrl}
              alt="OG Image"
              fill
              className="object-cover"
            />
            <Button
              size="icon"
              variant="destructive"
              onClick={() => handleRemoveImage("ogImageUrl")}
              className="absolute top-2 right-2 rounded-full"
            >
              <X className="h-4 w-4 text-white" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogInputFields;
