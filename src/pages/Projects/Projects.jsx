import { useEffect, useRef } from "react"
import { projectsAnimation } from "./projectsAnimations"

export default function Projects() {
  const projRef = useRef(null)

  useEffect(() => {
    projectsAnimation(projRef)
  }, [])

  return (
    <section ref={projRef} className="min-h-screen bg-black text-white p-20">
      <h2 className="text-4xl text-green-400 font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {["Potato Classifier", "Medical Analyzer", "Smart Farming"].map(
          (p, i) => (
            <div key={i} className="project-card bg-gray-900 p-6 rounded-xl">
              {p}
            </div>
          )
        )}
      </div>
    </section>
  )
}
