import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          {/* The Tabish portfolio brings together my skills and expertise. */}
          {/* About Tabish ... */}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                 <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/hero/hero-two.jpeg"
                className="hidden rounded-[15px] dark:block"
                alt="Tabish profile dark"
                width={1206}
                height={612}
              />
              <Image
                src="/hero/hero-two.jpeg"
                className="rounded-[15px] shadow dark:hidden"
                alt="Tabish profile light"
                width={1206}
                height={612}
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              I am evolving to be more than just a developer. <span className="text-accent-foreground font-bold">I support an entire digital ecosystem</span> — from mobile apps to AI-powered solutions.
            </p>

            <p className="text-muted-foreground">
              My work covers web development, backend systems, AI integration, and mobile apps, helping businesses and users achieve seamless experiences.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-accent-foreground" />
                  <h3 className="text-sm font-medium">Fast & Efficient</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  I build applications optimized for speed, responsiveness, and smooth user experience.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4 text-accent-foreground" />
                  <h3 className="text-sm font-medium">Powerful & Scalable</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  From backend APIs to AI integrations, my solutions are robust, secure, and scalable.
                </p>
              </div>
            </div>

            <Link href={''} className="text-accent-foreground font-semibold mt-4 inline-block">
              Learn more…
            </Link>
          </div>

          {/* Image Section */}
     
        </div>
      </div>
    </section>
  )
}
