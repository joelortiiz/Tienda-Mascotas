let logo = document.getElementById("logo");

const animationLogo =()=> {
    logo.classList.add("logo__animation");
}
const animationLogoQuit =()=> {
    logo.classList.remove("logo__animation");
}

logo.addEventListener("click", animationLogo)
logo.addEventListener("animationend", animationLogoQuit)