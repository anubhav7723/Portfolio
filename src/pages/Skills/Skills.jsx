import { useEffect, useRef } from "react"
import { skillsAnimation } from "./skillsAnimations"

export default function Skills() {
  const skillsRef = useRef(null)

  useEffect(() => {
    skillsAnimation(skillsRef)
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", tag: "Scripting & AI" },
        { name: "C++", tag: "DSA & Core" },
        { name: "SQL", tag: "Databases" },
        { name: "JavaScript", tag: "Frontend Logic" }
      ]
    },
    {
      title: "AI & ML",
      skills: [
        { name: "Machine Learning", tag: "Statistical Models" },
        { name: "Deep Learning", tag: "Neural Networks" },
        { name: "NLP", tag: "Text Processing" },
        { name: "Computer Vision", tag: "Image Models" },
        { name: "Generative AI", tag: "Agents & LLMs" },
        { name: "Prompt Engineering", tag: "System Prompts" },
        { name: "Fine-tuning", tag: "Model Adapters" }
      ]
    },
    {
      title: "Gen AI & LLMs",
      skills: [
        { name: "LangChain", tag: "Orchestration" },
        { name: "LangGraph", tag: "Stateful Agents" },
        { name: "RAG", tag: "Retrieval" },
        { name: "FAISS", tag: "Vector Store" },
        { name: "HuggingFace", tag: "Model Hub" },
        { name: "Transformers", tag: "Attention Nets" }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "FastAPI", tag: "High-Perf APIs" },
        { name: "REST APIs", tag: "Endpoints" },
        { name: "Git", tag: "Version Control" },
        { name: "GitHub", tag: "Collaboration" },
        { name: "Streamlit", tag: "Rapid Prototyping" },
        { name: "Jupyter Notebook", tag: "Data Science" },
        { name: "VS Code", tag: "IDE & Debug" }
      ]
    },
    {
      title: "Libraries",
      skills: [
        { name: "NumPy", tag: "Numerical Comp" },
        { name: "Pandas", tag: "Data Manipulation" },
        { name: "Scikit-learn", tag: "Classic ML" },
        { name: "TensorFlow", tag: "Deep Learning" },
        { name: "OpenCV", tag: "Image & Video" },
        { name: "NLTK", tag: "Text Prep" },
        { name: "SpaCy", tag: "Industrial NLP" }
      ]
    },
    {
      title: "Core CS",
      skills: [
        { name: "DSA", tag: "Data Structs & Algos" },
        { name: "DBMS", tag: "Database Systems" },
        { name: "OS", tag: "System Core" },
        { name: "OOPs", tag: "Design Patterns" }
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
