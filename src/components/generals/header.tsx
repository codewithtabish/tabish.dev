"use client";

import React, { Suspense, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Logo } from "../logo";
import { Menu, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  ClerkLoaded,
} from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import ProfileDropdown from "./profile-dropdown";
import { AvatarFallbackSection } from "../fallbacks/avatar-fallback";
import { usePathname } from "next/navigation"; // 👈 import this

const HeaderSection = () => {
  const [menuState, setMenuState] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname(); // 👈 current route path

  // 👇 Hide header if not on homepage
  if (pathname !== "/") {
    return null;
  }

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "Open Source", href: "/open-source" },
  ];

  return (
    <header className="my-5 py-6">
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full border-b border-dashed backdrop-blur-md"
      >
        <div className="m-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo and Menu */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:pr-4">
                <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Auth + Theme */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                <ClerkLoaded>
                  <SignedOut>
                    <SignInButton
                      mode="modal"
                      appearance={{
                        baseTheme: theme === "dark" ? dark : undefined,
                        variables: {
                          borderRadius: "0.75rem",
                          colorPrimary:
                            theme === "dark" ? "#22d3ee" : "#6366f1",
                        },
                      }}
                    >
                      <Button>Get Started</Button>
                    </SignInButton>
                  </SignedOut>

                  <SignedIn>
                    <Suspense fallback={<AvatarFallbackSection />}>
                      <ProfileDropdown />
                    </Suspense>
                  </SignedIn>
                </ClerkLoaded>

                <AnimatedThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
