"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-primary">Tech</span>
            <span className="text-accent">Hacks</span>
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-light-text" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["About", "Themes", "Timeline", "Prizes", "Sponsors", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-light-text hover:text-primary transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-dark-bg/95 backdrop-blur-md border-b border-primary/10 md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              {["About", "Themes", "Timeline", "Prizes", "Sponsors", "FAQ"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-light-text hover:text-primary transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

