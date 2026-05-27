import { useEffect, useRef } from "react"
import { certificationsAnimation } from "./certificationsAnimations"

// Import local certificate and publication assets directly
import AIMLInternship from "../../assets/AIMLInternship.png"
import IBMPython from "../../assets/IBMPython.png"
import IBMsql from "../../assets/IBMsql.png"
import NPTELPython from "../../assets/NPTELPython.png"
import ResearchPaper from "../../assets/ResearchPaper.png"
import CodeForBharat from "../../assets/CodeForBharat2.png"
import AceHack from "../../assets/AceHack.jpeg"

export default function Certifications() {
  const certRef = useRef(null)

  useEffect(() => {
    certificationsAnimation(certRef)
  }, [])

  const certificationsData = [
    {
      title: "AI & Machine Learning Internship",
      issuer: "Industry Internship Program",
      date: "Completed 2025",
      id: "AIML-INT-2025",
      skills: ["Model Deployment", "Python Scripting", "ML Pipelines", "Agentic Systems"],
      verifyUrl: "https://drive.google.com/file/d/1brR49xk2EYjomB19G8E5nUKMgbgEANBR/view?usp=drive_link",
      image: AIMLInternship
    },
    {
      title: "Python for Data Science, AI & Dev",
      issuer: "IBM & Coursera",
      date: "Completed 2024",
      id: "IBM-PY-2024",
      skills: ["Python Core", "Pandas & NumPy", "Data Structures", "REST APIs"],
      verifyUrl: "https://coursera.org/share/ffbb4fc265a33213b161844ccafb46fe",
      image: IBMPython
    },
    {
      title: "SQL for Data Science",
      issuer: "IBM & Coursera",
      date: "Completed 2024",
      id: "IBM-SQL-2024",
      skills: ["Relational SQL", "Database Design", "Data Analysis", "Database Integration"],
      verifyUrl: "https://coursera.org/share/8defd4ac85d0724e8792f33b8dcf49c8",
      image: IBMsql
    },
    {
      title: "Python for Data Science (NPTEL)",
      issuer: "NPTEL & IIT Madras",
      date: "Completed 2024",
      id: "NPTEL-PY-2024",
      skills: ["Statistical Analysis", "Data Manipulation", "Mathematical Models", "Exploratory Data"],
      verifyUrl: "https://drive.google.com/file/d/1EqEla0VSCTZo1Sfl9u1LtBKwxdrBTzwu/view?usp=drive_link",
      image: NPTELPython
    },
    {
      title: "AI & ML Research Publication",
      issuer: "Academic Research Initiative",
      date: "Published 2025",
      id: "RES-PAPER-2025",
      skills: ["Scientific Writing", "Algorithm Optimization", "Peer Review", "Statistical Validity"],
      verifyUrl: "https://drive.google.com/file/d/1kxKB1yKCxUHvMl4XhbNusNNHKjEIJY0o/view?usp=drive_link",
      image: ResearchPaper
    },
    {
      title: "Code For Bharat 2 Hackathon",
      issuer: "Unstop - Code For Bharat",
      date: "Participated 2025",
      id: "Code for bharat",
      skills: ["Hackathon", "ChatBot", "Unstop", "Participation"],
      verifyUrl: "https://drive.google.com/file/d/1Vr0TM93rgFEqWkdCvcNoxjavwqmFBVqQ/view?usp=drive_link",
      image: CodeForBharat
    },
    {
      title: "AceHack 4.0 Hackathon",
      issuer: "UEM , Jaipur",
      date: "Participated 2025",
      id: "Acehack",
      skills: ["Hackathon", "Web App", "Dora Hacks", "Participation"],
      verifyUrl: "https://drive.google.com/file/d/1iYTD3yhCuA7MlrjXoVIv3KdSwZTv9m2u/view?usp=drive_link",
      image: AceHack
    }
  ]

  return (
    <section
      id="certifications"
      ref={certRef}
      className="relative min-h-screen bg-slate-50 text-slate-800 px-6 overflow-hidden pt-28 pb-20 flex items-center justify-center"
    >
      {/* Decorative Grid Background - Soft slate */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="cert-title-block flex flex-col space-y-2 mb-12 text-left">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">My Achievements</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Certifications & <span className="text-slate-900">Publications</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="cert-card glass-panel p-6 rounded-xl border border-slate-200 bg-white flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Certificate Image Preview Container */}
                <div className="relative w-full h-44 rounded-lg bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center group/cert-preview shadow-sm">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-contain bg-slate-50 p-2 transition-transform duration-500 group-hover/cert-preview:scale-102"
                    />
                  ) : null}

                  {/* Hover interactive overlay */}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/cert-preview:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 text-white z-10 backdrop-blur-[1px] cursor-pointer"
                  >
                    <span className="text-xl">🔗</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase font-mono">View Full Document</span>
                  </a>
                </div>

                {/* Badge Header icon + Issuer */}
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <div className="text-left space-y-1">
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {cert.title}
                  </h3>
                </div>

                {/* Skills Learned list */}
                <div className="text-left space-y-1.5 border-t border-slate-100 pt-3">
                  <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Key Focus Area:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-medium border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Verify Link */}
              <div className="pt-3 border-t border-slate-100 flex justify-start">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1 transition-colors"
                >
                  Verify Credentials
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
