import BiographySection from '@/components/biography'
import Hero from '@/components/hero'
import SkillsSection from '@/components/skilselection'
import React from 'react'

function page() {
  return (
    <div>
        <Hero />
        <SkillsSection />
        <BiographySection />
    </div>
  )
}

export default page
