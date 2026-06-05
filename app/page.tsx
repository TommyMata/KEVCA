import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import CTABanner from '@/components/CTABanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollRevealInit from '@/components/ScrollRevealInit'
import { getServicios } from '@/lib/data'

export default async function Home() {
  const servicios = await getServicios()

  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <main>
        <Hero />
        <Services servicios={servicios} />
        <WhyUs />
        <About />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
