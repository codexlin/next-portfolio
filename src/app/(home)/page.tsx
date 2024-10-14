import React from "react"

import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Project"
import Skills from "./components/Skills"

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div className="dark:bg-grid-white/[0.03] bg-grid-black/[0.2] bg-white dark:bg-black">
        <div className="relative mx-auto max-w-6xl p-5">
          <Navbar></Navbar>
          <HeroSection></HeroSection>
        </div>
      </div>
      <div className="xl:bttom-0 absolute -bottom-5 left-0 h-10 w-full bg-gradient-to-t from-black to-transparent xl:h-32"></div>
      <div className="mx-auto mt-20 max-w-7xl p-5">
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
  )
}
