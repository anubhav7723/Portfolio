import gsap from "gsap"

export const homeAnimation = (ref) => {
  gsap.fromTo(
    ref.current.querySelector(".hero-title"),
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  )

  gsap.fromTo(
    ref.current.querySelector(".hero-sub"),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 0.4 }
  )
}
