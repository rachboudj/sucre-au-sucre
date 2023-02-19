const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");

burgerButton.addEventListener('click', () => {
    console.log('ça clique');
    burgerButton.classList.toggle("active");
    burgerMenu.classList.toggle("active");
})