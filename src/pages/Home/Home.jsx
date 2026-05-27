import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { homeAnimation } from "./homeAnimations"
import About from "../About/About"
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import Certifications from "../Certifications/Certifications"
import Contact from "../Contact/Contact"

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    homeAnimation(heroRef)
  }, [])

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen bg-white flex items-center justify-center text-slate-800 px-6 overflow-hidden pt-20"
      >
        {/* Soft grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center relative z-10 py-12">
          {/* Left Column: Heading & Copy */}
          <div className="md:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="hero-badge self-start flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open for internships, jobs & project collaborations
            </div>

            {/* Heading */}
            <h1 className="hero-title text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Hi, I'm <br />
              <span className="text-slate-900">
                Anubhav Gupta
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="hero-subtitle text-lg md:text-xl font-bold text-slate-700 flex items-center gap-2">
              AIML Developer <span className="text-slate-400">&bull;</span> Python Developer <span className="text-slate-400">&bull;</span> Data Science
            </h2>

            {/* Description */}
            <p className="hero-description text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              A final year B.Tech Computer Science student specializing in Artificial Intelligence & Machine Learning. 
              I enjoy building scalable AI and data-driven applications, developing intelligent systems with modern web technologies, and creating machine learning solutions that solve practical real-world problems. 
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-6 py-3 rounded-lg font-bold text-sm tracking-wide text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all duration-200 flex items-center gap-2"
              >
                See My Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1I69PdDgyrLlD4zTuolsDVwYyhuaNGu2s/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-bold text-sm tracking-wide bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-sm transition-all duration-200 flex items-center gap-2"
              >
                View Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-6 py-3 rounded-lg font-bold text-sm tracking-wide bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-sm transition-all duration-200 flex items-center gap-2"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column: Clean & Classic Personal Card & Social links */}
          <div className="md:col-span-5 flex flex-col items-center md:items-end gap-5 justify-center">
            
            {/* Stats Card */}
            <div className="hero-stats w-full max-w-sm glass-panel p-6 rounded-xl border border-slate-200 relative bg-white">
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Profile Overview</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>

              {/* Quick Stats Grid */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-3.5 hover:border-slate-300 transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-base border border-slate-200">
                    DSA
                  </div>
                  <div className="text-left">
                    <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">LeetCode Solved</h4>
                    <p className="text-sm font-semibold text-slate-800">400+ Problems in C++ / Python</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-3.5 hover:border-slate-300 transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base border border-emerald-100">
                    ML
                  </div>
                  <div className="text-left">
                    <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Development</h4>
                    <p className="text-sm font-semibold text-slate-800">Python Development</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-3.5 hover:border-slate-300 transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center text-lg border border-slate-200">
                    🎓
                  </div>
                  <div className="text-left">
                    <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Education Level</h4>
                    <p className="text-sm font-semibold text-slate-800">B.Tech CSE student (AIML)</p>
                  </div>
                </div>
              </div>

              {/* simulated location status */}
              <div className="mt-6 pt-3.5 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                <span>STATUS: Active</span>
                <span>Based in India</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="w-full max-w-sm grid grid-cols-3 gap-3">
              <a
                href="https://github.com/anubhav7723"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anubhav-gupta-149903296/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/anubhav098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.826a1.374 1.374 0 0 0-.012 1.945L13.18 13.88a1.374 1.374 0 0 0 1.944-.012l6.082-6.115a1.374 1.374 0 0 0-.012-1.945L15.44.43A1.374 1.374 0 0 0 13.483 0zm-8.87 9.878a.824.824 0 0 0-.583.247L.247 13.911a.824.824 0 0 0 .007 1.165l2.42 2.41a.824.824 0 0 0 1.165-.008l3.816-3.834a.824.824 0 0 0-.007-1.165l-2.42-2.41a.824.824 0 0 0-.583-.247z" />
                </svg>
                LeetCode
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Scrollable Subsections */}
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}
