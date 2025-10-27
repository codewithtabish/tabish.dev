"use client";

/**
 * @author: @dorian_baffier
 * @description: Card Stack (peeked stacked view, polished)
 * @version: 1.2.0
 * @date: 2025-08-29
 * @license: MIT
 */

import { useState } from "react";
import { motion } from "framer-motion";

// import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Products only need id + image
interface Product {
  id: string;
  image: string;
}

// Dummy images
const products: Product[] = [
  { id: "instant-pay1", image: "/hero/hero-two.jpeg" },
  { id: "instant-pay2", image: "/hero/hero-two.jpeg" },
  { id: "instant-pay3", image: "/hero/hero-two.jpeg" },
  { id: "instant-pay4", image: "/hero/hero-two.jpeg" },
//   { id: "crypto-pay", image: "/images/three.png" },
//   { id: "business-pay", image: "/images/developer.jpg" },
//   { id: "business-pay2", image: "/images/four.png" },
];

interface CardProps {
  product: Product;
  index: number;
  totalCards: number;
  isExpanded: boolean;
}

const Card = ({ product, index, totalCards, isExpanded }: CardProps) => {
  // Stacked positions
  const overlapOffset = 20; // how much each card peeks below the top
  const defaultX = 0;
  const defaultY = index * overlapOffset;
  const defaultScale = 1 - index * 0.02;
  const defaultRotate = 0;

  // Expanded positions
  const cardWidth = 320;
  const cardOverlap = 240;
  const totalExpandedWidth =
    cardWidth + (totalCards - 1) * (cardWidth - cardOverlap);
  const expandedCenterOffset = totalExpandedWidth / 2;

  const spreadX =
    index * (cardWidth - cardOverlap) - expandedCenterOffset + cardWidth / 2;
  const spreadY = 0;
  const spreadRotate = index * 5 - (totalCards - 1) * 2.5;
  const spreadScale = 1;

  return (
    <motion.div
      initial={{
        x: defaultX,
        y: defaultY,
        scale: defaultScale,
        rotate: defaultRotate,
      }}
      animate={{
        x: isExpanded ? spreadX : defaultX,
        y: isExpanded ? spreadY : defaultY,
        rotate: isExpanded ? spreadRotate : defaultRotate,
        scale: isExpanded ? spreadScale : defaultScale,
        zIndex: totalCards - index,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
      className={cn(
        "absolute inset-0 rounded-2xl p-6 w-full flex-1",
        "transition-all duration-500 ease-out transform-gpu"
      )}
      style={{
        maxWidth: "320px",
        transformStyle: "preserve-3d",
        perspective: "2000px",
        left: "50%",
        marginLeft: "-160px",
        zIndex: totalCards - index,
      }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary/10 shadow-lg">
        <Image
          src={product.image}
          alt={`Card ${product.id}`}
          className="object-cover w-full h-full rounded-2xl"
          loading="lazy"
          width={400}
          height={400}
        />
      </div>
    </motion.div>
  );
};

interface CardStackProps {
  className?: string;
}

export default function CardStackExample({ className }: CardStackProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <button
      className={cn(
        "relative mx-auto cursor-pointer min-h-[400px] w-full md:max-w-[1200px] flex items-center justify-center mb-8",
        "appearance-none bg-transparent border-0 p-0",
        className
      )}
      onClick={handleToggle}
      aria-label="Toggle card stack"
      type="button"
    >
      {products.map((product, index) => {
        return (
          <Card
            key={product.id}
            product={product}
            index={index}
            totalCards={products.length}
            isExpanded={isExpanded}
          />
        );
      })}
    </button>
  );
}
