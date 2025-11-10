"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent GSAP animation on mobile for performance
    if (window.innerWidth < 768) return

    const ctx = gsap.context(() => {
      // Timeline for smooth animations
      const tl = gsap.timeline()

      // Animate title
      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      })

      // Animate subtitle
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4",
      )

      // Animate CTA
      tl.from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.3",
      )

      // Animate image
      tl.from(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
        },
        "-=0.5",
      )

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 pt-28 pb-12 md:pt-32 md:pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div ref={titleRef} className="space-y-4">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                Premium Quality Guaranteed
              </div>
              <h1 className="hero-title text-foreground">
                Fresh Premium
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Fish & Meat
                </span>
              </h1>
            </div>

            <div ref={subtitleRef} className="hero-subtitle text-foreground/70">
              Discover the finest selection of premium fresh fish and meat delivered directly to your door. Sourced from
              trusted suppliers with uncompromising quality standards.
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { number: "500+", label: "Happy Customers" },
                { number: "24/7", label: "Fresh Guarantee" },
                { number: "100%", label: "Premium Quality" },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            className="relative h-96 md:h-full min-h-[400px] hidden md:flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent rounded-3xl" />
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/fresh-fish-and-meat-premium-quality.jpg"
                alt="Fresh Premium Fish and Meat"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
