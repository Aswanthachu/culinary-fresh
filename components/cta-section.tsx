"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Premium Quality?</h2>
        <p className="text-lg text-primary-foreground/80 mb-8">
          Join hundreds of satisfied customers enjoying the freshest fish and meat delivered to their door.
        </p>
        <Link href="/products">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
            Shop Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
