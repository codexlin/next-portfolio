import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IconType } from "react-icons"

import { cn } from "@/lib/utils"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string
    Icon: IconType
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, idx) => {
        const Icon = item.Icon
        return (
          <div
            key={idx}
            className="group relative block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-lg bg-neutral-200 dark:bg-slate-800/[0.8]"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="translation-all relative z-20 w-full cursor-pointer overflow-hidden rounded-md bg-black p-4 ring-green-500 duration-500 group-hover:ring-2">
              <div className="relative z-50 space-y-5 py-10">
                <Icon className="mx-auto h-8 w-8" />
                <p className="text-center text-2xl font-bold text-gray-300">{item.text}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
