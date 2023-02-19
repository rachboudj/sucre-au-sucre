const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
// const ancreBurger = document.querySelector(".ancre-burger");

// ancreBurger.addEventListener('click', () => {
//     console.log('cliiiiique');
//     burgerMenu.style.top = "-130vh";
// })

burgerButton.addEventListener('click', () => {
    console.log('ça clique');
    burgerMenu.classList.toggle("active");
})