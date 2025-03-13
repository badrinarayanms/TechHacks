import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Themes from "@/components/themes"
import Timeline from "@/components/timeline"
import Prizes from "@/components/prizes"
import Sponsors from "@/components/sponsors"
import Faq from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-light-text">
      <Header />
      <Hero />
      <About />
      <Themes />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Faq />
      <Footer />
    </main>
  )
}

