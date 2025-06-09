'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'خانه', href: '#' },
    { name: 'بیوگرافی', href: '#' },
    { name: 'نمونه کار ها', href: '#' },
    { name: 'افتخارات', href: '#' },
    { name: 'همکاری', href: '#' },
  ];

  return (
    <header
      className="w-full h-20 border-b border-[#FFFFFF45] text-white relative z-50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8">
        {/* لوگو سمت راست */}
        <div className="text-2xl font-bold">پرهام رمضان</div>

        {/* منو برای دسکتاپ */}
        <div className="hidden md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:flex space-x-6 text-lg items-center">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-gray-300 transition">
              {item.name}
            </Link>
          ))}
        </div>

        {/* آیکون موبایل سمت چپ */}
        <div className="md:hidden">
          {isOpen ? (
            <X size={30} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={30} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* منو موبایل */}
      {isOpen && (
        <div className="absolute top-20 right-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-gray-300 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
