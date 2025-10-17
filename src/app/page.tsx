import AboutSection from '@/components/generals/(home)/about-section'
import { TimelineDemo } from '@/components/generals/(home)/education-section'
import Clicker from '@/components/generals/theme/cliker'
import { ThemeChanger } from '@/components/generals/theme/theme-changer'
import HeroSection from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
// import { EducationTimeline } from '@/components/ui/timeline'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection/>
      <AboutSection/>
      <TimelineDemo/>
      {/* <EducationTimeline /> */}
      
      <ThemeChanger/>
     
    </div>
  )
}

export default HomePage
