"use server";

import prisma from "@/lib/prisma-client";
import { auth, currentUser } from "@clerk/nextjs/server";

/**
 * Server Action to ensure Clerk user exists in DB
 * - Called after login or on page load (if authenticated)
 * - Creates user if not found in Prisma DB
 */
export async function createUserIfNotExists() {
  try {
    // Clerk authentication
    const { userId } = await auth();
    if (!userId) return { success: false, message: "User not authenticated." };

    const user = await currentUser();
    if (!user) return { success: false, message: "Unable to get user data." };

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    if (existingUser) {
      return { success: true, message: "User already exists.", user: existingUser };
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress ?? "",
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      },
    });

    return { success: true, message: "User created successfully.", user: newUser };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Failed to create user." };
  }
}
