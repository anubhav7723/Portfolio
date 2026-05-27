import gsap from "gsap"

export const aboutAnimation = (ref) => {
  if (!ref.current) return
  
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

  tl.fromTo(
    ref.current.querySelector(".about-title"),
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.8 }
  )

  tl.fromTo(
    [
      ref.current.querySelector(".about-bio"),
      ref.current.querySelector(".about-education"),
    ].filter(Boolean),
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
    "-=0.4"
  )
}


