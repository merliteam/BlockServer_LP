"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

type AnimateInViewProps = {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-right" | "slide-left" | "zoom"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  margin?: string
}

export default function AnimateInView({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  margin = "-100px",
}: AnimateInViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin })

  const animations = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "slide-up": {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  }

  const selectedAnimation = animations[animation]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

