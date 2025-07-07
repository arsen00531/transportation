"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn"
  delay?: number
  duration?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClasses = {
    fadeInUp: isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    fadeInDown: isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0",
    fadeInLeft: isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
    fadeInRight: isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
    fadeIn: isVisible ? "opacity-100" : "opacity-0",
    scaleIn: isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all ease-out", animationClasses[animation], className)}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
