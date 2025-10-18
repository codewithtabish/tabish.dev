"use client"

import { Card } from "@/components/ui/card"
import { skillContentArray } from "@/constants/skill-section-data"
import { Android, AWS, Docker, FastAPI, Linux, MLNLP } from "./skill-logos"

const iconMap = {
  Android: <Android width={40} height={40} />,
  FastAPI: <FastAPI width={40} height={40} />,
  MLNLP: <MLNLP width={40} height={40} />,
  Docker: <Docker width={40} height={40} />,
  AWS: <AWS width={40} height={40} />,
  Linux: <Linux width={40} height={40} />,
}

export default function SkillSection() {
  const section = skillContentArray[0] // Just use the first object from your array

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 md:space-y-16">
        {/* Section Heading */}
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
            {section.title}
          </h2>
          <p className="text-base sm:text-lg">{section.subtitle}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {section.skills.map((skill, idx) => (
            <Card
              key={idx}
              className="p-6 flex flex-col items-center text-center h-full"
            >
              <div className="mb-4">
                {iconMap[skill.icon as keyof typeof iconMap]}
              </div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
