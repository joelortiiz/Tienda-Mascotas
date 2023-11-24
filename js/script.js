let logo = document.getElementById("logo");
const title = document.getElementById("title");
const titlecontainer = document.getElementById("container_title");
const article = document.getElementById("article");

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

logo.addEventListener("click", animationLogo)
logo.addEventListener("animationend", animationLogoQuit)
titlecontainer.addEventListener("animationstart", animationTitleColor)
article.addEventListener("animationend", animationArticleLoop)