import React, { useState } from 'react'

const categories = [
  "All", 
  "Live",
  "News",
  "Gaming", 
  "Music", 
  "Live", 
  "Podcasts", 
  "React", 
  "Tailwind CSS", 
  "JavaScript", 
  "Coding", 
  "UI Design", 
  "Mixes", 
  "AI", 
  "Tech", 
  "Vlogs", 
  "Recently uploaded"
]

function Categories() {
  const [selected, setSelected] = useState("All")

  return (
    <div className="flex items-center gap-2 md:gap-3 bg-[#0f0f0f] px-3 md:px-6 py-2.5 md:py-3 overflow-x-auto whitespace-nowrap scrollbar-none">
      {categories.map((item) => {
        const isActive = selected === item
        return (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors cursor-pointer shrink-0 ${
              isActive ? "bg-white text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Categories;