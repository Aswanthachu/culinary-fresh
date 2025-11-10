"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function FiltersSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPrice, setSelectedPrice] = useState("all")

  const categories = [
    { id: "all", label: "All Products" },
    { id: "fish", label: "Fish" },
    { id: "meat", label: "Meat" },
  ]

  const priceRanges = [
    { id: "all", label: "All Prices" },
    { id: "0-20", label: "Under $20" },
    { id: "20-30", label: "$20 - $30" },
    { id: "30+", label: "Above $30" },
  ]

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* Category Filter */}
      <div className="flex-1">
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground appearance-none cursor-pointer hover:border-primary transition-colors"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/50 pointer-events-none" />
        </div>
      </div>

      {/* Price Filter */}
      <div className="flex-1">
        <div className="relative">
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground appearance-none cursor-pointer hover:border-primary transition-colors"
          >
            {priceRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/50 pointer-events-none" />
        </div>
      </div>

      {/* Reset Button */}
      <Button
        onClick={() => {
          setSelectedCategory("all")
          setSelectedPrice("all")
        }}
        variant="outline"
        className="border-primary text-primary hover:bg-primary/5"
      >
        Reset
      </Button>
    </div>
  )
}
