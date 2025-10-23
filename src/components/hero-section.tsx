'use client'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Menu, SendHorizonal, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import CardStackExample from './generals/(home)/card-stacks'
import LogoCloud from './logo-cloud'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
import { AppleHelloEnglishEffect } from './apple-hello-effect'
import { Vortex } from './ui/vortex'

const menuItems = [
  { name: 'Features', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
]

export default function HeroSection() {

  return (
    <>
      {/* Header / Navbar */}
  

      {/* Hero Section */}
      {/* <Vortex className=''> */}

      <main className=''>
        <section className="overflow-hidden bg-gradient-to-b from-white/70 via-white/50 dark:from-zinc-950/70 dark:via-zinc-950/50">
          <div className="relative mx-auto max-w-6xl px-6 py-28 lg:py-36">
            <div className="lg:flex lg:items-center lg:gap-12">

              <div className="relative z-10 flex-1   mb-8 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <Link
                  href="/"
                  className="flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium">
                  <span className="bg-muted rounded px-2 py-1 text-xs">New</span>
                  <span>tabish-</span>
                  <ArrowRight className="size-4" />
                </Link>
                <AppleHelloEnglishEffect/>

                <h1 className="mt-10 text-3xl ml-20 font-bold md:text-4xl ">
                   I'm Tabish – Full Stack Developer & Digital Creator
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  I build production-ready web applications and digital products that are scalable, modern, and fully customizable. Passionate about coding, problem-solving, and delivering high-quality user experiences.
                </p>

                {/* <form className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
                  <div className="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border bg-background pr-3 shadow shadow-zinc-950/5 focus-within:ring-2 focus-within:ring-muted">
                    <Mail className="absolute left-5 inset-y-0 my-auto size-5 text-caption pointer-events-none" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                    />
                    <div>
                      <Button aria-label="submit" className="rounded-[var(--radius)]">
                        <span className="hidden md:block">Get Started</span>
                        <SendHorizonal className="mx-auto size-5 md:hidden" strokeWidth={2} />
                      </Button>
                    </div>
                  </div>
                </form> */}
                      <LogoCloud/>
              </div>



              {/* Card Stack Row */}
              <div className="mt-16 lg:mt-0  flex-1 flex justify-end mx-auto items-end ">
              <p></p>
                <CardStackExample />
              </div>
            </div>
          </div>
        </section>
      </main>
            {/* </Vortex> */}

    </>
  )
}
