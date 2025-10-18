"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { feedbackContentArray } from "@/constants/testmonial-section-data"

export default function TestmonialSection() {
  const section = feedbackContentArray[0] // Only English

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

        {/* Responsive Testimonials */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
          {/* First testimonial */}
          <div className="flex items-center justify-center px-4 lg:col-span-1">
            <blockquote
              className="max-w-md w-full space-y-6 p-4 lg:border-r-2 border-gray-300 mx-auto"
            >
              <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-center">
                {section.testimonials[0].feedback}
              </p>
              <div className="flex items-center justify-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src={section.testimonials[0].image}
                    alt={section.testimonials[0].name}
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                  <AvatarFallback>
                    {section.testimonials[0].name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <cite className="text-sm font-medium">
                    <a
                      href={section.testimonials[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {section.testimonials[0].name}
                    </a>
                  </cite>
                  <span className="text-muted-foreground block text-xs sm:text-sm">
                    {section.testimonials[0].role}
                  </span>
                </div>
              </div>
            </blockquote>
          </div>

          {/* Next two testimonials */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {section.testimonials.slice(1, 3).map((t, idx) => (
              <blockquote
                key={idx}
                className={`flex flex-col justify-between bg-transparent p-4 space-y-6 border-gray-300 ${
                  idx === 0 ? "lg:border-b-2" : ""
                } mx-auto`}
              >
                <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-center">
                  {t.feedback}
                </p>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Avatar className="size-10">
                    <AvatarImage
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {t.name}
                      </a>
                    </cite>
                    <span className="text-muted-foreground block text-xs sm:text-sm">
                      {t.role}
                    </span>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
