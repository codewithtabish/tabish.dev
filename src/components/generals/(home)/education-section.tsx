import { Timeline } from "@/components/ui/timeline";
import React from "react";

export function TimelineDemo() {
  const data = [
    {
      title: "2012 - 2014",
      content: (
        <div>
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            Mohib Model School
          </h2>
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Completed Higher Secondary Education with focus on Science and Mathematics.
          </p>
          <p className="mb-2 text-xs text-neutral-500 dark:text-neutral-500">
            A school renowned for academic excellence and extracurricular programs.
          </p>
          <a
            href="https://www.mohibmodelschool.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            Visit Website →
          </a>
        </div>
      ),
    },
    {
      title: "2014 - 2016",
      content: (
        <div>
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            XYZ College
          </h2>
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Completed Intermediate Education with specialization in Computer Science.
          </p>
          <p className="mb-2 text-xs text-neutral-500 dark:text-neutral-500">
            A college known for strong STEM curriculum and student innovation programs.
          </p>
          <a
            href="https://www.xyzcollege.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            Visit Website →
          </a>
        </div>
      ),
    },
    {
      title: "2016 - 2020",
      content: (
        <div>
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            University of Technology
          </h2>
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Bachelor of Science in Software Engineering.
          </p>
          <p className="mb-2 text-xs text-neutral-500 dark:text-neutral-500">
            Learned full-stack development, algorithms, and software architecture. Graduated with distinction.
          </p>
          <a
            href="https://www.universityoftechnology.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            Visit Website →
          </a>
        </div>
      ),
    },

  
  ];

  return (
    <div className="relative md:max-w-5xl py-20 mx-auto overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
