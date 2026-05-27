import gsap from "gsap"

export const contactAnimation = (ref) => {
  if (!ref.current) return

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

  tl.fromTo(
    ref.current.querySelector(".contact-title-block"),
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.8 }
  )

  tl.fromTo(
    ref.current.querySelector(".contact-form-panel"),
    { opacity: 0, scale: 0.95, y: 35 },
    { opacity: 1, scale: 1, y: 0, duration: 0.8 },
    "-=0.4"
  )

  tl.fromTo(
    ref.current.querySelectorAll(".contact-social-card"),
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
    "-=0.4"
  )
}

