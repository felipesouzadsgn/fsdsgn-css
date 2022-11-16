SVGInject(document.querySelectorAll("img.svg"));


const heroCircleMd = document.querySelector(".skills__circle-md"),
    heroCircleLg = document.querySelector(".skills__circle-lg"),
    heroCircleSm = document.querySelector(".skills__circle-sm")

const heroSocialSm = document.querySelector(".social-sm"),
    heroSocialMd = document.querySelector(".social-md"),
    heroSocialLg = document.querySelector(".social-lg")


const tapHereLeft = document.querySelector(".tap-here-left")
const tapHereRight = document.querySelector(".tap-here-right")


if (heroCircleSm) {
    heroCircleSm.addEventListener("click", () => {
        tapHereRight.classList.remove("hidden")
        heroSocialLg.classList.remove("show")
        heroSocialMd.classList.remove("show")
        heroCircleLg.classList.toggle("show")
        heroCircleMd.classList.toggle("show")
        tapHereLeft.classList.toggle("hidden")
    })
}


if (heroSocialSm) {
    heroSocialSm.addEventListener("click", () => {
        tapHereLeft.classList.remove("hidden")
        heroCircleLg.classList.remove("show")
        heroCircleMd.classList.remove("show")
        heroSocialLg.classList.toggle("show")
        heroSocialMd.classList.toggle("show")
        tapHereRight.classList.toggle("hidden")
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    tl.fromTo(
        ".loading", { duration: 3, height: "100vh", ease: "expo.out" }, { duration: 0.7, height: "-100vh", delay: 10, opacity: 0 }
    )

})