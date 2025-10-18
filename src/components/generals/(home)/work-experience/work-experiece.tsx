"use client";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/my-timeline";
import { workExperienceSectionsContentArray } from "@/constants/work-experience-content";


export default function WorkExperienceSection() {
  const section = workExperienceSectionsContentArray[0];

  return (
    <section className="md:max-w-5xl mx-auto flex justify-center items-center py-16">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{section.title}</h2>
          <p className="mt-2 text-muted-foreground ">{section.subtitle}</p>
        </div>

        {/* Timeline */}
        <Timeline className="flex justify-center items-start">
          {section.entries.map((entry, idx) => (
            <TimelineItem
              key={idx}
              step={idx + 1}
              className="group-data-[orientation=vertical]/timeline:sm:ms-32 mx-auto w-full"
            >
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate className="text-sm font-medium text-muted-foreground">
                  {entry.endDate}
                </TimelineDate>
                <TimelineTitle className="text-lg font-semibold">
                  {entry.company}
                </TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>

              <TimelineContent>
                <p className="font-medium text-primary">{entry.position}</p>
                <p className="text-muted-foreground mt-1 md:max-w-[80%]">{entry.description}</p>

                {entry.website && (
                  <a
                    href={entry.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-blue-500 hover:underline"
                  >
                    Visit Website →
                  </a>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
