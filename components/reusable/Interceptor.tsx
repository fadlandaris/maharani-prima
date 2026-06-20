"use client"

import { useRef } from 'react'
import { Dictionary } from '@/lib/getDictionary'
import { motion, useScroll, useTransform } from 'framer-motion'

const Interceptor = ({
  title,
  title2,
  img
} : {
  title: string,
  title2: string,
  img?: string
}) => {

  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 8])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -30])

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center gap-x-8">
        <motion.h3
          style={{ opacity: textOpacity, y: textY }}
          className="text-6xl tracking-tighter shrink-0 z-0 font-medium"
        >
          {title}
        </motion.h3>

        <motion.div
          style={{ scale }}
          className="w-[500px] h-[300px] bg-neutral-400 shrink-0 z-10 relative"
        />

        <motion.h3
          style={{ opacity: textOpacity, y: textY }}
          className="text-6xl tracking-tighter shrink-0 z-0 font-medium"
        >
          {title2}
        </motion.h3>
      </div>
    </div>
  )
}

export default Interceptor
