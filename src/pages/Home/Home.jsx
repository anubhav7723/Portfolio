import { useEffect, useRef } from "react"
import { homeAnimation } from "./homeAnimations"

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    homeAnimation(heroRef)
  }, [])

  return (
    <section
      ref={heroRef}
      className="h-screen bg-black flex items-center justify-center text-white"
    >
      <div className="text-center">
        <h1 className="hero-title text-5xl font-bold">
          Hi, I'm <span className="text-green-400">Anubhav</span>
        </h1>
        <p className="hero-sub text-gray-400 mt-4">
          Web Developer | AIML Engineer
        </p>
      </div>
    </section>
  )
}
