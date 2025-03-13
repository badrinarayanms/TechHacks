import { Users, LaptopIcon as LaptopCode, Trophy, Briefcase, GraduationCap, Globe } from "lucide-react"

export default function About() {
  const aboutCards = [
    {
      title: "What is TechHacks?",
      description:
        "TechHacks is a 24-hour hackathon where participants collaborate to solve real-world problems using technology. Whether you're a coding expert or just starting out, TechHacks offers a platform to innovate, learn, and network.",
      icons: [
        { icon: <Users className="h-5 w-5" />, text: "500+ Participants Expected" },
        { icon: <LaptopCode className="h-5 w-5" />, text: "All Experience Levels Welcome" },
      ],
    },
    {
      title: "Why Participate?",
      description:
        "TechHacks offers more than just a coding competition. It's a chance to push your limits, collaborate with like-minded individuals, and potentially launch your next big idea.",
      icons: [
        { icon: <Trophy className="h-5 w-5" />, text: "$10,000+ in Prizes" },
        { icon: <Briefcase className="h-5 w-5" />, text: "Recruitment Opportunities" },
      ],
    },
    {
      title: "Who Can Join?",
      description:
        "TechHacks is open to UG and PG students, professionals, and anyone passionate about technology. Form a team of up to 4 members or join solo and find teammates at our team formation event.",
      icons: [
        { icon: <GraduationCap className="h-5 w-5" />, text: "UG & PG Students Welcome" },
        { icon: <Globe className="h-5 w-5" />, text: "Virtual Participation Available" },
      ],
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About TechHacks</h2>
          <p className="text-xl max-w-3xl mx-auto">
            A cutting-edge hackathon designed to bring together the brightest minds in tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="bg-dark-bg border border-primary/20 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,170,0.3)]"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">{card.title}</h3>
              <p className="mb-6">{card.description}</p>
              <div className="space-y-3">
                {card.icons.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-accent">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

