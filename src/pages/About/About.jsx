import { useEffect, useRef } from "react"
import { aboutAnimation } from "./aboutAnimations"

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    aboutAnimation(aboutRef)
  }, [])

  return (
    <section ref={aboutRef} className="min-h-screen bg-gray-900 text-white p-20">
      <h2 className="about-title text-4xl font-bold text-green-400">
        About Me
      </h2>
      <p className="about-text mt-6 text-gray-400 max-w-2xl">
        I’m a B.Tech CSE (AIML) student passionate about web development,
        machine learning, and solving DSA problems.
      </p>
    </section>
  )
}
