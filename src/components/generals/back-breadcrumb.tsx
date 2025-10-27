"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"; // ShadeCN Breadcrumb

interface BackBreadcrumbProps {
  href?: string; // optional, go to a specific path
  current?: string; // current page text
  parentText?: string; // optional parent name, e.g., "Blogs"
  parentHref?: string; // optional parent link
}

const BackBreadcrumb: React.FC<BackBreadcrumbProps> = ({
  href,
  current,
  parentText = "Blogs",
  parentHref = "/dashboard/blogs",
}) => {
  const router = useRouter();

  return (
    <div className="mb-6 flex flex-col gap-2">
      {/* Back button */}
      <button
        onClick={() => (href ? router.push(href) : router.back())}
        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Breadcrumb */}
      {current && (
        <Breadcrumb className="text-sm">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={parentHref} className="hover:underline">
                {parentText}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:underline">{current}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </div>
  );
};

export default BackBreadcrumb;
