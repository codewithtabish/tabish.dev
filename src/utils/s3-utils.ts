import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import path from "path";
import { randomUUID } from "crypto";

// create S3 client once
const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadFileToS3(file: Buffer, filename: string, mimetype: string): Promise<string> {
  try {
    console.log("ENV TEST:", process.env.AWS_ACCESS_KEY_ID);

    // Add folder prefix if set
    const folder = process.env.AWS_S3_FOLDER ? `${process.env.AWS_S3_FOLDER}/` : "";
    const ext = path.extname(filename);
    const uniqueName = `${randomUUID()}${ext}`;
    const s3Key = `${folder}${uniqueName}`;
    console.log('here again')

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: s3Key,
      Body: file,
      ContentType: mimetype,
    });

    await s3.send(command);

    // Return CloudFront URL
    console.log(`${process.env.CLOUDFRONT_URL}/${s3Key}`)
    return `${process.env.CLOUDFRONT_URL}/${s3Key}`;

  } catch (err: any) {
    console.error("S3 Upload Error:", err);
    throw new Error("Error uploading file to S3");
  }
}
