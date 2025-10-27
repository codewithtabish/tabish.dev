import FeaturedBlogSkeleton from '@/components/fallbacks/featured-blogs-fallback'
import AboutSection from '@/components/generals/(home)/about-section'
import CtaWrapperSection from '@/components/generals/(home)/cta-wrapper'
import DashboardBentoGrid from '@/components/generals/(home)/dashboard-bentogrid'
// import CtaParentSection from '@/components/generals/(home)/cta-section'
import { TimelineDemo } from '@/components/generals/(home)/education-section'
import FeaturedBlogs from '@/components/generals/(home)/featured-blogs'
import SkillSection from '@/components/generals/(home)/skill/skill-section'
import TestmonialSection from '@/components/generals/(home)/testmonial-section'
import HomeLogoCloudTrustedSection from '@/components/generals/(home)/trusted-clouds'
import WorkExperienceSection from '@/components/generals/(home)/work-experience/work-experiece'
import { HoverBackground } from '@/components/generals/hover-background'
import HeroSection from '@/components/hero-section'
import ShapeHero from '@/components/kokonutui/shape-hero'
// import { Timeline } from '@/components/ui/timeline'
import dynamic from 'next/dynamic'
// import { EducationTimeline } from '@/components/ui/timeline'
import React, { Suspense } from 'react'


const HomePage = () => {
  return (


    <div className=''>
         {/* <HoverBackground
        colors={{
          background: '',
          objects: [
    
  // Greens / Blues
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-teal-500/30',
  'bg-green-500/30',
  'bg-lime-500/30',
  'bg-cyan-500/30',
  'bg-blue-500/30',

  // Purples / Pinks
  'bg-indigo-500/30',
  'bg-violet-500/30',
  'bg-purple-500/30',
  'bg-fuchsia-500/30',
  'bg-pink-500/30',
  'bg-rose-500/30',

  // Warm Tones
  'bg-red-500/30',
  'bg-orange-500/30',
  'bg-amber-500/30',
  'bg-yellow-500/30',

  // Cool Neutrals
  'bg-slate-500/30',
  'bg-gray-500/30',
  'bg-zinc-500/30',
  'bg-neutral-500/30',
  'bg-stone-500/30',

  // Darker / Subtle Variants
  'bg-emerald-700/20',
  'bg-indigo-700/20',
  'bg-rose-700/20',
  'bg-slate-700/20',
  'bg-purple-700/20',
  'bg-cyan-700/20',
]
,
          
          glow: 'shadow-emerald-400/70',
        }}
        objectCount={12}
      > */}

      <HeroSection/>
      <AboutSection/>
      <TimelineDemo/>
      <WorkExperienceSection/>
      <SkillSection/>
      {/* <Timeline/> */}
      <HomeLogoCloudTrustedSection/>
      <TestmonialSection/>
 <div className="md:max-w-6xl mx-auto py-10 px-4">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-300">Our Blogs</h2>
    <p className="text-gray-600 mt-2 text-sm md:text-base">
      Explore the latest articles, insights, and updates from our team.
    </p>
  </div>
  <Suspense fallback={<FeaturedBlogSkeleton/>}>
  <FeaturedBlogs />

  </Suspense>

</div>

      <ShapeHero/>

          <div className='min-w-screen'>
            {/* <CtaWrapperSection/> */}
      {/* <CtaParentSection/> */}

      </div>
      {/* <WorkExperienceSection experiences={WorkExperience}/> */}
      {/* <EducationTimeline /> */}
      
      {/* <ThemeChanger/> */}

      {/* </HoverBackground> */}
     
    </div>
  )
}

export default HomePage
