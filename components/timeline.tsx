export default function Timeline() {
  const timelineEvents = [
    {
      date: "March 12, 2025",
      title: "Registration Opens",
      description: "Participants can start registering for the hackathon.",
    },
    {
      date: "March 23, 2025",
      title: "Registration Closes",
      description: "Last day to register for the hackathon.",
    },
    {
      date: "March 24, 2025",
      title: "1st Round Evaluation",
      description: "Judges will evaluate submissions and shortlist participants for the final round.",
    },
    {
      date: "March 25, 2025",
      title: "Finalist Announcement",
      description: "Finalists will be announced and notified.",
    },
    {
      date: "March 26, 2025",
      title: "Hackathon Begins",
      description: "The hackathon kicks off with an inaugural session and speeches.",
    },
    {
      date: "March 26, 2025",
      title: "Hackathon Schedule",
      description: [
        "8:00 AM - Inaugural of Hackathon",
        "8:30 AM - Speech by Dignitaries",
        "8:45 AM - Welcome Speech",
        "9:00 AM - Hackathon officially begins",
        "2:00 PM - 1st round judgment",
        "10:00 PM - 2nd round judgment",
      ],
    },
    {
      date: "March 27, 2025",
      title: "Hackathon Ends & Winner Announcement",
      description: [
        "9:00 AM - Hackathon closes, winners announced",
        "10:00 AM - Prize distribution",
      ],
    },
  ];
  const rules = [
    { title: "Rules to be Followed by Participants", details: [] },
    { title: "Accommodation Rules", details: [] },
    { title: "Boys", details: ["Entry: 4:00 PM", "Food will be available"] },
    { title: "Girls", details: ["Entry: 4:00 PM", "Food will be available"] },
    { title: "General Guidelines", details: [
        "Request Participants to carry all essential items with them and Laptop mandatory.",
        "Participants must bring a valid government-issued ID proof (such as Aadhar card, driver's license, passport) for identity verification."
      ] 
    }
  ];
  
  

  return (
    <section id="timeline" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Timeline</h2>
          <p className="text-xl max-w-3xl mx-auto">Mark your calendar for these important dates and events.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary"></div>

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
    <div className="bg-dark-bg border border-primary/20 rounded-xl p-6 hover:border-[#2b74c2] transition-all duration-300 hover:shadow-[0_0_15px_rgba(1, 56, 255, 0.575)]">
      <div className="text-accent font-mono text-sm mb-2">{event.date}</div>
      <h3 className="text-xl font-bold mb-2 text-primary">{event.title}</h3>
      {Array.isArray(event.description) ? (
  event.description.map((line, index) => <p key={index}>{line}</p>)
) : (
  <p>{event.description}</p>
)}
    </div>
  </div>
))}

        </div>
      </div>
      
    </section>
  )
}

