"use client"

import React from "react"
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si"

import { HoverEffect } from "@/components/ui/card-hover-effect"

import Title from "./Title"

export default function Skills() {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "Vue", Icon: SiVuedotjs },
    { text: "Next.js", Icon: SiNextdotjs },
    { text: "Node.js", Icon: SiNodedotjs },
    { text: "TypeScript", Icon: SiTypescript },
    { text: "Tailwind", Icon: SiTailwindcss },
  ]
  return (
    <div className="mx-auto max-w-5xl px-8">
      <Title text="Skills 🚀" className="flex -rotate-6 flex-col items-center justify-center" />
      <HoverEffect items={skills} />
    </div>
  )
}
