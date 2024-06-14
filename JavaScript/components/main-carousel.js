//FASE - 1
//1 - acessar janela do browser
//2 - Ler todo html 
//3 - pegar o botão arrow
//4 - saber que está sendo clicado

//FASE - 2 
//5 - acessar janela do browser
//6 - ler todo html
//7 - pegar o "scroll-carousel"
//8 - mover o scroll-carousel no eixo X para direita

const ButtonRigth = window.document.querySelector (".button-arrow.-rigth");
const ButtonLeft = window.document.querySelector (".button-arrow.-left");
const ScrollCarousel = window.document.querySelector (".scroll-carousel");
let MoveSide = 100;

ButtonRigth.addEventListener("click", function() {
    MoveSide = MoveSide - 100;
    ScrollCarousel.style = `transform: translateX(${MoveSide}px)`;
});

ButtonLeft.addEventListener("click", function() {
    MoveSide = MoveSide + 100;
    ScrollCarousel.style = `transform: translateX(${MoveSide}px)`
})