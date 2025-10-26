"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BlogSeoCompProps {
  seoData: any;
}

const BlogSeoComp: React.FC<BlogSeoCompProps> = ({ seoData }) => {
  return (
    <div className="mt-6 p-6 bg-muted rounded-xl shadow-sm space-y-4">
      <h3 className="font-semibold text-xl mb-2">SEO Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Meta Title</Label>
          <Input value={seoData.metaTitle || ""} readOnly />
        </div>

        <div>
          <Label>Meta Description</Label>
          <Textarea value={seoData.metaDescription || ""} readOnly />
        </div>

        <div>
          <Label>Keywords</Label>
          <Input value={seoData.metaKeywords || ""} readOnly />
        </div>

        <div>
          <Label>OG Title</Label>
          <Input value={seoData.ogTitle || ""} readOnly />
        </div>

        <div>
          <Label>OG Description</Label>
          <Textarea value={seoData.ogDescription || ""} readOnly />
        </div>

        <div>
          <Label>OG Image URL</Label>
          <Input value={seoData.ogImageUrl || ""} readOnly />
        </div>

        <div>
          <Label>Twitter Title</Label>
          <Input value={seoData.twitterTitle || ""} readOnly />
        </div>

        <div>
          <Label>Twitter Description</Label>
          <Textarea value={seoData.twitterDescription || ""} readOnly />
        </div>

        <div>
          <Label>Twitter Image</Label>
          <Input value={seoData.twitterImage || ""} readOnly />
        </div>

        <div className="md:col-span-2">
          <Label>Schema Markup (JSON-LD)</Label>
          <Textarea
            className="font-mono text-sm"
            value={seoData.schemaMarkup || ""}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSeoComp;
