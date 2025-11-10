"use client"

import { useRef, useEffect } from "react"
import { Star, ShoppingCart } from "lucide-react"
import gsap from "gsap"
import type { Product } from "@/lib/product-data"

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const cardRef = useRef(null)
  const hoverOverlay = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const ctx = gsap.context(() => {
      gsap.set(card, { opacity: 0, y: 20 })
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
      })
    })

    return () => ctx.revert()
  }, [index])

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -8,
      duration: 0.3,
      ease: "power2.out",
    })

    gsap.to(hoverOverlay.current, {
      opacity: 1,
      duration: 0.3,
      pointerEvents: "auto",
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })

    gsap.to(hoverOverlay.current, {
      opacity: 0,
      duration: 0.3,
      pointerEvents: "none",
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-secondary/50 transition-all duration-300 cursor-pointer group"
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Tag */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
            {product.tag}
          </span>
        </div>

        {/* Hover Overlay */}
        <div
          ref={hoverOverlay}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity pointer-events-none"
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors transform hover:scale-105">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide mb-2 font-medium">
          {product.category}
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        {/* Weight */}
        <p className="text-xs text-muted-foreground mb-3 font-medium">Weight: {product.weight}</p>
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-secondary text-secondary"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ${product.price}
          </span>
          <button className="hidden sm:flex px-3 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors duration-200">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}