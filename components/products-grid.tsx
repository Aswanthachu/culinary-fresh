"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: 1,
    name: "Atlantic Salmon",
    category: "Fish",
    price: 24.99,
    rating: 4.8,
    image: "/fresh-atlantic-salmon-fillet.jpg",
    description: "Premium fresh Atlantic salmon fillet",
  },
  {
    id: 2,
    name: "Wild Caught Tuna",
    category: "Fish",
    price: 29.99,
    rating: 4.9,
    image: "/wild-caught-tuna-premium.jpg",
    description: "Premium wild-caught yellowfin tuna",
  },
  {
    id: 3,
    name: "Grass-Fed Beef",
    category: "Meat",
    price: 34.99,
    rating: 4.7,
    image: "/grass-fed-beef-steak-premium.jpg",
    description: "Premium grass-fed beef ribeye steak",
  },
  {
    id: 4,
    name: "Organic Chicken",
    category: "Meat",
    price: 18.99,
    rating: 4.6,
    image: "/organic-free-range-chicken-breast.jpg",
    description: "Organic free-range chicken breast",
  },
  {
    id: 5,
    name: "Sea Bream",
    category: "Fish",
    price: 22.99,
    rating: 4.7,
    image: "/fresh-sea-bream-whole-fish.jpg",
    description: "Fresh whole sea bream",
  },
  {
    id: 6,
    name: "Lamb Chops",
    category: "Meat",
    price: 32.99,
    rating: 4.8,
    image: "/premium-lamb-chops-fresh.jpg",
    description: "Premium lamb chops",
  },
  {
    id: 7,
    name: "Shrimp Selection",
    category: "Fish",
    price: 26.99,
    rating: 4.9,
    image: "/fresh-large-shrimp-prawns.jpg",
    description: "Fresh large tiger shrimp",
  },
  {
    id: 8,
    name: "Duck Breast",
    category: "Meat",
    price: 28.99,
    rating: 4.8,
    image: "/premium-duck-breast-fresh.jpg",
    description: "Premium duck breast",
  },
]

export function ProductsGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: (index % 4) * 0.1,
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section ref={containerRef} className="py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className="bg-card rounded-lg overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 group"
          >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden bg-muted">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                  aria-label="Add to favorites"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.has(product.id) ? "fill-secondary text-secondary" : "text-foreground/60"
                    } transition-colors`}
                  />
                </button>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-semibold rounded-full">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-foreground/60">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < Math.floor(product.rating) ? "text-secondary" : "text-border"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-foreground/60">({product.rating})</span>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-2">
                <div className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</div>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
