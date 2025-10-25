// lib/prisma.ts

import { PrismaClient } from "@/generated/prisma";

declare global {
  // Allow global `prisma` to avoid hot-reload issues in development
  // (Next.js reloads modules multiple times in dev mode)
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    // log: ["query", "info", "warn", "error"], // Optional: logs queries in console
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;

