import { Brain, Link, Cloud, BotIcon as Robot, Globe, Heart, ShieldCheck, Lightbulb } from "lucide-react"

export default function Themes() {
  const themes = [
    {
      title: "Artificial Intelligence",
      icon: <Brain className="h-10 w-10" />,
      description:
        "Develop AI-powered solutions that solve real-world problems and push the boundaries of machine learning.",
    },
    {
      title: "Cybersecurity",
      icon: <ShieldCheck  className="h-10 w-10" />,
      description:
        "Secure the Future – Build robust cybersecurity solutions to protect digital assets and ensure privacy.",
    },
    {
      title: "IoT & Robotics",
      icon: <Robot className="h-10 w-10" />,
      description: "Connect the physical and digital worlds through innovative IoT and robotics applications.",
    },
    {
      title: "Sustainable Development",
      icon: <Globe className="h-10 w-10" />,
      description: "Develop tech solutions that address environmental challenges and promote sustainable practices.",
    },
    {
      title: "Open Innovation",
      icon:  <Lightbulb  className="h-10 w-10" />,
      description: "Innovate Without Limits – Create groundbreaking solutions with open collaboration and creativity.",
    },
  ]

  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Themes</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Explore these cutting-edge domains and build innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="bg-secondary/20 rounded-xl p-8 hover:bg-secondary/30 transition-all duration-300 border lg:border-transparent hover:border-accent/30 group relative"
            >
              <div className="text-accent mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {theme.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{theme.title}</h3>
              <p>{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

