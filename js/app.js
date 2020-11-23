let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu'); 
var activador = true;


btnMenu.addEventListener('click', (event) => {

    //icono X en el menu
    barIconX.classList.toggle('fa-times');

    if(activador){
        menu.style.left = '0%';
        menu.style.transition = '0.5s';

        activador = false;
    
    } else {
        activador = false;
        menu.style.left = '-100%';
        activador = true
    }
});

//agrrega la clase active
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (element) => {
    element.addEventListener('click', (event) => {
        enlaces.forEach( (link) => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    });
})

//efecto Scroll
let previousScrollPosition = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {

    //mostrar y esconder menu Scroll
    let currentScrollPosition = window.pageYOffset;

    if ( previousScrollPosition > currentScrollPosition){
        menuContent.style.top = '0px';
        menuContent.style.transition = '0.5s';
    
    } else {
        menuContent.style.top = '-60px';
        menuContent.style.transition = '0.5s';
    }
    previousScrollPosition = currentScrollPosition;

    let arriba = window.pageYOffset;
    if (arriba <= 600){
        menuContent.style.borderBottom = 'none';
        //ocultar goTop
        goTop.style.right = '-100px';
    } else {
        menuContent.style.borderBottom = '3px solid #ff2e63';
        //mostrar gotop
        goTop.style.right = '0px';
    }
} 
goTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});
