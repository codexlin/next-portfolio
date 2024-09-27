import React from "react"

import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative mx-auto max-w-7xl overflow-hidden bg-white p-5 dark:bg-black">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </div>
      <div className="xl:bttom-0 absolute -bottom-5 left-0 h-10 w-full bg-gradient-to-t from-black to-transparent xl:h-32"></div>
      <div className="mx-auto mt-20 max-w-7xl p-5">
        <Skills></Skills>
      </div>
    </div>
  )
}
