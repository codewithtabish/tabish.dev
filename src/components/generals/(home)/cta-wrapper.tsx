'use client'
import dynamic from 'next/dynamic';
import React from 'react'
const CtaParentSection = dynamic(
  () => import("@/components/generals/(home)/cta-section"),
  { ssr: false, loading: () => <div className="text-center mt-20">Loading section...</div> }
);

const CtaWrapperSection = () => {
  return (
    <div>
        <CtaParentSection/>
      
    </div>
  )
}

export default CtaWrapperSection
