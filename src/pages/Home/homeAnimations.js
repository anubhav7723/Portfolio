import gsap from "gsap"

export const homeAnimation = (ref) => {
  if (!ref.current) return
  
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

  tl.fromTo(
    [
      ref.current.querySelector(".hero-badge"),
      ref.current.querySelector(".hero-title"),
      ref.current.querySelector(".hero-subtitle"),
      ref.current.querySelector(".hero-description"),
      ref.current.querySelector(".hero-ctas"),
      ref.current.querySelector(".hero-stats")
    ].filter(Boolean),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }
  )
}


