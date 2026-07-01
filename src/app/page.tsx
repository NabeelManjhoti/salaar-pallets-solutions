import Hero from "@/components/hero"
import StatsBar from "@/components/stats-bar"
import ServicesSection from "@/components/services-section"
import BuyPalletsSection from "@/components/buy-pallets-section"
import WhyUsSection from "@/components/why-us-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyUsSection />
      <BuyPalletsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
