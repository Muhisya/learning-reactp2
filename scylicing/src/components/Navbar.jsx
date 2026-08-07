import React, { useState } from 'react'
import { SiYoutube } from '@icons-pack/react-simple-icons'

export default function Navbar() {
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  return (
    <nav className="relative flex h-14 w-full items-center justify-between bg-[#212121] px-3 md:px-5 text-white">
      {showMobileSearch ? (
        <div className="absolute inset-0 z-50 flex items-center gap-2 bg-[#212121] px-3">
          <button onClick={() => setShowMobileSearch(false)} className="p-2 hover:bg-zinc-800 rounded-full">
            <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>

          <div className="flex flex-1 items-center">
            <input
              type="text" placeholder="Search" autoFocus className="h-9 w-full rounded-l-full bg-[#121212] border border-zinc-700 px-4 text-sm text-white focus:outline-none focus:border-blue-500"
            />
            <button className="h-9 w-12 bg-zinc-800 border border-l-0 border-zinc-700 rounded-r-full flex justify-center items-center">
              <svg className="w-5 h-5 stroke-zinc-300" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          <button className="h-9 w-9 shrink-0 flex items-center justify-center rounded-full bg-zinc-900">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 md:gap-3">
            <button className="p-2 hover:bg-zinc-800 rounded-full cursor-pointer">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>   

            <a href="#" className="flex items-center gap-1 text-xl tracking-tighter">
              <SiYoutube color="#FF0000" size={24} />
              <span className="text-white text-base md:text-lg font-bold">YouTube</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="h-9 w-[260px] sm:w-[360px] md:w-[480px] rounded-l-full bg-[#121212] border border-zinc-700 px-4 text-sm text-white focus:outline-none focus:border-blue-500"
              />
              <button className="h-9 w-12 md:w-16 bg-zinc-800 border border-l-0 border-zinc-700 rounded-r-full flex justify-center items-center hover:bg-zinc-700 cursor-pointer">
                <svg className="w-5 h-5 stroke-zinc-300" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
            <button className="h-9 w-9 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-zinc-800 ml-1 cursor-pointer">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <button 
              onClick={() => setShowMobileSearch(true)}
              className="p-2 hover:bg-zinc-800 rounded-full sm:hidden"
            >
              <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button className="hidden md:block p-2 hover:bg-zinc-800 rounded-full">
              <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </button>
            <button className="hidden md:block p-2 hover:bg-zinc-800 rounded-full">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-zinc-800 rounded-full">
              <svg className="w-5 h-5 md:w-6 md:h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>

            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer ml-1">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop" 
                alt="profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </>
      )}
    </nav>
  )
}