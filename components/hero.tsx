"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import srmlogo from "@/public/srmlogo.webp"
import texuslogo from "@/public/texuslogo.png"
import cybertracslogo from '@/public/cybertracslogo.png'
import LetterGlitch from "./ui/LetterGlitch"


export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Code. Innovate. Disrupt."
  const typingSpeed = 100
  const typingDelay = 1000
  const binaryRef = useRef<HTMLDivElement>(null)

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    const type = () => {
      if (isDeleting) {
        setTypedText(fullText.substring(0, currentIndex - 1))
        currentIndex--

        if (currentIndex === 0) {
          isDeleting = false
          timeoutId = setTimeout(type, typingDelay)
          return
        }
      } else {
        setTypedText(fullText.substring(0, currentIndex + 1))
        currentIndex++

        if (currentIndex === fullText.length) {
          isDeleting = true
          timeoutId = setTimeout(type, typingDelay)
          return
        }
      }

      timeoutId = setTimeout(type, typingSpeed)
    }

    timeoutId = setTimeout(type, typingDelay)

    return () => clearTimeout(timeoutId)
  }, [])
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
       
    }
  }
  // Binary animation effect
  useEffect(() => {
    const createBinaryElements = () => {
      if (!binaryRef.current) return

      const binaryStrings = [
        "01001000 01100001 01100011 01101011", // "Hack" in binary
        "01000001 01001001 00100000 01001101 01001100", // "AI ML" in binary
      ]

      const topLeftBinary = document.createElement("div")
      topLeftBinary.className = "absolute top-10 left-10 text-primary/20 font-mono text-xs md:text-sm opacity-70"
      topLeftBinary.textContent = binaryStrings[0]

      const bottomRightBinary = document.createElement("div")
      bottomRightBinary.className = "absolute bottom-10 right-10 text-accent/20 font-mono text-xs md:text-sm opacity-70"
      bottomRightBinary.textContent = binaryStrings[1]

      binaryRef.current.appendChild(topLeftBinary)
      binaryRef.current.appendChild(bottomRightBinary)
    }

    createBinaryElements()
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      <div
        className="absolute inset-0 bg-gradient-to-br from-secondary via-dark-bg to-secondary z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(63, 172, 255, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(68, 128, 224, 0.15) 0%, transparent 40%)",
        }}
        ref={binaryRef}
      ></div>
  
      <div className="container mx-auto px-4 py-20 z-10 text-center">
        <div className="max-w-4xl mx-auto">
        <div className="flex w-full text-center justify-center items-center mb-2 ">
            <Image src={srmlogo} alt="Logo 1" width={100} className="mr-5"/>
            <span className="text-lg text-white font-bold ">Department of Information Technology</span>
            <Image src={texuslogo} alt="Logo 1" width={100} className="ml-5" />
            </div>
            <h1 className="text-lg text-white font-bold mb-1">In Association with</h1>
          <div className="flex justify-center mb-8">
            
            
            <div className="bg-white rounded-full px-5 py-2">
            <a
               
              href={`#cybertracs`}
              className="text-light-text hover:text-[#3f40a3] transition-colors duration-300"
              onClick={() => handleNavClick("cybertracs")}
            >
              <Image src={cybertracslogo} alt="SRM Logo" width={150}  />
               
            </a>
            

            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  md:mb-4">
            TechHacks Hackathon{" "}
            <span className="inline-block  bg-accent text-dark-bg text-sm mt-2 md:mt-0 md:text-base px-2 py-1 rounded-md align-top ml-2">
              2025
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-mono mb-6 h-8">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join the ultimate 24-hour coding challenge where innovation meets technology. Build, learn, and connect with
            tech enthusiasts from around the globe.
          </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-seconday/80 hover:text-white text-secondary font-bold">
              Register Now
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </div>
            

        </div>
      </div>
    </section>
  )
}

