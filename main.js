const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const mobileMenuActivator = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu'); 


menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuActivator.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive');
} //lo que dice aqui es que cada vez que se le de click al mail en el menu mostrará el menu desktop

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
} //lo que dice aqui es que cada vez que se le de click al mail en el menu mostrará el menu mobile