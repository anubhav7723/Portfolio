import { useEffect, useRef } from "react"
import { aboutAnimation } from "./aboutAnimations"

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    aboutAnimation(aboutRef)
  }, [])

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative min-h-screen bg-slate-50 text-slate-800 px-6 overflow-hidden pt-28 pb-20 flex items-center justify-center"
    >
      {/* Decorative Grid Background - Soft slate gray */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Page Title */}
        <div className="flex flex-col space-y-2 mb-12 text-left">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">My Story</span>
          <h2 className="about-title text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            About <span className="text-slate-900">Me</span>
          </h2>
        </div>

        {/* Content Columns: Info & Education */}
        <div className="grid md:grid-cols-12 gap-8">
          <div className="about-bio md:col-span-7 glass-panel p-8 rounded-xl border border-slate-200 bg-white text-left">
            <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
              <span>👤</span> Who I Am
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              I’m a final year B.Tech CSE (AIML) student passionate about AI, ML, Data Engineering and building real-world AI-powered applications. My primary focus is on Agentic AI, Geneartive AI, ML and developing intelligent systems that combine powerful machine learning capabilities with modern, user-friendly web experiences.

              <br /><br />
              With 400+ LeetCode problems solved in C++ and Python, I’ve developed strong problem-solving, debugging, and algorithmic thinking skills. I enjoy building scalable AI solutions, creating clean and interactive frontends, and transforming complex ideas into simple, impactful products through well-structured development and clear project documentation.

            </p>
          </div>

          <div className="about-education md:col-span-5 glass-panel p-8 rounded-xl border border-slate-200 bg-white flex flex-col justify-between text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <span>🎓</span> Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">B.Tech in Computer Science (AIML)</h4>
                  <p className="text-slate-500 text-xs mt-1">Specialization in Artificial Intelligence & Machine Learning</p>
                  <p className="text-slate-500 text-xs mt-1">At UEM, Jaipur</p>
                  <p className="text-emerald-600 text-xs font-semibold mt-1">Currently pursuing degree</p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="font-semibold text-slate-800 text-sm">Main Focus Fields</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["AI Agents", "Data Engineering", "Machine Learning", "DSA", "Web Interfaces"].map((focus, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-slate-50 text-xs text-slate-600 border border-slate-200">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
