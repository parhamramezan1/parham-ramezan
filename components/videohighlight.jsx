"use client"

import React, { useState, useRef, useEffect } from 'react'

const VideoHighlight = () => {
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef(null)

  // Auto-play muted video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // autoplay might fail silently in some browsers
      })
    }
  }, [])

  // When modal opens, unmute and show controls
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isOpen
      videoRef.current.controls = isOpen
      if (isOpen) {
        videoRef.current.play()
      }
    }
  }, [isOpen])

  return (
    <section className="bg-black text-white py-12 px-4" id="video">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-4">نمونه دوبله</h2>
        <p className="text-zinc-300 mb-8">
          دوبله ی یکی از فیلم های قدیمی پرهام رمضان زیر نظر مرحوم استاد چنگیز جلیلوند بزرگ.
        </p>

        {/* ویدیو با autoplay و mute */}
        <div
          className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-amber-400 shadow-lg"
        >
          <video
            ref={videoRef}
            className={`w-full h-auto object-cover rounded-xl transition-all duration-500 ${isOpen ? 'scale-105 z-50' : ''}`}
            src="/videos/IMG_6727.MP4"
            poster="/images/thumbnail.png"
            muted
            loop
            playsInline
            preload="auto"
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(true)}
          />
          {!isOpen && (
            <div
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition cursor-pointer"
            >
              <span className="text-5xl text-amber-400">▶</span>
            </div>
          )}
        </div>

        {/* دکمه بستن فقط وقتی باز شده */}
        {isOpen && (
          <button
            className="mt-4 text-white text-lg bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            ✕ بستن ویدیو
          </button>
        )}
      </div>
    </section>
  )
}

export default VideoHighlight
