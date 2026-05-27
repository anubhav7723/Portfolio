import { useEffect, useRef } from "react"
import { projectsAnimation } from "./projectsAnimations"

export default function Projects() {
  const projRef = useRef(null)

  useEffect(() => {
    projectsAnimation(projRef)
  }, [])

  const projectsData = [
    {
      title: "AI Medical Assistant",
      description: "An intelligent conversational healthcare assistant utilizing generative AI pipelines and LLMs to assist users in symptom analysis, medical lookup, and basic healthcare questions, providing immediate reference information.",
      tags: ["Generative AI", "LLM APIs", "Python", "RAG Pipeline"],
      icon: "🩺",
      github: "https://github.com/anubhav7723",
      demo: "https://github.com/anubhav7723" 
    },
    {
      title: "Medical Report Analyzer",
      description: "An AI-powered document intelligence application using advanced OCR pipelines (EasyOCR) and deep learning to parse complex laboratory values, clinical biomarkers, and diagnostic reports, creating structured analytics.",
      tags: ["Deep Learning", "OCR Systems", "Python", "Scikit-Learn"],
      icon: "📋",
      github: "https://github.com/anubhav7723",
      demo: "https://github.com/anubhav7723"
    },
    {
      title: "Log Classification System (NLP)",
      description: "A specialized NLP model pipeline that ingests raw server logs, extracts textual feature sequences, and classifies them into operational severities (INFO, WARN, ERROR) to minimize cloud incident response time.",
      tags: ["NLP Core", "TF-IDF / BERT", "Scikit-Learn", "Regex Parsing"],
      icon: "🖥️",
      github: "https://github.com/anubhav7723",
      demo: "https://github.com/anubhav7723"
    },
    {
      title: "Handwritten Digit Classification",
      description: "An interactive convolutional neural network (CNN) classifier trained on the MNIST database. Ingests drawings from a real-time responsive drawing canvas and outputs real-time digit recognition probability charts.",
      tags: ["CNN Models", "TensorFlow / Keras", "Canvas API", "Web Interface"],
      icon: "🔢",
      github: "https://github.com/anubhav7723",
      demo: "https://github.com/anubhav7723"
    }
  ]

  return (
    <section
      id="projects"
      ref={projRef}
      className="relative min-h-screen bg-white text-slate-800 px-6 overflow-hidden pt-28 pb-20 flex items-center justify-center"
    >
      {/* Decorative Grid Background - Soft slate */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="projects-title-block flex flex-col space-y-2 mb-12 text-left">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">My Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Featured <span className="text-slate-900">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="project-card glass-panel glass-panel-hover p-6 rounded-xl border border-slate-200 bg-white flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 text-left">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl shadow-sm">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm text-left leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 text-left pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-100 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1 transition-colors"
                >
                  GitHub Code
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1 transition-colors"
                >
                  Live Demo
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a> */}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
