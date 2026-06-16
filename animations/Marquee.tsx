"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const REPEAT = 10

const Marquee = ({
  children,
  speed = 60,
  reverse = false,
  pauseOnHover = true,
  className,
}: {
  children: React.ReactNode
  speed?: number
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
}) => {
  const end = `${-(100 / REPEAT)}%`

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        key={`${speed}-${reverse}`}
        className="flex w-max gap-8"
        animate={{ x: reverse ? [end, "0%"] : ["0%", end] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {Array.from({ length: REPEAT }).map((_, i) => (
          <div key={i} className="flex gap-4 shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee
