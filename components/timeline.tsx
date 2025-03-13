export default function Timeline() {
  const timelineEvents = [
    {
      date: "January 15, 2025",
      title: "Registration Opens",
      description: "Early bird registration begins. Sign up to secure your spot!",
    },
    {
      date: "February 28, 2025",
      title: "Team Formation Event",
      description: "Find teammates and brainstorm ideas at our virtual team formation event.",
    },
    {
      date: "March 10, 2025",
      title: "Registration Closes",
      description: "Last day to register for TechHacks 2025.",
    },
    {
      date: "March 20, 2025",
      title: "Hackathon Kickoff",
      description: "Opening ceremony and theme announcement. Let the hacking begin!",
    },
    {
      date: "March 21, 2025",
      title: "Submission Deadline",
      description: "All projects must be submitted by 5:00 PM EST.",
    },
    {
      date: "March 22, 2025",
      title: "Judging & Awards",
      description: "Project presentations, judging, and announcement of winners.",
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Timeline</h2>
          <p className="text-xl max-w-3xl mx-auto">Mark your calendar for these important dates and events.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:ml-auto md:pl-16 md:pr-0" : "md:mr-auto md:pr-16 md:pl-0"
              } md:w-1/2 pl-10`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 md:left-auto md:right-auto transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 top-6 w-5 h-5 rounded-full bg-accent z-10"></div>

              {/* Content box */}
              <div className="bg-dark-bg border border-primary/20 rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]">
                <div className="text-accent font-mono text-sm mb-2">{event.date}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

