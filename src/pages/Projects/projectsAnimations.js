import gsap from "gsap"

export const projectsAnimation = (ref) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

  tl.fromTo(
    ref.current.querySelector(".projects-title-block"),
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.8 }
  )

  tl.fromTo(
    ref.current.querySelectorAll(".project-card"),
    { scale: 0.95, opacity: 0, y: 30 },
    { scale: 1, opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
    "-=0.4"
  )
}

