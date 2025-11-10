"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const missionRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (missionRef.current) {
        gsap.from(missionRef.current, {
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
        })
      }

      valuesRef.current.forEach((element, index) => {
        if (!element) return
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30,
          duration: 0.8,
          delay: index * 0.1,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Culinary Fresh
              </span>
            </h1>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
              We believe in bringing the finest premium fish and meat directly to your kitchen with uncompromising
              quality and freshness standards.
            </p>
          </div>

          {/* Our Story */}
          <div ref={missionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Story</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Founded in 2015, Culinary Fresh started with a simple mission: to provide premium, fresh fish and meat
                to discerning customers who refuse to compromise on quality.
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                What began as a small operation with just a handful of local suppliers has grown into a trusted name
                delivering excellence across the region.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We work directly with the finest suppliers, maintaining rigorous quality standards and freshness
                guarantees at every step.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?key=aboutimg1"
                alt="Culinary Fresh Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description:
                    "Every product is carefully selected and quality-checked by our expert team to ensure only the best reaches your table.",
                },
                {
                  title: "Freshness Guaranteed",
                  description:
                    "We maintain optimal temperature control throughout the entire cold chain from supplier to your doorstep.",
                },
                {
                  title: "Sustainability",
                  description:
                    "We work with suppliers who follow sustainable practices, ensuring a better future for our oceans and farms.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) valuesRef.current[index] = el
                  }}
                  className="bg-card rounded-lg p-8 border border-border hover:border-secondary/50 transition-colors"
                >
                  <CheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-foreground/60">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "2000+", label: "Happy Customers" },
                { number: "8+", label: "Years of Service" },
                { number: "100%", label: "Freshness Guarantee" },
                { number: "500+", label: "Products Daily" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
