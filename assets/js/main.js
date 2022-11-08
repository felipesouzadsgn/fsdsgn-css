SVGInject(document.querySelectorAll("img.svg"));

const heroCircleMd = document.querySelector(".hero__circle-md")
const heroCircleLg = document.querySelector(".hero__circle-lg")
const heroCircleSm = document.querySelector(".hero__circle-sm")

const heroSocialSm = document.querySelector(".hero__social-sm")
const heroSocialMd = document.querySelector(".hero__social-md")
const heroSocialLg = document.querySelector(".hero__social-lg")

if (heroCircleSm) {
    heroCircleSm.addEventListener("click", () => {
        heroSocialLg.classList.remove("show")
        heroSocialMd.classList.remove("show")
        heroCircleLg.classList.toggle("show")
        heroCircleMd.classList.toggle("show")
    })
}


if (heroSocialSm) {
    heroSocialSm.addEventListener("click", () => {
        heroCircleLg.classList.remove("show")
        heroCircleMd.classList.remove("show")
        heroSocialLg.classList.toggle("show")
        heroSocialMd.classList.toggle("show")
    })
}