import gsap from "gsap"

export const skillsAnimation = (ref) => {
  if (!ref.current) return

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

  tl.fromTo(
    ref.current.querySelector(".skills-title-block"),
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.8 }
  )

  tl.fromTo(
    ref.current.querySelectorAll(".skill-category-card"),
    { opacity: 0, scale: 0.95, y: 25 },
    { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15 },
    "-=0.4"
  )
}
