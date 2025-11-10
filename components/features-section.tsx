"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Truck, Leaf, Award, Zap } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Same-day delivery available in selected areas. Your freshness is our priority.",
  },
  {
    icon: Leaf,
    title: "Fresh & Natural",
    description: "100% natural products with no preservatives or additives. Pure quality.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully selected and quality-checked by our expert team.",
  },
  {
    icon: Zap,
    title: "Cold Chain",
    description: "Maintained at optimal temperature throughout delivery process.",
  },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: index * 0.1,
        })

        // Hover animation
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          paused: true,
          onMouseEnter: () => {
            gsap.to(card, { y: -10, duration: 0.3, overwrite: "auto" })
          },
          onMouseLeave: () => {
            gsap.to(card, { y: 0, duration: 0.3, overwrite: "auto" })
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Culinary Fresh?
            </span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            We're committed to delivering the freshest premium fish and meat with exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-secondary/50 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
