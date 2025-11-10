import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Returns & Refunds</h1>
          <p className="text-foreground/60 mb-8">Our commitment to your satisfaction</p>

          <div className="space-y-8">
            <Card className="p-6 border-2 border-primary">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-foreground">30-Day Satisfaction Guarantee</h2>
                  <p className="text-foreground/80">
                    We stand behind the quality of our products. If you're not completely satisfied with your purchase
                    within 30 days, we'll provide a full refund, no questions asked.
                  </p>
                </div>
              </div>
            </Card>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">How to Return an Item</h2>
              <div className="space-y-4">
                {[
                  "Contact our customer service team at info@culinaryfresh.com with your order number",
                  "Provide details about the product and reason for return",
                  "We will provide you with a prepaid return shipping label",
                  "Ship the item back to us in its original condition",
                  "Once received and inspected, we process your refund within 5-7 business days",
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-foreground/80 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Important Notes</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">
                    Items must be returned within 30 days of purchase in their original packaging
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">
                    Due to food safety regulations, perishable items cannot be returned or refunded after delivery
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">Refunds will be issued to the original payment method</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">
                    For damaged items upon delivery, contact us immediately for expedited resolution
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Need Help?</h2>
              <p className="text-foreground/80 mb-4">
                Have questions about our returns policy? Contact our customer service team:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>
                  Email:{" "}
                  <a href="mailto:support@culinaryfresh.com" className="text-primary hover:underline">
                    support@culinaryfresh.com
                  </a>
                </li>
                <li>Phone: +1 (234) 567-890</li>
                <li>Hours: Monday - Friday, 9AM - 6PM</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
