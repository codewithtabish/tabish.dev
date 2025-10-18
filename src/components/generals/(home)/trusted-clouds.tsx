"use client"

import Image from "next/image"

export default function HomeLogoCloudTrustedSection() {
  return (
    <section className="bg-background py-16 w-full flex justify-center">
      <div className="mx-auto max-w-5xl px-6 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Leading Companies
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            We collaborate with global brands and innovative teams to deliver high-quality digital solutions.
          </p>
        </div>

        {/* Logo Cloud */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/nvidia.svg"
            alt="Nvidia"
            width={120}
            height={40}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/column.svg"
            alt="Column"
            width={110}
            height={35}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/github.svg"
            alt="GitHub"
            width={100}
            height={35}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/nike.svg"
            alt="Nike"
            width={120}
            height={40}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/laravel.svg"
            alt="Laravel"
            width={110}
            height={35}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/lilly.svg"
            alt="Lilly"
            width={130}
            height={45}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
            alt="Lemon Squeezy"
            width={130}
            height={40}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/openai.svg"
            alt="OpenAI"
            width={130}
            height={40}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
            alt="Tailwind CSS"
            width={130}
            height={40}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/vercel.svg"
            alt="Vercel"
            width={130}
            height={40}
          />
          <Image
            className="dark:invert"
            src="https://html.tailus.io/blocks/customers/zapier.svg"
            alt="Zapier"
            width={130}
            height={40}
          />
        </div>
      </div>
    </section>
  )
}
