import { Brain, Link, Cloud, BotIcon as Robot, Globe, Heart } from "lucide-react"

export default function Themes() {
  const themes = [
    {
      title: "Artificial Intelligence",
      icon: <Brain className="h-10 w-10" />,
      description:
        "Develop AI-powered solutions that solve real-world problems and push the boundaries of machine learning.",
    },
    {
      title: "Blockchain",
      icon: <Link className="h-10 w-10" />,
      description:
        "Create decentralized applications that leverage blockchain technology for transparency and security.",
    },
    {
      title: "Cloud Computing",
      icon: <Cloud className="h-10 w-10" />,
      description: "Build scalable cloud-based solutions that handle big data and provide efficient services.",
    },
    {
      title: "IoT & Robotics",
      icon: <Robot className="h-10 w-10" />,
      description: "Connect the physical and digital worlds through innovative IoT and robotics applications.",
    },
    {
      title: "Sustainability",
      icon: <Globe className="h-10 w-10" />,
      description: "Develop tech solutions that address environmental challenges and promote sustainable practices.",
    },
    {
      title: "Healthcare",
      icon: <Heart className="h-10 w-10" />,
      description: "Create applications that improve healthcare delivery, patient outcomes, and medical research.",
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
              className="bg-secondary/20 rounded-xl p-8 hover:bg-secondary/30 transition-all duration-300 border border-transparent hover:border-accent/30 group"
            >
              <div className="text-accent mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {theme.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{theme.title}</h3>
              <p>{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

