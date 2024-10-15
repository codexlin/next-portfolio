import React from "react"
import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://github.com/CodexLin",
      icon: Github,
      name: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/linrenjie-lin-5b5b1319a/",
      icon: Linkedin,
      name: "LinkedIn",
    },
    {
      link: "https://www.instagram.com/linrenjie_lin/",
      icon: Instagram,
      name: "Instagram",
    },
  ]
  return (
    <nav className={cn(className, "flex animate-move-down items-center justify-between py-10")}>
      <h1 className="-rotate-2 text-2xl font-bold underline decoration-green-500 underline-offset-8">
        CodexLin 👨‍💻
      </h1>
      <div className="flex items-center space-x-4">
        {socials.map((item, index) => (
          <Link aria-label={item.name} href={item.link} key={index}>
            <item.icon className="size-5 transition-all duration-200 hover:scale-125" />
          </Link>
        ))}
        <ModeToggle />
      </div>
    </nav>
  )
}
