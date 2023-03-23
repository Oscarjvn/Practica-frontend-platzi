
//variables para manipular el menu desktop
const desktopMenuEmail = document.getElementById("desktopMenuEmail");
const desktopMenu = document.querySelector(".desktop-menu");

//variables para manipular el menu mobile
const botonMenuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//varibles del aside shopping cart
const cartButton = document.querySelector(".cart-icon");
const asideOrders = document.querySelector(".aside-container")

//variables para los productos
const productCardsContainer = document.querySelector(".cards-container");

//variables para desplegar el asideDetailCard
const asideDescriptionContainer = document.getElementById("aside-container")
const asideDescriptionContainerCloseImage = document.querySelector(".close-image")





console.log(desktopMenuEmail, desktopMenu)

//estas son las declaracion de funciones para abrir o cerrar las pantallas del documento(class list me permite agregar o desaparecer las clases de un elemento que este seleccionado)
function toggleDesktopMenu(){
    hideAsideDescriptionContainer()
    asideOrders.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
}


function toggleMobilepMenu(){
    hideAsideDescriptionContainer()
    asideOrders.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
}

function toggleAsideCart(){  
    hideAsideDescriptionContainer()
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    asideOrders.classList.toggle("inactive")
  

}

//los eventlistener para disparar las funciones
desktopMenuEmail.addEventListener("click", toggleDesktopMenu)
botonMenuMobile.addEventListener("click", toggleMobilepMenu)
cartButton.addEventListener("click", toggleAsideCart)

//logica para agregar productos a traves de un array al html simulando el consumo de un apirest

let productList = [];
productList.push({
    name: "Honda Nsx",
    price: 30000,
    image: "https://rare-gallery.com/mocahbig/85393-acura-nsx-honda-cars-hd-4k.jpg",
})

productList.push({
    name: "Mazda RX7",
    price: 25000,
    image: "https://www.fastcar.co.uk/wp-content/uploads/sites/2/Rocket-Bunny-FC-RX-7-14.jpg?w=900",
})

productList.push({
    name: "Nissan R32",
    price: 45000,
    image: "https://cdn1.mecum.com/auctions/ca0822/ca0822-532316/images/1-1658871749103@2x.jpg?1660951736000",
})





/*             <div class="product-container">
                <img src="https://rare-gallery.com/mocahbig/85393-acura-nsx-honda-cars-hd-4k.jpg" alt="nsx">*
        
                <div class="princing-container">
                    <div class="product-info">
                        <p>50,000$</p>
                        <p>Honda nsx</p>
                    </div>
                    <figure>
                        <img src="./Platzi_YardSale_Icons/bt_add_to_cart.svg" alt="cart">
                    </figure>
                </div>
            </div> */

for(let product of productList){
   
    let productContainer = document.createElement("div");
    productContainer.classList.add("product-container")

    let productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)
    productImg.addEventListener("click", showAsideDescriptionContainer)

    let princingContainer = document.createElement("div")
    princingContainer.classList.add("princing-container")
    
    productContainer.append(productImg, princingContainer)

    let productInfo = document.createElement("div");
    productInfo.classList.add("product-info")

    let p1 = document.createElement("p")
    p1.textContent = product.price
    let p2 = document.createElement("p")
    p2.textContent = product.name

    productInfo.append(p1, p2)

    let figure = document.createElement("figure")
    let cartIcon = document.createElement("img")
    cartIcon.setAttribute("src", "./Platzi_YardSale_Icons/bt_add_to_cart.svg")
    figure.appendChild(cartIcon)

    princingContainer.append(productInfo, figure)

    productCardsContainer.appendChild(productContainer)

}   

    
 function showAsideDescriptionContainer(){
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    asideOrders.classList.add("inactive")
    asideDescriptionContainer.classList.remove("inactive")
    }

    
    asideDescriptionContainerCloseImage.addEventListener("click", hideAsideDescriptionContainer);
    
    function hideAsideDescriptionContainer(){

        asideDescriptionContainer.classList.add("inactive")
    }


console.log(productList)