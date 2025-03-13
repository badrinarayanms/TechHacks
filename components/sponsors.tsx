import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Sponsors() {
  // Placeholder sponsor logos
  const sponsors = [
    { name: "Tech Corp", tier: "Platinum" },
    { name: "InnovateTech", tier: "Gold" },
    { name: "DevLabs", tier: "Gold" },
    { name: "CloudSystems", tier: "Silver" },
    { name: "AI Solutions", tier: "Silver" },
    { name: "CodeCraft", tier: "Silver" },
    { name: "DataMinds", tier: "Bronze" },
    { name: "WebWizards", tier: "Bronze" },
  ]

  return (
    <section id="sponsors" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sponsors</h2>
          <p className="text-xl max-w-3xl mx-auto">
            TechHacks is made possible by the generous support of our sponsors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-dark-bg rounded-xl p-6 flex items-center justify-center group">
              <div className="relative w-full aspect-video flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=100&width=200`}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className="filter grayscale group-hover:grayscale-0 transition-all duration-300 object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium bg-primary/80 text-secondary px-2 py-1 rounded">
                    {sponsor.tier}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  )
}

