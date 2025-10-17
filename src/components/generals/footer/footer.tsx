"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import FooterQr from "./footer-qr";

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/codewithtabish" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/codewithtabish" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/codewithtabish" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/codewithtabish" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/codewithtabish" },
  { icon: Mail, label: "Email", href: "mailto:hello@codewithtabish.com" },
];

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const SUPPORT_LINKS = [
  { label: "Contact", href: "/contact" },
  { label: "Help", href: "/help" },
  { label: "FAQ", href: "/faq" },
];

const WAITLIST_LINK = { label: "Join Waitlist", href: "/waitlist" };

export default function Footer() {
  return (
    <footer className="mt-16 w-full rounded-t-xl border-t">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
          {/* Brand and description */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-2 text-primary">
              <span className="text-2xl font-semibold text-black dark:text-white">
                CodeWithTabish
              </span>
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-black dark:text-white">
              Learn to build powerful apps, websites, and AI tools. 
              Tutorials and projects made simple for every developer.
            </p>
            <ul className="mt-8 flex justify-center gap-6 md:gap-8">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition hover:text-primary/80"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-6 text-black dark:text-white">Company</p>
            <ul className="space-y-4 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black dark:text-white hover:text-primary transition font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-6 text-black dark:text-white">Support</p>
            <ul className="space-y-4 text-sm">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black dark:text-white hover:text-primary transition font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Waitlist Section */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-6 text-black dark:text-white">Waitlist</p>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href={WAITLIST_LINK.href}
                  className="text-black dark:text-white hover:text-primary transition font-medium"
                >
                  {WAITLIST_LINK.label}
                </Link>
              </li>
            </ul>
            <FooterQr />
            <div className="flex justify-end mx-auto w-full mt-4">
              <AnimatedThemeToggler />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-6">
          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-sm text-black dark:text-white">
              © {new Date().getFullYear()} CodeWithTabish. All rights reserved.
            </p>
            <p className="text-sm text-black/80 dark:text-white/80">
              Made with ❤️ by CodeWithTabish
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
