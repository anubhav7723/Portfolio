import { useEffect, useRef } from "react"
import { skillsAnimation } from "./skillsAnimations"

export default function Skills() {
  const skillsRef = useRef(null)

  useEffect(() => {
    skillsAnimation(skillsRef)
  }, [])

  const skillCategories = [
    {
      title: "AIML Skills",
      icon: "🤖",
      skills: [
        { name: "Generative AI", tag: "Agents & RAG" },
        { name: "TensorFlow & Keras", tag: "Deep Neural Nets" },
        { name: "PyTorch & CNNs", tag: "Computer Vision" },
        { name: "Scikit-Learn", tag: "Supervised Learning" },
        { name: "Computer Vision (OpenCV)", tag: "Image Processing" },
        { name: "OCR Pipelines (EasyOCR)", tag: "Doc Intelligence" }
      ]
    },
    {
      title: "Data Engineer Skills",
      icon: "📊",
      skills: [
        { name: "Pandas & NumPy", tag: "Data Wrangling" },
        { name: "SQL Databases", tag: "Structured Queries" },
        { name: "Feature Engineering", tag: "Model Prep" },
        { name: "ETL Data Pipelines", tag: "Data Processing" },
        { name: "CSV/JSON Processing", tag: "Raw Formats" },
        { name: "REST APIs Integration", tag: "Data Fetching" }
      ]
    },
    {
      title: "Programming & Tools",
      icon: "⚙️",
      skills: [
        { name: "C++ Programming", tag: "DSA & Algorithms" },
        { name: "Python Programming", tag: "Scripting & Dev" },
        { name: "Git & GitHub", tag: "Version Control" },
        { name: "VS Code IDE", tag: "Debug & Profiles" },
      ]
    }
  ]

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative min-h-screen bg-white text-slate-800 px-6 overflow-hidden pt-28 pb-20 flex items-center justify-center"
    >
      {/* Decorative Grid Background - Soft slate gray */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Skills Section Header */}
        <div className="skills-title-block flex flex-col space-y-2 mb-12 text-left">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">My Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Technical <span className="text-slate-900">Skills Matrix</span>
          </h2>
        </div>

        {/* Skills Grid - Index Card Checklist Style */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category-card glass-panel p-6 rounded-xl border border-slate-200 bg-white flex flex-col space-y-5"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  {category.title}
                </h4>
              </div>

              {/* Skills Index List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between py-2 border-b border-slate-100/50 last:border-0 hover:bg-slate-50/50 px-2 rounded transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-slate-400 group-hover:text-slate-900 transition-colors text-[10px]">✦</span>
                      <span className="text-slate-800 font-bold text-sm group-hover:text-slate-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-slate-50 text-[10px] font-bold font-mono text-slate-500 uppercase border border-slate-200 group-hover:bg-white group-hover:border-slate-300 transition-all duration-200">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
