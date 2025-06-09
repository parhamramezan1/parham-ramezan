import React from 'react'
import {
  FaFilm,
  FaPen,
  FaMicrophone,
  FaUserCog,
  FaVolumeUp,
  FaCut
} from 'react-icons/fa'

const skills = [
  { title: 'کارگردان', icon: <FaFilm /> },
  { title: 'نویسنده', icon: <FaPen /> },
  { title: 'دوبله', icon: <FaMicrophone /> },
  { title: 'مدیر دوبلاژ', icon: <FaUserCog /> },
  { title: 'صدا برداری', icon: <FaVolumeUp /> },
  { title: 'تدوین', icon: <FaCut /> }
]

const SkillsSection = () => {
  return (
      <section className='bg-black text-white py-12 px-4'>
        <h2 className='text-3xl font-bold text-center mb-8 text-white'>
          توانایی‌ها
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='bg-zinc-900 border border-amber-400 hover:border-amber-500 hover:text-white transition-all duration-300 rounded-2xl p-6 flex items-center justify-center gap-3 shadow-lg'
            >
              <span className='text-2xl text-amber-400'>{skill.icon}</span>
              <h3 className='text-lg font-semibold'>{skill.title}</h3>
            </div>
          ))}
        </div>
      </section>
  )
}

export default SkillsSection
