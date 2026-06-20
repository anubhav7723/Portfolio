import { useState, useEffect } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navLinks = [
    { name: "Home", targetId: "home" },
    { name: "About", targetId: "about" },
    { name: "Skills", targetId: "skills" },
    { name: "Projects", targetId: "projects" },
    { name: "Certifications", targetId: "certifications" },
    { name: "Contact", targetId: "contact" },
  ]

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Sweet spot in the middle of the screen
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    navLinks.forEach((link) => {
      const el = document.getElementById(link.targetId)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleScrollTo = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm transition-transform duration-300 group-hover:rotate-12">
            A
          </div>
          <span className="font-extrabold text-lg tracking-wider text-slate-900 group-hover:text-slate-700 transition-all duration-300">
            ANUBHAV
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => handleScrollTo(e, link.targetId)}
              className={`relative text-sm font-medium tracking-wide transition-all duration-300 py-1 ${
                activeSection === link.targetId
                  ? "text-slate-900 font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}
              {activeSection === link.targetId && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900 rounded-full" />
              )}
            </a>
          ))}
          
          <a
            href="https://drive.google.com/file/d/1C8xqk8rhDBLXvEilqtDLBULgd5z80927/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 border-b border-slate-200 bg-white" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => handleScrollTo(e, link.targetId)}
              className={`text-sm font-medium tracking-wide transition-colors text-left ${
                activeSection === link.targetId ? "text-slate-900 font-bold" : "text-slate-600"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://docs.google.com/document/d/1oQFm7j3wDNxxGLScCs0Fq78lRbrPJkbBT8j9nXCVDsA/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 border border-slate-200"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
