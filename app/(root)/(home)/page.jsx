import BiographySection from '@/components/biography'
import Hero from '@/components/hero'
import ResumeSection from '@/components/ResumeSection'
import SkillsSection from '@/components/skilselection'
import VideoHighlight from '@/components/videohighlight'
import React from 'react'

function page() {
  return (
    <div>
        <Hero />
        <SkillsSection />
        <BiographySection />
        <VideoHighlight />
        <ResumeSection />
    </div>
  )
}

export default page
