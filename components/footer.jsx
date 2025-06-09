// components/Footer.tsx

import React from 'react'
import { FaInstagram, FaTelegramPlane, FaYoutube, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6 border-t border-zinc-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* درباره */}
        <div>
          <h4 className="text-xl font-semibold text-amber-400 mb-4">درباره</h4>
          <p className="text-sm text-zinc-400 leading-6">
            پرهام رمضان، هنرمند فعال در زمینه‌ی کارگردانی، نویسندگی، دوبله و تدوین، با سابقه‌ی فعالیت حرفه‌ای از سال ۱۳۸۸ در پروژه‌های مطرح سینمایی و تلویزیونی.
          </p>
        </div>

        {/* لینک‌های سریع */}
        <div>
          <h4 className="text-xl font-semibold text-amber-400 mb-4">لینک‌های مفید</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a href="#skills" className="hover:text-amber-400 transition">توانایی‌ها</a></li>
            <li><a href="#biography" className="hover:text-amber-400 transition">بیوگرافی</a></li>
            <li><a href="/contact" className="hover:text-amber-400 transition">تماس با من</a></li>
            <li><a href="/projects" className="hover:text-amber-400 transition">پروژه‌ها</a></li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <h4 className="text-xl font-semibold text-amber-400 mb-4">ارتباط با من</h4>
          <div className="flex gap-4 text-2xl text-amber-400">
            <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaTelegramPlane />
            </a>
            <a href="https://youtube.com/your_channel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaYoutube />
            </a>
            <a href="mailto:your@email.com" className="hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت پایین */}
      <div className="mt-10 border-t border-zinc-700 pt-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} پرهام رمضان – تمام حقوق محفوظ است.
      </div>
    </footer>
  )
}

export default Footer
