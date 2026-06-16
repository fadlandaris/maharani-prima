"use client"

import { useEffect, useRef } from "react"
import createGlobe, { type COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const MARKER_COLORS: [number, number, number][] = [
  [9 / 255, 62 / 255, 255 / 255],
  [6 / 255, 156 / 255, 12 / 255],
  [214 / 255, 13 / 255, 10 / 255],
]
const HOLD = 2.5
const TRANSITION = 0.5
const CYCLE = HOLD + TRANSITION

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 1,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [9 / 255, 62 / 255, 255 / 255],
  glowColor: [0.7, 0.7, 0.7],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = Math.min(window.devicePixelRatio, 1.5)

    const onResize = () => {
      widthRef.current = canvas.offsetWidth
    }
    window.addEventListener("resize", onResize)
    onResize()

    const startGlobe = () => {
      if (globeRef.current) return
      globeRef.current = createGlobe(canvas, {
        ...config,
        devicePixelRatio: dpr,
        width: widthRef.current * dpr,
        height: widthRef.current * dpr,
        onRender: (state) => {
          if (!pointerInteracting.current) phiRef.current += 0.005
          state.phi = phiRef.current + rs.get()
          state.width = widthRef.current * dpr
          state.height = widthRef.current * dpr

          const t = Date.now() / 1000
          const phase = t % (CYCLE * MARKER_COLORS.length)
          const idx = Math.floor(phase / CYCLE)
          const timeInCycle = phase % CYCLE
          const from = idx % MARKER_COLORS.length
          const to = (idx + 1) % MARKER_COLORS.length
          const raw = timeInCycle > HOLD ? (timeInCycle - HOLD) / TRANSITION : 0
          const ease = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2
          state.markerColor = [
            lerp(MARKER_COLORS[from][0], MARKER_COLORS[to][0], ease),
            lerp(MARKER_COLORS[from][1], MARKER_COLORS[to][1], ease),
            lerp(MARKER_COLORS[from][2], MARKER_COLORS[to][2], ease),
          ]
        },
      })
      setTimeout(() => (canvas.style.opacity = "1"), 0)
    }

    const stopGlobe = () => {
      if (!globeRef.current) return
      globeRef.current.destroy()
      globeRef.current = null
    }

    // pause when tab not visible
    const handleVisibility = () => {
      if (document.hidden) stopGlobe()
      else if (isIntersecting.current) startGlobe()
    }

    const isIntersecting = { current: false }
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting.current = entry.isIntersecting
        if (entry.isIntersecting) startGlobe()
        else stopGlobe()
      },
      { threshold: 0.1 }
    )

    observer.observe(canvas)
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      stopGlobe()
      observer.disconnect()
      window.removeEventListener("resize", onResize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [rs, config])

  return (
    <div
      className={cn(
        "absolute -bottom-72 left-1/2 -translate-x-1/2 mx-auto aspect-square w-full max-w-[700px]",
        className
      )}
    >
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size] will-change-transform"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
