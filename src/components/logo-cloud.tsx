'use client'

import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const roles = [
  'Backend Developer',
  'Android Developer',
  'Web Developer',
  'AI Expert',
  'AI Engineer',
  'Mobile Developer',
]

export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Powering the best teams</p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {roles.map((role, index) => (
                <div key={index} className="flex items-center justify-center px-4">
                  <strong className="text-lg font-semibold">{role}</strong>
                </div>
              ))}
            </InfiniteSlider>

            {/* Left & Right Gradient Overlays */}
            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20 pointer-events-none"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20 pointer-events-none"></div>

            {/* Progressive Blur for smooth edges */}
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
