"use client"

import { YoutubeLogo,TwitterLogo,InstagramLogo,TiktokLogo,LinkedinLogo,FacebookLogo,At } from  "phosphor-react"
import Link from "next/link"

export function FooterHome() {
  return (
   <footer className="min-w-full p-4 flex justify-between items-end">
     <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <Link href="#">
          <TwitterLogo size={32} />
        </Link>
        <Link href="#">
          <InstagramLogo size={32} />
        </Link>
        <Link href="#">
          <TiktokLogo size={32} />
        </Link>
      </div>
       <div className="flex flex-col gap-4">
        <Link href="#">
          <LinkedinLogo size={32} />
        </Link>
        <Link href="#">
          <FacebookLogo size={32} />
        </Link>
        <Link href="#">
          <At size={32} />
        </Link>
      </div>
     </div>
     <Link href="#">
      <YoutubeLogo size={32} />
     </Link>
   </footer>
  )
}