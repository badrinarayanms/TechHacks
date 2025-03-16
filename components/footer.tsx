import Link from "next/link"
import { Twitter, Linkedin, Instagram, Github, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className=" py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-primary">Tech</span>
              <span className="text-accent">Hacks</span>
            </h2>
            <p className="max-w-md">
              The ultimate hackathon experience for innovators, creators, and tech enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                {["About", "Themes", "Timeline", "Prizes", "Sponsors", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-white hover:text-[#3f40a3] transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:techhacks2k25@gmail.com" className="hover:text-[#3f40a3] transition-colors duration-300">
                  techhacks2k25@gmail.com
                  </a>
                </li>
                {/* <li>
                  <a href="tel:+1234567890" className="hover:text-[#3f40a3] transition-colors duration-300">
                    +91 9940935591
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/10">
          <p className="text-sm text-light-text/70 mb-4 md:mb-0">© {currentYear} TechHacks. All rights reserved.</p>

          <div className="flex space-x-4">
            <Link href="#" className="text-light-text/70 hover:text-[#3f40a3] transition-colors duration-300">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-light-text/70 hover:text-[#3f40a3] transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-light-text/70 hover:text-[#3f40a3] transition-colors duration-300">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-light-text/70 hover:text-[#3f40a3] transition-colors duration-300">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-light-text/70 hover:text-[#3f40a3] transition-colors duration-300">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

