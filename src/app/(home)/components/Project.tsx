import Link from "next/link"
import {
  SiAntdesign,
  SiAxios,
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si"

import { cn } from "@/lib/utils"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"

import Title from "./Title"

export default function Projects() {
  const projects = [
    {
      title: "Vue-Ace-Admin",
      tech: [SiVuedotjs, SiAxios, SiAntdesign, SiTypescript],
      link: "http://localhost:3000",
      cover: "/bg.png",
      background: "bg-indigo-500",
    },
    {
      title: "E-Learning",
      tech: [SiNextdotjs, SiReactquery, SiTailwindcss],
      link: "http://localhost:3000",
      cover: "/bg.png",
      background: "bg-green-500",
    },
  ]
  return (
    <div className="p-5 py-10 sm:p-0">
      <Title
        text="Projects 🧠"
        className="flex rotate-6 flex-col items-center justify-center"
      ></Title>
      <div className="grid grid-cols-1 gap-5 pt-20 sm:grid-cols-2">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} key={idx}>
              <div className={cn("rounded-md p-5", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full cursor-pointer space-y-5"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, idx) => (
                        <Icon className="h-8 w-8" key={idx}></Icon>
                      ))}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
