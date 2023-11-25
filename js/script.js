let logo = document.getElementById("logo");
const title = document.getElementById("title");
const titlecontainer = document.getElementById("container_title");
const article = document.getElementById("article");
const logoRazas = document.getElementById("bop");
const logocat = document.getElementById("logocat");

const animationLogo =()=> {
    logo.classList.add("logo__animation");
}
const animationLogoQuit =()=> {
    logo.classList.remove("logo__animation");
}
const animationTitleColor =()=> {
    title.style.animationName("titleanimation2");
}
const animationArticleLoop =()=> {
    // article.classList.add("animationloop");
}
const animationlogocat =()=> {
    console.log("lao")
    logoRazas.classList.remove("logocatanimation-display")
    logoRazas.classList.add("logocatanimation")
}
const deleteAnimationcat =()=> {
    logoRazas.classList.remove("logocatanimation")
    logoRazas.classList.add("logocatanimation-display")
}
logo.addEventListener("click", animationLogo)
logo.addEventListener("animationend", animationLogoQuit)
titlecontainer.addEventListener("animationstart", animationTitleColor)
//article.addEventListener("animationend", animationArticleLoop)
logocat.addEventListener("click", animationlogocat)
logoRazas.addEventListener("animationend", deleteAnimationcat)