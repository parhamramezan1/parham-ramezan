'use client' // اگر از app router استفاده می‌کنی

import React from 'react'
import Header from './header'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Hero () {
  return (
    <div
      className='relative w-full h-screen bg-cover bg-center text-white'
      style={{ backgroundImage: `url('/hero-bg.png')` }}
    >
      <Header />
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl md:text-6xl font-bold'
        >
          روایت‌ها را زنده می‌کنم؛
          <br />
          چه پشت دوربین، چه پشت میکروفن.
        </motion.h1>
        <Link href={"tel:+989124593289"}>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='mt-8 px-6 py-3 border border-white text-white rounded-md text-lg hover:bg-white hover:text-black transition duration-300'
          >
            همکاری
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
