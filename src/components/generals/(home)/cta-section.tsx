"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const CallToActionSection = dynamic(() => import("./cta-section"), {
  ssr: false,
  loading: () => <div className="text-center text-sm text-gray-400">Loading...</div>,
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

function ElegantShape({
  className,
  delay = 0,
  width = 300,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.05]",
  borderRadius = 16,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  borderRadius?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, rotate: rotate - 10 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className={cn("absolute", className)}
    >
      <div
        style={{
          width,
          height,
          borderRadius,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)",
        }}
        className={cn(
          "backdrop-blur-[1px]",
          "ring-1 ring-white/[0.02] dark:ring-white/[0.03]"
        )}
      />
    </motion.div>
  );
}

export default function CtaParentSection({
  title1 = "Elevate Your",
  title2 = "Digital Vision",
}: {
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 + i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#030303]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]" />

      {/* Light shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.2} width={250} height={400} rotate={-8} className="left-[-10%] top-[-5%]" />
        <ElegantShape delay={0.3} width={400} height={150} rotate={12} className="right-[-10%] bottom-[5%]" />
        <ElegantShape delay={0.4} width={200} height={200} rotate={25} className="left-[10%] top-[40%]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          custom={1}
          variants={fadeUpVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CallToActionSection />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-black to-black/80 dark:from-white dark:to-white/80">
              {title1}
            </span>
            <br />
            <span
              className={cn(
                "bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-black/90 to-rose-300 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300",
                pacifico.className
              )}
            >
              {title2}
            </span>
          </h1>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUpVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg md:text-xl text-black/40 dark:text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
            Beautiful UI Components built with Tailwind CSS.
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-white/70 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/70 pointer-events-none" />
    </div>
  );
}
