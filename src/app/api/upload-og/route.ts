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
    const uniqueName = `${crypto.randomUUID()}-og.webp`;

    const processed = await sharp(buffer)
      .resize({
        width: 1200,
        height: 630,
        fit: "cover", // crop to exact OG ratio
      })
      .webp({ quality: 80 })
      .toBuffer();

    const url = await uploadFileToS3(processed, uniqueName, "image/webp");

    return NextResponse.json({ success: 1, file: { url } });
  } catch (err: any) {
    console.error("OG upload error:", err);
    return NextResponse.json({ success: 0, error: err.message || "Upload failed" }, { status: 500 });
  }
}
