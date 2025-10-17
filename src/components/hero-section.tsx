'use client'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Menu, SendHorizonal, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import CardStackExample from './generals/(home)/card-stacks'
import LogoCloud from './logo-cloud'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'

const menuItems = [
  { name: 'Features', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
]

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false)

  return (
    <>
      {/* Header / Navbar */}
      <header>
        <nav
          data-state={menuState && 'active'}
          className="fixed z-20 w-full border-b border-dashed backdrop-blur-md  ">
          <div className="m-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link href="/" aria-label="home" className="flex items-center space-x-2">
                  <Logo />
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">
                      <span>Login</span>
                    </Link>
                  </Button>

                  <Button asChild size="sm">
                    <Link href="#">
                      <span>Sign Up</span>
                    </Link>
                  </Button>
                  <AnimatedThemeToggler/>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className=''>
        <section className="overflow-hidden bg-gradient-to-b from-white/70 via-white/50 dark:from-zinc-950/70 dark:via-zinc-950/50">
          <div className="relative mx-auto max-w-6xl px-6 py-28 lg:py-36">
            <div className="lg:flex lg:items-center lg:gap-12">

              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <Link
                  href="/"
                  className="flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium">
                  <span className="bg-muted rounded px-2 py-1 text-xs">New</span>
                  <span>Introduction Tailark Html</span>
                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-10 text-3xl font-bold md:text-4xl ">
                  Hi, I'm Tabish – Full Stack Developer & Digital Creator
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
              <div className="mt-16 lg:mt-0 lg:w-1/2 flex justify-center">
                <CardStackExample />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
