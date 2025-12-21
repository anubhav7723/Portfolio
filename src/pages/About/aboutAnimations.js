import gsap from "gsap"

export const aboutAnimation = (ref) => {
  gsap.from(ref.current.children, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.3,
  })
}
