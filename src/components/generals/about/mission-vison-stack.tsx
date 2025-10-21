"use client";

import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function MissionVisionSection() {
  return (
    <section className="w-full  bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Our Mission */}
          <div>
           
            <div className="h-[40rem] flex items-center justify-center w-full">
                <div className="flex flex-col gap-3">

                 <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
              Our Mission
            </h2>
              <CardStack items={MISSION_CARDS} />
            </div>
                </div>
          </div>

          {/* Our Vision */}
          <div>
         
            <div className="h-[40rem] flex items-center justify-center w-full">
                    <div className="flex flex-col gap-3">

                 <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
              Our Vision
            </h2>
              <CardStack items={VISION_CARDS} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Highlight utility
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 rounded",
        className
      )}
    >
      {children}
    </span>
  );
};

// Cards for Mission
const MISSION_CARDS = [
  {
    id: 0,
    name: "Innovation",
    designation: "Driving Technology Forward",
    content: (
      <p>
        Our mission is to <Highlight>innovate constantly</Highlight> and bring
        modern, high-performing web experiences that help people connect and
        grow.
      </p>
    ),
  },
  {
    id: 1,
    name: "Excellence",
    designation: "Quality Above All",
    content: (
      <p>
        We aim for <Highlight>perfection in every detail</Highlight> — from
        design to deployment — ensuring that every project stands out.
      </p>
    ),
  },
  {
    id: 2,
    name: "Empowerment",
    designation: "Building Opportunities",
    content: (
      <p>
        We strive to <Highlight>empower developers and creators</Highlight> with
        tools and platforms that enable them to turn ideas into reality.
      </p>
    ),
  },
];

// Cards for Vision
const VISION_CARDS = [
  {
    id: 0,
    name: "Global Reach",
    designation: "Connecting the World",
    content: (
      <p>
        Our vision is to <Highlight>make technology accessible</Highlight> to
        everyone and bridge the gap between creativity and opportunity.
      </p>
    ),
  },
  {
    id: 1,
    name: "Sustainability",
    designation: "Future-Proof Technology",
    content: (
      <p>
        We believe in <Highlight>sustainable innovation</Highlight> — creating
        solutions that serve today and inspire tomorrow.
      </p>
    ),
  },
  {
    id: 2,
    name: "Legacy",
    designation: "Inspiring the Next Generation",
    content: (
      <p>
        We dream of leaving a <Highlight>lasting impact</Highlight> by shaping
        the digital future with creativity, passion, and purpose.
      </p>
    ),
  },
];
