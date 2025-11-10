import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FeaturedProducts } from "@/components/featured-products"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  )
}
