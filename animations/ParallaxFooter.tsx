"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import type { Dictionary } from "@/lib/getDictionary"
import Cta from "@/components/reusable/Cta"
import Footer from "@/components/reusable/Footer"

const ParallaxFooter = ({ dict }: { dict: Dictionary }) => {
  const ctaRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start start", "end start"]
  })

  const ctaScale   = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.6, 0.3])

  return (
    <>
      <motion.div
        ref={ctaRef}
        style={{ scale: ctaScale, opacity: ctaOpacity }}
        className="sticky top-0 h-screen z-0"
      >
        <Cta dict={dict} />
      </motion.div>

      <div className="relative z-10 bg-background overflow-hidden">
        <Footer dict={dict} />
      </div>
    </>
  )
}

export default ParallaxFooter
