import gsap from "gsap"

export const projectsAnimation = (ref) => {
  gsap.from(ref.current.querySelectorAll(".project-card"), {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  })
}
