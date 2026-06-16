"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import type { Dictionary } from "@/lib/getDictionary"
import Hero from "@/components/marketing/Hero"

const ParallaxHero = ({ dict }: { dict: Dictionary }) => {
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroScale   = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.6, 0.3])

  return (
    <motion.div
      ref={heroRef}
      style={{ scale: heroScale, opacity: heroOpacity }}
      className="sticky top-0 h-screen z-0"
    >
      <Hero dict={dict} />
    </motion.div>
  )
}

export default ParallaxHero
