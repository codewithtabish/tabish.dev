import { NextResponse } from "next/server";
import crypto from "crypto";
import sharp from "sharp";
import { uploadFileToS3 } from "@/utils/s3-utils";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ success: 0, error: "No file uploaded" }, { status: 400 });
    }

    const MAX_SIZE = 8 * 1024 * 1024;
    if (!file.type.startsWith("image/") || file.size > MAX_SIZE) {
      return NextResponse.json({ success: 0, error: "Invalid file type or size" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    console.log("Received file size:", buffer.length);

    const uniqueName = `${crypto.randomUUID()}-og.webp`;

    const processed = await sharp(buffer)
      .resize({
        width: 1200,
        height: 630,
        fit: "cover", // crop to exact OG ratio
      })
      .webp({ quality: 80 })
      .toBuffer();

    console.log("Processed image size:", processed.length);

    const url = await uploadFileToS3(processed, uniqueName, "image/webp");
    console.log("Uploaded OG URL:", url);

    return NextResponse.json({ success: 1, file: { url } });

  } catch (err: any) {
    // Log full error in Vercel logs
    console.error("OG upload error:", err);

    // Return detailed error to API response for debugging
    return NextResponse.json(
      {
        success: 0,
        error: err.message || "Upload failed",
        name: err.name || "Error",
        stack: err.stack || null, // optional stack trace for debugging
      },
      { status: 500 }
    );
  }
}
