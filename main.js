const desktopMenuEmail = document.getElementById("desktopMenuEmail")
const desktopMenu = document.querySelector(".inactive")

desktopMenuEmail.addEventListener("click", toggleDesktopMenu)
console.log(desktopMenuEmail, desktopMenu)
function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}
