import React from "react"
import Link from "next/link"

import { MovingBorderButton } from "@/components/ui/moving-border"

import Title from "./Title"

export default function HeroSection() {
  return (
    <div className="flex min-h-[60vh] animate-move-up flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-0">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl font-bold lg:text-7xl">
          Nice to meet u!😊
          <br />
          <span className="underline decoration-green-500 underline-offset-8">
            {"I'm CodexLin.🤷"}
          </span>
        </h1>
        <p className="text-lg text-gray-300 md:w-96">
          {
            "Based in China,I'm a Fullstack developer passionate about building a modern web application that users love."
          }
        </p>
        <Link href={"mailto:codexlin@gmail.com"} className="inline-block">
          <Title text="Contact Me 📫" />
        </Link>
      </div>
      <div className="relative">
        <div className="relative h-72 w-72 -rotate-[30deg] space-y-3">
          <div className="flex translate-x-8 gap-3">
            <div className="h-32 w-32 rounded-2xl bg-green-500"></div>
            <div className="h-32 w-32 rounded-full bg-blue-500"></div>
          </div>
          <div className="flex translate-x-8 gap-3">
            <div className="h-32 w-32 rounded-2xl bg-blue-500"></div>
            <div className="h-32 w-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute right-1/2 top-[40%] -z-10"></div>
        </div>
        <div className="absolute bottom-5 left-0 sm:-left-10 sm:bottom-14">
          <MovingBorderButton borderRadius="0.5rem" className="p-3 font-semibold">
            🦄 Borders are cool
          </MovingBorderButton>
        </div>
      </div>
    </div>
  )
}
