// import BackButtonComp from "@/components/custom/(general)/back-comp";

import AboutPageCotnentSection from "@/components/generals/about/about-comp";
import StatsSection from "@/components/generals/about/about-status-section";
import { MissionVisionSection } from "@/components/generals/about/mission-vison-stack";
import BackBreadcrumb from "@/components/generals/back-breadcrumb";
import { HoverBackground } from "@/components/generals/hover-background";
import AboutUs1 from "@/components/mvpblocks/about-us-1";
import TeamSection from "@/components/team";
import { CardStack } from "@/components/ui/card-stack";
import { Vortex } from "@/components/ui/vortex";


// Dynamic SEO metadata for About page (Next.js 15: params is a Promise)


export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="w-full min-h-screen flex justify-center bg-background overflow-x-hidden overflow-hidden">
          <HoverBackground
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
              >

      {/* <BackButtonComp locale={locale}/> */}
      <div
        className="
         py-10
        "
      >
      </div>
      <div className="px-10">
            <BackBreadcrumb/>

      </div>

      <AboutPageCotnentSection/>
      <StatsSection/>
       
       {/* <div className="mt-56 dark:block hidden"> */}
        {/* <Vortex className="h-screen"> */}
          <div>
            <MissionVisionSection/>
        
          </div>
          <TeamSection/>
          {/* </Vortex> */}
                    </HoverBackground>

    </main>
  );
}
