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
    const uniqueName = `${crypto.randomUUID()}-banner.webp`;

    const processed = await sharp(buffer)
      .resize({
        width: 1920,
        height: 1080,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toBuffer();

    const url = await uploadFileToS3(processed, uniqueName, "image/webp");

    return NextResponse.json({ success: 1, file: { url } });

  } catch (err: any) {
    // Log the full error
    console.error("Banner upload error:", err);

    // Return exact error details in the response
    return NextResponse.json(
      {
        success: 0,
        error: err.message || "Upload failed",
        stack: err.stack || null, // optional: include stack trace for debugging
        name: err.name || "Error",
      },
      { status: 500 }
    );
  }
}
