const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive');
} //lo que dice aqui es que cada vez que se le de click al mail en el menu mostrará el menu desktop