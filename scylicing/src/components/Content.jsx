import React from 'react'
import { 
  SiYoutube, 
  SiInstagram, 
  SiTiktok, 
  SiNetflix 
} from '@icons-pack/react-simple-icons'

const Contents = [
  {
    id: 1,
    duration: "23:45",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop",
    title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
    author: "James Gouse",
    views: "15K",
    timestamp: "1 week ago",
    icon: SiYoutube,
    brandColor: "#FF0000"
  },
  {
    id: 2,
    duration: "23:45",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop",
    title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
    author: "James Gouse",
    views: "15K",
    timestamp: "1 week ago",
    icon: SiInstagram,
    brandColor: "#FF3483"
  },
  {
    id: 3,
    duration: "23:45",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop",
    title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
    author: "James Gouse",
    views: "15K",
    timestamp: "1 week ago",
    icon: SiTiktok,
    brandColor: "#00F2FE"
  },
  {
    id: 4,
    duration: "23:45",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop",
    title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
    author: "James Gouse",
    views: "15K",
    timestamp: "1 week ago",
    icon: SiNetflix,
    brandColor: "#E50914"
  },
  {
    id: 5,
    duration: "23:45",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop",
    title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
    author: "James Gouse",
    views: "15K",
    timestamp: "1 week ago",
    icon: SiYoutube,
    brandColor: "#FF0000"
  },
  {
    id: 6,
    duration: "23:45",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop",
    title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
    author: "James Gouse",
    views: "15K",
    timestamp: "1 week ago",
    icon: SiInstagram,
    brandColor: "#FF3483"
  },
  {
    id: 7,
    duration: "23:45",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop",
    title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
    author: "James Gouse",
    views: "15K",
    timestamp: "1 week ago",
    icon: SiTiktok,
    brandColor: "#00F2FE"
  },
  {
    id: 8,
    duration: "23:45",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop",
    title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
    author: "James Gouse",
    views: "15K",
    timestamp: "1 week ago",
    icon: SiNetflix,
    brandColor: "#E50914"
  },
]

function ContentCard({ icon: Icon, brandColor, title, duration, avatar, author, views, timestamp }) {
  return (
    <div className="w-full flex flex-col gap-3 group cursor-pointer">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 flex items-center justify-center">
        <Icon size={48} color={brandColor} className="transition-transform duration-300 group-hover:scale-110 sm:w-16 sm:h-16" />
        <span className="absolute bottom-2 right-2 rounded bg-zinc-900/90 px-1.5 py-0.5 text-xs font-medium text-zinc-300">
          {duration}
        </span>
      </div>

      <div className="flex gap-3">
        <img 
          src={avatar} 
          alt={author} 
          className="h-9 w-9 shrink-0 rounded-full object-cover" 
        />
        <div className="flex flex-col">
          <h3 className="line-clamp-2 text-sm font-semibold text-white group-hover:text-zinc-200">
            {title}
          </h3>
          <p className="mt-1 text-xs text-zinc-400">
            {author}
          </p>
          <p className="text-xs text-zinc-400">
            {views} Views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
      {Contents.map((item) => (
        <ContentCard key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Content;