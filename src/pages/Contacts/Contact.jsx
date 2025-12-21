import { useEffect, useRef } from "react"
import { contactAnimation } from "./contactAnimations"

export default function Contact() {
  const contactRef = useRef(null)

  useEffect(() => {
    contactAnimation(contactRef)
  }, [])

  return (
    <section
      ref={contactRef}
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
    >
      <h2 className="text-4xl text-green-400 font-bold">
        Let’s Connect 🚀
      </h2>
    </section>
  )
}
