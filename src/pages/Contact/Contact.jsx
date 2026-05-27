import { useEffect, useRef, useState } from "react"
import { contactAnimation } from "./contactAnimation"

// ==========================================
// CONFIGURATION: SET YOUR FORMSPREE FORM ID HERE
// 1. Sign up for a free account at https://formspree.io/
// 2. Create a new form pointing to your email: anubhavg0098@gmail.com
// 3. Copy the 8-character Form ID (e.g. "xbjnkywl") and paste it below!
// ==========================================
const FORMSPREE_FORM_ID = "xpqnovrg" // <-- Replace with your Formspree ID

export default function Contact() {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  
  // Submission & API states
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    contactAnimation(contactRef)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Safety check in case the user hasn't set the ID yet
    if (FORMSPREE_FORM_ID === "YOUR_FORMSPREE_ID") {
      setErrorMsg("Setup Required: Please paste your Formspree Form ID in Contact.jsx to activate emails!")
      return
    }

    setIsSubmitting(true)
    setErrorMsg("")

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setErrorMsg("")
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        const data = await response.json()
        setErrorMsg(data.error || "Submission failed. Please check the Formspree configuration.")
      }
    } catch (err) {
      setErrorMsg("Failed to connect. Please check your internet connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/anubhav7723",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
        </svg>
      ),
      colorClass: "hover:text-slate-900 hover:border-slate-900"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anubhav-gupta-149903296/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      colorClass: "hover:text-slate-900 hover:border-slate-900"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/anubhav098",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.826a1.374 1.374 0 0 0-.012 1.945L13.18 13.88a1.374 1.374 0 0 0 1.944-.012l6.082-6.115a1.374 1.374 0 0 0-.012-1.945L15.44.43A1.374 1.374 0 0 0 13.483 0zm-8.87 9.878a.824.824 0 0 0-.583.247L.247 13.911a.824.824 0 0 0 .007 1.165l2.42 2.41a.824.824 0 0 0 1.165-.008l3.816-3.834a.824.824 0 0 0-.007-1.165l-2.42-2.41a.824.824 0 0 0-.583-.247z" />
        </svg>
      ),
      colorClass: "hover:text-slate-900 hover:border-slate-900"
    }
  ]

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative min-h-screen bg-white text-slate-800 px-6 overflow-hidden pt-28 pb-20 flex items-center justify-center"
    >
      {/* Decorative Grid Overlay - Soft Slate */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Connect Info */}
        <div className="contact-title-block md:col-span-5 flex flex-col space-y-6 text-left">
          
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Let's <span className="text-slate-900">Connect </span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm pt-2">
              Have an internship offer, an exciting ML project, or a data engineering challenge? Let's build something remarkable together.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-lg text-slate-700">
                ✉️
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Me</h4>
                <p className="text-sm font-semibold text-slate-800">anubhavg0098@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-lg text-slate-800 font-bold">
                📍
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</h4>
                <p className="text-sm font-semibold text-slate-800">India</p>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="pt-6">
            <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3">On the Web</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-social-card w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 ${social.colorClass} transition-all duration-200 hover:bg-slate-100 shadow-sm`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Contact Form panel */}
        <div className="md:col-span-7 w-full">
          <div className="contact-form-panel glass-panel p-8 rounded-xl border border-slate-200 bg-white relative">
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-3xl animate-bounce">
                  ✨
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Dispatched!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Thank you for reaching out, Anubhav will connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Send a Message</h3>
                
                {/* Formspree Error Box */}
                {errorMsg && (
                  <div className="p-3.5 rounded-lg border border-rose-200 bg-rose-50 text-xs font-semibold text-rose-800">
                    ⚠️ {errorMsg}
                  </div>
                )}

                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-500">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-500">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-500">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                    placeholder="Describe your project, proposal, or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
