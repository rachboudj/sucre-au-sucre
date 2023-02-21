const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
const ancreBurger = document.querySelector(".ancre-burger");

function openMenu() {
    if (burgerButton) {
        console.log("clique sur le btn burgeeer");
            burgerMenu.classList.toggle("active");
    }
}