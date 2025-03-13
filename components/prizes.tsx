import { Trophy } from "lucide-react"

export default function Prizes() {
  const prizes = [
    {
      place: "1st Place",
      amount: "$5,000",
      description: "Cash prize, mentorship opportunities, and exclusive tech gadgets.",
      borderColor: "border-yellow-500",
      icon: <Trophy className="h-12 w-12 text-yellow-500" />,
    },
    {
      place: "2nd Place",
      amount: "$3,000",
      description: "Cash prize and premium software subscriptions for your team.",
      borderColor: "border-gray-400",
      icon: <Trophy className="h-12 w-12 text-gray-400" />,
    },
    {
      place: "3rd Place",
      amount: "$1,500",
      description: "Cash prize and digital swag bag for each team member.",
      borderColor: "border-amber-700",
      icon: <Trophy className="h-12 w-12 text-amber-700" />,
    },
  ]

  return (
    <section id="prizes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prizes</h2>
          <p className="text-xl max-w-3xl mx-auto">Compete for these amazing prizes and recognition.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`bg-dark-bg rounded-xl p-8 border-2 ${prize.borderColor} flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300`}
            >
              <div className="mb-4">{prize.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-primary">{prize.place}</h3>
              <div className="text-3xl font-bold mb-4 text-accent">{prize.amount}</div>
              <p>{prize.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-4">Plus category prizes and special awards from our sponsors!</p>
        </div>
      </div>
    </section>
  )
}

