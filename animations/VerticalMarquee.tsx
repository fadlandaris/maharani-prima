"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const REPEAT = 10

const VerticalMarquee = ({
  children,
  speed = 10,
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
  const singleRef = useRef<HTMLDivElement>(null)
  const [singleHeight, setSingleHeight] = useState(0)

  useEffect(() => {
    if (singleRef.current) {
      setSingleHeight(singleRef.current.offsetHeight)
    }
  }, [])

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        key={`${speed}-${reverse}-${singleHeight}`}
        className="flex flex-col gap-4 "
        animate={singleHeight ? { y: reverse ? [-singleHeight, 0] : [0, -singleHeight] } : {}}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        <div ref={singleRef} className="flex flex-col gap-8 shrink-0">
          {children}
        </div>
        {Array.from({ length: REPEAT - 1 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4 shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default VerticalMarquee
