// app/(components)/HeaderWrapper.tsx
import { auth } from "@clerk/nextjs/server";
import { createUserIfNotExists } from "@/actions/user";
import HeaderSection from "./header";

export default async function HeaderWrapper() {
  // Get auth state (server-side)
  const { userId } = await auth();

  // Only create user in DB if logged in
  if (userId) {
    await createUserIfNotExists();
  }

  // Render your client-side header
  return <HeaderSection  />;
}
