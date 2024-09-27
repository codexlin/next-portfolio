import React from "react"
import Link from "next/link"

import Title from "./Title"

export default function HeroSection() {
  return (
    <div className="flex min-h-[60vh] flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-0">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl font-bold lg:text-7xl">
          Hero Section !😊
          <br />
          <span className="underline decoration-green-500 underline-offset-8">
            {"I'm codexlin"}
          </span>
        </h1>
        <p className="text-lg text-gray-300 md:w-96">
          {"I'm a front-end developer and a full-stack engineer."}
        </p>
        <Link href={"mailto:codexlin@gmail.com"} className="inline-blocks">
          <Title text="Contact Me" />
        </Link>
      </div>
      <div>
        <div className="h-72 w-72 bg-gray-200"></div>
      </div>
    </div>
  )
}
