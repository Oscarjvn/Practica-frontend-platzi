
//variables para manipular el menu desktop
const desktopMenuEmail = document.getElementById("desktopMenuEmail");
const desktopMenu = document.querySelector(".desktop-menu");

//variables para manipular el menu mobile
const botonMenuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//varibles del aside shopping cart
const cartButton = document.querySelector(".cart-icon");
const asideOrders = document.querySelector(".aside-container")



console.log(desktopMenuEmail, desktopMenu)

//estas son las declaracion de funciones para abrir o cerrar las pantallas del documento(class list me permite agregar o desaparecer las clases de un elemento que este seleccionado)
function toggleDesktopMenu(){
    asideOrders.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
}


function toggleMobilepMenu(){
    asideOrders.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
}

function toggleAsideCart(){  
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    asideOrders.classList.toggle("inactive")
  

}

//los eventlistener para disparar las funciones
desktopMenuEmail.addEventListener("click", toggleDesktopMenu)
botonMenuMobile.addEventListener("click", toggleMobilepMenu)
cartButton.addEventListener("click", toggleAsideCart)