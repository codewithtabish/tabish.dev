"use client";

import helpContent from "@/constants/help-content";


export default function HelpContentComp() {
  return (
    <section
      className="
        w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-2xl
        lg:max-w-3xl
        xl:max-w-4xl
        mx-auto
        py-8
        sm:py-10
        md:py-12
        px-2
        sm:px-4
        md:px-8
        transition-all
      "
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">
        {helpContent.title}
      </h1>

      <p className="mb-8 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
        {helpContent.intro}
      </p>

      {helpContent.sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
            {section.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base whitespace-pre-line">
            {section.content}
          </p>
        </div>
      ))}

      <div className="mt-10 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-600 rounded">
        <span className="font-medium text-blue-700 dark:text-blue-300">
          {helpContent.chatPrompt}
        </span>
      </div>
    </section>
  );
}
