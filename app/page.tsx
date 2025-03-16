import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Themes from "@/components/themes"
import Timeline from "@/components/timeline"
import Prizes from "@/components/prizes"
import Sponsors from "@/components/sponsors"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import LetterGlitch from "@/components/ui/LetterGlitch"
import Cybertracs from "@/components/Cybertracs"

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-light-text">
      <Header />
      <div className="w-full h-screen   ">
      <div className="absolute w-full h-full opacity-30 "><LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
        glitchColors={['#053bff', '#06deff', '#0fafff']}
      /></div>
      <div className="absolute w-full "><Hero /></div>
      </div>
      
      <About />
      <Themes />
      <Timeline />
      {/* <Prizes /> */}
      <Cybertracs/>
      {/* <Sponsors /> */}
      <Faq />
      <Footer />
    </main>
  )
}

