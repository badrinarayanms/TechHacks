"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Faq() {
  const faqs = [
    {
      question: "Who can participate in TechHacks?",
      answer:
        "TechHacks is open to undergraduate and postgraduate students, professionals, and anyone passionate about technology. You must be at least 18 years old to participate.",
    },
    {
      question: "Do I need to have a team to register?",
      answer:
        "No, you can register as an individual and form a team later. We'll have team formation events before the hackathon where you can meet potential teammates. Teams can have up to 4 members.",
    },
    {
      question: "Is there a registration fee?",
      answer: "No, TechHacks is completely free to participate in, thanks to our generous sponsors.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "You should bring your laptop, charger, any hardware you plan to use for your project, and your student ID if you're a student. If you're participating virtually, ensure you have a stable internet connection.",
    },
    {
      question: "Will there be food and accommodation?",
      answer:
        "Yes, meals will be provided throughout the hackathon for in-person participants. However, accommodation is not provided, and participants are responsible for their own lodging arrangements.",
    },
    {
      question: "Can I work on a pre-existing project?",
      answer:
        "No, all projects must be started from scratch at the beginning of the hackathon. You can come with ideas, but the actual development must begin during the event.",
    },
    {
      question: "How will projects be judged?",
      answer:
        "Projects will be judged based on innovation, technical complexity, practicality, presentation, and adherence to the chosen theme. Our panel of judges includes industry experts and sponsors.",
    },
    {
      question: "Is there a code of conduct?",
      answer:
        "Yes, all participants must adhere to our code of conduct, which promotes a respectful, inclusive, and collaborative environment. Any violation may result in disqualification.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-xl max-w-3xl mx-auto">Find answers to commonly asked questions about TechHacks.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-primary/20 rounded-lg overflow-hidden">
              <button
                className="w-full p-4 text-left bg-secondary/20 hover:bg-secondary/30 flex justify-between items-center transition-colors duration-300"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-primary">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-accent" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-accent" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-dark-bg">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

