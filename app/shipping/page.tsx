import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Truck, Clock, Thermometer } from "lucide-react"

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Shipping Information</h1>
          <p className="text-foreground/60 mb-8">Fast, reliable delivery with freshness guarantee</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                description: "On all orders over $50 in selected areas",
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "24-48 hour delivery in most areas",
              },
              {
                icon: Thermometer,
                title: "Cold Chain",
                description: "Temperature-controlled throughout",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-foreground/60">{feature.description}</p>
                </Card>
              )
            })}
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Shipping Rates</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-foreground/80">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4">Order Total</th>
                    <th className="text-left py-3 px-4">Shipping Cost</th>
                    <th className="text-left py-3 px-4">Delivery Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { range: "Under $25", cost: "$5.99", time: "2-3 days" },
                    { range: "$25 - $50", cost: "$3.99", time: "2-3 days" },
                    { range: "Over $50", cost: "FREE", time: "1-2 days" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="py-3 px-4">{row.range}</td>
                      <td className="py-3 px-4">{row.cost}</td>
                      <td className="py-3 px-4">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Shipping Process</h2>
            <div className="space-y-4">
              {[
                "Your order is carefully packed in our facility with ice packs and insulation",
                "We use the fastest available shipping method to ensure optimal freshness",
                "Temperature monitoring throughout the entire delivery process",
                "Real-time tracking updates sent to your email",
                "Signature upon delivery (optional) to ensure safe receipt",
                "If any issue occurs, our team works quickly to resolve it",
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Delivery Areas</h2>
            <p className="text-foreground/80 mb-4">
              We currently deliver to most areas within the continental United States. Delivery times may vary based on
              your location:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Metropolitan areas: 1-2 days",
                "Urban areas: 2-3 days",
                "Rural areas: 3-4 days",
                "Remote areas: 4-5 days",
              ].map((area, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground/80">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  {area}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
