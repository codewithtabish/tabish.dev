// "use client";

// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { X, Loader2 } from "lucide-react";
// import { toast } from "sonner";


// interface BlogInputFieldsProps {
//   blogData: {
//     title: string;
//     shortDescription: string;
//     imageUrl: string;
//     ogImageUrl: string;
//     category: string;
//   };
//   onChange: (field: string, value: any) => void;
// }

// const BlogInputFields = ({ blogData, onChange }: BlogInputFieldsProps) => {
//   const [loadingMain, setLoadingMain] = useState(false);
//   const [loadingOg, setLoadingOg] = useState(false);

//   const mainFileRef = useRef<HTMLInputElement>(null);
//   const ogFileRef = useRef<HTMLInputElement>(null);

//   // ✅ Upload image via API (only show preview once upload succeeds)

// // ✅ Upload image via API (preview only after successful upload)
// const uploadImage = async (file: File, type: "imageUrl" | "ogImageUrl") => {
//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     // Set appropriate loading state
//     if (type === "imageUrl") setLoadingMain(true);
//     else setLoadingOg(true);

//     // Choose API endpoint based on type
//     const endpoint = type === "imageUrl" ? "/api/upload-file" : "/api/upload-og";

//     const res = await fetch(endpoint, {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();

//     if (data?.file?.url) {
//       // ✅ Set preview after receiving actual URL
//       onChange(type, data.file.url);
//       toast.success("Upload successful!");
//     } else {
//       toast.error("Upload failed. Please try again.");
//       console.error("Upload failed response:", data);
//     }
//   } catch (error) {
//     console.error("Upload error:", error);
//     toast.error("Something went wrong during upload.");
//   } finally {
//     setLoadingMain(false);
//     setLoadingOg(false);
//   }
// };

//   // File input change
//   const handleImageChange = async (
//     e: React.ChangeEvent<HTMLInputElement>,
//     type: "imageUrl" | "ogImageUrl"
//   ) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     await uploadImage(file, type);
//   };

//   const handleRemoveImage = (type: "imageUrl" | "ogImageUrl") => {
//     onChange(type, "");
//     if (type === "imageUrl" && mainFileRef.current)
//       mainFileRef.current.value = "";
//     if (type === "ogImageUrl" && ogFileRef.current)
//       ogFileRef.current.value = "";
//   };

//   return (
//     <div className="space-y-6 md:max-w-4xl mx-auto bg-white/80 dark:bg-background/40 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-200">
//       {/* Title */}
//       <div>
//         <Label className="mb-2 block text-gray-800">Blog Title</Label>
//         <Input
//           placeholder="Enter your blog title"
//           value={blogData.title}
//           onChange={(e) => onChange("title", e.target.value)}
//         />
//       </div>

//       {/* Short Description */}
//       <div>
//         <Label className="mb-2 block text-gray-800">Short Description</Label>
//         <Textarea
//           placeholder="Write a short summary..."
//           value={blogData.shortDescription}
//           onChange={(e) => onChange("shortDescription", e.target.value)}
//         />
//       </div>

//       {/* Category */}
//       <div>
//         <Label className="mb-2 block text-gray-800">Category</Label>
//         <Select
//           value={blogData.category}
//           onValueChange={(value) => onChange("category", value)}
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Select category" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="technology">Technology</SelectItem>
//             <SelectItem value="development">Development</SelectItem>
//             <SelectItem value="design">Design</SelectItem>
//             <SelectItem value="lifestyle">Lifestyle</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Featured Image Upload */}
//       <div>
//         <Label className="mb-2 block text-gray-800">Featured Image</Label>
//         <Input
//           ref={mainFileRef}
//           type="file"
//           accept="image/*"
//           onChange={(e) => handleImageChange(e, "imageUrl")}
//           disabled={loadingMain}
//         />
//         {loadingMain && (
//           <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
//             <Loader2 className="animate-spin h-4 w-4" /> Uploading image...
//           </p>
//         )}

//         {/* ✅ Only show preview after API returns a valid URL */}
//         {blogData.imageUrl && (
//           <div className="mt-3 relative w-full max-w-sm h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
//             <Image
//               src={blogData.imageUrl}
//               alt="Featured Image"
//               fill
//               className="object-cover"
//             />
//             <Button
//               size="icon"
//               variant="destructive"
//               onClick={() => handleRemoveImage("imageUrl")}
//               className="absolute top-2 right-2 rounded-full"
//             >
//               <X className="h-4 w-4 text-white" />
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* OG Image Upload */}
//       <div>
//         <Label className="mb-2 block text-gray-800">OG Image (for SEO)</Label>
//         <Input
//           ref={ogFileRef}
//           type="file"
//           accept="image/*"
//           onChange={(e) => handleImageChange(e, "ogImageUrl")}
//           disabled={loadingOg}
//         />
//         {loadingOg && (
//           <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
//             <Loader2 className="animate-spin h-4 w-4" /> Uploading OG image...
//           </p>
//         )}

//         {blogData.ogImageUrl && (
//           <div className="mt-3 relative w-full max-w-sm h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
//             <Image
//               src={blogData.ogImageUrl}
//               alt="OG Image"
//               fill
//               className="object-cover"
//             />
//             <Button
//               size="icon"
//               variant="destructive"
//               onClick={() => handleRemoveImage("ogImageUrl")}
//               className="absolute top-2 right-2 rounded-full"
//             >
//               <X className="h-4 w-4 text-white" />
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogInputFields;
